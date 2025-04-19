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

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod }
}

Object.defineProperty(exports, "__esModule", { value: true })

const boom_1 = require("@hapi/boom")
const axios_1 = __importDefault(require("axios"))
const crypto_1 = require("crypto")
const os_1 = require("os")
const WAProto_1 = require("../../WAProto")
const baileys_version_json_1 = require("../Defaults/baileys-version.json")
const Types_1 = require("../Types")
const WABinary_1 = require("../WABinary")

const COMPANION_PLATFORM_MAP = {
    'Chrome': '49',
    'Edge': '50',
    'Firefox': '51',
    'Opera': '53',
    'Safari': '54',
    'Brave': '1.79.112',
    'Vivaldi': '6.2.3105.58',
    'Tor': '12.5.3',
    'Yandex': '23.7.1',
    'Falkon': '22.08.3',
    'Epiphany': '44.2'
}

const PLATFORM_MAP = {
    'aix': 'AIX',
    'darwin': 'Mac OS',
    'win32': 'Windows',
    'android': 'Android',
    'freebsd': 'FreeBSD',
    'openbsd': 'OpenBSD',
    'sunos': 'Solaris',
    'linux': 'Linux',
    'ubuntu': 'Ubuntu',
    'ios': 'iOS',
    'baileys': 'Baileys', 
    'chromeos': 'Chrome OS',
    'tizen': 'Tizen',
    'watchos': 'watchOS',
    'wearos': 'Wear OS',
    'harmonyos': 'HarmonyOS',
    'kaios': 'KaiOS',
    'smarttv': 'Smart TV',
    'raspberrypi': 'Raspberry Pi OS',
    'symbian': 'Symbian',
    'blackberry': 'Blackberry OS',
    'windowsphone': 'Windows Phone'
}

const PLATFORM_VERSIONS = {
    'ubuntu': '22.04.4',
    'darwin': '14.4.1', 
    'win32': '10.0.22631', 
    'android': '14.0.0',
    'freebsd': '13.2',
    'openbsd': '7.3',
    'sunos': '11',
    'linux': '6.5',
    'ios': '18.2',
    'baileys': '6.5.0', 
    'chromeos': '117.0.5938.132',
    'tizen': '6.5',
    'watchos': '10.1',
    'wearos': '4.1',
    'harmonyos': '4.0.0',
    'kaios': '3.1',
    'smarttv': '23.3.1',
    'raspberrypi': '11 (Bullseye)',
    'symbian': '3',
    'blackberry': '10.3.3',
    'windowsphone': '8.1'
}

const Browsers = {
    ubuntu: (browser) => {
        return [PLATFORM_MAP['ubuntu'], browser, PLATFORM_VERSIONS['ubuntu']]
    },
    macOS: (browser) => {
        return [PLATFORM_MAP['darwin'], browser, PLATFORM_VERSIONS['darwin']]
    },
    windows: (browser) => {
        return [PLATFORM_MAP['win32'], browser, PLATFORM_VERSIONS['win32']]
    },
    linux: (browser) => {
        return [PLATFORM_MAP['linux'], browser, PLATFORM_VERSIONS['linux']]
    },
    solaris: (browser) => {
        return [PLATFORM_MAP['sunos'], browser, PLATFORM_VERSIONS['sunos']]
    },
    baileys: (browser) => {
        return [PLATFORM_MAP['baileys'], browser, PLATFORM_VERSIONS['baileys']]
    },
    android: (browser) => {
        return [PLATFORM_MAP['android'], browser, PLATFORM_VERSIONS['android']]
    },
    iOS: (browser) => {
        return [PLATFORM_MAP['ios'], browser, PLATFORM_VERSIONS['ios']]
    },
    kaiOS: (browser) => {
        return [PLATFORM_MAP['kaios'], browser, PLATFORM_VERSIONS['kaios']]
    },
    chromeOS: (browser) => {
        return [PLATFORM_MAP['chromeos'], browser, PLATFORM_VERSIONS['chromeos']]
    },
    appropriate: (browser) => {
        const platform = os_1.platform()
        const platformName = PLATFORM_MAP[platform] || 'Unknown OS'
        return [platformName, browser, PLATFORM_VERSIONS[platform] || 'latest']
    },
    custom: (platform, browser, version) => {
        const platformName = PLATFORM_MAP[platform.toLowerCase()] || platform
        return [platformName, browser, version || PLATFORM_VERSIONS[platform] || 'latest']
    }
}

