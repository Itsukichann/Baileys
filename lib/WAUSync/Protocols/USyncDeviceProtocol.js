"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WABinary_1 = require("../../WABinary")

class USyncDeviceProtocol {
    constructor() {
        this.name = 'devices'
    }
    getQueryElement() {
        return {
            tag: 'devices',
            attrs: {
                version: '2',
            },
        }
    }
    getUserElement( /* user: USyncUser */) {
        //TODO: Implement device phashing, ts and expectedTs
        //TODO: if all are not present, return null <- current behavior
        //TODO: otherwise return a node w tag 'devices' w those as attrs
        return null
    }
    parser(node) {
        const deviceList = []
        let keyIndex = undefined
        if (node.tag === 'devices') {
            WABinary_1.assertNodeErrorFree(node)
            const deviceListNode = WABinary_1.getBinaryNodeChild(node, 'device-list')
            const keyIndexNode = WABinary_1.getBinaryNodeChild(node, 'key-index-list')
            if (Array.isArray(deviceListNode?.content)) {
                for (const { tag, attrs } of deviceListNode.content) {
                    const id = +attrs.id
                    const keyIndex = +attrs['key-index']
                    if (tag === 'device') {
                        deviceList.push({
                            id,
                            keyIndex,
                            isHosted: !!(attrs['is_hosted'] && attrs['is_hosted'] === 'true')
                        })
                    }
                }
            }
            if (keyIndexNode?.tag === 'key-index-list') {
                keyIndex = {
                    timestamp: +keyIndexNode.attrs['ts'],
                    signedKeyIndex: keyIndexNode?.content,
                    expectedTimestamp: keyIndexNode.attrs['expected_ts'] ? +keyIndexNode.attrs['expected_ts'] : undefined
                }
            }
        }
        return {
            deviceList,
            keyIndex
        }
    }
}

module.exports = {
  USyncDeviceProtocol
}