"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WAProto_1 = require("../../WAProto")
const Types_1 = require("../Types")
const messages_1 = require("../Utils/messages")
const WABinary_1 = require("../WABinary")
const crypto_1 = require("./crypto")
const generics_1 = require("./generics")
const history_1 = require("./history")

const REAL_MSG_STUB_TYPES = new Set([
    Types_1.WAMessageStubType.CALL_MISSED_GROUP_VIDEO,
    Types_1.WAMessageStubType.CALL_MISSED_GROUP_VOICE,
    Types_1.WAMessageStubType.CALL_MISSED_VIDEO,
    Types_1.WAMessageStubType.CALL_MISSED_VOICE
])

const REAL_MSG_REQ_ME_STUB_TYPES = new Set([
    Types_1.WAMessageStubType.GROUP_PARTICIPANT_ADD
])

/** Cleans a received message to further processing */
const cleanMessage = (message, meId) => {
    // ensure remoteJid and participant doesn't have device or agent in it
    message.key.remoteJid = WABinary_1.jidNormalizedUser(message.key.remoteJid)
    message.key.participant = message.key.participant ? WABinary_1.jidNormalizedUser(message.key.participant) : undefined
    const content = messages_1.normalizeMessageContent(message.message)
    // if the message has a reaction, ensure fromMe & remoteJid are from our perspective
    if (content?.reactionMessage) {
        normaliseKey(content.reactionMessage.key)
    }
    if (content?.pollUpdateMessage) {
        normaliseKey(content.pollUpdateMessage.pollCreationMessageKey)
    }
    function normaliseKey(msgKey) {
        // if the reaction is from another user
        // we've to correctly map the key to this user's perspective
        if (!message.key.fromMe) {
            // if the sender believed the message being reacted to is not from them
            // we've to correct the key to be from them, or some other participant
            msgKey.fromMe = !msgKey.fromMe
                ? WABinary_1.areJidsSameUser(msgKey.participant || msgKey.remoteJid, meId)
                // if the message being reacted to, was from them
                // fromMe automatically becomes false
                : false
            // set the remoteJid to being the same as the chat the message came from
            msgKey.remoteJid = message.key.remoteJid
            // set participant of the message
            msgKey.participant = msgKey.participant || message.key.participant
        }
    }
}

const isRealMessage = (message, meId) => {
    const normalizedContent = messages_1.normalizeMessageContent(message.message)
    const hasSomeContent = !!messages_1.getContentType(normalizedContent)
    return (
        !!normalizedContent ||
        REAL_MSG_STUB_TYPES.has(message.messageStubType) ||
        (
            REAL_MSG_REQ_ME_STUB_TYPES.has(message.messageStubType) &&
            message.messageStubParameters?.some(p => WABinary_1.areJidsSameUser(meId, p))
        )
    ) &&
    hasSomeContent &&
    !normalizedContent?.protocolMessage &&
    !normalizedContent?.reactionMessage &&
    !normalizedContent?.pollUpdateMessage
}

const shouldIncrementChatUnread = (message) => (!message.key.fromMe && !message.messageStubType)

/**
 * Get the ID of the chat from the given key.
 * Typically -- that'll be the remoteJid, but for broadcasts, it'll be the participant
 */
const getChatId = ({ remoteJid, participant, fromMe }) => {
    if (WABinary_1.isJidBroadcast(remoteJid)
        && !WABinary_1.isJidStatusBroadcast(remoteJid)
        && !fromMe) {
        return participant
    }
    return remoteJid
}

/**
 * Decrypt a poll vote
 * @param vote encrypted vote
 * @param ctx additional info about the poll required for decryption
 * @returns list of SHA256 options
 */
function decryptPollVote({ encPayload, encIv }, { pollCreatorJid, pollMsgId, pollEncKey, voterJid, }) {
    const sign = Buffer.concat([
        toBinary(pollMsgId),
        toBinary(pollCreatorJid),
        toBinary(voterJid),
        toBinary('Poll Vote'),
        new Uint8Array([1])
    ])
    const key0 = crypto_1.hmacSign(pollEncKey, new Uint8Array(32), 'sha256')
    const decKey = crypto_1.hmacSign(sign, key0, 'sha256')
    const aad = toBinary(`${pollMsgId}\u0000${voterJid}`)
    const decrypted = crypto_1.aesDecryptGCM(encPayload, decKey, encIv, aad)
    return WAProto_1.proto.Message.PollVoteMessage.decode(decrypted)
    function toBinary(txt) {
        return Buffer.from(txt)
    }
}

