"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    getBinaryNodeChild,
    getBinaryNodeChildren,
    getBinaryNodeChildString
} = require("../../WABinary")

class USyncBotProfileProtocol {
    constructor() {
        this.name = 'bot'
    }
    getQueryElement() {
        return {
            tag: 'bot',
            attrs: {},
            content: [{
                tag: 'profile',
                attrs: {
                    v: '1'
                }
            }]
        }
    }
    getUserElement(user) {
        return {
            tag: 'bot',
            attrs: {},
            content: [{
                tag: 'profile',
                attrs: {
                    'persona_id': user.personaId
                }
            }]
        }
    }
    parser(node) {
        const botNode = getBinaryNodeChild(node, 'bot')
        const profile = getBinaryNodeChild(botNode, 'profile')

        const commandsNode = getBinaryNodeChild(profile, 'commands')
        const promptsNode = getBinaryNodeChild(profile, 'prompts')

        const commands = []
        const prompts = []

        if (commandsNode) {
            for (const command of getBinaryNodeChildren(commandsNode, 'command')) {
                commands.push({
                    name: getBinaryNodeChildString(command, 'name') || '',
                    description: getBinaryNodeChildString(command, 'description') || ''
                })
            }
        }

        if (promptsNode) {
            for (const prompt of getBinaryNodeChildren(promptsNode, 'prompt')) {
                prompts.push(
                    `${getBinaryNodeChildString(prompt, 'emoji') || ''} ${getBinaryNodeChildString(prompt, 'text') || ''}`
                )
            }
        }

        return {
            isDefault: !!getBinaryNodeChild(profile, 'default'),
            jid: node.attrs.jid,
            name: getBinaryNodeChildString(profile, 'name') || '',
            attributes: getBinaryNodeChildString(profile, 'attributes') || '',
            description: getBinaryNodeChildString(profile, 'description') || '',
            category: getBinaryNodeChildString(profile, 'category') || '',
            personaId: profile.attrs['persona_id'] || '',
            commandsDescription: getBinaryNodeChildString(commandsNode, 'description') || '',
            commands,
            prompts
        }
    }
}

module.exports = {
    USyncBotProfileProtocol
}