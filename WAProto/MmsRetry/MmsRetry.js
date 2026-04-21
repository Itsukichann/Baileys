/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MmsRetry = (function() {

    /**
     * Namespace MmsRetry.
     * @exports MmsRetry
     * @namespace
     */
    var MmsRetry = {};

    MmsRetry.ServerErrorReceipt = (function() {

        /**
         * Properties of a ServerErrorReceipt.
         * @memberof MmsRetry
         * @interface IServerErrorReceipt
         * @property {string|null} [stanzaId] ServerErrorReceipt stanzaId
         */

        /**
         * Constructs a new ServerErrorReceipt.
         * @memberof MmsRetry
         * @classdesc Represents a ServerErrorReceipt.
         * @implements IServerErrorReceipt
         * @constructor
         * @param {MmsRetry.IServerErrorReceipt=} [properties] Properties to set
         */
        function ServerErrorReceipt(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerErrorReceipt stanzaId.
         * @member {string|null|undefined} stanzaId
         * @memberof MmsRetry.ServerErrorReceipt
         * @instance
         */
        ServerErrorReceipt.prototype.stanzaId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ServerErrorReceipt.prototype, "_stanzaId", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ServerErrorReceipt instance using the specified properties.
         * @function create
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.IServerErrorReceipt=} [properties] Properties to set
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt instance
         */
        ServerErrorReceipt.create = function create(properties) {
            return new ServerErrorReceipt(properties);
        };

        /**
         * Encodes the specified ServerErrorReceipt message. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @function encode
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.IServerErrorReceipt} message ServerErrorReceipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerErrorReceipt.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stanzaId != null && Object.hasOwnProperty.call(message, "stanzaId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stanzaId);
            return writer;
        };

        /**
         * Encodes the specified ServerErrorReceipt message, length delimited. Does not implicitly {@link MmsRetry.ServerErrorReceipt.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.IServerErrorReceipt} message ServerErrorReceipt message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerErrorReceipt.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerErrorReceipt message from the specified reader or buffer.
         * @function decode
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerErrorReceipt.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmsRetry.ServerErrorReceipt();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stanzaId = reader.string();
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
         * Decodes a ServerErrorReceipt message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerErrorReceipt.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerErrorReceipt message.
         * @function verify
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerErrorReceipt.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                properties._stanzaId = 1;
                if (!$util.isString(message.stanzaId))
                    return "stanzaId: string expected";
            }
            return null;
        };

        /**
         * Creates a ServerErrorReceipt message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmsRetry.ServerErrorReceipt} ServerErrorReceipt
         */
        ServerErrorReceipt.fromObject = function fromObject(object) {
            if (object instanceof $root.MmsRetry.ServerErrorReceipt)
                return object;
            var message = new $root.MmsRetry.ServerErrorReceipt();
            if (object.stanzaId != null)
                message.stanzaId = String(object.stanzaId);
            return message;
        };

        /**
         * Creates a plain object from a ServerErrorReceipt message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {MmsRetry.ServerErrorReceipt} message ServerErrorReceipt
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerErrorReceipt.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                object.stanzaId = message.stanzaId;
                if (options.oneofs)
                    object._stanzaId = "stanzaId";
            }
            return object;
        };

        /**
         * Converts this ServerErrorReceipt to JSON.
         * @function toJSON
         * @memberof MmsRetry.ServerErrorReceipt
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerErrorReceipt.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ServerErrorReceipt
         * @function getTypeUrl
         * @memberof MmsRetry.ServerErrorReceipt
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ServerErrorReceipt.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MmsRetry.ServerErrorReceipt";
        };

        return ServerErrorReceipt;
    })();

    MmsRetry.MediaRetryNotification = (function() {

        /**
         * Properties of a MediaRetryNotification.
         * @memberof MmsRetry
         * @interface IMediaRetryNotification
         * @property {string|null} [stanzaId] MediaRetryNotification stanzaId
         * @property {string|null} [directPath] MediaRetryNotification directPath
         * @property {MmsRetry.MediaRetryNotification.ResultType|null} [result] MediaRetryNotification result
         * @property {Uint8Array|null} [messageSecret] MediaRetryNotification messageSecret
         */

        /**
         * Constructs a new MediaRetryNotification.
         * @memberof MmsRetry
         * @classdesc Represents a MediaRetryNotification.
         * @implements IMediaRetryNotification
         * @constructor
         * @param {MmsRetry.IMediaRetryNotification=} [properties] Properties to set
         */
        function MediaRetryNotification(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MediaRetryNotification stanzaId.
         * @member {string|null|undefined} stanzaId
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.stanzaId = null;

        /**
         * MediaRetryNotification directPath.
         * @member {string|null|undefined} directPath
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.directPath = null;

        /**
         * MediaRetryNotification result.
         * @member {MmsRetry.MediaRetryNotification.ResultType|null|undefined} result
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.result = null;

        /**
         * MediaRetryNotification messageSecret.
         * @member {Uint8Array|null|undefined} messageSecret
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         */
        MediaRetryNotification.prototype.messageSecret = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_stanzaId", {
            get: $util.oneOfGetter($oneOfFields = ["stanzaId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_result", {
            get: $util.oneOfGetter($oneOfFields = ["result"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(MediaRetryNotification.prototype, "_messageSecret", {
            get: $util.oneOfGetter($oneOfFields = ["messageSecret"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new MediaRetryNotification instance using the specified properties.
         * @function create
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.IMediaRetryNotification=} [properties] Properties to set
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification instance
         */
        MediaRetryNotification.create = function create(properties) {
            return new MediaRetryNotification(properties);
        };

        /**
         * Encodes the specified MediaRetryNotification message. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @function encode
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.IMediaRetryNotification} message MediaRetryNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaRetryNotification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.stanzaId != null && Object.hasOwnProperty.call(message, "stanzaId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.stanzaId);
            if (message.directPath != null && Object.hasOwnProperty.call(message, "directPath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.directPath);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.result);
            if (message.messageSecret != null && Object.hasOwnProperty.call(message, "messageSecret"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.messageSecret);
            return writer;
        };

        /**
         * Encodes the specified MediaRetryNotification message, length delimited. Does not implicitly {@link MmsRetry.MediaRetryNotification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.IMediaRetryNotification} message MediaRetryNotification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MediaRetryNotification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a MediaRetryNotification message from the specified reader or buffer.
         * @function decode
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaRetryNotification.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MmsRetry.MediaRetryNotification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.stanzaId = reader.string();
                        break;
                    }
                case 2: {
                        message.directPath = reader.string();
                        break;
                    }
                case 3: {
                        message.result = reader.int32();
                        break;
                    }
                case 4: {
                        message.messageSecret = reader.bytes();
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
         * Decodes a MediaRetryNotification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MediaRetryNotification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a MediaRetryNotification message.
         * @function verify
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        MediaRetryNotification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                properties._stanzaId = 1;
                if (!$util.isString(message.stanzaId))
                    return "stanzaId: string expected";
            }
            if (message.directPath != null && message.hasOwnProperty("directPath")) {
                properties._directPath = 1;
                if (!$util.isString(message.directPath))
                    return "directPath: string expected";
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                properties._result = 1;
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            }
            if (message.messageSecret != null && message.hasOwnProperty("messageSecret")) {
                properties._messageSecret = 1;
                if (!(message.messageSecret && typeof message.messageSecret.length === "number" || $util.isString(message.messageSecret)))
                    return "messageSecret: buffer expected";
            }
            return null;
        };

        /**
         * Creates a MediaRetryNotification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MmsRetry.MediaRetryNotification} MediaRetryNotification
         */
        MediaRetryNotification.fromObject = function fromObject(object) {
            if (object instanceof $root.MmsRetry.MediaRetryNotification)
                return object;
            var message = new $root.MmsRetry.MediaRetryNotification();
            if (object.stanzaId != null)
                message.stanzaId = String(object.stanzaId);
            if (object.directPath != null)
                message.directPath = String(object.directPath);
            switch (object.result) {
            default:
                if (typeof object.result === "number") {
                    message.result = object.result;
                    break;
                }
                break;
            case "GENERAL_ERROR":
            case 0:
                message.result = 0;
                break;
            case "SUCCESS":
            case 1:
                message.result = 1;
                break;
            case "NOT_FOUND":
            case 2:
                message.result = 2;
                break;
            case "DECRYPTION_ERROR":
            case 3:
                message.result = 3;
                break;
            }
            if (object.messageSecret != null)
                if (typeof object.messageSecret === "string")
                    $util.base64.decode(object.messageSecret, message.messageSecret = $util.newBuffer($util.base64.length(object.messageSecret)), 0);
                else if (object.messageSecret.length >= 0)
                    message.messageSecret = object.messageSecret;
            return message;
        };

        /**
         * Creates a plain object from a MediaRetryNotification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {MmsRetry.MediaRetryNotification} message MediaRetryNotification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        MediaRetryNotification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.stanzaId != null && message.hasOwnProperty("stanzaId")) {
                object.stanzaId = message.stanzaId;
                if (options.oneofs)
                    object._stanzaId = "stanzaId";
            }
            if (message.directPath != null && message.hasOwnProperty("directPath")) {
                object.directPath = message.directPath;
                if (options.oneofs)
                    object._directPath = "directPath";
            }
            if (message.result != null && message.hasOwnProperty("result")) {
                object.result = options.enums === String ? $root.MmsRetry.MediaRetryNotification.ResultType[message.result] === undefined ? message.result : $root.MmsRetry.MediaRetryNotification.ResultType[message.result] : message.result;
                if (options.oneofs)
                    object._result = "result";
            }
            if (message.messageSecret != null && message.hasOwnProperty("messageSecret")) {
                object.messageSecret = options.bytes === String ? $util.base64.encode(message.messageSecret, 0, message.messageSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.messageSecret) : message.messageSecret;
                if (options.oneofs)
                    object._messageSecret = "messageSecret";
            }
            return object;
        };

        /**
         * Converts this MediaRetryNotification to JSON.
         * @function toJSON
         * @memberof MmsRetry.MediaRetryNotification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        MediaRetryNotification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for MediaRetryNotification
         * @function getTypeUrl
         * @memberof MmsRetry.MediaRetryNotification
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MediaRetryNotification.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MmsRetry.MediaRetryNotification";
        };

        /**
         * ResultType enum.
         * @name MmsRetry.MediaRetryNotification.ResultType
         * @enum {number}
         * @property {number} GENERAL_ERROR=0 GENERAL_ERROR value
         * @property {number} SUCCESS=1 SUCCESS value
         * @property {number} NOT_FOUND=2 NOT_FOUND value
         * @property {number} DECRYPTION_ERROR=3 DECRYPTION_ERROR value
         */
        MediaRetryNotification.ResultType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GENERAL_ERROR"] = 0;
            values[valuesById[1] = "SUCCESS"] = 1;
            values[valuesById[2] = "NOT_FOUND"] = 2;
            values[valuesById[3] = "DECRYPTION_ERROR"] = 3;
            return values;
        })();

        return MediaRetryNotification;
    })();

    return MmsRetry;
})();

module.exports = $root;
