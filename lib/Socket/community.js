"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    proto
} = require("../../WAProto")
const {
    default: logger
} = require("../Utils/logger")
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
    makeBusinessSocket
} = require("./business")

const makeCommunitiesSocket = (config) => {
    const suki = makeBusinessSocket(config)
    const {
        authState,
        ev,
        query,
        groupMetadata,
        upsertMessage,
        cleanDirtyBits
    } = suki

    const communityQuery = async (jid, type, content) => (query({
        tag: 'iq',
        attrs: {
            type,
            xmlns: 'w:g2',
            to: jid,
        },
        content
    }))

    const communityMetadata = async (jid) => {
        const result = await communityQuery(jid, 'get', [{
            tag: 'query',
            attrs: {
                request: 'interactive'
            }
        }])
        return extractCommunityMetadata(result)
    }

    const communityFetchAllParticipating = async () => {
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
        const communitiesChild = getBinaryNodeChild(result, 'communities')

        if (communitiesChild) {
            const communities = getBinaryNodeChildren(communitiesChild, 'community')
            for (const communityNode of communities) {
                const meta = extractCommunityMetadata({
                    tag: 'result',
                    attrs: {},
                    content: [communityNode]
                })
                data[meta.id] = meta
            }
        }

        suki.ev.emit('groups.update', Object.values(data))
        return data
    }

    async function parseGroupResult(node) {
        logger.info({
            node
        }, 'parseGroupResult')

        const groupNode = getBinaryNodeChild(node, 'group')

        if (groupNode) {
            try {
                logger.info({
                    groupNode
                }, 'groupNode')

                const metadata = await groupMetadata(`${groupNode.attrs.id}@g.us`)

                return metadata ? metadata : null
            } catch (error) {
                logger.warn({
                    error
                }, 'Error parsing group metadata')
                return null
            }
        }

        return null
    }

    suki.ws.on('CB:ib,,dirty', async (node) => {
        const {
            attrs
        } = getBinaryNodeChild(node, 'dirty')

        if (attrs.type !== 'communities') {
            return
        }

        await communityFetchAllParticipating()
        await cleanDirtyBits('groups')
    })

    return {
        ...suki,
        communityQuery,
        communityMetadata,
        communityCreate: async (subject, body) => {
            const descriptionId = generateMessageID().substring(0, 12)

            const result = await communityQuery('@g.us', 'set', [{
                tag: 'create',
                attrs: {
                    subject
                },
                content: [{
                        tag: 'description',
                        attrs: {
                            id: descriptionId
                        },
                        content: [{
                            tag: 'body',
                            attrs: {},
                            content: Buffer.from(body || '', 'utf-8')
                        }]
                    },
                    {
                        tag: 'parent',
                        attrs: {
                            default_membership_approval_mode: 'request_required'
                        }
                    },
                    {
                        tag: 'allow_non_admin_sub_group_creation',
                        attrs: {}
                    },
                    {
                        tag: 'create_general_chat',
                        attrs: {}
                    }
                ]
            }])

            return await parseGroupResult(result)
        },
        communityCreateGroup: async (subject, participants, parentCommunityJid) => {
            const key = generateMessageID()
            const result = await communityQuery('@g.us', 'set', [{
                tag: 'create',
                attrs: {
                    subject,
                    key
                },
                content: [
                    ...participants.map(jid => ({
                        tag: 'participant',
                        attrs: {
                            jid
                        }
                    })),
                    {
                        tag: 'linked_parent',
                        attrs: {
                            jid: parentCommunityJid
                        }
                    }
                ]
            }])

            return await parseGroupResult(result)
        },
        communityLeave: async (id) => {
            await communityQuery('@g.us', 'set', [{
                tag: 'leave',
                attrs: {},
                content: [{
                    tag: 'community',
                    attrs: {
                        id
                    }
                }]
            }])
        },
        communityUpdateSubject: async (jid, subject) => {
            await communityQuery(jid, 'set', [{
                tag: 'subject',
                attrs: {},
                content: Buffer.from(subject, 'utf-8')
            }])
        },
        communityLinkGroup: async (groupJid, parentCommunityJid) => {
            await communityQuery(parentCommunityJid, 'set', [{
                tag: 'links',
                attrs: {},
                content: [{
                    tag: 'link',
                    attrs: {
                        link_type: 'sub_group'
                    },
                    content: [{
                        tag: 'group',
                        attrs: {
                            jid: groupJid
                        }
                    }]
                }]
            }])
        },
        communityUnlinkGroup: async (groupJid, parentCommunityJid) => {
            await communityQuery(parentCommunityJid, 'set', [{
                tag: 'unlink',
                attrs: {
                    unlink_type: 'sub_group'
                },
                content: [{
                    tag: 'group',
                    attrs: {
                        jid: groupJid
                    }
                }]
            }])
        },
        communityFetchLinkedGroups: async (jid) => {
            let communityJid = jid
            let isCommunity = false

            // Try to determine if it is a subgroup or a community
            const metadata = await groupMetadata(jid)

            if (metadata.linkedParent) {
                // It is a subgroup, get the community jid
                communityJid = metadata.linkedParent
            } else {
                // It is a community
                isCommunity = true
            }

            // Fetch all subgroups of the community
            const result = await communityQuery(communityJid, 'get', [{
                tag: 'sub_groups',
                attrs: {}
            }])
            const linkedGroupsData = []
            const subGroupsNode = getBinaryNodeChild(result, 'sub_groups')

            if (subGroupsNode) {
                const groupNodes = getBinaryNodeChildren(subGroupsNode, 'group')

                for (const groupNode of groupNodes) {
                    linkedGroupsData.push({
                        id: groupNode.attrs.id ? jidEncode(groupNode.attrs.id, 'g.us') : undefined,
                        subject: groupNode.attrs.subject || '',
                        creation: groupNode.attrs.creation ? Number(groupNode.attrs.creation) : undefined,
                        owner: groupNode.attrs.creator ? jidNormalizedUser(groupNode.attrs.creator) : undefined,
                        size: groupNode.attrs.size ? Number(groupNode.attrs.size) : undefined
                    })
                }
            }

            return {
                communityJid,
                isCommunity,
                linkedGroups: linkedGroupsData
            }
        },
        communityRequestParticipantsList: async (jid) => {
            const result = await communityQuery(jid, 'get', [{
                tag: 'membership_approval_requests',
                attrs: {}
            }])

            const node = getBinaryNodeChild(result, 'membership_approval_requests')
            const participants = getBinaryNodeChildren(node, 'membership_approval_request')

            return participants.map(v => v.attrs)
        },
        communityRequestParticipantsUpdate: async (jid, participants, action) => {
            const result = await communityQuery(jid, 'set', [{
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
        communityParticipantsUpdate: async (jid, participants, action) => {
            const result = await communityQuery(jid, 'set', [{
                tag: action,
                attrs: action === 'remove' ? {
                    linked_groups: 'true'
                } : {},
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
        communityUpdateDescription: async (jid, description) => {
            const metadata = await communityMetadata(jid)
            const prev = metadata.descId ?? null
            await communityQuery(jid, 'set', [{
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
        communityInviteCode: async (jid) => {
            const result = await communityQuery(jid, 'get', [{
                tag: 'invite',
                attrs: {}
            }])
            const inviteNode = getBinaryNodeChild(result, 'invite')

            return inviteNode?.attrs.code
        },
        communityRevokeInvite: async (jid) => {
            const result = await communityQuery(jid, 'set', [{
                tag: 'invite',
                attrs: {}
            }])
            const inviteNode = getBinaryNodeChild(result, 'invite')

            return inviteNode?.attrs.code
        },
        communityAcceptInvite: async (code) => {
            const results = await communityQuery('@g.us', 'set', [{
                tag: 'invite',
                attrs: {
                    code
                }
            }])
            const result = getBinaryNodeChild(results, 'community')

            return result?.attrs.jid
        },
        /**
         * revoke a v4 invite for someone
         * @param communityJid community jid
         * @param invitedJid jid of person you invited
         * @returns true if successful
         */
        communityRevokeInviteV4: async (communityJid, invitedJid) => {
            const result = await communityQuery(communityJid, 'set', [{
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
         * accept a CommunityInviteMessage
         * @param key the key of the invite message, or optionally only provide the jid of the person who sent the invite
         * @param inviteMessage the message to accept
         */
        communityAcceptInviteV4: ev.createBufferedFunction(async (key, inviteMessage) => {
            key = typeof key === 'string' ? {
                remoteJid: key
            } : key

            const results = await communityQuery(inviteMessage.groupJid, 'set', [{
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

            // generate the community add message
            await upsertMessage({
                key: {
                    remoteJid: inviteMessage.groupJid,
                    id: generateMessageID(suki.user?.id),
                    fromMe: false,
                    participant: key.remoteJid // TODO: investigate if this makes any sense at all
                },
                messageStubType: WAMessageStubType.GROUP_PARTICIPANT_ADD,
                messageStubParameters: [JSON.stringify(authState.creds.me)],
                participant: key.remoteJid,
                messageTimestamp: unixTimestampSeconds()
            }, 'notify')

            return results.attrs.from
        }),
        communityGetInviteInfo: async (code) => {
            const results = await communityQuery('@g.us', 'get', [{
                tag: 'invite',
                attrs: {
                    code
                }
            }])
            return extractCommunityMetadata(results)
        },
        communityToggleEphemeral: async (jid, ephemeralExpiration) => {
            const content = ephemeralExpiration ?
                {
                    tag: 'ephemeral',
                    attrs: {
                        expiration: ephemeralExpiration.toString()
                    }
                } :
                {
                    tag: 'not_ephemeral',
                    attrs: {}
                }

            await communityQuery(jid, 'set', [content])
        },
        communitySettingUpdate: async (jid, setting) => {
            await communityQuery(jid, 'set', [{
                tag: setting,
                attrs: {}
            }])
        },
        communityMemberAddMode: async (jid, mode) => {
            await communityQuery(jid, 'set', [{
                tag: 'member_add_mode',
                attrs: {},
                content: mode
            }])
        },
        communityJoinApprovalMode: async (jid, mode) => {
            await communityQuery(jid, 'set', [{
                tag: 'membership_approval_mode',
                attrs: {},
                content: [{
                    tag: 'community_join',
                    attrs: {
                        state: mode
                    }
                }]
            }])
        },
        communityFetchAllParticipating
    }
}

const extractCommunityMetadata = (result) => {
    const community = getBinaryNodeChild(result, 'group')
    const descChild = getBinaryNodeChild(community, 'description')

    let desc
    let descId

    if (descChild) {
        desc = getBinaryNodeChildString(descChild, 'body')
        descId = descChild.attrs.id
    }

    const mode = community.attrs.addressing_mode
    const communityId = community.attrs.id.includes('@') ? community.attrs.id : jidEncode(community.attrs.id, 'g.us')
    const eph = getBinaryNodeChild(community, 'ephemeral')?.attrs.expiration
    const memberAddMode = getBinaryNodeChildString(community, 'member_add_mode') === 'all_member_add'

    const metadata = {
        id: communityId,
        subject: community.attrs.subject,
        subjectOwner: community.attrs.s_o,
        subjectOwnerAlt: community.attrs?.s_o_pn ? community.attrs.s_o_pn : community.attrs.s_o,
        subjectTime: Number(community.attrs.s_t || 0),
        size: Number(community.attrs?.size ? community.attrs.size : getBinaryNodeChildren(community, 'participant').length),
        creation: Number(community.attrs.creation || 0),
        owner: community.attrs.creator ? jidNormalizedUser(community.attrs.creator) : undefined,
        ownerAlt: community.attrs.creator ? jidNormalizedUser(community.attrs?.creator_pn ? community.attrs.creator_pn : community.attrs.creator) : undefined,
        ownerCountry: community.attrs.creator_country_code,
        desc,
        descId,
        linkedParent: getBinaryNodeChild(community, 'linked_parent')?.attrs.jid || undefined,
        restrict: !!getBinaryNodeChild(community, 'locked'),
        announce: !!getBinaryNodeChild(community, 'announcement'),
        isCommunity: !!getBinaryNodeChild(community, 'parent'),
        isCommunityAnnounce: !!getBinaryNodeChild(community, 'default_sub_group'),
        joinApprovalMode: !!getBinaryNodeChild(community, 'membership_approval_mode'),
        memberAddMode,
        participants: getBinaryNodeChildren(community, 'participant').map(({
            attrs
        }) => {
            return {
                id: mode === WAMessageAddressingMode.LID ? community.phone_number : attrs.jid,
                lid: mode === WAMessageAddressingMode.LID ? community.jid : attrs.lid,
                admin: (attrs.type || null),
            }
        }),
        ephemeralDuration: eph ? Number(ph) : undefined,
        addressingMode: mode
    }

    return metadata
}

module.exports = {
    makeCommunitiesSocket,
    extractCommunityMetadata
}