"use strict"

Object.defineProperty(exports, "__esModule", {
    value: true
})

const pino = require("pino")

exports.default = pino({
    timestamp: () => `,"time":"${new Date().toJSON()}"`
})