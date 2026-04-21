/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.SignalWhisperTextProtocol = (function() {

    /**
     * Namespace SignalWhisperTextProtocol.
     * @exports SignalWhisperTextProtocol
     * @namespace
     */
    var SignalWhisperTextProtocol = {};

    SignalWhisperTextProtocol.DeviceConsistencyCodeMessage = (function() {

        /**
         * Properties of a DeviceConsistencyCodeMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface IDeviceConsistencyCodeMessage
         * @property {number|null} [generation] DeviceConsistencyCodeMessage generation
         * @property {Uint8Array|null} [signature] DeviceConsistencyCodeMessage signature
         */

        /**
         * Constructs a new DeviceConsistencyCodeMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a DeviceConsistencyCodeMessage.
         * @implements IDeviceConsistencyCodeMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage=} [properties] Properties to set
         */
        function DeviceConsistencyCodeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DeviceConsistencyCodeMessage generation.
         * @member {number|null|undefined} generation
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @instance
         */
        DeviceConsistencyCodeMessage.prototype.generation = null;

        /**
         * DeviceConsistencyCodeMessage signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @instance
         */
        DeviceConsistencyCodeMessage.prototype.signature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_generation", {
            get: $util.oneOfGetter($oneOfFields = ["generation"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(DeviceConsistencyCodeMessage.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new DeviceConsistencyCodeMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage instance
         */
        DeviceConsistencyCodeMessage.create = function create(properties) {
            return new DeviceConsistencyCodeMessage(properties);
        };

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConsistencyCodeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.generation != null && Object.hasOwnProperty.call(message, "generation"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.generation);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified DeviceConsistencyCodeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.DeviceConsistencyCodeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IDeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DeviceConsistencyCodeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConsistencyCodeMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.generation = reader.uint32();
                        break;
                    }
                case 2: {
                        message.signature = reader.bytes();
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
         * Decodes a DeviceConsistencyCodeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DeviceConsistencyCodeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DeviceConsistencyCodeMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DeviceConsistencyCodeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.generation != null && message.hasOwnProperty("generation")) {
                properties._generation = 1;
                if (!$util.isInteger(message.generation))
                    return "generation: integer expected";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a DeviceConsistencyCodeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage} DeviceConsistencyCodeMessage
         */
        DeviceConsistencyCodeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.DeviceConsistencyCodeMessage();
            if (object.generation != null)
                message.generation = object.generation >>> 0;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a DeviceConsistencyCodeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {SignalWhisperTextProtocol.DeviceConsistencyCodeMessage} message DeviceConsistencyCodeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DeviceConsistencyCodeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.generation != null && message.hasOwnProperty("generation")) {
                object.generation = message.generation;
                if (options.oneofs)
                    object._generation = "generation";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (options.oneofs)
                    object._signature = "signature";
            }
            return object;
        };

        /**
         * Converts this DeviceConsistencyCodeMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DeviceConsistencyCodeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for DeviceConsistencyCodeMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.DeviceConsistencyCodeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        DeviceConsistencyCodeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.DeviceConsistencyCodeMessage";
        };

        return DeviceConsistencyCodeMessage;
    })();

    SignalWhisperTextProtocol.SenderKeyDistributionMessage = (function() {

        /**
         * Properties of a SenderKeyDistributionMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface ISenderKeyDistributionMessage
         * @property {number|null} [id] SenderKeyDistributionMessage id
         * @property {number|null} [iteration] SenderKeyDistributionMessage iteration
         * @property {Uint8Array|null} [chainKey] SenderKeyDistributionMessage chainKey
         * @property {Uint8Array|null} [signingKey] SenderKeyDistributionMessage signingKey
         */

        /**
         * Constructs a new SenderKeyDistributionMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a SenderKeyDistributionMessage.
         * @implements ISenderKeyDistributionMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.ISenderKeyDistributionMessage=} [properties] Properties to set
         */
        function SenderKeyDistributionMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyDistributionMessage id.
         * @member {number|null|undefined} id
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.id = null;

        /**
         * SenderKeyDistributionMessage iteration.
         * @member {number|null|undefined} iteration
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.iteration = null;

        /**
         * SenderKeyDistributionMessage chainKey.
         * @member {Uint8Array|null|undefined} chainKey
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.chainKey = null;

        /**
         * SenderKeyDistributionMessage signingKey.
         * @member {Uint8Array|null|undefined} signingKey
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @instance
         */
        SenderKeyDistributionMessage.prototype.signingKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_chainKey", {
            get: $util.oneOfGetter($oneOfFields = ["chainKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyDistributionMessage.prototype, "_signingKey", {
            get: $util.oneOfGetter($oneOfFields = ["signingKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyDistributionMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyDistributionMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage} SenderKeyDistributionMessage instance
         */
        SenderKeyDistributionMessage.create = function create(properties) {
            return new SenderKeyDistributionMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.chainKey != null && Object.hasOwnProperty.call(message, "chainKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.chainKey);
            if (message.signingKey != null && Object.hasOwnProperty.call(message, "signingKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.signingKey);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyDistributionMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyDistributionMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyDistributionMessage} message SenderKeyDistributionMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyDistributionMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.chainKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.signingKey = reader.bytes();
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
         * Decodes a SenderKeyDistributionMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyDistributionMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyDistributionMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyDistributionMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                properties._iteration = 1;
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            }
            if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                properties._chainKey = 1;
                if (!(message.chainKey && typeof message.chainKey.length === "number" || $util.isString(message.chainKey)))
                    return "chainKey: buffer expected";
            }
            if (message.signingKey != null && message.hasOwnProperty("signingKey")) {
                properties._signingKey = 1;
                if (!(message.signingKey && typeof message.signingKey.length === "number" || $util.isString(message.signingKey)))
                    return "signingKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SenderKeyDistributionMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.SenderKeyDistributionMessage} SenderKeyDistributionMessage
         */
        SenderKeyDistributionMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.SenderKeyDistributionMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.chainKey != null)
                if (typeof object.chainKey === "string")
                    $util.base64.decode(object.chainKey, message.chainKey = $util.newBuffer($util.base64.length(object.chainKey)), 0);
                else if (object.chainKey.length >= 0)
                    message.chainKey = object.chainKey;
            if (object.signingKey != null)
                if (typeof object.signingKey === "string")
                    $util.base64.decode(object.signingKey, message.signingKey = $util.newBuffer($util.base64.length(object.signingKey)), 0);
                else if (object.signingKey.length >= 0)
                    message.signingKey = object.signingKey;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyDistributionMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {SignalWhisperTextProtocol.SenderKeyDistributionMessage} message SenderKeyDistributionMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyDistributionMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                object.iteration = message.iteration;
                if (options.oneofs)
                    object._iteration = "iteration";
            }
            if (message.chainKey != null && message.hasOwnProperty("chainKey")) {
                object.chainKey = options.bytes === String ? $util.base64.encode(message.chainKey, 0, message.chainKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.chainKey) : message.chainKey;
                if (options.oneofs)
                    object._chainKey = "chainKey";
            }
            if (message.signingKey != null && message.hasOwnProperty("signingKey")) {
                object.signingKey = options.bytes === String ? $util.base64.encode(message.signingKey, 0, message.signingKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.signingKey) : message.signingKey;
                if (options.oneofs)
                    object._signingKey = "signingKey";
            }
            return object;
        };

        /**
         * Converts this SenderKeyDistributionMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyDistributionMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyDistributionMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.SenderKeyDistributionMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyDistributionMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.SenderKeyDistributionMessage";
        };

        return SenderKeyDistributionMessage;
    })();

    SignalWhisperTextProtocol.SenderKeyMessage = (function() {

        /**
         * Properties of a SenderKeyMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface ISenderKeyMessage
         * @property {number|null} [id] SenderKeyMessage id
         * @property {number|null} [iteration] SenderKeyMessage iteration
         * @property {Uint8Array|null} [ciphertext] SenderKeyMessage ciphertext
         */

        /**
         * Constructs a new SenderKeyMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a SenderKeyMessage.
         * @implements ISenderKeyMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.ISenderKeyMessage=} [properties] Properties to set
         */
        function SenderKeyMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SenderKeyMessage id.
         * @member {number|null|undefined} id
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.id = null;

        /**
         * SenderKeyMessage iteration.
         * @member {number|null|undefined} iteration
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.iteration = null;

        /**
         * SenderKeyMessage ciphertext.
         * @member {Uint8Array|null|undefined} ciphertext
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @instance
         */
        SenderKeyMessage.prototype.ciphertext = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_iteration", {
            get: $util.oneOfGetter($oneOfFields = ["iteration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SenderKeyMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SenderKeyMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage} SenderKeyMessage instance
         */
        SenderKeyMessage.create = function create(properties) {
            return new SenderKeyMessage(properties);
        };

        /**
         * Encodes the specified SenderKeyMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.iteration != null && Object.hasOwnProperty.call(message, "iteration"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.iteration);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SenderKeyMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SenderKeyMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISenderKeyMessage} message SenderKeyMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SenderKeyMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SenderKeyMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.SenderKeyMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.iteration = reader.uint32();
                        break;
                    }
                case 3: {
                        message.ciphertext = reader.bytes();
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
         * Decodes a SenderKeyMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage} SenderKeyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SenderKeyMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SenderKeyMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SenderKeyMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                properties._iteration = 1;
                if (!$util.isInteger(message.iteration))
                    return "iteration: integer expected";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                properties._ciphertext = 1;
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SenderKeyMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.SenderKeyMessage} SenderKeyMessage
         */
        SenderKeyMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.SenderKeyMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.SenderKeyMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.iteration != null)
                message.iteration = object.iteration >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SenderKeyMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {SignalWhisperTextProtocol.SenderKeyMessage} message SenderKeyMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SenderKeyMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.iteration != null && message.hasOwnProperty("iteration")) {
                object.iteration = message.iteration;
                if (options.oneofs)
                    object._iteration = "iteration";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
                if (options.oneofs)
                    object._ciphertext = "ciphertext";
            }
            return object;
        };

        /**
         * Converts this SenderKeyMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SenderKeyMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SenderKeyMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.SenderKeyMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SenderKeyMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.SenderKeyMessage";
        };

        return SenderKeyMessage;
    })();

    SignalWhisperTextProtocol.KeyExchangeMessage = (function() {

        /**
         * Properties of a KeyExchangeMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface IKeyExchangeMessage
         * @property {number|null} [id] KeyExchangeMessage id
         * @property {Uint8Array|null} [baseKey] KeyExchangeMessage baseKey
         * @property {Uint8Array|null} [ratchetKey] KeyExchangeMessage ratchetKey
         * @property {Uint8Array|null} [identityKey] KeyExchangeMessage identityKey
         * @property {Uint8Array|null} [baseKeySignature] KeyExchangeMessage baseKeySignature
         */

        /**
         * Constructs a new KeyExchangeMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a KeyExchangeMessage.
         * @implements IKeyExchangeMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.IKeyExchangeMessage=} [properties] Properties to set
         */
        function KeyExchangeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * KeyExchangeMessage id.
         * @member {number|null|undefined} id
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.id = null;

        /**
         * KeyExchangeMessage baseKey.
         * @member {Uint8Array|null|undefined} baseKey
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKey = null;

        /**
         * KeyExchangeMessage ratchetKey.
         * @member {Uint8Array|null|undefined} ratchetKey
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.ratchetKey = null;

        /**
         * KeyExchangeMessage identityKey.
         * @member {Uint8Array|null|undefined} identityKey
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.identityKey = null;

        /**
         * KeyExchangeMessage baseKeySignature.
         * @member {Uint8Array|null|undefined} baseKeySignature
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         */
        KeyExchangeMessage.prototype.baseKeySignature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_id", {
            get: $util.oneOfGetter($oneOfFields = ["id"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(KeyExchangeMessage.prototype, "_baseKeySignature", {
            get: $util.oneOfGetter($oneOfFields = ["baseKeySignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new KeyExchangeMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IKeyExchangeMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage} KeyExchangeMessage instance
         */
        KeyExchangeMessage.create = function create(properties) {
            return new KeyExchangeMessage(properties);
        };

        /**
         * Encodes the specified KeyExchangeMessage message. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.id);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.ratchetKey != null && Object.hasOwnProperty.call(message, "ratchetKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.ratchetKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.identityKey);
            if (message.baseKeySignature != null && Object.hasOwnProperty.call(message, "baseKeySignature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.baseKeySignature);
            return writer;
        };

        /**
         * Encodes the specified KeyExchangeMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.KeyExchangeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {SignalWhisperTextProtocol.IKeyExchangeMessage} message KeyExchangeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        KeyExchangeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a KeyExchangeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.KeyExchangeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.ratchetKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 5: {
                        message.baseKeySignature = reader.bytes();
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
         * Decodes a KeyExchangeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage} KeyExchangeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        KeyExchangeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a KeyExchangeMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        KeyExchangeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                properties._id = 1;
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                properties._baseKey = 1;
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            }
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                properties._ratchetKey = 1;
                if (!(message.ratchetKey && typeof message.ratchetKey.length === "number" || $util.isString(message.ratchetKey)))
                    return "ratchetKey: buffer expected";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                properties._identityKey = 1;
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            }
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature")) {
                properties._baseKeySignature = 1;
                if (!(message.baseKeySignature && typeof message.baseKeySignature.length === "number" || $util.isString(message.baseKeySignature)))
                    return "baseKeySignature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a KeyExchangeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.KeyExchangeMessage} KeyExchangeMessage
         */
        KeyExchangeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.KeyExchangeMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.KeyExchangeMessage();
            if (object.id != null)
                message.id = object.id >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.ratchetKey != null)
                if (typeof object.ratchetKey === "string")
                    $util.base64.decode(object.ratchetKey, message.ratchetKey = $util.newBuffer($util.base64.length(object.ratchetKey)), 0);
                else if (object.ratchetKey.length >= 0)
                    message.ratchetKey = object.ratchetKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.baseKeySignature != null)
                if (typeof object.baseKeySignature === "string")
                    $util.base64.decode(object.baseKeySignature, message.baseKeySignature = $util.newBuffer($util.base64.length(object.baseKeySignature)), 0);
                else if (object.baseKeySignature.length >= 0)
                    message.baseKeySignature = object.baseKeySignature;
            return message;
        };

        /**
         * Creates a plain object from a KeyExchangeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {SignalWhisperTextProtocol.KeyExchangeMessage} message KeyExchangeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        KeyExchangeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.id != null && message.hasOwnProperty("id")) {
                object.id = message.id;
                if (options.oneofs)
                    object._id = "id";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (options.oneofs)
                    object._baseKey = "baseKey";
            }
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                object.ratchetKey = options.bytes === String ? $util.base64.encode(message.ratchetKey, 0, message.ratchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ratchetKey) : message.ratchetKey;
                if (options.oneofs)
                    object._ratchetKey = "ratchetKey";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
                if (options.oneofs)
                    object._identityKey = "identityKey";
            }
            if (message.baseKeySignature != null && message.hasOwnProperty("baseKeySignature")) {
                object.baseKeySignature = options.bytes === String ? $util.base64.encode(message.baseKeySignature, 0, message.baseKeySignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKeySignature) : message.baseKeySignature;
                if (options.oneofs)
                    object._baseKeySignature = "baseKeySignature";
            }
            return object;
        };

        /**
         * Converts this KeyExchangeMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        KeyExchangeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for KeyExchangeMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.KeyExchangeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        KeyExchangeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.KeyExchangeMessage";
        };

        return KeyExchangeMessage;
    })();

    SignalWhisperTextProtocol.PreKeySignalMessage = (function() {

        /**
         * Properties of a PreKeySignalMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface IPreKeySignalMessage
         * @property {number|null} [registrationId] PreKeySignalMessage registrationId
         * @property {number|null} [preKeyId] PreKeySignalMessage preKeyId
         * @property {number|null} [signedPreKeyId] PreKeySignalMessage signedPreKeyId
         * @property {Uint8Array|null} [baseKey] PreKeySignalMessage baseKey
         * @property {Uint8Array|null} [identityKey] PreKeySignalMessage identityKey
         * @property {Uint8Array|null} [message] PreKeySignalMessage message
         */

        /**
         * Constructs a new PreKeySignalMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a PreKeySignalMessage.
         * @implements IPreKeySignalMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.IPreKeySignalMessage=} [properties] Properties to set
         */
        function PreKeySignalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PreKeySignalMessage registrationId.
         * @member {number|null|undefined} registrationId
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.registrationId = null;

        /**
         * PreKeySignalMessage preKeyId.
         * @member {number|null|undefined} preKeyId
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.preKeyId = null;

        /**
         * PreKeySignalMessage signedPreKeyId.
         * @member {number|null|undefined} signedPreKeyId
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.signedPreKeyId = null;

        /**
         * PreKeySignalMessage baseKey.
         * @member {Uint8Array|null|undefined} baseKey
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.baseKey = null;

        /**
         * PreKeySignalMessage identityKey.
         * @member {Uint8Array|null|undefined} identityKey
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.identityKey = null;

        /**
         * PreKeySignalMessage message.
         * @member {Uint8Array|null|undefined} message
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         */
        PreKeySignalMessage.prototype.message = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_registrationId", {
            get: $util.oneOfGetter($oneOfFields = ["registrationId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_preKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["preKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_signedPreKeyId", {
            get: $util.oneOfGetter($oneOfFields = ["signedPreKeyId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_baseKey", {
            get: $util.oneOfGetter($oneOfFields = ["baseKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_identityKey", {
            get: $util.oneOfGetter($oneOfFields = ["identityKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(PreKeySignalMessage.prototype, "_message", {
            get: $util.oneOfGetter($oneOfFields = ["message"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new PreKeySignalMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.IPreKeySignalMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage} PreKeySignalMessage instance
         */
        PreKeySignalMessage.create = function create(properties) {
            return new PreKeySignalMessage(properties);
        };

        /**
         * Encodes the specified PreKeySignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.IPreKeySignalMessage} message PreKeySignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeySignalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.preKeyId != null && Object.hasOwnProperty.call(message, "preKeyId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.preKeyId);
            if (message.baseKey != null && Object.hasOwnProperty.call(message, "baseKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.baseKey);
            if (message.identityKey != null && Object.hasOwnProperty.call(message, "identityKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.identityKey);
            if (message.message != null && Object.hasOwnProperty.call(message, "message"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.message);
            if (message.registrationId != null && Object.hasOwnProperty.call(message, "registrationId"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.registrationId);
            if (message.signedPreKeyId != null && Object.hasOwnProperty.call(message, "signedPreKeyId"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.signedPreKeyId);
            return writer;
        };

        /**
         * Encodes the specified PreKeySignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.PreKeySignalMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.IPreKeySignalMessage} message PreKeySignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PreKeySignalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PreKeySignalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeySignalMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.PreKeySignalMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 5: {
                        message.registrationId = reader.uint32();
                        break;
                    }
                case 1: {
                        message.preKeyId = reader.uint32();
                        break;
                    }
                case 6: {
                        message.signedPreKeyId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.baseKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.identityKey = reader.bytes();
                        break;
                    }
                case 4: {
                        message.message = reader.bytes();
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
         * Decodes a PreKeySignalMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage} PreKeySignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PreKeySignalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PreKeySignalMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PreKeySignalMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.registrationId != null && message.hasOwnProperty("registrationId")) {
                properties._registrationId = 1;
                if (!$util.isInteger(message.registrationId))
                    return "registrationId: integer expected";
            }
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                properties._preKeyId = 1;
                if (!$util.isInteger(message.preKeyId))
                    return "preKeyId: integer expected";
            }
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                properties._signedPreKeyId = 1;
                if (!$util.isInteger(message.signedPreKeyId))
                    return "signedPreKeyId: integer expected";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                properties._baseKey = 1;
                if (!(message.baseKey && typeof message.baseKey.length === "number" || $util.isString(message.baseKey)))
                    return "baseKey: buffer expected";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                properties._identityKey = 1;
                if (!(message.identityKey && typeof message.identityKey.length === "number" || $util.isString(message.identityKey)))
                    return "identityKey: buffer expected";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                properties._message = 1;
                if (!(message.message && typeof message.message.length === "number" || $util.isString(message.message)))
                    return "message: buffer expected";
            }
            return null;
        };

        /**
         * Creates a PreKeySignalMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.PreKeySignalMessage} PreKeySignalMessage
         */
        PreKeySignalMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.PreKeySignalMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.PreKeySignalMessage();
            if (object.registrationId != null)
                message.registrationId = object.registrationId >>> 0;
            if (object.preKeyId != null)
                message.preKeyId = object.preKeyId >>> 0;
            if (object.signedPreKeyId != null)
                message.signedPreKeyId = object.signedPreKeyId >>> 0;
            if (object.baseKey != null)
                if (typeof object.baseKey === "string")
                    $util.base64.decode(object.baseKey, message.baseKey = $util.newBuffer($util.base64.length(object.baseKey)), 0);
                else if (object.baseKey.length >= 0)
                    message.baseKey = object.baseKey;
            if (object.identityKey != null)
                if (typeof object.identityKey === "string")
                    $util.base64.decode(object.identityKey, message.identityKey = $util.newBuffer($util.base64.length(object.identityKey)), 0);
                else if (object.identityKey.length >= 0)
                    message.identityKey = object.identityKey;
            if (object.message != null)
                if (typeof object.message === "string")
                    $util.base64.decode(object.message, message.message = $util.newBuffer($util.base64.length(object.message)), 0);
                else if (object.message.length >= 0)
                    message.message = object.message;
            return message;
        };

        /**
         * Creates a plain object from a PreKeySignalMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.PreKeySignalMessage} message PreKeySignalMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PreKeySignalMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.preKeyId != null && message.hasOwnProperty("preKeyId")) {
                object.preKeyId = message.preKeyId;
                if (options.oneofs)
                    object._preKeyId = "preKeyId";
            }
            if (message.baseKey != null && message.hasOwnProperty("baseKey")) {
                object.baseKey = options.bytes === String ? $util.base64.encode(message.baseKey, 0, message.baseKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.baseKey) : message.baseKey;
                if (options.oneofs)
                    object._baseKey = "baseKey";
            }
            if (message.identityKey != null && message.hasOwnProperty("identityKey")) {
                object.identityKey = options.bytes === String ? $util.base64.encode(message.identityKey, 0, message.identityKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.identityKey) : message.identityKey;
                if (options.oneofs)
                    object._identityKey = "identityKey";
            }
            if (message.message != null && message.hasOwnProperty("message")) {
                object.message = options.bytes === String ? $util.base64.encode(message.message, 0, message.message.length) : options.bytes === Array ? Array.prototype.slice.call(message.message) : message.message;
                if (options.oneofs)
                    object._message = "message";
            }
            if (message.registrationId != null && message.hasOwnProperty("registrationId")) {
                object.registrationId = message.registrationId;
                if (options.oneofs)
                    object._registrationId = "registrationId";
            }
            if (message.signedPreKeyId != null && message.hasOwnProperty("signedPreKeyId")) {
                object.signedPreKeyId = message.signedPreKeyId;
                if (options.oneofs)
                    object._signedPreKeyId = "signedPreKeyId";
            }
            return object;
        };

        /**
         * Converts this PreKeySignalMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PreKeySignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for PreKeySignalMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.PreKeySignalMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PreKeySignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.PreKeySignalMessage";
        };

        return PreKeySignalMessage;
    })();

    SignalWhisperTextProtocol.SignalMessage = (function() {

        /**
         * Properties of a SignalMessage.
         * @memberof SignalWhisperTextProtocol
         * @interface ISignalMessage
         * @property {Uint8Array|null} [ratchetKey] SignalMessage ratchetKey
         * @property {number|null} [counter] SignalMessage counter
         * @property {number|null} [previousCounter] SignalMessage previousCounter
         * @property {Uint8Array|null} [ciphertext] SignalMessage ciphertext
         */

        /**
         * Constructs a new SignalMessage.
         * @memberof SignalWhisperTextProtocol
         * @classdesc Represents a SignalMessage.
         * @implements ISignalMessage
         * @constructor
         * @param {SignalWhisperTextProtocol.ISignalMessage=} [properties] Properties to set
         */
        function SignalMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignalMessage ratchetKey.
         * @member {Uint8Array|null|undefined} ratchetKey
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @instance
         */
        SignalMessage.prototype.ratchetKey = null;

        /**
         * SignalMessage counter.
         * @member {number|null|undefined} counter
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @instance
         */
        SignalMessage.prototype.counter = null;

        /**
         * SignalMessage previousCounter.
         * @member {number|null|undefined} previousCounter
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @instance
         */
        SignalMessage.prototype.previousCounter = null;

        /**
         * SignalMessage ciphertext.
         * @member {Uint8Array|null|undefined} ciphertext
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @instance
         */
        SignalMessage.prototype.ciphertext = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ratchetKey", {
            get: $util.oneOfGetter($oneOfFields = ["ratchetKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_counter", {
            get: $util.oneOfGetter($oneOfFields = ["counter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_previousCounter", {
            get: $util.oneOfGetter($oneOfFields = ["previousCounter"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(SignalMessage.prototype, "_ciphertext", {
            get: $util.oneOfGetter($oneOfFields = ["ciphertext"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new SignalMessage instance using the specified properties.
         * @function create
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISignalMessage=} [properties] Properties to set
         * @returns {SignalWhisperTextProtocol.SignalMessage} SignalMessage instance
         */
        SignalMessage.create = function create(properties) {
            return new SignalMessage(properties);
        };

        /**
         * Encodes the specified SignalMessage message. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @function encode
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISignalMessage} message SignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ratchetKey != null && Object.hasOwnProperty.call(message, "ratchetKey"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ratchetKey);
            if (message.counter != null && Object.hasOwnProperty.call(message, "counter"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.counter);
            if (message.previousCounter != null && Object.hasOwnProperty.call(message, "previousCounter"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.previousCounter);
            if (message.ciphertext != null && Object.hasOwnProperty.call(message, "ciphertext"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ciphertext);
            return writer;
        };

        /**
         * Encodes the specified SignalMessage message, length delimited. Does not implicitly {@link SignalWhisperTextProtocol.SignalMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.ISignalMessage} message SignalMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignalMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignalMessage message from the specified reader or buffer.
         * @function decode
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {SignalWhisperTextProtocol.SignalMessage} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.SignalWhisperTextProtocol.SignalMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.ratchetKey = reader.bytes();
                        break;
                    }
                case 2: {
                        message.counter = reader.uint32();
                        break;
                    }
                case 3: {
                        message.previousCounter = reader.uint32();
                        break;
                    }
                case 4: {
                        message.ciphertext = reader.bytes();
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
         * Decodes a SignalMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {SignalWhisperTextProtocol.SignalMessage} SignalMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignalMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignalMessage message.
         * @function verify
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignalMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                properties._ratchetKey = 1;
                if (!(message.ratchetKey && typeof message.ratchetKey.length === "number" || $util.isString(message.ratchetKey)))
                    return "ratchetKey: buffer expected";
            }
            if (message.counter != null && message.hasOwnProperty("counter")) {
                properties._counter = 1;
                if (!$util.isInteger(message.counter))
                    return "counter: integer expected";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                properties._previousCounter = 1;
                if (!$util.isInteger(message.previousCounter))
                    return "previousCounter: integer expected";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                properties._ciphertext = 1;
                if (!(message.ciphertext && typeof message.ciphertext.length === "number" || $util.isString(message.ciphertext)))
                    return "ciphertext: buffer expected";
            }
            return null;
        };

        /**
         * Creates a SignalMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {SignalWhisperTextProtocol.SignalMessage} SignalMessage
         */
        SignalMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.SignalWhisperTextProtocol.SignalMessage)
                return object;
            var message = new $root.SignalWhisperTextProtocol.SignalMessage();
            if (object.ratchetKey != null)
                if (typeof object.ratchetKey === "string")
                    $util.base64.decode(object.ratchetKey, message.ratchetKey = $util.newBuffer($util.base64.length(object.ratchetKey)), 0);
                else if (object.ratchetKey.length >= 0)
                    message.ratchetKey = object.ratchetKey;
            if (object.counter != null)
                message.counter = object.counter >>> 0;
            if (object.previousCounter != null)
                message.previousCounter = object.previousCounter >>> 0;
            if (object.ciphertext != null)
                if (typeof object.ciphertext === "string")
                    $util.base64.decode(object.ciphertext, message.ciphertext = $util.newBuffer($util.base64.length(object.ciphertext)), 0);
                else if (object.ciphertext.length >= 0)
                    message.ciphertext = object.ciphertext;
            return message;
        };

        /**
         * Creates a plain object from a SignalMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {SignalWhisperTextProtocol.SignalMessage} message SignalMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignalMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.ratchetKey != null && message.hasOwnProperty("ratchetKey")) {
                object.ratchetKey = options.bytes === String ? $util.base64.encode(message.ratchetKey, 0, message.ratchetKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.ratchetKey) : message.ratchetKey;
                if (options.oneofs)
                    object._ratchetKey = "ratchetKey";
            }
            if (message.counter != null && message.hasOwnProperty("counter")) {
                object.counter = message.counter;
                if (options.oneofs)
                    object._counter = "counter";
            }
            if (message.previousCounter != null && message.hasOwnProperty("previousCounter")) {
                object.previousCounter = message.previousCounter;
                if (options.oneofs)
                    object._previousCounter = "previousCounter";
            }
            if (message.ciphertext != null && message.hasOwnProperty("ciphertext")) {
                object.ciphertext = options.bytes === String ? $util.base64.encode(message.ciphertext, 0, message.ciphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.ciphertext) : message.ciphertext;
                if (options.oneofs)
                    object._ciphertext = "ciphertext";
            }
            return object;
        };

        /**
         * Converts this SignalMessage to JSON.
         * @function toJSON
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignalMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for SignalMessage
         * @function getTypeUrl
         * @memberof SignalWhisperTextProtocol.SignalMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        SignalMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/SignalWhisperTextProtocol.SignalMessage";
        };

        return SignalMessage;
    })();

    return SignalWhisperTextProtocol;
})();

module.exports = $root;
