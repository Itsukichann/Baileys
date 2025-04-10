"use strict"

var __createBinding = (this && this.__createBinding) || (Object.create ? function(o, m, k, k2) {
  if (k2 === undefined) k2 = k
  var desc = Object.getOwnPropertyDescriptor(m, k)
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
    desc = { enumerable: true, get: function() { return m[k] } }
  }
  Object.defineProperty(o, k2, desc)
} : function(o, m, k, k2) {
  if (k2 === undefined) k2 = k
  o[k2] = m[k]
})

var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v })
} : function(o, v) {
  o["default"] = v
})

var __importStar = (this && this.__importStar) || function(mod) {
  if (mod && mod.__esModule) return mod
  var result = {}
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k)
  __setModuleDefault(result, mod)
  return result
}

Object.defineProperty(exports, "__esModule", { value: true })

const crypto_1 = require("crypto")
const libsignal = __importStar(require("@itsukichan/libsignal-node"))
const Defaults_1 = require("../Defaults")

const generateSignalPubKey = (pubKey) => (
  pubKey.length === 33 ? pubKey : Buffer.concat([Defaults_1.KEY_BUNDLE_TYPE, pubKey])
)

const Curve = {
  generateKeyPair: () => {
    const { pubKey, privKey } = libsignal.curve.generateKeyPair()
    return {
      private: Buffer.from(privKey),
      public: Buffer.from(pubKey.slice(1))
    }
  },
  sharedKey: (privateKey, publicKey) => {
    const shared = libsignal.curve.calculateAgreement(generateSignalPubKey(publicKey), privateKey)
    return Buffer.from(shared)
  },
  sign: (privateKey, buf) => libsignal.curve.calculateSignature(privateKey, buf),
  verify: (pubKey, message, signature) => {
    try {
      libsignal.curve.verifySignature(generateSignalPubKey(pubKey), message, signature)
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
  return { keyPair: preKey, signature, keyId }
}

const GCM_TAG_LENGTH = 128 >> 3

function aesEncryptGCM(plaintext, key, iv, additionalData) {
  const cipher = crypto_1.createCipheriv('aes-256-gcm', key, iv)
  cipher.setAAD(additionalData)
  return Buffer.concat([cipher.update(plaintext), cipher.final(), cipher.getAuthTag()])
}

function aesDecryptGCM(ciphertext, key, iv, additionalData) {
  const decipher = crypto_1.createDecipheriv('aes-256-gcm', key, iv)
  const enc = ciphertext.slice(0, ciphertext.length - GCM_TAG_LENGTH)
  const tag = ciphertext.slice(ciphertext.length - GCM_TAG_LENGTH)
  decipher.setAAD(additionalData)
  decipher.setAuthTag(tag)
  return Buffer.concat([decipher.update(enc), decipher.final()])
}

function aesEncryptCTR(plaintext, key, iv) {
  const cipher = crypto_1.createCipheriv('aes-256-ctr', key, iv)
  return Buffer.concat([cipher.update(plaintext), cipher.final()])
}

function aesDecryptCTR(ciphertext, key, iv) {
  const decipher = crypto_1.createDecipheriv('aes-256-ctr', key, iv)
  return Buffer.concat([decipher.update(ciphertext), decipher.final()])
}

function aesDecrypt(buffer, key) {
  return aesDecryptWithIV(buffer.slice(16), key, buffer.slice(0, 16))
}

function aesDecryptWithIV(buffer, key, IV) {
  const aes = crypto_1.createDecipheriv('aes-256-cbc', key, IV)
  return Buffer.concat([aes.update(buffer), aes.final()])
}

function aesEncrypt(buffer, key) {
  const IV = crypto_1.randomBytes(16)
  const aes = crypto_1.createCipheriv('aes-256-cbc', key, IV)
  return Buffer.concat([IV, aes.update(buffer), aes.final()])
}

function aesEncrypWithIV(buffer, key, IV) {
  const aes = crypto_1.createCipheriv('aes-256-cbc', key, IV)
  return Buffer.concat([aes.update(buffer), aes.final()])
}

function hmacSign(buffer, key, variant = 'sha256') {
  return crypto_1.createHmac(variant, key).update(buffer).digest()
}

function sha256(buffer) {
  return crypto_1.createHash('sha256').update(buffer).digest()
}

function md5(buffer) {
  return crypto_1.createHash('md5').update(buffer).digest()
}

async function hkdf(buffer, expandedLength, info) {
  const inputKeyMaterial = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer)
  const salt = info.salt ? new Uint8Array(info.salt) : new Uint8Array(0)
  const infoBytes = info.info ? new TextEncoder().encode(info.info) : new Uint8Array(0)

  const importedKey = await crypto.subtle.importKey('raw', inputKeyMaterial, { name: 'HKDF' }, false, ['deriveBits'])

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
  const saltBuffer = salt instanceof Uint8Array ? salt : new Uint8Array(salt)

  const keyMaterial = await crypto.subtle.importKey('raw', pairingCodeBuffer, { name: 'PBKDF2' }, false, ['deriveBits'])

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