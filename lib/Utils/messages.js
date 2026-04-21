"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    Boom
} = require("@hapi/boom")
const {
    randomBytes
} = require("crypto")
const {
    promises
} = require("fs")
const {
    zip
} = require("fflate")
const {
    proto
} = require("../../WAProto")
const {
    URL_REGEX,
    WA_DEFAULT_EPHEMERAL
} = require("../Defaults/constants")
const {
    MEDIA_KEYS
} = require("../Defaults/media")
const {
    WAProto,
    WAMessageStatus
} = require("../Types")
const {
    isPnUser,
    isLidUser,
    isJidGroup,
    isJidNewsletter,
    isJidStatusBroadcast,
    jidNormalizedUser
} = require("../WABinary")
const {
    sha256
} = require("./crypto")
const {
    delay,
    generateMessageID,
    getKeyAuthor,
    unixTimestampSeconds
} = require("./generics")
const {
    downloadContentFromMessage,
    encryptedStream,
    generateThumbnail,
    getAudioDuration,
    getAudioWaveform,
    getImageProcessingLibrary,
    getRawMediaUploadData,
    getStream,
    toBuffer
} = require("./messages-media")

const MIMETYPE_MAP = {
    image: 'image/jpeg',
    video: 'video/mp4',
    document: 'application/pdf',
    audio: 'audio/ogg codecs=opus',
    sticker: 'image/webp',
    'product-catalog-image': 'image/jpeg'
}

const MessageTypeProto = {
    'image': WAProto.Message.ImageMessage,
    'video': WAProto.Message.VideoMessage,
    'audio': WAProto.Message.AudioMessage,
    'sticker': WAProto.Message.StickerMessage,
    'document': WAProto.Message.DocumentMessage
}

/**
 * Uses a regex to test whether the string contains a URL, and returns the URL if it does.
 * @param text eg. hello https://google.com
 * @returns the URL, eg. https://google.com
 */
const extractUrlFromText = (text) => text.match(URL_REGEX)?.[0]

const generateLinkPreviewIfRequired = async (text, getUrlInfo, logger) => {
    const url = extractUrlFromText(text)

    if (!!getUrlInfo && url) {
        try {
            const urlInfo = await getUrlInfo(url)
            return urlInfo
        } catch (error) {
            logger?.warn({
                trace: error.stack
            }, 'url generation failed')
        }
    }
}

const assertColor = async (color) => {
    let assertedColor

    if (typeof color === 'number') {
        assertedColor = color > 0 ? color : 0xffffffff + Number(color) + 1
    } else {
        let hex = color.trim().replace('#', '')
        if (hex.length <= 6) {
            hex = 'FF' + hex.padStart(6, '0')
        }
        assertedColor = parseInt(hex, 16)
        return assertedColor
    }
}

const prepareWAMessageMedia = async (message, options) => {
    const logger = options.logger

    let mediaType

    for (const key of MEDIA_KEYS) {
        if (key in message) {
            mediaType = key
        }
    }

    if (!mediaType) {
        throw new Boom('Invalid media type', {
            statusCode: 400
        })
    }

    const uploadData = {
        ...message,
        media: message[mediaType]
    }

    delete uploadData[mediaType]

    // check if cacheable + generate cache key
    const cacheableKey = typeof uploadData.media === 'object' &&
        'url' in uploadData.media &&
        !!uploadData.media.url &&
        !!options.mediaCache &&
        mediaType + ':' + uploadData.media.url.toString()

    if (mediaType === 'document' && !uploadData.fileName) {
        uploadData.fileName = 'file'
    }

    if (!uploadData.mimetype) {
        uploadData.mimetype = MIMETYPE_MAP[options.mediaTypeOverride || mediaType]
    }

    if (cacheableKey) {
        const mediaBuff = await options.mediaCache.get(cacheableKey)

        if (mediaBuff) {
            logger?.debug({
                cacheableKey
            }, 'got media cache hit')

            const obj = proto.Message.decode(mediaBuff)
            const key = `${mediaType}Message`

            Object.assign(obj[key], {
                ...uploadData,
                media: undefined
            })

            return obj
        }
    }

    const isNewsletter = !!options.jid && isJidNewsletter(options.jid)

    if (isNewsletter) {
        logger?.info({
            key: cacheableKey
        }, 'Preparing raw media for newsletter')
        const {
            filePath,
            fileSha256,
            fileLength
        } = await getRawMediaUploadData(uploadData.media, options.mediaTypeOverride || mediaType, logger)
        const fileSha256B64 = fileSha256.toString('base64');
        const {
            mediaUrl,
            directPath
        } = await options.upload(filePath, {
            fileEncSha256B64: fileSha256B64,
            mediaType: mediaType,
            timeoutMs: options.mediaUploadTimeoutMs
        })

        await promises.unlink(filePath)

        const obj = WAProto.Message.fromObject({
            // todo: add more support here
            [`${mediaType}Message`]: MessageTypeProto[mediaType].fromObject({
                url: mediaUrl,
                directPath,
                fileSha256,
                fileLength,
                ...uploadData,
                media: undefined
            })
        })

        if (uploadData.ptv) {
            obj.ptvMessage = obj.videoMessage
            delete obj.videoMessage
        }

        if (obj.stickerMessage) {
            obj.stickerMessage.stickerSentTs = Date.now()
        }

        if (cacheableKey) {
            logger?.debug({
                cacheableKey
            }, 'set cache');
            await options.mediaCache.set(cacheableKey, WAProto.Message.encode(obj).finish())
        }

        return obj
    }

    const requiresDurationComputation = mediaType === 'audio' && typeof uploadData.seconds === 'undefined'
    const requiresThumbnailComputation = (mediaType === 'image' || mediaType === 'video') && typeof uploadData['jpegThumbnail'] === 'undefined'
    const requiresWaveformProcessing = mediaType === 'audio' && uploadData.ptt === true
    const requiresAudioBackground = options.backgroundColor && mediaType === 'audio' && uploadData.ptt === true
    const requiresOriginalForSomeProcessing = requiresDurationComputation || requiresThumbnailComputation
    const {
        mediaKey,
        encFilePath,
        originalFilePath,
        fileEncSha256,
        fileSha256,
        fileLength
    } = await encryptedStream(uploadData.media, options.mediaTypeOverride || mediaType, {
        logger,
        saveOriginalFileIfRequired: requiresOriginalForSomeProcessing,
        opts: options.options
    })
    const fileEncSha256B64 = fileEncSha256.toString('base64')
    const [{
        mediaUrl,
        directPath
    }] = await Promise.all([
        (async () => {
            const result = await options.upload(encFilePath, {
                fileEncSha256B64,
                mediaType,
                timeoutMs: options.mediaUploadTimeoutMs
            })
            logger?.debug({
                mediaType,
                cacheableKey
            }, 'uploaded media')
            return result
        })(),
        (async () => {
            try {
                if (requiresThumbnailComputation) {
                    const {
                        thumbnail,
                        originalImageDimensions
                    } = await generateThumbnail(originalFilePath, mediaType, options)

                    uploadData.jpegThumbnail = thumbnail

                    if (!uploadData.width && originalImageDimensions) {
                        uploadData.width = originalImageDimensions.width
                        uploadData.height = originalImageDimensions.height
                        logger?.debug('set dimensions')
                    }
                    logger?.debug('generated thumbnail')
                }

                if (requiresDurationComputation) {
                    uploadData.seconds = await getAudioDuration(originalFilePath)
                    logger?.debug('computed audio duration')
                }

                if (requiresWaveformProcessing) {
                    uploadData.waveform = await getAudioWaveform(originalFilePath, logger)
                    logger?.debug('processed waveform')
                }

                if (requiresAudioBackground) {
                    uploadData.backgroundArgb = await assertColor(options.backgroundColor)
                    logger?.debug('computed backgroundColor audio status')
                }
            } catch (error) {
                logger?.warn({
                    trace: error.stack
                }, 'failed to obtain extra info')
            }
        })()
    ]).finally(async () => {
        try {
            await promises.unlink(encFilePath)

            if (originalFilePath) {
                await promises.unlink(originalFilePath)
            }

            logger?.debug('removed tmp files')
        } catch (error) {
            logger?.warn('failed to remove tmp file')
        }
    })

    const obj = WAProto.Message.fromObject({
        [`${mediaType}Message`]: MessageTypeProto[mediaType].fromObject({
            url: mediaUrl,
            directPath,
            mediaKey,
            fileEncSha256,
            fileSha256,
            fileLength,
            mediaKeyTimestamp: unixTimestampSeconds(),
            ...uploadData,
            media: undefined
        })
    })

    if (uploadData.ptv) {
        obj.ptvMessage = obj.videoMessage
        delete obj.videoMessage
    }
    
    if (obj.stickerMessage) {
    	obj.stickerMessage.stickerSentTs = Date.now()
    }

    if (cacheableKey) {
        logger?.debug({
            cacheableKey
        }, 'set cache')
        await options.mediaCache.set(cacheableKey, WAProto.Message.encode(obj).finish())
    }

    return obj
}

