"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    assertNodeErrorFree
} = require("../../WABinary")

class USyncDisappearingModeProtocol {
    constructor() {
        this.name = 'disappearing_mode'
    }
    getQueryElement() {
        return {
            tag: 'disappearing_mode',
            attrs: {},
        }
    }
    getUserElement() {
        return null
    }
    parser(node) {
        if (node.tag === 'disappearing_mode') {
            assertNodeErrorFree(node)
            const duration = +node?.attrs?.duration
            const setAt = new Date(+(node?.attrs?.t || 0) * 1000)
            return {
                duration,
                setAt,
            }
        }
    }
}

module.exports = {
    USyncDisappearingModeProtocol
}