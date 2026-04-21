"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const S_WHATSAPP_NET = '@s.whatsapp.net'

const OFFICIAL_BIZ_JID = '16505361212@c.us'

const SERVER_JID = 'server@c.us'

const PSA_WID = '0@c.us'

const STORIES_JID = 'status@broadcast'

const META_AI_JID = '13135550002@c.us'

const WAJIDDomains = {
    WHATSAPP: 0,
    LID: 1,
    HOSTED: 128,
    HOSTED_LID: 129
}

const getServerFromDomainType = (initialServer, domainType) => {
    switch (domainType) {
        case WAJIDDomains.LID:
            return 'lid'
        case WAJIDDomains.HOSTED:
            return 'hosted'
        case WAJIDDomains.HOSTED_LID:
            return 'hosted.lid'
        case WAJIDDomains.WHATSAPP:
        default:
            return initialServer
    }
}

const jidEncode = (user, server, device, agent) => {
    return `${user || ''}${!!agent ? `_${agent}` : ''}${!!device ? `:${device}` : ''}@${server}`
}

const jidDecode = (jid) => {
    // todo: investigate how to implement hosted ids in this case
    const sepIdx = typeof jid === 'string' ? jid.indexOf('@') : -1

    if (sepIdx < 0) {
        return undefined
    }

    const server = jid.slice(sepIdx + 1)
    const userCombined = jid.slice(0, sepIdx)
    const [userAgent, device] = userCombined.split(':')
    const [user, agent] = userAgent.split('_')

    let domainType = WAJIDDomains.WHATSAPP

    if (server === 'lid') {
        domainType = WAJIDDomains.LID
    } else if (server === 'hosted') {
        domainType = WAJIDDomains.HOSTED
    } else if (server === 'hosted.lid') {
        domainType = WAJIDDomains.HOSTED_LID
    } else if (agent) {
        domainType = parseInt(agent)
    }
    return {
        server: server,
        user: user,
        domainType,
        device: device ? +device : undefined
    }
}

/** is the jid a user */
const areJidsSameUser = (jid1, jid2) => jidDecode(jid1)?.user === jidDecode(jid2)?.user

/** is the jid Meta AI */
const isJidMetaAI = (jid) => jid?.endsWith('@bot')

/** is the jid a PN user */
const isPnUser = (jid) => jid?.endsWith('@s.whatsapp.net')

/** is the jid a LID */
const isLidUser = (jid) => jid?.endsWith('@lid')

/** is the jid a broadcast */
const isJidBroadcast = (jid) => jid?.endsWith('@broadcast')

/** is the jid a group */
const isJidGroup = (jid) => jid?.endsWith('@g.us')

/** is the jid the status broadcast */
const isJidStatusBroadcast = (jid) => jid === 'status@broadcast'

/** is the jid a newsletter */
const isJidNewsletter = (jid) => jid?.endsWith('@newsletter')

/** is the jid a hosted PN */
const isHostedPnUser = (jid) => jid?.endsWith('@hosted')

/** is the jid a hosted LID */
const isHostedLidUser = (jid) => jid?.endsWith('@hosted.lid')

/** is the jid a bot */
const botRegexp = /^1313555\d{4}$|^131655500\d{2}$/
const isJidBot = (jid) => (jid && botRegexp.test(jid.split('@')[0]) && jid.endsWith('@c.us'))

const jidNormalizedUser = (jid) => {
    const result = jidDecode(jid)
    if (!result) {
        return ''
    }
    const {
        user,
        server
    } = result
    return jidEncode(user, server === 'c.us' ? 's.whatsapp.net' : server)
}

const transferDevice = (fromJid, toJid) => {
    const fromDecoded = jidDecode(fromJid)
    const deviceId = fromDecoded?.device || 0
    const {
        server,
        user
    } = jidDecode(toJid)
    return jidEncode(user, server, deviceId)
}

module.exports = {
    S_WHATSAPP_NET,
    OFFICIAL_BIZ_JID,
    SERVER_JID,
    PSA_WID,
    STORIES_JID,
    META_AI_JID,
    WAJIDDomains,
    jidEncode,
    jidDecode,
    areJidsSameUser,
    isJidMetaAI,
    isPnUser,
    isLidUser,
    isJidBroadcast,
    isJidGroup,
    isJidStatusBroadcast,
    isJidNewsletter,
    isHostedPnUser,
    isHostedLidUser,
    isJidBot,
    transferDevice,
    jidNormalizedUser,
    getServerFromDomainType
}