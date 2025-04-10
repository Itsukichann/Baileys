"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const util_1 = require("util")
const zlib_1 = require("zlib")
const WAProto_1 = require("../../WAProto")
const Types_1 = require("../Types")
const WABinary_1 = require("../WABinary")
const generics_1 = require("./generics")
const messages_1 = require("./messages")
const messages_media_1 = require("./messages-media")
const inflatePromise = util_1.promisify(zlib_1.inflate)

const downloadHistory = async (msg, options) => {
    const stream = await messages_media_1.downloadContentFromMessage(msg, 'md-msg-hist', { options })
    const bufferArray = []
    for await (const chunk of stream) {
        bufferArray.push(chunk)
    }
    let buffer = Buffer.concat(bufferArray)
    // decompress buffer
    buffer = await inflatePromise(buffer)
    const syncData = WAProto_1.proto.HistorySync.decode(buffer)
    return syncData
}

const processHistoryMessage = (item) => {
    const messages = []
    const contacts = []
    const chats = []
    switch (item.syncType) {
        case WAProto_1.proto.HistorySync.HistorySyncType.INITIAL_BOOTSTRAP:
        case WAProto_1.proto.HistorySync.HistorySyncType.RECENT:
        case WAProto_1.proto.HistorySync.HistorySyncType.FULL:
        case WAProto_1.proto.HistorySync.HistorySyncType.ON_DEMAND:
            for (const chat of item.conversations) {
                contacts.push({ id: chat.id, name: chat.name || undefined })
                const msgs = chat.messages || []
                delete chat.messages
                delete chat.archived
                delete chat.muteEndTime
                delete chat.pinned
                for (const item of msgs) {
                    const message = item.message
                    messages.push(message)
                    if (!chat.messages?.length) {
                        // keep only the most recent message in the chat array
                        chat.messages = [{ message }]
                    }
                    if (!message.key.fromMe && !chat.lastMessageRecvTimestamp) {
                        chat.lastMessageRecvTimestamp = generics_1.toNumber(message.messageTimestamp)
                    }
                    if (message.messageStubType === Types_1.WAMessageStubType.BIZ_PRIVACY_MODE_TO_BSP
                        || message.messageStubType === Types_1.WAMessageStubType.BIZ_PRIVACY_MODE_TO_FB
                        && message.messageStubParameters?.[0]) {
                        contacts.push({
                            id: message.key.participant || message.key.remoteJid,
                            verifiedName: message.messageStubParameters?.[0]
                        })
                    }
                }
                if (WABinary_1.isJidUser(chat.id) && chat.readOnly && chat.archived) {
                    delete chat.readOnly
                }
                chats.push({ ...chat })
            }
            break
        case WAProto_1.proto.HistorySync.HistorySyncType.PUSH_NAME:
            for (const c of item.pushnames) {
                contacts.push({ id: c.id, notify: c.pushname })
            }
            break
    }
    return {
        chats,
        contacts,
        messages,
        syncType: item.syncType,
        progress: item.progress
    }
}

const downloadAndProcessHistorySyncNotification = async (msg, options) => {
    const historyMsg = await downloadHistory(msg, options)
    return processHistoryMessage(historyMsg)
}

const getHistoryMsg = (message) => {
    const normalizedContent = !!message ? messages_1.normalizeMessageContent(message) : undefined
    const anyHistoryMsg = normalizedContent?.protocolMessage?.historySyncNotification
    return anyHistoryMsg
}

module.exports = {
  downloadHistory, 
  processHistoryMessage, 
  downloadAndProcessHistorySyncNotification, 
  getHistoryMsg
}