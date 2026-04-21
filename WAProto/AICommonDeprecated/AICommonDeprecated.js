/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.AICommonDeprecated = (function() {

    /**
     * Namespace AICommonDeprecated.
     * @exports AICommonDeprecated
     * @namespace
     */
    var AICommonDeprecated = {};

    AICommonDeprecated.AIRichResponseSubMessage = (function() {

        /**
         * Properties of a AIRichResponseSubMessage.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseSubMessage
         * @property {AICommonDeprecated.AIRichResponseSubMessageType|null} [messageType] AIRichResponseSubMessage messageType
         * @property {AICommonDeprecated.IAIRichResponseGridImageMetadata|null} [gridImageMetadata] AIRichResponseSubMessage gridImageMetadata
         * @property {string|null} [messageText] AIRichResponseSubMessage messageText
         * @property {AICommonDeprecated.IAIRichResponseInlineImageMetadata|null} [imageMetadata] AIRichResponseSubMessage imageMetadata
         * @property {AICommonDeprecated.IAIRichResponseCodeMetadata|null} [codeMetadata] AIRichResponseSubMessage codeMetadata
         * @property {AICommonDeprecated.IAIRichResponseTableMetadata|null} [tableMetadata] AIRichResponseSubMessage tableMetadata
         * @property {AICommonDeprecated.IAIRichResponseDynamicMetadata|null} [dynamicMetadata] AIRichResponseSubMessage dynamicMetadata
         * @property {AICommonDeprecated.IAIRichResponseLatexMetadata|null} [latexMetadata] AIRichResponseSubMessage latexMetadata
         * @property {AICommonDeprecated.IAIRichResponseMapMetadata|null} [mapMetadata] AIRichResponseSubMessage mapMetadata
         * @property {AICommonDeprecated.IAIRichResponseContentItemsMetadata|null} [contentItemsMetadata] AIRichResponseSubMessage contentItemsMetadata
         */

        /**
         * Constructs a new AIRichResponseSubMessage.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseSubMessage.
         * @implements IAIRichResponseSubMessage
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseSubMessage=} [properties] Properties to set
         */
        function AIRichResponseSubMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseSubMessage messageType.
         * @member {AICommonDeprecated.AIRichResponseSubMessageType|null|undefined} messageType
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.messageType = null;

        /**
         * AIRichResponseSubMessage gridImageMetadata.
         * @member {AICommonDeprecated.IAIRichResponseGridImageMetadata|null|undefined} gridImageMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.gridImageMetadata = null;

        /**
         * AIRichResponseSubMessage messageText.
         * @member {string|null|undefined} messageText
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.messageText = null;

        /**
         * AIRichResponseSubMessage imageMetadata.
         * @member {AICommonDeprecated.IAIRichResponseInlineImageMetadata|null|undefined} imageMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.imageMetadata = null;

        /**
         * AIRichResponseSubMessage codeMetadata.
         * @member {AICommonDeprecated.IAIRichResponseCodeMetadata|null|undefined} codeMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.codeMetadata = null;

        /**
         * AIRichResponseSubMessage tableMetadata.
         * @member {AICommonDeprecated.IAIRichResponseTableMetadata|null|undefined} tableMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.tableMetadata = null;

        /**
         * AIRichResponseSubMessage dynamicMetadata.
         * @member {AICommonDeprecated.IAIRichResponseDynamicMetadata|null|undefined} dynamicMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.dynamicMetadata = null;

        /**
         * AIRichResponseSubMessage latexMetadata.
         * @member {AICommonDeprecated.IAIRichResponseLatexMetadata|null|undefined} latexMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.latexMetadata = null;

        /**
         * AIRichResponseSubMessage mapMetadata.
         * @member {AICommonDeprecated.IAIRichResponseMapMetadata|null|undefined} mapMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.mapMetadata = null;

        /**
         * AIRichResponseSubMessage contentItemsMetadata.
         * @member {AICommonDeprecated.IAIRichResponseContentItemsMetadata|null|undefined} contentItemsMetadata
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         */
        AIRichResponseSubMessage.prototype.contentItemsMetadata = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_messageType", {
            get: $util.oneOfGetter($oneOfFields = ["messageType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_gridImageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["gridImageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_messageText", {
            get: $util.oneOfGetter($oneOfFields = ["messageText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_imageMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["imageMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_codeMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["codeMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_tableMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["tableMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_dynamicMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["dynamicMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_latexMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["latexMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_mapMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["mapMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseSubMessage.prototype, "_contentItemsMetadata", {
            get: $util.oneOfGetter($oneOfFields = ["contentItemsMetadata"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseSubMessage instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {AICommonDeprecated.IAIRichResponseSubMessage=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseSubMessage} AIRichResponseSubMessage instance
         */
        AIRichResponseSubMessage.create = function create(properties) {
            return new AIRichResponseSubMessage(properties);
        };

        /**
         * Encodes the specified AIRichResponseSubMessage message. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {AICommonDeprecated.IAIRichResponseSubMessage} message AIRichResponseSubMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseSubMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.messageType != null && Object.hasOwnProperty.call(message, "messageType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.messageType);
            if (message.gridImageMetadata != null && Object.hasOwnProperty.call(message, "gridImageMetadata"))
                $root.AICommonDeprecated.AIRichResponseGridImageMetadata.encode(message.gridImageMetadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.messageText != null && Object.hasOwnProperty.call(message, "messageText"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.messageText);
            if (message.imageMetadata != null && Object.hasOwnProperty.call(message, "imageMetadata"))
                $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.encode(message.imageMetadata, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.codeMetadata != null && Object.hasOwnProperty.call(message, "codeMetadata"))
                $root.AICommonDeprecated.AIRichResponseCodeMetadata.encode(message.codeMetadata, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.tableMetadata != null && Object.hasOwnProperty.call(message, "tableMetadata"))
                $root.AICommonDeprecated.AIRichResponseTableMetadata.encode(message.tableMetadata, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.dynamicMetadata != null && Object.hasOwnProperty.call(message, "dynamicMetadata"))
                $root.AICommonDeprecated.AIRichResponseDynamicMetadata.encode(message.dynamicMetadata, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.latexMetadata != null && Object.hasOwnProperty.call(message, "latexMetadata"))
                $root.AICommonDeprecated.AIRichResponseLatexMetadata.encode(message.latexMetadata, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            if (message.mapMetadata != null && Object.hasOwnProperty.call(message, "mapMetadata"))
                $root.AICommonDeprecated.AIRichResponseMapMetadata.encode(message.mapMetadata, writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            if (message.contentItemsMetadata != null && Object.hasOwnProperty.call(message, "contentItemsMetadata"))
                $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.encode(message.contentItemsMetadata, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseSubMessage message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseSubMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {AICommonDeprecated.IAIRichResponseSubMessage} message AIRichResponseSubMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseSubMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseSubMessage} AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseSubMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseSubMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.messageType = reader.int32();
                        break;
                    }
                case 2: {
                        message.gridImageMetadata = $root.AICommonDeprecated.AIRichResponseGridImageMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.messageText = reader.string();
                        break;
                    }
                case 4: {
                        message.imageMetadata = $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.codeMetadata = $root.AICommonDeprecated.AIRichResponseCodeMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.tableMetadata = $root.AICommonDeprecated.AIRichResponseTableMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.dynamicMetadata = $root.AICommonDeprecated.AIRichResponseDynamicMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.latexMetadata = $root.AICommonDeprecated.AIRichResponseLatexMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 9: {
                        message.mapMetadata = $root.AICommonDeprecated.AIRichResponseMapMetadata.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.contentItemsMetadata = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.decode(reader, reader.uint32());
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
         * Decodes a AIRichResponseSubMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseSubMessage} AIRichResponseSubMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseSubMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseSubMessage message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseSubMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.messageType != null && message.hasOwnProperty("messageType")) {
                properties._messageType = 1;
                switch (message.messageType) {
                default:
                    return "messageType: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            }
            if (message.gridImageMetadata != null && message.hasOwnProperty("gridImageMetadata")) {
                properties._gridImageMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseGridImageMetadata.verify(message.gridImageMetadata);
                    if (error)
                        return "gridImageMetadata." + error;
                }
            }
            if (message.messageText != null && message.hasOwnProperty("messageText")) {
                properties._messageText = 1;
                if (!$util.isString(message.messageText))
                    return "messageText: string expected";
            }
            if (message.imageMetadata != null && message.hasOwnProperty("imageMetadata")) {
                properties._imageMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.verify(message.imageMetadata);
                    if (error)
                        return "imageMetadata." + error;
                }
            }
            if (message.codeMetadata != null && message.hasOwnProperty("codeMetadata")) {
                properties._codeMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseCodeMetadata.verify(message.codeMetadata);
                    if (error)
                        return "codeMetadata." + error;
                }
            }
            if (message.tableMetadata != null && message.hasOwnProperty("tableMetadata")) {
                properties._tableMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseTableMetadata.verify(message.tableMetadata);
                    if (error)
                        return "tableMetadata." + error;
                }
            }
            if (message.dynamicMetadata != null && message.hasOwnProperty("dynamicMetadata")) {
                properties._dynamicMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseDynamicMetadata.verify(message.dynamicMetadata);
                    if (error)
                        return "dynamicMetadata." + error;
                }
            }
            if (message.latexMetadata != null && message.hasOwnProperty("latexMetadata")) {
                properties._latexMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseLatexMetadata.verify(message.latexMetadata);
                    if (error)
                        return "latexMetadata." + error;
                }
            }
            if (message.mapMetadata != null && message.hasOwnProperty("mapMetadata")) {
                properties._mapMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseMapMetadata.verify(message.mapMetadata);
                    if (error)
                        return "mapMetadata." + error;
                }
            }
            if (message.contentItemsMetadata != null && message.hasOwnProperty("contentItemsMetadata")) {
                properties._contentItemsMetadata = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.verify(message.contentItemsMetadata);
                    if (error)
                        return "contentItemsMetadata." + error;
                }
            }
            return null;
        };

        /**
         * Creates a AIRichResponseSubMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseSubMessage} AIRichResponseSubMessage
         */
        AIRichResponseSubMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseSubMessage)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseSubMessage();
            switch (object.messageType) {
            default:
                if (typeof object.messageType === "number") {
                    message.messageType = object.messageType;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_UNKNOWN":
            case 0:
                message.messageType = 0;
                break;
            case "AI_RICH_RESPONSE_GRID_IMAGE":
            case 1:
                message.messageType = 1;
                break;
            case "AI_RICH_RESPONSE_TEXT":
            case 2:
                message.messageType = 2;
                break;
            case "AI_RICH_RESPONSE_INLINE_IMAGE":
            case 3:
                message.messageType = 3;
                break;
            case "AI_RICH_RESPONSE_TABLE":
            case 4:
                message.messageType = 4;
                break;
            case "AI_RICH_RESPONSE_CODE":
            case 5:
                message.messageType = 5;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC":
            case 6:
                message.messageType = 6;
                break;
            case "AI_RICH_RESPONSE_MAP":
            case 7:
                message.messageType = 7;
                break;
            case "AI_RICH_RESPONSE_LATEX":
            case 8:
                message.messageType = 8;
                break;
            case "AI_RICH_RESPONSE_CONTENT_ITEMS":
            case 9:
                message.messageType = 9;
                break;
            }
            if (object.gridImageMetadata != null) {
                if (typeof object.gridImageMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.gridImageMetadata: object expected");
                message.gridImageMetadata = $root.AICommonDeprecated.AIRichResponseGridImageMetadata.fromObject(object.gridImageMetadata);
            }
            if (object.messageText != null)
                message.messageText = String(object.messageText);
            if (object.imageMetadata != null) {
                if (typeof object.imageMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.imageMetadata: object expected");
                message.imageMetadata = $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.fromObject(object.imageMetadata);
            }
            if (object.codeMetadata != null) {
                if (typeof object.codeMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.codeMetadata: object expected");
                message.codeMetadata = $root.AICommonDeprecated.AIRichResponseCodeMetadata.fromObject(object.codeMetadata);
            }
            if (object.tableMetadata != null) {
                if (typeof object.tableMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.tableMetadata: object expected");
                message.tableMetadata = $root.AICommonDeprecated.AIRichResponseTableMetadata.fromObject(object.tableMetadata);
            }
            if (object.dynamicMetadata != null) {
                if (typeof object.dynamicMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.dynamicMetadata: object expected");
                message.dynamicMetadata = $root.AICommonDeprecated.AIRichResponseDynamicMetadata.fromObject(object.dynamicMetadata);
            }
            if (object.latexMetadata != null) {
                if (typeof object.latexMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.latexMetadata: object expected");
                message.latexMetadata = $root.AICommonDeprecated.AIRichResponseLatexMetadata.fromObject(object.latexMetadata);
            }
            if (object.mapMetadata != null) {
                if (typeof object.mapMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.mapMetadata: object expected");
                message.mapMetadata = $root.AICommonDeprecated.AIRichResponseMapMetadata.fromObject(object.mapMetadata);
            }
            if (object.contentItemsMetadata != null) {
                if (typeof object.contentItemsMetadata !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseSubMessage.contentItemsMetadata: object expected");
                message.contentItemsMetadata = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.fromObject(object.contentItemsMetadata);
            }
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseSubMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {AICommonDeprecated.AIRichResponseSubMessage} message AIRichResponseSubMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseSubMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.messageType != null && message.hasOwnProperty("messageType")) {
                object.messageType = options.enums === String ? $root.AICommonDeprecated.AIRichResponseSubMessageType[message.messageType] === undefined ? message.messageType : $root.AICommonDeprecated.AIRichResponseSubMessageType[message.messageType] : message.messageType;
                if (options.oneofs)
                    object._messageType = "messageType";
            }
            if (message.gridImageMetadata != null && message.hasOwnProperty("gridImageMetadata")) {
                object.gridImageMetadata = $root.AICommonDeprecated.AIRichResponseGridImageMetadata.toObject(message.gridImageMetadata, options);
                if (options.oneofs)
                    object._gridImageMetadata = "gridImageMetadata";
            }
            if (message.messageText != null && message.hasOwnProperty("messageText")) {
                object.messageText = message.messageText;
                if (options.oneofs)
                    object._messageText = "messageText";
            }
            if (message.imageMetadata != null && message.hasOwnProperty("imageMetadata")) {
                object.imageMetadata = $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.toObject(message.imageMetadata, options);
                if (options.oneofs)
                    object._imageMetadata = "imageMetadata";
            }
            if (message.codeMetadata != null && message.hasOwnProperty("codeMetadata")) {
                object.codeMetadata = $root.AICommonDeprecated.AIRichResponseCodeMetadata.toObject(message.codeMetadata, options);
                if (options.oneofs)
                    object._codeMetadata = "codeMetadata";
            }
            if (message.tableMetadata != null && message.hasOwnProperty("tableMetadata")) {
                object.tableMetadata = $root.AICommonDeprecated.AIRichResponseTableMetadata.toObject(message.tableMetadata, options);
                if (options.oneofs)
                    object._tableMetadata = "tableMetadata";
            }
            if (message.dynamicMetadata != null && message.hasOwnProperty("dynamicMetadata")) {
                object.dynamicMetadata = $root.AICommonDeprecated.AIRichResponseDynamicMetadata.toObject(message.dynamicMetadata, options);
                if (options.oneofs)
                    object._dynamicMetadata = "dynamicMetadata";
            }
            if (message.latexMetadata != null && message.hasOwnProperty("latexMetadata")) {
                object.latexMetadata = $root.AICommonDeprecated.AIRichResponseLatexMetadata.toObject(message.latexMetadata, options);
                if (options.oneofs)
                    object._latexMetadata = "latexMetadata";
            }
            if (message.mapMetadata != null && message.hasOwnProperty("mapMetadata")) {
                object.mapMetadata = $root.AICommonDeprecated.AIRichResponseMapMetadata.toObject(message.mapMetadata, options);
                if (options.oneofs)
                    object._mapMetadata = "mapMetadata";
            }
            if (message.contentItemsMetadata != null && message.hasOwnProperty("contentItemsMetadata")) {
                object.contentItemsMetadata = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.toObject(message.contentItemsMetadata, options);
                if (options.oneofs)
                    object._contentItemsMetadata = "contentItemsMetadata";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseSubMessage to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseSubMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseSubMessage
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseSubMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseSubMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseSubMessage";
        };

        return AIRichResponseSubMessage;
    })();

    AICommonDeprecated.AIRichResponseContentItemsMetadata = (function() {

        /**
         * Properties of a AIRichResponseContentItemsMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseContentItemsMetadata
         * @property {Array.<AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata>|null} [itemsMetadata] AIRichResponseContentItemsMetadata itemsMetadata
         * @property {AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null} [contentType] AIRichResponseContentItemsMetadata contentType
         */

        /**
         * Constructs a new AIRichResponseContentItemsMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseContentItemsMetadata.
         * @implements IAIRichResponseContentItemsMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseContentItemsMetadata=} [properties] Properties to set
         */
        function AIRichResponseContentItemsMetadata(properties) {
            this.itemsMetadata = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseContentItemsMetadata itemsMetadata.
         * @member {Array.<AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata>} itemsMetadata
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @instance
         */
        AIRichResponseContentItemsMetadata.prototype.itemsMetadata = $util.emptyArray;

        /**
         * AIRichResponseContentItemsMetadata contentType.
         * @member {AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType|null|undefined} contentType
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @instance
         */
        AIRichResponseContentItemsMetadata.prototype.contentType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseContentItemsMetadata.prototype, "_contentType", {
            get: $util.oneOfGetter($oneOfFields = ["contentType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseContentItemsMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseContentItemsMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata} AIRichResponseContentItemsMetadata instance
         */
        AIRichResponseContentItemsMetadata.create = function create(properties) {
            return new AIRichResponseContentItemsMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseContentItemsMetadata} message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseContentItemsMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemsMetadata != null && message.itemsMetadata.length)
                for (var i = 0; i < message.itemsMetadata.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.encode(message.itemsMetadata[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.contentType != null && Object.hasOwnProperty.call(message, "contentType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.contentType);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseContentItemsMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseContentItemsMetadata} message AIRichResponseContentItemsMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseContentItemsMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata} AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseContentItemsMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.itemsMetadata && message.itemsMetadata.length))
                            message.itemsMetadata = [];
                        message.itemsMetadata.push($root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.contentType = reader.int32();
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
         * Decodes a AIRichResponseContentItemsMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata} AIRichResponseContentItemsMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseContentItemsMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseContentItemsMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseContentItemsMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.itemsMetadata != null && message.hasOwnProperty("itemsMetadata")) {
                if (!Array.isArray(message.itemsMetadata))
                    return "itemsMetadata: array expected";
                for (var i = 0; i < message.itemsMetadata.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify(message.itemsMetadata[i]);
                    if (error)
                        return "itemsMetadata." + error;
                }
            }
            if (message.contentType != null && message.hasOwnProperty("contentType")) {
                properties._contentType = 1;
                switch (message.contentType) {
                default:
                    return "contentType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a AIRichResponseContentItemsMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata} AIRichResponseContentItemsMetadata
         */
        AIRichResponseContentItemsMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseContentItemsMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata();
            if (object.itemsMetadata) {
                if (!Array.isArray(object.itemsMetadata))
                    throw TypeError(".AICommonDeprecated.AIRichResponseContentItemsMetadata.itemsMetadata: array expected");
                message.itemsMetadata = [];
                for (var i = 0; i < object.itemsMetadata.length; ++i) {
                    if (typeof object.itemsMetadata[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseContentItemsMetadata.itemsMetadata: object expected");
                    message.itemsMetadata[i] = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.fromObject(object.itemsMetadata[i]);
                }
            }
            switch (object.contentType) {
            default:
                if (typeof object.contentType === "number") {
                    message.contentType = object.contentType;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                message.contentType = 0;
                break;
            case "CAROUSEL":
            case 1:
                message.contentType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseContentItemsMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata} message AIRichResponseContentItemsMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseContentItemsMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.itemsMetadata = [];
            if (message.itemsMetadata && message.itemsMetadata.length) {
                object.itemsMetadata = [];
                for (var j = 0; j < message.itemsMetadata.length; ++j)
                    object.itemsMetadata[j] = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.toObject(message.itemsMetadata[j], options);
            }
            if (message.contentType != null && message.hasOwnProperty("contentType")) {
                object.contentType = options.enums === String ? $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType[message.contentType] === undefined ? message.contentType : $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType[message.contentType] : message.contentType;
                if (options.oneofs)
                    object._contentType = "contentType";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseContentItemsMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseContentItemsMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseContentItemsMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseContentItemsMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseContentItemsMetadata";
        };

        AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata = (function() {

            /**
             * Properties of a AIRichResponseContentItemMetadata.
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
             * @interface IAIRichResponseContentItemMetadata
             * @property {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null} [reelItem] AIRichResponseContentItemMetadata reelItem
             */

            /**
             * Constructs a new AIRichResponseContentItemMetadata.
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
             * @classdesc Represents a AIRichResponseContentItemMetadata.
             * @implements IAIRichResponseContentItemMetadata
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata=} [properties] Properties to set
             */
            function AIRichResponseContentItemMetadata(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseContentItemMetadata reelItem.
             * @member {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem|null|undefined} reelItem
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @instance
             */
            AIRichResponseContentItemMetadata.prototype.reelItem = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            /**
             * AIRichResponseContentItemMetadata aIRichResponseContentItem.
             * @member {"reelItem"|undefined} aIRichResponseContentItem
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @instance
             */
            Object.defineProperty(AIRichResponseContentItemMetadata.prototype, "aIRichResponseContentItem", {
                get: $util.oneOfGetter($oneOfFields = ["reelItem"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseContentItemMetadata instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata} AIRichResponseContentItemMetadata instance
             */
            AIRichResponseContentItemMetadata.create = function create(properties) {
                return new AIRichResponseContentItemMetadata(properties);
            };

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata} message AIRichResponseContentItemMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseContentItemMetadata.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.reelItem != null && Object.hasOwnProperty.call(message, "reelItem"))
                    $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.encode(message.reelItem, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseContentItemMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseContentItemMetadata} message AIRichResponseContentItemMetadata message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseContentItemMetadata.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata} AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseContentItemMetadata.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.reelItem = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.decode(reader, reader.uint32());
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
             * Decodes a AIRichResponseContentItemMetadata message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata} AIRichResponseContentItemMetadata
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseContentItemMetadata.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseContentItemMetadata message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseContentItemMetadata.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.reelItem != null && message.hasOwnProperty("reelItem")) {
                    properties.aIRichResponseContentItem = 1;
                    {
                        var error = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify(message.reelItem);
                        if (error)
                            return "reelItem." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a AIRichResponseContentItemMetadata message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata} AIRichResponseContentItemMetadata
             */
            AIRichResponseContentItemMetadata.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata();
                if (object.reelItem != null) {
                    if (typeof object.reelItem !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata.reelItem: object expected");
                    message.reelItem = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.fromObject(object.reelItem);
                }
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseContentItemMetadata message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata} message AIRichResponseContentItemMetadata
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseContentItemMetadata.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.reelItem != null && message.hasOwnProperty("reelItem")) {
                    object.reelItem = $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.toObject(message.reelItem, options);
                    if (options.oneofs)
                        object.aIRichResponseContentItem = "reelItem";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseContentItemMetadata to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseContentItemMetadata.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseContentItemMetadata
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseContentItemMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseContentItemMetadata";
            };

            return AIRichResponseContentItemMetadata;
        })();

        AIRichResponseContentItemsMetadata.AIRichResponseReelItem = (function() {

            /**
             * Properties of a AIRichResponseReelItem.
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
             * @interface IAIRichResponseReelItem
             * @property {string|null} [title] AIRichResponseReelItem title
             * @property {string|null} [profileIconUrl] AIRichResponseReelItem profileIconUrl
             * @property {string|null} [thumbnailUrl] AIRichResponseReelItem thumbnailUrl
             * @property {string|null} [videoUrl] AIRichResponseReelItem videoUrl
             */

            /**
             * Constructs a new AIRichResponseReelItem.
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata
             * @classdesc Represents a AIRichResponseReelItem.
             * @implements IAIRichResponseReelItem
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem=} [properties] Properties to set
             */
            function AIRichResponseReelItem(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseReelItem title.
             * @member {string|null|undefined} title
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @instance
             */
            AIRichResponseReelItem.prototype.title = null;

            /**
             * AIRichResponseReelItem profileIconUrl.
             * @member {string|null|undefined} profileIconUrl
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @instance
             */
            AIRichResponseReelItem.prototype.profileIconUrl = null;

            /**
             * AIRichResponseReelItem thumbnailUrl.
             * @member {string|null|undefined} thumbnailUrl
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @instance
             */
            AIRichResponseReelItem.prototype.thumbnailUrl = null;

            /**
             * AIRichResponseReelItem videoUrl.
             * @member {string|null|undefined} videoUrl
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @instance
             */
            AIRichResponseReelItem.prototype.videoUrl = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_profileIconUrl", {
                get: $util.oneOfGetter($oneOfFields = ["profileIconUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_thumbnailUrl", {
                get: $util.oneOfGetter($oneOfFields = ["thumbnailUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseReelItem.prototype, "_videoUrl", {
                get: $util.oneOfGetter($oneOfFields = ["videoUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseReelItem instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem} AIRichResponseReelItem instance
             */
            AIRichResponseReelItem.create = function create(properties) {
                return new AIRichResponseReelItem(properties);
            };

            /**
             * Encodes the specified AIRichResponseReelItem message. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem} message AIRichResponseReelItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseReelItem.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                if (message.profileIconUrl != null && Object.hasOwnProperty.call(message, "profileIconUrl"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.profileIconUrl);
                if (message.thumbnailUrl != null && Object.hasOwnProperty.call(message, "thumbnailUrl"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.thumbnailUrl);
                if (message.videoUrl != null && Object.hasOwnProperty.call(message, "videoUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.videoUrl);
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseReelItem message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.IAIRichResponseReelItem} message AIRichResponseReelItem message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseReelItem.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem} AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseReelItem.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.title = reader.string();
                            break;
                        }
                    case 2: {
                            message.profileIconUrl = reader.string();
                            break;
                        }
                    case 3: {
                            message.thumbnailUrl = reader.string();
                            break;
                        }
                    case 4: {
                            message.videoUrl = reader.string();
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
             * Decodes a AIRichResponseReelItem message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem} AIRichResponseReelItem
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseReelItem.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseReelItem message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseReelItem.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.title != null && message.hasOwnProperty("title")) {
                    properties._title = 1;
                    if (!$util.isString(message.title))
                        return "title: string expected";
                }
                if (message.profileIconUrl != null && message.hasOwnProperty("profileIconUrl")) {
                    properties._profileIconUrl = 1;
                    if (!$util.isString(message.profileIconUrl))
                        return "profileIconUrl: string expected";
                }
                if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                    properties._thumbnailUrl = 1;
                    if (!$util.isString(message.thumbnailUrl))
                        return "thumbnailUrl: string expected";
                }
                if (message.videoUrl != null && message.hasOwnProperty("videoUrl")) {
                    properties._videoUrl = 1;
                    if (!$util.isString(message.videoUrl))
                        return "videoUrl: string expected";
                }
                return null;
            };

            /**
             * Creates a AIRichResponseReelItem message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem} AIRichResponseReelItem
             */
            AIRichResponseReelItem.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem();
                if (object.title != null)
                    message.title = String(object.title);
                if (object.profileIconUrl != null)
                    message.profileIconUrl = String(object.profileIconUrl);
                if (object.thumbnailUrl != null)
                    message.thumbnailUrl = String(object.thumbnailUrl);
                if (object.videoUrl != null)
                    message.videoUrl = String(object.videoUrl);
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseReelItem message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem} message AIRichResponseReelItem
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseReelItem.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.title != null && message.hasOwnProperty("title")) {
                    object.title = message.title;
                    if (options.oneofs)
                        object._title = "title";
                }
                if (message.profileIconUrl != null && message.hasOwnProperty("profileIconUrl")) {
                    object.profileIconUrl = message.profileIconUrl;
                    if (options.oneofs)
                        object._profileIconUrl = "profileIconUrl";
                }
                if (message.thumbnailUrl != null && message.hasOwnProperty("thumbnailUrl")) {
                    object.thumbnailUrl = message.thumbnailUrl;
                    if (options.oneofs)
                        object._thumbnailUrl = "thumbnailUrl";
                }
                if (message.videoUrl != null && message.hasOwnProperty("videoUrl")) {
                    object.videoUrl = message.videoUrl;
                    if (options.oneofs)
                        object._videoUrl = "videoUrl";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseReelItem to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseReelItem.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseReelItem
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseReelItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseContentItemsMetadata.AIRichResponseReelItem";
            };

            return AIRichResponseReelItem;
        })();

        /**
         * ContentType enum.
         * @name AICommonDeprecated.AIRichResponseContentItemsMetadata.ContentType
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} CAROUSEL=1 CAROUSEL value
         */
        AIRichResponseContentItemsMetadata.ContentType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "CAROUSEL"] = 1;
            return values;
        })();

        return AIRichResponseContentItemsMetadata;
    })();

    AICommonDeprecated.AIRichResponseMapMetadata = (function() {

        /**
         * Properties of a AIRichResponseMapMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseMapMetadata
         * @property {number|null} [centerLatitude] AIRichResponseMapMetadata centerLatitude
         * @property {number|null} [centerLongitude] AIRichResponseMapMetadata centerLongitude
         * @property {number|null} [latitudeDelta] AIRichResponseMapMetadata latitudeDelta
         * @property {number|null} [longitudeDelta] AIRichResponseMapMetadata longitudeDelta
         * @property {Array.<AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation>|null} [annotations] AIRichResponseMapMetadata annotations
         * @property {boolean|null} [showInfoList] AIRichResponseMapMetadata showInfoList
         */

        /**
         * Constructs a new AIRichResponseMapMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseMapMetadata.
         * @implements IAIRichResponseMapMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseMapMetadata=} [properties] Properties to set
         */
        function AIRichResponseMapMetadata(properties) {
            this.annotations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseMapMetadata centerLatitude.
         * @member {number|null|undefined} centerLatitude
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.centerLatitude = null;

        /**
         * AIRichResponseMapMetadata centerLongitude.
         * @member {number|null|undefined} centerLongitude
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.centerLongitude = null;

        /**
         * AIRichResponseMapMetadata latitudeDelta.
         * @member {number|null|undefined} latitudeDelta
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.latitudeDelta = null;

        /**
         * AIRichResponseMapMetadata longitudeDelta.
         * @member {number|null|undefined} longitudeDelta
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.longitudeDelta = null;

        /**
         * AIRichResponseMapMetadata annotations.
         * @member {Array.<AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation>} annotations
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.annotations = $util.emptyArray;

        /**
         * AIRichResponseMapMetadata showInfoList.
         * @member {boolean|null|undefined} showInfoList
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         */
        AIRichResponseMapMetadata.prototype.showInfoList = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_centerLatitude", {
            get: $util.oneOfGetter($oneOfFields = ["centerLatitude"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_centerLongitude", {
            get: $util.oneOfGetter($oneOfFields = ["centerLongitude"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_latitudeDelta", {
            get: $util.oneOfGetter($oneOfFields = ["latitudeDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_longitudeDelta", {
            get: $util.oneOfGetter($oneOfFields = ["longitudeDelta"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseMapMetadata.prototype, "_showInfoList", {
            get: $util.oneOfGetter($oneOfFields = ["showInfoList"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseMapMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseMapMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata} AIRichResponseMapMetadata instance
         */
        AIRichResponseMapMetadata.create = function create(properties) {
            return new AIRichResponseMapMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseMapMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseMapMetadata} message AIRichResponseMapMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseMapMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.centerLatitude != null && Object.hasOwnProperty.call(message, "centerLatitude"))
                writer.uint32(/* id 1, wireType 1 =*/9).double(message.centerLatitude);
            if (message.centerLongitude != null && Object.hasOwnProperty.call(message, "centerLongitude"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.centerLongitude);
            if (message.latitudeDelta != null && Object.hasOwnProperty.call(message, "latitudeDelta"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.latitudeDelta);
            if (message.longitudeDelta != null && Object.hasOwnProperty.call(message, "longitudeDelta"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.longitudeDelta);
            if (message.annotations != null && message.annotations.length)
                for (var i = 0; i < message.annotations.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.encode(message.annotations[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.showInfoList != null && Object.hasOwnProperty.call(message, "showInfoList"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.showInfoList);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseMapMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseMapMetadata} message AIRichResponseMapMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseMapMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata} AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseMapMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseMapMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.centerLatitude = reader.double();
                        break;
                    }
                case 2: {
                        message.centerLongitude = reader.double();
                        break;
                    }
                case 3: {
                        message.latitudeDelta = reader.double();
                        break;
                    }
                case 4: {
                        message.longitudeDelta = reader.double();
                        break;
                    }
                case 5: {
                        if (!(message.annotations && message.annotations.length))
                            message.annotations = [];
                        message.annotations.push($root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.decode(reader, reader.uint32()));
                        break;
                    }
                case 6: {
                        message.showInfoList = reader.bool();
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
         * Decodes a AIRichResponseMapMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata} AIRichResponseMapMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseMapMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseMapMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseMapMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.centerLatitude != null && message.hasOwnProperty("centerLatitude")) {
                properties._centerLatitude = 1;
                if (typeof message.centerLatitude !== "number")
                    return "centerLatitude: number expected";
            }
            if (message.centerLongitude != null && message.hasOwnProperty("centerLongitude")) {
                properties._centerLongitude = 1;
                if (typeof message.centerLongitude !== "number")
                    return "centerLongitude: number expected";
            }
            if (message.latitudeDelta != null && message.hasOwnProperty("latitudeDelta")) {
                properties._latitudeDelta = 1;
                if (typeof message.latitudeDelta !== "number")
                    return "latitudeDelta: number expected";
            }
            if (message.longitudeDelta != null && message.hasOwnProperty("longitudeDelta")) {
                properties._longitudeDelta = 1;
                if (typeof message.longitudeDelta !== "number")
                    return "longitudeDelta: number expected";
            }
            if (message.annotations != null && message.hasOwnProperty("annotations")) {
                if (!Array.isArray(message.annotations))
                    return "annotations: array expected";
                for (var i = 0; i < message.annotations.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify(message.annotations[i]);
                    if (error)
                        return "annotations." + error;
                }
            }
            if (message.showInfoList != null && message.hasOwnProperty("showInfoList")) {
                properties._showInfoList = 1;
                if (typeof message.showInfoList !== "boolean")
                    return "showInfoList: boolean expected";
            }
            return null;
        };

        /**
         * Creates a AIRichResponseMapMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseMapMetadata} AIRichResponseMapMetadata
         */
        AIRichResponseMapMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseMapMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseMapMetadata();
            if (object.centerLatitude != null)
                message.centerLatitude = Number(object.centerLatitude);
            if (object.centerLongitude != null)
                message.centerLongitude = Number(object.centerLongitude);
            if (object.latitudeDelta != null)
                message.latitudeDelta = Number(object.latitudeDelta);
            if (object.longitudeDelta != null)
                message.longitudeDelta = Number(object.longitudeDelta);
            if (object.annotations) {
                if (!Array.isArray(object.annotations))
                    throw TypeError(".AICommonDeprecated.AIRichResponseMapMetadata.annotations: array expected");
                message.annotations = [];
                for (var i = 0; i < object.annotations.length; ++i) {
                    if (typeof object.annotations[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseMapMetadata.annotations: object expected");
                    message.annotations[i] = $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.fromObject(object.annotations[i]);
                }
            }
            if (object.showInfoList != null)
                message.showInfoList = Boolean(object.showInfoList);
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseMapMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseMapMetadata} message AIRichResponseMapMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseMapMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.annotations = [];
            if (message.centerLatitude != null && message.hasOwnProperty("centerLatitude")) {
                object.centerLatitude = options.json && !isFinite(message.centerLatitude) ? String(message.centerLatitude) : message.centerLatitude;
                if (options.oneofs)
                    object._centerLatitude = "centerLatitude";
            }
            if (message.centerLongitude != null && message.hasOwnProperty("centerLongitude")) {
                object.centerLongitude = options.json && !isFinite(message.centerLongitude) ? String(message.centerLongitude) : message.centerLongitude;
                if (options.oneofs)
                    object._centerLongitude = "centerLongitude";
            }
            if (message.latitudeDelta != null && message.hasOwnProperty("latitudeDelta")) {
                object.latitudeDelta = options.json && !isFinite(message.latitudeDelta) ? String(message.latitudeDelta) : message.latitudeDelta;
                if (options.oneofs)
                    object._latitudeDelta = "latitudeDelta";
            }
            if (message.longitudeDelta != null && message.hasOwnProperty("longitudeDelta")) {
                object.longitudeDelta = options.json && !isFinite(message.longitudeDelta) ? String(message.longitudeDelta) : message.longitudeDelta;
                if (options.oneofs)
                    object._longitudeDelta = "longitudeDelta";
            }
            if (message.annotations && message.annotations.length) {
                object.annotations = [];
                for (var j = 0; j < message.annotations.length; ++j)
                    object.annotations[j] = $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.toObject(message.annotations[j], options);
            }
            if (message.showInfoList != null && message.hasOwnProperty("showInfoList")) {
                object.showInfoList = message.showInfoList;
                if (options.oneofs)
                    object._showInfoList = "showInfoList";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseMapMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseMapMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseMapMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseMapMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseMapMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseMapMetadata";
        };

        AIRichResponseMapMetadata.AIRichResponseMapAnnotation = (function() {

            /**
             * Properties of a AIRichResponseMapAnnotation.
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata
             * @interface IAIRichResponseMapAnnotation
             * @property {number|null} [annotationNumber] AIRichResponseMapAnnotation annotationNumber
             * @property {number|null} [latitude] AIRichResponseMapAnnotation latitude
             * @property {number|null} [longitude] AIRichResponseMapAnnotation longitude
             * @property {string|null} [title] AIRichResponseMapAnnotation title
             * @property {string|null} [body] AIRichResponseMapAnnotation body
             */

            /**
             * Constructs a new AIRichResponseMapAnnotation.
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata
             * @classdesc Represents a AIRichResponseMapAnnotation.
             * @implements IAIRichResponseMapAnnotation
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation=} [properties] Properties to set
             */
            function AIRichResponseMapAnnotation(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseMapAnnotation annotationNumber.
             * @member {number|null|undefined} annotationNumber
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             */
            AIRichResponseMapAnnotation.prototype.annotationNumber = null;

            /**
             * AIRichResponseMapAnnotation latitude.
             * @member {number|null|undefined} latitude
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             */
            AIRichResponseMapAnnotation.prototype.latitude = null;

            /**
             * AIRichResponseMapAnnotation longitude.
             * @member {number|null|undefined} longitude
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             */
            AIRichResponseMapAnnotation.prototype.longitude = null;

            /**
             * AIRichResponseMapAnnotation title.
             * @member {string|null|undefined} title
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             */
            AIRichResponseMapAnnotation.prototype.title = null;

            /**
             * AIRichResponseMapAnnotation body.
             * @member {string|null|undefined} body
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             */
            AIRichResponseMapAnnotation.prototype.body = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_annotationNumber", {
                get: $util.oneOfGetter($oneOfFields = ["annotationNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_latitude", {
                get: $util.oneOfGetter($oneOfFields = ["latitude"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_longitude", {
                get: $util.oneOfGetter($oneOfFields = ["longitude"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseMapAnnotation.prototype, "_body", {
                get: $util.oneOfGetter($oneOfFields = ["body"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseMapAnnotation instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation} AIRichResponseMapAnnotation instance
             */
            AIRichResponseMapAnnotation.create = function create(properties) {
                return new AIRichResponseMapAnnotation(properties);
            };

            /**
             * Encodes the specified AIRichResponseMapAnnotation message. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation} message AIRichResponseMapAnnotation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseMapAnnotation.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.annotationNumber != null && Object.hasOwnProperty.call(message, "annotationNumber"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.annotationNumber);
                if (message.latitude != null && Object.hasOwnProperty.call(message, "latitude"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.latitude);
                if (message.longitude != null && Object.hasOwnProperty.call(message, "longitude"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.longitude);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.title);
                if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.body);
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseMapAnnotation message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {AICommonDeprecated.AIRichResponseMapMetadata.IAIRichResponseMapAnnotation} message AIRichResponseMapAnnotation message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseMapAnnotation.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation} AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseMapAnnotation.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.annotationNumber = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.latitude = reader.double();
                            break;
                        }
                    case 3: {
                            message.longitude = reader.double();
                            break;
                        }
                    case 4: {
                            message.title = reader.string();
                            break;
                        }
                    case 5: {
                            message.body = reader.string();
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
             * Decodes a AIRichResponseMapAnnotation message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation} AIRichResponseMapAnnotation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseMapAnnotation.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseMapAnnotation message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseMapAnnotation.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.annotationNumber != null && message.hasOwnProperty("annotationNumber")) {
                    properties._annotationNumber = 1;
                    if (!$util.isInteger(message.annotationNumber))
                        return "annotationNumber: integer expected";
                }
                if (message.latitude != null && message.hasOwnProperty("latitude")) {
                    properties._latitude = 1;
                    if (typeof message.latitude !== "number")
                        return "latitude: number expected";
                }
                if (message.longitude != null && message.hasOwnProperty("longitude")) {
                    properties._longitude = 1;
                    if (typeof message.longitude !== "number")
                        return "longitude: number expected";
                }
                if (message.title != null && message.hasOwnProperty("title")) {
                    properties._title = 1;
                    if (!$util.isString(message.title))
                        return "title: string expected";
                }
                if (message.body != null && message.hasOwnProperty("body")) {
                    properties._body = 1;
                    if (!$util.isString(message.body))
                        return "body: string expected";
                }
                return null;
            };

            /**
             * Creates a AIRichResponseMapAnnotation message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation} AIRichResponseMapAnnotation
             */
            AIRichResponseMapAnnotation.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation();
                if (object.annotationNumber != null)
                    message.annotationNumber = object.annotationNumber >>> 0;
                if (object.latitude != null)
                    message.latitude = Number(object.latitude);
                if (object.longitude != null)
                    message.longitude = Number(object.longitude);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.body != null)
                    message.body = String(object.body);
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseMapAnnotation message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation} message AIRichResponseMapAnnotation
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseMapAnnotation.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.annotationNumber != null && message.hasOwnProperty("annotationNumber")) {
                    object.annotationNumber = message.annotationNumber;
                    if (options.oneofs)
                        object._annotationNumber = "annotationNumber";
                }
                if (message.latitude != null && message.hasOwnProperty("latitude")) {
                    object.latitude = options.json && !isFinite(message.latitude) ? String(message.latitude) : message.latitude;
                    if (options.oneofs)
                        object._latitude = "latitude";
                }
                if (message.longitude != null && message.hasOwnProperty("longitude")) {
                    object.longitude = options.json && !isFinite(message.longitude) ? String(message.longitude) : message.longitude;
                    if (options.oneofs)
                        object._longitude = "longitude";
                }
                if (message.title != null && message.hasOwnProperty("title")) {
                    object.title = message.title;
                    if (options.oneofs)
                        object._title = "title";
                }
                if (message.body != null && message.hasOwnProperty("body")) {
                    object.body = message.body;
                    if (options.oneofs)
                        object._body = "body";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseMapAnnotation to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseMapAnnotation.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseMapAnnotation
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseMapAnnotation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseMapMetadata.AIRichResponseMapAnnotation";
            };

            return AIRichResponseMapAnnotation;
        })();

        return AIRichResponseMapMetadata;
    })();

    AICommonDeprecated.AIRichResponseLatexMetadata = (function() {

        /**
         * Properties of a AIRichResponseLatexMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseLatexMetadata
         * @property {string|null} [text] AIRichResponseLatexMetadata text
         * @property {Array.<AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression>|null} [expressions] AIRichResponseLatexMetadata expressions
         */

        /**
         * Constructs a new AIRichResponseLatexMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseLatexMetadata.
         * @implements IAIRichResponseLatexMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseLatexMetadata=} [properties] Properties to set
         */
        function AIRichResponseLatexMetadata(properties) {
            this.expressions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseLatexMetadata text.
         * @member {string|null|undefined} text
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @instance
         */
        AIRichResponseLatexMetadata.prototype.text = null;

        /**
         * AIRichResponseLatexMetadata expressions.
         * @member {Array.<AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression>} expressions
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @instance
         */
        AIRichResponseLatexMetadata.prototype.expressions = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseLatexMetadata.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseLatexMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseLatexMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata} AIRichResponseLatexMetadata instance
         */
        AIRichResponseLatexMetadata.create = function create(properties) {
            return new AIRichResponseLatexMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseLatexMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseLatexMetadata} message AIRichResponseLatexMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseLatexMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.text);
            if (message.expressions != null && message.expressions.length)
                for (var i = 0; i < message.expressions.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.encode(message.expressions[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseLatexMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseLatexMetadata} message AIRichResponseLatexMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseLatexMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata} AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseLatexMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseLatexMetadata();
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
                        if (!(message.expressions && message.expressions.length))
                            message.expressions = [];
                        message.expressions.push($root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.decode(reader, reader.uint32()));
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
         * Decodes a AIRichResponseLatexMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata} AIRichResponseLatexMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseLatexMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseLatexMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseLatexMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.text != null && message.hasOwnProperty("text")) {
                properties._text = 1;
                if (!$util.isString(message.text))
                    return "text: string expected";
            }
            if (message.expressions != null && message.hasOwnProperty("expressions")) {
                if (!Array.isArray(message.expressions))
                    return "expressions: array expected";
                for (var i = 0; i < message.expressions.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify(message.expressions[i]);
                    if (error)
                        return "expressions." + error;
                }
            }
            return null;
        };

        /**
         * Creates a AIRichResponseLatexMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseLatexMetadata} AIRichResponseLatexMetadata
         */
        AIRichResponseLatexMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseLatexMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseLatexMetadata();
            if (object.text != null)
                message.text = String(object.text);
            if (object.expressions) {
                if (!Array.isArray(object.expressions))
                    throw TypeError(".AICommonDeprecated.AIRichResponseLatexMetadata.expressions: array expected");
                message.expressions = [];
                for (var i = 0; i < object.expressions.length; ++i) {
                    if (typeof object.expressions[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseLatexMetadata.expressions: object expected");
                    message.expressions[i] = $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.fromObject(object.expressions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseLatexMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseLatexMetadata} message AIRichResponseLatexMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseLatexMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.expressions = [];
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = message.text;
                if (options.oneofs)
                    object._text = "text";
            }
            if (message.expressions && message.expressions.length) {
                object.expressions = [];
                for (var j = 0; j < message.expressions.length; ++j)
                    object.expressions[j] = $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.toObject(message.expressions[j], options);
            }
            return object;
        };

        /**
         * Converts this AIRichResponseLatexMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseLatexMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseLatexMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseLatexMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseLatexMetadata";
        };

        AIRichResponseLatexMetadata.AIRichResponseLatexExpression = (function() {

            /**
             * Properties of a AIRichResponseLatexExpression.
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
             * @interface IAIRichResponseLatexExpression
             * @property {string|null} [latexExpression] AIRichResponseLatexExpression latexExpression
             * @property {string|null} [url] AIRichResponseLatexExpression url
             * @property {number|null} [width] AIRichResponseLatexExpression width
             * @property {number|null} [height] AIRichResponseLatexExpression height
             * @property {number|null} [fontHeight] AIRichResponseLatexExpression fontHeight
             * @property {number|null} [imageTopPadding] AIRichResponseLatexExpression imageTopPadding
             * @property {number|null} [imageLeadingPadding] AIRichResponseLatexExpression imageLeadingPadding
             * @property {number|null} [imageBottomPadding] AIRichResponseLatexExpression imageBottomPadding
             * @property {number|null} [imageTrailingPadding] AIRichResponseLatexExpression imageTrailingPadding
             */

            /**
             * Constructs a new AIRichResponseLatexExpression.
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata
             * @classdesc Represents a AIRichResponseLatexExpression.
             * @implements IAIRichResponseLatexExpression
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression=} [properties] Properties to set
             */
            function AIRichResponseLatexExpression(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseLatexExpression latexExpression.
             * @member {string|null|undefined} latexExpression
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.latexExpression = null;

            /**
             * AIRichResponseLatexExpression url.
             * @member {string|null|undefined} url
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.url = null;

            /**
             * AIRichResponseLatexExpression width.
             * @member {number|null|undefined} width
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.width = null;

            /**
             * AIRichResponseLatexExpression height.
             * @member {number|null|undefined} height
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.height = null;

            /**
             * AIRichResponseLatexExpression fontHeight.
             * @member {number|null|undefined} fontHeight
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.fontHeight = null;

            /**
             * AIRichResponseLatexExpression imageTopPadding.
             * @member {number|null|undefined} imageTopPadding
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.imageTopPadding = null;

            /**
             * AIRichResponseLatexExpression imageLeadingPadding.
             * @member {number|null|undefined} imageLeadingPadding
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.imageLeadingPadding = null;

            /**
             * AIRichResponseLatexExpression imageBottomPadding.
             * @member {number|null|undefined} imageBottomPadding
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.imageBottomPadding = null;

            /**
             * AIRichResponseLatexExpression imageTrailingPadding.
             * @member {number|null|undefined} imageTrailingPadding
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             */
            AIRichResponseLatexExpression.prototype.imageTrailingPadding = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_latexExpression", {
                get: $util.oneOfGetter($oneOfFields = ["latexExpression"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_url", {
                get: $util.oneOfGetter($oneOfFields = ["url"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_width", {
                get: $util.oneOfGetter($oneOfFields = ["width"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_height", {
                get: $util.oneOfGetter($oneOfFields = ["height"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_fontHeight", {
                get: $util.oneOfGetter($oneOfFields = ["fontHeight"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageTopPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageTopPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageLeadingPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageLeadingPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageBottomPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageBottomPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseLatexExpression.prototype, "_imageTrailingPadding", {
                get: $util.oneOfGetter($oneOfFields = ["imageTrailingPadding"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseLatexExpression instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression} AIRichResponseLatexExpression instance
             */
            AIRichResponseLatexExpression.create = function create(properties) {
                return new AIRichResponseLatexExpression(properties);
            };

            /**
             * Encodes the specified AIRichResponseLatexExpression message. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression} message AIRichResponseLatexExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseLatexExpression.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.latexExpression != null && Object.hasOwnProperty.call(message, "latexExpression"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.latexExpression);
                if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.url);
                if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                    writer.uint32(/* id 3, wireType 1 =*/25).double(message.width);
                if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                    writer.uint32(/* id 4, wireType 1 =*/33).double(message.height);
                if (message.fontHeight != null && Object.hasOwnProperty.call(message, "fontHeight"))
                    writer.uint32(/* id 5, wireType 1 =*/41).double(message.fontHeight);
                if (message.imageTopPadding != null && Object.hasOwnProperty.call(message, "imageTopPadding"))
                    writer.uint32(/* id 6, wireType 1 =*/49).double(message.imageTopPadding);
                if (message.imageLeadingPadding != null && Object.hasOwnProperty.call(message, "imageLeadingPadding"))
                    writer.uint32(/* id 7, wireType 1 =*/57).double(message.imageLeadingPadding);
                if (message.imageBottomPadding != null && Object.hasOwnProperty.call(message, "imageBottomPadding"))
                    writer.uint32(/* id 8, wireType 1 =*/65).double(message.imageBottomPadding);
                if (message.imageTrailingPadding != null && Object.hasOwnProperty.call(message, "imageTrailingPadding"))
                    writer.uint32(/* id 9, wireType 1 =*/73).double(message.imageTrailingPadding);
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseLatexExpression message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {AICommonDeprecated.AIRichResponseLatexMetadata.IAIRichResponseLatexExpression} message AIRichResponseLatexExpression message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseLatexExpression.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression} AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseLatexExpression.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.latexExpression = reader.string();
                            break;
                        }
                    case 2: {
                            message.url = reader.string();
                            break;
                        }
                    case 3: {
                            message.width = reader.double();
                            break;
                        }
                    case 4: {
                            message.height = reader.double();
                            break;
                        }
                    case 5: {
                            message.fontHeight = reader.double();
                            break;
                        }
                    case 6: {
                            message.imageTopPadding = reader.double();
                            break;
                        }
                    case 7: {
                            message.imageLeadingPadding = reader.double();
                            break;
                        }
                    case 8: {
                            message.imageBottomPadding = reader.double();
                            break;
                        }
                    case 9: {
                            message.imageTrailingPadding = reader.double();
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
             * Decodes a AIRichResponseLatexExpression message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression} AIRichResponseLatexExpression
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseLatexExpression.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseLatexExpression message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseLatexExpression.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.latexExpression != null && message.hasOwnProperty("latexExpression")) {
                    properties._latexExpression = 1;
                    if (!$util.isString(message.latexExpression))
                        return "latexExpression: string expected";
                }
                if (message.url != null && message.hasOwnProperty("url")) {
                    properties._url = 1;
                    if (!$util.isString(message.url))
                        return "url: string expected";
                }
                if (message.width != null && message.hasOwnProperty("width")) {
                    properties._width = 1;
                    if (typeof message.width !== "number")
                        return "width: number expected";
                }
                if (message.height != null && message.hasOwnProperty("height")) {
                    properties._height = 1;
                    if (typeof message.height !== "number")
                        return "height: number expected";
                }
                if (message.fontHeight != null && message.hasOwnProperty("fontHeight")) {
                    properties._fontHeight = 1;
                    if (typeof message.fontHeight !== "number")
                        return "fontHeight: number expected";
                }
                if (message.imageTopPadding != null && message.hasOwnProperty("imageTopPadding")) {
                    properties._imageTopPadding = 1;
                    if (typeof message.imageTopPadding !== "number")
                        return "imageTopPadding: number expected";
                }
                if (message.imageLeadingPadding != null && message.hasOwnProperty("imageLeadingPadding")) {
                    properties._imageLeadingPadding = 1;
                    if (typeof message.imageLeadingPadding !== "number")
                        return "imageLeadingPadding: number expected";
                }
                if (message.imageBottomPadding != null && message.hasOwnProperty("imageBottomPadding")) {
                    properties._imageBottomPadding = 1;
                    if (typeof message.imageBottomPadding !== "number")
                        return "imageBottomPadding: number expected";
                }
                if (message.imageTrailingPadding != null && message.hasOwnProperty("imageTrailingPadding")) {
                    properties._imageTrailingPadding = 1;
                    if (typeof message.imageTrailingPadding !== "number")
                        return "imageTrailingPadding: number expected";
                }
                return null;
            };

            /**
             * Creates a AIRichResponseLatexExpression message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression} AIRichResponseLatexExpression
             */
            AIRichResponseLatexExpression.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression();
                if (object.latexExpression != null)
                    message.latexExpression = String(object.latexExpression);
                if (object.url != null)
                    message.url = String(object.url);
                if (object.width != null)
                    message.width = Number(object.width);
                if (object.height != null)
                    message.height = Number(object.height);
                if (object.fontHeight != null)
                    message.fontHeight = Number(object.fontHeight);
                if (object.imageTopPadding != null)
                    message.imageTopPadding = Number(object.imageTopPadding);
                if (object.imageLeadingPadding != null)
                    message.imageLeadingPadding = Number(object.imageLeadingPadding);
                if (object.imageBottomPadding != null)
                    message.imageBottomPadding = Number(object.imageBottomPadding);
                if (object.imageTrailingPadding != null)
                    message.imageTrailingPadding = Number(object.imageTrailingPadding);
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseLatexExpression message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression} message AIRichResponseLatexExpression
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseLatexExpression.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.latexExpression != null && message.hasOwnProperty("latexExpression")) {
                    object.latexExpression = message.latexExpression;
                    if (options.oneofs)
                        object._latexExpression = "latexExpression";
                }
                if (message.url != null && message.hasOwnProperty("url")) {
                    object.url = message.url;
                    if (options.oneofs)
                        object._url = "url";
                }
                if (message.width != null && message.hasOwnProperty("width")) {
                    object.width = options.json && !isFinite(message.width) ? String(message.width) : message.width;
                    if (options.oneofs)
                        object._width = "width";
                }
                if (message.height != null && message.hasOwnProperty("height")) {
                    object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
                    if (options.oneofs)
                        object._height = "height";
                }
                if (message.fontHeight != null && message.hasOwnProperty("fontHeight")) {
                    object.fontHeight = options.json && !isFinite(message.fontHeight) ? String(message.fontHeight) : message.fontHeight;
                    if (options.oneofs)
                        object._fontHeight = "fontHeight";
                }
                if (message.imageTopPadding != null && message.hasOwnProperty("imageTopPadding")) {
                    object.imageTopPadding = options.json && !isFinite(message.imageTopPadding) ? String(message.imageTopPadding) : message.imageTopPadding;
                    if (options.oneofs)
                        object._imageTopPadding = "imageTopPadding";
                }
                if (message.imageLeadingPadding != null && message.hasOwnProperty("imageLeadingPadding")) {
                    object.imageLeadingPadding = options.json && !isFinite(message.imageLeadingPadding) ? String(message.imageLeadingPadding) : message.imageLeadingPadding;
                    if (options.oneofs)
                        object._imageLeadingPadding = "imageLeadingPadding";
                }
                if (message.imageBottomPadding != null && message.hasOwnProperty("imageBottomPadding")) {
                    object.imageBottomPadding = options.json && !isFinite(message.imageBottomPadding) ? String(message.imageBottomPadding) : message.imageBottomPadding;
                    if (options.oneofs)
                        object._imageBottomPadding = "imageBottomPadding";
                }
                if (message.imageTrailingPadding != null && message.hasOwnProperty("imageTrailingPadding")) {
                    object.imageTrailingPadding = options.json && !isFinite(message.imageTrailingPadding) ? String(message.imageTrailingPadding) : message.imageTrailingPadding;
                    if (options.oneofs)
                        object._imageTrailingPadding = "imageTrailingPadding";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseLatexExpression to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseLatexExpression.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseLatexExpression
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseLatexExpression.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseLatexMetadata.AIRichResponseLatexExpression";
            };

            return AIRichResponseLatexExpression;
        })();

        return AIRichResponseLatexMetadata;
    })();

    AICommonDeprecated.AIRichResponseDynamicMetadata = (function() {

        /**
         * Properties of a AIRichResponseDynamicMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseDynamicMetadata
         * @property {AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null} [type] AIRichResponseDynamicMetadata type
         * @property {number|Long|null} [version] AIRichResponseDynamicMetadata version
         * @property {string|null} [url] AIRichResponseDynamicMetadata url
         * @property {number|null} [loopCount] AIRichResponseDynamicMetadata loopCount
         */

        /**
         * Constructs a new AIRichResponseDynamicMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseDynamicMetadata.
         * @implements IAIRichResponseDynamicMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseDynamicMetadata=} [properties] Properties to set
         */
        function AIRichResponseDynamicMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseDynamicMetadata type.
         * @member {AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType|null|undefined} type
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @instance
         */
        AIRichResponseDynamicMetadata.prototype.type = null;

        /**
         * AIRichResponseDynamicMetadata version.
         * @member {number|Long|null|undefined} version
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @instance
         */
        AIRichResponseDynamicMetadata.prototype.version = null;

        /**
         * AIRichResponseDynamicMetadata url.
         * @member {string|null|undefined} url
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @instance
         */
        AIRichResponseDynamicMetadata.prototype.url = null;

        /**
         * AIRichResponseDynamicMetadata loopCount.
         * @member {number|null|undefined} loopCount
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @instance
         */
        AIRichResponseDynamicMetadata.prototype.loopCount = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_url", {
            get: $util.oneOfGetter($oneOfFields = ["url"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseDynamicMetadata.prototype, "_loopCount", {
            get: $util.oneOfGetter($oneOfFields = ["loopCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseDynamicMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseDynamicMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata} AIRichResponseDynamicMetadata instance
         */
        AIRichResponseDynamicMetadata.create = function create(properties) {
            return new AIRichResponseDynamicMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseDynamicMetadata} message AIRichResponseDynamicMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseDynamicMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.version);
            if (message.url != null && Object.hasOwnProperty.call(message, "url"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.url);
            if (message.loopCount != null && Object.hasOwnProperty.call(message, "loopCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.loopCount);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseDynamicMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseDynamicMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseDynamicMetadata} message AIRichResponseDynamicMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseDynamicMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata} AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseDynamicMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseDynamicMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.version = reader.uint64();
                        break;
                    }
                case 3: {
                        message.url = reader.string();
                        break;
                    }
                case 4: {
                        message.loopCount = reader.uint32();
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
         * Decodes a AIRichResponseDynamicMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata} AIRichResponseDynamicMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseDynamicMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseDynamicMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseDynamicMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                properties._type = 1;
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            }
            if (message.url != null && message.hasOwnProperty("url")) {
                properties._url = 1;
                if (!$util.isString(message.url))
                    return "url: string expected";
            }
            if (message.loopCount != null && message.hasOwnProperty("loopCount")) {
                properties._loopCount = 1;
                if (!$util.isInteger(message.loopCount))
                    return "loopCount: integer expected";
            }
            return null;
        };

        /**
         * Creates a AIRichResponseDynamicMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseDynamicMetadata} AIRichResponseDynamicMetadata
         */
        AIRichResponseDynamicMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseDynamicMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseDynamicMetadata();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE":
            case 1:
                message.type = 1;
                break;
            case "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF":
            case 2:
                message.type = 2;
                break;
            }
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            if (object.url != null)
                message.url = String(object.url);
            if (object.loopCount != null)
                message.loopCount = object.loopCount >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseDynamicMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseDynamicMetadata} message AIRichResponseDynamicMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseDynamicMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                object.type = options.enums === String ? $root.AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType[message.type] === undefined ? message.type : $root.AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType[message.type] : message.type;
                if (options.oneofs)
                    object._type = "type";
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                if (options.oneofs)
                    object._version = "version";
            }
            if (message.url != null && message.hasOwnProperty("url")) {
                object.url = message.url;
                if (options.oneofs)
                    object._url = "url";
            }
            if (message.loopCount != null && message.hasOwnProperty("loopCount")) {
                object.loopCount = message.loopCount;
                if (options.oneofs)
                    object._loopCount = "loopCount";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseDynamicMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseDynamicMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseDynamicMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseDynamicMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseDynamicMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseDynamicMetadata";
        };

        /**
         * AIRichResponseDynamicMetadataType enum.
         * @name AICommonDeprecated.AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType
         * @enum {number}
         * @property {number} AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN=0 AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN value
         * @property {number} AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE=1 AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE value
         * @property {number} AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF=2 AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF value
         */
        AIRichResponseDynamicMetadata.AIRichResponseDynamicMetadataType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_IMAGE"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_DYNAMIC_METADATA_TYPE_GIF"] = 2;
            return values;
        })();

        return AIRichResponseDynamicMetadata;
    })();

    AICommonDeprecated.AIRichResponseTableMetadata = (function() {

        /**
         * Properties of a AIRichResponseTableMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseTableMetadata
         * @property {Array.<AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow>|null} [rows] AIRichResponseTableMetadata rows
         * @property {string|null} [title] AIRichResponseTableMetadata title
         */

        /**
         * Constructs a new AIRichResponseTableMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseTableMetadata.
         * @implements IAIRichResponseTableMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseTableMetadata=} [properties] Properties to set
         */
        function AIRichResponseTableMetadata(properties) {
            this.rows = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseTableMetadata rows.
         * @member {Array.<AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow>} rows
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @instance
         */
        AIRichResponseTableMetadata.prototype.rows = $util.emptyArray;

        /**
         * AIRichResponseTableMetadata title.
         * @member {string|null|undefined} title
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @instance
         */
        AIRichResponseTableMetadata.prototype.title = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseTableMetadata.prototype, "_title", {
            get: $util.oneOfGetter($oneOfFields = ["title"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseTableMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseTableMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata} AIRichResponseTableMetadata instance
         */
        AIRichResponseTableMetadata.create = function create(properties) {
            return new AIRichResponseTableMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseTableMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseTableMetadata} message AIRichResponseTableMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseTableMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rows != null && message.rows.length)
                for (var i = 0; i < message.rows.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.encode(message.rows[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.title);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseTableMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseTableMetadata} message AIRichResponseTableMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseTableMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata} AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseTableMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseTableMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.rows && message.rows.length))
                            message.rows = [];
                        message.rows.push($root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.title = reader.string();
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
         * Decodes a AIRichResponseTableMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata} AIRichResponseTableMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseTableMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseTableMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseTableMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.rows != null && message.hasOwnProperty("rows")) {
                if (!Array.isArray(message.rows))
                    return "rows: array expected";
                for (var i = 0; i < message.rows.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify(message.rows[i]);
                    if (error)
                        return "rows." + error;
                }
            }
            if (message.title != null && message.hasOwnProperty("title")) {
                properties._title = 1;
                if (!$util.isString(message.title))
                    return "title: string expected";
            }
            return null;
        };

        /**
         * Creates a AIRichResponseTableMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseTableMetadata} AIRichResponseTableMetadata
         */
        AIRichResponseTableMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseTableMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseTableMetadata();
            if (object.rows) {
                if (!Array.isArray(object.rows))
                    throw TypeError(".AICommonDeprecated.AIRichResponseTableMetadata.rows: array expected");
                message.rows = [];
                for (var i = 0; i < object.rows.length; ++i) {
                    if (typeof object.rows[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseTableMetadata.rows: object expected");
                    message.rows[i] = $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.fromObject(object.rows[i]);
                }
            }
            if (object.title != null)
                message.title = String(object.title);
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseTableMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseTableMetadata} message AIRichResponseTableMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseTableMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.rows = [];
            if (message.rows && message.rows.length) {
                object.rows = [];
                for (var j = 0; j < message.rows.length; ++j)
                    object.rows[j] = $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.toObject(message.rows[j], options);
            }
            if (message.title != null && message.hasOwnProperty("title")) {
                object.title = message.title;
                if (options.oneofs)
                    object._title = "title";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseTableMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseTableMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseTableMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseTableMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseTableMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseTableMetadata";
        };

        AIRichResponseTableMetadata.AIRichResponseTableRow = (function() {

            /**
             * Properties of a AIRichResponseTableRow.
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata
             * @interface IAIRichResponseTableRow
             * @property {Array.<string>|null} [items] AIRichResponseTableRow items
             * @property {boolean|null} [isHeading] AIRichResponseTableRow isHeading
             */

            /**
             * Constructs a new AIRichResponseTableRow.
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata
             * @classdesc Represents a AIRichResponseTableRow.
             * @implements IAIRichResponseTableRow
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow=} [properties] Properties to set
             */
            function AIRichResponseTableRow(properties) {
                this.items = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseTableRow items.
             * @member {Array.<string>} items
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @instance
             */
            AIRichResponseTableRow.prototype.items = $util.emptyArray;

            /**
             * AIRichResponseTableRow isHeading.
             * @member {boolean|null|undefined} isHeading
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @instance
             */
            AIRichResponseTableRow.prototype.isHeading = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseTableRow.prototype, "_isHeading", {
                get: $util.oneOfGetter($oneOfFields = ["isHeading"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseTableRow instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow} AIRichResponseTableRow instance
             */
            AIRichResponseTableRow.create = function create(properties) {
                return new AIRichResponseTableRow(properties);
            };

            /**
             * Encodes the specified AIRichResponseTableRow message. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow} message AIRichResponseTableRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseTableRow.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.items != null && message.items.length)
                    for (var i = 0; i < message.items.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.items[i]);
                if (message.isHeading != null && Object.hasOwnProperty.call(message, "isHeading"))
                    writer.uint32(/* id 2, wireType 0 =*/16).bool(message.isHeading);
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseTableRow message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {AICommonDeprecated.AIRichResponseTableMetadata.IAIRichResponseTableRow} message AIRichResponseTableRow message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseTableRow.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow} AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseTableRow.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            if (!(message.items && message.items.length))
                                message.items = [];
                            message.items.push(reader.string());
                            break;
                        }
                    case 2: {
                            message.isHeading = reader.bool();
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
             * Decodes a AIRichResponseTableRow message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow} AIRichResponseTableRow
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseTableRow.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseTableRow message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseTableRow.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (var i = 0; i < message.items.length; ++i)
                        if (!$util.isString(message.items[i]))
                            return "items: string[] expected";
                }
                if (message.isHeading != null && message.hasOwnProperty("isHeading")) {
                    properties._isHeading = 1;
                    if (typeof message.isHeading !== "boolean")
                        return "isHeading: boolean expected";
                }
                return null;
            };

            /**
             * Creates a AIRichResponseTableRow message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow} AIRichResponseTableRow
             */
            AIRichResponseTableRow.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow.items: array expected");
                    message.items = [];
                    for (var i = 0; i < object.items.length; ++i)
                        message.items[i] = String(object.items[i]);
                }
                if (object.isHeading != null)
                    message.isHeading = Boolean(object.isHeading);
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseTableRow message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow} message AIRichResponseTableRow
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseTableRow.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.items = [];
                if (message.items && message.items.length) {
                    object.items = [];
                    for (var j = 0; j < message.items.length; ++j)
                        object.items[j] = message.items[j];
                }
                if (message.isHeading != null && message.hasOwnProperty("isHeading")) {
                    object.isHeading = message.isHeading;
                    if (options.oneofs)
                        object._isHeading = "isHeading";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseTableRow to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseTableRow.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseTableRow
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseTableRow.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseTableMetadata.AIRichResponseTableRow";
            };

            return AIRichResponseTableRow;
        })();

        return AIRichResponseTableMetadata;
    })();

    AICommonDeprecated.AIRichResponseCodeMetadata = (function() {

        /**
         * Properties of a AIRichResponseCodeMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseCodeMetadata
         * @property {string|null} [codeLanguage] AIRichResponseCodeMetadata codeLanguage
         * @property {Array.<AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock>|null} [codeBlocks] AIRichResponseCodeMetadata codeBlocks
         */

        /**
         * Constructs a new AIRichResponseCodeMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseCodeMetadata.
         * @implements IAIRichResponseCodeMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseCodeMetadata=} [properties] Properties to set
         */
        function AIRichResponseCodeMetadata(properties) {
            this.codeBlocks = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseCodeMetadata codeLanguage.
         * @member {string|null|undefined} codeLanguage
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @instance
         */
        AIRichResponseCodeMetadata.prototype.codeLanguage = null;

        /**
         * AIRichResponseCodeMetadata codeBlocks.
         * @member {Array.<AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock>} codeBlocks
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @instance
         */
        AIRichResponseCodeMetadata.prototype.codeBlocks = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseCodeMetadata.prototype, "_codeLanguage", {
            get: $util.oneOfGetter($oneOfFields = ["codeLanguage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseCodeMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseCodeMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata} AIRichResponseCodeMetadata instance
         */
        AIRichResponseCodeMetadata.create = function create(properties) {
            return new AIRichResponseCodeMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseCodeMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseCodeMetadata} message AIRichResponseCodeMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseCodeMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.codeLanguage != null && Object.hasOwnProperty.call(message, "codeLanguage"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.codeLanguage);
            if (message.codeBlocks != null && message.codeBlocks.length)
                for (var i = 0; i < message.codeBlocks.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.encode(message.codeBlocks[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseCodeMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseCodeMetadata} message AIRichResponseCodeMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseCodeMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata} AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseCodeMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseCodeMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.codeLanguage = reader.string();
                        break;
                    }
                case 2: {
                        if (!(message.codeBlocks && message.codeBlocks.length))
                            message.codeBlocks = [];
                        message.codeBlocks.push($root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.decode(reader, reader.uint32()));
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
         * Decodes a AIRichResponseCodeMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata} AIRichResponseCodeMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseCodeMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseCodeMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseCodeMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.codeLanguage != null && message.hasOwnProperty("codeLanguage")) {
                properties._codeLanguage = 1;
                if (!$util.isString(message.codeLanguage))
                    return "codeLanguage: string expected";
            }
            if (message.codeBlocks != null && message.hasOwnProperty("codeBlocks")) {
                if (!Array.isArray(message.codeBlocks))
                    return "codeBlocks: array expected";
                for (var i = 0; i < message.codeBlocks.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify(message.codeBlocks[i]);
                    if (error)
                        return "codeBlocks." + error;
                }
            }
            return null;
        };

        /**
         * Creates a AIRichResponseCodeMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseCodeMetadata} AIRichResponseCodeMetadata
         */
        AIRichResponseCodeMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseCodeMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseCodeMetadata();
            if (object.codeLanguage != null)
                message.codeLanguage = String(object.codeLanguage);
            if (object.codeBlocks) {
                if (!Array.isArray(object.codeBlocks))
                    throw TypeError(".AICommonDeprecated.AIRichResponseCodeMetadata.codeBlocks: array expected");
                message.codeBlocks = [];
                for (var i = 0; i < object.codeBlocks.length; ++i) {
                    if (typeof object.codeBlocks[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseCodeMetadata.codeBlocks: object expected");
                    message.codeBlocks[i] = $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.fromObject(object.codeBlocks[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseCodeMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseCodeMetadata} message AIRichResponseCodeMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseCodeMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.codeBlocks = [];
            if (message.codeLanguage != null && message.hasOwnProperty("codeLanguage")) {
                object.codeLanguage = message.codeLanguage;
                if (options.oneofs)
                    object._codeLanguage = "codeLanguage";
            }
            if (message.codeBlocks && message.codeBlocks.length) {
                object.codeBlocks = [];
                for (var j = 0; j < message.codeBlocks.length; ++j)
                    object.codeBlocks[j] = $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.toObject(message.codeBlocks[j], options);
            }
            return object;
        };

        /**
         * Converts this AIRichResponseCodeMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseCodeMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseCodeMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseCodeMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseCodeMetadata";
        };

        AIRichResponseCodeMetadata.AIRichResponseCodeBlock = (function() {

            /**
             * Properties of a AIRichResponseCodeBlock.
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
             * @interface IAIRichResponseCodeBlock
             * @property {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null} [highlightType] AIRichResponseCodeBlock highlightType
             * @property {string|null} [codeContent] AIRichResponseCodeBlock codeContent
             */

            /**
             * Constructs a new AIRichResponseCodeBlock.
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata
             * @classdesc Represents a AIRichResponseCodeBlock.
             * @implements IAIRichResponseCodeBlock
             * @constructor
             * @param {AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock=} [properties] Properties to set
             */
            function AIRichResponseCodeBlock(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AIRichResponseCodeBlock highlightType.
             * @member {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType|null|undefined} highlightType
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @instance
             */
            AIRichResponseCodeBlock.prototype.highlightType = null;

            /**
             * AIRichResponseCodeBlock codeContent.
             * @member {string|null|undefined} codeContent
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @instance
             */
            AIRichResponseCodeBlock.prototype.codeContent = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseCodeBlock.prototype, "_highlightType", {
                get: $util.oneOfGetter($oneOfFields = ["highlightType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AIRichResponseCodeBlock.prototype, "_codeContent", {
                get: $util.oneOfGetter($oneOfFields = ["codeContent"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AIRichResponseCodeBlock instance using the specified properties.
             * @function create
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock=} [properties] Properties to set
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock} AIRichResponseCodeBlock instance
             */
            AIRichResponseCodeBlock.create = function create(properties) {
                return new AIRichResponseCodeBlock(properties);
            };

            /**
             * Encodes the specified AIRichResponseCodeBlock message. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @function encode
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock} message AIRichResponseCodeBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseCodeBlock.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.highlightType != null && Object.hasOwnProperty.call(message, "highlightType"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.highlightType);
                if (message.codeContent != null && Object.hasOwnProperty.call(message, "codeContent"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.codeContent);
                return writer;
            };

            /**
             * Encodes the specified AIRichResponseCodeBlock message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock.verify|verify} messages.
             * @function encodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {AICommonDeprecated.AIRichResponseCodeMetadata.IAIRichResponseCodeBlock} message AIRichResponseCodeBlock message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AIRichResponseCodeBlock.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer.
             * @function decode
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock} AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseCodeBlock.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.highlightType = reader.int32();
                            break;
                        }
                    case 2: {
                            message.codeContent = reader.string();
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
             * Decodes a AIRichResponseCodeBlock message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock} AIRichResponseCodeBlock
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AIRichResponseCodeBlock.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a AIRichResponseCodeBlock message.
             * @function verify
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AIRichResponseCodeBlock.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.highlightType != null && message.hasOwnProperty("highlightType")) {
                    properties._highlightType = 1;
                    switch (message.highlightType) {
                    default:
                        return "highlightType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                }
                if (message.codeContent != null && message.hasOwnProperty("codeContent")) {
                    properties._codeContent = 1;
                    if (!$util.isString(message.codeContent))
                        return "codeContent: string expected";
                }
                return null;
            };

            /**
             * Creates a AIRichResponseCodeBlock message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock} AIRichResponseCodeBlock
             */
            AIRichResponseCodeBlock.fromObject = function fromObject(object) {
                if (object instanceof $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock)
                    return object;
                var message = new $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock();
                switch (object.highlightType) {
                default:
                    if (typeof object.highlightType === "number") {
                        message.highlightType = object.highlightType;
                        break;
                    }
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT":
                case 0:
                    message.highlightType = 0;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD":
                case 1:
                    message.highlightType = 1;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD":
                case 2:
                    message.highlightType = 2;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING":
                case 3:
                    message.highlightType = 3;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER":
                case 4:
                    message.highlightType = 4;
                    break;
                case "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT":
                case 5:
                    message.highlightType = 5;
                    break;
                }
                if (object.codeContent != null)
                    message.codeContent = String(object.codeContent);
                return message;
            };

            /**
             * Creates a plain object from a AIRichResponseCodeBlock message. Also converts values to other types if specified.
             * @function toObject
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock} message AIRichResponseCodeBlock
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AIRichResponseCodeBlock.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.highlightType != null && message.hasOwnProperty("highlightType")) {
                    object.highlightType = options.enums === String ? $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType[message.highlightType] === undefined ? message.highlightType : $root.AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType[message.highlightType] : message.highlightType;
                    if (options.oneofs)
                        object._highlightType = "highlightType";
                }
                if (message.codeContent != null && message.hasOwnProperty("codeContent")) {
                    object.codeContent = message.codeContent;
                    if (options.oneofs)
                        object._codeContent = "codeContent";
                }
                return object;
            };

            /**
             * Converts this AIRichResponseCodeBlock to JSON.
             * @function toJSON
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AIRichResponseCodeBlock.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AIRichResponseCodeBlock
             * @function getTypeUrl
             * @memberof AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AIRichResponseCodeBlock.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeBlock";
            };

            return AIRichResponseCodeBlock;
        })();

        /**
         * AIRichResponseCodeHighlightType enum.
         * @name AICommonDeprecated.AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType
         * @enum {number}
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT=0 AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT value
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD=1 AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD value
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD=2 AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD value
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING=3 AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING value
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER=4 AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER value
         * @property {number} AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT=5 AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT value
         */
        AIRichResponseCodeMetadata.AIRichResponseCodeHighlightType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_DEFAULT"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_KEYWORD"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_METHOD"] = 2;
            values[valuesById[3] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_STRING"] = 3;
            values[valuesById[4] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_NUMBER"] = 4;
            values[valuesById[5] = "AI_RICH_RESPONSE_CODE_HIGHLIGHT_COMMENT"] = 5;
            return values;
        })();

        return AIRichResponseCodeMetadata;
    })();

    AICommonDeprecated.AIRichResponseInlineImageMetadata = (function() {

        /**
         * Properties of a AIRichResponseInlineImageMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseInlineImageMetadata
         * @property {AICommonDeprecated.IAIRichResponseImageURL|null} [imageUrl] AIRichResponseInlineImageMetadata imageUrl
         * @property {string|null} [imageText] AIRichResponseInlineImageMetadata imageText
         * @property {AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null} [alignment] AIRichResponseInlineImageMetadata alignment
         * @property {string|null} [tapLinkUrl] AIRichResponseInlineImageMetadata tapLinkUrl
         */

        /**
         * Constructs a new AIRichResponseInlineImageMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseInlineImageMetadata.
         * @implements IAIRichResponseInlineImageMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseInlineImageMetadata=} [properties] Properties to set
         */
        function AIRichResponseInlineImageMetadata(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseInlineImageMetadata imageUrl.
         * @member {AICommonDeprecated.IAIRichResponseImageURL|null|undefined} imageUrl
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @instance
         */
        AIRichResponseInlineImageMetadata.prototype.imageUrl = null;

        /**
         * AIRichResponseInlineImageMetadata imageText.
         * @member {string|null|undefined} imageText
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @instance
         */
        AIRichResponseInlineImageMetadata.prototype.imageText = null;

        /**
         * AIRichResponseInlineImageMetadata alignment.
         * @member {AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment|null|undefined} alignment
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @instance
         */
        AIRichResponseInlineImageMetadata.prototype.alignment = null;

        /**
         * AIRichResponseInlineImageMetadata tapLinkUrl.
         * @member {string|null|undefined} tapLinkUrl
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @instance
         */
        AIRichResponseInlineImageMetadata.prototype.tapLinkUrl = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_imageUrl", {
            get: $util.oneOfGetter($oneOfFields = ["imageUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_imageText", {
            get: $util.oneOfGetter($oneOfFields = ["imageText"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_alignment", {
            get: $util.oneOfGetter($oneOfFields = ["alignment"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseInlineImageMetadata.prototype, "_tapLinkUrl", {
            get: $util.oneOfGetter($oneOfFields = ["tapLinkUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseInlineImageMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseInlineImageMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata} AIRichResponseInlineImageMetadata instance
         */
        AIRichResponseInlineImageMetadata.create = function create(properties) {
            return new AIRichResponseInlineImageMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseInlineImageMetadata} message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseInlineImageMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imageUrl != null && Object.hasOwnProperty.call(message, "imageUrl"))
                $root.AICommonDeprecated.AIRichResponseImageURL.encode(message.imageUrl, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.imageText != null && Object.hasOwnProperty.call(message, "imageText"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.imageText);
            if (message.alignment != null && Object.hasOwnProperty.call(message, "alignment"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.alignment);
            if (message.tapLinkUrl != null && Object.hasOwnProperty.call(message, "tapLinkUrl"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.tapLinkUrl);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseInlineImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseInlineImageMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseInlineImageMetadata} message AIRichResponseInlineImageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseInlineImageMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata} AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseInlineImageMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseInlineImageMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.imageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.imageText = reader.string();
                        break;
                    }
                case 3: {
                        message.alignment = reader.int32();
                        break;
                    }
                case 4: {
                        message.tapLinkUrl = reader.string();
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
         * Decodes a AIRichResponseInlineImageMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata} AIRichResponseInlineImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseInlineImageMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseInlineImageMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseInlineImageMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl")) {
                properties._imageUrl = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseImageURL.verify(message.imageUrl);
                    if (error)
                        return "imageUrl." + error;
                }
            }
            if (message.imageText != null && message.hasOwnProperty("imageText")) {
                properties._imageText = 1;
                if (!$util.isString(message.imageText))
                    return "imageText: string expected";
            }
            if (message.alignment != null && message.hasOwnProperty("alignment")) {
                properties._alignment = 1;
                switch (message.alignment) {
                default:
                    return "alignment: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.tapLinkUrl != null && message.hasOwnProperty("tapLinkUrl")) {
                properties._tapLinkUrl = 1;
                if (!$util.isString(message.tapLinkUrl))
                    return "tapLinkUrl: string expected";
            }
            return null;
        };

        /**
         * Creates a AIRichResponseInlineImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseInlineImageMetadata} AIRichResponseInlineImageMetadata
         */
        AIRichResponseInlineImageMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseInlineImageMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseInlineImageMetadata();
            if (object.imageUrl != null) {
                if (typeof object.imageUrl !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseInlineImageMetadata.imageUrl: object expected");
                message.imageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.fromObject(object.imageUrl);
            }
            if (object.imageText != null)
                message.imageText = String(object.imageText);
            switch (object.alignment) {
            default:
                if (typeof object.alignment === "number") {
                    message.alignment = object.alignment;
                    break;
                }
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED":
            case 0:
                message.alignment = 0;
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED":
            case 1:
                message.alignment = 1;
                break;
            case "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED":
            case 2:
                message.alignment = 2;
                break;
            }
            if (object.tapLinkUrl != null)
                message.tapLinkUrl = String(object.tapLinkUrl);
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseInlineImageMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseInlineImageMetadata} message AIRichResponseInlineImageMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseInlineImageMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.imageUrl != null && message.hasOwnProperty("imageUrl")) {
                object.imageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.toObject(message.imageUrl, options);
                if (options.oneofs)
                    object._imageUrl = "imageUrl";
            }
            if (message.imageText != null && message.hasOwnProperty("imageText")) {
                object.imageText = message.imageText;
                if (options.oneofs)
                    object._imageText = "imageText";
            }
            if (message.alignment != null && message.hasOwnProperty("alignment")) {
                object.alignment = options.enums === String ? $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment[message.alignment] === undefined ? message.alignment : $root.AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment[message.alignment] : message.alignment;
                if (options.oneofs)
                    object._alignment = "alignment";
            }
            if (message.tapLinkUrl != null && message.hasOwnProperty("tapLinkUrl")) {
                object.tapLinkUrl = message.tapLinkUrl;
                if (options.oneofs)
                    object._tapLinkUrl = "tapLinkUrl";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseInlineImageMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseInlineImageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseInlineImageMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseInlineImageMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseInlineImageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseInlineImageMetadata";
        };

        /**
         * AIRichResponseImageAlignment enum.
         * @name AICommonDeprecated.AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment
         * @enum {number}
         * @property {number} AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED=0 AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED value
         * @property {number} AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED=1 AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED value
         * @property {number} AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED=2 AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED value
         */
        AIRichResponseInlineImageMetadata.AIRichResponseImageAlignment = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_LEADING_ALIGNED"] = 0;
            values[valuesById[1] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_TRAILING_ALIGNED"] = 1;
            values[valuesById[2] = "AI_RICH_RESPONSE_IMAGE_LAYOUT_CENTER_ALIGNED"] = 2;
            return values;
        })();

        return AIRichResponseInlineImageMetadata;
    })();

    AICommonDeprecated.AIRichResponseGridImageMetadata = (function() {

        /**
         * Properties of a AIRichResponseGridImageMetadata.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseGridImageMetadata
         * @property {AICommonDeprecated.IAIRichResponseImageURL|null} [gridImageUrl] AIRichResponseGridImageMetadata gridImageUrl
         * @property {Array.<AICommonDeprecated.IAIRichResponseImageURL>|null} [imageUrls] AIRichResponseGridImageMetadata imageUrls
         */

        /**
         * Constructs a new AIRichResponseGridImageMetadata.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseGridImageMetadata.
         * @implements IAIRichResponseGridImageMetadata
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseGridImageMetadata=} [properties] Properties to set
         */
        function AIRichResponseGridImageMetadata(properties) {
            this.imageUrls = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseGridImageMetadata gridImageUrl.
         * @member {AICommonDeprecated.IAIRichResponseImageURL|null|undefined} gridImageUrl
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @instance
         */
        AIRichResponseGridImageMetadata.prototype.gridImageUrl = null;

        /**
         * AIRichResponseGridImageMetadata imageUrls.
         * @member {Array.<AICommonDeprecated.IAIRichResponseImageURL>} imageUrls
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @instance
         */
        AIRichResponseGridImageMetadata.prototype.imageUrls = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseGridImageMetadata.prototype, "_gridImageUrl", {
            get: $util.oneOfGetter($oneOfFields = ["gridImageUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseGridImageMetadata instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseGridImageMetadata=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata} AIRichResponseGridImageMetadata instance
         */
        AIRichResponseGridImageMetadata.create = function create(properties) {
            return new AIRichResponseGridImageMetadata(properties);
        };

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseGridImageMetadata} message AIRichResponseGridImageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseGridImageMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.gridImageUrl != null && Object.hasOwnProperty.call(message, "gridImageUrl"))
                $root.AICommonDeprecated.AIRichResponseImageURL.encode(message.gridImageUrl, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.imageUrls != null && message.imageUrls.length)
                for (var i = 0; i < message.imageUrls.length; ++i)
                    $root.AICommonDeprecated.AIRichResponseImageURL.encode(message.imageUrls[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseGridImageMetadata message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseGridImageMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {AICommonDeprecated.IAIRichResponseGridImageMetadata} message AIRichResponseGridImageMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseGridImageMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata} AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseGridImageMetadata.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseGridImageMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.gridImageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.imageUrls && message.imageUrls.length))
                            message.imageUrls = [];
                        message.imageUrls.push($root.AICommonDeprecated.AIRichResponseImageURL.decode(reader, reader.uint32()));
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
         * Decodes a AIRichResponseGridImageMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata} AIRichResponseGridImageMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseGridImageMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseGridImageMetadata message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseGridImageMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.gridImageUrl != null && message.hasOwnProperty("gridImageUrl")) {
                properties._gridImageUrl = 1;
                {
                    var error = $root.AICommonDeprecated.AIRichResponseImageURL.verify(message.gridImageUrl);
                    if (error)
                        return "gridImageUrl." + error;
                }
            }
            if (message.imageUrls != null && message.hasOwnProperty("imageUrls")) {
                if (!Array.isArray(message.imageUrls))
                    return "imageUrls: array expected";
                for (var i = 0; i < message.imageUrls.length; ++i) {
                    var error = $root.AICommonDeprecated.AIRichResponseImageURL.verify(message.imageUrls[i]);
                    if (error)
                        return "imageUrls." + error;
                }
            }
            return null;
        };

        /**
         * Creates a AIRichResponseGridImageMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseGridImageMetadata} AIRichResponseGridImageMetadata
         */
        AIRichResponseGridImageMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseGridImageMetadata)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseGridImageMetadata();
            if (object.gridImageUrl != null) {
                if (typeof object.gridImageUrl !== "object")
                    throw TypeError(".AICommonDeprecated.AIRichResponseGridImageMetadata.gridImageUrl: object expected");
                message.gridImageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.fromObject(object.gridImageUrl);
            }
            if (object.imageUrls) {
                if (!Array.isArray(object.imageUrls))
                    throw TypeError(".AICommonDeprecated.AIRichResponseGridImageMetadata.imageUrls: array expected");
                message.imageUrls = [];
                for (var i = 0; i < object.imageUrls.length; ++i) {
                    if (typeof object.imageUrls[i] !== "object")
                        throw TypeError(".AICommonDeprecated.AIRichResponseGridImageMetadata.imageUrls: object expected");
                    message.imageUrls[i] = $root.AICommonDeprecated.AIRichResponseImageURL.fromObject(object.imageUrls[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseGridImageMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {AICommonDeprecated.AIRichResponseGridImageMetadata} message AIRichResponseGridImageMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseGridImageMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.imageUrls = [];
            if (message.gridImageUrl != null && message.hasOwnProperty("gridImageUrl")) {
                object.gridImageUrl = $root.AICommonDeprecated.AIRichResponseImageURL.toObject(message.gridImageUrl, options);
                if (options.oneofs)
                    object._gridImageUrl = "gridImageUrl";
            }
            if (message.imageUrls && message.imageUrls.length) {
                object.imageUrls = [];
                for (var j = 0; j < message.imageUrls.length; ++j)
                    object.imageUrls[j] = $root.AICommonDeprecated.AIRichResponseImageURL.toObject(message.imageUrls[j], options);
            }
            return object;
        };

        /**
         * Converts this AIRichResponseGridImageMetadata to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseGridImageMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseGridImageMetadata
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseGridImageMetadata
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseGridImageMetadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseGridImageMetadata";
        };

        return AIRichResponseGridImageMetadata;
    })();

    AICommonDeprecated.AIRichResponseImageURL = (function() {

        /**
         * Properties of a AIRichResponseImageURL.
         * @memberof AICommonDeprecated
         * @interface IAIRichResponseImageURL
         * @property {string|null} [imagePreviewUrl] AIRichResponseImageURL imagePreviewUrl
         * @property {string|null} [imageHighResUrl] AIRichResponseImageURL imageHighResUrl
         * @property {string|null} [sourceUrl] AIRichResponseImageURL sourceUrl
         */

        /**
         * Constructs a new AIRichResponseImageURL.
         * @memberof AICommonDeprecated
         * @classdesc Represents a AIRichResponseImageURL.
         * @implements IAIRichResponseImageURL
         * @constructor
         * @param {AICommonDeprecated.IAIRichResponseImageURL=} [properties] Properties to set
         */
        function AIRichResponseImageURL(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AIRichResponseImageURL imagePreviewUrl.
         * @member {string|null|undefined} imagePreviewUrl
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @instance
         */
        AIRichResponseImageURL.prototype.imagePreviewUrl = null;

        /**
         * AIRichResponseImageURL imageHighResUrl.
         * @member {string|null|undefined} imageHighResUrl
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @instance
         */
        AIRichResponseImageURL.prototype.imageHighResUrl = null;

        /**
         * AIRichResponseImageURL sourceUrl.
         * @member {string|null|undefined} sourceUrl
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @instance
         */
        AIRichResponseImageURL.prototype.sourceUrl = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_imagePreviewUrl", {
            get: $util.oneOfGetter($oneOfFields = ["imagePreviewUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_imageHighResUrl", {
            get: $util.oneOfGetter($oneOfFields = ["imageHighResUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(AIRichResponseImageURL.prototype, "_sourceUrl", {
            get: $util.oneOfGetter($oneOfFields = ["sourceUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new AIRichResponseImageURL instance using the specified properties.
         * @function create
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {AICommonDeprecated.IAIRichResponseImageURL=} [properties] Properties to set
         * @returns {AICommonDeprecated.AIRichResponseImageURL} AIRichResponseImageURL instance
         */
        AIRichResponseImageURL.create = function create(properties) {
            return new AIRichResponseImageURL(properties);
        };

        /**
         * Encodes the specified AIRichResponseImageURL message. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @function encode
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {AICommonDeprecated.IAIRichResponseImageURL} message AIRichResponseImageURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseImageURL.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.imagePreviewUrl != null && Object.hasOwnProperty.call(message, "imagePreviewUrl"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.imagePreviewUrl);
            if (message.imageHighResUrl != null && Object.hasOwnProperty.call(message, "imageHighResUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.imageHighResUrl);
            if (message.sourceUrl != null && Object.hasOwnProperty.call(message, "sourceUrl"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.sourceUrl);
            return writer;
        };

        /**
         * Encodes the specified AIRichResponseImageURL message, length delimited. Does not implicitly {@link AICommonDeprecated.AIRichResponseImageURL.verify|verify} messages.
         * @function encodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {AICommonDeprecated.IAIRichResponseImageURL} message AIRichResponseImageURL message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AIRichResponseImageURL.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer.
         * @function decode
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {AICommonDeprecated.AIRichResponseImageURL} AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseImageURL.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.AICommonDeprecated.AIRichResponseImageURL();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.imagePreviewUrl = reader.string();
                        break;
                    }
                case 2: {
                        message.imageHighResUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.sourceUrl = reader.string();
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
         * Decodes a AIRichResponseImageURL message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {AICommonDeprecated.AIRichResponseImageURL} AIRichResponseImageURL
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AIRichResponseImageURL.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a AIRichResponseImageURL message.
         * @function verify
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AIRichResponseImageURL.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.imagePreviewUrl != null && message.hasOwnProperty("imagePreviewUrl")) {
                properties._imagePreviewUrl = 1;
                if (!$util.isString(message.imagePreviewUrl))
                    return "imagePreviewUrl: string expected";
            }
            if (message.imageHighResUrl != null && message.hasOwnProperty("imageHighResUrl")) {
                properties._imageHighResUrl = 1;
                if (!$util.isString(message.imageHighResUrl))
                    return "imageHighResUrl: string expected";
            }
            if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                properties._sourceUrl = 1;
                if (!$util.isString(message.sourceUrl))
                    return "sourceUrl: string expected";
            }
            return null;
        };

        /**
         * Creates a AIRichResponseImageURL message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {AICommonDeprecated.AIRichResponseImageURL} AIRichResponseImageURL
         */
        AIRichResponseImageURL.fromObject = function fromObject(object) {
            if (object instanceof $root.AICommonDeprecated.AIRichResponseImageURL)
                return object;
            var message = new $root.AICommonDeprecated.AIRichResponseImageURL();
            if (object.imagePreviewUrl != null)
                message.imagePreviewUrl = String(object.imagePreviewUrl);
            if (object.imageHighResUrl != null)
                message.imageHighResUrl = String(object.imageHighResUrl);
            if (object.sourceUrl != null)
                message.sourceUrl = String(object.sourceUrl);
            return message;
        };

        /**
         * Creates a plain object from a AIRichResponseImageURL message. Also converts values to other types if specified.
         * @function toObject
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {AICommonDeprecated.AIRichResponseImageURL} message AIRichResponseImageURL
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AIRichResponseImageURL.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.imagePreviewUrl != null && message.hasOwnProperty("imagePreviewUrl")) {
                object.imagePreviewUrl = message.imagePreviewUrl;
                if (options.oneofs)
                    object._imagePreviewUrl = "imagePreviewUrl";
            }
            if (message.imageHighResUrl != null && message.hasOwnProperty("imageHighResUrl")) {
                object.imageHighResUrl = message.imageHighResUrl;
                if (options.oneofs)
                    object._imageHighResUrl = "imageHighResUrl";
            }
            if (message.sourceUrl != null && message.hasOwnProperty("sourceUrl")) {
                object.sourceUrl = message.sourceUrl;
                if (options.oneofs)
                    object._sourceUrl = "sourceUrl";
            }
            return object;
        };

        /**
         * Converts this AIRichResponseImageURL to JSON.
         * @function toJSON
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AIRichResponseImageURL.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for AIRichResponseImageURL
         * @function getTypeUrl
         * @memberof AICommonDeprecated.AIRichResponseImageURL
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AIRichResponseImageURL.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/AICommonDeprecated.AIRichResponseImageURL";
        };

        return AIRichResponseImageURL;
    })();

    /**
     * AIRichResponseSubMessageType enum.
     * @name AICommonDeprecated.AIRichResponseSubMessageType
     * @enum {number}
     * @property {number} AI_RICH_RESPONSE_UNKNOWN=0 AI_RICH_RESPONSE_UNKNOWN value
     * @property {number} AI_RICH_RESPONSE_GRID_IMAGE=1 AI_RICH_RESPONSE_GRID_IMAGE value
     * @property {number} AI_RICH_RESPONSE_TEXT=2 AI_RICH_RESPONSE_TEXT value
     * @property {number} AI_RICH_RESPONSE_INLINE_IMAGE=3 AI_RICH_RESPONSE_INLINE_IMAGE value
     * @property {number} AI_RICH_RESPONSE_TABLE=4 AI_RICH_RESPONSE_TABLE value
     * @property {number} AI_RICH_RESPONSE_CODE=5 AI_RICH_RESPONSE_CODE value
     * @property {number} AI_RICH_RESPONSE_DYNAMIC=6 AI_RICH_RESPONSE_DYNAMIC value
     * @property {number} AI_RICH_RESPONSE_MAP=7 AI_RICH_RESPONSE_MAP value
     * @property {number} AI_RICH_RESPONSE_LATEX=8 AI_RICH_RESPONSE_LATEX value
     * @property {number} AI_RICH_RESPONSE_CONTENT_ITEMS=9 AI_RICH_RESPONSE_CONTENT_ITEMS value
     */
    AICommonDeprecated.AIRichResponseSubMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_GRID_IMAGE"] = 1;
        values[valuesById[2] = "AI_RICH_RESPONSE_TEXT"] = 2;
        values[valuesById[3] = "AI_RICH_RESPONSE_INLINE_IMAGE"] = 3;
        values[valuesById[4] = "AI_RICH_RESPONSE_TABLE"] = 4;
        values[valuesById[5] = "AI_RICH_RESPONSE_CODE"] = 5;
        values[valuesById[6] = "AI_RICH_RESPONSE_DYNAMIC"] = 6;
        values[valuesById[7] = "AI_RICH_RESPONSE_MAP"] = 7;
        values[valuesById[8] = "AI_RICH_RESPONSE_LATEX"] = 8;
        values[valuesById[9] = "AI_RICH_RESPONSE_CONTENT_ITEMS"] = 9;
        return values;
    })();

    /**
     * AIRichResponseMessageType enum.
     * @name AICommonDeprecated.AIRichResponseMessageType
     * @enum {number}
     * @property {number} AI_RICH_RESPONSE_TYPE_UNKNOWN=0 AI_RICH_RESPONSE_TYPE_UNKNOWN value
     * @property {number} AI_RICH_RESPONSE_TYPE_STANDARD=1 AI_RICH_RESPONSE_TYPE_STANDARD value
     */
    AICommonDeprecated.AIRichResponseMessageType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "AI_RICH_RESPONSE_TYPE_UNKNOWN"] = 0;
        values[valuesById[1] = "AI_RICH_RESPONSE_TYPE_STANDARD"] = 1;
        return values;
    })();

    return AICommonDeprecated;
})();

$root.StatusAttributions = (function() {

    /**
     * Namespace StatusAttributions.
     * @exports StatusAttributions
     * @namespace
     */
    var StatusAttributions = {};

    StatusAttributions.StatusAttribution = (function() {

        /**
         * Properties of a StatusAttribution.
         * @memberof StatusAttributions
         * @interface IStatusAttribution
         * @property {StatusAttributions.StatusAttribution.Type|null} [type] StatusAttribution type
         * @property {string|null} [actionUrl] StatusAttribution actionUrl
         * @property {StatusAttributions.StatusAttribution.IStatusReshare|null} [statusReshare] StatusAttribution statusReshare
         * @property {StatusAttributions.StatusAttribution.IExternalShare|null} [externalShare] StatusAttribution externalShare
         * @property {StatusAttributions.StatusAttribution.IMusic|null} [music] StatusAttribution music
         * @property {StatusAttributions.StatusAttribution.IGroupStatus|null} [groupStatus] StatusAttribution groupStatus
         * @property {StatusAttributions.StatusAttribution.IRLAttribution|null} [rlAttribution] StatusAttribution rlAttribution
         * @property {StatusAttributions.StatusAttribution.IAiCreatedAttribution|null} [aiCreatedAttribution] StatusAttribution aiCreatedAttribution
         */

        /**
         * Constructs a new StatusAttribution.
         * @memberof StatusAttributions
         * @classdesc Represents a StatusAttribution.
         * @implements IStatusAttribution
         * @constructor
         * @param {StatusAttributions.IStatusAttribution=} [properties] Properties to set
         */
        function StatusAttribution(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StatusAttribution type.
         * @member {StatusAttributions.StatusAttribution.Type|null|undefined} type
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.type = null;

        /**
         * StatusAttribution actionUrl.
         * @member {string|null|undefined} actionUrl
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.actionUrl = null;

        /**
         * StatusAttribution statusReshare.
         * @member {StatusAttributions.StatusAttribution.IStatusReshare|null|undefined} statusReshare
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.statusReshare = null;

        /**
         * StatusAttribution externalShare.
         * @member {StatusAttributions.StatusAttribution.IExternalShare|null|undefined} externalShare
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.externalShare = null;

        /**
         * StatusAttribution music.
         * @member {StatusAttributions.StatusAttribution.IMusic|null|undefined} music
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.music = null;

        /**
         * StatusAttribution groupStatus.
         * @member {StatusAttributions.StatusAttribution.IGroupStatus|null|undefined} groupStatus
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.groupStatus = null;

        /**
         * StatusAttribution rlAttribution.
         * @member {StatusAttributions.StatusAttribution.IRLAttribution|null|undefined} rlAttribution
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.rlAttribution = null;

        /**
         * StatusAttribution aiCreatedAttribution.
         * @member {StatusAttributions.StatusAttribution.IAiCreatedAttribution|null|undefined} aiCreatedAttribution
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        StatusAttribution.prototype.aiCreatedAttribution = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusAttribution.prototype, "_type", {
            get: $util.oneOfGetter($oneOfFields = ["type"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(StatusAttribution.prototype, "_actionUrl", {
            get: $util.oneOfGetter($oneOfFields = ["actionUrl"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * StatusAttribution attributionData.
         * @member {"statusReshare"|"externalShare"|"music"|"groupStatus"|"rlAttribution"|"aiCreatedAttribution"|undefined} attributionData
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         */
        Object.defineProperty(StatusAttribution.prototype, "attributionData", {
            get: $util.oneOfGetter($oneOfFields = ["statusReshare", "externalShare", "music", "groupStatus", "rlAttribution", "aiCreatedAttribution"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new StatusAttribution instance using the specified properties.
         * @function create
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.IStatusAttribution=} [properties] Properties to set
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution instance
         */
        StatusAttribution.create = function create(properties) {
            return new StatusAttribution(properties);
        };

        /**
         * Encodes the specified StatusAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @function encode
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.IStatusAttribution} message StatusAttribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusAttribution.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && Object.hasOwnProperty.call(message, "type"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.type);
            if (message.actionUrl != null && Object.hasOwnProperty.call(message, "actionUrl"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.actionUrl);
            if (message.statusReshare != null && Object.hasOwnProperty.call(message, "statusReshare"))
                $root.StatusAttributions.StatusAttribution.StatusReshare.encode(message.statusReshare, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.externalShare != null && Object.hasOwnProperty.call(message, "externalShare"))
                $root.StatusAttributions.StatusAttribution.ExternalShare.encode(message.externalShare, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.music != null && Object.hasOwnProperty.call(message, "music"))
                $root.StatusAttributions.StatusAttribution.Music.encode(message.music, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.groupStatus != null && Object.hasOwnProperty.call(message, "groupStatus"))
                $root.StatusAttributions.StatusAttribution.GroupStatus.encode(message.groupStatus, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.rlAttribution != null && Object.hasOwnProperty.call(message, "rlAttribution"))
                $root.StatusAttributions.StatusAttribution.RLAttribution.encode(message.rlAttribution, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.aiCreatedAttribution != null && Object.hasOwnProperty.call(message, "aiCreatedAttribution"))
                $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.encode(message.aiCreatedAttribution, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified StatusAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.verify|verify} messages.
         * @function encodeDelimited
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.IStatusAttribution} message StatusAttribution message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StatusAttribution.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StatusAttribution message from the specified reader or buffer.
         * @function decode
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusAttribution.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.type = reader.int32();
                        break;
                    }
                case 2: {
                        message.actionUrl = reader.string();
                        break;
                    }
                case 3: {
                        message.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.music = $root.StatusAttributions.StatusAttribution.Music.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.decode(reader, reader.uint32());
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
         * Decodes a StatusAttribution message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StatusAttribution.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StatusAttribution message.
         * @function verify
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StatusAttribution.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                properties._type = 1;
                switch (message.type) {
                default:
                    return "type: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                case 10:
                    break;
                }
            }
            if (message.actionUrl != null && message.hasOwnProperty("actionUrl")) {
                properties._actionUrl = 1;
                if (!$util.isString(message.actionUrl))
                    return "actionUrl: string expected";
            }
            if (message.statusReshare != null && message.hasOwnProperty("statusReshare")) {
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.StatusReshare.verify(message.statusReshare);
                    if (error)
                        return "statusReshare." + error;
                }
            }
            if (message.externalShare != null && message.hasOwnProperty("externalShare")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.ExternalShare.verify(message.externalShare);
                    if (error)
                        return "externalShare." + error;
                }
            }
            if (message.music != null && message.hasOwnProperty("music")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.Music.verify(message.music);
                    if (error)
                        return "music." + error;
                }
            }
            if (message.groupStatus != null && message.hasOwnProperty("groupStatus")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.GroupStatus.verify(message.groupStatus);
                    if (error)
                        return "groupStatus." + error;
                }
            }
            if (message.rlAttribution != null && message.hasOwnProperty("rlAttribution")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.RLAttribution.verify(message.rlAttribution);
                    if (error)
                        return "rlAttribution." + error;
                }
            }
            if (message.aiCreatedAttribution != null && message.hasOwnProperty("aiCreatedAttribution")) {
                if (properties.attributionData === 1)
                    return "attributionData: multiple values";
                properties.attributionData = 1;
                {
                    var error = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.verify(message.aiCreatedAttribution);
                    if (error)
                        return "aiCreatedAttribution." + error;
                }
            }
            return null;
        };

        /**
         * Creates a StatusAttribution message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {StatusAttributions.StatusAttribution} StatusAttribution
         */
        StatusAttribution.fromObject = function fromObject(object) {
            if (object instanceof $root.StatusAttributions.StatusAttribution)
                return object;
            var message = new $root.StatusAttributions.StatusAttribution();
            switch (object.type) {
            default:
                if (typeof object.type === "number") {
                    message.type = object.type;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.type = 0;
                break;
            case "RESHARE":
            case 1:
                message.type = 1;
                break;
            case "EXTERNAL_SHARE":
            case 2:
                message.type = 2;
                break;
            case "MUSIC":
            case 3:
                message.type = 3;
                break;
            case "STATUS_MENTION":
            case 4:
                message.type = 4;
                break;
            case "GROUP_STATUS":
            case 5:
                message.type = 5;
                break;
            case "RL_ATTRIBUTION":
            case 6:
                message.type = 6;
                break;
            case "AI_CREATED":
            case 7:
                message.type = 7;
                break;
            case "LAYOUTS":
            case 8:
                message.type = 8;
                break;
            case "NEWSLETTER_STATUS":
            case 9:
                message.type = 9;
                break;
            case "STATUS_CLOSE_SHARING":
            case 10:
                message.type = 10;
                break;
            }
            if (object.actionUrl != null)
                message.actionUrl = String(object.actionUrl);
            if (object.statusReshare != null) {
                if (typeof object.statusReshare !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.statusReshare: object expected");
                message.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.fromObject(object.statusReshare);
            }
            if (object.externalShare != null) {
                if (typeof object.externalShare !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.externalShare: object expected");
                message.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.fromObject(object.externalShare);
            }
            if (object.music != null) {
                if (typeof object.music !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.music: object expected");
                message.music = $root.StatusAttributions.StatusAttribution.Music.fromObject(object.music);
            }
            if (object.groupStatus != null) {
                if (typeof object.groupStatus !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.groupStatus: object expected");
                message.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.fromObject(object.groupStatus);
            }
            if (object.rlAttribution != null) {
                if (typeof object.rlAttribution !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.rlAttribution: object expected");
                message.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.fromObject(object.rlAttribution);
            }
            if (object.aiCreatedAttribution != null) {
                if (typeof object.aiCreatedAttribution !== "object")
                    throw TypeError(".StatusAttributions.StatusAttribution.aiCreatedAttribution: object expected");
                message.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.fromObject(object.aiCreatedAttribution);
            }
            return message;
        };

        /**
         * Creates a plain object from a StatusAttribution message. Also converts values to other types if specified.
         * @function toObject
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {StatusAttributions.StatusAttribution} message StatusAttribution
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StatusAttribution.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.type != null && message.hasOwnProperty("type")) {
                object.type = options.enums === String ? $root.StatusAttributions.StatusAttribution.Type[message.type] === undefined ? message.type : $root.StatusAttributions.StatusAttribution.Type[message.type] : message.type;
                if (options.oneofs)
                    object._type = "type";
            }
            if (message.actionUrl != null && message.hasOwnProperty("actionUrl")) {
                object.actionUrl = message.actionUrl;
                if (options.oneofs)
                    object._actionUrl = "actionUrl";
            }
            if (message.statusReshare != null && message.hasOwnProperty("statusReshare")) {
                object.statusReshare = $root.StatusAttributions.StatusAttribution.StatusReshare.toObject(message.statusReshare, options);
                if (options.oneofs)
                    object.attributionData = "statusReshare";
            }
            if (message.externalShare != null && message.hasOwnProperty("externalShare")) {
                object.externalShare = $root.StatusAttributions.StatusAttribution.ExternalShare.toObject(message.externalShare, options);
                if (options.oneofs)
                    object.attributionData = "externalShare";
            }
            if (message.music != null && message.hasOwnProperty("music")) {
                object.music = $root.StatusAttributions.StatusAttribution.Music.toObject(message.music, options);
                if (options.oneofs)
                    object.attributionData = "music";
            }
            if (message.groupStatus != null && message.hasOwnProperty("groupStatus")) {
                object.groupStatus = $root.StatusAttributions.StatusAttribution.GroupStatus.toObject(message.groupStatus, options);
                if (options.oneofs)
                    object.attributionData = "groupStatus";
            }
            if (message.rlAttribution != null && message.hasOwnProperty("rlAttribution")) {
                object.rlAttribution = $root.StatusAttributions.StatusAttribution.RLAttribution.toObject(message.rlAttribution, options);
                if (options.oneofs)
                    object.attributionData = "rlAttribution";
            }
            if (message.aiCreatedAttribution != null && message.hasOwnProperty("aiCreatedAttribution")) {
                object.aiCreatedAttribution = $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.toObject(message.aiCreatedAttribution, options);
                if (options.oneofs)
                    object.attributionData = "aiCreatedAttribution";
            }
            return object;
        };

        /**
         * Converts this StatusAttribution to JSON.
         * @function toJSON
         * @memberof StatusAttributions.StatusAttribution
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StatusAttribution.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for StatusAttribution
         * @function getTypeUrl
         * @memberof StatusAttributions.StatusAttribution
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        StatusAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/StatusAttributions.StatusAttribution";
        };

        StatusAttribution.AiCreatedAttribution = (function() {

            /**
             * Properties of an AiCreatedAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IAiCreatedAttribution
             * @property {StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null} [source] AiCreatedAttribution source
             */

            /**
             * Constructs a new AiCreatedAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents an AiCreatedAttribution.
             * @implements IAiCreatedAttribution
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IAiCreatedAttribution=} [properties] Properties to set
             */
            function AiCreatedAttribution(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * AiCreatedAttribution source.
             * @member {StatusAttributions.StatusAttribution.AiCreatedAttribution.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @instance
             */
            AiCreatedAttribution.prototype.source = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(AiCreatedAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new AiCreatedAttribution instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IAiCreatedAttribution=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution instance
             */
            AiCreatedAttribution.create = function create(properties) {
                return new AiCreatedAttribution(properties);
            };

            /**
             * Encodes the specified AiCreatedAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IAiCreatedAttribution} message AiCreatedAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiCreatedAttribution.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                return writer;
            };

            /**
             * Encodes the specified AiCreatedAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.AiCreatedAttribution.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IAiCreatedAttribution} message AiCreatedAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            AiCreatedAttribution.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an AiCreatedAttribution message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiCreatedAttribution.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.source = reader.int32();
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
             * Decodes an AiCreatedAttribution message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            AiCreatedAttribution.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an AiCreatedAttribution message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            AiCreatedAttribution.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    properties._source = 1;
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 0:
                    case 1:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates an AiCreatedAttribution message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.AiCreatedAttribution} AiCreatedAttribution
             */
            AiCreatedAttribution.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.AiCreatedAttribution)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.AiCreatedAttribution();
                switch (object.source) {
                default:
                    if (typeof object.source === "number") {
                        message.source = object.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "STATUS_MIMICRY":
                case 1:
                    message.source = 1;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from an AiCreatedAttribution message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.AiCreatedAttribution} message AiCreatedAttribution
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            AiCreatedAttribution.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    object.source = options.enums === String ? $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[message.source] === undefined ? message.source : $root.StatusAttributions.StatusAttribution.AiCreatedAttribution.Source[message.source] : message.source;
                    if (options.oneofs)
                        object._source = "source";
                }
                return object;
            };

            /**
             * Converts this AiCreatedAttribution to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            AiCreatedAttribution.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for AiCreatedAttribution
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.AiCreatedAttribution
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            AiCreatedAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.AiCreatedAttribution";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.AiCreatedAttribution.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} STATUS_MIMICRY=1 STATUS_MIMICRY value
             */
            AiCreatedAttribution.Source = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "STATUS_MIMICRY"] = 1;
                return values;
            })();

            return AiCreatedAttribution;
        })();

        StatusAttribution.ExternalShare = (function() {

            /**
             * Properties of an ExternalShare.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IExternalShare
             * @property {string|null} [actionUrl] ExternalShare actionUrl
             * @property {StatusAttributions.StatusAttribution.ExternalShare.Source|null} [source] ExternalShare source
             * @property {number|null} [duration] ExternalShare duration
             * @property {string|null} [actionFallbackUrl] ExternalShare actionFallbackUrl
             */

            /**
             * Constructs a new ExternalShare.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents an ExternalShare.
             * @implements IExternalShare
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IExternalShare=} [properties] Properties to set
             */
            function ExternalShare(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ExternalShare actionUrl.
             * @member {string|null|undefined} actionUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.actionUrl = null;

            /**
             * ExternalShare source.
             * @member {StatusAttributions.StatusAttribution.ExternalShare.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.source = null;

            /**
             * ExternalShare duration.
             * @member {number|null|undefined} duration
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.duration = null;

            /**
             * ExternalShare actionFallbackUrl.
             * @member {string|null|undefined} actionFallbackUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             */
            ExternalShare.prototype.actionFallbackUrl = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_actionUrl", {
                get: $util.oneOfGetter($oneOfFields = ["actionUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_duration", {
                get: $util.oneOfGetter($oneOfFields = ["duration"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ExternalShare.prototype, "_actionFallbackUrl", {
                get: $util.oneOfGetter($oneOfFields = ["actionFallbackUrl"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ExternalShare instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.IExternalShare=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare instance
             */
            ExternalShare.create = function create(properties) {
                return new ExternalShare(properties);
            };

            /**
             * Encodes the specified ExternalShare message. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.IExternalShare} message ExternalShare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalShare.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.actionUrl != null && Object.hasOwnProperty.call(message, "actionUrl"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.actionUrl);
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.source);
                if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                    writer.uint32(/* id 3, wireType 0 =*/24).int32(message.duration);
                if (message.actionFallbackUrl != null && Object.hasOwnProperty.call(message, "actionFallbackUrl"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.actionFallbackUrl);
                return writer;
            };

            /**
             * Encodes the specified ExternalShare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.ExternalShare.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.IExternalShare} message ExternalShare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ExternalShare.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an ExternalShare message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalShare.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.ExternalShare();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.actionUrl = reader.string();
                            break;
                        }
                    case 2: {
                            message.source = reader.int32();
                            break;
                        }
                    case 3: {
                            message.duration = reader.int32();
                            break;
                        }
                    case 4: {
                            message.actionFallbackUrl = reader.string();
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
             * Decodes an ExternalShare message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ExternalShare.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an ExternalShare message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ExternalShare.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.actionUrl != null && message.hasOwnProperty("actionUrl")) {
                    properties._actionUrl = 1;
                    if (!$util.isString(message.actionUrl))
                        return "actionUrl: string expected";
                }
                if (message.source != null && message.hasOwnProperty("source")) {
                    properties._source = 1;
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 10:
                    case 11:
                        break;
                    }
                }
                if (message.duration != null && message.hasOwnProperty("duration")) {
                    properties._duration = 1;
                    if (!$util.isInteger(message.duration))
                        return "duration: integer expected";
                }
                if (message.actionFallbackUrl != null && message.hasOwnProperty("actionFallbackUrl")) {
                    properties._actionFallbackUrl = 1;
                    if (!$util.isString(message.actionFallbackUrl))
                        return "actionFallbackUrl: string expected";
                }
                return null;
            };

            /**
             * Creates an ExternalShare message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.ExternalShare} ExternalShare
             */
            ExternalShare.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.ExternalShare)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.ExternalShare();
                if (object.actionUrl != null)
                    message.actionUrl = String(object.actionUrl);
                switch (object.source) {
                default:
                    if (typeof object.source === "number") {
                        message.source = object.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "INSTAGRAM":
                case 1:
                    message.source = 1;
                    break;
                case "FACEBOOK":
                case 2:
                    message.source = 2;
                    break;
                case "MESSENGER":
                case 3:
                    message.source = 3;
                    break;
                case "SPOTIFY":
                case 4:
                    message.source = 4;
                    break;
                case "YOUTUBE":
                case 5:
                    message.source = 5;
                    break;
                case "PINTEREST":
                case 6:
                    message.source = 6;
                    break;
                case "THREADS":
                case 7:
                    message.source = 7;
                    break;
                case "APPLE_MUSIC":
                case 8:
                    message.source = 8;
                    break;
                case "SHARECHAT":
                case 9:
                    message.source = 9;
                    break;
                case "GOOGLE_PHOTOS":
                case 10:
                    message.source = 10;
                    break;
                case "SOUNDCLOUD":
                case 11:
                    message.source = 11;
                    break;
                }
                if (object.duration != null)
                    message.duration = object.duration | 0;
                if (object.actionFallbackUrl != null)
                    message.actionFallbackUrl = String(object.actionFallbackUrl);
                return message;
            };

            /**
             * Creates a plain object from an ExternalShare message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {StatusAttributions.StatusAttribution.ExternalShare} message ExternalShare
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ExternalShare.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.actionUrl != null && message.hasOwnProperty("actionUrl")) {
                    object.actionUrl = message.actionUrl;
                    if (options.oneofs)
                        object._actionUrl = "actionUrl";
                }
                if (message.source != null && message.hasOwnProperty("source")) {
                    object.source = options.enums === String ? $root.StatusAttributions.StatusAttribution.ExternalShare.Source[message.source] === undefined ? message.source : $root.StatusAttributions.StatusAttribution.ExternalShare.Source[message.source] : message.source;
                    if (options.oneofs)
                        object._source = "source";
                }
                if (message.duration != null && message.hasOwnProperty("duration")) {
                    object.duration = message.duration;
                    if (options.oneofs)
                        object._duration = "duration";
                }
                if (message.actionFallbackUrl != null && message.hasOwnProperty("actionFallbackUrl")) {
                    object.actionFallbackUrl = message.actionFallbackUrl;
                    if (options.oneofs)
                        object._actionFallbackUrl = "actionFallbackUrl";
                }
                return object;
            };

            /**
             * Converts this ExternalShare to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ExternalShare.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ExternalShare
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.ExternalShare
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ExternalShare.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.ExternalShare";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.ExternalShare.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} INSTAGRAM=1 INSTAGRAM value
             * @property {number} FACEBOOK=2 FACEBOOK value
             * @property {number} MESSENGER=3 MESSENGER value
             * @property {number} SPOTIFY=4 SPOTIFY value
             * @property {number} YOUTUBE=5 YOUTUBE value
             * @property {number} PINTEREST=6 PINTEREST value
             * @property {number} THREADS=7 THREADS value
             * @property {number} APPLE_MUSIC=8 APPLE_MUSIC value
             * @property {number} SHARECHAT=9 SHARECHAT value
             * @property {number} GOOGLE_PHOTOS=10 GOOGLE_PHOTOS value
             * @property {number} SOUNDCLOUD=11 SOUNDCLOUD value
             */
            ExternalShare.Source = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INSTAGRAM"] = 1;
                values[valuesById[2] = "FACEBOOK"] = 2;
                values[valuesById[3] = "MESSENGER"] = 3;
                values[valuesById[4] = "SPOTIFY"] = 4;
                values[valuesById[5] = "YOUTUBE"] = 5;
                values[valuesById[6] = "PINTEREST"] = 6;
                values[valuesById[7] = "THREADS"] = 7;
                values[valuesById[8] = "APPLE_MUSIC"] = 8;
                values[valuesById[9] = "SHARECHAT"] = 9;
                values[valuesById[10] = "GOOGLE_PHOTOS"] = 10;
                values[valuesById[11] = "SOUNDCLOUD"] = 11;
                return values;
            })();

            return ExternalShare;
        })();

        StatusAttribution.GroupStatus = (function() {

            /**
             * Properties of a GroupStatus.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IGroupStatus
             * @property {string|null} [authorJid] GroupStatus authorJid
             */

            /**
             * Constructs a new GroupStatus.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a GroupStatus.
             * @implements IGroupStatus
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IGroupStatus=} [properties] Properties to set
             */
            function GroupStatus(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * GroupStatus authorJid.
             * @member {string|null|undefined} authorJid
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @instance
             */
            GroupStatus.prototype.authorJid = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(GroupStatus.prototype, "_authorJid", {
                get: $util.oneOfGetter($oneOfFields = ["authorJid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new GroupStatus instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.IGroupStatus=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus instance
             */
            GroupStatus.create = function create(properties) {
                return new GroupStatus(properties);
            };

            /**
             * Encodes the specified GroupStatus message. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.IGroupStatus} message GroupStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupStatus.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.authorJid != null && Object.hasOwnProperty.call(message, "authorJid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorJid);
                return writer;
            };

            /**
             * Encodes the specified GroupStatus message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.GroupStatus.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.IGroupStatus} message GroupStatus message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            GroupStatus.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a GroupStatus message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupStatus.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.GroupStatus();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.authorJid = reader.string();
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
             * Decodes a GroupStatus message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            GroupStatus.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a GroupStatus message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            GroupStatus.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.authorJid != null && message.hasOwnProperty("authorJid")) {
                    properties._authorJid = 1;
                    if (!$util.isString(message.authorJid))
                        return "authorJid: string expected";
                }
                return null;
            };

            /**
             * Creates a GroupStatus message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.GroupStatus} GroupStatus
             */
            GroupStatus.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.GroupStatus)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.GroupStatus();
                if (object.authorJid != null)
                    message.authorJid = String(object.authorJid);
                return message;
            };

            /**
             * Creates a plain object from a GroupStatus message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {StatusAttributions.StatusAttribution.GroupStatus} message GroupStatus
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            GroupStatus.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.authorJid != null && message.hasOwnProperty("authorJid")) {
                    object.authorJid = message.authorJid;
                    if (options.oneofs)
                        object._authorJid = "authorJid";
                }
                return object;
            };

            /**
             * Converts this GroupStatus to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            GroupStatus.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for GroupStatus
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.GroupStatus
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            GroupStatus.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.GroupStatus";
            };

            return GroupStatus;
        })();

        StatusAttribution.Music = (function() {

            /**
             * Properties of a Music.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IMusic
             * @property {string|null} [authorName] Music authorName
             * @property {string|null} [songId] Music songId
             * @property {string|null} [title] Music title
             * @property {string|null} [author] Music author
             * @property {string|null} [artistAttribution] Music artistAttribution
             * @property {boolean|null} [isExplicit] Music isExplicit
             */

            /**
             * Constructs a new Music.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a Music.
             * @implements IMusic
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IMusic=} [properties] Properties to set
             */
            function Music(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Music authorName.
             * @member {string|null|undefined} authorName
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.authorName = null;

            /**
             * Music songId.
             * @member {string|null|undefined} songId
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.songId = null;

            /**
             * Music title.
             * @member {string|null|undefined} title
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.title = null;

            /**
             * Music author.
             * @member {string|null|undefined} author
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.author = null;

            /**
             * Music artistAttribution.
             * @member {string|null|undefined} artistAttribution
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.artistAttribution = null;

            /**
             * Music isExplicit.
             * @member {boolean|null|undefined} isExplicit
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             */
            Music.prototype.isExplicit = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_authorName", {
                get: $util.oneOfGetter($oneOfFields = ["authorName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_songId", {
                get: $util.oneOfGetter($oneOfFields = ["songId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_title", {
                get: $util.oneOfGetter($oneOfFields = ["title"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_author", {
                get: $util.oneOfGetter($oneOfFields = ["author"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_artistAttribution", {
                get: $util.oneOfGetter($oneOfFields = ["artistAttribution"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Music.prototype, "_isExplicit", {
                get: $util.oneOfGetter($oneOfFields = ["isExplicit"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Music instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.IMusic=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.Music} Music instance
             */
            Music.create = function create(properties) {
                return new Music(properties);
            };

            /**
             * Encodes the specified Music message. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.IMusic} message Music message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Music.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.authorName != null && Object.hasOwnProperty.call(message, "authorName"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.authorName);
                if (message.songId != null && Object.hasOwnProperty.call(message, "songId"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.songId);
                if (message.title != null && Object.hasOwnProperty.call(message, "title"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.title);
                if (message.author != null && Object.hasOwnProperty.call(message, "author"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.author);
                if (message.artistAttribution != null && Object.hasOwnProperty.call(message, "artistAttribution"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.artistAttribution);
                if (message.isExplicit != null && Object.hasOwnProperty.call(message, "isExplicit"))
                    writer.uint32(/* id 6, wireType 0 =*/48).bool(message.isExplicit);
                return writer;
            };

            /**
             * Encodes the specified Music message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.Music.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.IMusic} message Music message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Music.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Music message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.Music} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Music.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.Music();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.authorName = reader.string();
                            break;
                        }
                    case 2: {
                            message.songId = reader.string();
                            break;
                        }
                    case 3: {
                            message.title = reader.string();
                            break;
                        }
                    case 4: {
                            message.author = reader.string();
                            break;
                        }
                    case 5: {
                            message.artistAttribution = reader.string();
                            break;
                        }
                    case 6: {
                            message.isExplicit = reader.bool();
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
             * Decodes a Music message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.Music} Music
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Music.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Music message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Music.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.authorName != null && message.hasOwnProperty("authorName")) {
                    properties._authorName = 1;
                    if (!$util.isString(message.authorName))
                        return "authorName: string expected";
                }
                if (message.songId != null && message.hasOwnProperty("songId")) {
                    properties._songId = 1;
                    if (!$util.isString(message.songId))
                        return "songId: string expected";
                }
                if (message.title != null && message.hasOwnProperty("title")) {
                    properties._title = 1;
                    if (!$util.isString(message.title))
                        return "title: string expected";
                }
                if (message.author != null && message.hasOwnProperty("author")) {
                    properties._author = 1;
                    if (!$util.isString(message.author))
                        return "author: string expected";
                }
                if (message.artistAttribution != null && message.hasOwnProperty("artistAttribution")) {
                    properties._artistAttribution = 1;
                    if (!$util.isString(message.artistAttribution))
                        return "artistAttribution: string expected";
                }
                if (message.isExplicit != null && message.hasOwnProperty("isExplicit")) {
                    properties._isExplicit = 1;
                    if (typeof message.isExplicit !== "boolean")
                        return "isExplicit: boolean expected";
                }
                return null;
            };

            /**
             * Creates a Music message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.Music} Music
             */
            Music.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.Music)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.Music();
                if (object.authorName != null)
                    message.authorName = String(object.authorName);
                if (object.songId != null)
                    message.songId = String(object.songId);
                if (object.title != null)
                    message.title = String(object.title);
                if (object.author != null)
                    message.author = String(object.author);
                if (object.artistAttribution != null)
                    message.artistAttribution = String(object.artistAttribution);
                if (object.isExplicit != null)
                    message.isExplicit = Boolean(object.isExplicit);
                return message;
            };

            /**
             * Creates a plain object from a Music message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {StatusAttributions.StatusAttribution.Music} message Music
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Music.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.authorName != null && message.hasOwnProperty("authorName")) {
                    object.authorName = message.authorName;
                    if (options.oneofs)
                        object._authorName = "authorName";
                }
                if (message.songId != null && message.hasOwnProperty("songId")) {
                    object.songId = message.songId;
                    if (options.oneofs)
                        object._songId = "songId";
                }
                if (message.title != null && message.hasOwnProperty("title")) {
                    object.title = message.title;
                    if (options.oneofs)
                        object._title = "title";
                }
                if (message.author != null && message.hasOwnProperty("author")) {
                    object.author = message.author;
                    if (options.oneofs)
                        object._author = "author";
                }
                if (message.artistAttribution != null && message.hasOwnProperty("artistAttribution")) {
                    object.artistAttribution = message.artistAttribution;
                    if (options.oneofs)
                        object._artistAttribution = "artistAttribution";
                }
                if (message.isExplicit != null && message.hasOwnProperty("isExplicit")) {
                    object.isExplicit = message.isExplicit;
                    if (options.oneofs)
                        object._isExplicit = "isExplicit";
                }
                return object;
            };

            /**
             * Converts this Music to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.Music
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Music.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Music
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.Music
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Music.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.Music";
            };

            return Music;
        })();

        StatusAttribution.RLAttribution = (function() {

            /**
             * Properties of a RLAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IRLAttribution
             * @property {StatusAttributions.StatusAttribution.RLAttribution.Source|null} [source] RLAttribution source
             */

            /**
             * Constructs a new RLAttribution.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a RLAttribution.
             * @implements IRLAttribution
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IRLAttribution=} [properties] Properties to set
             */
            function RLAttribution(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * RLAttribution source.
             * @member {StatusAttributions.StatusAttribution.RLAttribution.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @instance
             */
            RLAttribution.prototype.source = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(RLAttribution.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new RLAttribution instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IRLAttribution=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution instance
             */
            RLAttribution.create = function create(properties) {
                return new RLAttribution(properties);
            };

            /**
             * Encodes the specified RLAttribution message. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IRLAttribution} message RLAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RLAttribution.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                return writer;
            };

            /**
             * Encodes the specified RLAttribution message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.RLAttribution.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.IRLAttribution} message RLAttribution message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            RLAttribution.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a RLAttribution message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RLAttribution.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.RLAttribution();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.source = reader.int32();
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
             * Decodes a RLAttribution message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            RLAttribution.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a RLAttribution message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            RLAttribution.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    properties._source = 1;
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                return null;
            };

            /**
             * Creates a RLAttribution message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.RLAttribution} RLAttribution
             */
            RLAttribution.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.RLAttribution)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.RLAttribution();
                switch (object.source) {
                default:
                    if (typeof object.source === "number") {
                        message.source = object.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "RAY_BAN_META_GLASSES":
                case 1:
                    message.source = 1;
                    break;
                case "OAKLEY_META_GLASSES":
                case 2:
                    message.source = 2;
                    break;
                case "HYPERNOVA_GLASSES":
                case 3:
                    message.source = 3;
                    break;
                }
                return message;
            };

            /**
             * Creates a plain object from a RLAttribution message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {StatusAttributions.StatusAttribution.RLAttribution} message RLAttribution
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            RLAttribution.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    object.source = options.enums === String ? $root.StatusAttributions.StatusAttribution.RLAttribution.Source[message.source] === undefined ? message.source : $root.StatusAttributions.StatusAttribution.RLAttribution.Source[message.source] : message.source;
                    if (options.oneofs)
                        object._source = "source";
                }
                return object;
            };

            /**
             * Converts this RLAttribution to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            RLAttribution.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for RLAttribution
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.RLAttribution
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            RLAttribution.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.RLAttribution";
            };

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.RLAttribution.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} RAY_BAN_META_GLASSES=1 RAY_BAN_META_GLASSES value
             * @property {number} OAKLEY_META_GLASSES=2 OAKLEY_META_GLASSES value
             * @property {number} HYPERNOVA_GLASSES=3 HYPERNOVA_GLASSES value
             */
            RLAttribution.Source = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "RAY_BAN_META_GLASSES"] = 1;
                values[valuesById[2] = "OAKLEY_META_GLASSES"] = 2;
                values[valuesById[3] = "HYPERNOVA_GLASSES"] = 3;
                return values;
            })();

            return RLAttribution;
        })();

        StatusAttribution.StatusReshare = (function() {

            /**
             * Properties of a StatusReshare.
             * @memberof StatusAttributions.StatusAttribution
             * @interface IStatusReshare
             * @property {StatusAttributions.StatusAttribution.StatusReshare.Source|null} [source] StatusReshare source
             * @property {StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null} [metadata] StatusReshare metadata
             */

            /**
             * Constructs a new StatusReshare.
             * @memberof StatusAttributions.StatusAttribution
             * @classdesc Represents a StatusReshare.
             * @implements IStatusReshare
             * @constructor
             * @param {StatusAttributions.StatusAttribution.IStatusReshare=} [properties] Properties to set
             */
            function StatusReshare(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * StatusReshare source.
             * @member {StatusAttributions.StatusAttribution.StatusReshare.Source|null|undefined} source
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             */
            StatusReshare.prototype.source = null;

            /**
             * StatusReshare metadata.
             * @member {StatusAttributions.StatusAttribution.StatusReshare.IMetadata|null|undefined} metadata
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             */
            StatusReshare.prototype.metadata = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StatusReshare.prototype, "_source", {
                get: $util.oneOfGetter($oneOfFields = ["source"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(StatusReshare.prototype, "_metadata", {
                get: $util.oneOfGetter($oneOfFields = ["metadata"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new StatusReshare instance using the specified properties.
             * @function create
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.IStatusReshare=} [properties] Properties to set
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare instance
             */
            StatusReshare.create = function create(properties) {
                return new StatusReshare(properties);
            };

            /**
             * Encodes the specified StatusReshare message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @function encode
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.IStatusReshare} message StatusReshare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusReshare.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.source);
                if (message.metadata != null && Object.hasOwnProperty.call(message, "metadata"))
                    $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.encode(message.metadata, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified StatusReshare message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.verify|verify} messages.
             * @function encodeDelimited
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.IStatusReshare} message StatusReshare message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            StatusReshare.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a StatusReshare message from the specified reader or buffer.
             * @function decode
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatusReshare.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.StatusReshare();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.source = reader.int32();
                            break;
                        }
                    case 2: {
                            message.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.decode(reader, reader.uint32());
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
             * Decodes a StatusReshare message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            StatusReshare.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a StatusReshare message.
             * @function verify
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            StatusReshare.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    properties._source = 1;
                    switch (message.source) {
                    default:
                        return "source: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    properties._metadata = 1;
                    {
                        var error = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify(message.metadata);
                        if (error)
                            return "metadata." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a StatusReshare message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {StatusAttributions.StatusAttribution.StatusReshare} StatusReshare
             */
            StatusReshare.fromObject = function fromObject(object) {
                if (object instanceof $root.StatusAttributions.StatusAttribution.StatusReshare)
                    return object;
                var message = new $root.StatusAttributions.StatusAttribution.StatusReshare();
                switch (object.source) {
                default:
                    if (typeof object.source === "number") {
                        message.source = object.source;
                        break;
                    }
                    break;
                case "UNKNOWN":
                case 0:
                    message.source = 0;
                    break;
                case "INTERNAL_RESHARE":
                case 1:
                    message.source = 1;
                    break;
                case "MENTION_RESHARE":
                case 2:
                    message.source = 2;
                    break;
                case "CHANNEL_RESHARE":
                case 3:
                    message.source = 3;
                    break;
                case "FORWARD":
                case 4:
                    message.source = 4;
                    break;
                }
                if (object.metadata != null) {
                    if (typeof object.metadata !== "object")
                        throw TypeError(".StatusAttributions.StatusAttribution.StatusReshare.metadata: object expected");
                    message.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.fromObject(object.metadata);
                }
                return message;
            };

            /**
             * Creates a plain object from a StatusReshare message. Also converts values to other types if specified.
             * @function toObject
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {StatusAttributions.StatusAttribution.StatusReshare} message StatusReshare
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            StatusReshare.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.source != null && message.hasOwnProperty("source")) {
                    object.source = options.enums === String ? $root.StatusAttributions.StatusAttribution.StatusReshare.Source[message.source] === undefined ? message.source : $root.StatusAttributions.StatusAttribution.StatusReshare.Source[message.source] : message.source;
                    if (options.oneofs)
                        object._source = "source";
                }
                if (message.metadata != null && message.hasOwnProperty("metadata")) {
                    object.metadata = $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata.toObject(message.metadata, options);
                    if (options.oneofs)
                        object._metadata = "metadata";
                }
                return object;
            };

            /**
             * Converts this StatusReshare to JSON.
             * @function toJSON
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            StatusReshare.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for StatusReshare
             * @function getTypeUrl
             * @memberof StatusAttributions.StatusAttribution.StatusReshare
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            StatusReshare.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/StatusAttributions.StatusAttribution.StatusReshare";
            };

            StatusReshare.Metadata = (function() {

                /**
                 * Properties of a Metadata.
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare
                 * @interface IMetadata
                 * @property {number|null} [duration] Metadata duration
                 * @property {string|null} [channelJid] Metadata channelJid
                 * @property {number|null} [channelMessageId] Metadata channelMessageId
                 * @property {boolean|null} [hasMultipleReshares] Metadata hasMultipleReshares
                 */

                /**
                 * Constructs a new Metadata.
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare
                 * @classdesc Represents a Metadata.
                 * @implements IMetadata
                 * @constructor
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.IMetadata=} [properties] Properties to set
                 */
                function Metadata(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Metadata duration.
                 * @member {number|null|undefined} duration
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.duration = null;

                /**
                 * Metadata channelJid.
                 * @member {string|null|undefined} channelJid
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.channelJid = null;

                /**
                 * Metadata channelMessageId.
                 * @member {number|null|undefined} channelMessageId
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.channelMessageId = null;

                /**
                 * Metadata hasMultipleReshares.
                 * @member {boolean|null|undefined} hasMultipleReshares
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 */
                Metadata.prototype.hasMultipleReshares = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_duration", {
                    get: $util.oneOfGetter($oneOfFields = ["duration"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_channelJid", {
                    get: $util.oneOfGetter($oneOfFields = ["channelJid"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_channelMessageId", {
                    get: $util.oneOfGetter($oneOfFields = ["channelMessageId"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Metadata.prototype, "_hasMultipleReshares", {
                    get: $util.oneOfGetter($oneOfFields = ["hasMultipleReshares"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Metadata instance using the specified properties.
                 * @function create
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.IMetadata=} [properties] Properties to set
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata instance
                 */
                Metadata.create = function create(properties) {
                    return new Metadata(properties);
                };

                /**
                 * Encodes the specified Metadata message. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @function encode
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.IMetadata} message Metadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metadata.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.duration);
                    if (message.channelJid != null && Object.hasOwnProperty.call(message, "channelJid"))
                        writer.uint32(/* id 2, wireType 2 =*/18).string(message.channelJid);
                    if (message.channelMessageId != null && Object.hasOwnProperty.call(message, "channelMessageId"))
                        writer.uint32(/* id 3, wireType 0 =*/24).int32(message.channelMessageId);
                    if (message.hasMultipleReshares != null && Object.hasOwnProperty.call(message, "hasMultipleReshares"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.hasMultipleReshares);
                    return writer;
                };

                /**
                 * Encodes the specified Metadata message, length delimited. Does not implicitly {@link StatusAttributions.StatusAttribution.StatusReshare.Metadata.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.IMetadata} message Metadata message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Metadata.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Metadata message from the specified reader or buffer.
                 * @function decode
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metadata.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.duration = reader.int32();
                                break;
                            }
                        case 2: {
                                message.channelJid = reader.string();
                                break;
                            }
                        case 3: {
                                message.channelMessageId = reader.int32();
                                break;
                            }
                        case 4: {
                                message.hasMultipleReshares = reader.bool();
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
                 * Decodes a Metadata message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Metadata.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Metadata message.
                 * @function verify
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Metadata.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.duration != null && message.hasOwnProperty("duration")) {
                        properties._duration = 1;
                        if (!$util.isInteger(message.duration))
                            return "duration: integer expected";
                    }
                    if (message.channelJid != null && message.hasOwnProperty("channelJid")) {
                        properties._channelJid = 1;
                        if (!$util.isString(message.channelJid))
                            return "channelJid: string expected";
                    }
                    if (message.channelMessageId != null && message.hasOwnProperty("channelMessageId")) {
                        properties._channelMessageId = 1;
                        if (!$util.isInteger(message.channelMessageId))
                            return "channelMessageId: integer expected";
                    }
                    if (message.hasMultipleReshares != null && message.hasOwnProperty("hasMultipleReshares")) {
                        properties._hasMultipleReshares = 1;
                        if (typeof message.hasMultipleReshares !== "boolean")
                            return "hasMultipleReshares: boolean expected";
                    }
                    return null;
                };

                /**
                 * Creates a Metadata message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {StatusAttributions.StatusAttribution.StatusReshare.Metadata} Metadata
                 */
                Metadata.fromObject = function fromObject(object) {
                    if (object instanceof $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata)
                        return object;
                    var message = new $root.StatusAttributions.StatusAttribution.StatusReshare.Metadata();
                    if (object.duration != null)
                        message.duration = object.duration | 0;
                    if (object.channelJid != null)
                        message.channelJid = String(object.channelJid);
                    if (object.channelMessageId != null)
                        message.channelMessageId = object.channelMessageId | 0;
                    if (object.hasMultipleReshares != null)
                        message.hasMultipleReshares = Boolean(object.hasMultipleReshares);
                    return message;
                };

                /**
                 * Creates a plain object from a Metadata message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {StatusAttributions.StatusAttribution.StatusReshare.Metadata} message Metadata
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Metadata.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.duration != null && message.hasOwnProperty("duration")) {
                        object.duration = message.duration;
                        if (options.oneofs)
                            object._duration = "duration";
                    }
                    if (message.channelJid != null && message.hasOwnProperty("channelJid")) {
                        object.channelJid = message.channelJid;
                        if (options.oneofs)
                            object._channelJid = "channelJid";
                    }
                    if (message.channelMessageId != null && message.hasOwnProperty("channelMessageId")) {
                        object.channelMessageId = message.channelMessageId;
                        if (options.oneofs)
                            object._channelMessageId = "channelMessageId";
                    }
                    if (message.hasMultipleReshares != null && message.hasOwnProperty("hasMultipleReshares")) {
                        object.hasMultipleReshares = message.hasMultipleReshares;
                        if (options.oneofs)
                            object._hasMultipleReshares = "hasMultipleReshares";
                    }
                    return object;
                };

                /**
                 * Converts this Metadata to JSON.
                 * @function toJSON
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Metadata.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Metadata
                 * @function getTypeUrl
                 * @memberof StatusAttributions.StatusAttribution.StatusReshare.Metadata
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Metadata.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/StatusAttributions.StatusAttribution.StatusReshare.Metadata";
                };

                return Metadata;
            })();

            /**
             * Source enum.
             * @name StatusAttributions.StatusAttribution.StatusReshare.Source
             * @enum {number}
             * @property {number} UNKNOWN=0 UNKNOWN value
             * @property {number} INTERNAL_RESHARE=1 INTERNAL_RESHARE value
             * @property {number} MENTION_RESHARE=2 MENTION_RESHARE value
             * @property {number} CHANNEL_RESHARE=3 CHANNEL_RESHARE value
             * @property {number} FORWARD=4 FORWARD value
             */
            StatusReshare.Source = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "UNKNOWN"] = 0;
                values[valuesById[1] = "INTERNAL_RESHARE"] = 1;
                values[valuesById[2] = "MENTION_RESHARE"] = 2;
                values[valuesById[3] = "CHANNEL_RESHARE"] = 3;
                values[valuesById[4] = "FORWARD"] = 4;
                return values;
            })();

            return StatusReshare;
        })();

        /**
         * Type enum.
         * @name StatusAttributions.StatusAttribution.Type
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} RESHARE=1 RESHARE value
         * @property {number} EXTERNAL_SHARE=2 EXTERNAL_SHARE value
         * @property {number} MUSIC=3 MUSIC value
         * @property {number} STATUS_MENTION=4 STATUS_MENTION value
         * @property {number} GROUP_STATUS=5 GROUP_STATUS value
         * @property {number} RL_ATTRIBUTION=6 RL_ATTRIBUTION value
         * @property {number} AI_CREATED=7 AI_CREATED value
         * @property {number} LAYOUTS=8 LAYOUTS value
         * @property {number} NEWSLETTER_STATUS=9 NEWSLETTER_STATUS value
         * @property {number} STATUS_CLOSE_SHARING=10 STATUS_CLOSE_SHARING value
         */
        StatusAttribution.Type = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "RESHARE"] = 1;
            values[valuesById[2] = "EXTERNAL_SHARE"] = 2;
            values[valuesById[3] = "MUSIC"] = 3;
            values[valuesById[4] = "STATUS_MENTION"] = 4;
            values[valuesById[5] = "GROUP_STATUS"] = 5;
            values[valuesById[6] = "RL_ATTRIBUTION"] = 6;
            values[valuesById[7] = "AI_CREATED"] = 7;
            values[valuesById[8] = "LAYOUTS"] = 8;
            values[valuesById[9] = "NEWSLETTER_STATUS"] = 9;
            values[valuesById[10] = "STATUS_CLOSE_SHARING"] = 10;
            return values;
        })();

        return StatusAttribution;
    })();

    return StatusAttributions;
})();

module.exports = $root;
