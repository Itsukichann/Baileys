"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    getBinaryNodeChild
} = require("../WABinary")
const {
    USyncLIDProtocol,
    USyncDeviceProtocol,
    USyncContactProtocol,
    USyncStatusProtocol,
    USyncBotProfileProtocol,
    USyncDisappearingModeProtocol
} = require("./Protocols")

class USyncQuery {
    constructor() {
        this.protocols = []
        this.users = []
        this.context = 'interactive'
        this.mode = 'query'
    }
    withMode(mode) {
        this.mode = mode
        return this
    }
    withContext(context) {
        this.context = context
        return this
    }
    withUser(user) {
        this.users.push(user)
        return this
    }
    parseUSyncQueryResult(result) {
        if (!result || result.attrs.type !== 'result') {
            return
        }

        const protocolMap = Object.fromEntries(this.protocols.map(protocol => {
            return [protocol.name, protocol.parser]
        }))

        const queryResult = {
            // TODO: implement errors etc.
            list: [],
            sideList: []
        }

        const usyncNode = getBinaryNodeChild(result, 'usync')

        //TODO: implement error backoff, refresh etc.
        //TODO: see if there are any errors in the result node
        //const resultNode = getBinaryNodeChild(usyncNode, 'result')
        const listNode = usyncNode ? getBinaryNodeChild(usyncNode, 'list') : undefined

        if (listNode?.content && Array.isArray(listNode.content)) {
            queryResult.list = listNode.content.reduce((acc, node) => {
                const id = node?.attrs.jid

                if (id) {
                    const data = Array.isArray(node?.content) ?
                        Object.fromEntries(node.content
                            .map(content => {
                                const protocol = content.tag
                                const parser = protocolMap[protocol]

                                if (parser) {
                                    return [protocol, parser(content)]
                                } else {
                                    return [protocol, null]
                                }
                            }).filter(([, b]) => b !== null)) :
                        {};
                    acc.push({
                        ...data,
                        id
                    })
                }

                return acc
            }, [])
        }

        //TODO: implement side list
        //const sideListNode = getBinaryNodeChild(usyncNode, 'side_list')
        return queryResult
    }
    withLIDProtocol() {
        this.protocols.push(new USyncLIDProtocol())
        return this
    }
    withDeviceProtocol() {
        this.protocols.push(new USyncDeviceProtocol())
        return this
    }
    withContactProtocol() {
        this.protocols.push(new USyncContactProtocol())
        return this
    }
    withStatusProtocol() {
        this.protocols.push(new USyncStatusProtocol())
        return this
    }
    withBotProfileProtocol() {
        this.protocols.push(new USyncBotProfileProtocol())
        return this
    }
    withDisappearingModeProtocol() {
        this.protocols.push(new USyncDisappearingModeProtocol())
        return this
    }
}

module.exports = {
    USyncQuery
}