const processMessage = async (message, { shouldProcessHistoryMsg, placeholderResendCache, ev, creds, keyStore, logger, options, getMessage }) => {
    const meId = creds.me.id
    const { accountSettings } = creds
    const chat = { id: WABinary_1.jidNormalizedUser(getChatId(message.key)) }
    const isRealMsg = isRealMessage(message, meId)
    if (isRealMsg) {
        chat.messages = [{ message }]
        chat.conversationTimestamp = generics_1.toNumber(message.messageTimestamp)
        // only increment unread count if not CIPHERTEXT and from another person
        if (shouldIncrementChatUnread(message)) {
            chat.unreadCount = (chat.unreadCount || 0) + 1
        }
    }
    const content = messages_1.normalizeMessageContent(message.message)
    // unarchive chat if it's a real message, or someone reacted to our message
    // and we've the unarchive chats setting on
    if (isRealMsg || content?.reactionMessage?.key?.fromMe
        && accountSettings?.unarchiveChats) {
        chat.archived = false
        chat.readOnly = false
    }
    const protocolMsg = content?.protocolMessage
    if (protocolMsg) {
        switch (protocolMsg.type) {
            case WAProto_1.proto.Message.ProtocolMessage.Type.HISTORY_SYNC_NOTIFICATION:
                const histNotification = protocolMsg.historySyncNotification
                const process = shouldProcessHistoryMsg
                const isLatest = !creds.processedHistoryMessages?.length
                logger?.info({
                    histNotification,
                    process,
                    id: message.key.id,
                    isLatest,
                }, 'got history notification')
                if (process) {
                    if (histNotification.syncType !== WAProto_1.proto.HistorySync.HistorySyncType.ON_DEMAND) {
                        ev.emit('creds.update', {
                            processedHistoryMessages: [
                                ...(creds.processedHistoryMessages || []),
                                { key: message.key, messageTimestamp: message.messageTimestamp }
                            ]
                        })
                    }
                    const data = await history_1.downloadAndProcessHistorySyncNotification(histNotification, options)
                    ev.emit('messaging-history.set', {
                        ...data,
                        isLatest: histNotification.syncType !== WAProto_1.proto.HistorySync.HistorySyncType.ON_DEMAND
                            ? isLatest
                            : undefined,
                        peerDataRequestSessionId: histNotification.peerDataRequestSessionId
                    })
                }
                break
            case WAProto_1.proto.Message.ProtocolMessage.Type.APP_STATE_SYNC_KEY_SHARE:
                const keys = protocolMsg.appStateSyncKeyShare.keys
                if (keys?.length) {
                    let newAppStateSyncKeyId = ''
                    await keyStore.transaction(async () => {
                        const newKeys = []
                        for (const { keyData, keyId } of keys) {
                            const strKeyId = Buffer.from(keyId.keyId).toString('base64')
                            newKeys.push(strKeyId)
                            await keyStore.set({ 'app-state-sync-key': { [strKeyId]: keyData } })
                            newAppStateSyncKeyId = strKeyId
                        }
                        logger?.info({ newAppStateSyncKeyId, newKeys }, 'injecting new app state sync keys')
                    })
                    ev.emit('creds.update', { myAppStateKeyId: newAppStateSyncKeyId })
                }
                else {
                    logger?.info({ protocolMsg }, 'recv app state sync with 0 keys')
                }
                break
            case WAProto_1.proto.Message.ProtocolMessage.Type.REVOKE:
                ev.emit('messages.update', [
                    {
                        key: {
                            ...message.key,
                            id: protocolMsg.key.id
                        },
                        update: { message: null, messageStubType: Types_1.WAMessageStubType.REVOKE, key: message.key }
                    }
                ])
                break
            case WAProto_1.proto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING:
                Object.assign(chat, {
                    ephemeralSettingTimestamp: generics_1.toNumber(message.messageTimestamp),
                    ephemeralExpiration: protocolMsg.ephemeralExpiration || null
                })
                break
            case WAProto_1.proto.Message.ProtocolMessage.Type.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE:
                const response = protocolMsg.peerDataOperationRequestResponseMessage
                if (response) {
                    placeholderResendCache?.del(response.stanzaId)
                    // TODO: IMPLEMENT HISTORY SYNC ETC (sticker uploads etc.).
                    const { peerDataOperationResult } = response
                    for (const result of peerDataOperationResult) {
                        const { placeholderMessageResendResponse: retryResponse } = result
                        //eslint-disable-next-line max-depth
                        if (retryResponse) {
                            const webMessageInfo = WAProto_1.proto.WebMessageInfo.decode(retryResponse.webMessageInfoBytes)
                            // wait till another upsert event is available, don't want it to be part of the PDO response message
                            setTimeout(() => {
                                ev.emit('messages.upsert', {
                                    messages: [webMessageInfo],
                                    type: 'notify',
                                    requestId: response.stanzaId
                                })
                            }, 500)
                        }
                    }
                }
                break
            case WAProto_1.proto.Message.ProtocolMessage.Type.MESSAGE_EDIT:
                ev.emit('messages.update', [
                    {
                        // flip the sender / fromMe properties because they're in the perspective of the sender
                        key: { ...message.key, id: protocolMsg.key?.id },
                        update: {
                            message: {
                                editedMessage: {
                                    message: protocolMsg.editedMessage
                                }
                            },
                            messageTimestamp: protocolMsg.timestampMs
                                ? Math.floor(generics_1.toNumber(protocolMsg.timestampMs) / 1000)
                                : message.messageTimestamp
                        }
                    }
                ])
                break
        }
    }
    else if (content?.reactionMessage) {
        const reaction = {
            ...content.reactionMessage,
            key: message.key,
        }
        ev.emit('messages.reaction', [{
                reaction,
                key: content.reactionMessage?.key
            }])
    }
    else if (message.messageStubType) {
        const jid = message.key?.remoteJid
        //let actor = whatsappID (message.participant)
        let participants
        const emitParticipantsUpdate = (action) => (ev.emit('group-participants.update', { id: jid, author: message.participant, participants, action }))
        const emitGroupUpdate = (update) => {
            ev.emit('groups.update', [{ id: jid, ...update, author: message.participant ? message.participant : undefined }])
        }
        const emitGroupRequestJoin = (participant, action, method) => {
            ev.emit('group.join-request', { id: jid, author: message.participant, participant, action, method: method })
        }
        const participantsIncludesMe = () => participants.find(jid => WABinary_1.areJidsSameUser(meId, jid))
        switch (message.messageStubType) {
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_CHANGE_NUMBER:
                participants = message.messageStubParameters || []
                emitParticipantsUpdate('modify')
                break
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
                participants = message.messageStubParameters || []
                emitParticipantsUpdate('remove')
                // mark the chat read only if you left the group
                if (participantsIncludesMe()) {
                    chat.readOnly = true
                }
                break
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_ADD:
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_INVITE:
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN:
                participants = message.messageStubParameters || []
                if (participantsIncludesMe()) {
                    chat.readOnly = false
                }
                emitParticipantsUpdate('add')
                break
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_DEMOTE:
                participants = message.messageStubParameters || []
                emitParticipantsUpdate('demote')
                break
            case Types_1.WAMessageStubType.GROUP_PARTICIPANT_PROMOTE:
                participants = message.messageStubParameters || []
                emitParticipantsUpdate('promote')
                break
            case Types_1.WAMessageStubType.GROUP_CHANGE_ANNOUNCE:
                const announceValue = message.messageStubParameters?.[0]
                emitGroupUpdate({ announce: announceValue === 'true' || announceValue === 'on' })
                break
            case Types_1.WAMessageStubType.GROUP_CHANGE_RESTRICT:
                const restrictValue = message.messageStubParameters?.[0]
                emitGroupUpdate({ restrict: restrictValue === 'true' || restrictValue === 'on' })
                break
            case Types_1.WAMessageStubType.GROUP_CHANGE_SUBJECT:
                const name = message.messageStubParameters?.[0]
                chat.name = name
                emitGroupUpdate({ subject: name })
                break
            case Types_1.WAMessageStubType.GROUP_CHANGE_DESCRIPTION:
                const description = message.messageStubParameters?.[0]
                chat.description = description
                emitGroupUpdate({ desc: description })
                break
            case Types_1.WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
                const code = message.messageStubParameters?.[0]
                emitGroupUpdate({ inviteCode: code })
                break
            case Types_1.WAMessageStubType.GROUP_MEMBER_ADD_MODE:
                const memberAddValue = message.messageStubParameters?.[0]
                emitGroupUpdate({ memberAddMode: memberAddValue === 'all_member_add' })
                break
            case Types_1.WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE:
                const approvalMode = message.messageStubParameters?.[0]
                emitGroupUpdate({ joinApprovalMode: approvalMode === 'on' })
                break
            case Types_1.WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD:
                const participant = message.messageStubParameters?.[0]
                const action = message.messageStubParameters?.[1]
                const method = message.messageStubParameters?.[2]
                emitGroupRequestJoin(participant, action, method)
                break
        }
    }
    else if (content?.pollUpdateMessage) {
        const creationMsgKey = content.pollUpdateMessage.pollCreationMessageKey
        // we need to fetch the poll creation message to get the poll enc key
        const pollMsg = await getMessage(creationMsgKey)
        if (pollMsg) {
            const meIdNormalised = WABinary_1.jidNormalizedUser(meId)
            const pollCreatorJid = generics_1.getKeyAuthor(creationMsgKey, meIdNormalised)
            const voterJid = generics_1.getKeyAuthor(message.key, meIdNormalised)
            const pollEncKey = pollMsg.messageContextInfo?.messageSecret
            try {
                const voteMsg = decryptPollVote(content.pollUpdateMessage.vote, {
                    pollEncKey,
                    pollCreatorJid,
                    pollMsgId: creationMsgKey.id,
                    voterJid,
                })
                ev.emit('messages.update', [
                    {
                        key: creationMsgKey,
                        update: {
                            pollUpdates: [
                                {
                                    pollUpdateMessageKey: message.key,
                                    vote: voteMsg,
                                    senderTimestampMs: content.pollUpdateMessage.senderTimestampMs.toNumber(),
                                }
                            ]
                        }
                    }
                ])
            }
            catch (err) {
                logger?.warn({ err, creationMsgKey }, 'failed to decrypt poll vote')
            }
        }
        else {
            logger?.warn({ creationMsgKey }, 'poll creation message not found, cannot decrypt update')
        }
    }
    if (Object.keys(chat).length > 1) {
        ev.emit('chats.update', [chat])
    }
}

module.exports = {
  cleanMessage, 
  isRealMessage, 
  shouldIncrementChatUnread, 
  getChatId, 
  decryptPollVote, 
  processMessage
}