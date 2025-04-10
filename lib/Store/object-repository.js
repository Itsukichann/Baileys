"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

class ObjectRepository {
    constructor(entities = {}) {
        this.entityMap = new Map(Object.entries(entities))
    }
    findById(id) {
        return this.entityMap.get(id)
    }
    findAll() {
        return Array.from(this.entityMap.values())
    }
    upsertById(id, entity) {
        return this.entityMap.set(id, { ...entity })
    }
    deleteById(id) {
        return this.entityMap.delete(id)
    }
    count() {
        return this.entityMap.size
    }
    toJSON() {
        return this.findAll()
    }
}

module.exports = {
  ObjectRepository
}