const prepareDisappearingMessageSettingContent = (expiration) => {
    const content = {
        ephemeralMessage: {
            message: {
                protocolMessage: {
                    type: WAProto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING,
                    ephemeralExpiration: expiration ? expiration : 0
                }
            }
        }
    }

    return WAProto.Message.fromObject(content)
}

const prepareAlbumMessageContent = async (jid, albums, options) => {
    if (!Array.isArray(albums) || albums.length === 0) {
        throw new Error('albums must be a non-empty array of media objects.')
    }

    let imageCount = 0
    let videoCount = 0
    const validAlbums = []

    for (const m of albums) {
        if ('image' in m) {
            imageCount++;
            validAlbums.push(m)
        } else if ('video' in m) {
            videoCount++;
            validAlbums.push(m)
        }
    }

    if (validAlbums.length === 0) {
        throw new Error("albums contains no valid media. Use 'image' or 'video' keys.")
    }

    const albumMsg = generateWAMessageFromContent(jid, {
        albumMessage: {
            expectedImageCount: imageCount,
            expectedVideoCount: videoCount
        }
    }, options)

    await options.relayMessage(jid, albumMsg.message, {
        messageId: albumMsg.key.id
    })

    const messages = await Promise.all(validAlbums.map(async (media) => {
        const content = 'image' in media ? {
            image: media.image
        } : {
            video: media.video
        }

        let mediaHandle

        const mediaMsg = await generateWAMessage(
            jid, {
                ...content,
                ...media
            }, {
                ...options,
                userJid: options.userJid,
                upload: async (encFilePath, opts) => {
                    const up = await options.waUploadToServer(encFilePath, {
                        ...opts,
                        newsletter: isJidNewsletter(jid)
                    })
                    mediaHandle = up.handle
                    return up
                }
            }
        )

        if (mediaMsg) {
            mediaMsg.handle = mediaHandle
            mediaMsg.message.messageContextInfo = {
                messageSecret: randomBytes(32),
                messageAssociation: {
                    associationType: proto.MessageAssociation.AssociationType.MEDIA_ALBUM,
                    parentMessageKey: albumMsg.key
                }
            }
        }

        return mediaMsg
    }))

    return {
        albumMsg,
        messages: messages.filter(Boolean)
    }
}

/**
 * Checks if a buffer is a WebP file
 */
function isWebPBuffer(buffer) {
    return (
        buffer.length >= 12 &&
        buffer[0] === 0x52 &&
        buffer[1] === 0x49 &&
        buffer[2] === 0x46 &&
        buffer[3] === 0x46 &&
        buffer[8] === 0x57 &&
        buffer[9] === 0x45 &&
        buffer[10] === 0x42 &&
        buffer[11] === 0x50
    )
}

/**
 * Checks if a WebP buffer is animated by looking for VP8X chunk with animation flag
 * or ANIM/ANMF chunks
 */
function isAnimatedWebP(buffer) {
    // WebP must start with RIFF....WEBP
    if (
        buffer.length < 12 ||
        buffer[0] !== 0x52 ||
        buffer[1] !== 0x49 ||
        buffer[2] !== 0x46 ||
        buffer[3] !== 0x46 ||
        buffer[8] !== 0x57 ||
        buffer[9] !== 0x45 ||
        buffer[10] !== 0x42 ||
        buffer[11] !== 0x50
    ) {
        return false
    }

    // Parse chunks starting after RIFF header (12 bytes)
    let offset = 12
    while (offset < buffer.length - 8) {
        const chunkFourCC = buffer.toString('ascii', offset, offset + 4)
        const chunkSize = buffer.readUInt32LE(offset + 4)

        if (chunkFourCC === 'VP8X') {
            // VP8X extended header, check animation flag (bit 1 at offset+8)
            const flagsOffset = offset + 8
            if (flagsOffset < buffer.length) {
                const flags = buffer[flagsOffset]
                if (flags & 0x02) {
                    return true
                }
            }
        } else if (chunkFourCC === 'ANIM' || chunkFourCC === 'ANMF') {
            // ANIM or ANMF chunks indicate animation
            return true
        }
        // Move to next chunk (chunk size + 8 bytes header, padded to even)
        offset += 8 + chunkSize + (chunkSize % 2)
    }
    return false
}

