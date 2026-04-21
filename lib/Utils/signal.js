"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    KEY_BUNDLE_TYPE
} = require("../Defaults/constants")
const {
    S_WHATSAPP_NET,
    getBinaryNodeChild,
    getBinaryNodeChildren,
    getBinaryNodeChildUInt,
    getBinaryNodeChildBuffer,
    assertNodeErrorFree,
    jidDecode,
    getServerFromDomainType,
    WAJIDDomains,
} = require("../WABinary")
const {
    Curve,
    generateSignalPubKey
} = require("./crypto")
const {
    encodeBigEndian
} = require("./generics")

function chunk(array, size) {
    const chunks = []
    for (let i = 0; i < array.length; i += size) {
        chunks.push(array.slice(i, i + size))
    }
    return chunks
}

const createSignalIdentity = (wid, accountSignatureKey) => {
    return {
        identifier: {
            name: wid,
            deviceId: 0
        },
        identifierKey: generateSignalPubKey(accountSignatureKey)
    }
}

const getPreKeys = async ({
    get
}, min, limit) => {
    const idList = []
    for (let id = min; id < limit; id++) {
        idList.push(id.toString())
    }
    return get('pre-key', idList)
}

const generateOrGetPreKeys = (creds, range) => {
    const avaliable = creds.nextPreKeyId - creds.firstUnuploadedPreKeyId
    const remaining = range - avaliable
    const lastPreKeyId = creds.nextPreKeyId + remaining - 1
    const newPreKeys = {}
    if (remaining > 0) {
        for (let i = creds.nextPreKeyId; i <= lastPreKeyId; i++) {
            newPreKeys[i] = Curve.generateKeyPair()
        }
    }
    return {
        newPreKeys,
        lastPreKeyId,
        preKeysRange: [creds.firstUnuploadedPreKeyId, range],
    }
}

const xmppSignedPreKey = (key) => ({
    tag: 'skey',
    attrs: {},
    content: [{
            tag: 'id',
            attrs: {},
            content: encodeBigEndian(key.keyId, 3)
        },
        {
            tag: 'value',
            attrs: {},
            content: key.keyPair.public
        },
        {
            tag: 'signature',
            attrs: {},
            content: key.signature
        }
    ]
})

const xmppPreKey = (pair, id) => ({
    tag: 'key',
    attrs: {},
    content: [{
            tag: 'id',
            attrs: {},
            content: encodeBigEndian(id, 3)
        },
        {
            tag: 'value',
            attrs: {},
            content: pair.public
        }
    ]
})

const parseAndInjectE2ESessions = async (node, repository) => {
    const extractKey = (key) => key ?
        {
            keyId: getBinaryNodeChildUInt(key, 'id', 3),
            publicKey: generateSignalPubKey(getBinaryNodeChildBuffer(key, 'value')),
            signature: getBinaryNodeChildBuffer(key, 'signature')
        } :
        undefined
    const nodes = getBinaryNodeChildren(getBinaryNodeChild(node, 'list'), 'user')

    for (const node of nodes) {
        assertNodeErrorFree(node)
    }

    // Most of the work in repository.injectE2ESession is CPU intensive, not IO
    // So Promise.all doesn't really help here,
    // but blocks even loop if we're using it inside keys.transaction, and it makes it "sync" actually
    // This way we chunk it in smaller parts and between those parts we can yield to the event loop
    // It's rare case when you need to E2E sessions for so many users, but it's possible
    const chunkSize = 100
    const chunks = chunk(nodes, chunkSize)

    for (const nodesChunk of chunks) {
        for (const node of nodesChunk) {
            const signedKey = getBinaryNodeChild(node, 'skey')
            const key = getBinaryNodeChild(node, 'key')
            const identity = getBinaryNodeChildBuffer(node, 'identity')
            const jid = node.attrs.jid
            const registrationId = getBinaryNodeChildUInt(node, 'registration', 4)
            await repository.injectE2ESession({
                jid,
                session: {
                    registrationId: registrationId,
                    identityKey: generateSignalPubKey(identity),
                    signedPreKey: extractKey(signedKey),
                    preKey: extractKey(key)
                }
            })
        }
    }
}

const extractDeviceJids = (result, myJid, myLid, excludeZeroDevices) => {
    const {
        user: myUser,
        device: myDevice
    } = jidDecode(myJid)
    const extracted = []

    for (const userResult of result) {
        const {
            devices,
            id
        } = userResult
        const decoded = jidDecode(id),
            {
                user,
                server
            } = decoded

        let {
            domainType
        } = decoded

        const deviceList = devices?.deviceList

        if (!Array.isArray(deviceList)) continue

        for (const {
                id: device,
                keyIndex,
                isHosted
            }
            of deviceList) {
            if ((!excludeZeroDevices || device !== 0) && // if zero devices are not-excluded, or device is non zero
                ((myUser !== user && myLid !== user) || myDevice !== device) && // either different user or if me user, not this device
                (device === 0 || !!keyIndex) // ensure that "key-index" is specified for "non-zero" devices, produces a bad req otherwise
            ) {
                if (isHosted) {
                    domainType = domainType === WAJIDDomains.LID ? WAJIDDomains.HOSTED_LID : WAJIDDomains.HOSTED
                }
                extracted.push({
                    user,
                    device,
                    domainType,
                    server: getServerFromDomainType(server, domainType)
                })
            }
        }
    }
    return extracted
}

/**
 * get the next N keys for upload or processing
 * @param count number of pre-keys to get or generate
 */
const getNextPreKeys = async ({
    creds,
    keys
}, count) => {
    const {
        newPreKeys,
        lastPreKeyId,
        preKeysRange
    } = generateOrGetPreKeys(creds, count)
    const update = {
        nextPreKeyId: Math.max(lastPreKeyId + 1, creds.nextPreKeyId),
        firstUnuploadedPreKeyId: Math.max(creds.firstUnuploadedPreKeyId, lastPreKeyId + 1)
    }
    await keys.set({
        'pre-key': newPreKeys
    })
    const preKeys = await getPreKeys(keys, preKeysRange[0], preKeysRange[0] + preKeysRange[1])
    return {
        update,
        preKeys
    }
}

const getNextPreKeysNode = async (state, count) => {
    const {
        creds
    } = state
    const {
        update,
        preKeys
    } = await getNextPreKeys(state, count)
    const node = {
        tag: 'iq',
        attrs: {
            xmlns: 'encrypt',
            type: 'set',
            to: S_WHATSAPP_NET,
        },
        content: [{
                tag: 'registration',
                attrs: {},
                content: encodeBigEndian(creds.registrationId)
            },
            {
                tag: 'type',
                attrs: {},
                content: KEY_BUNDLE_TYPE
            },
            {
                tag: 'identity',
                attrs: {},
                content: creds.signedIdentityKey.public
            },
            {
                tag: 'list',
                attrs: {},
                content: Object.keys(preKeys).map(k => xmppPreKey(preKeys[+k], +k))
            },
            xmppSignedPreKey(creds.signedPreKey)
        ]
    }
    return {
        update,
        node
    }
}

module.exports = {
    createSignalIdentity,
    getPreKeys,
    generateOrGetPreKeys,
    xmppSignedPreKey,
    xmppPreKey,
    parseAndInjectE2ESessions,
    extractDeviceJids,
    getNextPreKeys,
    getNextPreKeysNode
}