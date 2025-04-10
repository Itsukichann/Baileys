"use strict"

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}

Object.defineProperty(exports, "__esModule", { value: true })

const boom_1 = require("@hapi/boom")
const axios_1 = __importDefault(require("axios"))
const crypto_1 = require("crypto")
const fs_1 = require("fs")
const WAProto_1 = require("../../WAProto")
const Defaults_1 = require("../Defaults")
const Types_1 = require("../Types")
const WABinary_1 = require("../WABinary")
const crypto_2 = require("./crypto")
const generics_1 = require("./generics")
const messages_media_1 = require("./messages-media")

const MIMETYPE_MAP = {
    image: 'image/jpeg',
    video: 'video/mp4',
    document: 'application/pdf',
    audio: 'audio/ogg codecs=opus',
    sticker: 'image/webp',
    'product-catalog-image': 'image/jpeg'
}

const MessageTypeProto = {
    'image': Types_1.WAProto.Message.ImageMessage,
    'video': Types_1.WAProto.Message.VideoMessage,
    'audio': Types_1.WAProto.Message.AudioMessage,
    'sticker': Types_1.WAProto.Message.StickerMessage,
    'document': Types_1.WAProto.Message.DocumentMessage,
}

/**
 * Uses a regex to test whether the string contains a URL, and returns the URL if it does.
 * @param text eg. hello https://google.com
 * @returns the URL, eg. https://google.com
 */
const extractUrlFromText = (text) => text.match(Defaults_1.URL_REGEX)?.[0]

const generateLinkPreviewIfRequired = async (text, getUrlInfo, logger) => {
    const url = extractUrlFromText(text)
    
    if (!!getUrlInfo && url) {
        try {
            const urlInfo = await getUrlInfo(url)
            return urlInfo
        }
        
        catch (error) { 
            logger?.warn({ trace: error.stack }, 'url generation failed')
        }
    }
}

