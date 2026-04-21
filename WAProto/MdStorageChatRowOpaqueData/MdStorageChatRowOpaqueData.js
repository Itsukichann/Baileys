/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.MdStorageChatRowOpaqueData = (function() {

    /**
     * Namespace MdStorageChatRowOpaqueData.
     * @exports MdStorageChatRowOpaqueData
     * @namespace
     */
    var MdStorageChatRowOpaqueData = {};

    MdStorageChatRowOpaqueData.ChatRowOpaqueData = (function() {

        /**
         * Properties of a ChatRowOpaqueData.
         * @memberof MdStorageChatRowOpaqueData
         * @interface IChatRowOpaqueData
         * @property {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null} [draftMessage] ChatRowOpaqueData draftMessage
         */

        /**
         * Constructs a new ChatRowOpaqueData.
         * @memberof MdStorageChatRowOpaqueData
         * @classdesc Represents a ChatRowOpaqueData.
         * @implements IChatRowOpaqueData
         * @constructor
         * @param {MdStorageChatRowOpaqueData.IChatRowOpaqueData=} [properties] Properties to set
         */
        function ChatRowOpaqueData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChatRowOpaqueData draftMessage.
         * @member {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage|null|undefined} draftMessage
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @instance
         */
        ChatRowOpaqueData.prototype.draftMessage = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ChatRowOpaqueData.prototype, "_draftMessage", {
            get: $util.oneOfGetter($oneOfFields = ["draftMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ChatRowOpaqueData instance using the specified properties.
         * @function create
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {MdStorageChatRowOpaqueData.IChatRowOpaqueData=} [properties] Properties to set
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData} ChatRowOpaqueData instance
         */
        ChatRowOpaqueData.create = function create(properties) {
            return new ChatRowOpaqueData(properties);
        };

        /**
         * Encodes the specified ChatRowOpaqueData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @function encode
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {MdStorageChatRowOpaqueData.IChatRowOpaqueData} message ChatRowOpaqueData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRowOpaqueData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.draftMessage != null && Object.hasOwnProperty.call(message, "draftMessage"))
                $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.encode(message.draftMessage, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ChatRowOpaqueData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.verify|verify} messages.
         * @function encodeDelimited
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {MdStorageChatRowOpaqueData.IChatRowOpaqueData} message ChatRowOpaqueData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChatRowOpaqueData.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer.
         * @function decode
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData} ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRowOpaqueData.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.decode(reader, reader.uint32());
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
         * Decodes a ChatRowOpaqueData message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData} ChatRowOpaqueData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChatRowOpaqueData.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChatRowOpaqueData message.
         * @function verify
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChatRowOpaqueData.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.draftMessage != null && message.hasOwnProperty("draftMessage")) {
                properties._draftMessage = 1;
                {
                    var error = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify(message.draftMessage);
                    if (error)
                        return "draftMessage." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ChatRowOpaqueData message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData} ChatRowOpaqueData
         */
        ChatRowOpaqueData.fromObject = function fromObject(object) {
            if (object instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData)
                return object;
            var message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData();
            if (object.draftMessage != null) {
                if (typeof object.draftMessage !== "object")
                    throw TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.draftMessage: object expected");
                message.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.fromObject(object.draftMessage);
            }
            return message;
        };

        /**
         * Creates a plain object from a ChatRowOpaqueData message. Also converts values to other types if specified.
         * @function toObject
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData} message ChatRowOpaqueData
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChatRowOpaqueData.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.draftMessage != null && message.hasOwnProperty("draftMessage")) {
                object.draftMessage = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.toObject(message.draftMessage, options);
                if (options.oneofs)
                    object._draftMessage = "draftMessage";
            }
            return object;
        };

        /**
         * Converts this ChatRowOpaqueData to JSON.
         * @function toJSON
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChatRowOpaqueData.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ChatRowOpaqueData
         * @function getTypeUrl
         * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ChatRowOpaqueData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData";
        };

        ChatRowOpaqueData.DraftMessage = (function() {

            /**
             * Properties of a DraftMessage.
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
             * @interface IDraftMessage
             * @property {string|null} [text] DraftMessage text
             * @property {string|null} [omittedUrl] DraftMessage omittedUrl
             * @property {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null} [ctwaContextLinkData] DraftMessage ctwaContextLinkData
             * @property {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null} [ctwaContext] DraftMessage ctwaContext
             * @property {number|Long|null} [timestamp] DraftMessage timestamp
             */

            /**
             * Constructs a new DraftMessage.
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData
             * @classdesc Represents a DraftMessage.
             * @implements IDraftMessage
             * @constructor
             * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage=} [properties] Properties to set
             */
            function DraftMessage(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DraftMessage text.
             * @member {string|null|undefined} text
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             */
            DraftMessage.prototype.text = null;

            /**
             * DraftMessage omittedUrl.
             * @member {string|null|undefined} omittedUrl
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             */
            DraftMessage.prototype.omittedUrl = null;

            /**
             * DraftMessage ctwaContextLinkData.
             * @member {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData|null|undefined} ctwaContextLinkData
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             */
            DraftMessage.prototype.ctwaContextLinkData = null;

            /**
             * DraftMessage ctwaContext.
             * @member {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData|null|undefined} ctwaContext
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             */
            DraftMessage.prototype.ctwaContext = null;

            /**
             * DraftMessage timestamp.
             * @member {number|Long|null|undefined} timestamp
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             */
            DraftMessage.prototype.timestamp = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DraftMessage.prototype, "_text", {
                get: $util.oneOfGetter($oneOfFields = ["text"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DraftMessage.prototype, "_omittedUrl", {
                get: $util.oneOfGetter($oneOfFields = ["omittedUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DraftMessage.prototype, "_ctwaContextLinkData", {
                get: $util.oneOfGetter($oneOfFields = ["ctwaContextLinkData"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DraftMessage.prototype, "_ctwaContext", {
                get: $util.oneOfGetter($oneOfFields = ["ctwaContext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DraftMessage.prototype, "_timestamp", {
                get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new DraftMessage instance using the specified properties.
             * @function create
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage=} [properties] Properties to set
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage} DraftMessage instance
             */
            DraftMessage.create = function create(properties) {
                return new DraftMessage(properties);
            };

            /**
             * Encodes the specified DraftMessage message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @function encode
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage} message DraftMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DraftMessage.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
                if (message.omittedUrl != null && Object.hasOwnProperty.call(message, "omittedUrl"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.omittedUrl);
                if (message.ctwaContextLinkData != null && Object.hasOwnProperty.call(message, "ctwaContextLinkData"))
                    $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.encode(message.ctwaContextLinkData, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.ctwaContext != null && Object.hasOwnProperty.call(message, "ctwaContext"))
                    $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.encode(message.ctwaContext, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                    writer.uint32(/* id 5, wireType 0 =*/40).int64(message.timestamp);
                return writer;
            };

            /**
             * Encodes the specified DraftMessage message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.verify|verify} messages.
             * @function encodeDelimited
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.IDraftMessage} message DraftMessage message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DraftMessage.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DraftMessage message from the specified reader or buffer.
             * @function decode
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage} DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DraftMessage.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.text = reader.string();
                            break;
                        }
                    case 2: {
                            message.omittedUrl = reader.string();
                            break;
                        }
                    case 3: {
                            message.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.decode(reader, reader.uint32());
                            break;
                        }
                    case 5: {
                            message.timestamp = reader.int64();
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
             * Decodes a DraftMessage message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage} DraftMessage
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DraftMessage.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DraftMessage message.
             * @function verify
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DraftMessage.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.text != null && message.hasOwnProperty("text")) {
                    properties._text = 1;
                    if (!$util.isString(message.text))
                        return "text: string expected";
                }
                if (message.omittedUrl != null && message.hasOwnProperty("omittedUrl")) {
                    properties._omittedUrl = 1;
                    if (!$util.isString(message.omittedUrl))
                        return "omittedUrl: string expected";
                }
                if (message.ctwaContextLinkData != null && message.hasOwnProperty("ctwaContextLinkData")) {
                    properties._ctwaContextLinkData = 1;
                    {
                        var error = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify(message.ctwaContextLinkData);
                        if (error)
                            return "ctwaContextLinkData." + error;
                    }
                }
                if (message.ctwaContext != null && message.hasOwnProperty("ctwaContext")) {
                    properties._ctwaContext = 1;
                    {
                        var error = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify(message.ctwaContext);
                        if (error)
                            return "ctwaContext." + error;
                    }
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    properties._timestamp = 1;
                    if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                        return "timestamp: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a DraftMessage message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage} DraftMessage
             */
            DraftMessage.fromObject = function fromObject(object) {
                if (object instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage)
                    return object;
                var message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage();
                if (object.text != null)
                    message.text = String(object.text);
                if (object.omittedUrl != null)
                    message.omittedUrl = String(object.omittedUrl);
                if (object.ctwaContextLinkData != null) {
                    if (typeof object.ctwaContextLinkData !== "object")
                        throw TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ctwaContextLinkData: object expected");
                    message.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.fromObject(object.ctwaContextLinkData);
                }
                if (object.ctwaContext != null) {
                    if (typeof object.ctwaContext !== "object")
                        throw TypeError(".MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ctwaContext: object expected");
                    message.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.fromObject(object.ctwaContext);
                }
                if (object.timestamp != null)
                    if ($util.Long)
                        (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                    else if (typeof object.timestamp === "string")
                        message.timestamp = parseInt(object.timestamp, 10);
                    else if (typeof object.timestamp === "number")
                        message.timestamp = object.timestamp;
                    else if (typeof object.timestamp === "object")
                        message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
                return message;
            };

            /**
             * Creates a plain object from a DraftMessage message. Also converts values to other types if specified.
             * @function toObject
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage} message DraftMessage
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DraftMessage.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.text != null && message.hasOwnProperty("text")) {
                    object.text = message.text;
                    if (options.oneofs)
                        object._text = "text";
                }
                if (message.omittedUrl != null && message.hasOwnProperty("omittedUrl")) {
                    object.omittedUrl = message.omittedUrl;
                    if (options.oneofs)
                        object._omittedUrl = "omittedUrl";
                }
                if (message.ctwaContextLinkData != null && message.hasOwnProperty("ctwaContextLinkData")) {
                    object.ctwaContextLinkData = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.toObject(message.ctwaContextLinkData, options);
                    if (options.oneofs)
                        object._ctwaContextLinkData = "ctwaContextLinkData";
                }
                if (message.ctwaContext != null && message.hasOwnProperty("ctwaContext")) {
                    object.ctwaContext = $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.toObject(message.ctwaContext, options);
                    if (options.oneofs)
                        object._ctwaContext = "ctwaContext";
                }
                if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                    if (typeof message.timestamp === "number")
                        object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                    else
                        object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                    if (options.oneofs)
                        object._timestamp = "timestamp";
                }
                return object;
            };

            /**
             * Converts this DraftMessage to JSON.
             * @function toJSON
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DraftMessage.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DraftMessage
             * @function getTypeUrl
             * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DraftMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage";
            };

            DraftMessage.CtwaContextData = (function() {

                /**
                 * Properties of a CtwaContextData.
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
                 * @interface ICtwaContextData
                 * @property {string|null} [conversionSource] CtwaContextData conversionSource
                 * @property {Uint8Array|null} [conversionData] CtwaContextData conversionData
                 * @property {string|null} [sourceUrl] CtwaContextData sourceUrl
                 * @property {string|null} [sourceId] CtwaContextData sourceId
                 * @property {string|null} [sourceType] CtwaContextData sourceType
                 * @property {string|null} [title] CtwaContextData title
                 * @property {string|null} [description] CtwaContextData description
                 * @property {string|null} [thumbnail] CtwaContextData thumbnail
                 * @property {string|null} [thumbnailUrl] CtwaContextData thumbnailUrl
                 * @property {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null} [mediaType] CtwaContextData mediaType
                 * @property {string|null} [mediaUrl] CtwaContextData mediaUrl
                 * @property {boolean|null} [isSuspiciousLink] CtwaContextData isSuspiciousLink
                 */

                /**
                 * Constructs a new CtwaContextData.
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
                 * @classdesc Represents a CtwaContextData.
                 * @implements ICtwaContextData
                 * @constructor
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData=} [properties] Properties to set
                 */
                function CtwaContextData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CtwaContextData conversionSource.
                 * @member {string|null|undefined} conversionSource
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.conversionSource = null;

                /**
                 * CtwaContextData conversionData.
                 * @member {Uint8Array|null|undefined} conversionData
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.conversionData = null;

                /**
                 * CtwaContextData sourceUrl.
                 * @member {string|null|undefined} sourceUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.sourceUrl = null;

                /**
                 * CtwaContextData sourceId.
                 * @member {string|null|undefined} sourceId
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.sourceId = null;

                /**
                 * CtwaContextData sourceType.
                 * @member {string|null|undefined} sourceType
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.sourceType = null;

                /**
                 * CtwaContextData title.
                 * @member {string|null|undefined} title
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.title = null;

                /**
                 * CtwaContextData description.
                 * @member {string|null|undefined} description
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.description = null;

                /**
                 * CtwaContextData thumbnail.
                 * @member {string|null|undefined} thumbnail
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.thumbnail = null;

                /**
                 * CtwaContextData thumbnailUrl.
                 * @member {string|null|undefined} thumbnailUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.thumbnailUrl = null;

                /**
                 * CtwaContextData mediaType.
                 * @member {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType|null|undefined} mediaType
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.mediaType = null;

                /**
                 * CtwaContextData mediaUrl.
                 * @member {string|null|undefined} mediaUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.mediaUrl = null;

                /**
                 * CtwaContextData isSuspiciousLink.
                 * @member {boolean|null|undefined} isSuspiciousLink
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 */
                CtwaContextData.prototype.isSuspiciousLink = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_conversionSource", {
                    get: $util.oneOfGetter($oneOfFields = ["conversionSource"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_conversionData", {
                    get: $util.oneOfGetter($oneOfFields = ["conversionData"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_sourceUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_sourceId", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_sourceType", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_title", {
                    get: $util.oneOfGetter($oneOfFields = ["title"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_description", {
                    get: $util.oneOfGetter($oneOfFields = ["description"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_thumbnail", {
                    get: $util.oneOfGetter($oneOfFields = ["thumbnail"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_thumbnailUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["thumbnailUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_mediaType", {
                    get: $util.oneOfGetter($oneOfFields = ["mediaType"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_mediaUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["mediaUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextData.prototype, "_isSuspiciousLink", {
                    get: $util.oneOfGetter($oneOfFields = ["isSuspiciousLink"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new CtwaContextData instance using the specified properties.
                 * @function create
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData=} [properties] Properties to set
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData} CtwaContextData instance
                 */
                CtwaContextData.create = function create(properties) {
                    return new CtwaContextData(properties);
                };

                /**
                 * Encodes the specified CtwaContextData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @function encode
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData} message CtwaContextData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CtwaContextData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.conversionSource != null && Object.hasOwnProperty.call(message, "conversionSource"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.conversionSource);
                    if (message.conversionData != null && Object.hasOwnProperty.call(message, "conversionData"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.conversionData);
                    if (message.sourceUrl != null && Object.hasOwnProperty.call(message, "sourceUrl"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceUrl);
                    if (message.sourceId != null && Object.hasOwnProperty.call(message, "sourceId"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.sourceId);
                    if (message.sourceType != null && Object.hasOwnProperty.call(message, "sourceType"))
                        writer.uint32(/* id 5, wireType 2 =*/42).string(message.sourceType);
                    if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                        writer.uint32(/* id 6, wireType 2 =*/50).string(message.title);
                    if (message.description != null && Object.hasOwnProperty.call(message, "description"))
                        writer.uint32(/* id 7, wireType 2 =*/58).string(message.description);
                    if (message.thumbnail != null && Object.hasOwnProperty.call(message, "thumbnail"))
                        writer.uint32(/* id 8, wireType 2 =*/66).string(message.thumbnail);
                    if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                        writer.uint32(/* id 9, wireType 2 =*/74).string(message.thumbnailUrl);
                    if (message.mediaType != null && Object.hasOwnProperty.call(message, "mediaType"))
                        writer.uint32(/* id 10, wireType 0 =*/80).int32(message.mediaType);
                    if (message.mediaUrl != null && Object.hasOwnProperty.call(message, "mediaUrl"))
                        writer.uint32(/* id 11, wireType 2 =*/90).string(message.mediaUrl);
                    if (message.isSuspiciousLink != null && Object.hasOwnProperty.call(message, "isSuspiciousLink"))
                        writer.uint32(/* id 12, wireType 0 =*/96).bool(message.isSuspiciousLink);
                    return writer;
                };

                /**
                 * Encodes the specified CtwaContextData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextData} message CtwaContextData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CtwaContextData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CtwaContextData message from the specified reader or buffer.
                 * @function decode
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData} CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CtwaContextData.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.conversionSource = reader.string();
                                break;
                            }
                        case 2: {
                                message.conversionData = reader.bytes();
                                break;
                            }
                        case 3: {
                                message.sourceUrl = reader.string();
                                break;
                            }
                        case 4: {
                                message.sourceId = reader.string();
                                break;
                            }
                        case 5: {
                                message.sourceType = reader.string();
                                break;
                            }
                        case 6: {
                                message.title = reader.string();
                                break;
                            }
                        case 7: {
                                message.description = reader.string();
                                break;
                            }
                        case 8: {
                                message.thumbnail = reader.string();
                                break;
                            }
                        case 9: {
                                message.thumbnailUrl = reader.string();
                                break;
                            }
                        case 10: {
                                message.mediaType = reader.int32();
                                break;
                            }
                        case 11: {
                                message.mediaUrl = reader.string();
                                break;
                            }
                        case 12: {
                                message.isSuspiciousLink = reader.bool();
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
                 * Decodes a CtwaContextData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData} CtwaContextData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CtwaContextData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CtwaContextData message.
                 * @function verify
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CtwaContextData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.conversionSource != null && message.hasOwnProperty("conversionSource")) {
                        properties._conversionSource = 1;
                        if (!$util.isString(message.conversionSource))
                            return "conversionSource: string expected";
                    }
                    if (message.conversionData != null && message.hasOwnProperty("conversionData")) {
                        properties._conversionData = 1;
                        if (!(message.conversionData && typeof message.conversionData.length === "number" || $util.isString(message.conversionData)))
                            return "conversionData: buffer expected";
                    }
                    if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                        properties._sourceUrl = 1;
                        if (!$util.isString(message.sourceUrl))
                            return "sourceUrl: string expected";
                    }
                    if (message.sourceId != null && message.hasOwnProperty("sourceId")) {
                        properties._sourceId = 1;
                        if (!$util.isString(message.sourceId))
                            return "sourceId: string expected";
                    }
                    if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                        properties._sourceType = 1;
                        if (!$util.isString(message.sourceType))
                            return "sourceType: string expected";
                    }
                    if (message.title != null && message.hasOwnProperty("title")) {
                        properties._title = 1;
                        if (!$util.isString(message.title))
                            return "title: string expected";
                    }
                    if (message.description != null && message.hasOwnProperty("description")) {
                        properties._description = 1;
                        if (!$util.isString(message.description))
                            return "description: string expected";
                    }
                    if (message.thumbnail != null && message.hasOwnProperty("thumbnail")) {
                        properties._thumbnail = 1;
                        if (!$util.isString(message.thumbnail))
                            return "thumbnail: string expected";
                    }
                    if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                        properties._thumbnailUrl = 1;
                        if (!$util.isString(message.thumbnailUrl))
                            return "thumbnailUrl: string expected";
                    }
                    if (message.mediaType != null && message.hasOwnProperty("mediaType")) {
                        properties._mediaType = 1;
                        switch (message.mediaType) {
                        default:
                            return "mediaType: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    }
                    if (message.mediaUrl != null && message.hasOwnProperty("mediaUrl")) {
                        properties._mediaUrl = 1;
                        if (!$util.isString(message.mediaUrl))
                            return "mediaUrl: string expected";
                    }
                    if (message.isSuspiciousLink != null && message.hasOwnProperty("isSuspiciousLink")) {
                        properties._isSuspiciousLink = 1;
                        if (typeof message.isSuspiciousLink !== "boolean")
                            return "isSuspiciousLink: boolean expected";
                    }
                    return null;
                };

                /**
                 * Creates a CtwaContextData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData} CtwaContextData
                 */
                CtwaContextData.fromObject = function fromObject(object) {
                    if (object instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData)
                        return object;
                    var message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData();
                    if (object.conversionSource != null)
                        message.conversionSource = String(object.conversionSource);
                    if (object.conversionData != null)
                        if (typeof object.conversionData === "string")
                            $util.base64.decode(object.conversionData, message.conversionData = $util.newBuffer($util.base64.length(object.conversionData)), 0);
                        else if (object.conversionData.length >= 0)
                            message.conversionData = object.conversionData;
                    if (object.sourceUrl != null)
                        message.sourceUrl = String(object.sourceUrl);
                    if (object.sourceId != null)
                        message.sourceId = String(object.sourceId);
                    if (object.sourceType != null)
                        message.sourceType = String(object.sourceType);
                    if (object.title != null)
                        message.title = String(object.title);
                    if (object.description != null)
                        message.description = String(object.description);
                    if (object.thumbnail != null)
                        message.thumbnail = String(object.thumbnail);
                    if (object.thumbnailUrl != null)
                        message.thumbnailUrl = String(object.thumbnailUrl);
                    switch (object.mediaType) {
                    default:
                        if (typeof object.mediaType === "number") {
                            message.mediaType = object.mediaType;
                            break;
                        }
                        break;
                    case "NONE":
                    case 0:
                        message.mediaType = 0;
                        break;
                    case "IMAGE":
                    case 1:
                        message.mediaType = 1;
                        break;
                    case "VIDEO":
                    case 2:
                        message.mediaType = 2;
                        break;
                    }
                    if (object.mediaUrl != null)
                        message.mediaUrl = String(object.mediaUrl);
                    if (object.isSuspiciousLink != null)
                        message.isSuspiciousLink = Boolean(object.isSuspiciousLink);
                    return message;
                };

                /**
                 * Creates a plain object from a CtwaContextData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData} message CtwaContextData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CtwaContextData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.conversionSource != null && message.hasOwnProperty("conversionSource")) {
                        object.conversionSource = message.conversionSource;
                        if (options.oneofs)
                            object._conversionSource = "conversionSource";
                    }
                    if (message.conversionData != null && message.hasOwnProperty("conversionData")) {
                        object.conversionData = options.bytes === String ? $util.base64.encode(message.conversionData, 0, message.conversionData.length) : options.bytes === Array ? Array.prototype.slice.call(message.conversionData) : message.conversionData;
                        if (options.oneofs)
                            object._conversionData = "conversionData";
                    }
                    if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                        object.sourceUrl = message.sourceUrl;
                        if (options.oneofs)
                            object._sourceUrl = "sourceUrl";
                    }
                    if (message.sourceId != null && message.hasOwnProperty("sourceId")) {
                        object.sourceId = message.sourceId;
                        if (options.oneofs)
                            object._sourceId = "sourceId";
                    }
                    if (message.sourceType != null && message.hasOwnProperty("sourceType")) {
                        object.sourceType = message.sourceType;
                        if (options.oneofs)
                            object._sourceType = "sourceType";
                    }
                    if (message.title != null && message.hasOwnProperty("title")) {
                        object.title = message.title;
                        if (options.oneofs)
                            object._title = "title";
                    }
                    if (message.description != null && message.hasOwnProperty("description")) {
                        object.description = message.description;
                        if (options.oneofs)
                            object._description = "description";
                    }
                    if (message.thumbnail != null && message.hasOwnProperty("thumbnail")) {
                        object.thumbnail = message.thumbnail;
                        if (options.oneofs)
                            object._thumbnail = "thumbnail";
                    }
                    if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                        object.thumbnailUrl = message.thumbnailUrl;
                        if (options.oneofs)
                            object._thumbnailUrl = "thumbnailUrl";
                    }
                    if (message.mediaType != null && message.hasOwnProperty("mediaType")) {
                        object.mediaType = options.enums === String ? $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType[message.mediaType] === undefined ? message.mediaType : $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType[message.mediaType] : message.mediaType;
                        if (options.oneofs)
                            object._mediaType = "mediaType";
                    }
                    if (message.mediaUrl != null && message.hasOwnProperty("mediaUrl")) {
                        object.mediaUrl = message.mediaUrl;
                        if (options.oneofs)
                            object._mediaUrl = "mediaUrl";
                    }
                    if (message.isSuspiciousLink != null && message.hasOwnProperty("isSuspiciousLink")) {
                        object.isSuspiciousLink = message.isSuspiciousLink;
                        if (options.oneofs)
                            object._isSuspiciousLink = "isSuspiciousLink";
                    }
                    return object;
                };

                /**
                 * Converts this CtwaContextData to JSON.
                 * @function toJSON
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CtwaContextData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CtwaContextData
                 * @function getTypeUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CtwaContextData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData";
                };

                /**
                 * ContextInfoExternalAdReplyInfoMediaType enum.
                 * @name MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextData.ContextInfoExternalAdReplyInfoMediaType
                 * @enum {number}
                 * @property {number} NONE=0 NONE value
                 * @property {number} IMAGE=1 IMAGE value
                 * @property {number} VIDEO=2 VIDEO value
                 */
                CtwaContextData.ContextInfoExternalAdReplyInfoMediaType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "NONE"] = 0;
                    values[valuesById[1] = "IMAGE"] = 1;
                    values[valuesById[2] = "VIDEO"] = 2;
                    return values;
                })();

                return CtwaContextData;
            })();

            DraftMessage.CtwaContextLinkData = (function() {

                /**
                 * Properties of a CtwaContextLinkData.
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
                 * @interface ICtwaContextLinkData
                 * @property {string|null} [context] CtwaContextLinkData context
                 * @property {string|null} [sourceUrl] CtwaContextLinkData sourceUrl
                 * @property {string|null} [icebreaker] CtwaContextLinkData icebreaker
                 * @property {string|null} [phone] CtwaContextLinkData phone
                 */

                /**
                 * Constructs a new CtwaContextLinkData.
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage
                 * @classdesc Represents a CtwaContextLinkData.
                 * @implements ICtwaContextLinkData
                 * @constructor
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData=} [properties] Properties to set
                 */
                function CtwaContextLinkData(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * CtwaContextLinkData context.
                 * @member {string|null|undefined} context
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @instance
                 */
                CtwaContextLinkData.prototype.context = null;

                /**
                 * CtwaContextLinkData sourceUrl.
                 * @member {string|null|undefined} sourceUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @instance
                 */
                CtwaContextLinkData.prototype.sourceUrl = null;

                /**
                 * CtwaContextLinkData icebreaker.
                 * @member {string|null|undefined} icebreaker
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @instance
                 */
                CtwaContextLinkData.prototype.icebreaker = null;

                /**
                 * CtwaContextLinkData phone.
                 * @member {string|null|undefined} phone
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @instance
                 */
                CtwaContextLinkData.prototype.phone = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextLinkData.prototype, "_context", {
                    get: $util.oneOfGetter($oneOfFields = ["context"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextLinkData.prototype, "_sourceUrl", {
                    get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextLinkData.prototype, "_icebreaker", {
                    get: $util.oneOfGetter($oneOfFields = ["icebreaker"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(CtwaContextLinkData.prototype, "_phone", {
                    get: $util.oneOfGetter($oneOfFields = ["phone"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new CtwaContextLinkData instance using the specified properties.
                 * @function create
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData=} [properties] Properties to set
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData} CtwaContextLinkData instance
                 */
                CtwaContextLinkData.create = function create(properties) {
                    return new CtwaContextLinkData(properties);
                };

                /**
                 * Encodes the specified CtwaContextLinkData message. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @function encode
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData} message CtwaContextLinkData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CtwaContextLinkData.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.context != null && Object.hasOwnProperty.call(message, "context"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.context);
                    if (message.sourceUrl != null && Object.hasOwnProperty.call(message, "sourceUrl"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.sourceUrl);
                    if (message.icebreaker != null && Object.hasOwnProperty.call(message, "icebreaker"))
                        writer.uint32(/* id 3, wireType 2 =*/26).string(message.icebreaker);
                    if (message.phone != null && Object.hasOwnProperty.call(message, "phone"))
                        writer.uint32(/* id 4, wireType 2 =*/34).string(message.phone);
                    return writer;
                };

                /**
                 * Encodes the specified CtwaContextLinkData message, length delimited. Does not implicitly {@link MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.ICtwaContextLinkData} message CtwaContextLinkData message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CtwaContextLinkData.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer.
                 * @function decode
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData} CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CtwaContextLinkData.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.context = reader.string();
                                break;
                            }
                        case 2: {
                                message.sourceUrl = reader.string();
                                break;
                            }
                        case 3: {
                                message.icebreaker = reader.string();
                                break;
                            }
                        case 4: {
                                message.phone = reader.string();
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
                 * Decodes a CtwaContextLinkData message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData} CtwaContextLinkData
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CtwaContextLinkData.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a CtwaContextLinkData message.
                 * @function verify
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CtwaContextLinkData.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.context != null && message.hasOwnProperty("context")) {
                        properties._context = 1;
                        if (!$util.isString(message.context))
                            return "context: string expected";
                    }
                    if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                        properties._sourceUrl = 1;
                        if (!$util.isString(message.sourceUrl))
                            return "sourceUrl: string expected";
                    }
                    if (message.icebreaker != null && message.hasOwnProperty("icebreaker")) {
                        properties._icebreaker = 1;
                        if (!$util.isString(message.icebreaker))
                            return "icebreaker: string expected";
                    }
                    if (message.phone != null && message.hasOwnProperty("phone")) {
                        properties._phone = 1;
                        if (!$util.isString(message.phone))
                            return "phone: string expected";
                    }
                    return null;
                };

                /**
                 * Creates a CtwaContextLinkData message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData} CtwaContextLinkData
                 */
                CtwaContextLinkData.fromObject = function fromObject(object) {
                    if (object instanceof $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData)
                        return object;
                    var message = new $root.MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData();
                    if (object.context != null)
                        message.context = String(object.context);
                    if (object.sourceUrl != null)
                        message.sourceUrl = String(object.sourceUrl);
                    if (object.icebreaker != null)
                        message.icebreaker = String(object.icebreaker);
                    if (object.phone != null)
                        message.phone = String(object.phone);
                    return message;
                };

                /**
                 * Creates a plain object from a CtwaContextLinkData message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData} message CtwaContextLinkData
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CtwaContextLinkData.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.context != null && message.hasOwnProperty("context")) {
                        object.context = message.context;
                        if (options.oneofs)
                            object._context = "context";
                    }
                    if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                        object.sourceUrl = message.sourceUrl;
                        if (options.oneofs)
                            object._sourceUrl = "sourceUrl";
                    }
                    if (message.icebreaker != null && message.hasOwnProperty("icebreaker")) {
                        object.icebreaker = message.icebreaker;
                        if (options.oneofs)
                            object._icebreaker = "icebreaker";
                    }
                    if (message.phone != null && message.hasOwnProperty("phone")) {
                        object.phone = message.phone;
                        if (options.oneofs)
                            object._phone = "phone";
                    }
                    return object;
                };

                /**
                 * Converts this CtwaContextLinkData to JSON.
                 * @function toJSON
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CtwaContextLinkData.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for CtwaContextLinkData
                 * @function getTypeUrl
                 * @memberof MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                CtwaContextLinkData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/MdStorageChatRowOpaqueData.ChatRowOpaqueData.DraftMessage.CtwaContextLinkData";
                };

                return CtwaContextLinkData;
            })();

            return DraftMessage;
        })();

        return ChatRowOpaqueData;
    })();

    return MdStorageChatRowOpaqueData;
})();

module.exports = $root;
