"use strict"

const _cache = new Map()

async function loadModule(name) {
    if (_cache.has(name)) return _cache.get(name)

    let mod
    try {
        mod = require(name)
    } catch (e) {
        if (e.code === 'ERR_REQUIRE_ESM') {
            mod = await import(name)
        } else {
            throw e 
        }
    }

    _cache.set(name, mod)
    return mod
}

module.exports = {
  loadModule
}