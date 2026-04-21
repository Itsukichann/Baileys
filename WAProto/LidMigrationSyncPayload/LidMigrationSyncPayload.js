/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.LidMigrationSyncPayload = (function() {

    /**
     * Namespace LidMigrationSyncPayload.
     * @exports LidMigrationSyncPayload
     * @namespace
     */
    var LidMigrationSyncPayload = {};

    LidMigrationSyncPayload.LIDMigrationMappingSyncPayload = (function() {

        /**
         * Properties of a LIDMigrationMappingSyncPayload.
         * @memberof LidMigrationSyncPayload
         * @interface ILIDMigrationMappingSyncPayload
         * @property {Array.<LidMigrationSyncPayload.ILIDMigrationMapping>|null} [pnToLidMappings] LIDMigrationMappingSyncPayload pnToLidMappings
         * @property {number|Long|null} [chatDbMigrationTimestamp] LIDMigrationMappingSyncPayload chatDbMigrationTimestamp
         */

        /**
         * Constructs a new LIDMigrationMappingSyncPayload.
         * @memberof LidMigrationSyncPayload
         * @classdesc Represents a LIDMigrationMappingSyncPayload.
         * @implements ILIDMigrationMappingSyncPayload
         * @constructor
         * @param {LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload=} [properties] Properties to set
         */
        function LIDMigrationMappingSyncPayload(properties) {
            this.pnToLidMappings = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LIDMigrationMappingSyncPayload pnToLidMappings.
         * @member {Array.<LidMigrationSyncPayload.ILIDMigrationMapping>} pnToLidMappings
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @instance
         */
        LIDMigrationMappingSyncPayload.prototype.pnToLidMappings = $util.emptyArray;

        /**
         * LIDMigrationMappingSyncPayload chatDbMigrationTimestamp.
         * @member {number|Long|null|undefined} chatDbMigrationTimestamp
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @instance
         */
        LIDMigrationMappingSyncPayload.prototype.chatDbMigrationTimestamp = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMappingSyncPayload.prototype, "_chatDbMigrationTimestamp", {
            get: $util.oneOfGetter($oneOfFields = ["chatDbMigrationTimestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LIDMigrationMappingSyncPayload instance using the specified properties.
         * @function create
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload=} [properties] Properties to set
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload} LIDMigrationMappingSyncPayload instance
         */
        LIDMigrationMappingSyncPayload.create = function create(properties) {
            return new LIDMigrationMappingSyncPayload(properties);
        };

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @function encode
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload} message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LIDMigrationMappingSyncPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pnToLidMappings != null && message.pnToLidMappings.length)
                for (var i = 0; i < message.pnToLidMappings.length; ++i)
                    $root.LidMigrationSyncPayload.LIDMigrationMapping.encode(message.pnToLidMappings[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.chatDbMigrationTimestamp != null && Object.hasOwnProperty.call(message, "chatDbMigrationTimestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.chatDbMigrationTimestamp);
            return writer;
        };

        /**
         * Encodes the specified LIDMigrationMappingSyncPayload message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMappingSyncPayload} message LIDMigrationMappingSyncPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LIDMigrationMappingSyncPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer.
         * @function decode
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload} LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LIDMigrationMappingSyncPayload.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LidMigrationSyncPayload.LIDMigrationMappingSyncPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.pnToLidMappings && message.pnToLidMappings.length))
                            message.pnToLidMappings = [];
                        message.pnToLidMappings.push($root.LidMigrationSyncPayload.LIDMigrationMapping.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.chatDbMigrationTimestamp = reader.uint64();
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
         * Decodes a LIDMigrationMappingSyncPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload} LIDMigrationMappingSyncPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LIDMigrationMappingSyncPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LIDMigrationMappingSyncPayload message.
         * @function verify
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LIDMigrationMappingSyncPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.pnToLidMappings != null && message.hasOwnProperty("pnToLidMappings")) {
                if (!Array.isArray(message.pnToLidMappings))
                    return "pnToLidMappings: array expected";
                for (var i = 0; i < message.pnToLidMappings.length; ++i) {
                    var error = $root.LidMigrationSyncPayload.LIDMigrationMapping.verify(message.pnToLidMappings[i]);
                    if (error)
                        return "pnToLidMappings." + error;
                }
            }
            if (message.chatDbMigrationTimestamp != null && message.hasOwnProperty("chatDbMigrationTimestamp")) {
                properties._chatDbMigrationTimestamp = 1;
                if (!$util.isInteger(message.chatDbMigrationTimestamp) && !(message.chatDbMigrationTimestamp && $util.isInteger(message.chatDbMigrationTimestamp.low) && $util.isInteger(message.chatDbMigrationTimestamp.high)))
                    return "chatDbMigrationTimestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a LIDMigrationMappingSyncPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload} LIDMigrationMappingSyncPayload
         */
        LIDMigrationMappingSyncPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.LidMigrationSyncPayload.LIDMigrationMappingSyncPayload)
                return object;
            var message = new $root.LidMigrationSyncPayload.LIDMigrationMappingSyncPayload();
            if (object.pnToLidMappings) {
                if (!Array.isArray(object.pnToLidMappings))
                    throw TypeError(".LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.pnToLidMappings: array expected");
                message.pnToLidMappings = [];
                for (var i = 0; i < object.pnToLidMappings.length; ++i) {
                    if (typeof object.pnToLidMappings[i] !== "object")
                        throw TypeError(".LidMigrationSyncPayload.LIDMigrationMappingSyncPayload.pnToLidMappings: object expected");
                    message.pnToLidMappings[i] = $root.LidMigrationSyncPayload.LIDMigrationMapping.fromObject(object.pnToLidMappings[i]);
                }
            }
            if (object.chatDbMigrationTimestamp != null)
                if ($util.Long)
                    (message.chatDbMigrationTimestamp = $util.Long.fromValue(object.chatDbMigrationTimestamp)).unsigned = true;
                else if (typeof object.chatDbMigrationTimestamp === "string")
                    message.chatDbMigrationTimestamp = parseInt(object.chatDbMigrationTimestamp, 10);
                else if (typeof object.chatDbMigrationTimestamp === "number")
                    message.chatDbMigrationTimestamp = object.chatDbMigrationTimestamp;
                else if (typeof object.chatDbMigrationTimestamp === "object")
                    message.chatDbMigrationTimestamp = new $util.LongBits(object.chatDbMigrationTimestamp.low >>> 0, object.chatDbMigrationTimestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LIDMigrationMappingSyncPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {LidMigrationSyncPayload.LIDMigrationMappingSyncPayload} message LIDMigrationMappingSyncPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LIDMigrationMappingSyncPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.pnToLidMappings = [];
            if (message.pnToLidMappings && message.pnToLidMappings.length) {
                object.pnToLidMappings = [];
                for (var j = 0; j < message.pnToLidMappings.length; ++j)
                    object.pnToLidMappings[j] = $root.LidMigrationSyncPayload.LIDMigrationMapping.toObject(message.pnToLidMappings[j], options);
            }
            if (message.chatDbMigrationTimestamp != null && message.hasOwnProperty("chatDbMigrationTimestamp")) {
                if (typeof message.chatDbMigrationTimestamp === "number")
                    object.chatDbMigrationTimestamp = options.longs === String ? String(message.chatDbMigrationTimestamp) : message.chatDbMigrationTimestamp;
                else
                    object.chatDbMigrationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.chatDbMigrationTimestamp) : options.longs === Number ? new $util.LongBits(message.chatDbMigrationTimestamp.low >>> 0, message.chatDbMigrationTimestamp.high >>> 0).toNumber(true) : message.chatDbMigrationTimestamp;
                if (options.oneofs)
                    object._chatDbMigrationTimestamp = "chatDbMigrationTimestamp";
            }
            return object;
        };

        /**
         * Converts this LIDMigrationMappingSyncPayload to JSON.
         * @function toJSON
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LIDMigrationMappingSyncPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LIDMigrationMappingSyncPayload
         * @function getTypeUrl
         * @memberof LidMigrationSyncPayload.LIDMigrationMappingSyncPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LIDMigrationMappingSyncPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LidMigrationSyncPayload.LIDMigrationMappingSyncPayload";
        };

        return LIDMigrationMappingSyncPayload;
    })();

    LidMigrationSyncPayload.LIDMigrationMapping = (function() {

        /**
         * Properties of a LIDMigrationMapping.
         * @memberof LidMigrationSyncPayload
         * @interface ILIDMigrationMapping
         * @property {number|Long|null} [pn] LIDMigrationMapping pn
         * @property {number|Long|null} [assignedLid] LIDMigrationMapping assignedLid
         * @property {number|Long|null} [latestLid] LIDMigrationMapping latestLid
         */

        /**
         * Constructs a new LIDMigrationMapping.
         * @memberof LidMigrationSyncPayload
         * @classdesc Represents a LIDMigrationMapping.
         * @implements ILIDMigrationMapping
         * @constructor
         * @param {LidMigrationSyncPayload.ILIDMigrationMapping=} [properties] Properties to set
         */
        function LIDMigrationMapping(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LIDMigrationMapping pn.
         * @member {number|Long|null|undefined} pn
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @instance
         */
        LIDMigrationMapping.prototype.pn = null;

        /**
         * LIDMigrationMapping assignedLid.
         * @member {number|Long|null|undefined} assignedLid
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @instance
         */
        LIDMigrationMapping.prototype.assignedLid = null;

        /**
         * LIDMigrationMapping latestLid.
         * @member {number|Long|null|undefined} latestLid
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @instance
         */
        LIDMigrationMapping.prototype.latestLid = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_pn", {
            get: $util.oneOfGetter($oneOfFields = ["pn"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_assignedLid", {
            get: $util.oneOfGetter($oneOfFields = ["assignedLid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LIDMigrationMapping.prototype, "_latestLid", {
            get: $util.oneOfGetter($oneOfFields = ["latestLid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LIDMigrationMapping instance using the specified properties.
         * @function create
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMapping=} [properties] Properties to set
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping} LIDMigrationMapping instance
         */
        LIDMigrationMapping.create = function create(properties) {
            return new LIDMigrationMapping(properties);
        };

        /**
         * Encodes the specified LIDMigrationMapping message. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @function encode
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMapping} message LIDMigrationMapping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LIDMigrationMapping.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pn != null && Object.hasOwnProperty.call(message, "pn"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.pn);
            if (message.assignedLid != null && Object.hasOwnProperty.call(message, "assignedLid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.assignedLid);
            if (message.latestLid != null && Object.hasOwnProperty.call(message, "latestLid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.latestLid);
            return writer;
        };

        /**
         * Encodes the specified LIDMigrationMapping message, length delimited. Does not implicitly {@link LidMigrationSyncPayload.LIDMigrationMapping.verify|verify} messages.
         * @function encodeDelimited
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {LidMigrationSyncPayload.ILIDMigrationMapping} message LIDMigrationMapping message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LIDMigrationMapping.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LIDMigrationMapping message from the specified reader or buffer.
         * @function decode
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping} LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LIDMigrationMapping.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.LidMigrationSyncPayload.LIDMigrationMapping();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.pn = reader.uint64();
                        break;
                    }
                case 2: {
                        message.assignedLid = reader.uint64();
                        break;
                    }
                case 3: {
                        message.latestLid = reader.uint64();
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
         * Decodes a LIDMigrationMapping message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping} LIDMigrationMapping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LIDMigrationMapping.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LIDMigrationMapping message.
         * @function verify
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LIDMigrationMapping.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.pn != null && message.hasOwnProperty("pn")) {
                properties._pn = 1;
                if (!$util.isInteger(message.pn) && !(message.pn && $util.isInteger(message.pn.low) && $util.isInteger(message.pn.high)))
                    return "pn: integer|Long expected";
            }
            if (message.assignedLid != null && message.hasOwnProperty("assignedLid")) {
                properties._assignedLid = 1;
                if (!$util.isInteger(message.assignedLid) && !(message.assignedLid && $util.isInteger(message.assignedLid.low) && $util.isInteger(message.assignedLid.high)))
                    return "assignedLid: integer|Long expected";
            }
            if (message.latestLid != null && message.hasOwnProperty("latestLid")) {
                properties._latestLid = 1;
                if (!$util.isInteger(message.latestLid) && !(message.latestLid && $util.isInteger(message.latestLid.low) && $util.isInteger(message.latestLid.high)))
                    return "latestLid: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a LIDMigrationMapping message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {LidMigrationSyncPayload.LIDMigrationMapping} LIDMigrationMapping
         */
        LIDMigrationMapping.fromObject = function fromObject(object) {
            if (object instanceof $root.LidMigrationSyncPayload.LIDMigrationMapping)
                return object;
            var message = new $root.LidMigrationSyncPayload.LIDMigrationMapping();
            if (object.pn != null)
                if ($util.Long)
                    (message.pn = $util.Long.fromValue(object.pn)).unsigned = true;
                else if (typeof object.pn === "string")
                    message.pn = parseInt(object.pn, 10);
                else if (typeof object.pn === "number")
                    message.pn = object.pn;
                else if (typeof object.pn === "object")
                    message.pn = new $util.LongBits(object.pn.low >>> 0, object.pn.high >>> 0).toNumber(true);
            if (object.assignedLid != null)
                if ($util.Long)
                    (message.assignedLid = $util.Long.fromValue(object.assignedLid)).unsigned = true;
                else if (typeof object.assignedLid === "string")
                    message.assignedLid = parseInt(object.assignedLid, 10);
                else if (typeof object.assignedLid === "number")
                    message.assignedLid = object.assignedLid;
                else if (typeof object.assignedLid === "object")
                    message.assignedLid = new $util.LongBits(object.assignedLid.low >>> 0, object.assignedLid.high >>> 0).toNumber(true);
            if (object.latestLid != null)
                if ($util.Long)
                    (message.latestLid = $util.Long.fromValue(object.latestLid)).unsigned = true;
                else if (typeof object.latestLid === "string")
                    message.latestLid = parseInt(object.latestLid, 10);
                else if (typeof object.latestLid === "number")
                    message.latestLid = object.latestLid;
                else if (typeof object.latestLid === "object")
                    message.latestLid = new $util.LongBits(object.latestLid.low >>> 0, object.latestLid.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a LIDMigrationMapping message. Also converts values to other types if specified.
         * @function toObject
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {LidMigrationSyncPayload.LIDMigrationMapping} message LIDMigrationMapping
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LIDMigrationMapping.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.pn != null && message.hasOwnProperty("pn")) {
                if (typeof message.pn === "number")
                    object.pn = options.longs === String ? String(message.pn) : message.pn;
                else
                    object.pn = options.longs === String ? $util.Long.prototype.toString.call(message.pn) : options.longs === Number ? new $util.LongBits(message.pn.low >>> 0, message.pn.high >>> 0).toNumber(true) : message.pn;
                if (options.oneofs)
                    object._pn = "pn";
            }
            if (message.assignedLid != null && message.hasOwnProperty("assignedLid")) {
                if (typeof message.assignedLid === "number")
                    object.assignedLid = options.longs === String ? String(message.assignedLid) : message.assignedLid;
                else
                    object.assignedLid = options.longs === String ? $util.Long.prototype.toString.call(message.assignedLid) : options.longs === Number ? new $util.LongBits(message.assignedLid.low >>> 0, message.assignedLid.high >>> 0).toNumber(true) : message.assignedLid;
                if (options.oneofs)
                    object._assignedLid = "assignedLid";
            }
            if (message.latestLid != null && message.hasOwnProperty("latestLid")) {
                if (typeof message.latestLid === "number")
                    object.latestLid = options.longs === String ? String(message.latestLid) : message.latestLid;
                else
                    object.latestLid = options.longs === String ? $util.Long.prototype.toString.call(message.latestLid) : options.longs === Number ? new $util.LongBits(message.latestLid.low >>> 0, message.latestLid.high >>> 0).toNumber(true) : message.latestLid;
                if (options.oneofs)
                    object._latestLid = "latestLid";
            }
            return object;
        };

        /**
         * Converts this LIDMigrationMapping to JSON.
         * @function toJSON
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LIDMigrationMapping.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LIDMigrationMapping
         * @function getTypeUrl
         * @memberof LidMigrationSyncPayload.LIDMigrationMapping
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LIDMigrationMapping.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/LidMigrationSyncPayload.LIDMigrationMapping";
        };

        return LIDMigrationMapping;
    })();

    return LidMigrationSyncPayload;
})();

module.exports = $root;
