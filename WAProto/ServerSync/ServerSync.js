/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.ServerSync = (function() {

    /**
     * Namespace ServerSync.
     * @exports ServerSync
     * @namespace
     */
    var ServerSync = {};

    ServerSync.SyncdPatch = (function() {

        /**
         * Properties of a SyncdPatch.
         * @memberof ServerSync
         * @interface ISyncdPatch
         * @property {ServerSync.ISyncdVersion|null} [version] SyncdPatch version
         * @property {Array.<ServerSync.ISyncdMutation>|null} [mutations] SyncdPatch mutations
         * @property {ServerSync.IExternalBlobReference|null} [externalMutations] SyncdPatch externalMutations
         * @property {Uint8Array|null} [snapshotMac] SyncdPatch snapshotMac
         * @property {Uint8Array|null} [patchMac] SyncdPatch patchMac
         * @property {ServerSync.IKeyId|null} [keyId] SyncdPatch keyId
         * @property {ServerSync.IExitCode|null} [exitCode] SyncdPatch exitCode
         * @property {number|null} [deviceIndex] SyncdPatch deviceIndex
         * @property {Uint8Array|null} [clientDebugData] SyncdPatch clientDebugData
         */

        /**
         * Constructs a new SyncdPatch.
         * @memberof ServerSync
         * @classdesc Represents a SyncdPatch.
         * @implements ISyncdPatch
         * @constructor
         * @param {ServerSync.ISyncdPatch=} [properties] Properties to set
         */
        function SyncdPatch(properties) {
            this.mutations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdPatch version.
         * @member {ServerSync.ISyncdVersion|null|undefined} version
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.version = null;

        /**
         * SyncdPatch mutations.
         * @member {Array.<ServerSync.ISyncdMutation>} mutations
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.mutations = $util.emptyArray;

        /**
         * SyncdPatch externalMutations.
         * @member {ServerSync.IExternalBlobReference|null|undefined} externalMutations
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.externalMutations = null;

        /**
         * SyncdPatch snapshotMac.
         * @member {Uint8Array|null|undefined} snapshotMac
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.snapshotMac = null;

        /**
         * SyncdPatch patchMac.
         * @member {Uint8Array|null|undefined} patchMac
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.patchMac = null;

        /**
         * SyncdPatch keyId.
         * @member {ServerSync.IKeyId|null|undefined} keyId
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.keyId = null;

        /**
         * SyncdPatch exitCode.
         * @member {ServerSync.IExitCode|null|undefined} exitCode
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.exitCode = null;

        /**
         * SyncdPatch deviceIndex.
         * @member {number|null|undefined} deviceIndex
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.deviceIndex = null;

        /**
         * SyncdPatch clientDebugData.
         * @member {Uint8Array|null|undefined} clientDebugData
         * @memberof ServerSync.SyncdPatch
         * @instance
         */
        SyncdPatch.prototype.clientDebugData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_externalMutations", {
            get: $util.oneOfGetter($oneOfFields = ["externalMutations"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_snapshotMac", {
            get: $util.oneOfGetter($oneOfFields = ["snapshotMac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_patchMac", {
            get: $util.oneOfGetter($oneOfFields = ["patchMac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_exitCode", {
            get: $util.oneOfGetter($oneOfFields = ["exitCode"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_deviceIndex", {
            get: $util.oneOfGetter($oneOfFields = ["deviceIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdPatch.prototype, "_clientDebugData", {
            get: $util.oneOfGetter($oneOfFields = ["clientDebugData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdPatch instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {ServerSync.ISyncdPatch=} [properties] Properties to set
         * @returns {ServerSync.SyncdPatch} SyncdPatch instance
         */
        SyncdPatch.create = function create(properties) {
            return new SyncdPatch(properties);
        };

        /**
         * Encodes the specified SyncdPatch message. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {ServerSync.ISyncdPatch} message SyncdPatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdPatch.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                $root.ServerSync.SyncdVersion.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.mutations != null && message.mutations.length)
                for (var i = 0; i < message.mutations.length; ++i)
                    $root.ServerSync.SyncdMutation.encode(message.mutations[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.externalMutations != null && Object.hasOwnProperty.call(message, "externalMutations"))
                $root.ServerSync.ExternalBlobReference.encode(message.externalMutations, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.snapshotMac != null && Object.hasOwnProperty.call(message, "snapshotMac"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.snapshotMac);
            if (message.patchMac != null && Object.hasOwnProperty.call(message, "patchMac"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.patchMac);
            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                $root.ServerSync.KeyId.encode(message.keyId, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.exitCode != null && Object.hasOwnProperty.call(message, "exitCode"))
                $root.ServerSync.ExitCode.encode(message.exitCode, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.deviceIndex != null && Object.hasOwnProperty.call(message, "deviceIndex"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.deviceIndex);
            if (message.clientDebugData != null && Object.hasOwnProperty.call(message, "clientDebugData"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.clientDebugData);
            return writer;
        };

        /**
         * Encodes the specified SyncdPatch message, length delimited. Does not implicitly {@link ServerSync.SyncdPatch.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {ServerSync.ISyncdPatch} message SyncdPatch message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdPatch.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdPatch message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdPatch} SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdPatch.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdPatch();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = $root.ServerSync.SyncdVersion.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.mutations && message.mutations.length))
                            message.mutations = [];
                        message.mutations.push($root.ServerSync.SyncdMutation.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.externalMutations = $root.ServerSync.ExternalBlobReference.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.snapshotMac = reader.bytes();
                        break;
                    }
                case 5: {
                        message.patchMac = reader.bytes();
                        break;
                    }
                case 6: {
                        message.keyId = $root.ServerSync.KeyId.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.exitCode = $root.ServerSync.ExitCode.decode(reader, reader.uint32());
                        break;
                    }
                case 8: {
                        message.deviceIndex = reader.uint32();
                        break;
                    }
                case 9: {
                        message.clientDebugData = reader.bytes();
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
         * Decodes a SyncdPatch message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdPatch} SyncdPatch
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdPatch.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdPatch message.
         * @function verify
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdPatch.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                {
                    var error = $root.ServerSync.SyncdVersion.verify(message.version);
                    if (error)
                        return "version." + error;
                }
            }
            if (message.mutations != null && message.hasOwnProperty("mutations")) {
                if (!Array.isArray(message.mutations))
                    return "mutations: array expected";
                for (var i = 0; i < message.mutations.length; ++i) {
                    var error = $root.ServerSync.SyncdMutation.verify(message.mutations[i]);
                    if (error)
                        return "mutations." + error;
                }
            }
            if (message.externalMutations != null && message.hasOwnProperty("externalMutations")) {
                properties._externalMutations = 1;
                {
                    var error = $root.ServerSync.ExternalBlobReference.verify(message.externalMutations);
                    if (error)
                        return "externalMutations." + error;
                }
            }
            if (message.snapshotMac != null && message.hasOwnProperty("snapshotMac")) {
                properties._snapshotMac = 1;
                if (!(message.snapshotMac && typeof message.snapshotMac.length === "number" || $util.isString(message.snapshotMac)))
                    return "snapshotMac: buffer expected";
            }
            if (message.patchMac != null && message.hasOwnProperty("patchMac")) {
                properties._patchMac = 1;
                if (!(message.patchMac && typeof message.patchMac.length === "number" || $util.isString(message.patchMac)))
                    return "patchMac: buffer expected";
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                properties._keyId = 1;
                {
                    var error = $root.ServerSync.KeyId.verify(message.keyId);
                    if (error)
                        return "keyId." + error;
                }
            }
            if (message.exitCode != null && message.hasOwnProperty("exitCode")) {
                properties._exitCode = 1;
                {
                    var error = $root.ServerSync.ExitCode.verify(message.exitCode);
                    if (error)
                        return "exitCode." + error;
                }
            }
            if (message.deviceIndex != null && message.hasOwnProperty("deviceIndex")) {
                properties._deviceIndex = 1;
                if (!$util.isInteger(message.deviceIndex))
                    return "deviceIndex: integer expected";
            }
            if (message.clientDebugData != null && message.hasOwnProperty("clientDebugData")) {
                properties._clientDebugData = 1;
                if (!(message.clientDebugData && typeof message.clientDebugData.length === "number" || $util.isString(message.clientDebugData)))
                    return "clientDebugData: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SyncdPatch message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdPatch} SyncdPatch
         */
        SyncdPatch.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdPatch)
                return object;
            var message = new $root.ServerSync.SyncdPatch();
            if (object.version != null) {
                if (typeof object.version !== "object")
                    throw TypeError(".ServerSync.SyncdPatch.version: object expected");
                message.version = $root.ServerSync.SyncdVersion.fromObject(object.version);
            }
            if (object.mutations) {
                if (!Array.isArray(object.mutations))
                    throw TypeError(".ServerSync.SyncdPatch.mutations: array expected");
                message.mutations = [];
                for (var i = 0; i < object.mutations.length; ++i) {
                    if (typeof object.mutations[i] !== "object")
                        throw TypeError(".ServerSync.SyncdPatch.mutations: object expected");
                    message.mutations[i] = $root.ServerSync.SyncdMutation.fromObject(object.mutations[i]);
                }
            }
            if (object.externalMutations != null) {
                if (typeof object.externalMutations !== "object")
                    throw TypeError(".ServerSync.SyncdPatch.externalMutations: object expected");
                message.externalMutations = $root.ServerSync.ExternalBlobReference.fromObject(object.externalMutations);
            }
            if (object.snapshotMac != null)
                if (typeof object.snapshotMac === "string")
                    $util.base64.decode(object.snapshotMac, message.snapshotMac = $util.newBuffer($util.base64.length(object.snapshotMac)), 0);
                else if (object.snapshotMac.length >= 0)
                    message.snapshotMac = object.snapshotMac;
            if (object.patchMac != null)
                if (typeof object.patchMac === "string")
                    $util.base64.decode(object.patchMac, message.patchMac = $util.newBuffer($util.base64.length(object.patchMac)), 0);
                else if (object.patchMac.length >= 0)
                    message.patchMac = object.patchMac;
            if (object.keyId != null) {
                if (typeof object.keyId !== "object")
                    throw TypeError(".ServerSync.SyncdPatch.keyId: object expected");
                message.keyId = $root.ServerSync.KeyId.fromObject(object.keyId);
            }
            if (object.exitCode != null) {
                if (typeof object.exitCode !== "object")
                    throw TypeError(".ServerSync.SyncdPatch.exitCode: object expected");
                message.exitCode = $root.ServerSync.ExitCode.fromObject(object.exitCode);
            }
            if (object.deviceIndex != null)
                message.deviceIndex = object.deviceIndex >>> 0;
            if (object.clientDebugData != null)
                if (typeof object.clientDebugData === "string")
                    $util.base64.decode(object.clientDebugData, message.clientDebugData = $util.newBuffer($util.base64.length(object.clientDebugData)), 0);
                else if (object.clientDebugData.length >= 0)
                    message.clientDebugData = object.clientDebugData;
            return message;
        };

        /**
         * Creates a plain object from a SyncdPatch message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {ServerSync.SyncdPatch} message SyncdPatch
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdPatch.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mutations = [];
            if (message.version != null && message.hasOwnProperty("version")) {
                object.version = $root.ServerSync.SyncdVersion.toObject(message.version, options);
                if (options.oneofs)
                    object._version = "version";
            }
            if (message.mutations && message.mutations.length) {
                object.mutations = [];
                for (var j = 0; j < message.mutations.length; ++j)
                    object.mutations[j] = $root.ServerSync.SyncdMutation.toObject(message.mutations[j], options);
            }
            if (message.externalMutations != null && message.hasOwnProperty("externalMutations")) {
                object.externalMutations = $root.ServerSync.ExternalBlobReference.toObject(message.externalMutations, options);
                if (options.oneofs)
                    object._externalMutations = "externalMutations";
            }
            if (message.snapshotMac != null && message.hasOwnProperty("snapshotMac")) {
                object.snapshotMac = options.bytes === String ? $util.base64.encode(message.snapshotMac, 0, message.snapshotMac.length) : options.bytes === Array ? Array.prototype.slice.call(message.snapshotMac) : message.snapshotMac;
                if (options.oneofs)
                    object._snapshotMac = "snapshotMac";
            }
            if (message.patchMac != null && message.hasOwnProperty("patchMac")) {
                object.patchMac = options.bytes === String ? $util.base64.encode(message.patchMac, 0, message.patchMac.length) : options.bytes === Array ? Array.prototype.slice.call(message.patchMac) : message.patchMac;
                if (options.oneofs)
                    object._patchMac = "patchMac";
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                object.keyId = $root.ServerSync.KeyId.toObject(message.keyId, options);
                if (options.oneofs)
                    object._keyId = "keyId";
            }
            if (message.exitCode != null && message.hasOwnProperty("exitCode")) {
                object.exitCode = $root.ServerSync.ExitCode.toObject(message.exitCode, options);
                if (options.oneofs)
                    object._exitCode = "exitCode";
            }
            if (message.deviceIndex != null && message.hasOwnProperty("deviceIndex")) {
                object.deviceIndex = message.deviceIndex;
                if (options.oneofs)
                    object._deviceIndex = "deviceIndex";
            }
            if (message.clientDebugData != null && message.hasOwnProperty("clientDebugData")) {
                object.clientDebugData = options.bytes === String ? $util.base64.encode(message.clientDebugData, 0, message.clientDebugData.length) : options.bytes === Array ? Array.prototype.slice.call(message.clientDebugData) : message.clientDebugData;
                if (options.oneofs)
                    object._clientDebugData = "clientDebugData";
            }
            return object;
        };

        /**
         * Converts this SyncdPatch to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdPatch
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdPatch.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdPatch
         * @function getTypeUrl
         * @memberof ServerSync.SyncdPatch
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdPatch.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdPatch";
        };

        return SyncdPatch;
    })();

    ServerSync.SyncdMutation = (function() {

        /**
         * Properties of a SyncdMutation.
         * @memberof ServerSync
         * @interface ISyncdMutation
         * @property {ServerSync.SyncdMutation.SyncdOperation|null} [operation] SyncdMutation operation
         * @property {ServerSync.ISyncdRecord|null} [record] SyncdMutation record
         */

        /**
         * Constructs a new SyncdMutation.
         * @memberof ServerSync
         * @classdesc Represents a SyncdMutation.
         * @implements ISyncdMutation
         * @constructor
         * @param {ServerSync.ISyncdMutation=} [properties] Properties to set
         */
        function SyncdMutation(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdMutation operation.
         * @member {ServerSync.SyncdMutation.SyncdOperation|null|undefined} operation
         * @memberof ServerSync.SyncdMutation
         * @instance
         */
        SyncdMutation.prototype.operation = null;

        /**
         * SyncdMutation record.
         * @member {ServerSync.ISyncdRecord|null|undefined} record
         * @memberof ServerSync.SyncdMutation
         * @instance
         */
        SyncdMutation.prototype.record = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdMutation.prototype, "_operation", {
            get: $util.oneOfGetter($oneOfFields = ["operation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdMutation.prototype, "_record", {
            get: $util.oneOfGetter($oneOfFields = ["record"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdMutation instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {ServerSync.ISyncdMutation=} [properties] Properties to set
         * @returns {ServerSync.SyncdMutation} SyncdMutation instance
         */
        SyncdMutation.create = function create(properties) {
            return new SyncdMutation(properties);
        };

        /**
         * Encodes the specified SyncdMutation message. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {ServerSync.ISyncdMutation} message SyncdMutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdMutation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.operation != null && Object.hasOwnProperty.call(message, "operation"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.operation);
            if (message.record != null && Object.hasOwnProperty.call(message, "record"))
                $root.ServerSync.SyncdRecord.encode(message.record, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncdMutation message, length delimited. Does not implicitly {@link ServerSync.SyncdMutation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {ServerSync.ISyncdMutation} message SyncdMutation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdMutation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdMutation message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdMutation} SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdMutation.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdMutation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.operation = reader.int32();
                        break;
                    }
                case 2: {
                        message.record = $root.ServerSync.SyncdRecord.decode(reader, reader.uint32());
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
         * Decodes a SyncdMutation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdMutation} SyncdMutation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdMutation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdMutation message.
         * @function verify
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdMutation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.operation != null && message.hasOwnProperty("operation")) {
                properties._operation = 1;
                switch (message.operation) {
                default:
                    return "operation: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.record != null && message.hasOwnProperty("record")) {
                properties._record = 1;
                {
                    var error = $root.ServerSync.SyncdRecord.verify(message.record);
                    if (error)
                        return "record." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncdMutation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdMutation} SyncdMutation
         */
        SyncdMutation.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdMutation)
                return object;
            var message = new $root.ServerSync.SyncdMutation();
            switch (object.operation) {
            default:
                if (typeof object.operation === "number") {
                    message.operation = object.operation;
                    break;
                }
                break;
            case "SET":
            case 0:
                message.operation = 0;
                break;
            case "REMOVE":
            case 1:
                message.operation = 1;
                break;
            }
            if (object.record != null) {
                if (typeof object.record !== "object")
                    throw TypeError(".ServerSync.SyncdMutation.record: object expected");
                message.record = $root.ServerSync.SyncdRecord.fromObject(object.record);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncdMutation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {ServerSync.SyncdMutation} message SyncdMutation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdMutation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.operation != null && message.hasOwnProperty("operation")) {
                object.operation = options.enums === String ? $root.ServerSync.SyncdMutation.SyncdOperation[message.operation] === undefined ? message.operation : $root.ServerSync.SyncdMutation.SyncdOperation[message.operation] : message.operation;
                if (options.oneofs)
                    object._operation = "operation";
            }
            if (message.record != null && message.hasOwnProperty("record")) {
                object.record = $root.ServerSync.SyncdRecord.toObject(message.record, options);
                if (options.oneofs)
                    object._record = "record";
            }
            return object;
        };

        /**
         * Converts this SyncdMutation to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdMutation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdMutation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdMutation
         * @function getTypeUrl
         * @memberof ServerSync.SyncdMutation
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdMutation.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdMutation";
        };

        /**
         * SyncdOperation enum.
         * @name ServerSync.SyncdMutation.SyncdOperation
         * @enum {number}
         * @property {number} SET=0 SET value
         * @property {number} REMOVE=1 REMOVE value
         */
        SyncdMutation.SyncdOperation = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SET"] = 0;
            values[valuesById[1] = "REMOVE"] = 1;
            return values;
        })();

        return SyncdMutation;
    })();

    ServerSync.SyncdMutations = (function() {

        /**
         * Properties of a SyncdMutations.
         * @memberof ServerSync
         * @interface ISyncdMutations
         * @property {Array.<ServerSync.ISyncdMutation>|null} [mutations] SyncdMutations mutations
         */

        /**
         * Constructs a new SyncdMutations.
         * @memberof ServerSync
         * @classdesc Represents a SyncdMutations.
         * @implements ISyncdMutations
         * @constructor
         * @param {ServerSync.ISyncdMutations=} [properties] Properties to set
         */
        function SyncdMutations(properties) {
            this.mutations = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdMutations mutations.
         * @member {Array.<ServerSync.ISyncdMutation>} mutations
         * @memberof ServerSync.SyncdMutations
         * @instance
         */
        SyncdMutations.prototype.mutations = $util.emptyArray;

        /**
         * Creates a new SyncdMutations instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {ServerSync.ISyncdMutations=} [properties] Properties to set
         * @returns {ServerSync.SyncdMutations} SyncdMutations instance
         */
        SyncdMutations.create = function create(properties) {
            return new SyncdMutations(properties);
        };

        /**
         * Encodes the specified SyncdMutations message. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {ServerSync.ISyncdMutations} message SyncdMutations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdMutations.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mutations != null && message.mutations.length)
                for (var i = 0; i < message.mutations.length; ++i)
                    $root.ServerSync.SyncdMutation.encode(message.mutations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncdMutations message, length delimited. Does not implicitly {@link ServerSync.SyncdMutations.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {ServerSync.ISyncdMutations} message SyncdMutations message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdMutations.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdMutations message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdMutations} SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdMutations.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdMutations();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.mutations && message.mutations.length))
                            message.mutations = [];
                        message.mutations.push($root.ServerSync.SyncdMutation.decode(reader, reader.uint32()));
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
         * Decodes a SyncdMutations message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdMutations} SyncdMutations
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdMutations.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdMutations message.
         * @function verify
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdMutations.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.mutations != null && message.hasOwnProperty("mutations")) {
                if (!Array.isArray(message.mutations))
                    return "mutations: array expected";
                for (var i = 0; i < message.mutations.length; ++i) {
                    var error = $root.ServerSync.SyncdMutation.verify(message.mutations[i]);
                    if (error)
                        return "mutations." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncdMutations message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdMutations} SyncdMutations
         */
        SyncdMutations.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdMutations)
                return object;
            var message = new $root.ServerSync.SyncdMutations();
            if (object.mutations) {
                if (!Array.isArray(object.mutations))
                    throw TypeError(".ServerSync.SyncdMutations.mutations: array expected");
                message.mutations = [];
                for (var i = 0; i < object.mutations.length; ++i) {
                    if (typeof object.mutations[i] !== "object")
                        throw TypeError(".ServerSync.SyncdMutations.mutations: object expected");
                    message.mutations[i] = $root.ServerSync.SyncdMutation.fromObject(object.mutations[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncdMutations message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {ServerSync.SyncdMutations} message SyncdMutations
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdMutations.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.mutations = [];
            if (message.mutations && message.mutations.length) {
                object.mutations = [];
                for (var j = 0; j < message.mutations.length; ++j)
                    object.mutations[j] = $root.ServerSync.SyncdMutation.toObject(message.mutations[j], options);
            }
            return object;
        };

        /**
         * Converts this SyncdMutations to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdMutations
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdMutations.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdMutations
         * @function getTypeUrl
         * @memberof ServerSync.SyncdMutations
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdMutations.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdMutations";
        };

        return SyncdMutations;
    })();

    ServerSync.SyncdSnapshot = (function() {

        /**
         * Properties of a SyncdSnapshot.
         * @memberof ServerSync
         * @interface ISyncdSnapshot
         * @property {ServerSync.ISyncdVersion|null} [version] SyncdSnapshot version
         * @property {Array.<ServerSync.ISyncdRecord>|null} [records] SyncdSnapshot records
         * @property {Uint8Array|null} [mac] SyncdSnapshot mac
         * @property {ServerSync.IKeyId|null} [keyId] SyncdSnapshot keyId
         */

        /**
         * Constructs a new SyncdSnapshot.
         * @memberof ServerSync
         * @classdesc Represents a SyncdSnapshot.
         * @implements ISyncdSnapshot
         * @constructor
         * @param {ServerSync.ISyncdSnapshot=} [properties] Properties to set
         */
        function SyncdSnapshot(properties) {
            this.records = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdSnapshot version.
         * @member {ServerSync.ISyncdVersion|null|undefined} version
         * @memberof ServerSync.SyncdSnapshot
         * @instance
         */
        SyncdSnapshot.prototype.version = null;

        /**
         * SyncdSnapshot records.
         * @member {Array.<ServerSync.ISyncdRecord>} records
         * @memberof ServerSync.SyncdSnapshot
         * @instance
         */
        SyncdSnapshot.prototype.records = $util.emptyArray;

        /**
         * SyncdSnapshot mac.
         * @member {Uint8Array|null|undefined} mac
         * @memberof ServerSync.SyncdSnapshot
         * @instance
         */
        SyncdSnapshot.prototype.mac = null;

        /**
         * SyncdSnapshot keyId.
         * @member {ServerSync.IKeyId|null|undefined} keyId
         * @memberof ServerSync.SyncdSnapshot
         * @instance
         */
        SyncdSnapshot.prototype.keyId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_mac", {
            get: $util.oneOfGetter($oneOfFields = ["mac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdSnapshot.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdSnapshot instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {ServerSync.ISyncdSnapshot=} [properties] Properties to set
         * @returns {ServerSync.SyncdSnapshot} SyncdSnapshot instance
         */
        SyncdSnapshot.create = function create(properties) {
            return new SyncdSnapshot(properties);
        };

        /**
         * Encodes the specified SyncdSnapshot message. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {ServerSync.ISyncdSnapshot} message SyncdSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdSnapshot.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                $root.ServerSync.SyncdVersion.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.records != null && message.records.length)
                for (var i = 0; i < message.records.length; ++i)
                    $root.ServerSync.SyncdRecord.encode(message.records[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.mac != null && Object.hasOwnProperty.call(message, "mac"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.mac);
            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                $root.ServerSync.KeyId.encode(message.keyId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncdSnapshot message, length delimited. Does not implicitly {@link ServerSync.SyncdSnapshot.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {ServerSync.ISyncdSnapshot} message SyncdSnapshot message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdSnapshot.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdSnapshot message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdSnapshot} SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdSnapshot.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdSnapshot();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = $root.ServerSync.SyncdVersion.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        if (!(message.records && message.records.length))
                            message.records = [];
                        message.records.push($root.ServerSync.SyncdRecord.decode(reader, reader.uint32()));
                        break;
                    }
                case 3: {
                        message.mac = reader.bytes();
                        break;
                    }
                case 4: {
                        message.keyId = $root.ServerSync.KeyId.decode(reader, reader.uint32());
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
         * Decodes a SyncdSnapshot message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdSnapshot} SyncdSnapshot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdSnapshot.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdSnapshot message.
         * @function verify
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdSnapshot.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                {
                    var error = $root.ServerSync.SyncdVersion.verify(message.version);
                    if (error)
                        return "version." + error;
                }
            }
            if (message.records != null && message.hasOwnProperty("records")) {
                if (!Array.isArray(message.records))
                    return "records: array expected";
                for (var i = 0; i < message.records.length; ++i) {
                    var error = $root.ServerSync.SyncdRecord.verify(message.records[i]);
                    if (error)
                        return "records." + error;
                }
            }
            if (message.mac != null && message.hasOwnProperty("mac")) {
                properties._mac = 1;
                if (!(message.mac && typeof message.mac.length === "number" || $util.isString(message.mac)))
                    return "mac: buffer expected";
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                properties._keyId = 1;
                {
                    var error = $root.ServerSync.KeyId.verify(message.keyId);
                    if (error)
                        return "keyId." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncdSnapshot message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdSnapshot} SyncdSnapshot
         */
        SyncdSnapshot.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdSnapshot)
                return object;
            var message = new $root.ServerSync.SyncdSnapshot();
            if (object.version != null) {
                if (typeof object.version !== "object")
                    throw TypeError(".ServerSync.SyncdSnapshot.version: object expected");
                message.version = $root.ServerSync.SyncdVersion.fromObject(object.version);
            }
            if (object.records) {
                if (!Array.isArray(object.records))
                    throw TypeError(".ServerSync.SyncdSnapshot.records: array expected");
                message.records = [];
                for (var i = 0; i < object.records.length; ++i) {
                    if (typeof object.records[i] !== "object")
                        throw TypeError(".ServerSync.SyncdSnapshot.records: object expected");
                    message.records[i] = $root.ServerSync.SyncdRecord.fromObject(object.records[i]);
                }
            }
            if (object.mac != null)
                if (typeof object.mac === "string")
                    $util.base64.decode(object.mac, message.mac = $util.newBuffer($util.base64.length(object.mac)), 0);
                else if (object.mac.length >= 0)
                    message.mac = object.mac;
            if (object.keyId != null) {
                if (typeof object.keyId !== "object")
                    throw TypeError(".ServerSync.SyncdSnapshot.keyId: object expected");
                message.keyId = $root.ServerSync.KeyId.fromObject(object.keyId);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncdSnapshot message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {ServerSync.SyncdSnapshot} message SyncdSnapshot
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdSnapshot.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.records = [];
            if (message.version != null && message.hasOwnProperty("version")) {
                object.version = $root.ServerSync.SyncdVersion.toObject(message.version, options);
                if (options.oneofs)
                    object._version = "version";
            }
            if (message.records && message.records.length) {
                object.records = [];
                for (var j = 0; j < message.records.length; ++j)
                    object.records[j] = $root.ServerSync.SyncdRecord.toObject(message.records[j], options);
            }
            if (message.mac != null && message.hasOwnProperty("mac")) {
                object.mac = options.bytes === String ? $util.base64.encode(message.mac, 0, message.mac.length) : options.bytes === Array ? Array.prototype.slice.call(message.mac) : message.mac;
                if (options.oneofs)
                    object._mac = "mac";
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                object.keyId = $root.ServerSync.KeyId.toObject(message.keyId, options);
                if (options.oneofs)
                    object._keyId = "keyId";
            }
            return object;
        };

        /**
         * Converts this SyncdSnapshot to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdSnapshot
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdSnapshot.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdSnapshot
         * @function getTypeUrl
         * @memberof ServerSync.SyncdSnapshot
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdSnapshot.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdSnapshot";
        };

        return SyncdSnapshot;
    })();

    ServerSync.ExternalBlobReference = (function() {

        /**
         * Properties of an ExternalBlobReference.
         * @memberof ServerSync
         * @interface IExternalBlobReference
         * @property {Uint8Array|null} [mediaKey] ExternalBlobReference mediaKey
         * @property {string|null} [directPath] ExternalBlobReference directPath
         * @property {string|null} [handle] ExternalBlobReference handle
         * @property {number|Long|null} [fileSizeBytes] ExternalBlobReference fileSizeBytes
         * @property {Uint8Array|null} [fileSha256] ExternalBlobReference fileSha256
         * @property {Uint8Array|null} [fileEncSha256] ExternalBlobReference fileEncSha256
         */

        /**
         * Constructs a new ExternalBlobReference.
         * @memberof ServerSync
         * @classdesc Represents an ExternalBlobReference.
         * @implements IExternalBlobReference
         * @constructor
         * @param {ServerSync.IExternalBlobReference=} [properties] Properties to set
         */
        function ExternalBlobReference(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExternalBlobReference mediaKey.
         * @member {Uint8Array|null|undefined} mediaKey
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.mediaKey = null;

        /**
         * ExternalBlobReference directPath.
         * @member {string|null|undefined} directPath
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.directPath = null;

        /**
         * ExternalBlobReference handle.
         * @member {string|null|undefined} handle
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.handle = null;

        /**
         * ExternalBlobReference fileSizeBytes.
         * @member {number|Long|null|undefined} fileSizeBytes
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.fileSizeBytes = null;

        /**
         * ExternalBlobReference fileSha256.
         * @member {Uint8Array|null|undefined} fileSha256
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.fileSha256 = null;

        /**
         * ExternalBlobReference fileEncSha256.
         * @member {Uint8Array|null|undefined} fileEncSha256
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         */
        ExternalBlobReference.prototype.fileEncSha256 = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_mediaKey", {
            get: $util.oneOfGetter($oneOfFields = ["mediaKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_directPath", {
            get: $util.oneOfGetter($oneOfFields = ["directPath"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_handle", {
            get: $util.oneOfGetter($oneOfFields = ["handle"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileSizeBytes", {
            get: $util.oneOfGetter($oneOfFields = ["fileSizeBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExternalBlobReference.prototype, "_fileEncSha256", {
            get: $util.oneOfGetter($oneOfFields = ["fileEncSha256"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ExternalBlobReference instance using the specified properties.
         * @function create
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {ServerSync.IExternalBlobReference=} [properties] Properties to set
         * @returns {ServerSync.ExternalBlobReference} ExternalBlobReference instance
         */
        ExternalBlobReference.create = function create(properties) {
            return new ExternalBlobReference(properties);
        };

        /**
         * Encodes the specified ExternalBlobReference message. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {ServerSync.IExternalBlobReference} message ExternalBlobReference message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExternalBlobReference.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.mediaKey != null && Object.hasOwnProperty.call(message, "mediaKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.mediaKey);
            if (message.directPath != null && Object.hasOwnProperty.call(message, "directPath"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.directPath);
            if (message.handle != null && Object.hasOwnProperty.call(message, "handle"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.handle);
            if (message.fileSizeBytes != null && Object.hasOwnProperty.call(message, "fileSizeBytes"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.fileSizeBytes);
            if (message.fileSha256 != null && Object.hasOwnProperty.call(message, "fileSha256"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.fileSha256);
            if (message.fileEncSha256 != null && Object.hasOwnProperty.call(message, "fileEncSha256"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.fileEncSha256);
            return writer;
        };

        /**
         * Encodes the specified ExternalBlobReference message, length delimited. Does not implicitly {@link ServerSync.ExternalBlobReference.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {ServerSync.IExternalBlobReference} message ExternalBlobReference message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExternalBlobReference.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExternalBlobReference message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.ExternalBlobReference} ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExternalBlobReference.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.ExternalBlobReference();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.mediaKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.directPath = reader.string();
                        break;
                    }
                case 3: {
                        message.handle = reader.string();
                        break;
                    }
                case 4: {
                        message.fileSizeBytes = reader.uint64();
                        break;
                    }
                case 5: {
                        message.fileSha256 = reader.bytes();
                        break;
                    }
                case 6: {
                        message.fileEncSha256 = reader.bytes();
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
         * Decodes an ExternalBlobReference message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.ExternalBlobReference} ExternalBlobReference
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExternalBlobReference.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExternalBlobReference message.
         * @function verify
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExternalBlobReference.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey")) {
                properties._mediaKey = 1;
                if (!(message.mediaKey && typeof message.mediaKey.length === "number" || $util.isString(message.mediaKey)))
                    return "mediaKey: buffer expected";
            }
            if (message.directPath != null && message.hasOwnProperty("directPath")) {
                properties._directPath = 1;
                if (!$util.isString(message.directPath))
                    return "directPath: string expected";
            }
            if (message.handle != null && message.hasOwnProperty("handle")) {
                properties._handle = 1;
                if (!$util.isString(message.handle))
                    return "handle: string expected";
            }
            if (message.fileSizeBytes != null && message.hasOwnProperty("fileSizeBytes")) {
                properties._fileSizeBytes = 1;
                if (!$util.isInteger(message.fileSizeBytes) && !(message.fileSizeBytes && $util.isInteger(message.fileSizeBytes.low) && $util.isInteger(message.fileSizeBytes.high)))
                    return "fileSizeBytes: integer|Long expected";
            }
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256")) {
                properties._fileSha256 = 1;
                if (!(message.fileSha256 && typeof message.fileSha256.length === "number" || $util.isString(message.fileSha256)))
                    return "fileSha256: buffer expected";
            }
            if (message.fileEncSha256 != null && message.hasOwnProperty("fileEncSha256")) {
                properties._fileEncSha256 = 1;
                if (!(message.fileEncSha256 && typeof message.fileEncSha256.length === "number" || $util.isString(message.fileEncSha256)))
                    return "fileEncSha256: buffer expected";
            }
            return null;
        };

        /**
         * Creates an ExternalBlobReference message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.ExternalBlobReference} ExternalBlobReference
         */
        ExternalBlobReference.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.ExternalBlobReference)
                return object;
            var message = new $root.ServerSync.ExternalBlobReference();
            if (object.mediaKey != null)
                if (typeof object.mediaKey === "string")
                    $util.base64.decode(object.mediaKey, message.mediaKey = $util.newBuffer($util.base64.length(object.mediaKey)), 0);
                else if (object.mediaKey.length >= 0)
                    message.mediaKey = object.mediaKey;
            if (object.directPath != null)
                message.directPath = String(object.directPath);
            if (object.handle != null)
                message.handle = String(object.handle);
            if (object.fileSizeBytes != null)
                if ($util.Long)
                    (message.fileSizeBytes = $util.Long.fromValue(object.fileSizeBytes)).unsigned = true;
                else if (typeof object.fileSizeBytes === "string")
                    message.fileSizeBytes = parseInt(object.fileSizeBytes, 10);
                else if (typeof object.fileSizeBytes === "number")
                    message.fileSizeBytes = object.fileSizeBytes;
                else if (typeof object.fileSizeBytes === "object")
                    message.fileSizeBytes = new $util.LongBits(object.fileSizeBytes.low >>> 0, object.fileSizeBytes.high >>> 0).toNumber(true);
            if (object.fileSha256 != null)
                if (typeof object.fileSha256 === "string")
                    $util.base64.decode(object.fileSha256, message.fileSha256 = $util.newBuffer($util.base64.length(object.fileSha256)), 0);
                else if (object.fileSha256.length >= 0)
                    message.fileSha256 = object.fileSha256;
            if (object.fileEncSha256 != null)
                if (typeof object.fileEncSha256 === "string")
                    $util.base64.decode(object.fileEncSha256, message.fileEncSha256 = $util.newBuffer($util.base64.length(object.fileEncSha256)), 0);
                else if (object.fileEncSha256.length >= 0)
                    message.fileEncSha256 = object.fileEncSha256;
            return message;
        };

        /**
         * Creates a plain object from an ExternalBlobReference message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {ServerSync.ExternalBlobReference} message ExternalBlobReference
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExternalBlobReference.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.mediaKey != null && message.hasOwnProperty("mediaKey")) {
                object.mediaKey = options.bytes === String ? $util.base64.encode(message.mediaKey, 0, message.mediaKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.mediaKey) : message.mediaKey;
                if (options.oneofs)
                    object._mediaKey = "mediaKey";
            }
            if (message.directPath != null && message.hasOwnProperty("directPath")) {
                object.directPath = message.directPath;
                if (options.oneofs)
                    object._directPath = "directPath";
            }
            if (message.handle != null && message.hasOwnProperty("handle")) {
                object.handle = message.handle;
                if (options.oneofs)
                    object._handle = "handle";
            }
            if (message.fileSizeBytes != null && message.hasOwnProperty("fileSizeBytes")) {
                if (typeof message.fileSizeBytes === "number")
                    object.fileSizeBytes = options.longs === String ? String(message.fileSizeBytes) : message.fileSizeBytes;
                else
                    object.fileSizeBytes = options.longs === String ? $util.Long.prototype.toString.call(message.fileSizeBytes) : options.longs === Number ? new $util.LongBits(message.fileSizeBytes.low >>> 0, message.fileSizeBytes.high >>> 0).toNumber(true) : message.fileSizeBytes;
                if (options.oneofs)
                    object._fileSizeBytes = "fileSizeBytes";
            }
            if (message.fileSha256 != null && message.hasOwnProperty("fileSha256")) {
                object.fileSha256 = options.bytes === String ? $util.base64.encode(message.fileSha256, 0, message.fileSha256.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileSha256) : message.fileSha256;
                if (options.oneofs)
                    object._fileSha256 = "fileSha256";
            }
            if (message.fileEncSha256 != null && message.hasOwnProperty("fileEncSha256")) {
                object.fileEncSha256 = options.bytes === String ? $util.base64.encode(message.fileEncSha256, 0, message.fileEncSha256.length) : options.bytes === Array ? Array.prototype.slice.call(message.fileEncSha256) : message.fileEncSha256;
                if (options.oneofs)
                    object._fileEncSha256 = "fileEncSha256";
            }
            return object;
        };

        /**
         * Converts this ExternalBlobReference to JSON.
         * @function toJSON
         * @memberof ServerSync.ExternalBlobReference
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExternalBlobReference.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExternalBlobReference
         * @function getTypeUrl
         * @memberof ServerSync.ExternalBlobReference
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExternalBlobReference.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.ExternalBlobReference";
        };

        return ExternalBlobReference;
    })();

    ServerSync.SyncdRecord = (function() {

        /**
         * Properties of a SyncdRecord.
         * @memberof ServerSync
         * @interface ISyncdRecord
         * @property {ServerSync.ISyncdIndex|null} [index] SyncdRecord index
         * @property {ServerSync.ISyncdValue|null} [value] SyncdRecord value
         * @property {ServerSync.IKeyId|null} [keyId] SyncdRecord keyId
         */

        /**
         * Constructs a new SyncdRecord.
         * @memberof ServerSync
         * @classdesc Represents a SyncdRecord.
         * @implements ISyncdRecord
         * @constructor
         * @param {ServerSync.ISyncdRecord=} [properties] Properties to set
         */
        function SyncdRecord(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdRecord index.
         * @member {ServerSync.ISyncdIndex|null|undefined} index
         * @memberof ServerSync.SyncdRecord
         * @instance
         */
        SyncdRecord.prototype.index = null;

        /**
         * SyncdRecord value.
         * @member {ServerSync.ISyncdValue|null|undefined} value
         * @memberof ServerSync.SyncdRecord
         * @instance
         */
        SyncdRecord.prototype.value = null;

        /**
         * SyncdRecord keyId.
         * @member {ServerSync.IKeyId|null|undefined} keyId
         * @memberof ServerSync.SyncdRecord
         * @instance
         */
        SyncdRecord.prototype.keyId = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_index", {
            get: $util.oneOfGetter($oneOfFields = ["index"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_value", {
            get: $util.oneOfGetter($oneOfFields = ["value"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdRecord.prototype, "_keyId", {
            get: $util.oneOfGetter($oneOfFields = ["keyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdRecord instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {ServerSync.ISyncdRecord=} [properties] Properties to set
         * @returns {ServerSync.SyncdRecord} SyncdRecord instance
         */
        SyncdRecord.create = function create(properties) {
            return new SyncdRecord(properties);
        };

        /**
         * Encodes the specified SyncdRecord message. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {ServerSync.ISyncdRecord} message SyncdRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdRecord.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.index != null && Object.hasOwnProperty.call(message, "index"))
                $root.ServerSync.SyncdIndex.encode(message.index, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                $root.ServerSync.SyncdValue.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.keyId != null && Object.hasOwnProperty.call(message, "keyId"))
                $root.ServerSync.KeyId.encode(message.keyId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified SyncdRecord message, length delimited. Does not implicitly {@link ServerSync.SyncdRecord.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {ServerSync.ISyncdRecord} message SyncdRecord message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdRecord.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdRecord message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdRecord} SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdRecord.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdRecord();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.index = $root.ServerSync.SyncdIndex.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.value = $root.ServerSync.SyncdValue.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.keyId = $root.ServerSync.KeyId.decode(reader, reader.uint32());
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
         * Decodes a SyncdRecord message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdRecord} SyncdRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdRecord.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdRecord message.
         * @function verify
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdRecord.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.index != null && message.hasOwnProperty("index")) {
                properties._index = 1;
                {
                    var error = $root.ServerSync.SyncdIndex.verify(message.index);
                    if (error)
                        return "index." + error;
                }
            }
            if (message.value != null && message.hasOwnProperty("value")) {
                properties._value = 1;
                {
                    var error = $root.ServerSync.SyncdValue.verify(message.value);
                    if (error)
                        return "value." + error;
                }
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                properties._keyId = 1;
                {
                    var error = $root.ServerSync.KeyId.verify(message.keyId);
                    if (error)
                        return "keyId." + error;
                }
            }
            return null;
        };

        /**
         * Creates a SyncdRecord message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdRecord} SyncdRecord
         */
        SyncdRecord.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdRecord)
                return object;
            var message = new $root.ServerSync.SyncdRecord();
            if (object.index != null) {
                if (typeof object.index !== "object")
                    throw TypeError(".ServerSync.SyncdRecord.index: object expected");
                message.index = $root.ServerSync.SyncdIndex.fromObject(object.index);
            }
            if (object.value != null) {
                if (typeof object.value !== "object")
                    throw TypeError(".ServerSync.SyncdRecord.value: object expected");
                message.value = $root.ServerSync.SyncdValue.fromObject(object.value);
            }
            if (object.keyId != null) {
                if (typeof object.keyId !== "object")
                    throw TypeError(".ServerSync.SyncdRecord.keyId: object expected");
                message.keyId = $root.ServerSync.KeyId.fromObject(object.keyId);
            }
            return message;
        };

        /**
         * Creates a plain object from a SyncdRecord message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {ServerSync.SyncdRecord} message SyncdRecord
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdRecord.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.index != null && message.hasOwnProperty("index")) {
                object.index = $root.ServerSync.SyncdIndex.toObject(message.index, options);
                if (options.oneofs)
                    object._index = "index";
            }
            if (message.value != null && message.hasOwnProperty("value")) {
                object.value = $root.ServerSync.SyncdValue.toObject(message.value, options);
                if (options.oneofs)
                    object._value = "value";
            }
            if (message.keyId != null && message.hasOwnProperty("keyId")) {
                object.keyId = $root.ServerSync.KeyId.toObject(message.keyId, options);
                if (options.oneofs)
                    object._keyId = "keyId";
            }
            return object;
        };

        /**
         * Converts this SyncdRecord to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdRecord
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdRecord.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdRecord
         * @function getTypeUrl
         * @memberof ServerSync.SyncdRecord
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdRecord.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdRecord";
        };

        return SyncdRecord;
    })();

    ServerSync.KeyId = (function() {

        /**
         * Properties of a KeyId.
         * @memberof ServerSync
         * @interface IKeyId
         * @property {Uint8Array|null} [id] KeyId id
         */

        /**
         * Constructs a new KeyId.
         * @memberof ServerSync
         * @classdesc Represents a KeyId.
         * @implements IKeyId
         * @constructor
         * @param {ServerSync.IKeyId=} [properties] Properties to set
         */
        function KeyId(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyId id.
         * @member {Uint8Array|null|undefined} id
         * @memberof ServerSync.KeyId
         * @instance
         */
        KeyId.prototype.id = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyId.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KeyId instance using the specified properties.
         * @function create
         * @memberof ServerSync.KeyId
         * @static
         * @param {ServerSync.IKeyId=} [properties] Properties to set
         * @returns {ServerSync.KeyId} KeyId instance
         */
        KeyId.create = function create(properties) {
            return new KeyId(properties);
        };

        /**
         * Encodes the specified KeyId message. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.KeyId
         * @static
         * @param {ServerSync.IKeyId} message KeyId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyId.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.id);
            return writer;
        };

        /**
         * Encodes the specified KeyId message, length delimited. Does not implicitly {@link ServerSync.KeyId.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.KeyId
         * @static
         * @param {ServerSync.IKeyId} message KeyId message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyId.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyId message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.KeyId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.KeyId} KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyId.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.KeyId();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.bytes();
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
         * Decodes a KeyId message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.KeyId
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.KeyId} KeyId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyId.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyId message.
         * @function verify
         * @memberof ServerSync.KeyId
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyId.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!(message.id && typeof message.id.length === "number" || $util.isString(message.id)))
                    return "id: buffer expected";
            }
            return null;
        };

        /**
         * Creates a KeyId message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.KeyId
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.KeyId} KeyId
         */
        KeyId.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.KeyId)
                return object;
            var message = new $root.ServerSync.KeyId();
            if (object.id != null)
                if (typeof object.id === "string")
                    $util.base64.decode(object.id, message.id = $util.newBuffer($util.base64.length(object.id)), 0);
                else if (object.id.length >= 0)
                    message.id = object.id;
            return message;
        };

        /**
         * Creates a plain object from a KeyId message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.KeyId
         * @static
         * @param {ServerSync.KeyId} message KeyId
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyId.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = options.bytes === String ? $util.base64.encode(message.id, 0, message.id.length) : options.bytes === Array ? Array.prototype.slice.call(message.id) : message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            return object;
        };

        /**
         * Converts this KeyId to JSON.
         * @function toJSON
         * @memberof ServerSync.KeyId
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyId.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyId
         * @function getTypeUrl
         * @memberof ServerSync.KeyId
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyId.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.KeyId";
        };

        return KeyId;
    })();

    ServerSync.SyncdValue = (function() {

        /**
         * Properties of a SyncdValue.
         * @memberof ServerSync
         * @interface ISyncdValue
         * @property {Uint8Array|null} [blob] SyncdValue blob
         */

        /**
         * Constructs a new SyncdValue.
         * @memberof ServerSync
         * @classdesc Represents a SyncdValue.
         * @implements ISyncdValue
         * @constructor
         * @param {ServerSync.ISyncdValue=} [properties] Properties to set
         */
        function SyncdValue(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdValue blob.
         * @member {Uint8Array|null|undefined} blob
         * @memberof ServerSync.SyncdValue
         * @instance
         */
        SyncdValue.prototype.blob = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdValue.prototype, "_blob", {
            get: $util.oneOfGetter($oneOfFields = ["blob"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdValue instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {ServerSync.ISyncdValue=} [properties] Properties to set
         * @returns {ServerSync.SyncdValue} SyncdValue instance
         */
        SyncdValue.create = function create(properties) {
            return new SyncdValue(properties);
        };

        /**
         * Encodes the specified SyncdValue message. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {ServerSync.ISyncdValue} message SyncdValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdValue.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blob != null && Object.hasOwnProperty.call(message, "blob"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blob);
            return writer;
        };

        /**
         * Encodes the specified SyncdValue message, length delimited. Does not implicitly {@link ServerSync.SyncdValue.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {ServerSync.ISyncdValue} message SyncdValue message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdValue.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdValue message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdValue} SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdValue.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdValue();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.blob = reader.bytes();
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
         * Decodes a SyncdValue message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdValue} SyncdValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdValue.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdValue message.
         * @function verify
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdValue.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.blob != null && message.hasOwnProperty("blob")) {
                properties._blob = 1;
                if (!(message.blob && typeof message.blob.length === "number" || $util.isString(message.blob)))
                    return "blob: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SyncdValue message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdValue} SyncdValue
         */
        SyncdValue.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdValue)
                return object;
            var message = new $root.ServerSync.SyncdValue();
            if (object.blob != null)
                if (typeof object.blob === "string")
                    $util.base64.decode(object.blob, message.blob = $util.newBuffer($util.base64.length(object.blob)), 0);
                else if (object.blob.length >= 0)
                    message.blob = object.blob;
            return message;
        };

        /**
         * Creates a plain object from a SyncdValue message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {ServerSync.SyncdValue} message SyncdValue
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdValue.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.blob != null && message.hasOwnProperty("blob")) {
                object.blob = options.bytes === String ? $util.base64.encode(message.blob, 0, message.blob.length) : options.bytes === Array ? Array.prototype.slice.call(message.blob) : message.blob;
                if (options.oneofs)
                    object._blob = "blob";
            }
            return object;
        };

        /**
         * Converts this SyncdValue to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdValue
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdValue.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdValue
         * @function getTypeUrl
         * @memberof ServerSync.SyncdValue
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdValue.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdValue";
        };

        return SyncdValue;
    })();

    ServerSync.SyncdIndex = (function() {

        /**
         * Properties of a SyncdIndex.
         * @memberof ServerSync
         * @interface ISyncdIndex
         * @property {Uint8Array|null} [blob] SyncdIndex blob
         */

        /**
         * Constructs a new SyncdIndex.
         * @memberof ServerSync
         * @classdesc Represents a SyncdIndex.
         * @implements ISyncdIndex
         * @constructor
         * @param {ServerSync.ISyncdIndex=} [properties] Properties to set
         */
        function SyncdIndex(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdIndex blob.
         * @member {Uint8Array|null|undefined} blob
         * @memberof ServerSync.SyncdIndex
         * @instance
         */
        SyncdIndex.prototype.blob = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdIndex.prototype, "_blob", {
            get: $util.oneOfGetter($oneOfFields = ["blob"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdIndex instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {ServerSync.ISyncdIndex=} [properties] Properties to set
         * @returns {ServerSync.SyncdIndex} SyncdIndex instance
         */
        SyncdIndex.create = function create(properties) {
            return new SyncdIndex(properties);
        };

        /**
         * Encodes the specified SyncdIndex message. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {ServerSync.ISyncdIndex} message SyncdIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdIndex.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.blob != null && Object.hasOwnProperty.call(message, "blob"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.blob);
            return writer;
        };

        /**
         * Encodes the specified SyncdIndex message, length delimited. Does not implicitly {@link ServerSync.SyncdIndex.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {ServerSync.ISyncdIndex} message SyncdIndex message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdIndex.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdIndex message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdIndex} SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdIndex.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdIndex();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.blob = reader.bytes();
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
         * Decodes a SyncdIndex message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdIndex} SyncdIndex
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdIndex.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdIndex message.
         * @function verify
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdIndex.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.blob != null && message.hasOwnProperty("blob")) {
                properties._blob = 1;
                if (!(message.blob && typeof message.blob.length === "number" || $util.isString(message.blob)))
                    return "blob: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SyncdIndex message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdIndex} SyncdIndex
         */
        SyncdIndex.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdIndex)
                return object;
            var message = new $root.ServerSync.SyncdIndex();
            if (object.blob != null)
                if (typeof object.blob === "string")
                    $util.base64.decode(object.blob, message.blob = $util.newBuffer($util.base64.length(object.blob)), 0);
                else if (object.blob.length >= 0)
                    message.blob = object.blob;
            return message;
        };

        /**
         * Creates a plain object from a SyncdIndex message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {ServerSync.SyncdIndex} message SyncdIndex
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdIndex.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.blob != null && message.hasOwnProperty("blob")) {
                object.blob = options.bytes === String ? $util.base64.encode(message.blob, 0, message.blob.length) : options.bytes === Array ? Array.prototype.slice.call(message.blob) : message.blob;
                if (options.oneofs)
                    object._blob = "blob";
            }
            return object;
        };

        /**
         * Converts this SyncdIndex to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdIndex
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdIndex.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdIndex
         * @function getTypeUrl
         * @memberof ServerSync.SyncdIndex
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdIndex.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdIndex";
        };

        return SyncdIndex;
    })();

    ServerSync.ExitCode = (function() {

        /**
         * Properties of an ExitCode.
         * @memberof ServerSync
         * @interface IExitCode
         * @property {number|Long|null} [code] ExitCode code
         * @property {string|null} [text] ExitCode text
         */

        /**
         * Constructs a new ExitCode.
         * @memberof ServerSync
         * @classdesc Represents an ExitCode.
         * @implements IExitCode
         * @constructor
         * @param {ServerSync.IExitCode=} [properties] Properties to set
         */
        function ExitCode(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ExitCode code.
         * @member {number|Long|null|undefined} code
         * @memberof ServerSync.ExitCode
         * @instance
         */
        ExitCode.prototype.code = null;

        /**
         * ExitCode text.
         * @member {string|null|undefined} text
         * @memberof ServerSync.ExitCode
         * @instance
         */
        ExitCode.prototype.text = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExitCode.prototype, "_code", {
            get: $util.oneOfGetter($oneOfFields = ["code"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ExitCode.prototype, "_text", {
            get: $util.oneOfGetter($oneOfFields = ["text"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ExitCode instance using the specified properties.
         * @function create
         * @memberof ServerSync.ExitCode
         * @static
         * @param {ServerSync.IExitCode=} [properties] Properties to set
         * @returns {ServerSync.ExitCode} ExitCode instance
         */
        ExitCode.create = function create(properties) {
            return new ExitCode(properties);
        };

        /**
         * Encodes the specified ExitCode message. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.ExitCode
         * @static
         * @param {ServerSync.IExitCode} message ExitCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitCode.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.code);
            if (message.text != null && Object.hasOwnProperty.call(message, "text"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.text);
            return writer;
        };

        /**
         * Encodes the specified ExitCode message, length delimited. Does not implicitly {@link ServerSync.ExitCode.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.ExitCode
         * @static
         * @param {ServerSync.IExitCode} message ExitCode message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ExitCode.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an ExitCode message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.ExitCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.ExitCode} ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitCode.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.ExitCode();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.code = reader.uint64();
                        break;
                    }
                case 2: {
                        message.text = reader.string();
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
         * Decodes an ExitCode message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.ExitCode
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.ExitCode} ExitCode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ExitCode.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an ExitCode message.
         * @function verify
         * @memberof ServerSync.ExitCode
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ExitCode.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.code != null && message.hasOwnProperty("code")) {
                properties._code = 1;
                if (!$util.isInteger(message.code) && !(message.code && $util.isInteger(message.code.low) && $util.isInteger(message.code.high)))
                    return "code: integer|Long expected";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                properties._text = 1;
                if (!$util.isString(message.text))
                    return "text: string expected";
            }
            return null;
        };

        /**
         * Creates an ExitCode message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.ExitCode
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.ExitCode} ExitCode
         */
        ExitCode.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.ExitCode)
                return object;
            var message = new $root.ServerSync.ExitCode();
            if (object.code != null)
                if ($util.Long)
                    (message.code = $util.Long.fromValue(object.code)).unsigned = true;
                else if (typeof object.code === "string")
                    message.code = parseInt(object.code, 10);
                else if (typeof object.code === "number")
                    message.code = object.code;
                else if (typeof object.code === "object")
                    message.code = new $util.LongBits(object.code.low >>> 0, object.code.high >>> 0).toNumber(true);
            if (object.text != null)
                message.text = String(object.text);
            return message;
        };

        /**
         * Creates a plain object from an ExitCode message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.ExitCode
         * @static
         * @param {ServerSync.ExitCode} message ExitCode
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ExitCode.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.code != null && message.hasOwnProperty("code")) {
                if (typeof message.code === "number")
                    object.code = options.longs === String ? String(message.code) : message.code;
                else
                    object.code = options.longs === String ? $util.Long.prototype.toString.call(message.code) : options.longs === Number ? new $util.LongBits(message.code.low >>> 0, message.code.high >>> 0).toNumber(true) : message.code;
                if (options.oneofs)
                    object._code = "code";
            }
            if (message.text != null && message.hasOwnProperty("text")) {
                object.text = message.text;
                if (options.oneofs)
                    object._text = "text";
            }
            return object;
        };

        /**
         * Converts this ExitCode to JSON.
         * @function toJSON
         * @memberof ServerSync.ExitCode
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ExitCode.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ExitCode
         * @function getTypeUrl
         * @memberof ServerSync.ExitCode
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ExitCode.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.ExitCode";
        };

        return ExitCode;
    })();

    ServerSync.SyncdVersion = (function() {

        /**
         * Properties of a SyncdVersion.
         * @memberof ServerSync
         * @interface ISyncdVersion
         * @property {number|Long|null} [version] SyncdVersion version
         */

        /**
         * Constructs a new SyncdVersion.
         * @memberof ServerSync
         * @classdesc Represents a SyncdVersion.
         * @implements ISyncdVersion
         * @constructor
         * @param {ServerSync.ISyncdVersion=} [properties] Properties to set
         */
        function SyncdVersion(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SyncdVersion version.
         * @member {number|Long|null|undefined} version
         * @memberof ServerSync.SyncdVersion
         * @instance
         */
        SyncdVersion.prototype.version = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SyncdVersion.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SyncdVersion instance using the specified properties.
         * @function create
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {ServerSync.ISyncdVersion=} [properties] Properties to set
         * @returns {ServerSync.SyncdVersion} SyncdVersion instance
         */
        SyncdVersion.create = function create(properties) {
            return new SyncdVersion(properties);
        };

        /**
         * Encodes the specified SyncdVersion message. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @function encode
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {ServerSync.ISyncdVersion} message SyncdVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdVersion.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
            return writer;
        };

        /**
         * Encodes the specified SyncdVersion message, length delimited. Does not implicitly {@link ServerSync.SyncdVersion.verify|verify} messages.
         * @function encodeDelimited
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {ServerSync.ISyncdVersion} message SyncdVersion message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SyncdVersion.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SyncdVersion message from the specified reader or buffer.
         * @function decode
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {ServerSync.SyncdVersion} SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdVersion.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ServerSync.SyncdVersion();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.version = reader.uint64();
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
         * Decodes a SyncdVersion message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {ServerSync.SyncdVersion} SyncdVersion
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SyncdVersion.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SyncdVersion message.
         * @function verify
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SyncdVersion.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                    return "version: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a SyncdVersion message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {ServerSync.SyncdVersion} SyncdVersion
         */
        SyncdVersion.fromObject = function fromObject(object) {
            if (object instanceof $root.ServerSync.SyncdVersion)
                return object;
            var message = new $root.ServerSync.SyncdVersion();
            if (object.version != null)
                if ($util.Long)
                    (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                else if (typeof object.version === "string")
                    message.version = parseInt(object.version, 10);
                else if (typeof object.version === "number")
                    message.version = object.version;
                else if (typeof object.version === "object")
                    message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a SyncdVersion message. Also converts values to other types if specified.
         * @function toObject
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {ServerSync.SyncdVersion} message SyncdVersion
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SyncdVersion.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.version != null && message.hasOwnProperty("version")) {
                if (typeof message.version === "number")
                    object.version = options.longs === String ? String(message.version) : message.version;
                else
                    object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                if (options.oneofs)
                    object._version = "version";
            }
            return object;
        };

        /**
         * Converts this SyncdVersion to JSON.
         * @function toJSON
         * @memberof ServerSync.SyncdVersion
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SyncdVersion.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SyncdVersion
         * @function getTypeUrl
         * @memberof ServerSync.SyncdVersion
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SyncdVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/ServerSync.SyncdVersion";
        };

        return SyncdVersion;
    })();

    return ServerSync;
})();

module.exports = $root;
