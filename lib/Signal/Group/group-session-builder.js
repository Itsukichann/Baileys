"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    generateSenderKey,
    generateSenderKeyId,
    generateSenderSigningKey
} = require("./keyhelper")
const {
    SenderKeyDistributionMessage
} = require("./sender-key-distribution-message")

class GroupSessionBuilder {
    constructor(senderKeyStore) {
        this.senderKeyStore = senderKeyStore
    }
    async process(senderKeyName, senderKeyDistributionMessage) {
        const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
        senderKeyRecord.addSenderKeyState(senderKeyDistributionMessage.getId(), senderKeyDistributionMessage.getIteration(), senderKeyDistributionMessage.getChainKey(), senderKeyDistributionMessage.getSignatureKey())
        await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
    }
    async create(senderKeyName) {
        const senderKeyRecord = await this.senderKeyStore.loadSenderKey(senderKeyName)
        if (senderKeyRecord.isEmpty()) {
            const keyId = generateSenderKeyId()
            const senderKey = generateSenderKey()
            const signingKey = generateSenderSigningKey()
            senderKeyRecord.setSenderKeyState(keyId, 0, senderKey, signingKey)
            await this.senderKeyStore.storeSenderKey(senderKeyName, senderKeyRecord)
        }
        const state = senderKeyRecord.getSenderKeyState()
        if (!state) {
            throw new Error('No session state available')
        }
        return new SenderKeyDistributionMessage(state.getKeyId(), state.getSenderChainKey().getIteration(), state.getSenderChainKey().getSeed(), state.getSigningKeyPublic())
    }
}

module.exports = {
    GroupSessionBuilder
}