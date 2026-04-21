"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const {
    createCipheriv,
    createDecipheriv,
    createHash,
    createHmac,
    randomBytes
} = require("crypto")
const {
    curve
} = require("@itsukichan/libsignal-node")
const {
    KEY_BUNDLE_TYPE
} = require("../Defaults/constants")

const generateSignalPubKey = (pubKey) => (
    pubKey.length === 33 ? pubKey : Buffer.concat([KEY_BUNDLE_TYPE, pubKey])
)

const Curve = {
    generateKeyPair: () => {
        const {
            pubKey,
            privKey
        } = curve.generateKeyPair()
        return {
            private: Buffer.from(privKey),
            public: Buffer.from(pubKey.slice(1))
        }
    },
    sharedKey: (privateKey, publicKey) => {
        const shared = curve.calculateAgreement(generateSignalPubKey(publicKey), privateKey)
        return Buffer.from(shared)
    },
    sign: (privateKey, buf) => curve.calculateSignature(privateKey, buf),
    verify: (pubKey, message, signature) => {
        try {
            curve.verifySignature(generateSignalPubKey(pubKey), message, signature)
            return true
        } catch {
            return false
        }
    }
}

const signedKeyPair = (identityKeyPair, keyId) => {
    const preKey = Curve.generateKeyPair()
    const pubKey = generateSignalPubKey(preKey.public)
    const signature = Curve.sign(identityKeyPair.private, pubKey)
    return {
        keyPair: preKey,
        signature,
        keyId
    }
}

const GCM_TAG_LENGTH = 128 >> 3

function aesEncryptGCM(plaintext, key, iv, additionalData) {
    const cipher = createCipheriv('aes-256-gcm', key, iv)
    if (additionalData) cipher.setAAD(additionalData)
    return Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()])
}

function aesDecryptGCM(ciphertext, key, iv, additionalData) {
    const decipher = createDecipheriv('aes-256-gcm', key, iv)
    const enc = ciphertext.slice(0, ciphertext.length - GCM_TAG_LENGTH)
    const tag = ciphertext.slice(ciphertext.length - GCM_TAG_LENGTH)
    if (additionalData) decipher.setAAD(additionalData)
    decipher.setAuthTag(tag)
    return Buffer.concat([decipher.update(enc), decipher.final()])
}

function aesEncryptCTR(plaintext, key, iv) {
    const cipher = createCipheriv('aes-256-ctr', key, iv)
    return Buffer.concat([cipher.update(plaintext), cipher.final()])
}

function aesDecryptCTR(ciphertext, key, iv) {
    const decipher = createDecipheriv('aes-256-ctr', key, iv)
    return Buffer.concat([decipher.update(ciphertext), decipher.final()])
}

function aesDecrypt(buffer, key) {
    return aesDecryptWithIV(buffer.slice(16), key, buffer.slice(0, 16))
}

function aesDecryptWithIV(buffer, key, IV) {
    const aes = createDecipheriv('aes-256-cbc', key, IV)
    return Buffer.concat([aes.update(buffer), aes.final()])
}

function aesEncrypt(buffer, key) {
    const IV = randomBytes(16)
    const aes = createCipheriv('aes-256-cbc', key, IV)
    return Buffer.concat([IV, aes.update(buffer), aes.final()])
}

function aesEncrypWithIV(buffer, key, IV) {
    const aes = createCipheriv('aes-256-cbc', key, IV)
    return Buffer.concat([aes.update(buffer), aes.final()])
}

function hmacSign(buffer, key, variant = 'sha256') {
    return createHmac(variant, key).update(buffer).digest()
}

function sha256(buffer) {
    return createHash('sha256').update(buffer).digest()
}

function md5(buffer) {
    return createHash('md5').update(buffer).digest()
}

async function hkdf(buffer, expandedLength, info) {
    // Normalize to a Uint8Array whose underlying buffer is a regular ArrayBuffer (not ArrayBufferLike)
    // Cloning via new Uint8Array(...) guarantees the generic parameter is ArrayBuffer which satisfies WebCrypto types.
    const inputKeyMaterial = new Uint8Array(buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer))

    // Set default values if not provided
    const salt = info.salt ? new Uint8Array(info.salt) : new Uint8Array(0)
    const infoBytes = info.info ? new TextEncoder().encode(info.info) : new Uint8Array(0)

    // Import the input key material (cast to BufferSource to appease TS DOM typings)
    const importedKey = await crypto.subtle.importKey('raw', inputKeyMaterial, {
        name: 'HKDF'
    }, false, [
        'deriveBits'
    ])

    const derivedBits = await crypto.subtle.deriveBits({
        name: 'HKDF',
        hash: 'SHA-256',
        salt,
        info: infoBytes
    }, importedKey, expandedLength * 8)

    return Buffer.from(derivedBits)
}

async function derivePairingCodeKey(pairingCode, salt) {
    const encoder = new TextEncoder()
    const pairingCodeBuffer = encoder.encode(pairingCode)
    const saltBuffer = new Uint8Array(salt instanceof Uint8Array ? salt : new Uint8Array(salt))

    // Import the pairing code as key material
    const keyMaterial = await crypto.subtle.importKey('raw', pairingCodeBuffer, {
        name: 'PBKDF2'
    }, false, [
        'deriveBits'
    ])

    const derivedBits = await crypto.subtle.deriveBits({
        name: 'PBKDF2',
        salt: saltBuffer,
        iterations: 2 << 16,
        hash: 'SHA-256'
    }, keyMaterial, 32 * 8)

    return Buffer.from(derivedBits)
}

module.exports = {
    generateSignalPubKey,
    Curve,
    signedKeyPair,
    aesEncryptGCM,
    aesDecryptGCM,
    aesEncryptCTR,
    aesDecryptCTR,
    aesDecrypt,
    aesDecryptWithIV,
    aesEncrypt,
    aesEncrypWithIV,
    hmacSign,
    sha256,
    md5,
    hkdf,
    derivePairingCodeKey
}