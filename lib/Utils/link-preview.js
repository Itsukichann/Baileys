"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    loadModule
} = require('./load-module')
const {
    prepareWAMessageMedia
} = require("./messages")
const {
    getHttpStream,
    extractImageThumb
} = require("./messages-media")
const THUMBNAIL_WIDTH_PX = 192

let _unfurl = null
async function getUnfurl() {
    if (!_unfurl) {
        const mod = await loadModule('unfurl.js')
        _unfurl = mod.unfurl ?? mod.default?.unfurl ?? mod.default
    }
    return _unfurl
}

/** Fetches an image and generates a thumbnail for it */
const getCompressedJpegThumbnail = async (url, {
    thumbnailWidth,
    fetchOpts
}) => {
    const stream = await getHttpStream(url, fetchOpts)
    const result = await extractImageThumb(stream, thumbnailWidth)
    return result
}

/**
 * Given a piece of text, checks for any URL present, generates link preview for the same and returns it
 * Return undefined if the fetch failed or no URL was found
 * @param text first matched URL in text
 * @returns the URL info required to generate link preview
 */
const getUrlInfo = async (text, opts = {
    thumbnailWidth: THUMBNAIL_WIDTH_PX,
    fetchOpts: {
        timeout: 3000
    }
}) => {
    try {
        let previewLink = text

        if (!text.startsWith('https://') && !text.startsWith('http://')) {
            previewLink = 'https://' + previewLink
        }

        const unfurl = await getUnfurl()
        const {
            open_graph: info
        } = await unfurl(previewLink, {
            ...opts.fetchOpts,
            oembed: false,
            compress: true,
            size: 0,
            follow: 50
        })

        if (info && 'title' in info && info.title) {
            const image = info.images?.[0]?.url
            const urlInfo = {
                'canonical-url': info.url,
                'matched-text': text,
                title: info.title,
                description: info.description,
                originalThumbnailUrl: image
            }

            if (opts.uploadImage) {
                const {
                    imageMessage
                } = await prepareWAMessageMedia({
                    image: {
                        url: image
                    }
                }, {
                    upload: opts.uploadImage,
                    mediaTypeOverride: 'thumbnail-link',
                    options: opts.fetchOpts
                })

                urlInfo.jpegThumbnail = imageMessage?.jpegThumbnail ? Buffer.from(imageMessage.jpegThumbnail) : undefined
                urlInfo.highQualityThumbnail = imageMessage || undefined
            } else {
                try {
                    urlInfo.jpegThumbnail = image ? (await getCompressedJpegThumbnail(image, opts)).buffer : undefined
                } catch (error) {
                    opts.logger?.debug({
                        err: error.stack,
                        url: previewLink
                    }, 'error in generating thumbnail')
                }
            }
            return urlInfo
        }
    } catch (error) {
        if (!error.message.includes('receive a valid')) {
            throw error
        }
    }
}

module.exports = {
    getUrlInfo
}