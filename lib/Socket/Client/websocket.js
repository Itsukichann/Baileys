"use strict"

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}

Object.defineProperty(exports, "__esModule", { value: true })

const ws_1 = __importDefault(require("ws"))
const Defaults_1 = require("../../Defaults")
const types_1 = require("./types")

class WebSocketClient extends types_1.AbstractSocketClient {
    constructor() {
        super(...arguments)
        this.socket = null
    }
    get isOpen() {
        return this.socket?.readyState === ws_1.default.OPEN
    }
    get isClosed() {
        return this.socket?.readyState === ws_1.default.CLOSED
    }
    get isClosing() {
        this.socket?.readyState === ws_1.default.CLOSING
    }
    get isConnecting() {
        this.socket?.readyState === ws_1.default.CONNECTING
    }
    async connect() {
        if (this.socket) {
            return
        }
        this.socket = new ws_1.default(this.url, {
            origin: Defaults_1.DEFAULT_ORIGIN,
            headers: this.config.options?.headers,
            handshakeTimeout: this.config.connectTimeoutMs,
            timeout: this.config.connectTimeoutMs,
            agent: this.config.agent,
        })
        this.socket.setMaxListeners(0)
        const events = ['close', 'error', 'upgrade', 'message', 'open', 'ping', 'pong', 'unexpected-response']
        for (const event of events) {
            this.socket?.on(event, (...args) => this.emit(event, ...args))
        }
    }
    async close() {
        if (!this.socket) {
            return
        }
        this.socket.close()
        this.socket = null
    }
    send(str, cb) {
        this.socket?.send(str, cb)
        return Boolean(this.socket)
    }
}

module.exports = {
  WebSocketClient
}