"use strict"

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k
    var desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
}))

var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p)
}

Object.defineProperty(exports, "__esModule", { value: true })

exports.DisconnectReason = void 0;
__exportStar(require("./Auth"), exports)
__exportStar(require("./GroupMetadata"), exports)
__exportStar(require("./Chat"), exports)
__exportStar(require("./Contact"), exports)
__exportStar(require("./State"), exports)
__exportStar(require("./Message"), exports)
__exportStar(require("./Newsletter"), exports)
__exportStar(require("./Socket"), exports)
__exportStar(require("./Events"), exports)
__exportStar(require("./Product"), exports)
__exportStar(require("./Call"), exports)
__exportStar(require("./Signal"), exports)

const DisconnectReason = {
    connectionClosed: 428,
    connectionLost: 408,
    connectionReplaced: 440,
    timedOut: 408,
    loggedOut: 401,
    badSession: 500,
    restartRequired: 515,
    multideviceMismatch: 411,
    forbidden: 403,
    unavailableService: 503
}
exports.DisconnectReason = DisconnectReason