const prepareStickerPackMessageContent = async (stickerPack, options) => {
    const {
        stickers,
        name,
        publisher,
        packId,
        description
    } = stickerPack

    if (stickers.length > 60) {
        throw new Boom('Sticker pack exceeds the maximum limit of 60 stickers', {
            statusCode: 400
        })
    }

    if (stickers.length === 0) {
        throw new Boom('Sticker pack must contain at least one sticker', {
            statusCode: 400
        })
    }

    const stickerPackIdValue = packId || generateMessageID()

    const lib = await getImageProcessingLibrary()
    const stickerData = {}
    const stickerPromises = stickers.map(async (s, i) => {
        let dataStream

        if (s.sticker?.url) {
            dataStream = await getStream({
                url: s.sticker.url
            })
        } else if (Buffer.isBuffer(s.sticker)) {
            dataStream = await getStream(s.sticker)
        } else {
            dataStream = null
        }

        if (!dataStream) throw new Boom('Sticker data not available')

        const {
            stream
        } = dataStream
        const buffer = await toBuffer(stream)

        let webpBuffer
        let isAnimated = false
        const isWebP = isWebPBuffer(buffer)

        if (isWebP) {
            webpBuffer = buffer
            isAnimated = isAnimatedWebP(buffer)
        } else if ('sharp' in lib && lib.sharp) {
            webpBuffer = await lib.sharp.default(buffer).webp().toBuffer()
            isAnimated = false
        } else {
            throw new Boom(
                'No image processing library (sharp) available for converting sticker to WebP. Either install sharp or provide stickers in WebP format.'
            )
        }

        if (webpBuffer.length > 1024 * 1024) {
            throw new Boom(`Sticker at index ${i} exceeds the 1MB size limit`, {
                statusCode: 400
            })
        }

        const hash = sha256(webpBuffer).toString('base64').replace(/\//g, '-')
        const fileName = `${hash}.webp`
        stickerData[fileName] = [new Uint8Array(webpBuffer), {
            level: 0
        }]
        return {
            fileName,
            mimetype: 'image/webp',
            isAnimated,
            emojis: s.emojis || [],
            accessibilityLabel: s.accessibilityLabel
        }
    })

    const stickerMetadata = await Promise.all(stickerPromises)

    let cover

    if (stickerPack.cover?.startsWith('http://') || stickerPack.cover?.startsWith('https://')) {
        cover = await getStream({
            url: stickerPack.cover
        })
    } else if (Buffer.isBuffer(stickerPack.cover)) {
        cover = await getStream(stickerPack.cover)
    } else {
        cover = null
    }

    if (!cover) throw new Boom('Cover data not available')

    const trayIconFileName = `${stickerPackIdValue}.webp`
    const {
        stream: coverStream
    } = cover
    const coverBuffer = await toBuffer(coverStream)

    let coverWebpBuffer
    const isCoverWebP = isWebPBuffer(coverBuffer)

    if (isCoverWebP) {
        coverWebpBuffer = coverBuffer
    } else if ('sharp' in lib && lib.sharp) {
        coverWebpBuffer = await lib.sharp.default(coverBuffer).webp().toBuffer()
    } else {
        throw new Boom(
            'No image processing library (sharp) available for converting cover to WebP. Either install sharp or provide cover in WebP format.'
        )
    }

    stickerData[trayIconFileName] = [new Uint8Array(coverWebpBuffer), {
        level: 0
    }]

    const zipBuffer = await new Promise((resolve, reject) => {
        zip(stickerData, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(Buffer.from(data))
            }
        })
    })

    const stickerPackSize = zipBuffer.length

    const stickerPackUpload = await encryptedStream(zipBuffer, 'sticker-pack', {
        logger: options.logger,
        opts: options.options
    })

    const stickerPackUploadResult = await options.upload(stickerPackUpload.encFilePath, {
        fileEncSha256B64: stickerPackUpload.fileEncSha256.toString('base64'),
        mediaType: 'sticker-pack',
        timeoutMs: options.mediaUploadTimeoutMs
    })

    await promises.unlink(stickerPackUpload.encFilePath)

    const stickerPackMessage = {
        name: name,
        publisher: publisher,
        stickerPackId: stickerPackIdValue,
        packDescription: description,
        stickerPackOrigin: WAProto.Message.StickerPackMessage.StickerPackOrigin.USER_CREATED,
        stickerPackSize: stickerPackSize,
        stickers: stickerMetadata,

        fileSha256: stickerPackUpload.fileSha256,
        fileEncSha256: stickerPackUpload.fileEncSha256,
        mediaKey: stickerPackUpload.mediaKey,
        directPath: stickerPackUploadResult.directPath,
        fileLength: stickerPackUpload.fileLength,
        mediaKeyTimestamp: unixTimestampSeconds(),

        trayIconFileName: trayIconFileName
    }

    try {
        let thumbnailBuffer

        if ('sharp' in lib && lib.sharp) {
            thumbnailBuffer = await lib.sharp.default(coverBuffer).resize(252, 252).jpeg().toBuffer()
        } else if ('jimp' in lib && lib.jimp) {
            const jimpImage = await lib.jimp.Jimp.read(coverBuffer)
            thumbnailBuffer = await jimpImage.resize({
                w: 252,
                h: 252
            }).getBuffer('image/jpeg')
        } else {
            throw new Error('No image processing library available for thumbnail generation')
        }

        if (!thumbnailBuffer || thumbnailBuffer.length === 0) {
            throw new Error('Failed to generate thumbnail buffer')
        }

        const thumbUpload = await encryptedStream(thumbnailBuffer, 'thumbnail-sticker-pack', {
            logger: options.logger,
            opts: options.options,
            mediaKey: stickerPackUpload.mediaKey
        })

        const thumbUploadResult = await options.upload(thumbUpload.encFilePath, {
            fileEncSha256B64: thumbUpload.fileEncSha256.toString('base64'),
            mediaType: 'thumbnail-sticker-pack',
            timeoutMs: options.mediaUploadTimeoutMs
        })

        await promises.unlink(thumbUpload.encFilePath)

        Object.assign(stickerPackMessage, {
            thumbnailDirectPath: thumbUploadResult.directPath,
            thumbnailSha256: thumbUpload.fileSha256,
            thumbnailEncSha256: thumbUpload.fileEncSha256,
            thumbnailHeight: 252,
            thumbnailWidth: 252,
            imageDataHash: sha256(thumbnailBuffer).toString('base64')
        })
    } catch (e) {
        options.logger?.warn?.(`Thumbnail generation failed: ${e}`)
    }

    return {
        stickerPackMessage
    }
}

const prepareStatusMentionMessageContent = async (jid, content, jids, options) => {
    const {
        relayMessage,
        waUploadToServer,
        groupMetadata,
        userJid,
        logger,
        mediaCache
    } = options

    const resolvedJids = jids.map(id => ({
        normalized: jidNormalizedUser(id),
        isPrivate: isPnUser(id) || isLidUser(id)
    }))

    const allUsers = new Set([userJid])
    await Promise.all(resolvedJids.map(async ({
        normalized,
        isPrivate
    }) => {
        if (!isPrivate) {
            try {
                const metadata = await groupMetadata(normalized)
                metadata.participants.forEach(p => allUsers.add(jidNormalizedUser(p.id)))
            } catch (e) {
                logger.warn(`Error getting metadata for group ${normalized}: ${e}`)
            }
        } else {
            allUsers.add(normalized)
        }
    }))

    const getRandomHexColor = () => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')
    const isMedia = content.image || content.video || content.audio
    const isAudio = !!content.audio
    const messageContent = {
        ...content
    }

    if (isMedia && !isAudio) {
        if (messageContent.text) {
            messageContent.caption = messageContent.text
            delete messageContent.text
        }
        delete messageContent.ptt
        delete messageContent.font
        delete messageContent.backgroundColor
        delete messageContent.textColor
    }

    if (isAudio) {
        delete messageContent.text
        delete messageContent.caption
        delete messageContent.font
        delete messageContent.textColor
    }

    const font = !isMedia ? (content.font ?? Math.floor(Math.random() * 9)) : undefined
    const textColor = !isMedia ? (content.textColor ?? getRandomHexColor()) : undefined
    const backgroundColor = (!isMedia || isAudio) ? (content.backgroundColor ?? getRandomHexColor()) : undefined
    const ptt = isAudio ? (typeof content.ptt === 'boolean' ? content.ptt : true) : undefined

    const msg = await generateWAMessage(jid, messageContent, {
        logger,
        userJid,
        getUrlInfo: undefined,
        upload: (encFilePath, opts) => waUploadToServer(encFilePath, {
            ...opts
        }),
        mediaCache,
        options: options,
        font,
        textColor,
        backgroundColor,
        ptt
    })

    await relayMessage(jid, msg.message, {
        messageId: msg.key.id,
        statusJidList: Array.from(allUsers),
        additionalNodes: [{
            tag: 'meta',
            attrs: {},
            content: [{
                tag: 'mentioned_users',
                attrs: {},
                content: resolvedJids.map(({
                    normalized
                }) => ({
                    tag: 'to',
                    attrs: {
                        jid: normalized
                    }
                }))
            }]
        }]
    })

    const statusMsgs = []

    for (const {
            normalized,
            isPrivate
        }
        of resolvedJids) {
        try {
            const type = isPrivate ? 'statusMentionMessage' : 'groupStatusMentionMessage'
            const statusMsg = generateWAMessageFromContent(normalized, {
                [type]: {
                    message: {
                        protocolMessage: {
                            key: msg.key,
                            type: proto.Message.ProtocolMessage.Type.STATUS_MENTION_MESSAGE
                        }
                    }
                },
                messageContextInfo: {
                    messageSecret: randomBytes(32)
                }
            }, {})

            await relayMessage(normalized, statusMsg.message, {
                additionalNodes: [{
                    tag: 'meta',
                    attrs: isPrivate ? {
                        is_status_mention: 'true'
                    } : {
                        is_group_status_mention: 'true'
                    }
                }]
            })

            statusMsgs.push(statusMsg)
        } catch (e) {
            logger.warn(`Error sending to ${normalized}: ${e}`)
        }

        await delay(2000)
    }

    return statusMsgs
}

/**
 * Generate forwarded message content like WA does
 * @param message the message to forward
 * @param options.forceForward will show the message as forwarded even if it is from you
 */