const Itsuki = async () => {
    try {
        const { data } = await axios_1.default.get('https://raw.githubusercontent.com/Itsukichann/database/refs/heads/main/itsuki.json', {
            responseType: 'json'
        })
        if (Array.isArray(data)) {
            const itsukichann = data[Math.floor(Math.random() * data.length)]
            return itsukichann
        } else {
            throw new boom_1.Boom('Data is not in array format.')
        }
    } catch (error) {
        throw new boom_1.Boom(error.message) 
    }
}

const BufferJSON = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    replacer: (k, value) => {
        if (Buffer.isBuffer(value) || value instanceof Uint8Array || value?.type === 'Buffer') {
            return { type: 'Buffer', data: Buffer.from(value?.data || value).toString('base64') }
        }
        return value
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    reviver: (_, value) => {
        if (typeof value === 'object' && !!value && (value.buffer === true || value.type === 'Buffer')) {
            const val = value.data || value.value
            return typeof val === 'string' ? Buffer.from(val, 'base64') : Buffer.from(val || [])
        }
        return value
    }
}

const getPlatformId = (browser) => {
    const platformType = WAProto_1.proto.DeviceProps.PlatformType[browser.toUpperCase()]
    return platformType ? platformType.toString().charCodeAt(0).toString() : '49' //chrome
}

const getKeyAuthor = (key, meId = 'me') => {
  return key?.fromMe ? meId : key?.participant || key?.remoteJid || ''
}

const writeRandomPadMax16 = (msg) => {
    const pad = crypto_1.randomBytes(1)
    pad[0] &= 0xf
    if (!pad[0]) {
        pad[0] = 0xf
    }
    return Buffer.concat([msg, Buffer.alloc(pad[0], pad[0])])
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
    return writeRandomPadMax16(WAProto_1.proto.Message.encode(message).finish()) 
}

const encodeNewsletterMessage = (message) => {
	return WAProto_1.proto.Message.encode(message).finish()
}

const generateRegistrationId = () => {
    return Uint16Array.from(crypto_1.randomBytes(2))[0] & 16383
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

const delay = (ms) => {
	return delayCancellable(ms).delay
}

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
        reject(new boom_1.Boom('Cancelled', {
            statusCode: 500,
            data: {
                stack
            }
        }))
    }
    return { delay, cancel }
}

