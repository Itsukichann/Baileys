/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Adv = (function() {

    /**
     * Namespace Adv.
     * @exports Adv
     * @namespace
     */
    var Adv = {};

    Adv.ADVSignedDeviceIdentityHMAC = (function() {

        /**
         * Properties of a ADVSignedDeviceIdentityHMAC.
         * @memberof Adv
         * @interface IADVSignedDeviceIdentityHMAC
         * @property {Uint8Array|null} [details] ADVSignedDeviceIdentityHMAC details
         * @property {Uint8Array|null} [hmac] ADVSignedDeviceIdentityHMAC hmac
         * @property {Adv.ADVEncryptionType|null} [accountType] ADVSignedDeviceIdentityHMAC accountType
         */

        /**
         * Constructs a new ADVSignedDeviceIdentityHMAC.
         * @memberof Adv
         * @classdesc Represents a ADVSignedDeviceIdentityHMAC.
         * @implements IADVSignedDeviceIdentityHMAC
         * @constructor
         * @param {Adv.IADVSignedDeviceIdentityHMAC=} [properties] Properties to set
         */
        function ADVSignedDeviceIdentityHMAC(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADVSignedDeviceIdentityHMAC details.
         * @member {Uint8Array|null|undefined} details
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @instance
         */
        ADVSignedDeviceIdentityHMAC.prototype.details = null;

        /**
         * ADVSignedDeviceIdentityHMAC hmac.
         * @member {Uint8Array|null|undefined} hmac
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @instance
         */
        ADVSignedDeviceIdentityHMAC.prototype.hmac = null;

        /**
         * ADVSignedDeviceIdentityHMAC accountType.
         * @member {Adv.ADVEncryptionType|null|undefined} accountType
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @instance
         */
        ADVSignedDeviceIdentityHMAC.prototype.accountType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_hmac", {
            get: $util.oneOfGetter($oneOfFields = ["hmac"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentityHMAC.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ADVSignedDeviceIdentityHMAC instance using the specified properties.
         * @function create
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Adv.IADVSignedDeviceIdentityHMAC=} [properties] Properties to set
         * @returns {Adv.ADVSignedDeviceIdentityHMAC} ADVSignedDeviceIdentityHMAC instance
         */
        ADVSignedDeviceIdentityHMAC.create = function create(properties) {
            return new ADVSignedDeviceIdentityHMAC(properties);
        };

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @function encode
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Adv.IADVSignedDeviceIdentityHMAC} message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedDeviceIdentityHMAC.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.hmac != null && Object.hasOwnProperty.call(message, "hmac"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.hmac);
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.accountType);
            return writer;
        };

        /**
         * Encodes the specified ADVSignedDeviceIdentityHMAC message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentityHMAC.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Adv.IADVSignedDeviceIdentityHMAC} message ADVSignedDeviceIdentityHMAC message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedDeviceIdentityHMAC.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer.
         * @function decode
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Adv.ADVSignedDeviceIdentityHMAC} ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedDeviceIdentityHMAC.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Adv.ADVSignedDeviceIdentityHMAC();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.details = reader.bytes();
                        break;
                    }
                case 2: {
                        message.hmac = reader.bytes();
                        break;
                    }
                case 3: {
                        message.accountType = reader.int32();
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
         * Decodes a ADVSignedDeviceIdentityHMAC message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedDeviceIdentityHMAC} ADVSignedDeviceIdentityHMAC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedDeviceIdentityHMAC.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADVSignedDeviceIdentityHMAC message.
         * @function verify
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADVSignedDeviceIdentityHMAC.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                properties._details = 1;
                if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                    return "details: buffer expected";
            }
            if (message.hmac != null && message.hasOwnProperty("hmac")) {
                properties._hmac = 1;
                if (!(message.hmac && typeof message.hmac.length === "number" || $util.isString(message.hmac)))
                    return "hmac: buffer expected";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                properties._accountType = 1;
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a ADVSignedDeviceIdentityHMAC message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Adv.ADVSignedDeviceIdentityHMAC} ADVSignedDeviceIdentityHMAC
         */
        ADVSignedDeviceIdentityHMAC.fromObject = function fromObject(object) {
            if (object instanceof $root.Adv.ADVSignedDeviceIdentityHMAC)
                return object;
            var message = new $root.Adv.ADVSignedDeviceIdentityHMAC();
            if (object.details != null)
                if (typeof object.details === "string")
                    $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                else if (object.details.length >= 0)
                    message.details = object.details;
            if (object.hmac != null)
                if (typeof object.hmac === "string")
                    $util.base64.decode(object.hmac, message.hmac = $util.newBuffer($util.base64.length(object.hmac)), 0);
                else if (object.hmac.length >= 0)
                    message.hmac = object.hmac;
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                message.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                message.accountType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ADVSignedDeviceIdentityHMAC message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {Adv.ADVSignedDeviceIdentityHMAC} message ADVSignedDeviceIdentityHMAC
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADVSignedDeviceIdentityHMAC.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                object.details = options.bytes === String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === Array ? Array.prototype.slice.call(message.details) : message.details;
                if (options.oneofs)
                    object._details = "details";
            }
            if (message.hmac != null && message.hasOwnProperty("hmac")) {
                object.hmac = options.bytes === String ? $util.base64.encode(message.hmac, 0, message.hmac.length) : options.bytes === Array ? Array.prototype.slice.call(message.hmac) : message.hmac;
                if (options.oneofs)
                    object._hmac = "hmac";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                object.accountType = options.enums === String ? $root.Adv.ADVEncryptionType[message.accountType] === undefined ? message.accountType : $root.Adv.ADVEncryptionType[message.accountType] : message.accountType;
                if (options.oneofs)
                    object._accountType = "accountType";
            }
            return object;
        };

        /**
         * Converts this ADVSignedDeviceIdentityHMAC to JSON.
         * @function toJSON
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADVSignedDeviceIdentityHMAC.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ADVSignedDeviceIdentityHMAC
         * @function getTypeUrl
         * @memberof Adv.ADVSignedDeviceIdentityHMAC
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ADVSignedDeviceIdentityHMAC.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Adv.ADVSignedDeviceIdentityHMAC";
        };

        return ADVSignedDeviceIdentityHMAC;
    })();

    Adv.ADVSignedDeviceIdentity = (function() {

        /**
         * Properties of a ADVSignedDeviceIdentity.
         * @memberof Adv
         * @interface IADVSignedDeviceIdentity
         * @property {Uint8Array|null} [details] ADVSignedDeviceIdentity details
         * @property {Uint8Array|null} [accountSignatureKey] ADVSignedDeviceIdentity accountSignatureKey
         * @property {Uint8Array|null} [accountSignature] ADVSignedDeviceIdentity accountSignature
         * @property {Uint8Array|null} [deviceSignature] ADVSignedDeviceIdentity deviceSignature
         */

        /**
         * Constructs a new ADVSignedDeviceIdentity.
         * @memberof Adv
         * @classdesc Represents a ADVSignedDeviceIdentity.
         * @implements IADVSignedDeviceIdentity
         * @constructor
         * @param {Adv.IADVSignedDeviceIdentity=} [properties] Properties to set
         */
        function ADVSignedDeviceIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADVSignedDeviceIdentity details.
         * @member {Uint8Array|null|undefined} details
         * @memberof Adv.ADVSignedDeviceIdentity
         * @instance
         */
        ADVSignedDeviceIdentity.prototype.details = null;

        /**
         * ADVSignedDeviceIdentity accountSignatureKey.
         * @member {Uint8Array|null|undefined} accountSignatureKey
         * @memberof Adv.ADVSignedDeviceIdentity
         * @instance
         */
        ADVSignedDeviceIdentity.prototype.accountSignatureKey = null;

        /**
         * ADVSignedDeviceIdentity accountSignature.
         * @member {Uint8Array|null|undefined} accountSignature
         * @memberof Adv.ADVSignedDeviceIdentity
         * @instance
         */
        ADVSignedDeviceIdentity.prototype.accountSignature = null;

        /**
         * ADVSignedDeviceIdentity deviceSignature.
         * @member {Uint8Array|null|undefined} deviceSignature
         * @memberof Adv.ADVSignedDeviceIdentity
         * @instance
         */
        ADVSignedDeviceIdentity.prototype.deviceSignature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_accountSignatureKey", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignatureKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_accountSignature", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedDeviceIdentity.prototype, "_deviceSignature", {
            get: $util.oneOfGetter($oneOfFields = ["deviceSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ADVSignedDeviceIdentity instance using the specified properties.
         * @function create
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Adv.IADVSignedDeviceIdentity=} [properties] Properties to set
         * @returns {Adv.ADVSignedDeviceIdentity} ADVSignedDeviceIdentity instance
         */
        ADVSignedDeviceIdentity.create = function create(properties) {
            return new ADVSignedDeviceIdentity(properties);
        };

        /**
         * Encodes the specified ADVSignedDeviceIdentity message. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @function encode
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Adv.IADVSignedDeviceIdentity} message ADVSignedDeviceIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedDeviceIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.accountSignatureKey != null && Object.hasOwnProperty.call(message, "accountSignatureKey"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.accountSignatureKey);
            if (message.accountSignature != null && Object.hasOwnProperty.call(message, "accountSignature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.accountSignature);
            if (message.deviceSignature != null && Object.hasOwnProperty.call(message, "deviceSignature"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.deviceSignature);
            return writer;
        };

        /**
         * Encodes the specified ADVSignedDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVSignedDeviceIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Adv.IADVSignedDeviceIdentity} message ADVSignedDeviceIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedDeviceIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Adv.ADVSignedDeviceIdentity} ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedDeviceIdentity.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Adv.ADVSignedDeviceIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.details = reader.bytes();
                        break;
                    }
                case 2: {
                        message.accountSignatureKey = reader.bytes();
                        break;
                    }
                case 3: {
                        message.accountSignature = reader.bytes();
                        break;
                    }
                case 4: {
                        message.deviceSignature = reader.bytes();
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
         * Decodes a ADVSignedDeviceIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedDeviceIdentity} ADVSignedDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedDeviceIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADVSignedDeviceIdentity message.
         * @function verify
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADVSignedDeviceIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                properties._details = 1;
                if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                    return "details: buffer expected";
            }
            if (message.accountSignatureKey != null && message.hasOwnProperty("accountSignatureKey")) {
                properties._accountSignatureKey = 1;
                if (!(message.accountSignatureKey && typeof message.accountSignatureKey.length === "number" || $util.isString(message.accountSignatureKey)))
                    return "accountSignatureKey: buffer expected";
            }
            if (message.accountSignature != null && message.hasOwnProperty("accountSignature")) {
                properties._accountSignature = 1;
                if (!(message.accountSignature && typeof message.accountSignature.length === "number" || $util.isString(message.accountSignature)))
                    return "accountSignature: buffer expected";
            }
            if (message.deviceSignature != null && message.hasOwnProperty("deviceSignature")) {
                properties._deviceSignature = 1;
                if (!(message.deviceSignature && typeof message.deviceSignature.length === "number" || $util.isString(message.deviceSignature)))
                    return "deviceSignature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a ADVSignedDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Adv.ADVSignedDeviceIdentity} ADVSignedDeviceIdentity
         */
        ADVSignedDeviceIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.Adv.ADVSignedDeviceIdentity)
                return object;
            var message = new $root.Adv.ADVSignedDeviceIdentity();
            if (object.details != null)
                if (typeof object.details === "string")
                    $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                else if (object.details.length >= 0)
                    message.details = object.details;
            if (object.accountSignatureKey != null)
                if (typeof object.accountSignatureKey === "string")
                    $util.base64.decode(object.accountSignatureKey, message.accountSignatureKey = $util.newBuffer($util.base64.length(object.accountSignatureKey)), 0);
                else if (object.accountSignatureKey.length >= 0)
                    message.accountSignatureKey = object.accountSignatureKey;
            if (object.accountSignature != null)
                if (typeof object.accountSignature === "string")
                    $util.base64.decode(object.accountSignature, message.accountSignature = $util.newBuffer($util.base64.length(object.accountSignature)), 0);
                else if (object.accountSignature.length >= 0)
                    message.accountSignature = object.accountSignature;
            if (object.deviceSignature != null)
                if (typeof object.deviceSignature === "string")
                    $util.base64.decode(object.deviceSignature, message.deviceSignature = $util.newBuffer($util.base64.length(object.deviceSignature)), 0);
                else if (object.deviceSignature.length >= 0)
                    message.deviceSignature = object.deviceSignature;
            return message;
        };

        /**
         * Creates a plain object from a ADVSignedDeviceIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {Adv.ADVSignedDeviceIdentity} message ADVSignedDeviceIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADVSignedDeviceIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                object.details = options.bytes === String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === Array ? Array.prototype.slice.call(message.details) : message.details;
                if (options.oneofs)
                    object._details = "details";
            }
            if (message.accountSignatureKey != null && message.hasOwnProperty("accountSignatureKey")) {
                object.accountSignatureKey = options.bytes === String ? $util.base64.encode(message.accountSignatureKey, 0, message.accountSignatureKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.accountSignatureKey) : message.accountSignatureKey;
                if (options.oneofs)
                    object._accountSignatureKey = "accountSignatureKey";
            }
            if (message.accountSignature != null && message.hasOwnProperty("accountSignature")) {
                object.accountSignature = options.bytes === String ? $util.base64.encode(message.accountSignature, 0, message.accountSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.accountSignature) : message.accountSignature;
                if (options.oneofs)
                    object._accountSignature = "accountSignature";
            }
            if (message.deviceSignature != null && message.hasOwnProperty("deviceSignature")) {
                object.deviceSignature = options.bytes === String ? $util.base64.encode(message.deviceSignature, 0, message.deviceSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceSignature) : message.deviceSignature;
                if (options.oneofs)
                    object._deviceSignature = "deviceSignature";
            }
            return object;
        };

        /**
         * Converts this ADVSignedDeviceIdentity to JSON.
         * @function toJSON
         * @memberof Adv.ADVSignedDeviceIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADVSignedDeviceIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ADVSignedDeviceIdentity
         * @function getTypeUrl
         * @memberof Adv.ADVSignedDeviceIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ADVSignedDeviceIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Adv.ADVSignedDeviceIdentity";
        };

        return ADVSignedDeviceIdentity;
    })();

    Adv.ADVDeviceIdentity = (function() {

        /**
         * Properties of a ADVDeviceIdentity.
         * @memberof Adv
         * @interface IADVDeviceIdentity
         * @property {number|null} [rawId] ADVDeviceIdentity rawId
         * @property {number|Long|null} [timestamp] ADVDeviceIdentity timestamp
         * @property {number|null} [keyIndex] ADVDeviceIdentity keyIndex
         * @property {Adv.ADVEncryptionType|null} [accountType] ADVDeviceIdentity accountType
         * @property {Adv.ADVEncryptionType|null} [deviceType] ADVDeviceIdentity deviceType
         */

        /**
         * Constructs a new ADVDeviceIdentity.
         * @memberof Adv
         * @classdesc Represents a ADVDeviceIdentity.
         * @implements IADVDeviceIdentity
         * @constructor
         * @param {Adv.IADVDeviceIdentity=} [properties] Properties to set
         */
        function ADVDeviceIdentity(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADVDeviceIdentity rawId.
         * @member {number|null|undefined} rawId
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         */
        ADVDeviceIdentity.prototype.rawId = null;

        /**
         * ADVDeviceIdentity timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         */
        ADVDeviceIdentity.prototype.timestamp = null;

        /**
         * ADVDeviceIdentity keyIndex.
         * @member {number|null|undefined} keyIndex
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         */
        ADVDeviceIdentity.prototype.keyIndex = null;

        /**
         * ADVDeviceIdentity accountType.
         * @member {Adv.ADVEncryptionType|null|undefined} accountType
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         */
        ADVDeviceIdentity.prototype.accountType = null;

        /**
         * ADVDeviceIdentity deviceType.
         * @member {Adv.ADVEncryptionType|null|undefined} deviceType
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         */
        ADVDeviceIdentity.prototype.deviceType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_rawId", {
            get: $util.oneOfGetter($oneOfFields = ["rawId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_keyIndex", {
            get: $util.oneOfGetter($oneOfFields = ["keyIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVDeviceIdentity.prototype, "_deviceType", {
            get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ADVDeviceIdentity instance using the specified properties.
         * @function create
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Adv.IADVDeviceIdentity=} [properties] Properties to set
         * @returns {Adv.ADVDeviceIdentity} ADVDeviceIdentity instance
         */
        ADVDeviceIdentity.create = function create(properties) {
            return new ADVDeviceIdentity(properties);
        };

        /**
         * Encodes the specified ADVDeviceIdentity message. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @function encode
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Adv.IADVDeviceIdentity} message ADVDeviceIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVDeviceIdentity.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rawId != null && Object.hasOwnProperty.call(message, "rawId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rawId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
            if (message.keyIndex != null && Object.hasOwnProperty.call(message, "keyIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.keyIndex);
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.accountType);
            if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.deviceType);
            return writer;
        };

        /**
         * Encodes the specified ADVDeviceIdentity message, length delimited. Does not implicitly {@link Adv.ADVDeviceIdentity.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Adv.IADVDeviceIdentity} message ADVDeviceIdentity message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVDeviceIdentity.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer.
         * @function decode
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Adv.ADVDeviceIdentity} ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVDeviceIdentity.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Adv.ADVDeviceIdentity();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.rawId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                case 3: {
                        message.keyIndex = reader.uint32();
                        break;
                    }
                case 4: {
                        message.accountType = reader.int32();
                        break;
                    }
                case 5: {
                        message.deviceType = reader.int32();
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
         * Decodes a ADVDeviceIdentity message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Adv.ADVDeviceIdentity} ADVDeviceIdentity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVDeviceIdentity.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADVDeviceIdentity message.
         * @function verify
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADVDeviceIdentity.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.rawId != null && message.hasOwnProperty("rawId")) {
                properties._rawId = 1;
                if (!$util.isInteger(message.rawId))
                    return "rawId: integer expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            if (message.keyIndex != null && message.hasOwnProperty("keyIndex")) {
                properties._keyIndex = 1;
                if (!$util.isInteger(message.keyIndex))
                    return "keyIndex: integer expected";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                properties._accountType = 1;
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.deviceType != null && message.hasOwnProperty("deviceType")) {
                properties._deviceType = 1;
                switch (message.deviceType) {
                default:
                    return "deviceType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a ADVDeviceIdentity message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Adv.ADVDeviceIdentity} ADVDeviceIdentity
         */
        ADVDeviceIdentity.fromObject = function fromObject(object) {
            if (object instanceof $root.Adv.ADVDeviceIdentity)
                return object;
            var message = new $root.Adv.ADVDeviceIdentity();
            if (object.rawId != null)
                message.rawId = object.rawId >>> 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.keyIndex != null)
                message.keyIndex = object.keyIndex >>> 0;
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                message.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                message.accountType = 1;
                break;
            }
            switch (object.deviceType) {
            default:
                if (typeof object.deviceType === "number") {
                    message.deviceType = object.deviceType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                message.deviceType = 0;
                break;
            case "HOSTED":
            case 1:
                message.deviceType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ADVDeviceIdentity message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {Adv.ADVDeviceIdentity} message ADVDeviceIdentity
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADVDeviceIdentity.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.rawId != null && message.hasOwnProperty("rawId")) {
                object.rawId = message.rawId;
                if (options.oneofs)
                    object._rawId = "rawId";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (options.oneofs)
                    object._timestamp = "timestamp";
            }
            if (message.keyIndex != null && message.hasOwnProperty("keyIndex")) {
                object.keyIndex = message.keyIndex;
                if (options.oneofs)
                    object._keyIndex = "keyIndex";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                object.accountType = options.enums === String ? $root.Adv.ADVEncryptionType[message.accountType] === undefined ? message.accountType : $root.Adv.ADVEncryptionType[message.accountType] : message.accountType;
                if (options.oneofs)
                    object._accountType = "accountType";
            }
            if (message.deviceType != null && message.hasOwnProperty("deviceType")) {
                object.deviceType = options.enums === String ? $root.Adv.ADVEncryptionType[message.deviceType] === undefined ? message.deviceType : $root.Adv.ADVEncryptionType[message.deviceType] : message.deviceType;
                if (options.oneofs)
                    object._deviceType = "deviceType";
            }
            return object;
        };

        /**
         * Converts this ADVDeviceIdentity to JSON.
         * @function toJSON
         * @memberof Adv.ADVDeviceIdentity
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADVDeviceIdentity.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ADVDeviceIdentity
         * @function getTypeUrl
         * @memberof Adv.ADVDeviceIdentity
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ADVDeviceIdentity.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Adv.ADVDeviceIdentity";
        };

        return ADVDeviceIdentity;
    })();

    Adv.ADVSignedKeyIndexList = (function() {

        /**
         * Properties of a ADVSignedKeyIndexList.
         * @memberof Adv
         * @interface IADVSignedKeyIndexList
         * @property {Uint8Array|null} [details] ADVSignedKeyIndexList details
         * @property {Uint8Array|null} [accountSignature] ADVSignedKeyIndexList accountSignature
         * @property {Uint8Array|null} [accountSignatureKey] ADVSignedKeyIndexList accountSignatureKey
         */

        /**
         * Constructs a new ADVSignedKeyIndexList.
         * @memberof Adv
         * @classdesc Represents a ADVSignedKeyIndexList.
         * @implements IADVSignedKeyIndexList
         * @constructor
         * @param {Adv.IADVSignedKeyIndexList=} [properties] Properties to set
         */
        function ADVSignedKeyIndexList(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADVSignedKeyIndexList details.
         * @member {Uint8Array|null|undefined} details
         * @memberof Adv.ADVSignedKeyIndexList
         * @instance
         */
        ADVSignedKeyIndexList.prototype.details = null;

        /**
         * ADVSignedKeyIndexList accountSignature.
         * @member {Uint8Array|null|undefined} accountSignature
         * @memberof Adv.ADVSignedKeyIndexList
         * @instance
         */
        ADVSignedKeyIndexList.prototype.accountSignature = null;

        /**
         * ADVSignedKeyIndexList accountSignatureKey.
         * @member {Uint8Array|null|undefined} accountSignatureKey
         * @memberof Adv.ADVSignedKeyIndexList
         * @instance
         */
        ADVSignedKeyIndexList.prototype.accountSignatureKey = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_accountSignature", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVSignedKeyIndexList.prototype, "_accountSignatureKey", {
            get: $util.oneOfGetter($oneOfFields = ["accountSignatureKey"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ADVSignedKeyIndexList instance using the specified properties.
         * @function create
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Adv.IADVSignedKeyIndexList=} [properties] Properties to set
         * @returns {Adv.ADVSignedKeyIndexList} ADVSignedKeyIndexList instance
         */
        ADVSignedKeyIndexList.create = function create(properties) {
            return new ADVSignedKeyIndexList(properties);
        };

        /**
         * Encodes the specified ADVSignedKeyIndexList message. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @function encode
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Adv.IADVSignedKeyIndexList} message ADVSignedKeyIndexList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedKeyIndexList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.accountSignature != null && Object.hasOwnProperty.call(message, "accountSignature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.accountSignature);
            if (message.accountSignatureKey != null && Object.hasOwnProperty.call(message, "accountSignatureKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.accountSignatureKey);
            return writer;
        };

        /**
         * Encodes the specified ADVSignedKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVSignedKeyIndexList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Adv.IADVSignedKeyIndexList} message ADVSignedKeyIndexList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVSignedKeyIndexList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer.
         * @function decode
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Adv.ADVSignedKeyIndexList} ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedKeyIndexList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Adv.ADVSignedKeyIndexList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.details = reader.bytes();
                        break;
                    }
                case 2: {
                        message.accountSignature = reader.bytes();
                        break;
                    }
                case 3: {
                        message.accountSignatureKey = reader.bytes();
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
         * Decodes a ADVSignedKeyIndexList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Adv.ADVSignedKeyIndexList} ADVSignedKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVSignedKeyIndexList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADVSignedKeyIndexList message.
         * @function verify
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADVSignedKeyIndexList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                properties._details = 1;
                if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                    return "details: buffer expected";
            }
            if (message.accountSignature != null && message.hasOwnProperty("accountSignature")) {
                properties._accountSignature = 1;
                if (!(message.accountSignature && typeof message.accountSignature.length === "number" || $util.isString(message.accountSignature)))
                    return "accountSignature: buffer expected";
            }
            if (message.accountSignatureKey != null && message.hasOwnProperty("accountSignatureKey")) {
                properties._accountSignatureKey = 1;
                if (!(message.accountSignatureKey && typeof message.accountSignatureKey.length === "number" || $util.isString(message.accountSignatureKey)))
                    return "accountSignatureKey: buffer expected";
            }
            return null;
        };

        /**
         * Creates a ADVSignedKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Adv.ADVSignedKeyIndexList} ADVSignedKeyIndexList
         */
        ADVSignedKeyIndexList.fromObject = function fromObject(object) {
            if (object instanceof $root.Adv.ADVSignedKeyIndexList)
                return object;
            var message = new $root.Adv.ADVSignedKeyIndexList();
            if (object.details != null)
                if (typeof object.details === "string")
                    $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                else if (object.details.length >= 0)
                    message.details = object.details;
            if (object.accountSignature != null)
                if (typeof object.accountSignature === "string")
                    $util.base64.decode(object.accountSignature, message.accountSignature = $util.newBuffer($util.base64.length(object.accountSignature)), 0);
                else if (object.accountSignature.length >= 0)
                    message.accountSignature = object.accountSignature;
            if (object.accountSignatureKey != null)
                if (typeof object.accountSignatureKey === "string")
                    $util.base64.decode(object.accountSignatureKey, message.accountSignatureKey = $util.newBuffer($util.base64.length(object.accountSignatureKey)), 0);
                else if (object.accountSignatureKey.length >= 0)
                    message.accountSignatureKey = object.accountSignatureKey;
            return message;
        };

        /**
         * Creates a plain object from a ADVSignedKeyIndexList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {Adv.ADVSignedKeyIndexList} message ADVSignedKeyIndexList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADVSignedKeyIndexList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                object.details = options.bytes === String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === Array ? Array.prototype.slice.call(message.details) : message.details;
                if (options.oneofs)
                    object._details = "details";
            }
            if (message.accountSignature != null && message.hasOwnProperty("accountSignature")) {
                object.accountSignature = options.bytes === String ? $util.base64.encode(message.accountSignature, 0, message.accountSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.accountSignature) : message.accountSignature;
                if (options.oneofs)
                    object._accountSignature = "accountSignature";
            }
            if (message.accountSignatureKey != null && message.hasOwnProperty("accountSignatureKey")) {
                object.accountSignatureKey = options.bytes === String ? $util.base64.encode(message.accountSignatureKey, 0, message.accountSignatureKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.accountSignatureKey) : message.accountSignatureKey;
                if (options.oneofs)
                    object._accountSignatureKey = "accountSignatureKey";
            }
            return object;
        };

        /**
         * Converts this ADVSignedKeyIndexList to JSON.
         * @function toJSON
         * @memberof Adv.ADVSignedKeyIndexList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADVSignedKeyIndexList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ADVSignedKeyIndexList
         * @function getTypeUrl
         * @memberof Adv.ADVSignedKeyIndexList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ADVSignedKeyIndexList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Adv.ADVSignedKeyIndexList";
        };

        return ADVSignedKeyIndexList;
    })();

    Adv.ADVKeyIndexList = (function() {

        /**
         * Properties of a ADVKeyIndexList.
         * @memberof Adv
         * @interface IADVKeyIndexList
         * @property {number|null} [rawId] ADVKeyIndexList rawId
         * @property {number|Long|null} [timestamp] ADVKeyIndexList timestamp
         * @property {number|null} [currentIndex] ADVKeyIndexList currentIndex
         * @property {Array.<number>|null} [validIndexes] ADVKeyIndexList validIndexes
         * @property {Adv.ADVEncryptionType|null} [accountType] ADVKeyIndexList accountType
         */

        /**
         * Constructs a new ADVKeyIndexList.
         * @memberof Adv
         * @classdesc Represents a ADVKeyIndexList.
         * @implements IADVKeyIndexList
         * @constructor
         * @param {Adv.IADVKeyIndexList=} [properties] Properties to set
         */
        function ADVKeyIndexList(properties) {
            this.validIndexes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ADVKeyIndexList rawId.
         * @member {number|null|undefined} rawId
         * @memberof Adv.ADVKeyIndexList
         * @instance
         */
        ADVKeyIndexList.prototype.rawId = null;

        /**
         * ADVKeyIndexList timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof Adv.ADVKeyIndexList
         * @instance
         */
        ADVKeyIndexList.prototype.timestamp = null;

        /**
         * ADVKeyIndexList currentIndex.
         * @member {number|null|undefined} currentIndex
         * @memberof Adv.ADVKeyIndexList
         * @instance
         */
        ADVKeyIndexList.prototype.currentIndex = null;

        /**
         * ADVKeyIndexList validIndexes.
         * @member {Array.<number>} validIndexes
         * @memberof Adv.ADVKeyIndexList
         * @instance
         */
        ADVKeyIndexList.prototype.validIndexes = $util.emptyArray;

        /**
         * ADVKeyIndexList accountType.
         * @member {Adv.ADVEncryptionType|null|undefined} accountType
         * @memberof Adv.ADVKeyIndexList
         * @instance
         */
        ADVKeyIndexList.prototype.accountType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_rawId", {
            get: $util.oneOfGetter($oneOfFields = ["rawId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_currentIndex", {
            get: $util.oneOfGetter($oneOfFields = ["currentIndex"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ADVKeyIndexList.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ADVKeyIndexList instance using the specified properties.
         * @function create
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Adv.IADVKeyIndexList=} [properties] Properties to set
         * @returns {Adv.ADVKeyIndexList} ADVKeyIndexList instance
         */
        ADVKeyIndexList.create = function create(properties) {
            return new ADVKeyIndexList(properties);
        };

        /**
         * Encodes the specified ADVKeyIndexList message. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @function encode
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Adv.IADVKeyIndexList} message ADVKeyIndexList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVKeyIndexList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.rawId != null && Object.hasOwnProperty.call(message, "rawId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.rawId);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.timestamp);
            if (message.currentIndex != null && Object.hasOwnProperty.call(message, "currentIndex"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.currentIndex);
            if (message.validIndexes != null && message.validIndexes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.validIndexes.length; ++i)
                    writer.uint32(message.validIndexes[i]);
                writer.ldelim();
            }
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.accountType);
            return writer;
        };

        /**
         * Encodes the specified ADVKeyIndexList message, length delimited. Does not implicitly {@link Adv.ADVKeyIndexList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Adv.IADVKeyIndexList} message ADVKeyIndexList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ADVKeyIndexList.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ADVKeyIndexList message from the specified reader or buffer.
         * @function decode
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Adv.ADVKeyIndexList} ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVKeyIndexList.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Adv.ADVKeyIndexList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.rawId = reader.uint32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.uint64();
                        break;
                    }
                case 3: {
                        message.currentIndex = reader.uint32();
                        break;
                    }
                case 4: {
                        if (!(message.validIndexes && message.validIndexes.length))
                            message.validIndexes = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.validIndexes.push(reader.uint32());
                        } else
                            message.validIndexes.push(reader.uint32());
                        break;
                    }
                case 5: {
                        message.accountType = reader.int32();
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
         * Decodes a ADVKeyIndexList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Adv.ADVKeyIndexList} ADVKeyIndexList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ADVKeyIndexList.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ADVKeyIndexList message.
         * @function verify
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ADVKeyIndexList.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.rawId != null && message.hasOwnProperty("rawId")) {
                properties._rawId = 1;
                if (!$util.isInteger(message.rawId))
                    return "rawId: integer expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            if (message.currentIndex != null && message.hasOwnProperty("currentIndex")) {
                properties._currentIndex = 1;
                if (!$util.isInteger(message.currentIndex))
                    return "currentIndex: integer expected";
            }
            if (message.validIndexes != null && message.hasOwnProperty("validIndexes")) {
                if (!Array.isArray(message.validIndexes))
                    return "validIndexes: array expected";
                for (var i = 0; i < message.validIndexes.length; ++i)
                    if (!$util.isInteger(message.validIndexes[i]))
                        return "validIndexes: integer[] expected";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                properties._accountType = 1;
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a ADVKeyIndexList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Adv.ADVKeyIndexList} ADVKeyIndexList
         */
        ADVKeyIndexList.fromObject = function fromObject(object) {
            if (object instanceof $root.Adv.ADVKeyIndexList)
                return object;
            var message = new $root.Adv.ADVKeyIndexList();
            if (object.rawId != null)
                message.rawId = object.rawId >>> 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = true;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber(true);
            if (object.currentIndex != null)
                message.currentIndex = object.currentIndex >>> 0;
            if (object.validIndexes) {
                if (!Array.isArray(object.validIndexes))
                    throw TypeError(".Adv.ADVKeyIndexList.validIndexes: array expected");
                message.validIndexes = [];
                for (var i = 0; i < object.validIndexes.length; ++i)
                    message.validIndexes[i] = object.validIndexes[i] >>> 0;
            }
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "E2EE":
            case 0:
                message.accountType = 0;
                break;
            case "HOSTED":
            case 1:
                message.accountType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a ADVKeyIndexList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {Adv.ADVKeyIndexList} message ADVKeyIndexList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ADVKeyIndexList.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.validIndexes = [];
            if (message.rawId != null && message.hasOwnProperty("rawId")) {
                object.rawId = message.rawId;
                if (options.oneofs)
                    object._rawId = "rawId";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber(true) : message.timestamp;
                if (options.oneofs)
                    object._timestamp = "timestamp";
            }
            if (message.currentIndex != null && message.hasOwnProperty("currentIndex")) {
                object.currentIndex = message.currentIndex;
                if (options.oneofs)
                    object._currentIndex = "currentIndex";
            }
            if (message.validIndexes && message.validIndexes.length) {
                object.validIndexes = [];
                for (var j = 0; j < message.validIndexes.length; ++j)
                    object.validIndexes[j] = message.validIndexes[j];
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                object.accountType = options.enums === String ? $root.Adv.ADVEncryptionType[message.accountType] === undefined ? message.accountType : $root.Adv.ADVEncryptionType[message.accountType] : message.accountType;
                if (options.oneofs)
                    object._accountType = "accountType";
            }
            return object;
        };

        /**
         * Converts this ADVKeyIndexList to JSON.
         * @function toJSON
         * @memberof Adv.ADVKeyIndexList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ADVKeyIndexList.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ADVKeyIndexList
         * @function getTypeUrl
         * @memberof Adv.ADVKeyIndexList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ADVKeyIndexList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Adv.ADVKeyIndexList";
        };

        return ADVKeyIndexList;
    })();

    /**
     * ADVEncryptionType enum.
     * @name Adv.ADVEncryptionType
     * @enum {number}
     * @property {number} E2EE=0 E2EE value
     * @property {number} HOSTED=1 HOSTED value
     */
    Adv.ADVEncryptionType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "E2EE"] = 0;
        values[valuesById[1] = "HOSTED"] = 1;
        return values;
    })();

    return Adv;
})();

module.exports = $root;