const generateForwardMessageContent = (message, forceForward) => {
    let content = message.message

    if (!content) {
        throw new Boom('no content in message', {
            statusCode: 400
        })
    }

    // hacky copy
    content = normalizeMessageContent(content)
    content = proto.Message.decode(proto.Message.encode(content).finish())

    let key = Object.keys(content)[0]
    let score = content[key].contextInfo?.forwardingScore || 0

    if (forceForward) score += forceForward ? forceForward : 1

    if (key === 'conversation') {
        content.extendedTextMessage = {
            text: content[key]
        }
        delete content.conversation
        key = 'extendedTextMessage'
    }

    if (score > 0) {
        content[key].contextInfo = {
            forwardingScore: score,
            isForwarded: true
        }
    } else {
        content[key].contextInfo = {}
    }

    return content
}

const hasNonNullishProperty = (message, key) => {
    return (
        typeof message === 'object' &&
        message !== null &&
        key in message &&
        message[key] !== null &&
        message[key] !== undefined
    )
}

function hasOptionalProperty(obj, key) {
    return (
        typeof obj === 'object' &&
        obj !== null &&
        key in obj &&
        obj[key] !== null
    )
}

const generateWAMessageContent = async (message, options) => {
    let m = {}

    if (hasNonNullishProperty(message, "text")) {
        const extContent = {
            text: message.text
        }

        let urlInfo = message.linkPreview

        if (typeof urlInfo === "undefined") {
            urlInfo = await generateLinkPreviewIfRequired(
                message.text,
                options.getUrlInfo,
                options.logger
            )
        }

        if (urlInfo) {
            extContent.canonicalUrl = urlInfo["canonical-url"]
            extContent.matchedText = urlInfo["matched-text"]
            extContent.jpegThumbnail = urlInfo.jpegThumbnail
            extContent.description = urlInfo.description
            extContent.title = urlInfo.title
            extContent.previewType = 0

            const img = urlInfo.highQualityThumbnail

            if (img) {
                extContent.thumbnailDirectPath = img.directPath
                extContent.mediaKey = img.mediaKey
                extContent.mediaKeyTimestamp = img.mediaKeyTimestamp
                extContent.thumbnailWidth = img.width
                extContent.thumbnailHeight = img.height
                extContent.thumbnailSha256 = img.fileSha256
                extContent.thumbnailEncSha256 = img.fileEncSha256
            }
        }

        if (options.backgroundColor) {
            extContent.backgroundArgb = await assertColor(
                options.backgroundColor
            )
        }

        if (options.textColor) {
            extContent.textArgb = await assertColor(options.textColor)
        }

        if (options.font) {
            extContent.font = options.font
        }

        m.extendedTextMessage = extContent
    } else if (hasNonNullishProperty(message, "contacts")) {
        const contactLen = message.contacts.contacts.length

        let contactMessage

        if (!contactLen) {
            throw new Boom("require atleast 1 contact", {
                statusCode: 400
            })
        }

        if (contactLen === 1) {
            contactMessage = {
                contactMessage: WAProto.Message.ContactMessage.fromObject(
                    message.contacts.contacts[0]
                ),
            }
        } else {
            contactMessage = {
                contactsArrayMessage: WAProto.Message.ContactsArrayMessage.fromObject(
                    message.contacts
                ),
            }
        }

        m = contactMessage
    } else if (hasNonNullishProperty(message, "contacts")) {
        const contactLen = message.contacts.contacts.length

        let contactMessage

        if (!contactLen) {
            throw new Boom("require atleast 1 contact", {
                statusCode: 400
            })
        }

        if (contactLen === 1) {
            contactMessage = {
                contactMessage: WAProto.Message.ContactMessage.fromObject(
                    message.contacts.contacts[0]
                ),
            }
        } else {
            contactMessage = {
                contactsArrayMessage: WAProto.Message.ContactsArrayMessage.fromObject(
                    message.contacts
                ),
            }
        }

        m = contactMessage
    } else if (hasNonNullishProperty(message, "location")) {
        let locationMessage

        if (message.live) {
            locationMessage = {
                liveLocationMessage: WAProto.Message.LiveLocationMessage.fromObject(
                    message.location
                ),
            }
        } else {
            locationMessage = {
                locationMessage: WAProto.Message.LocationMessage.fromObject(
                    message.location
                ),
            }
        }

        m = locationMessage
    } else if (hasNonNullishProperty(message, "react")) {
        if (!message.react.senderTimestampMs) {
            message.react.senderTimestampMs = Date.now()
        }

        m.reactionMessage = WAProto.Message.ReactionMessage.fromObject(
            message.react
        )
    } else if (hasNonNullishProperty(message, "delete")) {
        m.protocolMessage = {
            key: message.delete,
            type: WAProto.Message.ProtocolMessage.Type.REVOKE,
        }
    } else if (hasNonNullishProperty(message, "sharePhoneNumber")) {
        m.protocolMessage = {
            type: WAProto.Message.ProtocolMessage.Type.SHARE_PHONE_NUMBER,
        }
    } else if (hasNonNullishProperty(message, "requestPhoneNumber")) {
        m.requestPhoneNumberMessage = {}
    } else if (hasNonNullishProperty(message, "forward")) {
        m = generateForwardMessageContent(message.forward, message.force)
    } else if (hasNonNullishProperty(message, "stickerPack")) {
        m = await prepareStickerPackMessageContent(message.stickerPack, options)
    } else if (hasNonNullishProperty(message, "disappearingMessagesInChat")) {
        const exp =
            typeof message.disappearingMessagesInChat === "boolean" ?
            message.disappearingMessagesInChat ?
            WA_DEFAULT_EPHEMERAL :
            0 :
            message.disappearingMessagesInChat
        m = prepareDisappearingMessageSettingContent(exp)
    } else if (hasNonNullishProperty(message, "groupInvite")) {
        m.groupInviteMessage = {}

        m.groupInviteMessage.inviteCode = message.groupInvite.code
        m.groupInviteMessage.inviteExpiration = message.groupInvite.expiration
        m.groupInviteMessage.caption = message.groupInvite.caption
        m.groupInviteMessage.groupJid = message.groupInvite.jid
        m.groupInviteMessage.groupName = message.groupInvite.name
        m.groupInviteMessage.contextInfo = message.contextInfo

        if (options.getProfilePicUrl) {
            const pfpUrl = await options.getProfilePicUrl(
                message.groupInvite.jid
            )
            const {
                thumbnail
            } = await generateThumbnail(pfpUrl, "image")
            m.groupInviteMessage.jpegThumbnail = thumbnail
        }
    } else if (hasNonNullishProperty(message, "adminInvite")) {
        m.newsletterAdminInviteMessage = {}

        m.newsletterAdminInviteMessage.newsletterJid = message.adminInvite.jid
        m.newsletterAdminInviteMessage.newsletterName =
            message.adminInvite.name
        m.newsletterAdminInviteMessage.caption = message.adminInvite.caption
        m.newsletterAdminInviteMessage.inviteExpiration =
            message.adminInvite.expiration
        m.newsletterAdminInviteMessage.contextInfo = message.contextInfo

        if (options.getProfilePicUrl) {
            const pfpUrl = await options.getProfilePicUrl(
                message.adminInvite.jid
            )
            const {
                thumbnail
            } = await generateThumbnail(pfpUrl, "image")
            m.newsletterAdminInviteMessage.jpegThumbnail = thumbnail
        }
    } else if (hasNonNullishProperty(message, "keep")) {
        m.keepInChatMessage = {}

        m.keepInChatMessage.key = message.keep.key
        m.keepInChatMessage.keepType = message.keep?.type || 1
        m.keepInChatMessage.timestampMs = message.keep?.time || Date.now()
    } else if (hasNonNullishProperty(message, "call")) {
        m.scheduledCallCreationMessage = {}

        m.scheduledCallCreationMessage.scheduledTimestampMs =
            message.call?.time || Date.now()
        m.scheduledCallCreationMessage.callType = message.call?.type || 1
        m.scheduledCallCreationMessage.title =
            message.call?.name || "Call Creation"
    } else if (hasNonNullishProperty(message, "paymentInvite")) {
        m.messageContextInfo = {}
        m.paymentInviteMessage = {}

        m.paymentInviteMessage.expiryTimestamp =
            message.paymentInvite?.expiry || 0
        m.paymentInviteMessage.serviceType = message.paymentInvite?.type || 2
    } else if (hasNonNullishProperty(message, "ptv")) {
        const {
            videoMessage
        } = await prepareWAMessageMedia({
                video: message.video
            },
            options
        )

        m.ptvMessage = videoMessage
    } else if (hasNonNullishProperty(message, "order")) {
        m.orderMessage = WAProto.Message.OrderMessage.fromObject(message.order)
    } else if (hasNonNullishProperty(message, "product")) {
        const {
            imageMessage
        } = await prepareWAMessageMedia({
                image: message.product.productImage
            },
            options
        )

        m.productMessage = WAProto.Message.ProductMessage.fromObject({
            ...message,
            product: {
                ...message.product,
                productImage: imageMessage,
            },
        })
    } else if (hasNonNullishProperty(message, "album")) {
        const imageMessages = message.album.filter((item) => "image" in item)
        const videoMessages = message.album.filter((item) => "video" in item)

        m.albumMessage = WAProto.Message.AlbumMessage.fromObject({
            expectedImageCount: imageMessages.length,
            expectedVideoCount: videoMessages.length,
        })
    } else if (hasNonNullishProperty(message, "event")) {
        m.eventMessage = WAProto.Message.EventMessage.fromObject(message.event)

        if (!message.event.startTime) {
            m.eventMessage.startTime = unixTimestampSeconds() + 86400
        }

        if (options.getCallLink && message.event.call) {
            const link = await options.getCallLink(
                message.event.call,
                m.eventMessage.startTime
            )
            m.eventMessage.joinLink = link
        }
    } else if (hasNonNullishProperty(message, "pollResult")) {
        if (!Array.isArray(message.pollResult.values)) {
            throw new Boom("Invalid pollResult values", {
                statusCode: 400
            })
        }

        const pollResultSnapshotMessage = {
            name: message.pollResult.name,
            pollVotes: message.pollResult.values.map(
                ([optionName, optionVoteCount]) => ({
                    optionName,
                    optionVoteCount,
                })
            ),
        }

        m.pollResultSnapshotMessage = pollResultSnapshotMessage
    } else if (hasNonNullishProperty(message, "poll")) {
        if (!Array.isArray(message.poll.values)) {
            throw new Boom("Invalid poll values", {
                statusCode: 400
            })
        }

        if (
            message.poll.selectableCount < 0 ||
            message.poll.selectableCount > message.poll.values.length
        ) {
            throw new Boom(
                `poll.selectableCount in poll should be >= 0 and <= ${message.poll.values.length}`, {
                    statusCode: 400
                }
            )
        }

        const pollCreationMessage = {
            name: message.poll.name,
            selectableOptionsCount: message.poll?.selectableCount || 0,
            options: message.poll.values.map((optionName) => ({
                optionName
            })),
        }

        if (message.poll?.toAnnouncementGroup) {
            m.pollCreationMessageV2 = pollCreationMessage
        } else {
            if (message.poll.selectableCount > 0) {
                m.pollCreationMessageV3 = pollCreationMessage
            } else {
                m.pollCreationMessage = pollCreationMessage
            }
        }
    } else if (hasNonNullishProperty(message, "payment")) {
        const requestPaymentMessage = {
            amount: {
                currencyCode: message.payment?.currency || "IDR",
                offset: message.payment?.offset || 0,
                value: message.payment?.amount || 999999999,
            },
            expiryTimestamp: message.payment?.expiry || 0,
            amount1000: message.payment?.amount || 999999999 * 1000,
            currencyCodeIso4217: message.payment?.currency || "IDR",
            requestFrom: message.payment?.from || "0@s.whatsapp.net",
            noteMessage: {
                extendedTextMessage: {
                    text: message.payment?.note || "Notes",
                },
            },
            background: {
                placeholderArgb: message.payment?.image?.placeholderArgb || 4278190080,
                textArgb: message.payment?.image?.textArgb || 4294967295,
                subtextArgb: message.payment?.image?.subtextArgb || 4294967295,
                type: 1,
            },
        }

        m.requestPaymentMessage = requestPaymentMessage
    } else {
        m = await prepareWAMessageMedia(message, options)
    }

    if (hasNonNullishProperty(message, "buttonReply")) {
        switch (message.type) {
            case "list":
                m.listResponseMessage = {
                    title: message.buttonReply.title,
                    description: message.buttonReply.description,
                    singleSelectReply: {
                        selectedRowId: message.buttonReply.rowId,
                    },
                    lisType: proto.Message.ListResponseMessage.ListType
                        .SINGLE_SELECT,
                }
                break
            case "template":
                m.templateButtonReplyMessage = {
                    selectedDisplayText: message.buttonReply.displayText,
                    selectedId: message.buttonReply.id,
                    selectedIndex: message.buttonReply.index,
                }
                break
            case "plain":
                m.buttonsResponseMessage = {
                    selectedButtonId: message.buttonReply.id,
                    selectedDisplayText: message.buttonReply.displayText,
                    type: proto.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT,
                }
                break
            case "interactive":
                m.interactiveResponseMessage = {
                    body: {
                        text: message.buttonReply.displayText,
                        format: proto.Message.InteractiveResponseMessage.Body.Format
                            .EXTENSIONS_1,
                    },
                    nativeFlowResponseMessage: {
                        name: message.buttonReply.nativeFlows.name,
                        paramsJson: message.buttonReply.nativeFlows.paramsJson,
                        version: message.buttonReply.nativeFlows.version,
                    },
                }
                break
        }
    } else if (hasNonNullishProperty(message, "sections")) {
        m.listMessage = {
            title: message.title,
            buttonText: message.buttonText,
            footerText: message.footer,
            description: message.text,
            sections: message.sections,
            listType: proto.Message.ListMessage.ListType.SINGLE_SELECT,
        }
    } else if (hasNonNullishProperty(message, "productList")) {
        const thumbnail = message.thumbnail ?
            await generateThumbnail(message.thumbnail, "image") :
            null

        m.listMessage = {
            title: message.title,
            buttonText: message.buttonText,
            footerText: message.footer,
            description: message.text,
            productListInfo: {
                productSections: message.productList,
                headerImage: {
                    productId: message.productList[0].products[0].productId,
                    jpegThumbnail: thumbnail?.thumbnail || null,
                },
                businessOwnerJid: message.businessOwnerJid,
            },
            listType: proto.Message.ListMessage.ListType.PRODUCT_LIST,
        }
    } else if (hasNonNullishProperty(message, "buttons")) {
        const buttonsMessage = {
            buttons: message.buttons.map((b) => ({
                ...b,
                type: proto.Message.ButtonsMessage.Button.Type.RESPONSE,
            })),
        }

        if (hasNonNullishProperty(message, "text")) {
            buttonsMessage.contentText = message.text
            buttonsMessage.headerType =
                proto.Message.ButtonsMessage.HeaderType.EMPTY
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                buttonsMessage.contentText = message.caption
            }

            const type = Object.keys(m)[0].replace("Message", "").toUpperCase()

            buttonsMessage.headerType =
                proto.Message.ButtonsMessage.HeaderType[type]

            Object.assign(buttonsMessage, m)
        }

        if (hasNonNullishProperty(message, "title")) {
            buttonsMessage.text = message.title
            buttonsMessage.headerType =
                proto.Message.ButtonsMessage.HeaderType.TEXT
        }

        if (hasNonNullishProperty(message, "footer")) {
            buttonsMessage.footerText = message.footer
        }

        m = {
            buttonsMessage
        }
    } else if (hasNonNullishProperty(message, "templateButtons")) {
        const hydratedTemplate = {
            hydratedButtons: message.templateButtons,
        }

        if (hasNonNullishProperty(message, "text")) {
            hydratedTemplate.hydratedContentText = message.text
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                hydratedTemplate.hydratedContentText = message.caption
            }

            Object.assign(msg, m)
        }

        if (hasNonNullishProperty(message, "footer")) {
            hydratedTemplate.hydratedFooterText = message.footer
        }

        m = {
            templateMessage: {
                hydratedTemplate
            }
        }
    } else if (hasNonNullishProperty(message, "interactiveButtons")) {
        const interactiveMessage = {
            nativeFlowMessage: {
                buttons: message.interactiveButtons,
            },
        }

        if (hasNonNullishProperty(message, "text")) {
            interactiveMessage.body = {
                text: message.text,
            }
        }

        if (hasNonNullishProperty(message, "title")) {
            interactiveMessage.header = {
                title: message.title,
                subtitle: null,
                hasMediaAttachment: false,
            }

            if (hasNonNullishProperty(message, "subtitle")) {
                interactiveMessage.header.subtitle = message.subtitle
            }
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                interactiveMessage.body = {
                    text: message.caption,
                }

                interactiveMessage.header = {
                    title: null,
                    subtitle: null,
                    hasMediaAttachment: false,
                    ...Object.assign(interactiveMessage, m),
                }

                if (hasNonNullishProperty(message, "title")) {
                    interactiveMessage.header.title = message.title
                }

                if (hasNonNullishProperty(message, "subtitle")) {
                    interactiveMessage.header.subtitle = message.subtitle
                }

                if (hasNonNullishProperty(message, "hasMediaAttachment")) {
                    interactiveMessage.header.hasMediaAttachment = Boolean(
                        message.hasMediaAttachment
                    )
                }
            }
        }

        if (hasNonNullishProperty(message, "footer")) {
            interactiveMessage.footer = {
                text: message.footer,
            }
        }

        m = {
            interactiveMessage
        }
    } else if (hasNonNullishProperty(message, "shop")) {
        const interactiveMessage = {
            shopStorefrontMessage: {
                surface: message.shop.surface,
                id: message.shop.id,
            },
        }

        if (hasNonNullishProperty(message, "text")) {
            interactiveMessage.body = {
                text: message.text,
            }
        }

        if (hasNonNullishProperty(message, "title")) {
            interactiveMessage.header = {
                title: message.title,
                subtitle: null,
                hasMediaAttachment: false,
            }

            if (hasNonNullishProperty(message, "subtitle")) {
                interactiveMessage.header.subtitle = message.subtitle
            }
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                interactiveMessage.body = {
                    text: message.caption,
                }

                interactiveMessage.header = {
                    title: null,
                    subtitle: null,
                    hasMediaAttachment: false,
                    ...Object.assign(interactiveMessage, m),
                }

                if (hasNonNullishProperty(message, "title")) {
                    interactiveMessage.header.title = message.title
                }

                if (hasNonNullishProperty(message, "subtitle")) {
                    interactiveMessage.header.subtitle = message.subtitle
                }

                if (hasNonNullishProperty(message, "hasMediaAttachment")) {
                    interactiveMessage.header.hasMediaAttachment = Boolean(
                        message.hasMediaAttachment
                    )
                }
            }
        }

        if (hasNonNullishProperty(message, "footer")) {
            interactiveMessage.footer = {
                text: message.footer,
            }
        }

        m = {
            interactiveMessage
        }
    } else if (hasNonNullishProperty(message, "collection")) {
        const interactiveMessage = {
            collectionMessage: {
                bizJid: message.collection.bizJid,
                id: message.collection.id,
                messageVersion: message?.collection?.version,
            },
        }

        if (hasNonNullishProperty(message, "text")) {
            interactiveMessage.body = {
                text: message.text,
            }
        }

        if (hasNonNullishProperty(message, "title")) {
            interactiveMessage.header = {
                title: message.title,
                subtitle: null,
                hasMediaAttachment: false,
            }

            if (hasNonNullishProperty(message, "subtitle")) {
                interactiveMessage.header.subtitle = message.subtitle
            }
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                interactiveMessage.body = {
                    text: message.caption,
                }

                interactiveMessage.header = {
                    title: null,
                    subtitle: null,
                    hasMediaAttachment: false,
                    ...Object.assign(interactiveMessage, m),
                }

                if (hasNonNullishProperty(message, "title")) {
                    interactiveMessage.header.title = message.title
                }

                if (hasNonNullishProperty(message, "subtitle")) {
                    interactiveMessage.header.subtitle = message.subtitle
                }

                if (hasNonNullishProperty(message, "hasMediaAttachment")) {
                    interactiveMessage.header.hasMediaAttachment = Boolean(
                        message.hasMediaAttachment
                    )
                }
            }
        }

        if (hasNonNullishProperty(message, "footer")) {
            interactiveMessage.footer = {
                text: message.footer,
            }
        }

        m = {
            interactiveMessage
        }
    } else if (hasNonNullishProperty(message, "cards")) {
        const slides = await Promise.all(
            message.cards.map(async (slide) => {
                const {
                    image,
                    video,
                    product,
                    title,
                    body,
                    footer,
                    buttons,
                } = slide

                let header

                if (product) {
                    const {
                        imageMessage
                    } = await prepareWAMessageMedia({
                            image: product.productImage,
                            ...options
                        },
                        options
                    )
                    header = {
                        productMessage: {
                            product: {
                                ...product,
                                productImage: imageMessage,
                            },
                            ...slide,
                        },
                    }
                } else if (image) {
                    header = await prepareWAMessageMedia({
                            image: image,
                            ...options
                        },
                        options
                    )
                } else if (video) {
                    header = await prepareWAMessageMedia({
                            video: video,
                            ...options
                        },
                        options
                    )
                }

                const msg = {
                    header: {
                        title,
                        hasMediaAttachment: true,
                        ...header,
                    },
                    body: {
                        text: body,
                    },
                    footer: {
                        text: footer,
                    },
                    nativeFlowMessage: {
                        buttons,
                    },
                }

                return msg
            })
        )

        const interactiveMessage = {
            carouselMessage: {
                cards: slides,
            },
        }

        if (hasNonNullishProperty(message, "text")) {
            interactiveMessage.body = {
                text: message.text,
            }
        }

        if (hasNonNullishProperty(message, "title")) {
            interactiveMessage.header = {
                title: message.title,
                subtitle: null,
                hasMediaAttachment: false,
            }

            if (hasNonNullishProperty(message, "subtitle")) {
                interactiveMessage.header.subtitle = message.subtitle
            }
        } else {
            if (hasNonNullishProperty(message, "caption")) {
                interactiveMessage.body = {
                    text: message.caption,
                }

                interactiveMessage.header = {
                    title: null,
                    subtitle: null,
                    hasMediaAttachment: false,
                    ...Object.assign(interactiveMessage, m),
                }

                if (hasNonNullishProperty(message, "title")) {
                    interactiveMessage.header.title = message.title
                }

                if (hasNonNullishProperty(message, "subtitle")) {
                    interactiveMessage.header.subtitle = message.subtitle
                }

                if (hasNonNullishProperty(message, "hasMediaAttachment")) {
                    interactiveMessage.header.hasMediaAttachment = Boolean(
                        message.hasMediaAttachment
                    )
                }
            }
        }

        if (hasNonNullishProperty(message, "footer")) {
            interactiveMessage.footer = {
                text: message.footer,
            }
        }

        m = {
            interactiveMessage
        }
    }

    if (hasOptionalProperty(message, "ephemeral")) {
        m = {
            ephemeralMessage: {
                message: m
            }
        }
    }

    if (hasOptionalProperty(message, "mentions") && message.mentions?.length) {
        const messageType = Object.keys(m)[0]
        const key = m[messageType]

        if ("contextInfo" in key && !!key.contextInfo) {
            key.contextInfo.mentionedJid = message.mentions
        } else if (key) {
            key.contextInfo = {
                mentionedJid: message.mentions,
            }
        }
    }

    if (hasOptionalProperty(message, "contextInfo") && !!message.contextInfo) {
        const messageType = Object.keys(m)[0]
        const key = m[messageType]

        if ("contextInfo" in key && !!key.contextInfo) {
            key.contextInfo = {
                ...key.contextInfo,
                ...message.contextInfo
            }
        } else if (key) {
            key.contextInfo = message.contextInfo
        }
    }

    if (hasOptionalProperty(message, "edit")) {
        m = {
            protocolMessage: {
                key: message.edit,
                editedMessage: m,
                timestampMs: Date.now(),
                type: WAProto.Message.ProtocolMessage.Type.MESSAGE_EDIT,
            },
        }
    }

    return WAProto.Message.fromObject(m)
}

