"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    proto
} = require("../../WAProto")
const {
    WAMessageStubType,
    WAMessageAddressingMode
} = require("../Types")
const {
    generateMessageID,
    unixTimestampSeconds
} = require("../Utils")
const {
    getBinaryNodeChild,
    getBinaryNodeChildren,
    getBinaryNodeChildString,
    jidEncode,
    jidNormalizedUser
} = require("../WABinary")
const {
    makeChatsSocket
} = require("./chats")

const makeGroupsSocket = (config) => {
    const suki = makeChatsSocket(config)
    const {
        authState,
        ev,
        query,
        cleanDirtyBits,
        upsertMessage
    } = suki

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
        const result = await groupQuery(jid, 'get', [{
            tag: 'query',
            attrs: {
                request: 'interactive'
            }
        }])
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
            content: [{
                tag: 'participating',
                attrs: {},
                content: [{
                        tag: 'participants',
                        attrs: {}
                    },
                    {
                        tag: 'description',
                        attrs: {}
                    }
                ]
            }]
        })

        const data = {}
        const groupsChild = getBinaryNodeChild(result, 'groups')

        if (groupsChild) {
            const groups = getBinaryNodeChildren(groupsChild, 'group')
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

    suki.ws.on('CB:ib,,dirty', async (node) => {
        const {
            attrs
        } = getBinaryNodeChild(node, 'dirty')
        if (attrs.type !== 'groups') {
            return
        }

        await groupFetchAllParticipating()
        await cleanDirtyBits('groups')
    })

    return {
        ...suki,
        groupQuery,
        groupMetadata,
        groupCreate: async (subject, participants) => {
            const key = generateMessageID()

            const result = await groupQuery('@g.us', 'set', [{
                tag: 'create',
                attrs: {
                    subject,
                    key
                },
                content: participants.map(jid => ({
                    tag: 'participant',
                    attrs: {
                        jid
                    }
                }))
            }])

            return extractGroupMetadata(result)
        },
        groupLeave: async (id) => {
            await groupQuery('@g.us', 'set', [{
                tag: 'leave',
                attrs: {},
                content: [{
                    tag: 'group',
                    attrs: {
                        id
                    }
                }]
            }])
        },
        groupUpdateSubject: async (jid, subject) => {
            await groupQuery(jid, 'set', [{
                tag: 'subject',
                attrs: {},
                content: Buffer.from(subject, 'utf-8')
            }])
        },
        groupRequestParticipantsList: async (jid) => {
            const result = await groupQuery(jid, 'get', [{
                tag: 'membership_approval_requests',
                attrs: {}
            }])

            const node = getBinaryNodeChild(result, 'membership_approval_requests')
            const participants = getBinaryNodeChildren(node, 'membership_approval_request')

            return participants.map(v => v.attrs)
        },
        groupRequestParticipantsUpdate: async (jid, participants, action) => {
            const result = await groupQuery(jid, 'set', [{
                tag: 'membership_requests_action',
                attrs: {},
                content: [{
                    tag: action,
                    attrs: {},
                    content: participants.map(jid => ({
                        tag: 'participant',
                        attrs: {
                            jid
                        }
                    }))
                }]
            }])

            const node = getBinaryNodeChild(result, 'membership_requests_action')
            const nodeAction = getBinaryNodeChild(node, action)
            const participantsAffected = getBinaryNodeChildren(nodeAction, 'participant')

            return participantsAffected.map(p => {
                return {
                    status: p.attrs.error || '200',
                    jid: p.attrs.jid
                }
            })
        },
        groupParticipantsUpdate: async (jid, participants, action) => {
            const result = await groupQuery(jid, 'set', [{
                tag: action,
                attrs: {},
                content: participants.map(jid => ({
                    tag: 'participant',
                    attrs: {
                        jid
                    }
                }))
            }])
            const node = getBinaryNodeChild(result, action)
            const participantsAffected = getBinaryNodeChildren(node, 'participant')

            return participantsAffected.map(p => {
                return {
                    status: p.attrs.error || '200',
                    jid: p.attrs.jid,
                    content: p
                }
            })
        },
        groupUpdateDescription: async (jid, description) => {
            const metadata = await groupMetadata(jid)
            const prev = metadata.descId ? metadata.descId : null

            await groupQuery(jid, 'set', [{
                tag: 'description',
                attrs: {
                    ...(description ? {
                        id: generateMessageID()
                    } : {
                        delete: 'true'
                    }),
                    ...(prev ? {
                        prev
                    } : {})
                },
                content: description ? [{
                    tag: 'body',
                    attrs: {},
                    content: Buffer.from(description, 'utf-8')
                }] : undefined
            }])
        },
        groupInviteCode: async (jid) => {
            const result = await groupQuery(jid, 'get', [{
                tag: 'invite',
                attrs: {}
            }])
            const inviteNode = getBinaryNodeChild(result, 'invite')

            return inviteNode?.attrs?.code
        },
        groupRevokeInvite: async (jid) => {
            const result = await groupQuery(jid, 'set', [{
                tag: 'invite',
                attrs: {}
            }])
            const inviteNode = getBinaryNodeChild(result, 'invite')

            return inviteNode?.attrs?.code
        },
        groupAcceptInvite: async (code) => {
            const results = await groupQuery('@g.us', 'set', [{
                tag: 'invite',
                attrs: {
                    code
                }
            }])
            const result = getBinaryNodeChild(results, 'group')

            return result?.attrs?.jid
        },
        /**
         * revoke a v4 invite for someone
         * @param groupJid group jid
         * @param invitedJid jid of person you invited
         * @returns true if successful
         */
        groupRevokeInviteV4: async (groupJid, invitedJid) => {
            const result = await groupQuery(groupJid, 'set', [{
                tag: 'revoke',
                attrs: {},
                content: [{
                    tag: 'participant',
                    attrs: {
                        jid: invitedJid
                    }
                }]
            }])

            return !!result
        },
        /**
         * accept a GroupInviteMessage
         * @param key the key of the invite message, or optionally only provide the jid of the person who sent the invite
         * @param inviteMessage the message to accept
         */
        groupAcceptInviteV4: ev.createBufferedFunction(async (key, inviteMessage) => {
            key = typeof key === 'string' ? {
                remoteJid: key
            } : key
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
                inviteMessage = proto.Message.GroupInviteMessage.fromObject(inviteMessage)
                inviteMessage.inviteExpiration = 0
                inviteMessage.inviteCode = ''
                ev.emit('messages.update', [{
                    key,
                    update: {
                        message: {
                            groupInviteMessage: inviteMessage
                        }
                    }
                }])
            }

            // generate the group add message
            await upsertMessage({
                key: {
                    remoteJid: inviteMessage.groupJid,
                    id: generateMessageID(suki.user?.id),
                    fromMe: false,
                    participant: key.remoteJid
                },
                messageStubType: WAMessageStubType.GROUP_PARTICIPANT_ADD,
                messageStubParameters: [JSON.stringify(authState.creds.me)],
                participant: key.remoteJid,
                messageTimestamp: unixTimestampSeconds()
            }, 'notify')

            return results.attrs.from
        }),
        groupGetInviteInfo: async (code) => {
            const results = await groupQuery('@g.us', 'get', [{
                tag: 'invite',
                attrs: {
                    code
                }
            }])

            return extractGroupMetadata(results)
        },
        groupToggleEphemeral: async (jid, ephemeralExpiration) => {
            const content = ephemeralExpiration ? {
                tag: 'ephemeral',
                attrs: {
                    expiration: ephemeralExpiration.toString()
                }
            } : {
                tag: 'not_ephemeral',
                attrs: {}
            }
            await groupQuery(jid, 'set', [content])
        },
        groupSettingUpdate: async (jid, setting) => {
            await groupQuery(jid, 'set', [{
                tag: setting,
                attrs: {}
            }])
        },
        groupMemberAddMode: async (jid, mode) => {
            await groupQuery(jid, 'set', [{
                tag: 'member_add_mode',
                attrs: {},
                content: mode
            }])
        },
        groupJoinApprovalMode: async (jid, mode) => {
            await groupQuery(jid, 'set', [{
                tag: 'membership_approval_mode',
                attrs: {},
                content: [{
                    tag: 'group_join',
                    attrs: {
                        state: mode
                    }
                }]
            }])
        },
        groupFetchAllParticipating
    }
}

