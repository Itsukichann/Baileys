"use strict"

const fs = require('fs')
const path = require('path')

const NAMESPACES = fs.readdirSync(__dirname)
  .filter(name => {
    const full = path.join(__dirname, name)
    return fs.statSync(full).isDirectory() &&
      fs.existsSync(path.join(full, `${name}.js`))
  })


const _nsCache = new Map()
const _keyCache = new Map()

function loadNamespace(ns) {
  if (_nsCache.has(ns)) return _nsCache.get(ns)
  const mod = require(`./${ns}/${ns}`)
  const obj = mod[ns] || {}
  _nsCache.set(ns, obj)
  return obj
}

function findKey(key) {
  if (_keyCache.has(key)) return _keyCache.get(key)
  for (const ns of NAMESPACES) {
    const obj = loadNamespace(ns)
    if (key in obj) {
      _keyCache.set(key, obj[key])
      return obj[key]
    }
  }
  return undefined
}

const proto = new Proxy({}, {
  get(_, key) {
    if (typeof key !== 'string') return undefined
    return findKey(key)
  },
  has(_, key) {
    return findKey(key) !== undefined
  },
  ownKeys() {
    const keys = []
    for (const ns of NAMESPACES) {
      const obj = loadNamespace(ns)
      keys.push(...Object.keys(obj))
    }
    return [...new Set(keys)]
  },
  getOwnPropertyDescriptor(_, key) {
    const val = findKey(key)
    if (val !== undefined) {
      return { value: val, writable: true, enumerable: true, configurable: true }
    }
    return undefined
  }
})

module.exports = { proto }