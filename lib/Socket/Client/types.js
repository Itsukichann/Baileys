"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    EventEmitter
} = require("events")

class AbstractSocketClient extends EventEmitter {
    constructor(url, config) {
        super()
        this.url = url
        this.config = config
        this.setMaxListeners(0)
    }
}

module.exports = {
    AbstractSocketClient
}