const generateWAMessageFromContent = (jid, message, options) => {
    if (!options.timestamp) {
        options.timestamp = new Date()
    }

    const innerMessage = normalizeMessageContent(message)
    const key = getContentType(innerMessage)
    const timestamp = unixTimestampSeconds(options.timestamp)
    const threadId = []
    const {
        quoted,
        userJid
    } = options

    if (quoted && !isJidNewsletter(jid)) {
        const participant = quoted.key.fromMe ?
            userJid :
            quoted.participant || quoted.key.participant || quoted.key.remoteJid

        let quotedMsg = normalizeMessageContent(quoted.message)
        const msgType = getContentType(quotedMsg)

        quotedMsg = proto.Message.fromObject({
            [msgType]: quotedMsg[msgType]
        })

        const quotedContent = quotedMsg[msgType]

        if (typeof quotedContent === 'object' && quotedContent && 'contextInfo' in quotedContent) {
            delete quotedContent.contextInfo
        }

        let requestPayment

        if (key === 'requestPaymentMessage') {
            if (innerMessage?.requestPaymentMessage && innerMessage?.requestPaymentMessage?.noteMessage?.extendedTextMessage) {
                requestPayment = innerMessage?.requestPaymentMessage?.noteMessage?.extendedTextMessage
            } else if (innerMessage?.requestPaymentMessage && innerMessage?.requestPaymentMessage?.noteMessage?.stickerMessage) {
                requestPayment = innerMessage.requestPaymentMessage?.noteMessage?.stickerMessage
            }
        }

        const contextInfo = (key === 'requestPaymentMessage' ? requestPayment?.contextInfo : innerMessage[key].contextInfo) || {}

        contextInfo.participant = jidNormalizedUser(participant)
        contextInfo.stanzaId = quoted.key.id
        contextInfo.quotedMessage = quotedMsg

        if (jid !== quoted.key.remoteJid) {
            contextInfo.remoteJid = quoted.key.remoteJid
        }

        if (contextInfo.quotedMessage) {
            contextInfo.quotedType = proto.ContextInfo.QuotedType.EXPLICIT
        }

        if (contextInfo.quotedMessage && isJidGroup(jid)) {
            threadId.push({
                threadType: proto.ThreadID.ThreadType.VIEW_REPLIES,
                threadKey: {
                    remoteJid: quoted?.key?.remoteJid,
                    fromMe: quoted?.key?.fromMe,
                    id: generateMessageID(),
                    ...(quoted?.key?.fromMe ? {} : {
                        participant: quoted?.key?.participant
                    })
                }
            })
        }

        if (key === 'requestPaymentMessage' && requestPayment) {
            requestPayment.contextInfo = contextInfo
        } else {
            innerMessage[key].contextInfo = contextInfo
        }
    }

    if (key !== 'protocolMessage' &&
        key !== 'ephemeralMessage' &&
        !isJidNewsletter(jid)) {
        message.messageContextInfo = {
            threadId: threadId.length > 0 ? threadId : [],
            messageSecret: randomBytes(32),
            ...message.messageContextInfo
        }
        innerMessage[key].contextInfo = {
            ...(innerMessage[key].contextInfo || {}),
            expiration: options.ephemeralExpiration ? options.ephemeralExpiration : 0
        }
    }

    message = WAProto.Message.fromObject(message)

    const messageJSON = {
        key: {
            remoteJid: jid,
            fromMe: true,
            id: options?.messageId || generateMessageID()
        },
        message: message,
        messageTimestamp: timestamp,
        messageStubParameters: [],
        participant: isJidGroup(jid) || isJidStatusBroadcast(jid) ? userJid : undefined,
        status: WAMessageStatus.PENDING
    }

    return WAProto.WebMessageInfo.fromObject(messageJSON)
}

