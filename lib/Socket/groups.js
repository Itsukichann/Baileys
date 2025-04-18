"use strict"
Object.defineProperty(exports, "__esModule", { value: true })

const WAProto_1 = require("../../WAProto")
const Types_1 = require("../Types")
const Utils_1 = require("../Utils")
const WABinary_1 = require("../WABinary")
const chats_1 = require("./chats")

const makeGroupsSocket = (config) => {
    const suki = chats_1.makeChatsSocket(config)
    const { authState, ev, query, upsertMessage } = suki
    
    const groupQuery = async (jid, type, content) => (query({
        tag: 'iq',
        attrs: {
            type,
            xmlns: 'w:g2',
            to: jid,
        },
        content
    }))
    
    const groupMetadata = async (jid) => {
        const result = await groupQuery(jid, 'get', [{ tag: 'query', attrs: { request: 'interactive' } }])
        return extractGroupMetadata(result)
    }
    
    const groupFetchAllParticipating = async () => {
        const result = await query({
            tag: 'iq',
            attrs: {
                to: '@g.us',
                xmlns: 'w:g2',
                type: 'get',
            },
            content: [
                {
                    tag: 'participating',
                    attrs: {},
                    content: [
                        { tag: 'participants', attrs: {} },
                        { tag: 'description', attrs: {} }
                    ]
                }
            ]
        })
        
        const data = {}
        const groupsChild = WABinary_1.getBinaryNodeChild(result, 'groups')
        
        if (groupsChild) {
            const groups = WABinary_1.getBinaryNodeChildren(groupsChild, 'group')
            for (const groupNode of groups) {
                const meta = extractGroupMetadata({
                    tag: 'result',
                    attrs: {},
                    content: [groupNode]
                })
                data[meta.id] = meta
            }
        }
        
        suki.ev.emit('groups.update', Object.values(data))
        return data
    }
    
    return {
        ...suki,
        groupQuery, 
        groupMetadata,
        groupCreate: async (subject, participants) => {
            const key = Utils_1.generateMessageID()
            
            const result = await groupQuery('@g.us', 'set', [
                {
                    tag: 'create',
                    attrs: {
                        subject,
                        key
                    },
                    content: participants.map(jid => ({
                        tag: 'participant',
                        attrs: { jid }
                    }))
                }
            ])
            
            return extractGroupMetadata(result)
        },
        groupLeave: async (id) => {
            await groupQuery('@g.us', 'set', [
                {
                    tag: 'leave',
                    attrs: {},
                    content: [
                        { tag: 'group', attrs: { id } }
                    ]
                }
            ])
        },
        groupUpdateSubject: async (jid, subject) => {
            await groupQuery(jid, 'set', [
                {
                    tag: 'subject',
                    attrs: {},
                    content: Buffer.from(subject, 'utf-8')
                }
            ])
        },
        groupRequestParticipantsList: async (jid) => {
            const result = await groupQuery(jid, 'get', [
                {
                    tag: 'membership_approval_requests',
                    attrs: {}
                }
            ])
            
            const node = WABinary_1.getBinaryNodeChild(result, 'membership_approval_requests')
            const participants = WABinary_1.getBinaryNodeChildren(node, 'membership_approval_request')
            
            return participants.map(v => v.attrs)
        },
        groupRequestParticipantsUpdate: async (jid, participants, action) => {
            const result = await groupQuery(jid, 'set', [{
                    tag: 'membership_requests_action',
                    attrs: {},
                    content: [
                        {
                            tag: action,
                            attrs: {},
                            content: participants.map(jid => ({
                                tag: 'participant',
                                attrs: { jid }
                            }))
                        }
                    ]
                }])
                
            const node = WABinary_1.getBinaryNodeChild(result, 'membership_requests_action')
            const nodeAction = WABinary_1.getBinaryNodeChild(node, action)
            const participantsAffected = WABinary_1.getBinaryNodeChildren(nodeAction, 'participant')
            
            return participantsAffected.map(p => {
                return { status: p.attrs.error || '200', jid: p.attrs.jid }
            })
        },
        groupParticipantsUpdate: async (jid, participants, action) => {
            const result = await groupQuery(jid, 'set', [
                {
                    tag: action,
                    attrs: {},
                    content: participants.map(jid => ({
                        tag: 'participant',
                        attrs: { jid }
                    }))
                }
            ])
            const node = WABinary_1.getBinaryNodeChild(result, action)
            const participantsAffected = WABinary_1.getBinaryNodeChildren(node, 'participant')
            
            return participantsAffected.map(p => {
                return { status: p.attrs.error || '200', jid: p.attrs.jid, content: p }
            })
        },
        groupUpdateDescription: async (jid, description) => {
            const metadata = await groupMetadata(jid)
            const prev = metadata.descId ? metadata.descId : null
            
            await groupQuery(jid, 'set', [
                {
                    tag: 'description',
                    attrs: {
                        ...(description ? { id: Utils_1.generateMessageID() } : { delete: 'true' }),
                        ...(prev ? { prev } : {})
                    },
                    content: description ? [
                        { tag: 'body', attrs: {}, content: Buffer.from(description, 'utf-8') }
                    ] : undefined
                }
            ])
        },
        groupInviteCode: async (jid) => {
            const result = await groupQuery(jid, 'get', [{ tag: 'invite', attrs: {} }])
            const inviteNode = WABinary_1.getBinaryNodeChild(result, 'invite')
            
            return inviteNode?.attrs?.code
        },
        groupRevokeInvite: async (jid) => {
            const result = await groupQuery(jid, 'set', [{ tag: 'invite', attrs: {} }])
            const inviteNode = WABinary_1.getBinaryNodeChild(result, 'invite')
            
            return inviteNode?.attrs?.code
        },
        groupAcceptInvite: async (code) => {
            const results = await groupQuery('@g.us', 'set', [{ tag: 'invite', attrs: { code } }])
            const result = WABinary_1.getBinaryNodeChild(results, 'group')
            
            return result?.attrs?.jid
        },
        /**
         * revoke a v4 invite for someone
         * @param groupJid group jid
         * @param invitedJid jid of person you invited
         * @returns true if successful
         */
        groupRevokeInviteV4: async (groupJid, invitedJid) => {
            const result = await groupQuery(groupJid, 'set', [{ tag: 'revoke', attrs: {}, content: [{ tag: 'participant', attrs: { jid: invitedJid } }] }])
            
            return !!result
        },
        /**
         * accept a GroupInviteMessage
         * @param key the key of the invite message, or optionally only provide the jid of the person who sent the invite
         * @param inviteMessage the message to accept
         */
        groupAcceptInviteV4: ev.createBufferedFunction(async (key, inviteMessage) => {
            key = typeof key === 'string' ? { remoteJid: key } : key
            const results = await groupQuery(inviteMessage.groupJid, 'set', [{
                    tag: 'accept',
                    attrs: {
                        code: inviteMessage.inviteCode,
                        expiration: inviteMessage.inviteExpiration.toString(),
                        admin: key.remoteJid
                    }
                }])
                
            // if we have the full message key
            // update the invite message to be expired
            if (key.id) {
                // create new invite message that is expired
                inviteMessage = WAProto_1.proto.Message.GroupInviteMessage.fromObject(inviteMessage)
                inviteMessage.inviteExpiration = 0
                inviteMessage.inviteCode = ''
                ev.emit('messages.update', [
                    {
                        key,
                        update: {
                            message: {
                                groupInviteMessage: inviteMessage
                            }
                        }
                    }
                ])
            }
            
            // generate the group add message
            await upsertMessage({
                key: {
                    remoteJid: inviteMessage.groupJid,
                    id: Utils_1.generateMessageID(authState.creds.me?.id), 
                    fromMe: false,
                    participant: key.remoteJid,
                },
                messageStubType: Types_1.WAMessageStubType.GROUP_PARTICIPANT_ADD,
                messageStubParameters: [
                    authState.creds.me.id
                ],
                participant: key.remoteJid,
                messageTimestamp: Utils_1.unixTimestampSeconds()
            }, 'notify')
            
            return results.attrs.from
        }),
        groupGetInviteInfo: async (code) => {
            const results = await groupQuery('@g.us', 'get', [{ tag: 'invite', attrs: { code } }])
            
            return extractGroupMetadata(results)
        },
        groupToggleEphemeral: async (jid, ephemeralExpiration) => {
            const content = ephemeralExpiration ?
                { tag: 'ephemeral', attrs: { expiration: ephemeralExpiration.toString() } } :
                { tag: 'not_ephemeral', attrs: {} }
            await groupQuery(jid, 'set', [content])
        },
        groupSettingUpdate: async (jid, setting) => {
            await groupQuery(jid, 'set', [{ tag: setting, attrs: {} }])
        },
        groupMemberAddMode: async (jid, mode) => {
            await groupQuery(jid, 'set', [{ tag: 'member_add_mode', attrs: {}, content: mode }])
        },
        groupJoinApprovalMode: async (jid, mode) => {
            await groupQuery(jid, 'set', [{ tag: 'membership_approval_mode', attrs: {}, content: [{ tag: 'group_join', attrs: { state: mode } }] }])
        },
        groupFetchAllParticipating
    }
}

