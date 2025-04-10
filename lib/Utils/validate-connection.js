"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const boom_1 = require("@hapi/boom")
const crypto_1 = require("crypto")
const WAProto_1 = require("../../WAProto")
const Defaults_1 = require("../Defaults")
const WABinary_1 = require("../WABinary")
const crypto_2 = require("./crypto")
const generics_1 = require("./generics")
const signal_1 = require("./signal")

const getUserAgent = (config) => {
    return {
        appVersion: {
            primary: config.version[0],
            secondary: config.version[1],
            tertiary: config.version[2],
        },
        platform: WAProto_1.proto.ClientPayload.UserAgent.Platform.WEB,
        releaseChannel: WAProto_1.proto.ClientPayload.UserAgent.ReleaseChannel.RELEASE,
        osVersion: '0.1',
        device: 'Desktop',
        osBuildNumber: '0.1',
        localeLanguageIso6391: 'en',
        mnc: '000',
        mcc: '000',
        localeCountryIso31661Alpha2: config.countryCode,
    }
}

const PLATFORM_MAP = {
    'Mac OS': WAProto_1.proto.ClientPayload.WebInfo.WebSubPlatform.DARWIN,
    'Windows': WAProto_1.proto.ClientPayload.WebInfo.WebSubPlatform.WIN32, 
    'Android': WAProto_1.proto.ClientPayload.WebInfo.WebSubPlatform.WIN_HYBRID
}

const getWebInfo = (config) => {
    let webSubPlatform = WAProto_1.proto.ClientPayload.WebInfo.WebSubPlatform.WEB_BROWSER
    if (config.syncFullHistory && PLATFORM_MAP[config.browser[0]]) {
        webSubPlatform = PLATFORM_MAP[config.browser[0]]
    }
    return { webSubPlatform }
}

const getClientPayload = (config) => {
    const payload = {
        connectType: WAProto_1.proto.ClientPayload.ConnectType.WIFI_UNKNOWN,
        connectReason: WAProto_1.proto.ClientPayload.ConnectReason.USER_ACTIVATED,
        userAgent: getUserAgent(config),
    }
    payload.webInfo = getWebInfo(config)
    return payload
}

const generateLoginNode = (userJid, config) => {
    const { user, device } = WABinary_1.jidDecode(userJid)
    const payload = {
        ...getClientPayload(config),
        passive: false,
        pull: true,
        username: +user,
        device: device,
    }
    return WAProto_1.proto.ClientPayload.fromObject(payload)
}

const getPlatformType = (platform) => {
    const platformType = platform.toUpperCase()
    return WAProto_1.proto.DeviceProps.PlatformType[platformType] || WAProto_1.proto.DeviceProps.PlatformType.DESKTOP
}

const generateRegistrationNode = ({ registrationId, signedPreKey, signedIdentityKey }, config) => {
    // the app version needs to be md5 hashed
    // and passed in
    const appVersionBuf = crypto_1.createHash('md5')
        .update(config.version.join('.')) // join as string
        .digest()
    const companion = {
        os: config.browser[0],
        platformType: getPlatformType(config.browser[1]),
        requireFullSync: config.syncFullHistory,
    }
    const companionProto = WAProto_1.proto.DeviceProps.encode(companion).finish()
    const registerPayload = {
        ...getClientPayload(config),
        passive: false,
        pull: false,
        devicePairingData: {
            buildHash: appVersionBuf,
            deviceProps: companionProto,
            eRegid: generics_1.encodeBigEndian(registrationId),
            eKeytype: Defaults_1.KEY_BUNDLE_TYPE,
            eIdent: signedIdentityKey.public,
            eSkeyId: generics_1.encodeBigEndian(signedPreKey.keyId, 3),
            eSkeyVal: signedPreKey.keyPair.public,
            eSkeySig: signedPreKey.signature,
        },
    }
    return WAProto_1.proto.ClientPayload.fromObject(registerPayload)
}

const configureSuccessfulPairing = (stanza, { advSecretKey, signedIdentityKey, signalIdentities }) => {
    const msgId = stanza.attrs.id
    const pairSuccessNode = WABinary_1.getBinaryNodeChild(stanza, 'pair-success')
    const deviceIdentityNode = WABinary_1.getBinaryNodeChild(pairSuccessNode, 'device-identity')
    const platformNode = WABinary_1.getBinaryNodeChild(pairSuccessNode, 'platform')
    const deviceNode = WABinary_1.getBinaryNodeChild(pairSuccessNode, 'device')
    const businessNode = WABinary_1.getBinaryNodeChild(pairSuccessNode, 'biz')
    if (!deviceIdentityNode || !deviceNode) {
        throw new boom_1.Boom('Missing device-identity or device in pair success node', { data: stanza })
    }
    const bizName = businessNode?.attrs?.name
    const jid = deviceNode.attrs.jid
    const { details, hmac } = WAProto_1.proto.ADVSignedDeviceIdentityHMAC.decode(deviceIdentityNode.content)
    // check HMAC matches
    const advSign = crypto_2.hmacSign(details, Buffer.from(advSecretKey, 'base64'))
    if (Buffer.compare(hmac, advSign) !== 0) {
        throw new boom_1.Boom('Invalid account signature')
    }
    const account = WAProto_1.proto.ADVSignedDeviceIdentity.decode(details)
    const { accountSignatureKey, accountSignature, details: deviceDetails } = account
    // verify the device signature matches
    const accountMsg = Buffer.concat([Buffer.from([6, 0]), deviceDetails, signedIdentityKey.public])
    if (!crypto_2.Curve.verify(accountSignatureKey, accountMsg, accountSignature)) {
        throw new boom_1.Boom('Failed to verify account signature')
    }
    // sign the details with our identity key
    const deviceMsg = Buffer.concat([Buffer.from([6, 1]), deviceDetails, signedIdentityKey.public, accountSignatureKey])
    account.deviceSignature = crypto_2.Curve.sign(signedIdentityKey.private, deviceMsg)
    const identity = signal_1.createSignalIdentity(jid, accountSignatureKey)
    const accountEnc = encodeSignedDeviceIdentity(account, false)
    const deviceIdentity = WAProto_1.proto.ADVDeviceIdentity.decode(account.details)
    const reply = {
        tag: 'iq',
        attrs: {
            to: WABinary_1.S_WHATSAPP_NET,
            type: 'result',
            id: msgId,
        },
        content: [
            {
                tag: 'pair-device-sign',
                attrs: {},
                content: [
                    {
                        tag: 'device-identity',
                        attrs: { 'key-index': deviceIdentity.keyIndex.toString() },
                        content: accountEnc
                    }
                ]
            }
        ]
    }
    const authUpdate = {
        account,
        me: { id: jid, name: bizName },
        signalIdentities: [
            ...(signalIdentities || []),
            identity
        ],
        platform: platformNode?.attrs?.name
    }
    return {
        creds: authUpdate,
        reply
    }
}

const encodeSignedDeviceIdentity = (account, includeSignatureKey) => {
    account = { ...account }
    // set to null if we are not to include the signature key
    // or if we are including the signature key but it is empty
    if (!includeSignatureKey || !account.accountSignatureKey?.length) {
        account.accountSignatureKey = null
    }
    return WAProto_1.proto.ADVSignedDeviceIdentity.encode(account).finish()
}

module.exports = {
  generateLoginNode, 
  generateRegistrationNode, 
  configureSuccessfulPairing, 
  encodeSignedDeviceIdentity
}