const generateWAMessage = async (jid, content, options) => {
    options.logger = options?.logger?.child({
        msgId: options.messageId
    })

    return generateWAMessageFromContent(jid, await generateWAMessageContent(content, {
        newsletter: isJidNewsletter(jid),
        ...options
    }), options)
}

const getContentType = (content) => {
    if (content) {
        const keys = Object.keys(content)
        const key = keys.find(k => (k === 'conversation' || k.endsWith('Message') || k.endsWith('V2') || k.endsWith('V3') || k.endsWith('V4')) && k !== 'senderKeyDistributionMessage' && k !== 'messageContextInfo')

        return key
    }
}

/**
 * Normalizes ephemeral, view once messages to regular message content
 * Eg. image messages in ephemeral messages, in view once messages etc.
 * @param content
 * @returns
 */
const normalizeMessageContent = (content) => {
    if (!content) {
        return undefined
    }

    for (let i = 0; i < 5; i++) {
        const inner = getFutureProofMessage(content)
        if (!inner) {
            break
        }

        content = inner.message
    }

    return content

    function getFutureProofMessage(message) {
        return (
            (message?.editedMessage) ||
            (message?.statusAddYours) ||
            (message?.botTaskMessage) ||
            (message?.eventCoverImage) ||
            (message?.questionMessage) ||
            (message?.viewOnceMessage) ||
            (message?.botInvokeMessage) ||
            (message?.ephemeralMessage) ||
            (message?.limitSharingMessage) ||
            (message?.viewOnceMessageV2) ||
            (message?.lottieStickerMessage) ||
            (message?.questionReplyMessage) ||
            (message?.botForwardedMessage) ||
            (message?.statusMentionMessage) ||
            (message?.pollCreationMessageV4) ||
            (message?.associatedChildMessage) ||
            (message?.groupMentionedMessage) ||
            (message?.groupStatusMentionMessage) ||
            (message?.viewOnceMessageV2Extension) ||
            (message?.documentWithCaptionMessage) ||
            (message?.pollCreationOptionImageMessage))
    }
}

