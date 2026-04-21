/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Cert = (function() {

    /**
     * Namespace Cert.
     * @exports Cert
     * @namespace
     */
    var Cert = {};

    Cert.CertChain = (function() {

        /**
         * Properties of a CertChain.
         * @memberof Cert
         * @interface ICertChain
         * @property {Cert.CertChain.INoiseCertificate|null} [leaf] CertChain leaf
         * @property {Cert.CertChain.INoiseCertificate|null} [intermediate] CertChain intermediate
         */

        /**
         * Constructs a new CertChain.
         * @memberof Cert
         * @classdesc Represents a CertChain.
         * @implements ICertChain
         * @constructor
         * @param {Cert.ICertChain=} [properties] Properties to set
         */
        function CertChain(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CertChain leaf.
         * @member {Cert.CertChain.INoiseCertificate|null|undefined} leaf
         * @memberof Cert.CertChain
         * @instance
         */
        CertChain.prototype.leaf = null;

        /**
         * CertChain intermediate.
         * @member {Cert.CertChain.INoiseCertificate|null|undefined} intermediate
         * @memberof Cert.CertChain
         * @instance
         */
        CertChain.prototype.intermediate = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_leaf", {
            get: $util.oneOfGetter($oneOfFields = ["leaf"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(CertChain.prototype, "_intermediate", {
            get: $util.oneOfGetter($oneOfFields = ["intermediate"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new CertChain instance using the specified properties.
         * @function create
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.ICertChain=} [properties] Properties to set
         * @returns {Cert.CertChain} CertChain instance
         */
        CertChain.create = function create(properties) {
            return new CertChain(properties);
        };

        /**
         * Encodes the specified CertChain message. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @function encode
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.ICertChain} message CertChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CertChain.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.leaf != null && Object.hasOwnProperty.call(message, "leaf"))
                $root.Cert.CertChain.NoiseCertificate.encode(message.leaf, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.intermediate != null && Object.hasOwnProperty.call(message, "intermediate"))
                $root.Cert.CertChain.NoiseCertificate.encode(message.intermediate, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CertChain message, length delimited. Does not implicitly {@link Cert.CertChain.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.ICertChain} message CertChain message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CertChain.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CertChain message from the specified reader or buffer.
         * @function decode
         * @memberof Cert.CertChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cert.CertChain} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CertChain.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cert.CertChain();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.leaf = $root.Cert.CertChain.NoiseCertificate.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.intermediate = $root.Cert.CertChain.NoiseCertificate.decode(reader, reader.uint32());
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
         * Decodes a CertChain message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cert.CertChain
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cert.CertChain} CertChain
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CertChain.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CertChain message.
         * @function verify
         * @memberof Cert.CertChain
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CertChain.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.leaf != null && message.hasOwnProperty("leaf")) {
                properties._leaf = 1;
                {
                    var error = $root.Cert.CertChain.NoiseCertificate.verify(message.leaf);
                    if (error)
                        return "leaf." + error;
                }
            }
            if (message.intermediate != null && message.hasOwnProperty("intermediate")) {
                properties._intermediate = 1;
                {
                    var error = $root.Cert.CertChain.NoiseCertificate.verify(message.intermediate);
                    if (error)
                        return "intermediate." + error;
                }
            }
            return null;
        };

        /**
         * Creates a CertChain message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cert.CertChain
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cert.CertChain} CertChain
         */
        CertChain.fromObject = function fromObject(object) {
            if (object instanceof $root.Cert.CertChain)
                return object;
            var message = new $root.Cert.CertChain();
            if (object.leaf != null) {
                if (typeof object.leaf !== "object")
                    throw TypeError(".Cert.CertChain.leaf: object expected");
                message.leaf = $root.Cert.CertChain.NoiseCertificate.fromObject(object.leaf);
            }
            if (object.intermediate != null) {
                if (typeof object.intermediate !== "object")
                    throw TypeError(".Cert.CertChain.intermediate: object expected");
                message.intermediate = $root.Cert.CertChain.NoiseCertificate.fromObject(object.intermediate);
            }
            return message;
        };

        /**
         * Creates a plain object from a CertChain message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cert.CertChain
         * @static
         * @param {Cert.CertChain} message CertChain
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CertChain.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.leaf != null && message.hasOwnProperty("leaf")) {
                object.leaf = $root.Cert.CertChain.NoiseCertificate.toObject(message.leaf, options);
                if (options.oneofs)
                    object._leaf = "leaf";
            }
            if (message.intermediate != null && message.hasOwnProperty("intermediate")) {
                object.intermediate = $root.Cert.CertChain.NoiseCertificate.toObject(message.intermediate, options);
                if (options.oneofs)
                    object._intermediate = "intermediate";
            }
            return object;
        };

        /**
         * Converts this CertChain to JSON.
         * @function toJSON
         * @memberof Cert.CertChain
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CertChain.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CertChain
         * @function getTypeUrl
         * @memberof Cert.CertChain
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CertChain.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Cert.CertChain";
        };

        CertChain.NoiseCertificate = (function() {

            /**
             * Properties of a NoiseCertificate.
             * @memberof Cert.CertChain
             * @interface INoiseCertificate
             * @property {Uint8Array|null} [details] NoiseCertificate details
             * @property {Uint8Array|null} [signature] NoiseCertificate signature
             */

            /**
             * Constructs a new NoiseCertificate.
             * @memberof Cert.CertChain
             * @classdesc Represents a NoiseCertificate.
             * @implements INoiseCertificate
             * @constructor
             * @param {Cert.CertChain.INoiseCertificate=} [properties] Properties to set
             */
            function NoiseCertificate(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * NoiseCertificate details.
             * @member {Uint8Array|null|undefined} details
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             */
            NoiseCertificate.prototype.details = null;

            /**
             * NoiseCertificate signature.
             * @member {Uint8Array|null|undefined} signature
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             */
            NoiseCertificate.prototype.signature = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_details", {
                get: $util.oneOfGetter($oneOfFields = ["details"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(NoiseCertificate.prototype, "_signature", {
                get: $util.oneOfGetter($oneOfFields = ["signature"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new NoiseCertificate instance using the specified properties.
             * @function create
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.INoiseCertificate=} [properties] Properties to set
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate instance
             */
            NoiseCertificate.create = function create(properties) {
                return new NoiseCertificate(properties);
            };

            /**
             * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @function encode
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.INoiseCertificate} message NoiseCertificate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseCertificate.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
                if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
                return writer;
            };

            /**
             * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.INoiseCertificate} message NoiseCertificate message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            NoiseCertificate.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a NoiseCertificate message from the specified reader or buffer.
             * @function decode
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseCertificate.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cert.CertChain.NoiseCertificate();
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
             * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            NoiseCertificate.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a NoiseCertificate message.
             * @function verify
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            NoiseCertificate.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.details != null && message.hasOwnProperty("details")) {
                    properties._details = 1;
                    if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                        return "details: buffer expected";
                }
                if (message.signature != null && message.hasOwnProperty("signature")) {
                    properties._signature = 1;
                    if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                        return "signature: buffer expected";
                }
                return null;
            };

            /**
             * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Cert.CertChain.NoiseCertificate} NoiseCertificate
             */
            NoiseCertificate.fromObject = function fromObject(object) {
                if (object instanceof $root.Cert.CertChain.NoiseCertificate)
                    return object;
                var message = new $root.Cert.CertChain.NoiseCertificate();
                if (object.details != null)
                    if (typeof object.details === "string")
                        $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                    else if (object.details.length >= 0)
                        message.details = object.details;
                if (object.signature != null)
                    if (typeof object.signature === "string")
                        $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                    else if (object.signature.length >= 0)
                        message.signature = object.signature;
                return message;
            };

            /**
             * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {Cert.CertChain.NoiseCertificate} message NoiseCertificate
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            NoiseCertificate.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.details != null && message.hasOwnProperty("details")) {
                    object.details = options.bytes === String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === Array ? Array.prototype.slice.call(message.details) : message.details;
                    if (options.oneofs)
                        object._details = "details";
                }
                if (message.signature != null && message.hasOwnProperty("signature")) {
                    object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                    if (options.oneofs)
                        object._signature = "signature";
                }
                return object;
            };

            /**
             * Converts this NoiseCertificate to JSON.
             * @function toJSON
             * @memberof Cert.CertChain.NoiseCertificate
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            NoiseCertificate.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for NoiseCertificate
             * @function getTypeUrl
             * @memberof Cert.CertChain.NoiseCertificate
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            NoiseCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Cert.CertChain.NoiseCertificate";
            };

            NoiseCertificate.Details = (function() {

                /**
                 * Properties of a Details.
                 * @memberof Cert.CertChain.NoiseCertificate
                 * @interface IDetails
                 * @property {number|null} [serial] Details serial
                 * @property {number|null} [issuerSerial] Details issuerSerial
                 * @property {Uint8Array|null} [key] Details key
                 * @property {number|Long|null} [notBefore] Details notBefore
                 * @property {number|Long|null} [notAfter] Details notAfter
                 */

                /**
                 * Constructs a new Details.
                 * @memberof Cert.CertChain.NoiseCertificate
                 * @classdesc Represents a Details.
                 * @implements IDetails
                 * @constructor
                 * @param {Cert.CertChain.NoiseCertificate.IDetails=} [properties] Properties to set
                 */
                function Details(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * Details serial.
                 * @member {number|null|undefined} serial
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.serial = null;

                /**
                 * Details issuerSerial.
                 * @member {number|null|undefined} issuerSerial
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.issuerSerial = null;

                /**
                 * Details key.
                 * @member {Uint8Array|null|undefined} key
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.key = null;

                /**
                 * Details notBefore.
                 * @member {number|Long|null|undefined} notBefore
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.notBefore = null;

                /**
                 * Details notAfter.
                 * @member {number|Long|null|undefined} notAfter
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 */
                Details.prototype.notAfter = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_serial", {
                    get: $util.oneOfGetter($oneOfFields = ["serial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_issuerSerial", {
                    get: $util.oneOfGetter($oneOfFields = ["issuerSerial"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_key", {
                    get: $util.oneOfGetter($oneOfFields = ["key"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notBefore", {
                    get: $util.oneOfGetter($oneOfFields = ["notBefore"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(Details.prototype, "_notAfter", {
                    get: $util.oneOfGetter($oneOfFields = ["notAfter"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new Details instance using the specified properties.
                 * @function create
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.IDetails=} [properties] Properties to set
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details instance
                 */
                Details.create = function create(properties) {
                    return new Details(properties);
                };

                /**
                 * Encodes the specified Details message. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @function encode
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.IDetails} message Details message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Details.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.serial != null && Object.hasOwnProperty.call(message, "serial"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serial);
                    if (message.issuerSerial != null && Object.hasOwnProperty.call(message, "issuerSerial"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.issuerSerial);
                    if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                        writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
                    if (message.notBefore != null && Object.hasOwnProperty.call(message, "notBefore"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.notBefore);
                    if (message.notAfter != null && Object.hasOwnProperty.call(message, "notAfter"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.notAfter);
                    return writer;
                };

                /**
                 * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.CertChain.NoiseCertificate.Details.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.IDetails} message Details message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Details.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a Details message from the specified reader or buffer.
                 * @function decode
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Details.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cert.CertChain.NoiseCertificate.Details();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.serial = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.issuerSerial = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.key = reader.bytes();
                                break;
                            }
                        case 4: {
                                message.notBefore = reader.uint64();
                                break;
                            }
                        case 5: {
                                message.notAfter = reader.uint64();
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
                 * Decodes a Details message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Details.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a Details message.
                 * @function verify
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Details.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.serial != null && message.hasOwnProperty("serial")) {
                        properties._serial = 1;
                        if (!$util.isInteger(message.serial))
                            return "serial: integer expected";
                    }
                    if (message.issuerSerial != null && message.hasOwnProperty("issuerSerial")) {
                        properties._issuerSerial = 1;
                        if (!$util.isInteger(message.issuerSerial))
                            return "issuerSerial: integer expected";
                    }
                    if (message.key != null && message.hasOwnProperty("key")) {
                        properties._key = 1;
                        if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                            return "key: buffer expected";
                    }
                    if (message.notBefore != null && message.hasOwnProperty("notBefore")) {
                        properties._notBefore = 1;
                        if (!$util.isInteger(message.notBefore) && !(message.notBefore && $util.isInteger(message.notBefore.low) && $util.isInteger(message.notBefore.high)))
                            return "notBefore: integer|Long expected";
                    }
                    if (message.notAfter != null && message.hasOwnProperty("notAfter")) {
                        properties._notAfter = 1;
                        if (!$util.isInteger(message.notAfter) && !(message.notAfter && $util.isInteger(message.notAfter.low) && $util.isInteger(message.notAfter.high)))
                            return "notAfter: integer|Long expected";
                    }
                    return null;
                };

                /**
                 * Creates a Details message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Cert.CertChain.NoiseCertificate.Details} Details
                 */
                Details.fromObject = function fromObject(object) {
                    if (object instanceof $root.Cert.CertChain.NoiseCertificate.Details)
                        return object;
                    var message = new $root.Cert.CertChain.NoiseCertificate.Details();
                    if (object.serial != null)
                        message.serial = object.serial >>> 0;
                    if (object.issuerSerial != null)
                        message.issuerSerial = object.issuerSerial >>> 0;
                    if (object.key != null)
                        if (typeof object.key === "string")
                            $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                        else if (object.key.length >= 0)
                            message.key = object.key;
                    if (object.notBefore != null)
                        if ($util.Long)
                            (message.notBefore = $util.Long.fromValue(object.notBefore)).unsigned = true;
                        else if (typeof object.notBefore === "string")
                            message.notBefore = parseInt(object.notBefore, 10);
                        else if (typeof object.notBefore === "number")
                            message.notBefore = object.notBefore;
                        else if (typeof object.notBefore === "object")
                            message.notBefore = new $util.LongBits(object.notBefore.low >>> 0, object.notBefore.high >>> 0).toNumber(true);
                    if (object.notAfter != null)
                        if ($util.Long)
                            (message.notAfter = $util.Long.fromValue(object.notAfter)).unsigned = true;
                        else if (typeof object.notAfter === "string")
                            message.notAfter = parseInt(object.notAfter, 10);
                        else if (typeof object.notAfter === "number")
                            message.notAfter = object.notAfter;
                        else if (typeof object.notAfter === "object")
                            message.notAfter = new $util.LongBits(object.notAfter.low >>> 0, object.notAfter.high >>> 0).toNumber(true);
                    return message;
                };

                /**
                 * Creates a plain object from a Details message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {Cert.CertChain.NoiseCertificate.Details} message Details
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Details.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.serial != null && message.hasOwnProperty("serial")) {
                        object.serial = message.serial;
                        if (options.oneofs)
                            object._serial = "serial";
                    }
                    if (message.issuerSerial != null && message.hasOwnProperty("issuerSerial")) {
                        object.issuerSerial = message.issuerSerial;
                        if (options.oneofs)
                            object._issuerSerial = "issuerSerial";
                    }
                    if (message.key != null && message.hasOwnProperty("key")) {
                        object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (options.oneofs)
                            object._key = "key";
                    }
                    if (message.notBefore != null && message.hasOwnProperty("notBefore")) {
                        if (typeof message.notBefore === "number")
                            object.notBefore = options.longs === String ? String(message.notBefore) : message.notBefore;
                        else
                            object.notBefore = options.longs === String ? $util.Long.prototype.toString.call(message.notBefore) : options.longs === Number ? new $util.LongBits(message.notBefore.low >>> 0, message.notBefore.high >>> 0).toNumber(true) : message.notBefore;
                        if (options.oneofs)
                            object._notBefore = "notBefore";
                    }
                    if (message.notAfter != null && message.hasOwnProperty("notAfter")) {
                        if (typeof message.notAfter === "number")
                            object.notAfter = options.longs === String ? String(message.notAfter) : message.notAfter;
                        else
                            object.notAfter = options.longs === String ? $util.Long.prototype.toString.call(message.notAfter) : options.longs === Number ? new $util.LongBits(message.notAfter.low >>> 0, message.notAfter.high >>> 0).toNumber(true) : message.notAfter;
                        if (options.oneofs)
                            object._notAfter = "notAfter";
                    }
                    return object;
                };

                /**
                 * Converts this Details to JSON.
                 * @function toJSON
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Details.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for Details
                 * @function getTypeUrl
                 * @memberof Cert.CertChain.NoiseCertificate.Details
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Cert.CertChain.NoiseCertificate.Details";
                };

                return Details;
            })();

            return NoiseCertificate;
        })();

        return CertChain;
    })();

    Cert.NoiseCertificate = (function() {

        /**
         * Properties of a NoiseCertificate.
         * @memberof Cert
         * @interface INoiseCertificate
         * @property {Uint8Array|null} [details] NoiseCertificate details
         * @property {Uint8Array|null} [signature] NoiseCertificate signature
         */

        /**
         * Constructs a new NoiseCertificate.
         * @memberof Cert
         * @classdesc Represents a NoiseCertificate.
         * @implements INoiseCertificate
         * @constructor
         * @param {Cert.INoiseCertificate=} [properties] Properties to set
         */
        function NoiseCertificate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoiseCertificate details.
         * @member {Uint8Array|null|undefined} details
         * @memberof Cert.NoiseCertificate
         * @instance
         */
        NoiseCertificate.prototype.details = null;

        /**
         * NoiseCertificate signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof Cert.NoiseCertificate
         * @instance
         */
        NoiseCertificate.prototype.signature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoiseCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(NoiseCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new NoiseCertificate instance using the specified properties.
         * @function create
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.INoiseCertificate=} [properties] Properties to set
         * @returns {Cert.NoiseCertificate} NoiseCertificate instance
         */
        NoiseCertificate.create = function create(properties) {
            return new NoiseCertificate(properties);
        };

        /**
         * Encodes the specified NoiseCertificate message. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @function encode
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.INoiseCertificate} message NoiseCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoiseCertificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            return writer;
        };

        /**
         * Encodes the specified NoiseCertificate message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.INoiseCertificate} message NoiseCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoiseCertificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoiseCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Cert.NoiseCertificate} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoiseCertificate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cert.NoiseCertificate();
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
         * Decodes a NoiseCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Cert.NoiseCertificate} NoiseCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoiseCertificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoiseCertificate message.
         * @function verify
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoiseCertificate.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                properties._details = 1;
                if (!(message.details && typeof message.details.length === "number" || $util.isString(message.details)))
                    return "details: buffer expected";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                properties._signature = 1;
                if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                    return "signature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a NoiseCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Cert.NoiseCertificate} NoiseCertificate
         */
        NoiseCertificate.fromObject = function fromObject(object) {
            if (object instanceof $root.Cert.NoiseCertificate)
                return object;
            var message = new $root.Cert.NoiseCertificate();
            if (object.details != null)
                if (typeof object.details === "string")
                    $util.base64.decode(object.details, message.details = $util.newBuffer($util.base64.length(object.details)), 0);
                else if (object.details.length >= 0)
                    message.details = object.details;
            if (object.signature != null)
                if (typeof object.signature === "string")
                    $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
                else if (object.signature.length >= 0)
                    message.signature = object.signature;
            return message;
        };

        /**
         * Creates a plain object from a NoiseCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {Cert.NoiseCertificate} message NoiseCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoiseCertificate.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.details != null && message.hasOwnProperty("details")) {
                object.details = options.bytes === String ? $util.base64.encode(message.details, 0, message.details.length) : options.bytes === Array ? Array.prototype.slice.call(message.details) : message.details;
                if (options.oneofs)
                    object._details = "details";
            }
            if (message.signature != null && message.hasOwnProperty("signature")) {
                object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
                if (options.oneofs)
                    object._signature = "signature";
            }
            return object;
        };

        /**
         * Converts this NoiseCertificate to JSON.
         * @function toJSON
         * @memberof Cert.NoiseCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoiseCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for NoiseCertificate
         * @function getTypeUrl
         * @memberof Cert.NoiseCertificate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        NoiseCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Cert.NoiseCertificate";
        };

        NoiseCertificate.Details = (function() {

            /**
             * Properties of a Details.
             * @memberof Cert.NoiseCertificate
             * @interface IDetails
             * @property {number|null} [serial] Details serial
             * @property {string|null} [issuer] Details issuer
             * @property {number|Long|null} [expires] Details expires
             * @property {string|null} [subject] Details subject
             * @property {Uint8Array|null} [key] Details key
             */

            /**
             * Constructs a new Details.
             * @memberof Cert.NoiseCertificate
             * @classdesc Represents a Details.
             * @implements IDetails
             * @constructor
             * @param {Cert.NoiseCertificate.IDetails=} [properties] Properties to set
             */
            function Details(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Details serial.
             * @member {number|null|undefined} serial
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.serial = null;

            /**
             * Details issuer.
             * @member {string|null|undefined} issuer
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.issuer = null;

            /**
             * Details expires.
             * @member {number|Long|null|undefined} expires
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.expires = null;

            /**
             * Details subject.
             * @member {string|null|undefined} subject
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.subject = null;

            /**
             * Details key.
             * @member {Uint8Array|null|undefined} key
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             */
            Details.prototype.key = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_serial", {
                get: $util.oneOfGetter($oneOfFields = ["serial"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_issuer", {
                get: $util.oneOfGetter($oneOfFields = ["issuer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_expires", {
                get: $util.oneOfGetter($oneOfFields = ["expires"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_subject", {
                get: $util.oneOfGetter($oneOfFields = ["subject"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_key", {
                get: $util.oneOfGetter($oneOfFields = ["key"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Details instance using the specified properties.
             * @function create
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.IDetails=} [properties] Properties to set
             * @returns {Cert.NoiseCertificate.Details} Details instance
             */
            Details.create = function create(properties) {
                return new Details(properties);
            };

            /**
             * Encodes the specified Details message. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @function encode
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.IDetails} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serial != null && Object.hasOwnProperty.call(message, "serial"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.serial);
                if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.issuer);
                if (message.expires != null && Object.hasOwnProperty.call(message, "expires"))
                    writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.expires);
                if (message.subject != null && Object.hasOwnProperty.call(message, "subject"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.subject);
                if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.key);
                return writer;
            };

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link Cert.NoiseCertificate.Details.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.IDetails} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @function decode
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Cert.NoiseCertificate.Details} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Details.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Cert.NoiseCertificate.Details();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.serial = reader.uint32();
                            break;
                        }
                    case 2: {
                            message.issuer = reader.string();
                            break;
                        }
                    case 3: {
                            message.expires = reader.uint64();
                            break;
                        }
                    case 4: {
                            message.subject = reader.string();
                            break;
                        }
                    case 5: {
                            message.key = reader.bytes();
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
             * Decodes a Details message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Cert.NoiseCertificate.Details} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Details.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Details message.
             * @function verify
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Details.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.serial != null && message.hasOwnProperty("serial")) {
                    properties._serial = 1;
                    if (!$util.isInteger(message.serial))
                        return "serial: integer expected";
                }
                if (message.issuer != null && message.hasOwnProperty("issuer")) {
                    properties._issuer = 1;
                    if (!$util.isString(message.issuer))
                        return "issuer: string expected";
                }
                if (message.expires != null && message.hasOwnProperty("expires")) {
                    properties._expires = 1;
                    if (!$util.isInteger(message.expires) && !(message.expires && $util.isInteger(message.expires.low) && $util.isInteger(message.expires.high)))
                        return "expires: integer|Long expected";
                }
                if (message.subject != null && message.hasOwnProperty("subject")) {
                    properties._subject = 1;
                    if (!$util.isString(message.subject))
                        return "subject: string expected";
                }
                if (message.key != null && message.hasOwnProperty("key")) {
                    properties._key = 1;
                    if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                        return "key: buffer expected";
                }
                return null;
            };

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Cert.NoiseCertificate.Details} Details
             */
            Details.fromObject = function fromObject(object) {
                if (object instanceof $root.Cert.NoiseCertificate.Details)
                    return object;
                var message = new $root.Cert.NoiseCertificate.Details();
                if (object.serial != null)
                    message.serial = object.serial >>> 0;
                if (object.issuer != null)
                    message.issuer = String(object.issuer);
                if (object.expires != null)
                    if ($util.Long)
                        (message.expires = $util.Long.fromValue(object.expires)).unsigned = true;
                    else if (typeof object.expires === "string")
                        message.expires = parseInt(object.expires, 10);
                    else if (typeof object.expires === "number")
                        message.expires = object.expires;
                    else if (typeof object.expires === "object")
                        message.expires = new $util.LongBits(object.expires.low >>> 0, object.expires.high >>> 0).toNumber(true);
                if (object.subject != null)
                    message.subject = String(object.subject);
                if (object.key != null)
                    if (typeof object.key === "string")
                        $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                    else if (object.key.length >= 0)
                        message.key = object.key;
                return message;
            };

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {Cert.NoiseCertificate.Details} message Details
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Details.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.serial != null && message.hasOwnProperty("serial")) {
                    object.serial = message.serial;
                    if (options.oneofs)
                        object._serial = "serial";
                }
                if (message.issuer != null && message.hasOwnProperty("issuer")) {
                    object.issuer = message.issuer;
                    if (options.oneofs)
                        object._issuer = "issuer";
                }
                if (message.expires != null && message.hasOwnProperty("expires")) {
                    if (typeof message.expires === "number")
                        object.expires = options.longs === String ? String(message.expires) : message.expires;
                    else
                        object.expires = options.longs === String ? $util.Long.prototype.toString.call(message.expires) : options.longs === Number ? new $util.LongBits(message.expires.low >>> 0, message.expires.high >>> 0).toNumber(true) : message.expires;
                    if (options.oneofs)
                        object._expires = "expires";
                }
                if (message.subject != null && message.hasOwnProperty("subject")) {
                    object.subject = message.subject;
                    if (options.oneofs)
                        object._subject = "subject";
                }
                if (message.key != null && message.hasOwnProperty("key")) {
                    object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                    if (options.oneofs)
                        object._key = "key";
                }
                return object;
            };

            /**
             * Converts this Details to JSON.
             * @function toJSON
             * @memberof Cert.NoiseCertificate.Details
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Details.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Details
             * @function getTypeUrl
             * @memberof Cert.NoiseCertificate.Details
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Cert.NoiseCertificate.Details";
            };

            return Details;
        })();

        return NoiseCertificate;
    })();

    return Cert;
})();

module.exports = $root;
