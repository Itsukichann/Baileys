"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    default: NodeCache
} = require("@cacheable/node-cache")
const {
    Boom
} = require("@hapi/boom")
const {
    randomBytes
} = require("crypto")
const {
    proto
} = require("../../WAProto")
const {
    DEFAULT_CACHE_TTLS,
    WA_DEFAULT_EPHEMERAL
} = require("../Defaults/constants")
const {
    delay,
    assertMediaContent,
    bindWaitForEvent,
    decryptMediaRetryData,
    encodeNewsletterMessage,
    encodeSignedDeviceIdentity,
    encodeWAMessage,
    encryptMediaRetryRequest,
    extractDeviceJids,
    generateMessageID,
    generateParticipantHashV2,
    generateWAMessage,
    generateWAMessageFromContent,
    getStatusCodeForMediaRetry,
    getUrlFromDirectPath,
    getWAUploadToServer,
    MessageRetryManager,
    normalizeMessageContent,
    parseAndInjectE2ESessions,
    unixTimestampSeconds,
    prepareAlbumMessageContent,
    prepareStatusMentionMessageContent,
    aggregateMessageKeysNotFromMe
} = require("../Utils")
const {
    WAMessageAddressingMode
} = require("../Types")
const {
    areJidsSameUser,
    getBinaryNodeChild,
    getBinaryNodeChildren,
    isHostedLidUser,
    isHostedPnUser,
    isJidNewsletter,
    isJidGroup,
    isLidUser,
    isPnUser,
    jidDecode,
    jidEncode,
    jidNormalizedUser,
    hasButtonOverride,
    hasBotOverride,
    S_WHATSAPP_NET
} = require("../WABinary")
const {
    USyncUser,
    USyncQuery
} = require("../WAUSync")
const {
    makeNewsletterSocket
} = require("./newsletter")
const {
    getUrlInfo
} = require("../Utils/link-preview")
const {
    makeKeyedMutex
} = require("../Utils/make-mutex")

