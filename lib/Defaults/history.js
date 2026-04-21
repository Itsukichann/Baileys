"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    proto
} = require("../../WAProto")

const PROCESSABLE_HISTORY_TYPES = [
    proto.Message.HistorySyncType.INITIAL_BOOTSTRAP,
    proto.Message.HistorySyncType.PUSH_NAME,
    proto.Message.HistorySyncType.RECENT,
    proto.Message.HistorySyncType.FULL,
    proto.Message.HistorySyncType.ON_DEMAND,
    proto.HistorySync.HistorySyncType.NON_BLOCKING_DATA,
    proto.HistorySync.HistorySyncType.INITIAL_STATUS_V3
]

module.exports = {
    PROCESSABLE_HISTORY_TYPES
}