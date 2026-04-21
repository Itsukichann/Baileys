/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.UserPassword = (function() {

    /**
     * Namespace UserPassword.
     * @exports UserPassword
     * @namespace
     */
    var UserPassword = {};

    UserPassword.UserPassword = (function() {

        /**
         * Properties of a UserPassword.
         * @memberof UserPassword
         * @interface IUserPassword
         * @property {UserPassword.UserPassword.Encoding|null} [encoding] UserPassword encoding
         * @property {UserPassword.UserPassword.Transformer|null} [transformer] UserPassword transformer
         * @property {Array.<UserPassword.UserPassword.ITransformerArg>|null} [transformerArg] UserPassword transformerArg
         * @property {Uint8Array|null} [transformedData] UserPassword transformedData
         */

        /**
         * Constructs a new UserPassword.
         * @memberof UserPassword
         * @classdesc Represents a UserPassword.
         * @implements IUserPassword
         * @constructor
         * @param {UserPassword.IUserPassword=} [properties] Properties to set
         */
        function UserPassword(properties) {
            this.transformerArg = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserPassword encoding.
         * @member {UserPassword.UserPassword.Encoding|null|undefined} encoding
         * @memberof UserPassword.UserPassword
         * @instance
         */
        UserPassword.prototype.encoding = null;

        /**
         * UserPassword transformer.
         * @member {UserPassword.UserPassword.Transformer|null|undefined} transformer
         * @memberof UserPassword.UserPassword
         * @instance
         */
        UserPassword.prototype.transformer = null;

        /**
         * UserPassword transformerArg.
         * @member {Array.<UserPassword.UserPassword.ITransformerArg>} transformerArg
         * @memberof UserPassword.UserPassword
         * @instance
         */
        UserPassword.prototype.transformerArg = $util.emptyArray;

        /**
         * UserPassword transformedData.
         * @member {Uint8Array|null|undefined} transformedData
         * @memberof UserPassword.UserPassword
         * @instance
         */
        UserPassword.prototype.transformedData = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_encoding", {
            get: $util.oneOfGetter($oneOfFields = ["encoding"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_transformer", {
            get: $util.oneOfGetter($oneOfFields = ["transformer"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(UserPassword.prototype, "_transformedData", {
            get: $util.oneOfGetter($oneOfFields = ["transformedData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new UserPassword instance using the specified properties.
         * @function create
         * @memberof UserPassword.UserPassword
         * @static
         * @param {UserPassword.IUserPassword=} [properties] Properties to set
         * @returns {UserPassword.UserPassword} UserPassword instance
         */
        UserPassword.create = function create(properties) {
            return new UserPassword(properties);
        };

        /**
         * Encodes the specified UserPassword message. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
         * @function encode
         * @memberof UserPassword.UserPassword
         * @static
         * @param {UserPassword.IUserPassword} message UserPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPassword.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.encoding != null && Object.hasOwnProperty.call(message, "encoding"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.encoding);
            if (message.transformer != null && Object.hasOwnProperty.call(message, "transformer"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.transformer);
            if (message.transformerArg != null && message.transformerArg.length)
                for (var i = 0; i < message.transformerArg.length; ++i)
                    $root.UserPassword.UserPassword.TransformerArg.encode(message.transformerArg[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.transformedData != null && Object.hasOwnProperty.call(message, "transformedData"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.transformedData);
            return writer;
        };

        /**
         * Encodes the specified UserPassword message, length delimited. Does not implicitly {@link UserPassword.UserPassword.verify|verify} messages.
         * @function encodeDelimited
         * @memberof UserPassword.UserPassword
         * @static
         * @param {UserPassword.IUserPassword} message UserPassword message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserPassword.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserPassword message from the specified reader or buffer.
         * @function decode
         * @memberof UserPassword.UserPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {UserPassword.UserPassword} UserPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPassword.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.encoding = reader.int32();
                        break;
                    }
                case 2: {
                        message.transformer = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.transformerArg && message.transformerArg.length))
                            message.transformerArg = [];
                        message.transformerArg.push($root.UserPassword.UserPassword.TransformerArg.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.transformedData = reader.bytes();
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
         * Decodes a UserPassword message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof UserPassword.UserPassword
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {UserPassword.UserPassword} UserPassword
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserPassword.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserPassword message.
         * @function verify
         * @memberof UserPassword.UserPassword
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserPassword.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                properties._encoding = 1;
                switch (message.encoding) {
                default:
                    return "encoding: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.transformer != null && message.hasOwnProperty("transformer")) {
                properties._transformer = 1;
                switch (message.transformer) {
                default:
                    return "transformer: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.transformerArg != null && message.hasOwnProperty("transformerArg")) {
                if (!Array.isArray(message.transformerArg))
                    return "transformerArg: array expected";
                for (var i = 0; i < message.transformerArg.length; ++i) {
                    var error = $root.UserPassword.UserPassword.TransformerArg.verify(message.transformerArg[i]);
                    if (error)
                        return "transformerArg." + error;
                }
            }
            if (message.transformedData != null && message.hasOwnProperty("transformedData")) {
                properties._transformedData = 1;
                if (!(message.transformedData && typeof message.transformedData.length === "number" || $util.isString(message.transformedData)))
                    return "transformedData: buffer expected";
            }
            return null;
        };

        /**
         * Creates a UserPassword message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof UserPassword.UserPassword
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {UserPassword.UserPassword} UserPassword
         */
        UserPassword.fromObject = function fromObject(object) {
            if (object instanceof $root.UserPassword.UserPassword)
                return object;
            var message = new $root.UserPassword.UserPassword();
            switch (object.encoding) {
            default:
                if (typeof object.encoding === "number") {
                    message.encoding = object.encoding;
                    break;
                }
                break;
            case "UTF8":
            case 0:
                message.encoding = 0;
                break;
            case "UTF8_BROKEN":
            case 1:
                message.encoding = 1;
                break;
            }
            switch (object.transformer) {
            default:
                if (typeof object.transformer === "number") {
                    message.transformer = object.transformer;
                    break;
                }
                break;
            case "NONE":
            case 0:
                message.transformer = 0;
                break;
            case "PBKDF2_HMAC_SHA512":
            case 1:
                message.transformer = 1;
                break;
            case "PBKDF2_HMAC_SHA384":
            case 2:
                message.transformer = 2;
                break;
            }
            if (object.transformerArg) {
                if (!Array.isArray(object.transformerArg))
                    throw TypeError(".UserPassword.UserPassword.transformerArg: array expected");
                message.transformerArg = [];
                for (var i = 0; i < object.transformerArg.length; ++i) {
                    if (typeof object.transformerArg[i] !== "object")
                        throw TypeError(".UserPassword.UserPassword.transformerArg: object expected");
                    message.transformerArg[i] = $root.UserPassword.UserPassword.TransformerArg.fromObject(object.transformerArg[i]);
                }
            }
            if (object.transformedData != null)
                if (typeof object.transformedData === "string")
                    $util.base64.decode(object.transformedData, message.transformedData = $util.newBuffer($util.base64.length(object.transformedData)), 0);
                else if (object.transformedData.length >= 0)
                    message.transformedData = object.transformedData;
            return message;
        };

        /**
         * Creates a plain object from a UserPassword message. Also converts values to other types if specified.
         * @function toObject
         * @memberof UserPassword.UserPassword
         * @static
         * @param {UserPassword.UserPassword} message UserPassword
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserPassword.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.transformerArg = [];
            if (message.encoding != null && message.hasOwnProperty("encoding")) {
                object.encoding = options.enums === String ? $root.UserPassword.UserPassword.Encoding[message.encoding] === undefined ? message.encoding : $root.UserPassword.UserPassword.Encoding[message.encoding] : message.encoding;
                if (options.oneofs)
                    object._encoding = "encoding";
            }
            if (message.transformer != null && message.hasOwnProperty("transformer")) {
                object.transformer = options.enums === String ? $root.UserPassword.UserPassword.Transformer[message.transformer] === undefined ? message.transformer : $root.UserPassword.UserPassword.Transformer[message.transformer] : message.transformer;
                if (options.oneofs)
                    object._transformer = "transformer";
            }
            if (message.transformerArg && message.transformerArg.length) {
                object.transformerArg = [];
                for (var j = 0; j < message.transformerArg.length; ++j)
                    object.transformerArg[j] = $root.UserPassword.UserPassword.TransformerArg.toObject(message.transformerArg[j], options);
            }
            if (message.transformedData != null && message.hasOwnProperty("transformedData")) {
                object.transformedData = options.bytes === String ? $util.base64.encode(message.transformedData, 0, message.transformedData.length) : options.bytes === Array ? Array.prototype.slice.call(message.transformedData) : message.transformedData;
                if (options.oneofs)
                    object._transformedData = "transformedData";
            }
            return object;
        };

        /**
         * Converts this UserPassword to JSON.
         * @function toJSON
         * @memberof UserPassword.UserPassword
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserPassword.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserPassword
         * @function getTypeUrl
         * @memberof UserPassword.UserPassword
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserPassword.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/UserPassword.UserPassword";
        };

        /**
         * Encoding enum.
         * @name UserPassword.UserPassword.Encoding
         * @enum {number}
         * @property {number} UTF8=0 UTF8 value
         * @property {number} UTF8_BROKEN=1 UTF8_BROKEN value
         */
        UserPassword.Encoding = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UTF8"] = 0;
            values[valuesById[1] = "UTF8_BROKEN"] = 1;
            return values;
        })();

        /**
         * Transformer enum.
         * @name UserPassword.UserPassword.Transformer
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} PBKDF2_HMAC_SHA512=1 PBKDF2_HMAC_SHA512 value
         * @property {number} PBKDF2_HMAC_SHA384=2 PBKDF2_HMAC_SHA384 value
         */
        UserPassword.Transformer = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PBKDF2_HMAC_SHA512"] = 1;
            values[valuesById[2] = "PBKDF2_HMAC_SHA384"] = 2;
            return values;
        })();

        UserPassword.TransformerArg = (function() {

            /**
             * Properties of a TransformerArg.
             * @memberof UserPassword.UserPassword
             * @interface ITransformerArg
             * @property {string|null} [key] TransformerArg key
             * @property {UserPassword.UserPassword.TransformerArg.IValue|null} [value] TransformerArg value
             */

            /**
             * Constructs a new TransformerArg.
             * @memberof UserPassword.UserPassword
             * @classdesc Represents a TransformerArg.
             * @implements ITransformerArg
             * @constructor
             * @param {UserPassword.UserPassword.ITransformerArg=} [properties] Properties to set
             */
            function TransformerArg(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TransformerArg key.
             * @member {string|null|undefined} key
             * @memberof UserPassword.UserPassword.TransformerArg
             * @instance
             */
            TransformerArg.prototype.key = null;

            /**
             * TransformerArg value.
             * @member {UserPassword.UserPassword.TransformerArg.IValue|null|undefined} value
             * @memberof UserPassword.UserPassword.TransformerArg
             * @instance
             */
            TransformerArg.prototype.value = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(TransformerArg.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(TransformerArg.prototype, "_value", {
                get: $util.oneOfGetter($oneOfFields = ["value"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new TransformerArg instance using the specified properties.
             * @function create
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {UserPassword.UserPassword.ITransformerArg=} [properties] Properties to set
             * @returns {UserPassword.UserPassword.TransformerArg} TransformerArg instance
             */
            TransformerArg.create = function create(properties) {
                return new TransformerArg(properties);
            };

            /**
             * Encodes the specified TransformerArg message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
             * @function encode
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {UserPassword.UserPassword.ITransformerArg} message TransformerArg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransformerArg.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.key);
                if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                    $root.UserPassword.UserPassword.TransformerArg.Value.encode(message.value, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                return writer;
            };

            /**
             * Encodes the specified TransformerArg message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.verify|verify} messages.
             * @function encodeDelimited
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {UserPassword.UserPassword.ITransformerArg} message TransformerArg message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TransformerArg.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TransformerArg message from the specified reader or buffer.
             * @function decode
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransformerArg.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword.TransformerArg();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.key = reader.string();
                            break;
                        }
                    case 2: {
                            message.value = $root.UserPassword.UserPassword.TransformerArg.Value.decode(reader, reader.uint32());
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
             * Decodes a TransformerArg message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TransformerArg.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TransformerArg message.
             * @function verify
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TransformerArg.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.key != null && message.hasOwnProperty("key")) {
                    properties._key = 1;
                    if (!$util.isString(message.key))
                        return "key: string expected";
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                    properties._value = 1;
                    {
                        var error = $root.UserPassword.UserPassword.TransformerArg.Value.verify(message.value);
                        if (error)
                            return "value." + error;
                    }
                }
                return null;
            };

            /**
             * Creates a TransformerArg message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {UserPassword.UserPassword.TransformerArg} TransformerArg
             */
            TransformerArg.fromObject = function fromObject(object) {
                if (object instanceof $root.UserPassword.UserPassword.TransformerArg)
                    return object;
                var message = new $root.UserPassword.UserPassword.TransformerArg();
                if (object.key != null)
                    message.key = String(object.key);
                if (object.value != null) {
                    if (typeof object.value !== "object")
                        throw TypeError(".UserPassword.UserPassword.TransformerArg.value: object expected");
                    message.value = $root.UserPassword.UserPassword.TransformerArg.Value.fromObject(object.value);
                }
                return message;
            };

            /**
             * Creates a plain object from a TransformerArg message. Also converts values to other types if specified.
             * @function toObject
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {UserPassword.UserPassword.TransformerArg} message TransformerArg
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TransformerArg.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.key != null && message.hasOwnProperty("key")) {
                    object.key = message.key;
                    if (options.oneofs)
                        object._key = "key";
                }
                if (message.value != null && message.hasOwnProperty("value")) {
                    object.value = $root.UserPassword.UserPassword.TransformerArg.Value.toObject(message.value, options);
                    if (options.oneofs)
                        object._value = "value";
                }
                return object;
            };

            /**
             * Converts this TransformerArg to JSON.
             * @function toJSON
             * @memberof UserPassword.UserPassword.TransformerArg
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TransformerArg.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for TransformerArg
             * @function getTypeUrl
             * @memberof UserPassword.UserPassword.TransformerArg
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            TransformerArg.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/UserPassword.UserPassword.TransformerArg";
            };

            TransformerArg.Value = (function() {

                /**
                 * Properties of a Value.
                 * @memberof UserPassword.UserPassword.TransformerArg
                 * @interface IValue
                 * @property {Uint8Array|null} [asBlob] Value asBlob
                 * @property {number|null} [asUnsignedInteger] Value asUnsignedInteger
                 */

                /**
                 * Constructs a new Value.
                 * @memberof UserPassword.UserPassword.TransformerArg
                 * @classdesc Represents a Value.
                 * @implements IValue
                 * @constructor
                 * @param {UserPassword.UserPassword.TransformerArg.IValue=} [properties] Properties to set
                 */
                function Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Value asBlob.
                 * @member {Uint8Array|null|undefined} asBlob
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @instance
                 */
                Value.prototype.asBlob = null;

                /**
                 * Value asUnsignedInteger.
                 * @member {number|null|undefined} asUnsignedInteger
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @instance
                 */
                Value.prototype.asUnsignedInteger = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                /**
                 * Value value.
                 * @member {"asBlob"|"asUnsignedInteger"|undefined} value
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @instance
                 */
                Object.defineProperty(Value.prototype, "value", {
                    get: $util.oneOfGetter($oneOfFields = ["asBlob", "asUnsignedInteger"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Value instance using the specified properties.
                 * @function create
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {UserPassword.UserPassword.TransformerArg.IValue=} [properties] Properties to set
                 * @returns {UserPassword.UserPassword.TransformerArg.Value} Value instance
                 */
                Value.create = function create(properties) {
                    return new Value(properties);
                };

                /**
                 * Encodes the specified Value message. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
                 * @function encode
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {UserPassword.UserPassword.TransformerArg.IValue} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.asBlob != null && Object.hasOwnProperty.call(message, "asBlob"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.asBlob);
                    if (message.asUnsignedInteger != null && Object.hasOwnProperty.call(message, "asUnsignedInteger"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.asUnsignedInteger);
                    return writer;
                };

                /**
                 * Encodes the specified Value message, length delimited. Does not implicitly {@link UserPassword.UserPassword.TransformerArg.Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {UserPassword.UserPassword.TransformerArg.IValue} message Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {UserPassword.UserPassword.TransformerArg.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.UserPassword.UserPassword.TransformerArg.Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.asBlob = reader.bytes();
                                break;
                            }
                        case 2: {
                                message.asUnsignedInteger = reader.uint32();
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
                 * Decodes a Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {UserPassword.UserPassword.TransformerArg.Value} Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Value message.
                 * @function verify
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.asBlob != null && message.hasOwnProperty("asBlob")) {
                        properties.value = 1;
                        if (!(message.asBlob && typeof message.asBlob.length === "number" || $util.isString(message.asBlob)))
                            return "asBlob: buffer expected";
                    }
                    if (message.asUnsignedInteger != null && message.hasOwnProperty("asUnsignedInteger")) {
                        if (properties.value === 1)
                            return "value: multiple values";
                        properties.value = 1;
                        if (!$util.isInteger(message.asUnsignedInteger))
                            return "asUnsignedInteger: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates a Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {UserPassword.UserPassword.TransformerArg.Value} Value
                 */
                Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.UserPassword.UserPassword.TransformerArg.Value)
                        return object;
                    var message = new $root.UserPassword.UserPassword.TransformerArg.Value();
                    if (object.asBlob != null)
                        if (typeof object.asBlob === "string")
                            $util.base64.decode(object.asBlob, message.asBlob = $util.newBuffer($util.base64.length(object.asBlob)), 0);
                        else if (object.asBlob.length >= 0)
                            message.asBlob = object.asBlob;
                    if (object.asUnsignedInteger != null)
                        message.asUnsignedInteger = object.asUnsignedInteger >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from a Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {UserPassword.UserPassword.TransformerArg.Value} message Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.asBlob != null && message.hasOwnProperty("asBlob")) {
                        object.asBlob = options.bytes === String ? $util.base64.encode(message.asBlob, 0, message.asBlob.length) : options.bytes === Array ? Array.prototype.slice.call(message.asBlob) : message.asBlob;
                        if (options.oneofs)
                            object.value = "asBlob";
                    }
                    if (message.asUnsignedInteger != null && message.hasOwnProperty("asUnsignedInteger")) {
                        object.asUnsignedInteger = message.asUnsignedInteger;
                        if (options.oneofs)
                            object.value = "asUnsignedInteger";
                    }
                    return object;
                };

                /**
                 * Converts this Value to JSON.
                 * @function toJSON
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Value
                 * @function getTypeUrl
                 * @memberof UserPassword.UserPassword.TransformerArg.Value
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Value.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/UserPassword.UserPassword.TransformerArg.Value";
                };

                return Value;
            })();

            return TransformerArg;
        })();

        return UserPassword;
    })();

    return UserPassword;
})();

module.exports = $root;
