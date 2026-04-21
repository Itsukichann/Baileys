/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Protocol = (function() {

    /**
     * Namespace Protocol.
     * @exports Protocol
     * @namespace
     */
    var Protocol = {};

    Protocol.LimitSharing = (function() {

        /**
         * Properties of a LimitSharing.
         * @memberof Protocol
         * @interface ILimitSharing
         * @property {boolean|null} [sharingLimited] LimitSharing sharingLimited
         * @property {Protocol.LimitSharing.TriggerType|null} [trigger] LimitSharing trigger
         * @property {number|Long|null} [limitSharingSettingTimestamp] LimitSharing limitSharingSettingTimestamp
         * @property {boolean|null} [initiatedByMe] LimitSharing initiatedByMe
         */

        /**
         * Constructs a new LimitSharing.
         * @memberof Protocol
         * @classdesc Represents a LimitSharing.
         * @implements ILimitSharing
         * @constructor
         * @param {Protocol.ILimitSharing=} [properties] Properties to set
         */
        function LimitSharing(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LimitSharing sharingLimited.
         * @member {boolean|null|undefined} sharingLimited
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.sharingLimited = null;

        /**
         * LimitSharing trigger.
         * @member {Protocol.LimitSharing.TriggerType|null|undefined} trigger
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.trigger = null;

        /**
         * LimitSharing limitSharingSettingTimestamp.
         * @member {number|Long|null|undefined} limitSharingSettingTimestamp
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.limitSharingSettingTimestamp = null;

        /**
         * LimitSharing initiatedByMe.
         * @member {boolean|null|undefined} initiatedByMe
         * @memberof Protocol.LimitSharing
         * @instance
         */
        LimitSharing.prototype.initiatedByMe = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_sharingLimited", {
            get: $util.oneOfGetter($oneOfFields = ["sharingLimited"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_trigger", {
            get: $util.oneOfGetter($oneOfFields = ["trigger"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_limitSharingSettingTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["limitSharingSettingTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LimitSharing.prototype, "_initiatedByMe", {
            get: $util.oneOfGetter($oneOfFields = ["initiatedByMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LimitSharing instance using the specified properties.
         * @function create
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.ILimitSharing=} [properties] Properties to set
         * @returns {Protocol.LimitSharing} LimitSharing instance
         */
        LimitSharing.create = function create(properties) {
            return new LimitSharing(properties);
        };

        /**
         * Encodes the specified LimitSharing message. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @function encode
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.ILimitSharing} message LimitSharing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimitSharing.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.sharingLimited != null && Object.hasOwnProperty.call(message, "sharingLimited"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.sharingLimited);
            if (message.trigger != null && Object.hasOwnProperty.call(message, "trigger"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.trigger);
            if (message.limitSharingSettingTimestamp != null && Object.hasOwnProperty.call(message, "limitSharingSettingTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.limitSharingSettingTimestamp);
            if (message.initiatedByMe != null && Object.hasOwnProperty.call(message, "initiatedByMe"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.initiatedByMe);
            return writer;
        };

        /**
         * Encodes the specified LimitSharing message, length delimited. Does not implicitly {@link Protocol.LimitSharing.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.ILimitSharing} message LimitSharing message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LimitSharing.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LimitSharing message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.LimitSharing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.LimitSharing} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimitSharing.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.LimitSharing();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.sharingLimited = reader.bool();
                        break;
                    }
                case 2: {
                        message.trigger = reader.int32();
                        break;
                    }
                case 3: {
                        message.limitSharingSettingTimestamp = reader.int64();
                        break;
                    }
                case 4: {
                        message.initiatedByMe = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LimitSharing message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.LimitSharing
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.LimitSharing} LimitSharing
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LimitSharing.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LimitSharing message.
         * @function verify
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LimitSharing.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.sharingLimited != null && message.hasOwnProperty("sharingLimited")) {
                properties._sharingLimited = 1;
                if (typeof message.sharingLimited !== "boolean")
                    return "sharingLimited: boolean expected";
            }
            if (message.trigger != null && message.hasOwnProperty("trigger")) {
                properties._trigger = 1;
                switch (message.trigger) {
                default:
                    return "trigger: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            }
            if (message.limitSharingSettingTimestamp != null && message.hasOwnProperty("limitSharingSettingTimestamp")) {
                properties._limitSharingSettingTimestamp = 1;
                if (!$util.isInteger(message.limitSharingSettingTimestamp) && !(message.limitSharingSettingTimestamp && $util.isInteger(message.limitSharingSettingTimestamp.low) && $util.isInteger(message.limitSharingSettingTimestamp.high)))
                    return "limitSharingSettingTimestamp: integer|Long expected";
            }
            if (message.initiatedByMe != null && message.hasOwnProperty("initiatedByMe")) {
                properties._initiatedByMe = 1;
                if (typeof message.initiatedByMe !== "boolean")
                    return "initiatedByMe: boolean expected";
            }
            return null;
        };

        /**
         * Creates a LimitSharing message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.LimitSharing} LimitSharing
         */
        LimitSharing.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.LimitSharing)
                return object;
            var message = new $root.Protocol.LimitSharing();
            if (object.sharingLimited != null)
                message.sharingLimited = Boolean(object.sharingLimited);
            switch (object.trigger) {
            default:
                if (typeof object.trigger === "number") {
                    message.trigger = object.trigger;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.trigger = 0;
                break;
            case "CHAT_SETTING":
            case 1:
                message.trigger = 1;
                break;
            case "BIZ_SUPPORTS_FB_HOSTING":
            case 2:
                message.trigger = 2;
                break;
            case "UNKNOWN_GROUP":
            case 3:
                message.trigger = 3;
                break;
            }
            if (object.limitSharingSettingTimestamp != null)
                if ($util.Long)
                    (message.limitSharingSettingTimestamp = $util.Long.fromValue(object.limitSharingSettingTimestamp)).unsigned = false;
                else if (typeof object.limitSharingSettingTimestamp === "string")
                    message.limitSharingSettingTimestamp = parseInt(object.limitSharingSettingTimestamp, 10);
                else if (typeof object.limitSharingSettingTimestamp === "number")
                    message.limitSharingSettingTimestamp = object.limitSharingSettingTimestamp;
                else if (typeof object.limitSharingSettingTimestamp === "object")
                    message.limitSharingSettingTimestamp = new $util.LongBits(object.limitSharingSettingTimestamp.low >>> 0, object.limitSharingSettingTimestamp.high >>> 0).toNumber();
            if (object.initiatedByMe != null)
                message.initiatedByMe = Boolean(object.initiatedByMe);
            return message;
        };

        /**
         * Creates a plain object from a LimitSharing message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.LimitSharing
         * @static
         * @param {Protocol.LimitSharing} message LimitSharing
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LimitSharing.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.sharingLimited != null && message.hasOwnProperty("sharingLimited")) {
                object.sharingLimited = message.sharingLimited;
                if (options.oneofs)
                    object._sharingLimited = "sharingLimited";
            }
            if (message.trigger != null && message.hasOwnProperty("trigger")) {
                object.trigger = options.enums === String ? $root.Protocol.LimitSharing.TriggerType[message.trigger] === undefined ? message.trigger : $root.Protocol.LimitSharing.TriggerType[message.trigger] : message.trigger;
                if (options.oneofs)
                    object._trigger = "trigger";
            }
            if (message.limitSharingSettingTimestamp != null && message.hasOwnProperty("limitSharingSettingTimestamp")) {
                if (typeof message.limitSharingSettingTimestamp === "number")
                    object.limitSharingSettingTimestamp = options.longs === String ? String(message.limitSharingSettingTimestamp) : message.limitSharingSettingTimestamp;
                else
                    object.limitSharingSettingTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.limitSharingSettingTimestamp) : options.longs === Number ? new $util.LongBits(message.limitSharingSettingTimestamp.low >>> 0, message.limitSharingSettingTimestamp.high >>> 0).toNumber() : message.limitSharingSettingTimestamp;
                if (options.oneofs)
                    object._limitSharingSettingTimestamp = "limitSharingSettingTimestamp";
            }
            if (message.initiatedByMe != null && message.hasOwnProperty("initiatedByMe")) {
                object.initiatedByMe = message.initiatedByMe;
                if (options.oneofs)
                    object._initiatedByMe = "initiatedByMe";
            }
            return object;
        };

        /**
         * Converts this LimitSharing to JSON.
         * @function toJSON
         * @memberof Protocol.LimitSharing
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LimitSharing.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LimitSharing
         * @function getTypeUrl
         * @memberof Protocol.LimitSharing
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LimitSharing.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Protocol.LimitSharing";
        };

        /**
         * TriggerType enum.
         * @name Protocol.LimitSharing.TriggerType
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} CHAT_SETTING=1 CHAT_SETTING value
         * @property {number} BIZ_SUPPORTS_FB_HOSTING=2 BIZ_SUPPORTS_FB_HOSTING value
         * @property {number} UNKNOWN_GROUP=3 UNKNOWN_GROUP value
         */
        LimitSharing.TriggerType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "CHAT_SETTING"] = 1;
            values[valuesById[2] = "BIZ_SUPPORTS_FB_HOSTING"] = 2;
            values[valuesById[3] = "UNKNOWN_GROUP"] = 3;
            return values;
        })();

        return LimitSharing;
    })();

    Protocol.MessageKey = (function() {

        /**
         * Properties of a MessageKey.
         * @memberof Protocol
         * @interface IMessageKey
         * @property {string|null} [remoteJid] MessageKey remoteJid
         * @property {boolean|null} [fromMe] MessageKey fromMe
         * @property {string|null} [id] MessageKey id
         * @property {string|null} [participant] MessageKey participant
         */

        /**
         * Constructs a new MessageKey.
         * @memberof Protocol
         * @classdesc Represents a MessageKey.
         * @implements IMessageKey
         * @constructor
         * @param {Protocol.IMessageKey=} [properties] Properties to set
         */
        function MessageKey(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MessageKey remoteJid.
         * @member {string|null|undefined} remoteJid
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.remoteJid = null;

        /**
         * MessageKey fromMe.
         * @member {boolean|null|undefined} fromMe
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.fromMe = null;

        /**
         * MessageKey id.
         * @member {string|null|undefined} id
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.id = null;

        /**
         * MessageKey participant.
         * @member {string|null|undefined} participant
         * @memberof Protocol.MessageKey
         * @instance
         */
        MessageKey.prototype.participant = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_remoteJid", {
            get: $util.oneOfGetter($oneOfFields = ["remoteJid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_fromMe", {
            get: $util.oneOfGetter($oneOfFields = ["fromMe"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MessageKey.prototype, "_participant", {
            get: $util.oneOfGetter($oneOfFields = ["participant"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MessageKey instance using the specified properties.
         * @function create
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey=} [properties] Properties to set
         * @returns {Protocol.MessageKey} MessageKey instance
         */
        MessageKey.create = function create(properties) {
            return new MessageKey(properties);
        };

        /**
         * Encodes the specified MessageKey message. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encode
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.remoteJid != null && Object.hasOwnProperty.call(message, "remoteJid"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.remoteJid);
            if (message.fromMe != null && Object.hasOwnProperty.call(message, "fromMe"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.fromMe);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.id);
            if (message.participant != null && Object.hasOwnProperty.call(message, "participant"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.participant);
            return writer;
        };

        /**
         * Encodes the specified MessageKey message, length delimited. Does not implicitly {@link Protocol.MessageKey.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.IMessageKey} message MessageKey message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MessageKey.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer.
         * @function decode
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Protocol.MessageKey} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Protocol.MessageKey();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.remoteJid = reader.string();
                        break;
                    }
                case 2: {
                        message.fromMe = reader.bool();
                        break;
                    }
                case 3: {
                        message.id = reader.string();
                        break;
                    }
                case 4: {
                        message.participant = reader.string();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a MessageKey message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Protocol.MessageKey
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Protocol.MessageKey} MessageKey
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MessageKey.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MessageKey message.
         * @function verify
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MessageKey.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.remoteJid != null && message.hasOwnProperty("remoteJid")) {
                properties._remoteJid = 1;
                if (!$util.isString(message.remoteJid))
                    return "remoteJid: string expected";
            }
            if (message.fromMe != null && message.hasOwnProperty("fromMe")) {
                properties._fromMe = 1;
                if (typeof message.fromMe !== "boolean")
                    return "fromMe: boolean expected";
            }
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isString(message.id))
                    return "id: string expected";
            }
            if (message.participant != null && message.hasOwnProperty("participant")) {
                properties._participant = 1;
                if (!$util.isString(message.participant))
                    return "participant: string expected";
            }
            return null;
        };

        /**
         * Creates a MessageKey message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Protocol.MessageKey} MessageKey
         */
        MessageKey.fromObject = function fromObject(object) {
            if (object instanceof $root.Protocol.MessageKey)
                return object;
            var message = new $root.Protocol.MessageKey();
            if (object.remoteJid != null)
                message.remoteJid = String(object.remoteJid);
            if (object.fromMe != null)
                message.fromMe = Boolean(object.fromMe);
            if (object.id != null)
                message.id = String(object.id);
            if (object.participant != null)
                message.participant = String(object.participant);
            return message;
        };

        /**
         * Creates a plain object from a MessageKey message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Protocol.MessageKey
         * @static
         * @param {Protocol.MessageKey} message MessageKey
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MessageKey.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.remoteJid != null && message.hasOwnProperty("remoteJid")) {
                object.remoteJid = message.remoteJid;
                if (options.oneofs)
                    object._remoteJid = "remoteJid";
            }
            if (message.fromMe != null && message.hasOwnProperty("fromMe")) {
                object.fromMe = message.fromMe;
                if (options.oneofs)
                    object._fromMe = "fromMe";
            }
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.participant != null && message.hasOwnProperty("participant")) {
                object.participant = message.participant;
                if (options.oneofs)
                    object._participant = "participant";
            }
            return object;
        };

        /**
         * Converts this MessageKey to JSON.
         * @function toJSON
         * @memberof Protocol.MessageKey
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MessageKey.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MessageKey
         * @function getTypeUrl
         * @memberof Protocol.MessageKey
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MessageKey.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Protocol.MessageKey";
        };

        return MessageKey;
    })();

    return Protocol;
})();

module.exports = $root;
