"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const S_WHATSAPP_NET = '@s.whatsapp.net'

const OFFICIAL_BIZ_JID = '16505361212@c.us'

const SERVER_JID = 'server@c.us'

const PSA_WID = '0@c.us'

const STORIES_JID = 'status@broadcast'

const META_AI_JID = '13135550002@c.us'

const jidEncode = (user, server, device, agent) => {
    return `${user || ''}${!!agent ? `_${agent}` : ''}${!!device ? `:${device}` : ''}@${server}`
}

const jidDecode = (jid) => {
    const sepIdx = typeof jid === 'string' ? jid.indexOf('@') : -1
    if (sepIdx < 0) {
        return undefined
    }
    const server = jid.slice(sepIdx + 1)
    const userCombined = jid.slice(0, sepIdx)
    const [userAgent, device] = userCombined.split(':')
    const user = userAgent.split('_')[0]
    return {
        server: server,
        user,
        domainType: server === 'lid' ? 1 : 0,
        device: device ? +device : undefined
    }
}

/** is the jid a user */
const areJidsSameUser = (jid1, jid2) => {
    return jidDecode(jid1)?.user === jidDecode(jid2)?.user
}

/** is the jid a user */
const isJidUser = (jid) => jid?.endsWith('@s.whatsapp.net')

/** is the lid a user */
const isLidUser = (jid) => jid?.endsWith('@lid')

/** is the jid a broadcast */
const isJidBroadcast = (jid) => jid?.endsWith('@broadcast')

/** is the jid a group */
const isJidGroup = (jid) => jid?.endsWith('@g.us')

/** is the jid the status broadcast */
const isJidStatusBroadcast = (jid) => jid === 'status@broadcast'

/** is the jid a newsletter */
const isJidNewsletter = (jid) => jid?.endsWith('@newsletter')

/** is the jid a bot */
const botRegexp = /^1313555\d{4}$|^131655500\d{2}$/
const isJidBot = (jid) => (jid && botRegexp.test(jid.split('@')[0]) && jid.endsWith('@c.us'))

const jidNormalizedUser = (jid) => {
    const result = jidDecode(jid)
    if (!result) {
        return ''
    }
    const { user, server } = result
    return jidEncode(user, server === 'c.us' ? 's.whatsapp.net' : server)
}

module.exports = {
  S_WHATSAPP_NET, 
  OFFICIAL_BIZ_JID, 
  SERVER_JID, 
  PSA_WID, 
  STORIES_JID, 
  META_AI_JID, 
  jidEncode, 
  jidDecode, 
  areJidsSameUser, 
  isJidUser, 
  isLidUser, 
  isJidBroadcast, 
  isJidGroup, 
  isJidStatusBroadcast, 
  isJidNewsletter, 
  isJidBot, 
  jidNormalizedUser
}