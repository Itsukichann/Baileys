"use strict"

/**
 * MessageSecret encryption and decryption helpers for WhatsApp messages.
 *
 * Supports:
 * - Bot messages (msmsg) via encryptBotMessage / decryptBotMessage
 * - Poll votes via encryptPollVote / decryptPollVote
 * - Reactions via encryptReaction / decryptReaction
 * - Comments via encryptComment / decryptComment
 * - Event edits via encryptEventEdit / decryptEventEdit
 * - Event responses via encryptEventResponse / decryptEventResponse
 *
 * Based on the reference implementation in whatsmeow/msgsecret.go:
 * - generateMsgSecretKey → HKDF-SHA256(baseKey, nil, concat(origMsgId, origSender, modSender, useCase), 32)
 * - encryptMsgSecret     → key derivation + AES-256-GCM (12-byte random IV)
 * - decryptMsgSecret     → key derivation + AES-256-GCM decryption
 * - encryptBotMessage    → HKDF("Bot Message") + key derivation + AES-256-GCM (encrypt)
 * - decryptBotMessage    → HKDF("Bot Message") + key derivation + AES-256-GCM (decrypt)
 */

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    randomBytes
} = require("crypto")
const {
    proto
} = require("../../WAProto")
const {
    jidNormalizedUser
} = require("../WABinary")
const {
    aesEncryptGCM,
    aesDecryptGCM,
    sha256,
    hkdf
} = require("./crypto")

const MessageSecretType = {
    POLL_VOTE: 'Poll Vote',
    POLL_EDIT: 'Poll Edit',
    POLL_ADD_OPTION: 'Poll Add Option',
    REACTION: 'Enc Reaction',
    COMMENT: 'Enc Comment',
    REPORT_TOKEN: 'Report Token',
    EVENT_EDIT: 'Event Edit',
    EVENT_RESPONSE: 'Event Response',
    BOT_MESSAGE: 'Bot Message',
    MESSAGE_EDIT: 'Message Edit'
}

const toBin = (txt) => Buffer.from(txt)

/**
 * Derive MessageSecret key and optional AES-GCM AAD.
 *
 * HKDF info = concat(origMsgId + origSender + modSender + useCase)
 * AAD used only for PollVote, and EventResponse
 *
 * @param useCase message secret use case type
 * @param modificationSender JID performing the modification
 * @param origMsgId original message ID
 * @param origMsgSender original message sender JID
 * @param origMsgSecret messageContextInfo.messageSecret
 * @returns secretKey and additionalData (AAD if required)
 */
const generateMsgSecretKey = async (
    useCase,
    modificationSender,
    origMsgId,
    origMsgSender,
    origMsgSecret
) => {
    const origSenderStr = jidNormalizedUser(origMsgSender)
    const modSenderStr = jidNormalizedUser(modificationSender)

    const useCaseSecret = Buffer.concat([
        toBin(origMsgId),
        toBin(origSenderStr),
        toBin(modSenderStr),
        toBin(useCase),
    ])

    const secretKey = await hkdf(origMsgSecret, 32, {
        info: useCaseSecret
    })

    let additionalData = null
    if (
        useCase === MessageSecretType.POLL_VOTE ||
        useCase === MessageSecretType.EVENT_RESPONSE ||
        useCase === ''
    ) {
        additionalData = toBin(`${origMsgId}\x00${modSenderStr}`)
    }

    return {
        secretKey,
        additionalData
    }
}

/**
 * Encrypt payload using MessageSecret scheme (HKDF + AES-256-GCM).
 *
 * @param useCase message secret use case
 * @param ownJid JID of sender performing encryption
 * @param origMsgId original message ID
 * @param origSender original message sender
 * @param baseEncKey messageSecret from original message
 * @param plaintext data to encrypt
 * @returns ciphertext and IV
 */
const encryptMsgSecret = async (useCase, ownJid, origMsgId, origSender, baseEncKey, plaintext) => {
    const {
        secretKey,
        additionalData
    } = await generateMsgSecretKey(
        useCase,
        ownJid,
        origMsgId,
        origSender,
        baseEncKey
    )
    const iv = randomBytes(12)
    const ciphertext = aesEncryptGCM(plaintext, secretKey, iv, additionalData)
    return {
        ciphertext,
        iv
    }
}