/**
 * Extract the true message content from a message
 * Eg. extracts the inner message from a disappearing message/view once message
 */
const extractMessageContent = (content) => {
    const extractFromButtonsMessage = (msg) => {
        const header = typeof msg.header === 'object' && msg.header !== null

        if (header ? msg.header?.imageMessage : msg.imageMessage) {
            return {
                imageMessage: header ? msg.header.imageMessage : msg.imageMessage
            }
        } else if (header ? msg.header?.documentMessage : msg.documentMessage) {
            return {
                documentMessage: header ? msg.header.documentMessage : msg.documentMessage
            }
        } else if (header ? msg.header?.videoMessage : msg.videoMessage) {
            return {
                videoMessage: header ? msg.header.videoMessage : msg.videoMessage
            }
        } else if (header ? msg.header?.locationMessage : msg.locationMessage) {
            return {
                locationMessage: header ? msg.header.locationMessage : msg.locationMessage
            }
        } else if (header ? msg.header?.productMessage : msg.productMessage) {
            return {
                productMessage: header ? msg.header.productMessage : msg.productMessage
            }
        } else {
            return {
                conversation: 'contentText' in msg ?
                    msg.contentText : ('hydratedContentText' in msg ? msg.hydratedContentText : 'body' in msg ? msg.body.text : '')
            }
        }
    }

    content = normalizeMessageContent(content)

    if (content?.buttonsMessage) {
        return extractFromButtonsMessage(content.buttonsMessage)
    }

    if (content?.interactiveMessage) {
        return extractFromButtonsMessage(content.interactiveMessage)
    }

    if (content?.templateMessage?.interactiveMessageTemplate) {
        return extractFromButtonsMessage(content?.templateMessage?.interactiveMessageTemplate)
    }

    if (content?.templateMessage?.hydratedFourRowTemplate) {
        return extractFromButtonsMessage(content?.templateMessage?.hydratedFourRowTemplate)
    }

    if (content?.templateMessage?.hydratedTemplate) {
        return extractFromButtonsMessage(content?.templateMessage?.hydratedTemplate)
    }

    if (content?.templateMessage?.fourRowTemplate) {
        return extractFromButtonsMessage(content?.templateMessage?.fourRowTemplate)
    }

    return content
}

