"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    Boom
} = require("@hapi/boom")
const {
    proto
} = require("../../WAProto")
const {
    areJidsSameUser,
    isHostedLidUser,
    isHostedPnUser,
    isJidBroadcast,
    isJidGroup,
    isJidMetaAI,
    isJidNewsletter,
    isJidStatusBroadcast,
    isLidUser,
    isPnUser,
    getBinaryNodeChild
} = require("../WABinary")
const {
    decryptBotMessage
} = require("./messages-secret")
const {
    unpadRandomMax16
} = require("./generics")
const {
    getDevice
} = require("./messages")

const NO_MESSAGE_FOUND_ERROR_TEXT = 'Message absent from node'

const MISSING_KEYS_ERROR_TEXT = 'Key used already or never filled'

// Retry configuration for failed decryption
const DECRYPTION_RETRY_CONFIG = {
    maxRetries: 3,
    baseDelayMs: 100,
    sessionRecordErrors: ['No session record', 'SessionError: No session record']
}

const NACK_REASONS = {
    StaleGroupAddressingMode: 421
    NewChatMessagesCapped: 475,
    ParsingError: 487,
    UnrecognizedStanza: 488,
    UnrecognizedStanzaClass: 489,
    UnrecognizedStanzaType: 490,
    InvalidProtobuf: 491,
    InvalidHostedCompanionStanza: 493,
    MissingMessageSecret: 495,
    SignalErrorOldCounter: 496,
    MessageDeletedOnPeer: 499,
    UnhandledError: 500,
    UnsupportedAdminRevoke: 550,
    UnsupportedLIDGroup: 551,
    DBOperationFailed: 552
}

const extractAddressingContext = (stanza) => {
    let senderAlt
    let recipientAlt

    const sender = stanza.attrs.participant || stanza.attrs.from
    const addressingMode = stanza.attrs.addressing_mode || (sender?.endsWith('lid') ? 'lid' : 'pn')

    if (addressingMode === 'lid') {
        // Message is LID-addressed: sender is LID, extract corresponding PN
        // without device data
        senderAlt = stanza.attrs.participant_pn || stanza.attrs.sender_pn || stanza.attrs.peer_recipient_pn
        recipientAlt = stanza.attrs.recipient_pn
        // with device data
        //if (sender && senderAlt) senderAlt = transferDevice(sender, senderAlt)
    } else {
        // Message is PN-addressed: sender is PN, extract corresponding LID
        // without device data
        senderAlt = stanza.attrs.participant_lid || stanza.attrs.sender_lid || stanza.attrs.peer_recipient_lid
        recipientAlt = stanza.attrs.recipient_lid
        //with device data
        //if (sender && senderAlt) senderAlt = transferDevice(sender, senderAlt)
    }

    return {
        addressingMode,
        senderAlt,
        recipientAlt
    }
}

const getDecryptionJid = async (sender, repository) => {
    if (isLidUser(sender) || isHostedLidUser(sender)) {
        return sender
    }
    const mapped = await repository.lidMapping.getLIDForPN(sender)
    return mapped || sender
}

const storeMappingFromEnvelope = async (stanza, sender, repository, decryptionJid, logger) => {
    // TODO: Handle hosted IDs
    const {
        senderAlt
    } = extractAddressingContext(stanza)

    if (senderAlt && isLidUser(senderAlt) && isPnUser(sender) && decryptionJid === sender) {
        try {
            await repository.lidMapping.storeLIDPNMappings([{
                lid: senderAlt,
                pn: sender
            }])
            await repository.migrateSession(sender, senderAlt)
            logger.debug({
                sender,
                senderAlt
            }, 'Stored LID mapping from envelope')
        } catch (error) {
            logger.warn({
                sender,
                senderAlt,
                error
            }, 'Failed to store LID mapping')
        }
    }
}

/**
 * Decode the received node as a message.
 * @note this will only parse the message, not decrypt it
 */
