"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    proto
} = require("../../WAProto")
const {
    WAMessageStubType
} = require("../Types")
const {
    getContentType,
    normalizeMessageContent
} = require("../Utils")
const {
    areJidsSameUser,
    isHostedLidUser,
    isHostedPnUser,
    isJidGroup,
    isJidBroadcast,
    isJidStatusBroadcast,
    isLidUser,
    jidDecode,
    jidEncode,
    jidNormalizedUser
} = require("../WABinary")
const {
    aesDecryptGCM,
    hmacSign
} = require("./crypto")
const {
    getKeyAuthor,
    toNumber
} = require("./generics")
const {
    decryptPollVote,
    decryptEventEdit,
    decryptEventResponse,
    decryptComment,
    decryptReaction
} = require("./messages-secret")
const {
    downloadAndProcessHistorySyncNotification
} = require("./history")

const REAL_MSG_STUB_TYPES = new Set([
    WAMessageStubType.CALL_MISSED_GROUP_VIDEO,
    WAMessageStubType.CALL_MISSED_GROUP_VOICE,
    WAMessageStubType.CALL_MISSED_VIDEO,
    WAMessageStubType.CALL_MISSED_VOICE
])

const REAL_MSG_REQ_ME_STUB_TYPES = new Set([
    WAMessageStubType.GROUP_PARTICIPANT_ADD
])

/** Cleans a received message to further processing */
const cleanMessage = (message, meId, meLid) => {
    // ensure remoteJid and participant doesn't have device or agent in it
    if (isHostedPnUser(message.key.remoteJid) || isHostedLidUser(message.key.remoteJid)) {
        message.key.remoteJid = jidEncode(jidDecode(message.key?.remoteJid)?.user, isHostedPnUser(message.key.remoteJid) ? 's.whatsapp.net' : 'lid')
    } else {
        message.key.remoteJid = jidNormalizedUser(message.key.remoteJid)
    }

    if (isHostedPnUser(message.key.participant) || isHostedLidUser(message.key.participant)) {
        message.key.participant = jidEncode(jidDecode(message.key.participant)?.user, isHostedPnUser(message.key.participant) ? 's.whatsapp.net' : 'lid')
    } else {
        message.key.participant = jidNormalizedUser(message.key.participant)
    }
    const content = normalizeMessageContent(message.message)

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
            msgKey.fromMe = !msgKey.fromMe ?
                areJidsSameUser(msgKey.participant || msgKey.remoteJid, meId) ||
                areJidsSameUser(msgKey.participant || msgKey.remoteJid, meLid) : // if the message being reacted to, was from them
                // fromMe automatically becomes false
                false
            // set the remoteJid to being the same as the chat the message came from
            // TODO: investigate inconsistencies
            msgKey.remoteJid = message.key.remoteJid
            // set participant of the message
            msgKey.participant = msgKey.participant || message.key.participant
        }
    }
}

// TODO: target:audit AUDIT THIS FUNCTION AGAIN
const isRealMessage = (message) => {
    const normalizedContent = normalizeMessageContent(message.message)
    const hasSomeContent = !!getContentType(normalizedContent)
    return ((!!normalizedContent ||
            REAL_MSG_STUB_TYPES.has(message.messageStubType) ||
            REAL_MSG_REQ_ME_STUB_TYPES.has(message.messageStubType)) &&
        hasSomeContent &&
        !normalizedContent?.protocolMessage &&
        !normalizedContent?.reactionMessage &&
        !normalizedContent?.pollUpdateMessage)
}

const shouldIncrementChatUnread = (message) => !message.key.fromMe && !message.messageStubType

/**
 * Get the ID of the chat from the given key.
 * Typically -- that'll be the remoteJid, but for broadcasts, it'll be the participant
 */
const getChatId = ({
    remoteJid,
    participant,
    fromMe
}) => {
    if (isJidBroadcast(remoteJid) &&
        !isJidStatusBroadcast(remoteJid) &&
        !fromMe) {
        return participant
    }
    return remoteJid
}

