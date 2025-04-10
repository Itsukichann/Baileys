"use strict"

Object.defineProperty(exports, "__esModule", { value: true })

const WABinary_1 = require("../../WABinary")

class USyncLIDProtocol {
	constructor() {
		this.name = 'lid'
	}
	getQueryElement() {
		return {
			tag: 'lid', 
			attrs: {}
		}
	}
	getUserElement() {
		return null
	}
	parser(node) {
		if (node.tag === 'lid') {
			return node.attrs.val
		}		
		return null
	}
}

module.exports = {
 USyncLIDProtocol
}