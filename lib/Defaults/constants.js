"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const UNAUTHORIZED_CODES = [401, 403, 419]

const PHONENUMBER_MCC = require("./phonenumber-mcc.json")

const DEFAULT_ORIGIN = 'https://web.whatsapp.com'

const PHONE_CONNECTION_CB = 'CB:Pong'

const WA_ADV_ACCOUNT_SIG_PREFIX = Buffer.from([6, 0])

const WA_ADV_DEVICE_SIG_PREFIX = Buffer.from([6, 1])

const WA_ADV_HOSTED_ACCOUNT_SIG_PREFIX = Buffer.from([6, 5])

const WA_ADV_HOSTED_DEVICE_SIG_PREFIX = Buffer.from([6, 6])

const WA_DEFAULT_EPHEMERAL = 7 * 24 * 60 * 60

const NOISE_MODE = 'Noise_XX_25519_AESGCM_SHA256\0\0\0\0'

const DICT_VERSION = 3

const KEY_BUNDLE_TYPE = Buffer.from([5])

const NOISE_WA_HEADER = Buffer.from([87, 65, 6, DICT_VERSION]) // last is "DICT_VERSION"

/** from: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url */
const URL_REGEX = /https:\/\/(?![^:@\/\s]+:[^:@\/\s]+@)[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(:\d+)?(\/[^\s]*)?/g

const MIN_PREKEY_COUNT = 5

const INITIAL_PREKEY_COUNT = 812

const UPLOAD_TIMEOUT = 30000 // 30 seconds

const MIN_UPLOAD_INTERVAL = 5000 // seconds minimum between uploads

const WA_CERT_DETAILS = {
    SERIAL: 0
}

const DEFAULT_CACHE_TTLS = {
    SIGNAL_STORE: 5 * 60,
    MSG_RETRY: 60 * 60,
    CALL_OFFER: 5 * 60,
    USER_DEVICES: 5 * 60, // 5 minutes
}

module.exports = {
    UNAUTHORIZED_CODES,
    PHONENUMBER_MCC,
    DEFAULT_ORIGIN,
    PHONE_CONNECTION_CB,
    WA_ADV_ACCOUNT_SIG_PREFIX,
    WA_ADV_DEVICE_SIG_PREFIX,
    WA_ADV_HOSTED_ACCOUNT_SIG_PREFIX,
    WA_ADV_HOSTED_DEVICE_SIG_PREFIX,
    WA_DEFAULT_EPHEMERAL,
    NOISE_MODE,
    DICT_VERSION,
    KEY_BUNDLE_TYPE,
    NOISE_WA_HEADER,
    URL_REGEX,
    MIN_PREKEY_COUNT,
    MIN_UPLOAD_INTERVAL,
    INITIAL_PREKEY_COUNT,
    UPLOAD_TIMEOUT,
    WA_CERT_DETAILS,
    DEFAULT_CACHE_TTLS
}