const processMessage = async (message, {
    shouldProcessHistoryMsg,
    placeholderResendCache,
    ev,
    creds,
    signalRepository,
    keyStore,
    logger,
    options,
    getMessage
}) => {
    const meId = creds.me.id
    const meLid = creds.me.lid
    const {
        accountSettings
    } = creds
    const chat = {
        id: jidNormalizedUser(getChatId(message.key))
    }
    const isRealMsg = isRealMessage(message)
    if (isRealMsg) {
        chat.messages = [{
            message
        }]
        chat.conversationTimestamp = toNumber(message.messageTimestamp)
        // only increment unread count if not CIPHERTEXT and from another person
        if (shouldIncrementChatUnread(message)) {
            chat.unreadCount = (chat.unreadCount || 0) + 1
        }
    }
    const content = normalizeMessageContent(message.message)
    // unarchive chat if it's a real message, or someone reacted to our message
    // and we've the unarchive chats setting on
    if (isRealMsg || content?.reactionMessage?.key?.fromMe &&
        accountSettings?.unarchiveChats) {
        chat.archived = false
        chat.readOnly = false
    }
    const protocolMsg = content?.protocolMessage
    if (protocolMsg) {
        switch (protocolMsg.type) {
            case proto.Message.ProtocolMessage.Type.HISTORY_SYNC_NOTIFICATION:
                const histNotification = protocolMsg.historySyncNotification
                const process = shouldProcessHistoryMsg
                const isLatest = !creds.processedHistoryMessages?.length

                logger?.info({
                    histNotification,
                    process,
                    id: message.key.id,
                    isLatest
                }, 'got history notification')

                if (process) {
                    // TODO: investigate
                    if (histNotification.syncType !== proto.HistorySync.HistorySyncType.ON_DEMAND) {
                        ev.emit('creds.update', {
                            processedHistoryMessages: [
                                ...(creds.processedHistoryMessages || []),
                                {
                                    key: message.key,
                                    messageTimestamp: message.messageTimestamp
                                }
                            ]
                        })
                    }

                    const data = await downloadAndProcessHistorySyncNotification(histNotification, options)
                    ev.emit('messaging-history.set', {
                        ...data,
                        isLatest: histNotification.syncType !== proto.HistorySync.HistorySyncType.ON_DEMAND ? isLatest : undefined,
                        peerDataRequestSessionId: histNotification.peerDataRequestSessionId
                    })
                }
                break
            case proto.Message.ProtocolMessage.Type.APP_STATE_SYNC_KEY_SHARE:
                const keys = protocolMsg.appStateSyncKeyShare.keys

                if (keys?.length) {
                    let newAppStateSyncKeyId = ''

                    await keyStore.transaction(async () => {
                        const newKeys = []

                        for (const {
                                keyData,
                                keyId
                            }
                            of keys) {
                            const strKeyId = Buffer.from(keyId.keyId).toString('base64')

                            newKeys.push(strKeyId)

                            await keyStore.set({
                                'app-state-sync-key': {
                                    [strKeyId]: keyData
                                }
                            })

                            newAppStateSyncKeyId = strKeyId
                        }

                        logger?.info({
                            newAppStateSyncKeyId,
                            newKeys
                        }, 'injecting new app state sync keys')
                    }, meId)
                    ev.emit('creds.update', {
                        myAppStateKeyId: newAppStateSyncKeyId
                    })
                } else {
                    logger?.info({
                        protocolMsg
                    }, 'recv app state sync with 0 keys')
                }
                break
            case proto.Message.ProtocolMessage.Type.REVOKE:
                ev.emit('messages.update', [{
                    key: {
                        ...message.key,
                        id: protocolMsg.key.id
                    },
                    update: {
                        message: null,
                        messageStubType: WAMessageStubType.REVOKE,
                        key: message.key
                    }
                }])
                break
            case proto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING:
                Object.assign(chat, {
                    ephemeralSettingTimestamp: toNumber(message.messageTimestamp),
                    ephemeralExpiration: protocolMsg.ephemeralExpiration || null
                })
                break
            case proto.Message.ProtocolMessage.Type.PEER_DATA_OPERATION_REQUEST_RESPONSE_MESSAGE:
                const response = protocolMsg.peerDataOperationRequestResponseMessage

                if (response) {
                    await placeholderResendCache?.del(response.stanzaId)

                    // TODO: IMPLEMENT HISTORY SYNC ETC (sticker uploads etc.).
                    const {
                        peerDataOperationResult
                    } = response

                    for (const result of peerDataOperationResult) {
                        const {
                            placeholderMessageResendResponse: retryResponse
                        } = result

                        //eslint-disable-next-line max-depth
                        if (retryResponse) {
                            const webMessageInfo = proto.WebMessageInfo.decode(retryResponse.webMessageInfoBytes)
                            // wait till another upsert event is available, don't want it to be part of the PDO response message
                            // TODO: parse through proper message handling utilities (to add relevant key fields)
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
            case proto.Message.ProtocolMessage.Type.MESSAGE_EDIT:
                ev.emit('messages.update', [{
                    // flip the sender / fromMe properties because they're in the perspective of the sender
                    key: {
                        ...message.key,
                        id: protocolMsg.key?.id
                    },
                    update: {
                        message: {
                            editedMessage: {
                                message: protocolMsg.editedMessage
                            }
                        },
                        messageTimestamp: protocolMsg.timestampMs ?
                            Math.floor(toNumber(protocolMsg.timestampMs) / 1000) :
                            message.messageTimestamp
                    }
                }])
                break
            case proto.Message.ProtocolMessage.Type.GROUP_MEMBER_LABEL_CHANGE:
                const labelAssociationMsg = protocolMsg.memberLabel

                if (labelAssociationMsg?.label) {
                    ev.emit('group.member-tag.update', {
                        groupId: chat.id,
                        label: labelAssociationMsg.label,
                        participant: message.key.participant,
                        participantAlt: message.key.participantAlt,
                        messageTimestamp: Number(message.messageTimestamp)
                    })
                }
                break
            case proto.Message.ProtocolMessage.Type.LID_MIGRATION_MAPPING_SYNC:
                const encodedPayload = protocolMsg.lidMigrationMappingSyncMessage?.encodedMappingPayload

                const {
                    pnToLidMappings, chatDbMigrationTimestamp
                } = proto.LIDMigrationMappingSyncPayload.decode(encodedPayload)

                logger?.debug({
                    pnToLidMappings,
                    chatDbMigrationTimestamp
                }, 'got lid mappings and chat db migration timestamp')

                const pairs = []

                for (const {
                        pn,
                        latestLid,
                        assignedLid
                    }
                    of pnToLidMappings) {
                    const lid = latestLid || assignedLid
                    pairs.push({
                        lid: `${lid}@lid`,
                        pn: `${pn}@s.whatsapp.net`
                    })
                }

                await signalRepository.lidMapping.storeLIDPNMappings(pairs)

                if (pairs.length) {
                    for (const {
                            pn,
                            lid
                        }
                        of pairs) {
                        await signalRepository.migrateSession(pn, lid)
                    }
                }
                break
            case proto.Message.ProtocolMessage.Type.LIMIT_SHARING:
                ev.emit('limit-sharing.update', {
                    id: message.key.remoteJid,
                    author: areJidsSameUser(message.key.remoteJid, protocolMsg.key.remoteJid) ? jidNormalizedUser(meId) : message.key.remoteJid,
                    action: `${protocolMsg.limitSharing.sharingLimited ? 'on' : 'off'}`,
                    trigger: protocolMsg.limitSharing.trigger,
                    update_time: protocolMsg.limitSharing.limitSharingSettingTimestamp
                })
                break
        }
    } else if (content?.reactionMessage) {
        const reaction = {
            ...content.reactionMessage,
            key: message.key,
        }
        ev.emit('messages.reaction', [{
            reaction,
            key: content.reactionMessage?.key
        }])
    } else if (message.messageStubType) {
        const jid = message.key?.remoteJid

        let participants

        const emitParticipantsUpdate = (action) => ev.emit('group-participants.update', {
            id: jid,
            author: message.key.participant,
            authorPn: message.key.participantAlt,
            participants,
            action
        })

        const emitGroupUpdate = (update) => {
            ev.emit('groups.update', [{
                id: jid,
                ...update,
                author: message.key.participant ?? undefined,
                authorPn: message.key.participantAlt
            }])
        }

        const emitGroupRequestJoin = (participant, action, method) => {
            ev.emit('group.join-request', {
                id: jid,
                author: message.key.participant,
                authorPn: message.key.participantAlt,
                participant: participant.lid,
                participantPn: participant.pn,
                action,
                method: method
            })
        }

        const participantsIncludesMe = () => participants.find(jid => areJidsSameUser(meId, jid.phoneNumber)) // ADD SUPPORT FOR LID
        switch (message.messageStubType) {
            case WAMessageStubType.GROUP_PARTICIPANT_CHANGE_NUMBER:
                participants = message.messageStubParameters.map((a) => JSON.parse(a)) || []
                emitParticipantsUpdate('modify')
                break
            case WAMessageStubType.GROUP_PARTICIPANT_LEAVE:
            case WAMessageStubType.GROUP_PARTICIPANT_REMOVE:
                participants = message.messageStubParameters.map((a) => JSON.parse(a)) || []
                emitParticipantsUpdate('remove')

                // mark the chat read only if you left the group
                if (participantsIncludesMe()) {
                    chat.readOnly = true
                }
                break
            case WAMessageStubType.GROUP_PARTICIPANT_ADD:
            case WAMessageStubType.GROUP_PARTICIPANT_INVITE:
            case WAMessageStubType.GROUP_PARTICIPANT_ADD_REQUEST_JOIN:
                participants = message.messageStubParameters.map((a) => JSON.parse(a)) || []

                if (participantsIncludesMe()) {
                    chat.readOnly = false
                }

                emitParticipantsUpdate('add')
                break
            case WAMessageStubType.GROUP_PARTICIPANT_DEMOTE:
                participants = message.messageStubParameters.map((a) => JSON.parse(a)) || []
                emitParticipantsUpdate('demote')
                break
            case WAMessageStubType.GROUP_PARTICIPANT_PROMOTE:
                participants = message.messageStubParameters.map((a) => JSON.parse(a)) || []
                emitParticipantsUpdate('promote')
                break
            case WAMessageStubType.GROUP_CHANGE_ANNOUNCE:
                const announceValue = message.messageStubParameters?.[0]
                emitGroupUpdate({
                    announce: announceValue === 'true' || announceValue === 'on'
                })
                break
            case WAMessageStubType.GROUP_CHANGE_RESTRICT:
                const restrictValue = message.messageStubParameters?.[0]
                emitGroupUpdate({
                    restrict: restrictValue === 'true' || restrictValue === 'on'
                })
                break
            case WAMessageStubType.GROUP_CHANGE_SUBJECT:
                const name = message.messageStubParameters?.[0]
                chat.name = name
                emitGroupUpdate({
                    subject: name
                })
                break
            case WAMessageStubType.GROUP_CHANGE_DESCRIPTION:
                const description = message.messageStubParameters?.[0]
                chat.description = description
                emitGroupUpdate({
                    desc: description
                })
                break
            case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
                const code = message.messageStubParameters?.[0]
                emitGroupUpdate({
                    inviteCode: code
                })
                break
            case WAMessageStubType.GROUP_MEMBER_ADD_MODE:
                const memberAddValue = message.messageStubParameters?.[0]
                emitGroupUpdate({
                    memberAddMode: memberAddValue === 'all_member_add'
                })
                break
            case WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_MODE:
                const approvalMode = message.messageStubParameters?.[0]
                emitGroupUpdate({
                    joinApprovalMode: approvalMode === 'on'
                })
                break
            case WAMessageStubType.GROUP_MEMBERSHIP_JOIN_APPROVAL_REQUEST_NON_ADMIN_ADD: // TODO: Add other events
                const participant = JSON.parse(message.messageStubParameters?.[0])
                const action = message.messageStubParameters?.[1]
                const method = message.messageStubParameters?.[2]
                emitGroupRequestJoin(participant, action, method)
                break
        }
    } else if (content?.pollUpdateMessage) {
        const pollUpdate = content.pollUpdateMessage
        const creationMsgKey = pollUpdate.pollCreationMessageKey

        // we need to fetch the poll creation message to get the poll enc key
        const pollMsg = await getMessage(creationMsgKey)
        if (pollMsg) {
            try {
                const meLidNormalised = jidNormalizedUser(meLid)
                const pollEncKey = pollMsg.messageContextInfo?.messageSecret
                const pollCreatorLid = getAuthorLid(creationMsgKey, message.key, meLidNormalised)
                const voterLid = getAuthorLid(message.key, creationMsgKey, meLidNormalised)

                if (!pollEncKey) {
                    logger?.warn({
                        vote: pollUpdate.vote,
                        creationMsgKey
                    }, 'poll creation: missing messageSecret for decryption')
                } else {
                    const voteMsg = await decryptPollVote(pollUpdate.vote, {
                        pollEncKey,
                        pollCreatorLid,
                        pollMsgId: creationMsgKey.id,
                        voterLid
                    })

                    ev.emit('messages.update', [{
                        key: creationMsgKey,
                        update: {
                            pollUpdates: [{
                                pollUpdateMessageKey: message.key,
                                vote: voteMsg,
                                senderTimestampMs: content.pollUpdateMessage.senderTimestampMs.toNumber()
                            }]
                        }
                    }])
                }
            } catch (err) {
                logger?.warn({
                    err,
                    creationMsgKey
                }, 'failed to decrypt poll vote')
            }
        } else {
            logger?.warn({
                creationMsgKey
            }, 'poll creation message not found, cannot decrypt update')
        }
    } else if (content?.secretEncryptedMessage) {
        const encEventEdit = content.secretEncryptedMessage
        const creationMsgKey = encEventEdit.targetMessageKey

        if (proto.Message.SecretEncryptedMessage.SecretEncType[encEventEdit.secretEncType] !== 'EVENT_EDIT') return

        // we need to fetch the event creation message to get the event enc key
        const eventMsg = await getMessage(creationMsgKey)
        if (eventMsg) {
            try {
                const meLidNormalised = jidNormalizedUser(meLid)
                const eventCreatorLid = getAuthorLid(creationMsgKey, message.key, meLidNormalised)
                const responderLid = getAuthorLid(message.key, creationMsgKey, meLidNormalised)
                const eventEncKey = eventMsg.messageContextInfo?.messageSecret

                if (!eventEncKey) {
                    logger?.warn({
                        encEventEdit,
                        creationMsgKey
                    }, 'event edit: missing messageSecret for decryption')
                } else {
                    const responseMsg = await decryptEventEdit(encEventEdit, {
                        eventEncKey,
                        eventCreatorLid,
                        eventMsgId: creationMsgKey.id,
                        responderLid
                    })
                    const content = normalizeMessageContent(responseMsg)
                    const protocolMsg = content?.protocolMessage

                    ev.emit('messages.update', [{
                        key: {
                            ...message.key,
                            id: protocolMsg.key?.id
                        },
                        update: {
                            message: {
                                messageContextInfo: responseMsg.messageContextInfo,
                                editedMessage: {
                                    message: protocolMsg.editedMessage
                                }
                            },
                            messageTimestamp: protocolMsg.timestampMs ?
                                Math.floor(toNumber(protocolMsg.timestampMs) / 1000) :
                                message.messageTimestamp
                        }
                    }])
                }
            } catch (err) {
                logger?.warn({
                    err,
                    creationMsgKey,
                    encEventEdit
                }, 'failed to decrypt event edit')
            }
        } else {
            logger?.warn({
                encEventEdit,
                creationMsgKey
            }, 'event creation message not found, cannot decrypt update')
        }
    } else if (content?.encEventResponseMessage) {
        const encEventResponse = content.encEventResponseMessage
        const creationMsgKey = encEventResponse.eventCreationMessageKey

        // we need to fetch the event creation message to get the event enc key
        const eventMsg = await getMessage(creationMsgKey)
        if (eventMsg) {
            try {
                const meLidNormalised = jidNormalizedUser(meLid)
                const eventCreatorLid = getAuthorLid(creationMsgKey, message.key, meLidNormalised)
                const responderLid = getAuthorLid(message.key, creationMsgKey, meLidNormalised)
                const eventEncKey = eventMsg.messageContextInfo?.messageSecret

                if (!eventEncKey) {
                    logger?.warn({
                        encEventResponse,
                        creationMsgKey
                    }, 'event response: missing messageSecret for decryption')
                } else {
                    const responseMsg = await decryptEventResponse(encEventResponse, {
                        eventEncKey,
                        eventCreatorLid,
                        eventMsgId: creationMsgKey.id,
                        responderLid
                    })

                    const eventResponse = {
                        eventResponseMessageKey: message.key,
                        senderTimestampMs: responseMsg.timestampMs,
                        response: responseMsg
                    }

                    ev.emit('messages.update', [{
                        key: creationMsgKey,
                        update: {
                            eventResponses: [eventResponse]
                        }
                    }])
                }
            } catch (err) {
                logger?.warn({
                    err,
                    creationMsgKey,
                    encEventResponse
                }, 'failed to decrypt event response')
            }
        } else {
            logger?.warn({
                encEventResponse,
                creationMsgKey
            }, 'event creation message not found, cannot decrypt update')
        }
    } else if (content?.encCommentMessage) {
        const encComment = content.encCommentMessage
        const creationMsgKey = encComment.targetMessageKey

        // we need to fetch the message to get the comment enc key
        const commentMsg = await getMessage(creationMsgKey)
        if (commentMsg) {
            try {
                const meLidNormalised = jidNormalizedUser(meLid)
                const commentCreatorLid = getAuthorLid(creationMsgKey, message.key, meLidNormalised)
                const commentLid = getAuthorLid(message.key, creationMsgKey, meLidNormalised)
                const commentEncKey = commentMsg.messageContextInfo?.messageSecret

                if (!commentEncKey) {
                    logger?.warn({
                        encComment,
                        creationMsgKey
                    }, 'comment message: missing messageSecret for decryption')
                } else {
                    const responseMsg = await decryptComment(encComment, {
                        commentEncKey,
                        commentCreatorLid,
                        commentMsgId: creationMsgKey.id,
                        commentLid
                    })

                    ev.emit('messages.upsert', {
                        messages: [{
                            key: message.key,
                            message: responseMsg
                        }],
                        type: 'append'
                    })
                }
            } catch (err) {
                logger?.warn({
                    err,
                    creationMsgKey,
                    encComment
                }, 'failed to decrypt comment message')
            }
        } else {
            logger?.warn({
                encComment,
                creationMsgKey
            }, 'creation message not found, cannot decrypt')
        }
    } else if (content?.encReactionMessage) {
        const encReaction = content.encReactionMessage
        const creationMsgKey = encReaction.targetMessageKey

        // we need to fetch the message to get the reaction enc key
        const reactMsg = await getMessage(creationMsgKey)
        if (reactMsg) {
            try {
                const meLidNormalised = jidNormalizedUser(meLid)
                const reactionCreatorLid = getAuthorLid(creationMsgKey, message.key, meLidNormalised)
                const reactionLid = getAuthorLid(message.key, creationMsgKey, meLidNormalised)
                const reactionEncKey = reactMsg.messageContextInfo?.messageSecret

                if (!reactionEncKey) {
                    logger?.warn({
                        encReaction,
                        creationMsgKey
                    }, 'reaction: missing messageSecret for decryption')
                } else {
                    const responseMsg = await decryptReaction(encReaction, {
                        reactionEncKey,
                        reactionCreatorLid,
                        reactionMsgId: creationMsgKey.id,
                        reactionLid
                    })

                    const Reaction = {
                        key: message.key,
                        message: {
                            reactionMessage: {
                                key: creationMsgKey,
                                text: responseMsg.text,
                                senderTimestampMs: responseMsg.senderTimestampMs
                            }
                        }
                    }

                    ev.emit('messages.upsert', {
                        messages: [Reaction],
                        type: 'append'
                    })
                }
            } catch (err) {
                logger?.warn({
                    err,
                    creationMsgKey,
                    encReaction
                }, 'failed to decrypt reaction')
            }
        } else {
            logger?.warn({
                encReaction,
                creationMsgKey
            }, 'creation message not found, cannot decrypt')
        }
    }
    if (Object.keys(chat).length > 1) {
        ev.emit('chats.update', [chat])
    }
}

function getAuthorLid(key, key2, meLidNormalised) {
    const isGroup = isJidGroup(key?.remoteJid || key2?.remoteJid)
    if (isGroup) {
        const participant = key?.participant || key2?.participant
        return participant ? jidNormalizedUser(participant) : meLidNormalised
    }
    const userLid = key?.participant || key2?.participant || key?.remoteJid || key2?.remoteJid
    return userLid ? jidNormalizedUser(userLid) : meLidNormalised
}

module.exports = {
    cleanMessage,
    isRealMessage,
    shouldIncrementChatUnread,
    getChatId,
    decryptPollVote,
    decryptEventEdit,
    decryptEventResponse,
    decryptComment,
    decryptReaction,
    processMessage
}