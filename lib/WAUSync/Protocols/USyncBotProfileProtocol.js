"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WABinary_1 = require("../../WABinary")

class USyncBotProfileProtocol {
    constructor() {
        this.name = 'bot'
    }
    getQueryElement() {
        return {
            tag: 'bot',
            attrs: {},
            content: [{ tag: 'profile', attrs: { v: '1' } }]
        }
    }
    getUserElement(user) {
        return {
            tag: 'bot',
            attrs: {},
            content: [{ tag: 'profile', attrs: { 'persona_id': user.personaId } }]
        }
    }
    parser(node) {
        const botNode = WABinary_1.getBinaryNodeChild(node, 'bot')
        const profile = WABinary_1.getBinaryNodeChild(botNode, 'profile')

        const commandsNode = WABinary_1.getBinaryNodeChild(profile, 'commands')
        const promptsNode = WABinary_1.getBinaryNodeChild(profile, 'prompts')

        const commands = []
        const prompts = []

        if (commandsNode) {
            for (const command of WABinary_1.getBinaryNodeChildren(commandsNode, 'command')) {
                commands.push({
                    name: WABinary_1.getBinaryNodeChildString(command, 'name') || '',
                    description: WABinary_1.getBinaryNodeChildString(command, 'description') || ''
                })
            }
        }

        if (promptsNode) {
            for (const prompt of WABinary_1.getBinaryNodeChildren(promptsNode, 'prompt')) {
                prompts.push(
                    `${WABinary_1.getBinaryNodeChildString(prompt, 'emoji') || ''} ${WABinary_1.getBinaryNodeChildString(prompt, 'text') || ''}`
                )
            }
        }

        return {
            isDefault: !!WABinary_1.getBinaryNodeChild(profile, 'default'),
            jid: node.attrs.jid,
            name: WABinary_1.getBinaryNodeChildString(profile, 'name') || '',
            attributes: WABinary_1.getBinaryNodeChildString(profile, 'attributes') || '',
            description: WABinary_1.getBinaryNodeChildString(profile, 'description') || '',
            category: WABinary_1.getBinaryNodeChildString(profile, 'category') || '',
            personaId: profile.attrs['persona_id'] || '',
            commandsDescription: WABinary_1.getBinaryNodeChildString(commandsNode, 'description') || '',
            commands,
            prompts
        }
    }
}

module.exports = {
  USyncBotProfileProtocol
}