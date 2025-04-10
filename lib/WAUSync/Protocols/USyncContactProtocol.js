"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WABinary_1 = require("../../WABinary")

class USyncContactProtocol {
    constructor() {
        this.name = 'contact'
    }
    getQueryElement() {
        return {
            tag: 'contact',
            attrs: {},
        }
    }
    getUserElement(user) {
        //TODO: Implement type / username fields (not yet supported)
        return {
            tag: 'contact',
            attrs: {},
            content: user.phone,
        }
    }
    parser(node) {
        if (node.tag === 'contact') {
            WABinary_1.assertNodeErrorFree(node)
            return node?.attrs?.type === 'in'
        }
        return false
    }
}

module.exports = {
  USyncContactProtocol
}