const assertColor = async (color) => {
    let assertedColor
    
    if (typeof color === 'number') {
        assertedColor = color > 0 ? color : 0xffffffff + Number(color) + 1
    }
    
    else {
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
    
    for (const key of Defaults_1.MEDIA_KEYS) {
        if (key in message) {
            mediaType = key
        }
    }
    
    if (!mediaType) {
        throw new boom_1.Boom('Invalid media type', { statusCode: 400 })
    }
    
    const uploadData = {
        ...message,
        media: message[mediaType]
    }
    
    delete uploadData[mediaType]
    
    // check if cacheable + generate cache key
    const cacheableKey = typeof uploadData.media === 'object' &&
        ('url' in uploadData.media) &&
        !!uploadData.media.url &&
        !!options.mediaCache && (
        // generate the key
        mediaType + ':' + uploadData.media.url.toString())
        
    if (mediaType === 'document' && !uploadData.fileName) {
        uploadData.fileName = 'file'
    }
    
    if (!uploadData.mimetype) {
        uploadData.mimetype = MIMETYPE_MAP[mediaType]
    }
    
    // check for cache hit
    if (cacheableKey) {
        const mediaBuff = options.mediaCache.get(cacheableKey)
        if (mediaBuff) {
            logger?.debug({ cacheableKey }, 'got media cache hit')
            const obj = Types_1.WAProto.Message.decode(mediaBuff)
            const key = `${mediaType}Message`
            Object.assign(obj[key], { ...uploadData, media: undefined })
            return obj
        }
    }
    
    const requiresDurationComputation = mediaType === 'audio' && typeof uploadData.seconds === 'undefined'
    const requiresThumbnailComputation = (mediaType === 'image' || mediaType === 'video') &&
        (typeof uploadData['jpegThumbnail'] === 'undefined')
    const requiresWaveformProcessing = mediaType === 'audio' && uploadData.ptt === true
    const requiresAudioBackground = options.backgroundColor && mediaType === 'audio' && uploadData.ptt === true
    const requiresOriginalForSomeProcessing = requiresDurationComputation || requiresThumbnailComputation
    
    const { mediaKey, encWriteStream, bodyPath, fileEncSha256, fileSha256, fileLength, didSaveToTmpPath, } = await (options.newsletter ? messages_media_1.prepareStream : messages_media_1.encryptedStream)(uploadData.media, options.mediaTypeOverride || mediaType, {
        logger,
        saveOriginalFileIfRequired: requiresOriginalForSomeProcessing,
        opts: options.options
    })
    
    // url safe Base64 encode the SHA256 hash of the body
    const fileEncSha256B64 = (options.newsletter ? fileSha256 : fileEncSha256 !== null && fileEncSha256 ? fileEncSha256 : fileSha256).toString('base64')
    
    const [{ mediaUrl, directPath, handle }] = await Promise.all([
        (async () => {
            const result = await options.upload(encWriteStream, { fileEncSha256B64, mediaType, timeoutMs: options.mediaUploadTimeoutMs })
            logger?.debug({ mediaType, cacheableKey }, 'uploaded media')
            
            return result
        })(),
        (async () => {
            try {
                if (requiresThumbnailComputation) {
                    const { thumbnail, originalImageDimensions } = await messages_media_1.generateThumbnail(bodyPath, mediaType, options)
                    uploadData.jpegThumbnail = thumbnail
                    
                    if (!uploadData.width && originalImageDimensions) {
                        uploadData.width = originalImageDimensions.width
                        uploadData.height = originalImageDimensions.height
                        logger?.debug('set dimensions')
                    }
                    logger?.debug('generated thumbnail')
                }
                
                if (requiresDurationComputation) {
                    uploadData.seconds = await messages_media_1.getAudioDuration(bodyPath)
                    logger?.debug('computed audio duration')
                }
                
                if (requiresWaveformProcessing) {
                    uploadData.waveform = await messages_media_1.getAudioWaveform(bodyPath, logger)
                    logger?.debug('processed waveform')
                }
                
                if (requiresAudioBackground) {
                    uploadData.backgroundArgb = await assertColor(options.backgroundColor)
                    logger?.debug('computed backgroundColor audio status')
                }
            }
            
            catch (error) {
                logger?.warn({ trace: error.stack }, 'failed to obtain extra info')
            }
        })(),
    ]).finally(async () => {
        if (!Buffer.isBuffer(encWriteStream)) {
            encWriteStream.destroy()
        }
        
        // remove tmp files
        if (didSaveToTmpPath && bodyPath) {
            await fs_1.promises.unlink(bodyPath)
            logger?.debug('removed tmp files')
        }
    }
)
    const obj = Types_1.WAProto.Message.fromObject({
        [`${mediaType}Message`]: MessageTypeProto[mediaType].fromObject({
            url: handle ? undefined : mediaUrl,
            directPath,
            mediaKey: mediaKey,
            fileEncSha256: fileEncSha256,
            fileSha256,
            fileLength,
            mediaKeyTimestamp: handle ? undefined : generics_1.unixTimestampSeconds(),
            ...uploadData,
            media: undefined
        })
    })
    
    if (uploadData.ptv) {
        obj.ptvMessage = obj.videoMessage
        delete obj.videoMessage
    }
    
    if (cacheableKey) {
        logger?.debug({ cacheableKey }, 'set cache')
        options.mediaCache.set(cacheableKey, Types_1.WAProto.Message.encode(obj).finish())
    }
    
    return obj
}

const prepareDisappearingMessageSettingContent = (expiration) => {
    const content = {
        ephemeralMessage: {
            message: {
                protocolMessage: {
                    type: Types_1.WAProto.Message.ProtocolMessage.Type.EPHEMERAL_SETTING,
                    ephemeralExpiration: expiration ? expiration : 0
                }
            }
        }
    }
    
    return Types_1.WAProto.Message.fromObject(content)
}

/**
 * Generate forwarded message content like WA does
 * @param message the message to forward
 * @param options.forceForward will show the message as forwarded even if it is from you
 */
const generateForwardMessageContent = (message, forceForward) => {
    let content = message.message
    
    if (!content) {
        throw new boom_1.Boom('no content in message', { statusCode: 400 })
    }
    
    // hacky copy
    content = normalizeMessageContent(content)
    content = WAProto_1.proto.Message.decode(WAProto_1.proto.Message.encode(content).finish())
    
    let key = Object.keys(content)[0]
    let score = content[key].contextInfo?.forwardingScore || 0
    
    if (forceForward) score += forceForward ? forceForward : 1
    
    if (key === 'conversation') {
        content.extendedTextMessage = { text: content[key] }
        delete content.conversation
        key = 'extendedTextMessage'
    }
    
    if (score > 0) {
        content[key].contextInfo = { forwardingScore: score, isForwarded: true }
    }
    
    else {
        content[key].contextInfo = {}
    }
    
    return content
}

const generateWAMessageContent = async (message, options) => {
    let m = {}
    if ('text' in message) {
        const extContent = { text: message.text }
        let urlInfo = message.linkPreview
        
        if (typeof urlInfo === 'undefined') {
            urlInfo = await generateLinkPreviewIfRequired(message.text, options.getUrlInfo, options.logger)
        }
        
        if (urlInfo) {
            extContent.canonicalUrl = urlInfo['canonical-url']
            extContent.matchedText = urlInfo['matched-text']
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
            extContent.backgroundArgb = await assertColor(options.backgroundColor)
        }
        
        if (options.font) {
            extContent.font = options.font
        }
        
        m.messageContextInfo = {
            messageSecret: crypto_1.randomBytes(32),
        }
        
        m.extendedTextMessage = extContent
    }
    
    else if ('contacts' in message) {
        const contactLen = message.contacts.contacts.length
        
        if (!contactLen) {
            throw new boom_1.Boom('require atleast 1 contact', { statusCode: 400 })
        }
        
        if (contactLen === 1) {
            m.contactMessage = Types_1.WAProto.Message.ContactMessage.fromObject(message.contacts.contacts[0])
        }
        
        else {
            m.contactsArrayMessage = Types_1.WAProto.Message.ContactsArrayMessage.fromObject(message.contacts)
        }
    }
    
    else if ('location' in message) {
    	if (message.live) {
       	m.liveLocationMessage = Types_1.WAProto.Message.LiveLocationMessage.fromObject(message.location)
        }
        
        else {
           m.locationMessage = Types_1.WAProto.Message.LocationMessage.fromObject(message.location)
        }
    }
    
    else if ('react' in message) {
        if (!message.react.senderTimestampMs) {
            message.react.senderTimestampMs = Date.now()
        }
        
        m.reactionMessage = Types_1.WAProto.Message.ReactionMessage.fromObject(message.react)
    }
    
    else if ('delete' in message) {
        m.protocolMessage = {
            key: message.delete,
            type: Types_1.WAProto.Message.ProtocolMessage.Type.REVOKE
        }
    } 
     
    else if ('forward' in message) {
        m = generateForwardMessageContent(message.forward, message.force)
    }
    
    else if ('disappearingMessagesInChat' in message) {
        const exp = typeof message.disappearingMessagesInChat === 'boolean' ?
            (message.disappearingMessagesInChat ? Defaults_1.WA_DEFAULT_EPHEMERAL : 0) :
            message.disappearingMessagesInChat
        m = prepareDisappearingMessageSettingContent(exp)
    }
    
    else if ('groupInvite' in message) {
        m.groupInviteMessage = {} 
        
        m.groupInviteMessage.inviteCode = message.groupInvite.code
        m.groupInviteMessage.inviteExpiration = message.groupInvite.expiration
        m.groupInviteMessage.caption = message.groupInvite.caption
        m.groupInviteMessage.groupJid = message.groupInvite.jid
        m.groupInviteMessage.groupName = message.groupInvite.name 
        m.groupInviteMessage.contextInfo = message.contextInfo    
        
        if (options.getProfilePicUrl) {
            const pfpUrl = await options.getProfilePicUrl(message.groupInvite.jid)
            const { thumbnail } = await messages_media_1.generateThumbnail(pfpUrl, 'image') 
            m.groupInviteMessage.jpegThumbnail = thumbnail
        }
    }
    
    else if ('adminInvite' in message) {
        m.newsletterAdminInviteMessage = {} 
        
        m.newsletterAdminInviteMessage.newsletterJid = message.adminInvite.jid
        m.newsletterAdminInviteMessage.newsletterName= message.adminInvite.name
        m.newsletterAdminInviteMessage.caption = message.adminInvite.caption
        m.newsletterAdminInviteMessage.inviteExpiration = message.adminInvite.expiration
        m.newsletterAdminInviteMessage.contextInfo = message.contextInfo 
        
        if (options.getProfilePicUrl) {
            const pfpUrl = await options.getProfilePicUrl(message.adminInvite.jid)
            const { thumbnail } = await messages_media_1.generateThumbnail(pfpUrl, 'image') 
            m.newsletterAdminInviteMessage.jpegThumbnail = thumbnail
        }
   }
    
   else if ('pin' in message) {
        m.pinInChatMessage = {}
        m.messageContextInfo = {}
        
        m.pinInChatMessage.key = message.pin.key
        m.pinInChatMessage.type = message.pin?.type || 1
        m.pinInChatMessage.senderTimestampMs = message.pin?.time || Date.now()
        m.messageContextInfo.messageAddOnDurationInSecs = message.pin.type === 1 ? message.pin.time || 86400 : 0
    }
    
    else if ('keep' in message) {
        m.keepInChatMessage = {}
        
        m.keepInChatMessage.key = message.keep.key
        m.keepInChatMessage.keepType = message.keep?.type || 1
        m.keepInChatMessage.timestampMs = message.keep?.time || Date.now()
    } 
 
    else if ('call' in message) {
        m.scheduledCallCreationMessage = {}
    
        m.scheduledCallCreationMessage.scheduledTimestampMs = message.call?.time || Date.now()
        m.scheduledCallCreationMessage.callType = message.call?.type || 1
        m.scheduledCallCreationMessage.title = message.call?.name || 'Call Creation'
    }
    
    else if ('paymentInvite' in message) {
   	m.paymentInviteMessage = {}
    
        m.paymentInviteMessage.expiry = message.paymentInvite?.expiry || 0
        m.paymentInviteMessage.serviceType = message.paymentInvite?.type || 2
   }
   
    else if ('buttonReply' in message) {
        switch (message.type) {
        	case 'list':
                m.listResponseMessage = {
                    title: message.buttonReply.title,
                    description: message.buttonReply.description,
                    singleSelectReply: {
                    	selectedRowId: message.buttonReply.rowId
                    }, 
                    lisType: WAProto_1.proto.Message.ListResponseMessage.ListType.SINGLE_SELECT
                }
                break
            case 'template':
                m.templateButtonReplyMessage = {
                    selectedDisplayText: message.buttonReply.displayText,
                    selectedId: message.buttonReply.id,
                    selectedIndex: message.buttonReply.index
                }
                break
            case 'plain':
                m.buttonsResponseMessage = {
                    selectedButtonId: message.buttonReply.id,
                    selectedDisplayText: message.buttonReply.displayText,
                    type: WAProto_1.proto.Message.ButtonsResponseMessage.Type.DISPLAY_TEXT
                }
                break
            case 'interactive':
                m.interactiveResponseMessage = {
                    body: {
                       text: message.buttonReply.displayText,
                       format: WAProto_1.proto.Message.InteractiveResponseMessage.Body.Format.EXTENSIONS_1 
                    }, 
                    nativeFlowResponseMessage: {
                    	name: message.buttonReply.nativeFlows.name, 
                        paramsJson: message.buttonReply.nativeFlows.paramsJson, 
                        version: message.buttonReply.nativeFlows.version
                    }
                }
                break          
        }
    }
    
    else if ('ptv' in message && message.ptv) {
        const { videoMessage } = await prepareWAMessageMedia({ video: message.video }, options)
        
        m.ptvMessage = videoMessage
    }
    
    else if ('order' in message) {
    	m.orderMessage = Types_1.WAProto.Message.OrderMessage.fromObject({
    	    ...message.order
        }) 
    }
    
    else if ('event' in message) {   	
       if (!message.event.startTime) {
       	m.eventMessage.startTime = generics_1.unixTimestampSeconds() 
       } 
       
   	m.messageContextInfo = {
          messageSecret: crypto_1.randomBytes(32).toString('base64')
       }
       
       m.eventMessage = { ...message.event }
   }   
   
    else if ('product' in message) {
        const { imageMessage } = await prepareWAMessageMedia({ image: message.product.productImage }, options)
        
        m.productMessage = Types_1.WAProto.Message.ProductMessage.fromObject({
            ...message,
            product: {
                ...message.product,
                productImage: imageMessage,
            }
        })
    }
    
    else if ('pollResult' in message) {
    	if (!Array.isArray(message.pollResult.values)) {
            throw new boom_1.Boom('Invalid pollResult values', { statusCode: 400 })
        }
        
    	const pollResultSnapshotMessage = {
           name: message.pollResult.name,
           pollVotes: message.pollResult.values.map(([optionName, optionVoteCount]) => ({
               optionName,
               optionVoteCount
           }))
       }
       
       pollResultSnapshotMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m.pollResultSnapshotMessage = pollResultSnapshotMessage
    } 
    
    else if ('poll' in message) {
        if (!Array.isArray(message.poll.values)) {
            throw new boom_1.Boom('Invalid poll values', { statusCode: 400 })
        }
        
        if (message.poll.selectableCount < 0
            || message.poll.selectableCount > message.poll.values.length) {
            throw new boom_1.Boom(`poll.selectableCount in poll should be >= 0 and <= ${message.poll.values.length}`, { statusCode: 400 })
        }
        
        m.messageContextInfo = {
            messageSecret: message.poll.messageSecret || crypto_1.randomBytes(32),
        }
        
        const pollCreationMessage = {
            name: message.poll.name,
            selectableOptionsCount: message.poll?.selectableCount || 0,
            options: message.poll.values.map(optionName => ({ optionName })),
         }
         
         pollCreationMessage.contextInfo = {
             ...(message.contextInfo || {}),
             ...(message.mentions ? { mentionedJid: message.mentions } : {})
         }
         
         if(message.poll?.toAnnouncementGroup) {
			m.pollCreationMessageV2 = pollCreationMessage
		} else {
			if(message.poll.selectableCount > 0) {
				m.pollCreationMessageV3 = pollCreationMessage
			} else {
				m.pollCreationMessage = pollCreationMessage
			}
		}
    } 
     
   else if ('payment' in message) {   	
      const requestPaymentMessage = { 
   	    amount: {
			currencyCode: message.payment?.currency || 'IDR',
			offset: message.payment?.offset || 0,
			value: message.payment?.amount || 999999999
		},
		expiryTimestamp: message.payment?.expiry || 0,
		amount1000: message.payment?.amount || 999999999 * 1000,
		currencyCodeIso4217: message.payment?.currency || 'IDR',
		requestFrom: message.payment?.from || '0@s.whatsapp.net',
		noteMessage: {
		extendedTextMessage: {
		  	text: message.payment?.note || 'Notes'
	    	}
     	},
     	background: {      	   
         	placeholderArgb: message.payment?.image?.placeholderArgb || 4278190080, 
         	textArgb: message.payment?.image?.textArgb || 4294967295, 
         	subtextArgb: message.payment?.image?.subtextArgb || 4294967295,          	
         	type: 1
           }
       }
       
       requestPaymentMessage.noteMessage.extendedTextMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = { requestPaymentMessage }
   }
   
   else if ('sharePhoneNumber' in message) {
        m.protocolMessage = {
            type: WAProto_1.proto.Message.ProtocolMessage.Type.SHARE_PHONE_NUMBER
        }
    }
    
    else if ('requestPhoneNumber' in message) {
        m.requestPhoneNumberMessage = {}
    }
    
    else {
        m = await prepareWAMessageMedia(message, options)
    }
    
    if ('sections' in message && !!message.sections) {
        const listMessage = {
            title: message.title, 
            buttonText: message.buttonText, 
            footerText: message.footer, 
            description: message.text, 
            sections: message.sections, 
            listType: WAProto_1.proto.Message.ListMessage.ListType.SINGLE_SELECT
        }
        
        listMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = { listMessage }
    }
    
    else if ('productList' in message && !!message.productList) {
    	const thumbnail = message.thumbnail ? await messages_media_1.generateThumbnail(message.thumbnail, 'image') : null
    
        const listMessage = {
            title: message.title, 
            buttonText: message.buttonText, 
            footerText: message.footer, 
            description: message.text, 
    	    productListInfo: {
            	productSections: message.productList, 
                headerImage: {
                	productId: message.productList[0].products[0].productId, 
                    jpegThumbnail: thumbnail?.thumbnail || null
                }, 
                businessOwnerJid: message.businessOwnerJid
            }, 
            listType: WAProto_1.proto.Message.ListMessage.ListType.PRODUCT_LIST
        }
        
        listMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = { listMessage }
    }
    
    else if ('buttons' in message && !!message.buttons) {
        const buttonsMessage = {
            buttons: message.buttons.map(b => ({ ...b, type: WAProto_1.proto.Message.ButtonsMessage.Button.Type.RESPONSE }))
        }
        
        if ('text' in message) {
            buttonsMessage.contentText = message.text
            buttonsMessage.headerType = WAProto_1.proto.Message.ButtonsMessage.HeaderType.EMPTY
        }
        
        else {
            if ('caption' in message) {
                buttonsMessage.contentText = message.caption
            }
            
            const type = Object.keys(m)[0].replace('Message', '').toUpperCase()
            
            buttonsMessage.headerType = WAProto_1.proto.Message.ButtonsMessage.HeaderType[type]
            
            Object.assign(buttonsMessage, m)
        }
        
        if ('footer' in message && !!message.footer) {
            buttonsMessage.footerText = message.footer
        }
        
        if ('title' in message && !!message.title) {
        	buttonsMessage.text = message.title
            buttonsMessage.headerType = WAProto_1.proto.Message.ButtonsMessage.HeaderType.TEXT
        }
        
        buttonsMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = { buttonsMessage }
    }
    
    else if ('templateButtons' in message && !!message.templateButtons) {
        const hydratedTemplate = {
            hydratedButtons: message.templateButtons
        }
        
        if ('text' in message) {
            hydratedTemplate.hydratedContentText = message.text
        }
        
        else {
            if ('caption' in message) {
                hydratedTemplate.hydratedContentText = message.caption
            }
            
            Object.assign(msg, m)
        }
        
        if ('footer' in message && !!message.footer) {
            hydratedTemplate.hydratedFooterText = message.footer
        }
        
        hydratedTemplate.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = {
            templateMessage: {
                hydratedTemplate
             }
         }
    }
    
    else if ('interactiveButtons' in message && !!message.interactiveButtons) {    	
    	const interactiveMessage = {
    	   nativeFlowMessage: {
    	     buttons: message.interactiveButtons
          }
      }
      
      if ('text' in message) {
      	interactiveMessage.body = {
             text: message.text
          }, 
          interactiveMessage.header = {
             title: message.title,
             subtitle: message.subtitle, 
             hasMediaAttachment: false            
          }
      }
      
      else {
      	if ('caption' in message) {
      	interactiveMessage.body = {
              text: message.caption
           }
           
           interactiveMessage.header = {
             title: message.title, 
             subtitle: message.subtitle, 
             hasMediaAttachment: message.hasMediaAttachment ? message.hasMediaAttachment : false, 
             ...Object.assign(interactiveMessage, m)
            }
         }
      } 
      
      if ('footer' in message && !!message.footer) {
      	interactiveMessage.footer = {
             text: message.footer
          }
      }
      
      interactiveMessage.contextInfo = {
          ...(message.contextInfo || {}),
          ...(message.mentions ? { mentionedJid: message.mentions } : {})
      } 
      
      m = { interactiveMessage }
   } 
   
   else if ('shop' in message && !!message.shop) {
    	const interactiveMessage = {
    	   shopStorefrontMessage: {
    	     surface: message.shop.surface, 
             id: message.shop.id
          }
      } 
      
      if ('text' in message) {
      	interactiveMessage.body = {
             text: message.text
          }, 
          interactiveMessage.header = {
             title: message.title,
             subtitle: message.subtitle, 
             hasMediaAttachment: false            
          }
      }
      
      else {
      	if ('caption' in message) {
      	interactiveMessage.body = {
              text: message.caption
           }
           
           interactiveMessage.header = {
             title: message.title, 
             subtitle: message.subtitle, 
             hasMediaAttachment: message.hasMediaAttachment ? message.hasMediaAttachment : false, 
             ...Object.assign(interactiveMessage, m)
            }
         }
      } 
      
      if ('footer' in message && !!message.footer) {
      	interactiveMessage.footer = {
             text: message.footer
          }
      }
      
      interactiveMessage.contextInfo = {
          ...(message.contextInfo || {}),
          ...(message.mentions ? { mentionedJid: message.mentions } : {})
      } 
      
      m = { interactiveMessage }
    }  
   
    else if ('collection' in message && !!message.collection) {
    	const interactiveMessage = {
    	   collectionMessage: {
    	     bizJid: message.collection.bizJid, 
             id: message.collection.id, 
             messageVersion: message?.collection?.version
          }
      } 
      
      if ('text' in message) {
      	interactiveMessage.body = {
             text: message.text
          }, 
          interactiveMessage.header = {
             title: message.title,
             subtitle: message.subtitle, 
             hasMediaAttachment: false            
          }
      }
      
      else {
      	if ('caption' in message) {
      	interactiveMessage.body = {
              text: message.caption
           }
           interactiveMessage.header = {
             title: message.title, 
             subtitle: message.subtitle, 
             hasMediaAttachment: message.hasMediaAttachment ? message.hasMediaAttachment : false, 
             ...Object.assign(interactiveMessage, m)
            }
         }
      } 
      
      if ('footer' in message && !message.footer) {
      	interactiveMessage.footer = {
             text: message.footer
          }
      }
      
      interactiveMessage.contextInfo = {
          ...(message.contextInfo || {}),
          ...(message.mentions ? { mentionedJid: message.mentions } : {})
      }     
      
      m = { interactiveMessage }
    }
    
    else if ('cards' in message && !!message.cards) {
        const slides = await Promise.all(message.cards.map(async (slide) => {
            const { image, video, product, title, body, footer, buttons } = slide
            let header
            
            if (product) {
                const { imageMessage } = await prepareWAMessageMedia({ image: product.productImage, ...options }, options)
                header = {
                    productMessage: {
                        product: {
                            ...product,
                            productImage: imageMessage,
                        },
                        ...slide
                    }
                }
            }
            
            else if (image) {
                header = await prepareWAMessageMedia({ image: image, ...options }, options)
            }
            
            else if (video) {
                header = await prepareWAMessageMedia({ video: video, ...options }, options)
            }
            
            const msg = {
                header: {
                    title,
                    hasMediaAttachment: true,
                    ...header
                },
                body: {
                    text: body
                },
                footer: {
                    text: footer
                },
                nativeFlowMessage: {
                    buttons,
                }
            }
            
            return msg
        }))
        
        const interactiveMessage = {
            carouselMessage: {
                cards: slides
            }
        }
        
        if ('text' in message) {
        	interactiveMessage.body = {
               text: message.text
            }, 
            interactiveMessage.header = {
               title: message.title,
               subtitle: message.subtitle, 
               hasMediaAttachment: false            
            }
        }
        
        if ('footer' in message && !!message.footer) {
        	interactiveMessage.footer = {
               text: message.footer
            }
        }
        
        interactiveMessage.contextInfo = {
            ...(message.contextInfo || {}),
            ...(message.mentions ? { mentionedJid: message.mentions } : {})
        }
        
        m = { interactiveMessage }
    }
    
    if ('ephemeral' in message && !!message.ephemeral) {
    	m = { ephemeralMessage: { message: m } }
    }   
    
    if ('viewOnce' in message && !!message.viewOnce) {
        m = { viewOnceMessage: { message: m } }
    }
    
    if ('viewOnceV2' in message && !!message.viewOnceV2) {
        m = { viewOnceMessageV2: { message: m } }
    }
    
    if ('viewOnceV2Ext' in message && !!message.viewOnceV2Ext) {
        m = { viewOnceMessageV2Extension: { message: m } }
    }
    
    if ('mentions' in message && message.mentions?.length) {
        const [messageType] = Object.keys(m)
        m[messageType].contextInfo = m[messageType] || {}
        m[messageType].contextInfo.mentionedJid = message.mentions
    }
    
    if ('edit' in message) {
        m = {
            protocolMessage: {
                key: message.edit,
                editedMessage: m,
                timestampMs: Date.now(),
                type: Types_1.WAProto.Message.ProtocolMessage.Type.MESSAGE_EDIT
            }
        }
    }
    
    if ('contextInfo' in message && !!message.contextInfo) {
        const [messageType] = Object.keys(m)
        m[messageType] = m[messageType] || {}
        m[messageType].contextInfo = message.contextInfo
    }   
    
    return Types_1.WAProto.Message.fromObject(m)
}

const generateWAMessageFromContent = (jid, message, options) => {
    if (!options.timestamp) {
        options.timestamp = new Date()
    }
    
    const innerMessage = normalizeMessageContent(message)
    const key = getContentType(innerMessage)
    const timestamp = generics_1.unixTimestampSeconds(options.timestamp)
    const { quoted, userJid } = options
    
    if (quoted && !WABinary_1.isJidNewsletter(jid)) {
        const participant = quoted.key.fromMe
            ? userJid
            : quoted.participant || quoted.key.participant || quoted.key.remoteJid
            
        let quotedMsg = normalizeMessageContent(quoted.message)
        const msgType = getContentType(quotedMsg)
        
        quotedMsg = WAProto_1.proto.Message.fromObject({ [msgType]: quotedMsg[msgType] })
        
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
        
        contextInfo.participant = WABinary_1.jidNormalizedUser(participant)
        contextInfo.stanzaId = quoted.key.id
        contextInfo.quotedMessage = quotedMsg
        
        if (jid !== quoted.key.remoteJid) {
            contextInfo.remoteJid = quoted.key.remoteJid
        }
        
        if (key === 'requestPaymentMessage' && requestPayment) {
            requestPayment.contextInfo = contextInfo
        } else {
            innerMessage[key].contextInfo = contextInfo
        }
    }
    
    if (!!(options?.ephemeralExpiration) &&
        key !== 'protocolMessage' &&
        key !== 'ephemeralMessage' &&
        !WABinary_1.isJidNewsletter(jid)) {
        innerMessage[key].contextInfo = {
            ...(innerMessage[key].contextInfo || {}),
            expiration: options.ephemeralExpiration || Defaults_1.WA_DEFAULT_EPHEMERAL
        }
    }
    
    message = Types_1.WAProto.Message.fromObject(message)
    
    const messageJSON = {
        key: {
            remoteJid: jid,
            fromMe: true,
            id: options?.messageId || generics_1.generateMessageID()
        },
        message: message,
        messageTimestamp: timestamp,
        messageStubParameters: [],
        participant: WABinary_1.isJidGroup(jid) || WABinary_1.isJidStatusBroadcast(jid) ? userJid : undefined,
        status: Types_1.WAMessageStatus.PENDING
    }
    
    return Types_1.WAProto.WebMessageInfo.fromObject(messageJSON)
}

const generateWAMessage = async (jid, content, options) => {
    options.logger = options?.logger?.child({ msgId: options.messageId })
    
    return generateWAMessageFromContent(jid, await generateWAMessageContent(content, { newsletter: WABinary_1.isJidNewsletter(jid), ...options }), options)
}

const getContentType = (content) => {
    if (content) {
        const keys = Object.keys(content)
        const key = keys.find(k => (k === 'conversation' || k.endsWith('Message') || k.endsWith('V2') || k.endsWith('V3') || k.endsWith('V4') || k.endsWith('V5')) && k !== 'senderKeyDistributionMessage' && k !== 'messageContextInfo')
        
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
               (message === null || message === void 0 ? void 0 : message.editedMessage)
            || (message === null || message === void 0 ? void 0 : message.statusAddYours) 
            || (message === null || message === void 0 ? void 0 : message.botTaskMessage) 
            || (message === null || message === void 0 ? void 0 : message.eventCoverImage) 
            || (message === null || message === void 0 ? void 0 : message.botInvokeMessage) 
            || (message === null || message === void 0 ? void 0 : message.viewOnceMessage)
            || (message === null || message === void 0 ? void 0 : message.ephemeralMessage)
            || (message === null || message === void 0 ? void 0 : message.lottieStickerMessage)
            || (message === null || message === void 0 ? void 0 : message.groupStatusMessage)  
            || (message === null || message === void 0 ? void 0 : message.limitSharingMessage)
            || (message === null || message === void 0 ? void 0 : message.viewOnceMessageV2)
            || (message === null || message === void 0 ? void 0 : message.statusMentionMessage)
            || (message === null || message === void 0 ? void 0 : message.pollCreationMessageV4)
            || (message === null || message === void 0 ? void 0 : message.pollCreationMessageV5)             
            || (message === null || message === void 0 ? void 0 : message.associatedChildMessage)
            || (message === null || message === void 0 ? void 0 : message.groupMentionedMessage)             
            || (message === null || message === void 0 ? void 0 : message.groupStatusMentionMessage) 
            || (message === null || message === void 0 ? void 0 : message.viewOnceMessageV2Extension)            
            || (message === null || message === void 0 ? void 0 : message.documentWithCaptionMessage)
            || (message === null || message === void 0 ? void 0 : message.pollCreationOptionImageMessage))
    }
}