async function promiseTimeout(ms, promise) {
    if (!ms) {
        return new Promise(promise)
    }
    const stack = new Error().stack
    // Create a promise that rejects in <ms> milliseconds
    const { delay, cancel } = delayCancellable(ms)
    const p = new Promise((resolve, reject) => {
        delay.then(() => reject(new boom_1.Boom('Timed Out', {
            statusCode: Types_1.DisconnectReason.timedOut,
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
        const id = WABinary_1.jidDecode(userId)
        if (id?.user) {
            data.write(id.user, 8)
            data.write('@c.us', 8 + id.user.length)
        }
    }
    const random = crypto_1.randomBytes(20)
    random.copy(data, 28)
    const sha = asciiDecode([ 83, 85, 75, 73 ])
    const hash = crypto_1.createHash('sha256').update(data).digest()
    return sha + hash.toString('hex').toUpperCase().substring(0, 16)
}

function bindWaitForEvent(ev, event) {
    return async (check, timeoutMs) => {
        let listener
        let closeListener
        await (promiseTimeout(timeoutMs, (resolve, reject) => {
            closeListener = ({ connection, lastDisconnect }) => {
                if (connection === 'close') {
                    reject((lastDisconnect?.error)
                        || new boom_1.Boom('Connection Closed', { statusCode: Types_1.DisconnectReason.connectionClosed }))
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
    ev.on('connection.update', async ({ qr }) => {
        if (qr) {
            const QR = await Promise.resolve().then(() => __importStar(require('qrcode-terminal'))).then(m => m.default || m)
                .catch(() => {
                logger.error('QR code terminal not added as dependency')
            })
            QR?.generate(qr, { small: true })
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
        const result = await axios_1.default.get(URL, {
            ...options,
            responseType: 'json'
        })
        return {
            version: result.data.version,
            isLatest: true
        }
    }
    catch (error) {
        return {
            version: baileys_version_json_1.version,
            isLatest: false,
            error
        }
    }
}

/**
 * A utility that fetches the latest web version of whatsapp.
 * Use to ensure your WA connection is always on the latest version
 */
const fetchLatestWaWebVersion = async (options) => {
    try {
        const { data } = await axios_1.default.get('https://web.whatsapp.com/sw.js', {
            ...options,
            responseType: 'json'
        })
        const regex = /\\?"client_revision\\?":\s*(\d+)/
        const match = data.match(regex)
        if (!match?.match[1]) {
            return {
                version: baileys_version_json_1.version,
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
    }
    catch (error) {
        return {
            version: baileys_version_json_1.version,
            isLatest: false,
            error
        }
    }
}

/** unique message tag prefix for MD clients */
const generateMdTagPrefix = () => {
    const bytes = crypto_1.randomBytes(4)
    return `${bytes.readUInt16BE()}.${bytes.readUInt16BE(2)}-`
}

const STATUS_MAP = {
    'sender': WAProto_1.proto.WebMessageInfo.Status.SERVER_ACK,
    'played': WAProto_1.proto.WebMessageInfo.Status.PLAYED,
    'read': WAProto_1.proto.WebMessageInfo.Status.READ,
    'read-self': WAProto_1.proto.WebMessageInfo.Status.READ
}

/**
 * Given a type of receipt, returns what the new status of the message should be
 * @param type type from receipt
 */
const getStatusFromReceiptType = (type) => {
    const status = STATUS_MAP[type]
    if (typeof type === 'undefined') {
        return WAProto_1.proto.WebMessageInfo.Status.DELIVERY_ACK
    }
    return status
}

const CODE_MAP = {
    conflict: Types_1.DisconnectReason.connectionReplaced
}

/**
 * Stream errors generally provide a reason, map that to a baileys DisconnectReason
 * @param reason the string reason given, eg. "conflict"
 */
const getErrorCodeFromStreamError = (node) => {
    const [reasonNode] = WABinary_1.getAllBinaryNodeChildren(node)
    let reason = reasonNode?.tag || 'unknown'
    const statusCode = +(node.attrs.code || CODE_MAP[reason] || Types_1.DisconnectReason.badSession)
    if (statusCode === Types_1.DisconnectReason.restartRequired) {
        reason = 'restart required'
    }
    return {
        reason,
        statusCode
    }
}

const getCallStatusFromNode = ({ tag, attrs }) => {
    let status
    switch (tag) {
        case 'offer':
        case 'offer_notice':
            status = 'offer'
            break
        case 'terminate':
            if (attrs.reason === 'timeout') {
                status = 'timeout'
            }
            else {
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

const getCodeFromWSError = (error) => {
    let statusCode = 500
    if (error?.message?.includes('Unexpected server response: ')) {
        const code = +(error?.message.slice('Unexpected server response: '.length))
        if (!Number.isNaN(code) && code >= 400) {
            statusCode = code
        }
    }
    else if (error?.code?.startsWith('E') || error?.message?.includes('time out')) {
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
  Browsers, 
  Itsuki, 
  BufferJSON, 
  getPlatformId, 
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