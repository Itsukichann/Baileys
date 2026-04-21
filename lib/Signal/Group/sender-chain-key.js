"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    calculateMAC
} = require("@itsukichan/libsignal-node/src/crypto")
const {
    SenderMessageKey
} = require("./sender-message-key")

class SenderChainKey {
    constructor(iteration, chainKey) {
        this.MESSAGE_KEY_SEED = Buffer.from([0x01])
        this.CHAIN_KEY_SEED = Buffer.from([0x02])
        this.iteration = iteration
        this.chainKey = Buffer.from(chainKey)
    }
    getIteration() {
        return this.iteration
    }
    getSenderMessageKey() {
        return new SenderMessageKey(this.iteration, this.getDerivative(this.MESSAGE_KEY_SEED, this.chainKey))
    }
    getNext() {
        return new SenderChainKey(this.iteration + 1, this.getDerivative(this.CHAIN_KEY_SEED, this.chainKey))
    }
    getSeed() {
        return this.chainKey
    }
    getDerivative(seed, key) {
        return calculateMAC(key, seed)
    }
}

module.exports = {
    SenderChainKey
}