const makeMessagesSocket = (config) => {
    const {
        logger,
        linkPreviewImageThumbnailWidth,
        generateHighQualityLinkPreview,
        options: httpRequestOptions,
        patchMessageBeforeSending,
        cachedGroupMetadata,
        enableRecentMessageCache,
        maxMsgRetryCount,
        getMessage
    } = config

    const suki = makeNewsletterSocket(config)

    const {
        ev,
        authState,
        messageMutex,
        signalRepository,
        upsertMessage,
        createCallLink,
        query,
        fetchPrivacySettings,
        sendNode,
        groupQuery,
        groupMetadata,
        groupToggleEphemeral,
        executeUSyncQuery,
        newsletterMetadata
    } = suki

    const userDevicesCache = config.userDevicesCache || new NodeCache({
        stdTTL: DEFAULT_CACHE_TTLS.USER_DEVICES,
        useClones: false
    })

    const peerSessionsCache = new NodeCache({
        stdTTL: DEFAULT_CACHE_TTLS.USER_DEVICES,
        useClones: false
    })

    // Initialize message retry manager if enabled
    const messageRetryManager = enableRecentMessageCache ? new MessageRetryManager(logger, maxMsgRetryCount) : null

    // Prevent race conditions in Signal session encryption by user
    const encryptionMutex = makeKeyedMutex()

    let mediaConn

    const refreshMediaConn = async (forceGet = false) => {
        const media = await mediaConn

        if (!media || forceGet || new Date().getTime() - media.fetchDate.getTime() > media.ttl * 1000) {
            mediaConn = (async () => {
                const result = await query({
                    tag: 'iq',
                    attrs: {
                        type: 'set',
                        xmlns: 'w:m',
                        to: S_WHATSAPP_NET
                    },
                    content: [{
                        tag: 'media_conn',
                        attrs: {}
                    }]
                })

                const mediaConnNode = getBinaryNodeChild(result, 'media_conn')

                // TODO: explore full length of data that whatsapp provides
                const node = {
                    hosts: getBinaryNodeChildren(mediaConnNode, 'host').map(({
                        attrs
                    }) => ({
                        hostname: attrs.hostname,
                        maxContentLengthBytes: +attrs.maxContentLengthBytes
                    })),
                    auth: mediaConnNode.attrs.auth,
                    ttl: +mediaConnNode.attrs.ttl,
                    fetchDate: new Date()
                }

                logger.debug('fetched media conn')

                return node
            })()
        }

        return mediaConn
    }

    /**
     * generic send receipt function
     * used for receipts of phone call, read, delivery etc.
     * */
    const sendReceipt = async (jid, participant, messageIds, type) => {
        if (!messageIds || messageIds.length === 0) {
            throw new Boom('missing ids in receipt')
        }

        const node = {
            tag: 'receipt',
            attrs: {
                id: messageIds[0]
            }
        }

        const isReadReceipt = type === 'read' || type === 'read-self'

        if (isReadReceipt) {
            node.attrs.t = unixTimestampSeconds().toString()
        }

        if (type === 'sender' && (isPnUser(jid) || isLidUser(jid))) {
            node.attrs.recipient = jid
            node.attrs.to = participant
        } else {
            node.attrs.to = jid

            if (participant) {
                node.attrs.participant = participant
            }
        }

        if (type) {
            node.attrs.type = type
        }

        const remainingMessageIds = messageIds.slice(1)

        if (remainingMessageIds.length) {
            node.content = [{
                tag: 'list',
                attrs: {},
                content: remainingMessageIds.map(id => ({
                    tag: 'item',
                    attrs: {
                        id
                    }
                }))
            }]
        }

        logger.debug({
            attrs: node.attrs,
            messageIds
        }, 'sending receipt for messages')

        await sendNode(node)
    }

    /** Correctly bulk send receipts to multiple chats, participants */
    const sendReceipts = async (keys, type) => {
        const recps = aggregateMessageKeysNotFromMe(keys)

        for (const {
                jid,
                participant,
                messageIds
            }
            of recps) {
            await sendReceipt(jid, participant, messageIds, type)
        }
    }

    /** Bulk read messages. Keys can be from different chats & participants */
    const readMessages = async (keys) => {
        const privacySettings = await fetchPrivacySettings()

        // based on privacy settings, we have to change the read type
        const readType = privacySettings.readreceipts === 'all' ? 'read' : 'read-self'

        await sendReceipts(keys, readType)
    }

    /** Fetch all the devices we've to send a message to */
    const getUSyncDevices = async (jids, useCache, ignoreZeroDevices) => {
        const deviceResults = []

        if (!useCache) {
            logger.debug('not using cache for devices')
        }

        const toFetch = []

        const jidsWithUser = jids
            .map(jid => {
                const decoded = jidDecode(jid)
                const user = decoded?.user
                const device = decoded?.device
                const isExplicitDevice = typeof device === 'number' && device >= 0

                if (isExplicitDevice && user) {
                    deviceResults.push({
                        user,
                        device,
                        jid
                    })

                    return null
                }

                jid = jidNormalizedUser(jid)

                return {
                    jid,
                    user
                }
            }).filter(jid => jid !== null)

        let mgetDevices

        if (useCache && userDevicesCache.mget) {
            const usersToFetch = jidsWithUser.map(j => j?.user).filter(Boolean)

            mgetDevices = await userDevicesCache.mget(usersToFetch)
        }

        for (const {
                jid,
                user
            }
            of jidsWithUser) {
            if (useCache) {
                const devices = mgetDevices?.[user] ||
                    (userDevicesCache.mget ? undefined : (await userDevicesCache.get(user)))

                if (devices) {
                    const devicesWithJid = devices.map(d => ({
                        ...d,
                        jid: jidEncode(d.user, d.server, d.device)
                    }))

                    deviceResults.push(...devicesWithJid)

                    logger.trace({
                        user
                    }, 'using cache for devices')
                } else {
                    toFetch.push(jid)
                }
            } else {
                toFetch.push(jid)
            }
        }

        if (!toFetch.length) {
            return deviceResults
        }

        const requestedLidUsers = new Set()

        for (const jid of toFetch) {
            if (isLidUser(jid) || isHostedLidUser(jid)) {
                const user = jidDecode(jid)?.user

                if (user)
                    requestedLidUsers.add(user)
            }
        }

        const query = new USyncQuery().withContext('message').withDeviceProtocol().withLIDProtocol()

        for (const jid of toFetch) {
            query.withUser(new USyncUser().withId(jid)) // todo: investigate - the idea here is that <user> should have an inline lid field with the lid being the pn equivalent
        }

        const result = await executeUSyncQuery(query)

        if (result) {
            // TODO: LID MAP this stuff (lid protocol will now return lid with devices)
            const lidResults = result.list.filter(a => !!a.lid)

            if (lidResults.length > 0) {
                logger.trace('Storing LID maps from device call')

                await signalRepository.lidMapping.storeLIDPNMappings(lidResults.map(a => ({
                    lid: a.lid,
                    pn: a.id
                })))

                // Force-refresh sessions for newly mapped LIDs to align identity addressing
                try {
                    const lids = lidResults.map(a => a.lid)

                    if (lids.length) {
                        await assertSessions(lids, true)
                    }
                } catch (e) {
                    logger.warn({
                        e,
                        count: lidResults.length
                    }, 'failed to assert sessions for newly mapped LIDs')
                }
            }

            const extracted = extractDeviceJids(result?.list, authState.creds.me.id, authState.creds.me.lid, ignoreZeroDevices)

            const deviceMap = {}

            for (const item of extracted) {
                deviceMap[item.user] = deviceMap[item.user] || []
                deviceMap[item.user]?.push(item)
            }

            // Process each user's devices as a group for bulk LID migration
            for (const [user, userDevices] of Object.entries(deviceMap)) {
                const isLidUser = requestedLidUsers.has(user);
                // Process all devices for this user
                for (const item of userDevices) {
                    const finalJid = isLidUser ?
                        jidEncode(user, item.server, item.device) :
                        jidEncode(item.user, item.server, item.device)
                    deviceResults.push({
                        ...item,
                        jid: finalJid
                    })

                    logger.debug({
                        user: item.user,
                        device: item.device,
                        finalJid,
                        usedLid: isLidUser
                    }, 'Processed device with LID priority')
                }
            }

            if (userDevicesCache.mset) {
                // if the cache supports mset, we can set all devices in one go
                await userDevicesCache.mset(Object.entries(deviceMap).map(([key, value]) => ({
                    key,
                    value
                })))
            } else {
                for (const key in deviceMap) {
                    if (deviceMap[key])
                        await userDevicesCache.set(key, deviceMap[key])
                }
            }

            const userDeviceUpdates = {}

            for (const [userId, devices] of Object.entries(deviceMap)) {
                if (devices && devices.length > 0) {
                    userDeviceUpdates[userId] = devices.map(d => d.device?.toString() || '0')
                }
            }

            if (Object.keys(userDeviceUpdates).length > 0) {
                try {
                    await authState.keys.set({
                        'device-list': userDeviceUpdates
                    })

                    logger.debug({
                        userCount: Object.keys(userDeviceUpdates).length
                    }, 'stored user device lists for bulk migration')
                } catch (error) {
                    logger.warn({
                        error
                    }, 'failed to store user device lists')
                }
            }
        }

        return deviceResults
    }

    const updateMemberLabel = (jid, memberLabel) => {
        if (!isJidGroup(jid)) {
            throw new Error('Jid must a group!')
        }

        const protocolMessage = {
            protocolMessage: {
                type: proto.Message.ProtocolMessage.Type.GROUP_MEMBER_LABEL_CHANGE,
                memberLabel: {
                    label: memberLabel?.slice(0, 30),
                    labelTimestamp: unixTimestampSeconds()
                }
            }
        }

        return relayMessage(jid, protocolMessage, {
            additionalNodes: [{
                tag: 'meta',
                attrs: {
                    tag_reason: 'user_update',
                    appdata: 'member_tag'
                }
            }]
        })
    }

    const assertSessions = async (jids, force) => {
        let didFetchNewSession = false

        const uniqueJids = [...new Set(jids)] // Deduplicate JIDs
        const jidsRequiringFetch = []

        logger.debug({
            jids
        }, 'assertSessions call with jids')

        // Check peerSessionsCache and validate sessions using libsignal loadSession
        for (const jid of uniqueJids) {
            const signalId = signalRepository.jidToSignalProtocolAddress(jid)
            const cachedSession = peerSessionsCache.get(signalId)

            if (cachedSession !== undefined) {
                if (cachedSession && !force) {
                    continue // Session exists in cache
                }
            } else {
                const sessionValidation = await signalRepository.validateSession(jid)
                const hasSession = sessionValidation.exists

                peerSessionsCache.set(signalId, hasSession)

                if (hasSession && !force) {
                    continue
                }
            }

            jidsRequiringFetch.push(jid)
        }

        if (jidsRequiringFetch.length) {
            // LID if mapped, otherwise original
            const wireJids = [
                ...jidsRequiringFetch.filter(jid => !!isLidUser(jid) || !!isHostedLidUser(jid)),
                ...((await signalRepository.lidMapping.getLIDsForPNs(jidsRequiringFetch.filter(jid => !!isPnUser(jid) || !!isHostedPnUser(jid)))) || []).map(a => a.lid)
            ]

            logger.debug({
                jidsRequiringFetch,
                wireJids
            }, 'fetching sessions')

            const result = await query({
                tag: 'iq',
                attrs: {
                    xmlns: 'encrypt',
                    type: 'get',
                    to: S_WHATSAPP_NET
                },
                content: [{
                    tag: 'key',
                    attrs: {},
                    content: wireJids.map(jid => {
                        const attrs = {
                            jid
                        }

                        if (force) attrs.reason = 'identity'

                        return {
                            tag: 'user',
                            attrs
                        }
                    })
                }]
            })

            await parseAndInjectE2ESessions(result, signalRepository)

            didFetchNewSession = true

            // Cache fetched sessions using wire JIDs
            for (const wireJid of wireJids) {
                const signalId = signalRepository.jidToSignalProtocolAddress(wireJid)
                peerSessionsCache.set(signalId, true)
            }
        }

        return didFetchNewSession
    }

    const sendPeerDataOperationMessage = async (pdoMessage) => {
        //TODO: for later, abstract the logic to send a Peer Message instead of just PDO - useful for App State Key Resync with phone
        if (!authState.creds.me?.id) {
            throw new Boom('Not authenticated')
        }

        const protocolMessage = {
            protocolMessage: {
                peerDataOperationRequestMessage: pdoMessage,
                type: proto.Message.ProtocolMessage.Type.PEER_DATA_OPERATION_REQUEST_MESSAGE
            }
        }

        const meJid = jidNormalizedUser(authState.creds.me.id)
        const msgId = await relayMessage(meJid, protocolMessage, {
            additionalAttributes: {
                category: 'peer',
                push_priority: 'high_force'
            },
            additionalNodes: [{
                tag: 'meta',
                attrs: {
                    appdata: 'default'
                }
            }]
        })

        return msgId
    }

    const createParticipantNodes = async (recipientJids, message, extraAttrs, dsmMessage) => {
        if (!recipientJids.length) {
            return {
                nodes: [],
                shouldIncludeDeviceIdentity: false
            }
        }

        const patched = await patchMessageBeforeSending(message, recipientJids)
        const patchedMessages = Array.isArray(patched) ?
            patched :
            recipientJids.map(jid => ({
                recipientJid: jid,
                message: patched
            }))

        let shouldIncludeDeviceIdentity = false

        const meId = authState.creds.me.id
        const meLid = authState.creds.me?.lid
        const meLidUser = meLid ? jidDecode(meLid)?.user : null
        const encryptionPromises = patchedMessages.map(async ({
            recipientJid: jid,
            message: patchedMessage
        }) => {
            if (!jid) return null

            let msgToEncrypt = patchedMessage

            if (dsmMessage) {
                const {
                    user: targetUser
                } = jidDecode(jid)
                const {
                    user: ownPnUser
                } = jidDecode(meId)
                const ownLidUser = meLidUser
                const isOwnUser = targetUser === ownPnUser || (ownLidUser && targetUser === ownLidUser)
                const isExactSenderDevice = jid === meId || (meLid && jid === meLid)

                if (isOwnUser && !isExactSenderDevice) {
                    msgToEncrypt = dsmMessage
                    logger.debug({
                        jid,
                        targetUser
                    }, 'Using DSM for own device')
                }
            }

            const bytes = encodeWAMessage(msgToEncrypt)
            const mutexKey = jid
            const node = await encryptionMutex.mutex(mutexKey, async () => {
                const {
                    type,
                    ciphertext
                } = await signalRepository.encryptMessage({
                    jid,
                    data: bytes
                })

                if (type === 'pkmsg') {
                    shouldIncludeDeviceIdentity = true
                }

                return {
                    tag: 'to',
                    attrs: {
                        jid
                    },
                    content: [{
                        tag: 'enc',
                        attrs: {
                            v: '2',
                            type,
                            ...extraAttrs
                        },
                        content: ciphertext
                    }]
                };
            })

            return node
        })

        const nodes = (await Promise.all(encryptionPromises)).filter(node => node !== null)

        return {
            nodes,
            shouldIncludeDeviceIdentity
        }
    }

    /** Fetch image for groups, user, and newsletter **/
    const profilePictureUrl = async (jid) => {
        if (isJidNewsletter(jid)) {
            const metadata = await suki.newsletterMetadata('JID', jid)

            return getUrlFromDirectPath(metadata.thread_metadata.picture?.direct_path || '')

        } else {
            const result = await query({
                tag: 'iq',
                attrs: {
                    target: jidNormalizedUser(jid),
                    to: S_WHATSAPP_NET,
                    type: 'get',
                    xmlns: 'w:profile:picture'
                },
                content: [{
                    tag: 'picture',
                    attrs: {
                        type: 'image',
                        query: 'url'
                    }
                }]
            })

            const child = getBinaryNodeChild(result, 'picture')

            return child?.attrs?.url || null
        }
    }

    const buildExtraAttrs = (message) => {
        const extraAttrs = {}
        const mediaType = getMediaType(message)

        const isDecryptHide = message.reactionMessage ||
            message.pinInChatMessage ||
            message.keepInChatMessage ||
            message.pollUpdateMessage ||
            message.encReactionMessage ||
            message.encEventResponseMessage ||
            message.protocolMessage?.type === proto.Message.ProtocolMessage.Type.MESSAGE_EDIT ||
            message.secretEncryptedMessage?.secretEncType === proto.Message.SecretEncryptedMessage.SecretEncType.EVENT_EDIT

        if (mediaType) {
            extraAttrs['mediatype'] = mediaType
        }

        if (isDecryptHide) {
            extraAttrs['decrypt-fail'] = 'hide'
        }

        if (message.interactiveResponseMessage?.nativeFlowResponseMessage) {
            extraAttrs['native_flow_name'] = message.interactiveResponseMessage.nativeFlowResponseMessage?.name || 'menu_options'
        }

        return extraAttrs
    }

    const relayMessage = async (jid, message, {
        messageId: msgId,
        participant,
        additionalAttributes,
        useUserDevicesCache,
        useCachedGroupMetadata,
        statusJidList,
        additionalNodes,
        ai = false
    }) => {
        const meId = authState.creds.me.id
        const meLid = authState.creds.me?.lid
        const isRetryResend = Boolean(participant?.jid)

        let shouldIncludeDeviceIdentity = isRetryResend
        let didPushAdditional = false

        const statusJid = 'status@broadcast'
        const {
            user,
            server
        } = jidDecode(jid)
        const isGroup = server === 'g.us'
        const isStatus = jid === statusJid
        const isLid = server === 'lid'
        const isNewsletter = server === 'newsletter'
        const isGroupOrStatus = isGroup || isStatus

        msgId = msgId || generateMessageID(meId)
        useUserDevicesCache = useUserDevicesCache !== false;
        useCachedGroupMetadata = useCachedGroupMetadata !== false && !isStatus

        const participants = []
        const destinationJid = !isStatus ? jid : statusJid
        const binaryNodeContent = []
        const devices = []

        const meMsg = {
            deviceSentMessage: {
                destinationJid,
                message
            },
            messageContextInfo: message.messageContextInfo
        }

        const additionalNodesArr = additionalNodes || []
        const messageNormalized = normalizeMessageContent(message)

        const regexGroupOld = /^(\d{1,15})-(\d+)@g\.us$/
        const buttonType = getButtonsType(messageNormalized)
        const extraAttrs = buildExtraAttrs(messageNormalized)

        if (participant) {
            if (!isGroup && !isStatus) {
                additionalAttributes = {
                    ...additionalAttributes,
                    device_fanout: 'false'
                }
            }

            const {
                user,
                device
            } = jidDecode(participant.jid)

            devices.push({
                user,
                device,
                jid: participant.jid
            })
        }

        await authState.keys.transaction(async () => {
            if (isNewsletter) {
                const patched = patchMessageBeforeSending ? await patchMessageBeforeSending(message, []) : message
                const bytes = encodeNewsletterMessage(patched)

                binaryNodeContent.push({
                    tag: 'plaintext',
                    attrs: {
                        ...extraAttrs
                    },
                    content: bytes
                })
            } else if (isGroupOrStatus && !isRetryResend) {
                const [groupData, senderKeyMap] = await Promise.all([
                    (async () => {
                        let groupData = useCachedGroupMetadata && cachedGroupMetadata ? await cachedGroupMetadata(jid) : undefined // todo: should we rely on the cache specially if the cache is outdated and the metadata has new fields?

                        if (groupData && Array.isArray(groupData?.participants)) {
                            logger.trace({
                                jid,
                                participants: groupData.participants.length
                            }, 'using cached group metadata')
                        } else if (!isStatus) {
                            groupData = await groupMetadata(jid) // TODO: start storing group participant list + addr mode in Signal & stop relying on this
                        }

                        return groupData
                    })(),
                    (async () => {
                        if (!participant && !isStatus) {
                            // what if sender memory is less accurate than the cached metadata
                            // on participant change in group, we should do sender memory manipulation
                            const result = await authState.keys.get('sender-key-memory', [jid]) // TODO: check out what if the sender key memory doesn't include the LID stuff now?

                            return result[jid] || {}
                        }

                        return {}
                    })()
                ])

                const participantsList = groupData ? groupData.participants.map(p => p.id) : []

                if (groupData?.ephemeralDuration && groupData.ephemeralDuration > 0) {
                    additionalAttributes = {
                        ...additionalAttributes,
                        expiration: groupData.ephemeralDuration.toString()
                    }
                }

                if (isStatus && statusJidList) {
                    participantsList.push(...statusJidList)
                }

                const additionalDevices = await getUSyncDevices(participantsList, !!useUserDevicesCache, false)

                devices.push(...additionalDevices)

                if (isGroup) {
                    additionalAttributes = {
                        ...additionalAttributes,
                        addressing_mode: groupData?.addressingMode || 'lid'
                    }
                }

                const patched = await patchMessageBeforeSending(message)

                if (Array.isArray(patched)) {
                    throw new Boom('Per-jid patching is not supported in groups')
                }

                const bytes = encodeWAMessage(patched)
                const groupAddressingMode = additionalAttributes?.['addressing_mode'] || groupData?.addressingMode || 'lid'
                const groupSenderIdentity = groupAddressingMode === 'lid' && meLid ? meLid : meId
                const {
                    ciphertext,
                    senderKeyDistributionMessage
                } = await signalRepository.encryptGroupMessage({
                    group: destinationJid,
                    data: bytes,
                    meId: groupSenderIdentity
                })

                const senderKeyRecipients = []

                for (const device of devices) {
                    const deviceJid = device.jid
                    const hasKey = !!senderKeyMap[deviceJid]

                    if ((!hasKey || !!participant) &&
                        !isHostedLidUser(deviceJid) &&
                        !isHostedPnUser(deviceJid) &&
                        device.device !== 99) {
                        //todo: revamp all this logic
                        // the goal is to follow with what I said above for each group, and instead of a true false map of ids, we can set an array full of those the app has already sent pkmsgs
                        senderKeyRecipients.push(deviceJid)
                        senderKeyMap[deviceJid] = true
                    }
                }

                if (senderKeyRecipients.length) {
                    logger.debug({
                        senderKeyJids: senderKeyRecipients
                    }, 'sending new sender key')

                    const senderKeyMsg = {
                        senderKeyDistributionMessage: {
                            axolotlSenderKeyDistributionMessage: senderKeyDistributionMessage,
                            groupId: destinationJid
                        }
                    }

                    const senderKeySessionTargets = senderKeyRecipients

                    await assertSessions(senderKeySessionTargets)

                    const result = await createParticipantNodes(senderKeyRecipients, senderKeyMsg, extraAttrs)

                    shouldIncludeDeviceIdentity = shouldIncludeDeviceIdentity || result.shouldIncludeDeviceIdentity;
                    participants.push(...result.nodes)
                }

                binaryNodeContent.push({
                    tag: 'enc',
                    attrs: {
                        v: '2',
                        type: 'skmsg',
                        ...extraAttrs
                    },
                    content: ciphertext
                })

                await authState.keys.set({
                    'sender-key-memory': {
                        [jid]: senderKeyMap
                    }
                })
            } else {
                // ADDRESSING CONSISTENCY: Match own identity to conversation context
                // TODO: investigate if this is true
                let ownId = meId

                if (isLid && meLid) {
                    ownId = meLid;
                    logger.debug({
                        to: jid,
                        ownId
                    }, 'Using LID identity for @lid conversation')
                } else {
                    logger.debug({
                        to: jid,
                        ownId
                    }, 'Using PN identity for @s.whatsapp.net conversation')
                }

                const {
                    user: ownUser
                } = jidDecode(ownId)

                if (!isRetryResend) {
                    const targetUserServer = isLid ? 'lid' : 's.whatsapp.net'

                    devices.push({
                        user,
                        device: 0,
                        jid: jidEncode(user, targetUserServer, 0) // rajeh, todo: this entire logic is convoluted and weird.
                    })

                    if (user !== ownUser) {
                        const ownUserServer = isLid ? 'lid' : 's.whatsapp.net'
                        const ownUserForAddressing = isLid && meLid ? jidDecode(meLid).user : jidDecode(meId).user

                        devices.push({
                            user: ownUserForAddressing,
                            device: 0,
                            jid: jidEncode(ownUserForAddressing, ownUserServer, 0)
                        })
                    }

                    if (additionalAttributes?.['category'] !== 'peer') {
                        // Clear placeholders and enumerate actual devices
                        devices.length = 0

                        // Use conversation-appropriate sender identity
                        const senderIdentity = isLid && meLid ?
                            jidEncode(jidDecode(meLid)?.user, 'lid', undefined) :
                            jidEncode(jidDecode(meId)?.user, 's.whatsapp.net', undefined)
                        // Enumerate devices for sender and target with consistent addressing
                        const sessionDevices = await getUSyncDevices([senderIdentity, jid], true, false)

                        devices.push(...sessionDevices)

                        logger.debug({
                            deviceCount: devices.length,
                            devices: devices.map(d => `${d.user}:${d.device}@${jidDecode(d.jid)?.server}`)
                        }, 'Device enumeration complete with unified addressing')
                    }
                }

                const allRecipients = []
                const meRecipients = []
                const otherRecipients = []

                const {
                    user: mePnUser
                } = jidDecode(meId)
                const {
                    user: meLidUser
                } = meLid ? jidDecode(meLid) : {
                    user: null
                }

                for (const {
                        user,
                        jid
                    }
                    of devices) {
                    const isExactSenderDevice = jid === meId || (meLid && jid === meLid)

                    if (isExactSenderDevice) {
                        logger.debug({
                            jid,
                            meId,
                            meLid
                        }, 'Skipping exact sender device (whatsmeow pattern)')
                        continue
                    }

                    // Check if this is our device (could match either PN or LID user)
                    const isMe = user === mePnUser || user === meLidUser

                    if (isMe) {
                        meRecipients.push(jid);
                    } else {
                        otherRecipients.push(jid)
                    }

                    allRecipients.push(jid)
                }

                await assertSessions(allRecipients)

                const [{
                    nodes: meNodes,
                    shouldIncludeDeviceIdentity: s1
                }, {
                    nodes: otherNodes,
                    shouldIncludeDeviceIdentity: s2
                }] = await Promise.all([
                    // For own devices: use DSM if available (1:1 chats only)
                    createParticipantNodes(meRecipients, meMsg || message, extraAttrs),
                    createParticipantNodes(otherRecipients, message, extraAttrs, meMsg)
                ])

                participants.push(...meNodes)
                participants.push(...otherNodes)

                if (meRecipients.length > 0 || otherRecipients.length > 0) {
                    extraAttrs['phash'] = generateParticipantHashV2([...meRecipients, ...otherRecipients])
                }

                shouldIncludeDeviceIdentity = shouldIncludeDeviceIdentity || s1 || s2
            }

            if (isRetryResend) {
                const isParticipantLid = isLidUser(participant.jid)
                const isMe = areJidsSameUser(participant.jid, isParticipantLid ? meLid : meId)
                const encodedMessageToSend = isMe ?
                    encodeWAMessage({
                        deviceSentMessage: {
                            destinationJid,
                            message
                        }
                    }) :
                    encodeWAMessage(message)
                const {
                    type,
                    ciphertext: encryptedContent
                } = await signalRepository.encryptMessage({
                    data: encodedMessageToSend,
                    jid: participant.jid
                })

                binaryNodeContent.push({
                    tag: 'enc',
                    attrs: {
                        v: '2',
                        type,
                        count: participant.count.toString()
                    },
                    content: encryptedContent
                })
            }

            if (participants.length) {
                if (additionalAttributes?.['category'] === 'peer') {
                    const peerNode = participants[0]?.content?.[0]

                    if (peerNode) {
                        binaryNodeContent.push(peerNode) // push only enc
                    }
                } else {
                    binaryNodeContent.push({
                        tag: 'participants',
                        attrs: {},
                        content: participants
                    });
                }
            }

            const stanza = {
                tag: 'message',
                attrs: {
                    id: msgId,
                    to: destinationJid,
                    type: getTypeMessage(messageNormalized),
                    ...(additionalAttributes || {})
                },
                content: binaryNodeContent
            }

            // if the participant to send to is explicitly specified (generally retry recp)
            // ensure the message is only sent to that person
            // if a retry receipt is sent to everyone -- it'll fail decryption for everyone else who received the msg
            if (participant) {
                if (isJidGroup(destinationJid)) {
                    stanza.attrs.to = destinationJid
                    stanza.attrs.participant = participant.jid
                } else if (areJidsSameUser(participant.jid, meId)) {
                    stanza.attrs.to = participant.jid
                    stanza.attrs.recipient = destinationJid
                } else {
                    stanza.attrs.to = participant.jid
                }
            } else {
                stanza.attrs.to = destinationJid
            }

            if (shouldIncludeDeviceIdentity) {
                stanza.content.push({
                    tag: 'device-identity',
                    attrs: {},
                    content: encodeSignedDeviceIdentity(authState.creds.account, true)
                })

                logger.debug({
                    jid
                }, 'adding device identity')
            }

            const contactTcTokenData = !isGroup && !isRetryResend && !isStatus ? await authState.keys.get('tctoken', [destinationJid]) : {}
            const tcTokenBuffer = contactTcTokenData[destinationJid]?.token

            if (tcTokenBuffer) {
                stanza.content.push({
                    tag: 'tctoken',
                    attrs: {},
                    content: tcTokenBuffer
                })
            }

            if (isGroup && regexGroupOld.test(jid) && !message.reactionMessage) {
                stanza.content.push({
                    tag: 'multicast',
                    attrs: {}
                })
            }

            const needsButtonNode = !isNewsletter && !!buttonType
            const needsBotNode = ai && isLid

            const buttonOverride = needsButtonNode ? hasButtonOverride(additionalNodesArr) : false
            const botOverride = needsBotNode ? hasBotOverride(additionalNodesArr) : false

            if (buttonOverride || botOverride) {
                stanza.content.push(...additionalNodesArr)
            } else {
                if (needsButtonNode) {
                    stanza.content.push(buildButtonsArgs(messageNormalized))
                }

                if (needsBotNode) {
                    stanza.content.push({
                        tag: 'bot',
                        attrs: {
                            biz_bot: '1'
                        }
                    })
                }

                if (additionalNodesArr.length > 0) {
                    stanza.content.push(...additionalNodesArr)
                }
            }

            logger.debug({
                msgId
            }, `sending message to ${participants.length} devices`)

            await sendNode(stanza)

            // Add message to retry cache if enabled
            if (messageRetryManager && !participant) {
                messageRetryManager.addRecentMessage(destinationJid, msgId, message)
            }
        }, meId)

        return msgId
    }

    const getTypeMessage = (message) => {
        if (message.pollCreationMessage || message.pollCreationMessageV2 || message.pollCreationMessageV3) {
            return 'poll'
        } else if (message.reactionMessage) {
            return 'reaction'
        } else if (message.eventMessage) {
            return 'event'
        } else if (getMediaType(message)) {
            return 'media'
        } else {
            return 'text'
        }
    }

    const getMediaType = (message) => {
        if (message.imageMessage) {
            return 'image'
        } else if (message.stickerMessage) {
            return message.stickerMessage.isLottie ? '1p_sticker' : message.stickerMessage.isAvatar ? 'avatar_sticker' : 'sticker'
        } else if (message.videoMessage) {
            return message.videoMessage.gifPlayback ? 'gif' : 'video'
        } else if (message.audioMessage) {
            return message.audioMessage.ptt ? 'ptt' : 'audio'
        } else if (message.ptvMessage) {
            return 'ptv'
        } else if (message.albumMessage) {
            return 'collection'
        } else if (message.contactMessage) {
            return 'vcard'
        } else if (message.documentMessage) {
            return 'document'
        } else if (message.stickerPackMessage) {
            return 'sticker_pack'
        } else if (message.contactsArrayMessage) {
            return 'contact_array'
        } else if (message.locationMessage) {
            return 'location'
        } else if (message.liveLocationMessage) {
            return 'livelocation'
        } else if (message.listMessage) {
            return 'list'
        } else if (message.listResponseMessage) {
            return 'list_response'
        } else if (message.buttonsResponseMessage) {
            return 'buttons_response'
        } else if (message.orderMessage) {
            return 'order'
        } else if (message.productMessage) {
            return 'product'
        } else if (message.interactiveResponseMessage) {
            return 'native_flow_response'
        } else if (/https:\/\/wa\.me\/c\/\d+/.test(message.extendedTextMessage?.text)) {
            return 'cataloglink'
        } else if (/https:\/\/wa\.me\/p\/\d+\/\d+/.test(message.extendedTextMessage?.text)) {
            return 'productlink'
        } else if (message.extendedTextMessage?.matchedText || message.groupInviteMessage) {
            return 'url'
        }
    }

    const getButtonsType = (message) => {
        if (message.listMessage) {
            return 'list'
        } else if (message.buttonsMessage) {
            return 'buttons'
        } else if (message.interactiveMessage) {
            return 'interactive'
        }
    }

    const buildButtonsArgs = (message) => {
        const stanza = {
            tag: 'biz',
            attrs: {
                actual_actors: '2',
                host_storage: '2',
                privacy_mode_ts: unixTimestampSeconds().toString()
            },
            content: undefined
        }

        const nativeFlow = message.interactiveMessage?.nativeFlowMessage
        const firstButtonName = nativeFlow?.buttons?.[0]?.name
        const nativeFlowSpecials = [
            'mpm', 'cta_catalog', 'send_location',
            'call_permission_request', 'wa_payment_transaction_details',
            'automated_greeting_message_view_catalog'
        ]

        if (nativeFlow && (firstButtonName === 'review_and_pay' || firstButtonName === 'payment_info')) {
            stanza.attrs['native_flow_name'] = firstButtonName === 'review_and_pay' ? 'order_details' : firstButtonName
        } else if (nativeFlow && nativeFlowSpecials.includes(firstButtonName)) {
            // Only works for WhatsApp Original, not WhatsApp Business
            stanza.content = []
            stanza.content.push({
                tag: 'interactive',
                attrs: {
                    type: 'native_flow',
                    v: '1'
                },
                content: [{
                    tag: 'native_flow',
                    attrs: {
                        v: '2',
                        name: firstButtonName
                    }
                }]
            }, {
                tag: 'quality_control',
                attrs: {
                    source_type: 'third_party'
                }
            })
        } else if (nativeFlow || message.buttonsMessage) {
            // It works for whatsapp original and whatsapp business
            stanza.content = []
            stanza.content.push({
                tag: 'interactive',
                attrs: {
                    type: 'native_flow',
                    v: '1'
                },
                content: [{
                    tag: 'native_flow',
                    attrs: {
                        v: '9',
                        name: 'mixed'
                    }
                }]
            }, {
                tag: 'quality_control',
                attrs: {
                    source_type: 'third_party'
                }
            })
        } else if (message.listMessage) {
            stanza.content = []
            stanza.content.push({
                tag: 'list',
                attrs: {
                    v: '2',
                    type: 'product_list'
                }
            }, {
                tag: 'quality_control',
                attrs: {
                    source_type: 'third_party'
                }
            })
        } else if (message.interactiveMessage?.carouselMessage) {
            stanza.content = []
            stanza.content.push({
                tag: 'interactive',
                attrs: {
                    type: 'native_flow',
                    v: '1'
                },
                content: [{
                    tag: 'native_flow',
                    attrs: {
                        v: '6',
                        name: 'mixed'
                    }
                }]
            }, {
                tag: 'quality_control',
                attrs: {
                    source_type: 'third_party'
                }
            })
        }

        return stanza
    }

    const getPrivacyTokens = async (jids) => {
        const t = unixTimestampSeconds().toString()

        const result = await query({
            tag: 'iq',
            attrs: {
                to: S_WHATSAPP_NET,
                type: 'set',
                xmlns: 'privacy'
            },
            content: [{
                tag: 'tokens',
                attrs: {},
                content: jids.map(jid => ({
                    tag: 'token',
                    attrs: {
                        jid: jidNormalizedUser(jid),
                        t,
                        type: 'trusted_contact'
                    }
                }))
            }]
        })

        return result
    }

    const getEphemeralGroup = (jid) => {
        if (!isJidGroup(jid)) throw new TypeError("Jid should originate from a group!")

        return groupQuery(jid, 'get', [{
                tag: 'query',
                attrs: {
                    request: 'interactive'
                }
            }])
            .then((groups) => getBinaryNodeChild(groups, 'group'))
            .then((metadata) => getBinaryNodeChild(metadata, 'ephemeral')?.attrs?.expiration || 0)
    }

    const buildAdditionalAttributes = (content, isNewsletter) => {
        const attrs = {}

        const isPinMessage = 'pin' in content && !!content.pin
        const isKeepMessage = 'keep' in content && !!content.keep && content.keep?.type === 2
        const isDeleteMessage = 'delete' in content && !!content.delete
        const isEditMessage = 'edit' in content && !!content.edit

        let fromMe, remoteJid

        if (isDeleteMessage) {
            remoteJid = content.delete.remoteJid
            fromMe = content.delete.fromMe
        } else if (isKeepMessage) {
            remoteJid = content.keep.key.remoteJid
            fromMe = content.keep.key.fromMe
        }

        const isRemoteGroup = isJidGroup(remoteJid)
        const notAuthor = fromMe !== true

        if (isDeleteMessage || isKeepMessage) {
            if ((isRemoteGroup && notAuthor) || isNewsletter) {
                attrs['edit'] = '8'
            } else {
                attrs['edit'] = '7'
            }
        } else if (isEditMessage) {
            attrs['edit'] = isNewsletter ? '3' : '1'
        } else if (isPinMessage) {
            attrs['edit'] = '2'
        }

        return attrs
    }

    const buildAdditionalNodes = (content, isNewsletter, userNodes = []) => {
        const stanza = {
            tag: 'meta',
            attrs: {},
            content: undefined
        }

        const isEventMessage = 'event' in content && !!content.event
        const isEventEditMessage = null // TODO
        const isEventResponseMessage = null // TODO
        const isPollMessage = 'poll' in content && !!content.poll
        const isPollVoteMessage = null // TODO
        const isReactOrPinOrKeepMessage = 'react' in content && !!content.react || ('pin' in content && !!content.pin || 'keep' in content && !!content.keep)
        const isCommentMessage = null // TODO

        if (isEventMessage) {
            stanza.attrs['event_type'] = 'creation'
        } else if (isEventEditMessage) {
            stanza.attrs['event_type'] = 'edit'
        } else if (isEventResponseMessage) {
            stanza.attrs['event_type'] = 'response'
            stanza.attrs['content_type'] = 'add_on'
        } else if (isPollMessage) {
            if (!isNewsletter) {
                stanza.attrs['polltype'] = 'creation'
            } else {
                const pollType = content.poll?.quiz
                const isPollQuiz = pollType === true
                const pollContent = content.poll?.type
                const isPollMedia = pollContent === proto.Message.PollContentType.IMAGE

                stanza.attrs['polltype'] = (pollType === undefined || !isPollQuiz) ? 'creation' : 'quiz_creation'
                stanza.attrs['contenttype'] = (pollContent === undefined || !isPollMedia) ? 'text' : 'image'
            }
        } else if (isPollVoteMessage) {
            stanza.attrs['polltype'] = 'vote'
            stanza.attrs['content_type'] = 'add_on'
        } else if (isReactOrPinOrKeepMessage) {
            stanza.attrs['content_type'] = 'add_on'
        } else if (isCommentMessage) {
            stanza.attrs['thread_msg_id'] = null // TODO
            stanza.attrs['thread_msg_sender_jid'] = null // TODO
        }

        if (Object.keys(stanza.attrs).length === 0) {
            return [...userNodes]
        }

        const userMetaIdx = userNodes.findIndex(n => n.tag === 'meta')

        if (userMetaIdx !== -1) {
            const result = [...userNodes]
            result[userMetaIdx] = {
                ...userNodes[userMetaIdx],
                attrs: {
                    ...stanza.attrs,
                    ...userNodes[userMetaIdx].attrs
                }
            }
            return result
        }

        return [stanza, ...userNodes]
    }

    const waUploadToServer = getWAUploadToServer(config, refreshMediaConn)

    const waitForMsgMediaUpdate = bindWaitForEvent(ev, 'messages.media-update')

    return {
        ...suki,
        getPrivacyTokens,
        assertSessions,
        profilePictureUrl,
        relayMessage,
        sendReceipt,
        sendReceipts,
        readMessages,
        getUSyncDevices,
        refreshMediaConn,
        waUploadToServer,
        getEphemeralGroup,
        fetchPrivacySettings,
        messageRetryManager,
        createParticipantNodes,
        sendPeerDataOperationMessage,
        updateMemberLabel,
        updateMediaMessage: async (message) => {
            const content = assertMediaContent(message.message)
            const mediaKey = content.mediaKey
            const meId = authState.creds.me.id
            const node = await encryptMediaRetryRequest(message.key, mediaKey, meId)

            let error = undefined

            await Promise.all([
                sendNode(node),
                waitForMsgMediaUpdate(async (update) => {
                    const result = update.find(c => c.key.id === message.key.id)

                    if (result) {
                        if (result.error) {
                            error = result.error
                        } else {
                            try {
                                const media = await decryptMediaRetryData(result.media, mediaKey, result.key.id)

                                if (media.result !== proto.MediaRetryNotification.ResultType.SUCCESS) {
                                    const resultStr = proto.MediaRetryNotification.ResultType[media.result]

                                    throw new Boom(`Media re-upload failed by device (${resultStr})`, {
                                        data: media,
                                        statusCode: getStatusCodeForMediaRetry(media.result) || 404
                                    })
                                }

                                content.directPath = media.directPath
                                content.url = getUrlFromDirectPath(content.directPath)
                                logger.debug({
                                    directPath: media.directPath,
                                    key: result.key
                                }, 'media update successful')
                            } catch (err) {
                                error = err
                            }
                        }

                        return true
                    }
                })
            ])

            if (error) {
                throw error
            }

            ev.emit('messages.update', [{
                key: message.key,
                update: {
                    message: message.message
                }
            }])

            return message
        },
        sendMessage: async (jid, content, options = {}) => {
            const userJid = authState.creds.me.id
            const isNewsletter = isJidNewsletter(jid)
            const additionalAttributes = buildAdditionalAttributes(content, isNewsletter)

            if ('cachedGroupMetadata' in options) {
                console.warn('cachedGroupMetadata in sendMessage are deprecated, now cachedGroupMetadata is part of the socket config.')
            }

            let fullMsg

            const isIconAI = 'ai' in content && !!content.ai

            if (!options.ephemeralExpiration) {
                if (isJidGroup(jid)) {
                    const expiration = await getEphemeralGroup(jid)
                    options.ephemeralExpiration = expiration
                }
            }

            if (typeof content === 'object' &&
                'disappearingMessagesInChat' in content &&
                typeof content['disappearingMessagesInChat'] !== 'undefined' &&
                isJidGroup(jid)) {

                const {
                    disappearingMessagesInChat
                } = content

                const value = typeof disappearingMessagesInChat === 'boolean' ?
                    (disappearingMessagesInChat ? WA_DEFAULT_EPHEMERAL : 0) :
                    disappearingMessagesInChat

                await groupToggleEphemeral(jid, value)
            } else if (typeof content === 'object' && 'statusMentions' in content && Array.isArray(content.statusMentions)) {
                const {
                    statusMentions,
                    ...restContent
                } = content
                fullMsg = await prepareStatusMentionMessageContent(jid, restContent, statusMentions, {
                    relayMessage,
                    waUploadToServer,
                    groupMetadata,
                    userJid,
                    logger,
                    mediaCache: config.mediaCache,
                    options: config.options,
                    ...options
                })
            } else if (typeof content === 'object' && 'album' in content && content.album) {
                const {
                    albumMsg,
                    messages
                } = await prepareAlbumMessageContent(jid, content.album, {
                    waUploadToServer,
                    relayMessage,
                    userJid,
                    ...options
                })

                for (const media of messages) {
                    if (media.handle) {
                        additionalAttributes['media_id'] = media.handle
                    }
                    await delay(options.delay ?? 500)
                    await relayMessage(jid, media.message, {
                        messageId: media.key.id,
                        useCachedGroupMetadata: options.useCachedGroupMetadata,
                        additionalAttributes,
                        additionalNodes: options.additionalNodes,
                        statusJidList: options.statusJidList,
                        ai: isIconAI
                    })
                }

                fullMsg = albumMsg
            } else {
                let mediaHandle

                fullMsg = await generateWAMessage(jid, content, {
                    logger,
                    userJid,
                    getUrlInfo: text => getUrlInfo(text, {
                        thumbnailWidth: linkPreviewImageThumbnailWidth,
                        fetchOpts: {
                            timeout: 3000,
                            ...(httpRequestOptions || {})
                        },
                        logger,
                        uploadImage: generateHighQualityLinkPreview ?
                            waUploadToServer : undefined
                    }),
                    getProfilePicUrl: profilePictureUrl,
                    getCallLink: createCallLink,
                    upload: async (encFilePath, opts) => {
                        const up = await waUploadToServer(encFilePath, {
                            ...opts,
                            newsletter: isNewsletter
                        })
                        mediaHandle = up.handle
                        return up
                    },
                    mediaCache: config.mediaCache,
                    options: config.options,
                    messageId: generateMessageID(userJid),
                    ...options
                })

                if (mediaHandle) {
                    additionalAttributes['media_id'] = mediaHandle
                }

                const additionalNodes = buildAdditionalNodes(
                    content,
                    isNewsletter,
                    options.additionalNodes
                )

                await relayMessage(jid, fullMsg.message, {
                    messageId: fullMsg.key.id,
                    useCachedGroupMetadata: options.useCachedGroupMetadata,
                    statusJidList: options.statusJidList,
                    additionalAttributes,
                    additionalNodes,
                    ai: isIconAI
                })
            }

            if (config.emitOwnEvents) {
                process.nextTick(async () => {
                    if (Array.isArray(fullMsg)) {
                        for (const obj of fullMsg) {
                            await messageMutex.mutex(() => upsertMessage(obj, 'append'))
                        }
                    } else {
                        await messageMutex.mutex(() => upsertMessage(fullMsg, 'append'))
                    }
                })
            }

            return fullMsg
        }
    }
}

module.exports = {
    makeMessagesSocket
}