function decodeMessageNode(stanza, meId, meLid) {
    let msgType
    let chatId
    let author
    let fromMe = false

    const msgId = stanza.attrs.id
    const from = stanza.attrs.from
    const participant = stanza.attrs.participant
    const recipient = stanza.attrs.recipient
    const addressingContext = extractAddressingContext(stanza)
    const isMe = (jid) => areJidsSameUser(jid, meId)
    const isMeLid = (jid) => areJidsSameUser(jid, meLid)

    if (isPnUser(from) || isLidUser(from) || isHostedLidUser(from) || isHostedPnUser(from)) {
        if (recipient && !isJidMetaAI(recipient)) {
            if (!isMe(from) && !isMeLid(from)) {
                throw new Boom('receipient present, but msg not from me', {
                    data: stanza
                })
            }

            if (isMe(from) || isMeLid(from)) {
                fromMe = true
            }

            chatId = recipient
        } else {
            chatId = from
        }

        msgType = 'chat'
        author = from
    } else if (isJidGroup(from)) {
        if (!participant) {
            throw new Boom('No participant in group message')
        }

        if (isMe(participant) || isMeLid(participant)) {
            fromMe = true
        }

        msgType = 'group'
        author = participant
        chatId = from
    } else if (isJidBroadcast(from)) {
        if (!participant) {
            throw new Boom('No participant in group message')
        }

        const isParticipantMe = isMe(participant)

        if (isJidStatusBroadcast(from)) {
            msgType = isParticipantMe ? 'direct_peer_status' : 'other_status'
        } else {
            msgType = isParticipantMe ? 'peer_broadcast' : 'other_broadcast'
        }

        fromMe = isParticipantMe
        chatId = from
        author = participant
    } else if (isJidNewsletter(from)) {
        msgType = 'newsletter'
        chatId = from
        author = from

        if (stanza.attrs?.is_sender) {
            fromMe = true
        }
    } else if (isJidMetaAI(from)) {
        const metaNode = getBinaryNodeChild(stanza, 'meta')
        const targetChatJid = metaNode?.attrs?.target_chat_jid || null
        msgType = 'bot'
        chatId = targetChatJid ? jidNormalizedUser(targetChatJid) : from
        author = from
        fromMe = false
    } else {
        throw new Boom('Unknown message type', {
            data: stanza
        })
    }

    const pushname = stanza?.attrs?.notify

    const key = {
        remoteJid: chatId,
        remoteJidAlt: !isJidGroup(chatId) ? addressingContext.senderAlt : undefined,
        fromMe,
        id: msgId,
        participant: stanza.attrs?.is_sender ? meLid : participant,
        participantAlt: isJidGroup(chatId) ? addressingContext.senderAlt : undefined,
        addressingMode: addressingContext.addressingMode,
        ...(msgType === 'newsletter' && stanza.attrs.server_id ? {
            server_id: stanza.attrs.server_id
        } : {})
    }

    const fullMessage = {
        key,
        category: stanza.attrs.category,
        messageTimestamp: +stanza.attrs.t,
        pushName: pushname,
        platform: getDevice(key.id),
        broadcast: isJidBroadcast(from),
        newsletter: isJidNewsletter(from)
    }

    if (key.fromMe) {
        fullMessage.status = proto.WebMessageInfo.Status.SERVER_ACK
    }

    return {
        fullMessage,
        author,
        sender: msgType === 'chat' ? author : chatId
    }
}