/**
 * Extract the true message content from a message
 * Eg. extracts the inner message from a disappearing message/view once message
 */
const extractMessageContent = (content) => {
    let _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p
    const extractFromTemplateMessage = (msg) => {
        if (msg.imageMessage) {
            return { imageMessage: msg.imageMessage }
        }
        
        else if (msg.documentMessage) {
            return { documentMessage: msg.documentMessage }
        }
        
        else if (msg.videoMessage) {
            return { videoMessage: msg.videoMessage }
        }
        
        else if (msg.locationMessage) {
            return { locationMessage: msg.locationMessage }
        }
        
        else {
            return {
                conversation: 'contentText' in msg
                    ? msg.contentText
                    : ('hydratedContentText' in msg ? msg.hydratedContentText : '')
            }
        }
    }
    
    content = normalizeMessageContent(content)
    
    if (content === null || content === void 0 ? void 0 : content.buttonsMessage) {
        return extractFromTemplateMessage(content.buttonsMessage)
    }
    
    if (content === null || content === void 0 ? void 0 : content.listMessage) {
    	return extractFromTemplateMessage(content.listMessage)
    }
    
    if ((_a = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _a === void 0 ? void 0 : _a.interactiveMessageTemplate) {
    	return extractFromTemplateMessage((_b = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _b === void 0 ? void 0 : _b.interactiveMessageTemplate)
    }
    
    if ((_c = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _c === void 0 ? void 0 : _c.hydratedFourRowTemplate) {
        return extractFromTemplateMessage((_d = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _d === void 0 ? void 0 : _d.hydratedFourRowTemplate)
    }
    
    if ((_e = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _e === void 0 ? void 0 : _e.hydratedTemplate) {
        return extractFromTemplateMessage((_f = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _f === void 0 ? void 0 : _f.hydratedTemplate)
    }
    
    if ((_g = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _g === void 0 ? void 0 : _g.fourRowTemplate) {
        return extractFromTemplateMessage((_h = content === null || content === void 0 ? void 0 : content.templateMessage) === null || _h === void 0 ? void 0 : _h.fourRowTemplate)
    }
    
    if ((_i = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _i === void 0 ? void 0 : _i.shopStorefrontMessage) {
    	return extractFromTemplateMessage((_j = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _j === void 0 ? void 0 : _j.shopStorefrontMessage)
    }
    
    if ((_k = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _k === void 0 ? void 0 : _k.collectionMessage) {
    	return extractFromTemplateMessage((_l = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _l === void 0 ? void 0 : _l.collectionMessage)
    }
    
    if ((_m = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _m === void 0 ? void 0 : _m.nativeFlowMessage) {
    	return extractFromTemplateMessage((_n = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _n === void 0 ? void 0 : _n.nativeFlowMessage)
    }
    
    if ((_o = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _o === void 0 ? void 0 : _o.carouselMessage) {
    	return extractFromTemplateMessage((_p = content === null || content === void 0 ? void 0 : content.interactiveMessage) === null || _p === void 0 ? void 0 : _p.carouselMessage)
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
                'unknown'

/** Upserts a receipt in the message */
const updateMessageWithReceipt = (msg, receipt) => {
    msg.userReceipt = msg.userReceipt || []
    const recp = msg.userReceipt.find(m => m.userJid === receipt.userJid)
    
    if (recp) {
        Object.assign(recp, receipt)
    }
    
    else {
        msg.userReceipt.push(receipt)
    }
}

/** Update the message with a new reaction */
const updateMessageWithReaction = (msg, reaction) => {
    const authorID = generics_1.getKeyAuthor(reaction.key)
    const reactions = (msg.reactions || [])
        .filter(r => generics_1.getKeyAuthor(r.key) !== authorID)
        
    if (reaction.text) {
        reactions.push(reaction)
    }
    
    msg.reactions = reactions
}

/** Update the message with a new poll update */
const updateMessageWithPollUpdate = (msg, update) => {
    const authorID = generics_1.getKeyAuthor(update.pollUpdateMessageKey)
    const votes = (msg.pollUpdates || [])
        .filter(r => generics_1.getKeyAuthor(r.pollUpdateMessageKey) !== authorID)
        
    if (update.vote?.selectedOptions?.length) {
        votes.push(update)
    }
    
    msg.pollUpdates = votes
}

/**
 * Aggregates all poll updates in a poll.
 * @param msg the poll creation message
 * @param meId your jid
 * @returns A list of options & their voters
 */
function getAggregateVotesInPollMessage({ message, pollUpdates }, meId) {
    message = normalizeMessageContent(message)
    
    const opts = message?.pollCreationMessage?.options || message?.pollCreationMessageV2?.options || message?.pollCreationMessageV3?.options || []
    
    const voteHashMap = opts.reduce((acc, opt) => {
        const hash = crypto_2.sha256(Buffer.from(opt.optionName || '')).toString()
        acc[hash] = {
            name: opt.optionName || '',
            voters: []
        }
        
        return acc
    }, {})
    
    for (const update of pollUpdates || []) {
        const { vote } = update
        
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
            
            voteHashMap[hash].voters.push(generics_1.getKeyAuthor(update.pollUpdateMessageKey, meId))
        }
    }
    
    return Object.values(voteHashMap)
}

/** Given a list of message keys, aggregates them by chat & sender. Useful for sending read receipts in bulk */
const aggregateMessageKeysNotFromMe = (keys) => {
    const keyMap = {}
    
    for (const { remoteJid, id, participant, fromMe } of keys) {
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
        if (ctx && axios_1.default.isAxiosError(error) && // check if the message requires a reupload
            REUPLOAD_REQUIRED_STATUS.includes(error.response?.status)) {
            ctx.logger.info({ key: message.key }, 'sending reupload media request...')
            
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
            throw new boom_1.Boom('No message present', { statusCode: 400, data: message })
        }
        
        const contentType = getContentType(mContent)
        let mediaType = contentType?.replace('Message', '')
        const media = mContent[contentType]
        
        if (!media || typeof media !== 'object' || (!('url' in media) && !('thumbnailDirectPath' in media))) {
            throw new boom_1.Boom(`"${contentType}" message is not a media message`)
        }
        
        let download
        
        if ('thumbnailDirectPath' in media && !('url' in media)) {
            download = {
                directPath: media.thumbnailDirectPath,
                mediaKey: media.mediaKey
            }
            mediaType = 'thumbnail-link'
        }
        
        else {
            download = media
        }
        
        const stream = await messages_media_1.downloadContentFromMessage(download, mediaType, options)
        
        if (type === 'buffer') {
            const bufferArray = []
            
            for await (const chunk of stream) {
                bufferArray.push(chunk)
            }
            
            return Buffer.concat(bufferArray)
        }
        
        return stream
    }
}

/** Checks whether the given message is a media message if it is returns the inner content */
const assertMediaContent = (content) => {
    content = extractMessageContent(content)
    
    const mediaContent = content?.documentMessage
		|| content?.imageMessage
		|| content?.videoMessage
		|| content?.audioMessage
		|| content?.stickerMessage
		
    if (!mediaContent) {
        throw new boom_1.Boom('given message is not a media message', { statusCode: 400, data: content })
    }
    return mediaContent
}

/**
 * this is an experimental patch to make buttons work
 * Don't know how it works, but it does for now
 */
const patchMessageForMdIfRequired = (message) => {
	if (message?.buttonsMessage || 
	    message?.templateMessage ||
    	message?.listMessage ||
	    message?.interactiveMessage?.nativeFlowMesaage
	) {
        message = {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                       deviceListMetadataVersion: 2,
                         deviceListMetadata: {}
                       }, 
                    ...message
                }
            }
        }
    }
    return message
}

module.exports = {
  extractUrlFromText, 
  generateLinkPreviewIfRequired, 
  prepareWAMessageMedia, 
  prepareDisappearingMessageSettingContent, 
  generateForwardMessageContent, 
  generateWAMessageContent, 
  generateWAMessageFromContent, 
  generateWAMessage, 
  getContentType, 
  normalizeMessageContent, 
  extractMessageContent, 
  getDevice,  
  updateMessageWithReceipt, 
  updateMessageWithReaction, 
  updateMessageWithPollUpdate, 
  getAggregateVotesInPollMessage, 
  aggregateMessageKeysNotFromMe, 
  downloadMediaMessage, 
  assertMediaContent, 
  patchMessageForMdIfRequired
}