/**
 * Returns the device predicted by message ID
 */
const getDevice = (id) => /^3A.{18}$/.test(id) ? 'ios' :
    /^3E.{20}$/.test(id) ? 'web' :
    /^(.{21}|.{32})$/.test(id) ? 'android' :
    /^(3F|.{18}$)/.test(id) ? 'desktop' :
    'baileys'

/** Upserts a receipt in the message */
const updateMessageWithReceipt = (msg, receipt) => {
    msg.userReceipt = msg.userReceipt || []
    const recp = msg.userReceipt.find(m => m.userJid === receipt.userJid)

    if (recp) {
        Object.assign(recp, receipt)
    } else {
        msg.userReceipt.push(receipt)
    }
}

/** Update the message with a new reaction */
const updateMessageWithReaction = (msg, reaction) => {
    const authorID = getKeyAuthor(reaction.key)
    const reactions = (msg.reactions || [])
        .filter(r => getKeyAuthor(r.key) !== authorID)

    reaction.text = reaction.text || ''
    reactions.push(reaction)
    msg.reactions = reactions
}

/** Update the message with a new poll update */
const updateMessageWithPollUpdate = (msg, update) => {
    const authorID = getKeyAuthor(update.pollUpdateMessageKey)
    const votes = (msg.pollUpdates || [])
        .filter(r => getKeyAuthor(r.pollUpdateMessageKey) !== authorID)

    if (update.vote?.selectedOptions?.length) {
        votes.push(update)
    }

    msg.pollUpdates = votes
}

/** Update the message with a new event response*/
const updateMessageWithEventResponse = (msg, update) => {
    const authorID = getKeyAuthor(update.eventResponseMessageKey)
    const responses = (msg.eventResponses || [])
        .filter(r => getKeyAuthor(r.eventResponseMessageKey) !== authorID)

    responses.push(update)
    msg.eventResponses = responses
}

/**
 * Aggregates all poll updates in a poll.
 * @param msg the poll creation message
 * @param meId your jid
 * @returns A list of options & their voters
 */
function getAggregateVotesInPollMessage({
    message,
    pollUpdates
}, meId) {
    message = normalizeMessageContent(message)

    const opts = message?.pollCreationMessage?.options || message?.pollCreationMessageV2?.options || message?.pollCreationMessageV3?.options || []

    const voteHashMap = opts.reduce((acc, opt) => {
        const hash = sha256(Buffer.from(opt.optionName || '')).toString()
        acc[hash] = {
            name: opt.optionName || '',
            voters: []
        }

        return acc
    }, {})

    for (const update of pollUpdates || []) {
        const {
            vote
        } = update

        if (!vote) {
            continue
        }

        for (const option of vote.selectedOptions || []) {
            const hash = option.toString()
            let data = voteHashMap[hash]

            if (!data) {
                voteHashMap[hash] = {
                    name: 'Unknown',
                    voters: []
                }

                data = voteHashMap[hash]
            }

            voteHashMap[hash].voters.push(getKeyAuthor(update.pollUpdateMessageKey, meId))
        }
    }

    return Object.values(voteHashMap)
}

/**
 * Aggregates all event responses in an event message. 
 * @param msg the event creation message
 * @param meLid your lid
 * @returns A list of response types & their responders
 */
function getAggregateResponsesInEventMessage({
    eventResponses
}, meLid) {
    const responseTypes = ['GOING', 'NOT_GOING', 'MAYBE']
    const responseMap = {}

    for (const type of responseTypes) {
        responseMap[type] = {
            response: type,
            responders: []
        }
    }

    for (const update of eventResponses) {
        const {
            response
        } = update.response || 0
        const responseType = proto.Message.EventResponseMessage.EventResponseType[response]
        if (responseType !== 'UNKNOWN' && responseMap[responseType]) {
            responseMap[responseType].responders.push(getKeyAuthor(update.eventResponseMessageKey, meLid))
        }
    }

    return Object.values(responseMap)
}

/** Given a list of message keys, aggregates them by chat & sender. Useful for sending read receipts in bulk */
const aggregateMessageKeysNotFromMe = (keys) => {
    const keyMap = {}

    for (const {
            remoteJid,
            id,
            participant,
            fromMe
        }
        of keys) {
        if (!fromMe) {
            const uqKey = `${remoteJid}:${participant || ''}`

            if (!keyMap[uqKey]) {
                keyMap[uqKey] = {
                    jid: remoteJid,
                    participant: participant,
                    messageIds: []
                }
            }

            keyMap[uqKey].messageIds.push(id)
        }
    }

    return Object.values(keyMap)
}

const REUPLOAD_REQUIRED_STATUS = [410, 404]

/**
 * Downloads the given message. Throws an error if it's not a media message
 */
const downloadMediaMessage = async (message, type, options, ctx) => {
    const result = await downloadMsg().catch(async (error) => {
        if (ctx &&
            typeof error?.status === 'number' && // treat errors with status as HTTP failures requiring reupload
            REUPLOAD_REQUIRED_STATUS.includes(error.status)) {
            ctx.logger.info({
                key: message.key
            }, 'sending reupload media request...')

            // request reupload
            message = await ctx.reuploadRequest(message)

            const result = await downloadMsg()
            return result
        }

        throw error
    })

    return result

    async function downloadMsg() {
        const mContent = extractMessageContent(message.message)

        if (!mContent) {
            throw new Boom('No message present', {
                statusCode: 400,
                data: message
            })
        }

        const contentType = getContentType(mContent)

        let mediaType = contentType?.replace('Message', '')

        const media = contentType === 'productMessage' ? mContent[contentType]?.product?.productImage : mContent[contentType]

        if (!media || typeof media !== 'object' || (!('url' in media) && !('thumbnailDirectPath' in media))) {
            throw new Boom(`"${contentType}" message is not a media message`)
        }

        let download

        if ('thumbnailDirectPath' in media && !('url' in media)) {
            download = {
                directPath: media.thumbnailDirectPath,
                mediaKey: media.mediaKey
            }
            mediaType = 'thumbnail-link'
        } else {
            download = media
        }

        const stream = await downloadContentFromMessage(download, mediaType, options)

        if (type === 'buffer') {
            const bufferArray = []
            for await (const chunk of stream) {
                bufferArray.push(chunk);
            }
            return Buffer.concat(bufferArray);
        }
        return stream
    }
}

/** Checks whether the given message is a media message; if it is returns the inner content */
const assertMediaContent = (content) => {
    content = extractMessageContent(content)

    const mediaContent = content?.documentMessage ||
        content?.imageMessage ||
        content?.videoMessage ||
        content?.audioMessage ||
        content?.stickerMessage

    if (!mediaContent) {
        throw new Boom('given message is not a media message', {
            statusCode: 400,
            data: content
        });
    }

    return mediaContent
}

module.exports = {
    extractUrlFromText,
    generateLinkPreviewIfRequired,
    prepareWAMessageMedia,
    prepareAlbumMessageContent,
    prepareStickerPackMessageContent,
    prepareStatusMentionMessageContent,
    prepareDisappearingMessageSettingContent,
    generateForwardMessageContent,
    generateWAMessageContent,
    generateWAMessageFromContent,
    generateWAMessage,
    getContentType,
    hasNonNullishProperty,
    normalizeMessageContent,
    extractMessageContent,
    getDevice,
    updateMessageWithReceipt,
    updateMessageWithReaction,
    updateMessageWithPollUpdate,
    updateMessageWithEventResponse,
    getAggregateVotesInPollMessage,
    getAggregateResponsesInEventMessage,
    aggregateMessageKeysNotFromMe,
    downloadMediaMessage,
    assertMediaContent
}