const decryptMessageNode = (stanza, meId, meLid, repository, logger, getMessage) => {
    const {
        fullMessage,
        author,
        sender
    } = decodeMessageNode(stanza, meId, meLid)
    return {
        fullMessage,
        category: stanza.attrs.category,
        author,
        async decrypt() {
            let decryptables = 0

            if (Array.isArray(stanza.content)) {
                const metaNode = getBinaryNodeChild(stanza, 'meta')
                const botNode = getBinaryNodeChild(stanza, 'bot')

                const targetId = metaNode?.attrs?.target_id || null
                const targetSenderRaw = metaNode?.attrs?.target_sender_jid || null
                const botEditType = botNode?.attrs?.edit || null
                const botEditTargetId = botNode?.attrs?.edit_target_id || null

                for (const {
                        tag,
                        attrs,
                        content
                    }
                    of stanza.content) {
                    if (tag === 'verified_name' && content instanceof Uint8Array) {
                        const cert = proto.VerifiedNameCertificate.decode(content)
                        const details = proto.VerifiedNameCertificate.Details.decode(cert.details)

                        fullMessage.verifiedBizName = details.verifiedName
                    }

                    if (tag === 'unavailable' && attrs.type === 'view_once') {
                        fullMessage.key.isViewOnce = true // TODO: remove from here and add a STUB TYPE
                    }

                    if (attrs.count && tag === 'enc') {
                        fullMessage.retryCount = Number(attrs.count)
                    }

                    if (tag !== 'enc' && tag !== 'plaintext') {
                        continue
                    }

                    if (!(content instanceof Uint8Array)) {
                        continue
                    }

                    decryptables += 1

                    let msgBuffer

                    const decryptionJid = await getDecryptionJid(author, repository)

                    if (tag !== 'plaintext') {
                        // TODO: Handle hosted devices
                        await storeMappingFromEnvelope(stanza, author, repository, decryptionJid, logger)
                    }

                    try {
                        const e2eType = tag === 'plaintext' ? 'plaintext' : attrs.type
                        switch (e2eType) {
                            case 'skmsg':
                                msgBuffer = await repository.decryptGroupMessage({
                                    group: sender,
                                    authorJid: author,
                                    msg: content
                                })
                                break
                            case 'pkmsg':
                            case 'msg':
                                msgBuffer = await repository.decryptMessage({
                                    jid: decryptionJid,
                                    type: e2eType,
                                    ciphertext: content
                                })
                                break
                            case 'plaintext':
                                msgBuffer = content
                                break
                            case 'msmsg': {
                                if (!targetId) {
                                    //logger.warn({ key: fullMessage.key }, 'msmsg: target_id tidak ditemukan di <meta>')
                                    fullMessage.messageStubType = proto.WebMessageInfo.StubType.CIPHERTEXT
                                    fullMessage.messageStubParameters = ['Missing target_id in meta']
                                    continue
                                }

                                let targetSenderJID = targetSenderRaw
                                if (!targetSenderJID) {
                                    const senderServer = author?.split('@')?.[1]
                                    targetSenderJID = (senderServer === 'bot' || senderServer === 'c.us') ?
                                        (meLid || meId) :
                                        meId
                                }

                                const decryptMessageID = (
                                    botEditType === 'inner' || botEditType === 'last'
                                ) ? botEditTargetId : fullMessage.key.id

                                const chatJid = fullMessage.key.remoteJid
                                const ms1 = await getMessage({
                                    remoteJid: chatJid,
                                    id: targetId
                                })
                                const messageSecret = ms1?.messageContextInfo?.messageSecret

                                if (!messageSecret) {
                                    /*logger.warn(
                                        { key: fullMessage.key, targetId, chatJid },
                                        'msmsg: messageSecret tidak ditemukan untuk targetId'
                                    )*/
                                    fullMessage.messageStubType = proto.WebMessageInfo.StubType.CIPHERTEXT
                                    fullMessage.messageStubParameters = ['Missing message secret']
                                    continue
                                }

                                const msMsg = proto.MessageSecretMessage.decode(content)

                                if (!msMsg.encIv || !msMsg.encPayload) {
                                    //logger.warn({ key: fullMessage.key }, 'msmsg: encIv atau encPayload kosong')
                                    fullMessage.messageStubType = proto.WebMessageInfo.StubType.CIPHERTEXT
                                    fullMessage.messageStubParameters = ['Invalid MessageSecretMessage']
                                    continue
                                }

                                const plaintext = await decryptBotMessage(
                                    messageSecret,
                                    msMsg,
                                    decryptMessageID,
                                    targetSenderJID,
                                    author
                                )

                                msgBuffer = plaintext
                                break
                            }
                            default:
                                throw new Error(`Unknown e2e type: ${e2eType}`)
                        }

                        let msg
                        if (e2eType === 'msmsg') {
                            msg = proto.Message.decode(msgBuffer)
                        } else {
                            msg = proto.Message.decode(
                                e2eType !== 'plaintext' ? unpadRandomMax16(msgBuffer) : msgBuffer
                            )
                        }

                        msg = msg.deviceSentMessage?.message || msg

                        if (msg.senderKeyDistributionMessage) {
                            try {
                                await repository.processSenderKeyDistributionMessage({
                                    authorJid: author,
                                    item: msg.senderKeyDistributionMessage
                                })
                            } catch (err) {
                                logger.error({
                                    key: fullMessage.key,
                                    err
                                }, 'failed to process sender key distribution message')
                            }
                        }

                        if (fullMessage.message) {
                            Object.assign(fullMessage.message, msg)
                        } else {
                            fullMessage.message = msg
                        }
                    } catch (err) {
                        const errorContext = {
                            key: fullMessage.key,
                            err,
                            messageType: tag === 'plaintext' ? 'plaintext' : attrs.type,
                            sender,
                            author,
                            isSessionRecordError: isSessionRecordError(err)
                        }

                        logger.error(errorContext, 'failed to decrypt message')
                        fullMessage.messageStubType = proto.WebMessageInfo.StubType.CIPHERTEXT
                        fullMessage.messageStubParameters = [err.message.toString()]
                    }
                }
            }

            // if nothing was found to decrypt
            if (!decryptables && !fullMessage.key?.isViewOnce) {
                fullMessage.messageStubType = proto.WebMessageInfo.StubType.CIPHERTEXT
                fullMessage.messageStubParameters = [NO_MESSAGE_FOUND_ERROR_TEXT]
            }
        }
    }
}

/**
 * Utility function to check if an error is related to missing session record
 */
function isSessionRecordError(error) {
    const errorMessage = error?.message || error?.toString() || ''
    return DECRYPTION_RETRY_CONFIG.sessionRecordErrors.some(errorPattern => errorMessage.includes(errorPattern))
}

module.exports = {
    NACK_REASONS,
    decodeMessageNode,
    decryptMessageNode,
    extractAddressingContext,
    MISSING_KEYS_ERROR_TEXT,
    DECRYPTION_RETRY_CONFIG,
    NO_MESSAGE_FOUND_ERROR_TEXT
}