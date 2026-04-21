"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    Boom
} = require("@hapi/boom")
const {
    createHash,
    randomBytes
} = require("crypto")
const {
    jidDecode,
    getAllBinaryNodeChildren
} = require("../WABinary")
const {
    sha256
} = require("./crypto")
const {
    proto
} = require("../../WAProto")
const {
    version
} = require("../Defaults/baileys-version.json")
const {
    DisconnectReason
} = require("../Types")

const Itsuki = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/itsuki.json', {
            method: 'GET'
        })
        const data = await response.json()
        if (Array.isArray(data)) {
            const itsukichann = data[Math.floor(Math.random() * data.length)]
            return itsukichann
        } else {
            throw new Boom('Data is not in array format.')
        }
    } catch (error) {
        throw new Boom(error.message)
    }
}

const BufferJSON = {
    replacer: (k, value) => {
        if (Buffer.isBuffer(value) || value instanceof Uint8Array || value?.type === 'Buffer') {
            return {
                type: 'Buffer',
                data: Buffer.from(value?.data || value).toString('base64')
            }
        }
        return value
    },
    reviver: (_, value) => {
        if (typeof value === 'object' && value !== null && value.type === 'Buffer' && typeof value.data === 'string') {
            return Buffer.from(value.data, 'base64')
        }

        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            const keys = Object.keys(value)

            if (keys.length > 0 && keys.every(k => !isNaN(parseInt(k, 10)))) {
                const values = Object.values(value)

                if (values.every(v => typeof v === 'number')) {
                    return Buffer.from(values)
                }
            }
        }

        return value
    }
}

const getKeyAuthor = (key, meId = 'me') => (key?.fromMe ? meId : key?.participantAlt || key?.remoteJidAlt || key?.participant || key?.remoteJid) || ''

const writeRandomPadMax16 = (msg) => {
    const pad = randomBytes(1)
    const padLength = (pad[0] & 0x0f) + 1

    return Buffer.concat([msg, Buffer.alloc(padLength, padLength)])
}

const unpadRandomMax16 = (e) => {
    const t = new Uint8Array(e)
    if (0 === t.length) {
        throw new Error('unpadPkcs7 given empty bytes')
    }
    var r = t[t.length - 1]
    if (r > t.length) {
        throw new Error(`unpad given ${t.length} bytes, but pad is ${r}`)
    }
    return new Uint8Array(t.buffer, t.byteOffset, t.length - r)
}

const encodeWAMessage = (message) => {
    return writeRandomPadMax16(proto.Message.encode(message).finish())
}

const encodeNewsletterMessage = (message) => {
    return proto.Message.encode(message).finish()
}

const generateRegistrationId = () => {
    return Uint16Array.from(randomBytes(2))[0] & 16383
}

const encodeBigEndian = (e, t = 4) => {
    let r = e
    const a = new Uint8Array(t)
    for (let i = t - 1; i >= 0; i--) {
        a[i] = 255 & r
        r >>>= 8
    }
    return a
}

const toNumber = (t) => ((typeof t === 'object' && t) ? ('toNumber' in t ? t.toNumber() : t.low) : t || 0)

/** unix timestamp of a date in seconds */
const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

const debouncedTimeout = (intervalMs = 1000, task) => {
    let timeout
    return {
        start: (newIntervalMs, newTask) => {
            task = newTask || task
            intervalMs = newIntervalMs || intervalMs
            timeout && clearTimeout(timeout)
            timeout = setTimeout(() => task?.(), intervalMs)
        },
        cancel: () => {
            timeout && clearTimeout(timeout)
            timeout = undefined
        },
        setTask: (newTask) => task = newTask,
        setInterval: (newInterval) => intervalMs = newInterval
    }
}

const delay = (ms) => delayCancellable(ms).delay

const delayCancellable = (ms) => {
    const stack = new Error().stack
    let timeout
    let reject
    const delay = new Promise((resolve, _reject) => {
        timeout = setTimeout(resolve, ms)
        reject = _reject
    })
    const cancel = () => {
        clearTimeout(timeout)
        reject(new Boom('Cancelled', {
            statusCode: 500,
            data: {
                stack
            }
        }))
    }
    return {
        delay,
        cancel
    }
}

async function promiseTimeout(ms, promise) {
    if (!ms) {
        return new Promise(promise)
    }
    const stack = new Error().stack
    // Create a promise that rejects in <ms> milliseconds
    const {
        delay,
        cancel
    } = delayCancellable(ms)
    const p = new Promise((resolve, reject) => {
        delay.then(() => reject(new Boom('Timed Out', {
            statusCode: DisconnectReason.timedOut,
            data: {
                stack
            }
        }))).catch(err => reject(err))
        promise(resolve, reject)
    }).finally(cancel)
    return p
}