const extractGroupMetadata = (result) => {
    const group = getBinaryNodeChild(result, 'group')
    const descChild = getBinaryNodeChild(group, 'description')
    const mode = group.attrs.addressing_mode === WAMessageAddressingMode.LID ? WAMessageAddressingMode.LID : WAMessageAddressingMode.PN

    let desc
    let descId
    let descOwner
    let descOwnerAlt

    if (descChild) {
        desc = getBinaryNodeChildString(descChild, 'body')
        descId = descChild.attrs.id
        descOwner = mode === WAMessageAddressingMode.LID ? jidNormalizedUser(descChild.attrs.participant_pn) : jidNormalizedUser(descChild.attrs.participant)
        descOwnerAlt = mode === WAMessageAddressingMode.LID ? jidNormalizedUser(descChild.attrs.participant) : undefined
    }

    const groupId = group.attrs.id.includes('@') ? group.attrs.id : jidEncode(group.attrs.id, 'g.us')
    const eph = getBinaryNodeChild(group, 'ephemeral')?.attrs.expiration
    const memberAddMode = getBinaryNodeChildString(group, 'member_add_mode') === 'all_member_add'

    const metadata = {
        id: groupId,
        subject: group.attrs.subject,
        subjectOwner: group.attrs.s_o,
        subjectOwnerAlt: group.attrs?.s_o_pn ? group.attrs.s_o_pn : group.attrs.s_o,
        subjectTime: Number(group.attrs.s_t),
        size: Number(group.attrs?.size ? group.attrs.size : getBinaryNodeChildren(group, 'participant').length),
        creation: Number(group.attrs.creation),
        owner: group.attrs.creator ? jidNormalizedUser(group.attrs.creator) : undefined,
        ownerAlt: group.attrs.creator ? jidNormalizedUser(group.attrs?.creator_pn ? group.attrs.creator_pn : group.attrs.creator_pn) : undefined,
        ownerCountry: group.attrs.creator_country_code,
        desc,
        descId,
        descOwner,
        descOwnerAlt,
        linkedParent: getBinaryNodeChild(group, 'linked_parent')?.attrs.jid || undefined,
        restrict: !!getBinaryNodeChild(group, 'locked'),
        announce: !!getBinaryNodeChild(group, 'announcement'),
        isCommunity: !!getBinaryNodeChild(group, 'parent'),
        isCommunityAnnounce: !!getBinaryNodeChild(group, 'default_sub_group'),
        joinApprovalMode: !!getBinaryNodeChild(group, 'membership_approval_mode'),
        memberAddMode,
        participants: getBinaryNodeChildren(group, 'participant').map(({
            attrs
        }) => {
            return {
                id: mode === WAMessageAddressingMode.LID ? attrs.phone_number : attrs.jid,
                lid: mode === WAMessageAddressingMode.LID ? attrs.jid : attrs.lid,
                admin: (attrs.type || null)
            }
        }),
        ephemeralDuration: eph ? Number(eph) : undefined,
        addressingMode: mode
    }

    return metadata
}

module.exports = {
    makeGroupsSocket,
    extractGroupMetadata
}