/**
 * Decrypt payload using MessageSecret scheme (HKDF + AES-256-GCM).
 *
 * @param useCase message secret use case
 * @param senderJid JID performing the modification/decryption
 * @param origMsgId original message ID
 * @param origSender original message sender
 * @param baseEncKey messageSecret from original message
 * @param payload encrypted payload containing encPayload and encIv
 * @returns decrypted plaintext buffer
 */
const decryptMsgSecret = async (useCase, senderJid, origMsgId, origSender, baseEncKey, {
    encPayload,
    encIv
}) => {
    const {
        secretKey,
        additionalData
    } = await generateMsgSecretKey(
        useCase,
        senderJid,
        origMsgId,
        origSender,
        baseEncKey
    )
    return aesDecryptGCM(encPayload, secretKey, encIv, additionalData)
}

/**
 * Apply HKDF-SHA256 derivation for Bot Message type.
 *
 * @param messageSecret messageContextInfo.messageSecret
 * @returns derived 32-byte key
 */
const applyBotMessageHKDF = async (messageSecret) => {
    return await hkdf(messageSecret, 32, {
        info: toBin(MessageSecretType.BOT_MESSAGE)
    })
}

/**
 * Hash poll option names using SHA-256.
 *
 * @param optionNames list of poll option names
 * @returns list of SHA-256 hashes
 */
const hashPollOptions = (optionNames) =>
    optionNames.map(name => sha256(name))

/**
 * Encrypt a bot message (msmsg) using MessageSecret scheme.
 *
 * Used when sending a bot-generated message targeting an existing message.
 * HKDF("Bot Message") is applied to the messageSecret before key derivation.
 * The encrypted result should be wrapped in proto.MessageSecretMessage.
 *
 * @param messageSecret messageContextInfo.messageSecret from the target message
 * @param plaintext encoded proto.Message buffer to encrypt
 * @param messageID ID of the message being sent (or edit target ID)
 * @param targetSenderJID JID of the original target sender
 * @param senderJID JID of the bot sending the message
 * @returns proto-compatible MessageSecretMessage with encPayload and encIv
 */
const encryptBotMessage = async (
    messageSecret,
    plaintext,
    messageID,
    targetSenderJID,
    senderJID
) => {
    const botHkdfKey = await applyBotMessageHKDF(messageSecret)
    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        '',
        senderJID,
        messageID,
        targetSenderJID,
        botHkdfKey,
        plaintext
    )
    return proto.MessageSecretMessage.create({
        version: 1,
        encPayload: ciphertext,
        encIv: iv
    })
}

/**
 * Encrypt a poll vote in a group or private chat poll message.
 *
 * Used when a participant selects options in a poll created by another user.
 * The encrypted payload contains the hashed selected option names.
 *
 * @param pollKey key of the original poll creation message
 * @param selectedOptions list of option names selected by the voter
 * @param ownLid LID of the user casting the vote (not phone JID)
 * @param pollEncKey messageSecret from the original poll creation message
 * @returns proto-compatible pollUpdateMessage with encrypted vote payload
 */
const encryptPollVote = async (pollKey, selectedOptions, ownLid, pollEncKey) => {
    const voteMsg = proto.Message.PollVoteMessage.create({
        selectedOptions: hashPollOptions(selectedOptions),
    })
    const plaintext = proto.Message.PollVoteMessage.encode(voteMsg).finish()
    const authorLid = pollKey.participant ? pollKey.participant : pollKey.remoteJid

    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        MessageSecretType.POLL_VOTE,
        ownLid,
        pollKey.id,
        authorLid,
        pollEncKey,
        plaintext
    )

    return {
        pollUpdateMessage: {
            pollCreationMessageKey: pollKey,
            vote: {
                encPayload: ciphertext,
                encIv: iv
            },
            senderTimestampMs: Date.now(),
        }
    }
}

/**
 * Encrypt an event edit in a group or private chat event message.
 *
 * Used when the event creator modifies the details of an existing event.
 * The encrypted payload contains the updated proto.Message content.
 *
 * @param eventKey key about the original event message
 * @param editedMessage proto.Message content 
 * @param ownLid LID of the original event creator (used as origSender in key derivation, not phone JID)
 */