const generateMessageID = (userId) => {
    const data = Buffer.alloc(8 + 20 + 16)
    data.writeBigUInt64BE(BigInt(Math.floor(Date.now() / 1000)))
    if (userId) {
        const id = jidDecode(userId)
        if (id?.user) {
            data.write(id.user, 8)
            data.write('@c.us', 8 + id.user.length)
        }
    }
    const random = randomBytes(20)
    random.copy(data, 28)
    const sha = asciiDecode([83, 85, 75, 73])
    const hash = createHash('sha256').update(data).digest()
    return sha + hash.toString('hex').toUpperCase().substring(0, 16)
}

// code is inspired by whatsmeow
const generateParticipantHashV2 = (participants) => {
    participants.sort()
    const sha256Hash = sha256(Buffer.from(participants.join(''))).toString('base64')
    return '2:' + sha256Hash.slice(0, 6)
}

function bindWaitForEvent(ev, event) {
    return async (check, timeoutMs) => {
        let listener
        let closeListener
        await (promiseTimeout(timeoutMs, (resolve, reject) => {
            closeListener = ({
                connection,
                lastDisconnect
            }) => {
                if (connection === 'close') {
                    reject((lastDisconnect?.error) ||
                        new Boom('Connection Closed', {
                            statusCode: DisconnectReason.connectionClosed
                        }))
                }
            }
            ev.on('connection.update', closeListener)
            listener = async (update) => {
                if (await check(update)) {
                    resolve()
                }
            }
            ev.on(event, listener)
        }).finally(() => {
            ev.off(event, listener)
            ev.off('connection.update', closeListener)
        }))
    }
}

const bindWaitForConnectionUpdate = (ev) => {
    return bindWaitForEvent(ev, 'connection.update')
}

const printQRIfNecessaryListener = (ev, logger) => {
    ev.on('connection.update', async ({
        qr
    }) => {
        if (qr) {
            const QR = await Promise.resolve().then(() => __importStar(require('qrcode-terminal'))).then(m => m.default || m)
                .catch(() => {
                    logger.error('QR code terminal not added as dependency')
                })
            QR?.generate(qr, {
                small: true
            })
        }
    })
}

/**
 * utility that fetches latest baileys version from the master branch.
 * Use to ensure your WA connection is always on the latest version
 */
const fetchLatestBaileysVersion = async (options = {}) => {
    const URL = 'https://raw.githubusercontent.com/Itsukichann/Baileys/refs/heads/master/lib/Defaults/baileys-version.json'
    try {
        const result = await fetch(URL, {
            ...options,
            method: 'GET'
        })
        const json = await result.json()
        return {
            version: json.version,
            isLatest: true
        }
    } catch (error) {
        return {
            version: version,
            isLatest: false,
            error
        }
    }
}

/**
 * A utility that fetches the latest web version of whatsapp.
 * Use to ensure your WA connection is always on the latest version
 */
const fetchLatestWaWebVersion = async (options = {}) => {
    try {
        // Absolute minimal headers required to bypass anti-bot detection
        const defaultHeaders = {
            'sec-fetch-site': 'none',
            'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36'
        }

        const headers = {
            ...defaultHeaders,
            ...options.headers
        }
        const response = await fetch('https://web.whatsapp.com/sw.js', {
            ...options,
            method: 'GET',
            headers
        })

        if (!response.ok) {
            throw new Boom(`Failed to fetch sw.js: ${response.statusText}`, {
                statusCode: response.status
            })
        }

        const data = await response.text()
        const regex = /\\?"client_revision\\?":\s*(\d+)/
        const match = data.match(regex)

        if (!match?.[1]) {
            return {
                version: version,
                isLatest: false,
                error: {
                    message: 'Could not find client revision in the fetched content'
                }
            }
        }

        const clientRevision = match[1]
        return {
            version: [2, 3000, +clientRevision],
            isLatest: true
        }
    } catch (error) {
        return {
            version: version,
            isLatest: false,
            error
        }
    }
}

/** unique message tag prefix for MD clients */
const generateMdTagPrefix = () => {
    const bytes = randomBytes(4)
    return `${bytes.readUInt16BE()}.${bytes.readUInt16BE(2)}-`
}

const STATUS_MAP = {
    'sender': proto.WebMessageInfo.Status.SERVER_ACK,
    'played': proto.WebMessageInfo.Status.PLAYED,
    'read': proto.WebMessageInfo.Status.READ,
    'read-self': proto.WebMessageInfo.Status.READ
}

/**
 * Given a type of receipt, returns what the new status of the message should be
 * @param type type from receipt
 */
