"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

class BinaryInfo {
    constructor(options = {}) {
        this.protocolVersion = 5
        this.sequence = 0
        this.events = []
        this.buffer = []
        Object.assign(this, options)
    }
}

module.exports = {
  BinaryInfo
}