const encryptEventEdit = async (eventKey, editedMessage, ownLid, eventEncKey) => {
    const plaintext = proto.Message.encode(
        proto.Message.create(editedMessage)
    ).finish()
    const authorLid = eventKey.participant ? eventKey.participant : eventKey.remoteJid

    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        MessageSecretType.EVENT_EDIT,
        ownLid,
        eventKey.id,
        authorLid,
        eventEncKey,
        plaintext
    )

    return {
        secretEncryptedMessage: {
            targetMessageKey: eventKey,
            encPayload: ciphertext,
            encIv: iv,
            secretEncType: proto.Message.SecretEncryptedMessage.SecretEncType.EVENT_EDIT
        }
    }
}

/**
 * Encrypt an event response (e.g. RSVP) to a group or private chat event message.
 *
 * Used when a participant responds to an event created by another user.
 * The encrypted payload contains the proto.Message.EventResponseMessage content.
 *
 * @param eventKey key about the original event creation message
 * @param responseMessage proto.Message.EventResponseMessage content
 * @param ownLid LID of sender (not phone JID)
 * @param eventEncKey messageSecret from original event message
 * @returns proto-compatible encEventResponseMessage
 */
const encryptEventResponse = async (eventKey, responseMessage, ownLid, eventEncKey) => {
    const plaintext = proto.Message.EventResponseMessage.encode(
        proto.Message.EventResponseMessage.create(responseMessage)
    ).finish()
    const authorLid = eventKey.participant ? eventKey.participant : eventKey.remoteJid

    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        MessageSecretType.EVENT_RESPONSE,
        ownLid,
        eventKey.id,
        authorLid,
        eventEncKey,
        plaintext
    )

    return {
        encEventResponseMessage: {
            eventCreationMessageKey: eventKey,
            encPayload: ciphertext,
            encIv: iv,
            senderTimestampMs: Date.now()
        }
    }
}

/**
 * Encrypt a comment/reply in a community announcement group.
 *
 * Used when a participant replies to an announcement post.
 * The encrypted payload contains the full proto.Message content of the comment.
 *
 * @param commentKey key about the commented message
 * @param commentMessage proto.Message content of the comment
 * @param ownLid LID of sender (not phone JID)
 * @param commentEncKey messageSecret from original message
 * @returns proto-compatible encCommentMessage
 */
const encryptComment = async (commentKey, commentMessage, ownLid, commentEncKey) => {
    const plaintext = proto.Message.encode(
        proto.Message.create(commentMessage)
    ).finish()
    const authorLid = commentKey.participant ? commentKey.participant : commentKey.remoteJid

    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        MessageSecretType.COMMENT,
        ownLid,
        commentKey.id,
        authorLid,
        commentEncKey,
        plaintext
    )

    return {
        encCommentMessage: {
            targetMessageKey: commentKey,
            encPayload: ciphertext,
            encIv: iv
        }
    }
}

/**
 * Encrypt a reaction to a message in a community announcement group.
 *
 * Used when a participant reacts to an announcement post.
 * The encrypted payload contains the proto.Message.ReactionMessage content.
 *
 * @param reactionKey key about the reacted message
 * @param reactionMessage proto.Message content of the reaction 
 * @param ownLid LID of sender (not phone JID)
 * @param reactionEncKey messageSecret from original message
 * @returns proto-compatible encReactionMessage
 */
const encryptReaction = async (reactionKey, reactionMessage, ownLid, reactionEncKey) => {
    const plaintext = proto.Message.ReactionMessage.encode(
        proto.Message.ReactionMessage.create(reactionMessage)
    ).finish()
    const authorLid = reactionKey.participant ? reactionKey.participant : reactionKey.remoteJid

    const {
        ciphertext,
        iv
    } = await encryptMsgSecret(
        MessageSecretType.REACTION,
        ownLid,
        reactionKey.id,
        authorLid,
        reactionEncKey,
        plaintext
    )

    return {
        encReactionMessage: {
            targetMessageKey: reactionKey,
            encPayload: ciphertext,
            encIv: iv
        }
    }
}

/**
 * Decrypt a bot message (msmsg) using MessageSecret scheme.
 *
 * HKDF(secret, "Bot Message") is applied before key derivation.
 *
 * @param messageSecret messageContextInfo.messageSecret
 * @param msMsg encrypted bot message payload
 * @param messageID message ID
 * @param targetSenderJID original target sender JID
 * @param senderJID bot sender JID
 * @returns decrypted plaintext buffer
 */