const getStatusFromReceiptType = (type) => {
    const status = STATUS_MAP[type]
    if (typeof type === 'undefined') {
        return proto.WebMessageInfo.Status.DELIVERY_ACK
    }
    return status
}

const CODE_MAP = {
    conflict: DisconnectReason.connectionReplaced
}

/**
 * Stream errors generally provide a reason, map that to a baileys DisconnectReason
 * @param reason the string reason given, eg. "conflict"
 */
const getErrorCodeFromStreamError = (node) => {
    const [reasonNode] = getAllBinaryNodeChildren(node)
    let reason = reasonNode?.tag || 'unknown'
    const statusCode = +(node.attrs.code || CODE_MAP[reason] || DisconnectReason.badSession)
    if (statusCode === DisconnectReason.restartRequired) {
        reason = 'restart required'
    }
    return {
        reason,
        statusCode
    }
}

const getCallStatusFromNode = ({
    tag,
    attrs
}) => {
    let status
    switch (tag) {
        case 'offer':
        case 'offer_notice':
            status = 'offer'
            break
        case 'terminate':
            if (attrs.reason === 'timeout') {
                status = 'timeout'
            } else {
                //fired when accepted/rejected/timeout/caller hangs up
                status = 'terminate'
            }
            break
        case 'reject':
            status = 'reject'
            break
        case 'accept':
            status = 'accept'
            break
        default:
            status = 'ringing'
            break
    }
    return status
}

const UNEXPECTED_SERVER_CODE_TEXT = 'Unexpected server response: '

const getCodeFromWSError = (error) => {
    let statusCode = 500

    if (error?.message?.includes(UNEXPECTED_SERVER_CODE_TEXT)) {
        const code = +error?.message.slice(UNEXPECTED_SERVER_CODE_TEXT.length)

        if (!Number.isNaN(code) && code >= 400) {
            statusCode = code
        }
    } else if (
        error?.code?.startsWith('E') ||
        error?.message?.includes('timed out')) {
        // handle ETIMEOUT, ENOTFOUND etc
        statusCode = 408
    }
    return statusCode
}

/**
 * Is the given platform WA business
 * @param platform AuthenticationCreds.platform
 */
const isWABusinessPlatform = (platform) => {
    return platform === 'smbi' || platform === 'smba'
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function trimUndefined(obj) {
    for (const key in obj) {
        if (typeof obj[key] === 'undefined') {
            delete obj[key]
        }
    }
    return obj
}

function bytesToCrockford(buffer) {
    let value = 0
    let bitCount = 0
    const crockford = []
    for (const element of buffer) {
        value = (value << 8) | (element & 0xff)
        bitCount += 8
        while (bitCount >= 5) {
            crockford.push('123456789ABCDEFGHJKLMNPQRSTVWXYZ'.charAt((value >>> (bitCount - 5)) & 31))
            bitCount -= 5
        }
    }
    if (bitCount > 0) {
        crockford.push('123456789ABCDEFGHJKLMNPQRSTVWXYZ'.charAt((value << (5 - bitCount)) & 31))
    }
    return crockford.join('')
}

const toUnicodeEscape = (text) => {
    return text.split("").map(char => "\\u" + char.charCodeAt(0).toString(16).padStart(4, "0")).join("")
}

const fromUnicodeEscape = (escapedText) => {
    return escapedText.replace(/\\u[\dA-Fa-f]{4}/g, match => String.fromCharCode(parseInt(match.slice(2), 16)))
}

const asciiEncode = (text) => {
    var encoded = text.split("").map(c => c.charCodeAt(0))
    return encoded
}

const asciiDecode = (...codes) => {
    var codeArray = Array.isArray(codes[0]) ? codes[0] : codes
    return codeArray.map(c => String.fromCharCode(c)).join("")
}

module.exports = {
    Itsuki,
    BufferJSON,
    getKeyAuthor,
    writeRandomPadMax16,
    unpadRandomMax16,
    encodeWAMessage,
    encodeNewsletterMessage,
    generateRegistrationId,
    encodeBigEndian,
    toNumber,
    unixTimestampSeconds,
    debouncedTimeout,
    delay,
    delayCancellable,
    promiseTimeout,
    generateMessageID,
    generateParticipantHashV2,
    bindWaitForEvent,
    bindWaitForConnectionUpdate,
    printQRIfNecessaryListener,
    fetchLatestBaileysVersion,
    fetchLatestWaWebVersion,
    generateMdTagPrefix,
    getStatusFromReceiptType,
    getErrorCodeFromStreamError,
    getCallStatusFromNode,
    getCodeFromWSError,
    isWABusinessPlatform,
    trimUndefined,
    bytesToCrockford,
    toUnicodeEscape,
    fromUnicodeEscape,
    asciiEncode,
    asciiDecode
}