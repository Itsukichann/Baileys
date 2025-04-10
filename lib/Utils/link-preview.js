"use strict"

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k
    var desc = Object.getOwnPropertyDescriptor(m, k)
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k] } }
    }
    Object.defineProperty(o, k2, desc)
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k
    o[k2] = m[k]
}))

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v })
}) : function(o, v) {
    o["default"] = v
})

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
    __setModuleDefault(result, mod)
    return result
}

Object.defineProperty(exports, "__esModule", { value: true })

const messages_1 = require("./messages")
const messages_media_1 = require("./messages-media")
const THUMBNAIL_WIDTH_PX = 192

/** Fetches an image and generates a thumbnail for it */
const getCompressedJpegThumbnail = async (url, { thumbnailWidth, fetchOpts }) => {
    const stream = await messages_media_1.getHttpStream(url, fetchOpts)
    const result = await messages_media_1.extractImageThumb(stream, thumbnailWidth)
    return result
}

/**
 * Given a piece of text, checks for any URL present, generates link preview for the same and returns it
 * Return undefined if the fetch failed or no URL was found
 * @param text first matched URL in text
 * @returns the URL info required to generate link preview
 */
const getUrlInfo = async (text, opts = { thumbnailWidth: THUMBNAIL_WIDTH_PX, fetchOpts: { timeout: 3000 }}) => {
    try {
        const retries = 0
        const maxRetry = 5
        const { getLinkPreview } = await Promise.resolve().then(() => __importStar(require('link-preview-js')))
        let previewLink = text
        if (!text.startsWith('https://') && !text.startsWith('http://')) {
            previewLink = 'https://' + previewLink
        }
        const info = await getLinkPreview(previewLink, {
            ...opts.fetchOpts,
            followRedirects: 'follow',
            handleRedirects: (baseURL, forwardedURL) => {
                const urlObj = new URL(baseURL)
                const forwardedURLObj = new URL(forwardedURL)
                if (retries >= maxRetry) {
                    return false
                }
                if (forwardedURLObj.hostname === urlObj.hostname
                    || forwardedURLObj.hostname === 'www.' + urlObj.hostname
                    || 'www.' + forwardedURLObj.hostname === urlObj.hostname) {
                    retries + 1
                    return true
                }
                else {
                    return false
                }
            },
            headers: opts.fetchOpts
        })
        if (info && 'title' in info && info.title) {
            const [image] = info.images
            const urlInfo = {
                'canonical-url': info.url,
                'matched-text': text,
                title: info.title,
                description: info.description,
                originalThumbnailUrl: image
            }
            if (opts.uploadImage) {
                const { imageMessage } = await messages_1.prepareWAMessageMedia({ image: { url: image } }, {
                    upload: opts.uploadImage,
                    mediaTypeOverride: 'thumbnail-link',
                    options: opts.fetchOpts
                })
                urlInfo.jpegThumbnail = imageMessage?.jpegThumbnail
                    ? Buffer.from(imageMessage.jpegThumbnail)
                    : undefined
                urlInfo.highQualityThumbnail = imageMessage || undefined
            }
            else {
                try {
                    urlInfo.jpegThumbnail = image
                        ? (await getCompressedJpegThumbnail(image, opts)).buffer
                        : undefined
                }
                catch (error) {
                    opts.logger?.debug({ err: error.stack, url: previewLink }, 'error in generating thumbnail')
                }
            }
            return urlInfo
        }
    }
    catch (error) {
        if (!error.message.includes('receive a valid')) {
            throw error
        }
    }
}

module.exports = {
  getUrlInfo
}