const decryptBotMessage = async (
    messageSecret,
    msMsg,
    messageID,
    targetSenderJID,
    senderJID
) => {
    const botHkdfKey = await applyBotMessageHKDF(messageSecret)
    const plaintext = await decryptMsgSecret(
        '',
        senderJID,
        messageID,
        targetSenderJID,
        botHkdfKey, {
            encPayload: msMsg.encPayload,
            encIv: msMsg.encIv
        }
    )
    return plaintext
}


/**
 * Decrypt a poll vote using HKDF-SHA256 + AES-256-GCM.
 *
 * @param vote encrypted vote payload and IV
 * @param ctx additional info about the poll required for decryption
 * @returns decoded PollVoteMessage
 */
const decryptPollVote = async ({
    encPayload,
    encIv
}, {
    pollCreatorLid,
    pollMsgId,
    pollEncKey,
    voterLid
}) => {
    const plaintext = await decryptMsgSecret(
        MessageSecretType.POLL_VOTE,
        pollCreatorLid,
        pollMsgId,
        voterLid,
        pollEncKey, {
            encPayload,
            encIv
        }
    )
    return proto.Message.PollVoteMessage.decode(plaintext)
}

/**
 * Decrypt an event edit using HKDF-SHA256 + AES-256-GCM.
 *
 * @param payload encrypted payload and IV
 * @param ctx additional info required for decryption
 * @returns decoded proto.Message
 */
const decryptEventEdit = async ({
    encPayload,
    encIv
}, {
    eventCreatorLid,
    eventMsgId,
    eventEncKey,
    responderLid
}) => {
    const plaintext = await decryptMsgSecret(
        MessageSecretType.EVENT_EDIT,
        eventCreatorLid,
        eventMsgId,
        responderLid,
        eventEncKey, {
            encPayload,
            encIv
        }
    )
    return proto.Message.decode(plaintext)
}

/**
 * Decrypt an event response using HKDF-SHA256 + AES-256-GCM.
 *
 * @param payload encrypted payload and IV
 * @param ctx additional info required for decryption
 * @returns decoded EventResponseMessage
 */
const decryptEventResponse = async ({
    encPayload,
    encIv
}, {
    eventCreatorLid,
    eventMsgId,
    eventEncKey,
    responderLid
}) => {
    const plaintext = await decryptMsgSecret(
        MessageSecretType.EVENT_RESPONSE,
        responderLid,
        eventMsgId,
        eventCreatorLid,
        eventEncKey, {
            encPayload,
            encIv
        }
    )
    return proto.Message.EventResponseMessage.decode(plaintext)
}

/**
 * Decrypt a comment using HKDF-SHA256 + AES-256-GCM.
 *
 * @param payload encrypted payload and IV
 * @param ctx additional info required for decryption
 * @returns decoded proto.Message
 */
const decryptComment = async ({
    encPayload,
    encIv
}, {
    commentCreatorLid,
    commentMsgId,
    commentEncKey,
    commentLid
}) => {
    const plaintext = await decryptMsgSecret(
        MessageSecretType.COMMENT,
        commentCreatorLid,
        commentMsgId,
        commentLid,
        commentEncKey, {
            encPayload,
            encIv
        }
    )
    return proto.Message.decode(plaintext)
}

/**
 * Decrypt a reaction using HKDF-SHA256 + AES-256-GCM.
 *
 * @param payload encrypted payload and IV
 * @param ctx additional info required for decryption
 * @returns decoded ReactionMessage
 */
const decryptReaction = async ({
    encPayload,
    encIv
}, {
    reactionCreatorLid,
    reactionMsgId,
    reactionEncKey,
    reactionLid
}) => {
    const plaintext = await decryptMsgSecret(
        MessageSecretType.REACTION,
        reactionCreatorLid,
        reactionMsgId,
        reactionLid,
        reactionEncKey, {
            encPayload,
            encIv
        }
    )
    return proto.Message.ReactionMessage.decode(plaintext)
}

module.exports = {
    MessageSecretType,
    generateMsgSecretKey,
    applyBotMessageHKDF,
    encryptBotMessage,
    encryptPollVote,
    encryptEventEdit,
    encryptEventResponse,
    encryptComment,
    encryptReaction,
    decryptBotMessage,
    decryptPollVote,
    decryptEventEdit,
    decryptEventResponse,
    decryptComment,
    decryptReaction
}