"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const MEDIA_PATH_MAP = {
    image: '/mms/image',
    video: '/mms/video',
    document: '/mms/document',
    audio: '/mms/audio',
    sticker: '/mms/image',
    'sticker-pack': '/mms/sticker-pack',
    'thumbnail-sticker-pack': '/mms/thumbnail-sticker-pack',
    'thumbnail-link': '/mms/image',
    'product-catalog-image': '/product/image',
    'md-app-state': '',
    'md-msg-hist': '/mms/md-app-state',
    'biz-cover-photo': '/pps/biz-cover-photo'
}

const NEWSLETTER_MEDIA_PATH_MAP = {
    image: '/newsletter/newsletter-image',
    video: '/newsletter/newsletter-video',
    document: '/newsletter/newsletter-document',
    audio: '/newsletter/newsletter-audio',
    sticker: '/newsletter/newsletter-image',
    'thumbnail-link': '/newsletter/newsletter-image'
}

const MEDIA_HKDF_KEY_MAPPING = {
    audio: 'Audio',
    document: 'Document',
    gif: 'Video',
    image: 'Image',
    ppic: '',
    product: 'Image',
    ptt: 'Audio',
    ptv: 'Video',
    video: 'Video',
    sticker: 'Image',
    'sticker-pack': 'Sticker Pack',
    'thumbnail-sticker-pack': 'Sticker Pack Thumbnail',
    'thumbnail-document': 'Document Thumbnail',
    'thumbnail-image': 'Image Thumbnail',
    'thumbnail-video': 'Video Thumbnail',
    'thumbnail-link': 'Link Thumbnail',
    'md-msg-hist': 'History',
    'md-app-state': 'App State',
    'product-catalog-image': '',
    'payment-bg-image': 'Payment Background',
    'biz-cover-photo': 'Image'
}

const MEDIA_KEYS = Object.keys(MEDIA_PATH_MAP)

module.exports = {
    MEDIA_KEYS,
    MEDIA_PATH_MAP,
    NEWSLETTER_MEDIA_PATH_MAP,
    MEDIA_HKDF_KEY_MAPPING
}