const extractGroupMetadata = (result) => {
    const group = WABinary_1.getBinaryNodeChild(result, 'group')
    const descChild = WABinary_1.getBinaryNodeChild(group, 'description')
    
    let desc
    let descId
    
    if (descChild) {
        desc = WABinary_1.getBinaryNodeChildString(descChild, 'body')
        descId = descChild.attrs.id
    }
    
    const groupId = group.attrs.id.includes('@') ? group.attrs.id : WABinary_1.jidEncode(group.attrs.id, 'g.us')
    const eph = WABinary_1.getBinaryNodeChild(group, 'ephemeral')?.attrs.expiration
    const memberAddMode = WABinary_1.getBinaryNodeChildString(group, 'member_add_mode') === 'all_member_add'
    
    const metadata = {
        id: groupId,
        subject: group.attrs.subject,
        subjectOwner: group.attrs.s_o,
        subjectTime: +group.attrs.s_t,
        size: WABinary_1.getBinaryNodeChildren(group, 'participant').length,
        creation: +group.attrs.creation,
        owner: group.attrs.creator ? WABinary_1.jidNormalizedUser(group.attrs.creator) : undefined,
        desc,
        descId,
        linkedParent: WABinary_1.getBinaryNodeChild(group, 'linked_parent')?.attrs.jid || undefined,
        restrict: !!WABinary_1.getBinaryNodeChild(group, 'locked'),
        announce: !!WABinary_1.getBinaryNodeChild(group, 'announcement'),
        isCommunity: !!WABinary_1.getBinaryNodeChild(group, 'parent'),
        isCommunityAnnounce: !!WABinary_1.getBinaryNodeChild(group, 'default_sub_group'),
        joinApprovalMode: !!WABinary_1.getBinaryNodeChild(group, 'membership_approval_mode'),
        memberAddMode,
        participants: WABinary_1.getBinaryNodeChildren(group, 'participant').map(({ attrs }) => {
            return {
                id: attrs.jid,
                lid: attrs.lid, 
                admin: (attrs.type || null),
            }
        }),
        ephemeralDuration: eph ? +eph : undefined, 
    }
    
    return metadata
}

module.exports = {
  makeGroupsSocket, 
  extractGroupMetadata
}