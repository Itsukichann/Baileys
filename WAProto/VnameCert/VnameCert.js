/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.VnameCert = (function() {

    /**
     * Namespace VnameCert.
     * @exports VnameCert
     * @namespace
     */
    var VnameCert = {};

    VnameCert.BizIdentityInfo = (function() {

        /**
         * Properties of a BizIdentityInfo.
         * @memberof VnameCert
         * @interface IBizIdentityInfo
         * @property {VnameCert.BizIdentityInfo.VerifiedLevelValue|null} [vlevel] BizIdentityInfo vlevel
         * @property {VnameCert.IVerifiedNameCertificate|null} [vnameCert] BizIdentityInfo vnameCert
         * @property {boolean|null} [signed] BizIdentityInfo signed
         * @property {boolean|null} [revoked] BizIdentityInfo revoked
         * @property {VnameCert.BizIdentityInfo.HostStorageType|null} [hostStorage] BizIdentityInfo hostStorage
         * @property {VnameCert.BizIdentityInfo.ActualActorsType|null} [actualActors] BizIdentityInfo actualActors
         * @property {number|Long|null} [privacyModeTs] BizIdentityInfo privacyModeTs
         * @property {number|Long|null} [featureControls] BizIdentityInfo featureControls
         */

        /**
         * Constructs a new BizIdentityInfo.
         * @memberof VnameCert
         * @classdesc Represents a BizIdentityInfo.
         * @implements IBizIdentityInfo
         * @constructor
         * @param {VnameCert.IBizIdentityInfo=} [properties] Properties to set
         */
        function BizIdentityInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BizIdentityInfo vlevel.
         * @member {VnameCert.BizIdentityInfo.VerifiedLevelValue|null|undefined} vlevel
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.vlevel = null;

        /**
         * BizIdentityInfo vnameCert.
         * @member {VnameCert.IVerifiedNameCertificate|null|undefined} vnameCert
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.vnameCert = null;

        /**
         * BizIdentityInfo signed.
         * @member {boolean|null|undefined} signed
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.signed = null;

        /**
         * BizIdentityInfo revoked.
         * @member {boolean|null|undefined} revoked
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.revoked = null;

        /**
         * BizIdentityInfo hostStorage.
         * @member {VnameCert.BizIdentityInfo.HostStorageType|null|undefined} hostStorage
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.hostStorage = null;

        /**
         * BizIdentityInfo actualActors.
         * @member {VnameCert.BizIdentityInfo.ActualActorsType|null|undefined} actualActors
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.actualActors = null;

        /**
         * BizIdentityInfo privacyModeTs.
         * @member {number|Long|null|undefined} privacyModeTs
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.privacyModeTs = null;

        /**
         * BizIdentityInfo featureControls.
         * @member {number|Long|null|undefined} featureControls
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         */
        BizIdentityInfo.prototype.featureControls = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_vlevel", {
            get: $util.oneOfGetter($oneOfFields = ["vlevel"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_signed", {
            get: $util.oneOfGetter($oneOfFields = ["signed"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_revoked", {
            get: $util.oneOfGetter($oneOfFields = ["revoked"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_actualActors", {
            get: $util.oneOfGetter($oneOfFields = ["actualActors"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_privacyModeTs", {
            get: $util.oneOfGetter($oneOfFields = ["privacyModeTs"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizIdentityInfo.prototype, "_featureControls", {
            get: $util.oneOfGetter($oneOfFields = ["featureControls"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizIdentityInfo instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.IBizIdentityInfo=} [properties] Properties to set
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo instance
         */
        BizIdentityInfo.create = function create(properties) {
            return new BizIdentityInfo(properties);
        };

        /**
         * Encodes the specified BizIdentityInfo message. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.IBizIdentityInfo} message BizIdentityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizIdentityInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vlevel != null && Object.hasOwnProperty.call(message, "vlevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.vlevel);
            if (message.vnameCert != null && Object.hasOwnProperty.call(message, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(message.vnameCert, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.signed != null && Object.hasOwnProperty.call(message, "signed"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.signed);
            if (message.revoked != null && Object.hasOwnProperty.call(message, "revoked"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.revoked);
            if (message.hostStorage != null && Object.hasOwnProperty.call(message, "hostStorage"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.hostStorage);
            if (message.actualActors != null && Object.hasOwnProperty.call(message, "actualActors"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.actualActors);
            if (message.privacyModeTs != null && Object.hasOwnProperty.call(message, "privacyModeTs"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.privacyModeTs);
            if (message.featureControls != null && Object.hasOwnProperty.call(message, "featureControls"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.featureControls);
            return writer;
        };

        /**
         * Encodes the specified BizIdentityInfo message, length delimited. Does not implicitly {@link VnameCert.BizIdentityInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.IBizIdentityInfo} message BizIdentityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizIdentityInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BizIdentityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizIdentityInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.BizIdentityInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.vlevel = reader.int32();
                        break;
                    }
                case 2: {
                        message.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.signed = reader.bool();
                        break;
                    }
                case 4: {
                        message.revoked = reader.bool();
                        break;
                    }
                case 5: {
                        message.hostStorage = reader.int32();
                        break;
                    }
                case 6: {
                        message.actualActors = reader.int32();
                        break;
                    }
                case 7: {
                        message.privacyModeTs = reader.uint64();
                        break;
                    }
                case 8: {
                        message.featureControls = reader.uint64();
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
         * Decodes a BizIdentityInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizIdentityInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizIdentityInfo message.
         * @function verify
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizIdentityInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.vlevel != null && message.hasOwnProperty("vlevel")) {
                properties._vlevel = 1;
                switch (message.vlevel) {
                default:
                    return "vlevel: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.vnameCert != null && message.hasOwnProperty("vnameCert")) {
                properties._vnameCert = 1;
                {
                    var error = $root.VnameCert.VerifiedNameCertificate.verify(message.vnameCert);
                    if (error)
                        return "vnameCert." + error;
                }
            }
            if (message.signed != null && message.hasOwnProperty("signed")) {
                properties._signed = 1;
                if (typeof message.signed !== "boolean")
                    return "signed: boolean expected";
            }
            if (message.revoked != null && message.hasOwnProperty("revoked")) {
                properties._revoked = 1;
                if (typeof message.revoked !== "boolean")
                    return "revoked: boolean expected";
            }
            if (message.hostStorage != null && message.hasOwnProperty("hostStorage")) {
                properties._hostStorage = 1;
                switch (message.hostStorage) {
                default:
                    return "hostStorage: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.actualActors != null && message.hasOwnProperty("actualActors")) {
                properties._actualActors = 1;
                switch (message.actualActors) {
                default:
                    return "actualActors: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.privacyModeTs != null && message.hasOwnProperty("privacyModeTs")) {
                properties._privacyModeTs = 1;
                if (!$util.isInteger(message.privacyModeTs) && !(message.privacyModeTs && $util.isInteger(message.privacyModeTs.low) && $util.isInteger(message.privacyModeTs.high)))
                    return "privacyModeTs: integer|Long expected";
            }
            if (message.featureControls != null && message.hasOwnProperty("featureControls")) {
                properties._featureControls = 1;
                if (!$util.isInteger(message.featureControls) && !(message.featureControls && $util.isInteger(message.featureControls.low) && $util.isInteger(message.featureControls.high)))
                    return "featureControls: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates a BizIdentityInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizIdentityInfo} BizIdentityInfo
         */
        BizIdentityInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.VnameCert.BizIdentityInfo)
                return object;
            var message = new $root.VnameCert.BizIdentityInfo();
            switch (object.vlevel) {
            default:
                if (typeof object.vlevel === "number") {
                    message.vlevel = object.vlevel;
                    break;
                }
                break;
            case "UNKNOWN":
            case 0:
                message.vlevel = 0;
                break;
            case "LOW":
            case 1:
                message.vlevel = 1;
                break;
            case "HIGH":
            case 2:
                message.vlevel = 2;
                break;
            }
            if (object.vnameCert != null) {
                if (typeof object.vnameCert !== "object")
                    throw TypeError(".VnameCert.BizIdentityInfo.vnameCert: object expected");
                message.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(object.vnameCert);
            }
            if (object.signed != null)
                message.signed = Boolean(object.signed);
            if (object.revoked != null)
                message.revoked = Boolean(object.revoked);
            switch (object.hostStorage) {
            default:
                if (typeof object.hostStorage === "number") {
                    message.hostStorage = object.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                message.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                message.hostStorage = 1;
                break;
            }
            switch (object.actualActors) {
            default:
                if (typeof object.actualActors === "number") {
                    message.actualActors = object.actualActors;
                    break;
                }
                break;
            case "SELF":
            case 0:
                message.actualActors = 0;
                break;
            case "BSP":
            case 1:
                message.actualActors = 1;
                break;
            }
            if (object.privacyModeTs != null)
                if ($util.Long)
                    (message.privacyModeTs = $util.Long.fromValue(object.privacyModeTs)).unsigned = true;
                else if (typeof object.privacyModeTs === "string")
                    message.privacyModeTs = parseInt(object.privacyModeTs, 10);
                else if (typeof object.privacyModeTs === "number")
                    message.privacyModeTs = object.privacyModeTs;
                else if (typeof object.privacyModeTs === "object")
                    message.privacyModeTs = new $util.LongBits(object.privacyModeTs.low >>> 0, object.privacyModeTs.high >>> 0).toNumber(true);
            if (object.featureControls != null)
                if ($util.Long)
                    (message.featureControls = $util.Long.fromValue(object.featureControls)).unsigned = true;
                else if (typeof object.featureControls === "string")
                    message.featureControls = parseInt(object.featureControls, 10);
                else if (typeof object.featureControls === "number")
                    message.featureControls = object.featureControls;
                else if (typeof object.featureControls === "object")
                    message.featureControls = new $util.LongBits(object.featureControls.low >>> 0, object.featureControls.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BizIdentityInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {VnameCert.BizIdentityInfo} message BizIdentityInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizIdentityInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.vlevel != null && message.hasOwnProperty("vlevel")) {
                object.vlevel = options.enums === String ? $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[message.vlevel] === undefined ? message.vlevel : $root.VnameCert.BizIdentityInfo.VerifiedLevelValue[message.vlevel] : message.vlevel;
                if (options.oneofs)
                    object._vlevel = "vlevel";
            }
            if (message.vnameCert != null && message.hasOwnProperty("vnameCert")) {
                object.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(message.vnameCert, options);
                if (options.oneofs)
                    object._vnameCert = "vnameCert";
            }
            if (message.signed != null && message.hasOwnProperty("signed")) {
                object.signed = message.signed;
                if (options.oneofs)
                    object._signed = "signed";
            }
            if (message.revoked != null && message.hasOwnProperty("revoked")) {
                object.revoked = message.revoked;
                if (options.oneofs)
                    object._revoked = "revoked";
            }
            if (message.hostStorage != null && message.hasOwnProperty("hostStorage")) {
                object.hostStorage = options.enums === String ? $root.VnameCert.BizIdentityInfo.HostStorageType[message.hostStorage] === undefined ? message.hostStorage : $root.VnameCert.BizIdentityInfo.HostStorageType[message.hostStorage] : message.hostStorage;
                if (options.oneofs)
                    object._hostStorage = "hostStorage";
            }
            if (message.actualActors != null && message.hasOwnProperty("actualActors")) {
                object.actualActors = options.enums === String ? $root.VnameCert.BizIdentityInfo.ActualActorsType[message.actualActors] === undefined ? message.actualActors : $root.VnameCert.BizIdentityInfo.ActualActorsType[message.actualActors] : message.actualActors;
                if (options.oneofs)
                    object._actualActors = "actualActors";
            }
            if (message.privacyModeTs != null && message.hasOwnProperty("privacyModeTs")) {
                if (typeof message.privacyModeTs === "number")
                    object.privacyModeTs = options.longs === String ? String(message.privacyModeTs) : message.privacyModeTs;
                else
                    object.privacyModeTs = options.longs === String ? $util.Long.prototype.toString.call(message.privacyModeTs) : options.longs === Number ? new $util.LongBits(message.privacyModeTs.low >>> 0, message.privacyModeTs.high >>> 0).toNumber(true) : message.privacyModeTs;
                if (options.oneofs)
                    object._privacyModeTs = "privacyModeTs";
            }
            if (message.featureControls != null && message.hasOwnProperty("featureControls")) {
                if (typeof message.featureControls === "number")
                    object.featureControls = options.longs === String ? String(message.featureControls) : message.featureControls;
                else
                    object.featureControls = options.longs === String ? $util.Long.prototype.toString.call(message.featureControls) : options.longs === Number ? new $util.LongBits(message.featureControls.low >>> 0, message.featureControls.high >>> 0).toNumber(true) : message.featureControls;
                if (options.oneofs)
                    object._featureControls = "featureControls";
            }
            return object;
        };

        /**
         * Converts this BizIdentityInfo to JSON.
         * @function toJSON
         * @memberof VnameCert.BizIdentityInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizIdentityInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BizIdentityInfo
         * @function getTypeUrl
         * @memberof VnameCert.BizIdentityInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BizIdentityInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/VnameCert.BizIdentityInfo";
        };

        /**
         * ActualActorsType enum.
         * @name VnameCert.BizIdentityInfo.ActualActorsType
         * @enum {number}
         * @property {number} SELF=0 SELF value
         * @property {number} BSP=1 BSP value
         */
        BizIdentityInfo.ActualActorsType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SELF"] = 0;
            values[valuesById[1] = "BSP"] = 1;
            return values;
        })();

        /**
         * HostStorageType enum.
         * @name VnameCert.BizIdentityInfo.HostStorageType
         * @enum {number}
         * @property {number} ON_PREMISE=0 ON_PREMISE value
         * @property {number} FACEBOOK=1 FACEBOOK value
         */
        BizIdentityInfo.HostStorageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        /**
         * VerifiedLevelValue enum.
         * @name VnameCert.BizIdentityInfo.VerifiedLevelValue
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} LOW=1 LOW value
         * @property {number} HIGH=2 HIGH value
         */
        BizIdentityInfo.VerifiedLevelValue = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "LOW"] = 1;
            values[valuesById[2] = "HIGH"] = 2;
            return values;
        })();

        return BizIdentityInfo;
    })();

    VnameCert.BizAccountLinkInfo = (function() {

        /**
         * Properties of a BizAccountLinkInfo.
         * @memberof VnameCert
         * @interface IBizAccountLinkInfo
         * @property {number|Long|null} [whatsappBizAcctFbid] BizAccountLinkInfo whatsappBizAcctFbid
         * @property {string|null} [whatsappAcctNumber] BizAccountLinkInfo whatsappAcctNumber
         * @property {number|Long|null} [issueTime] BizAccountLinkInfo issueTime
         * @property {VnameCert.BizAccountLinkInfo.HostStorageType|null} [hostStorage] BizAccountLinkInfo hostStorage
         * @property {VnameCert.BizAccountLinkInfo.AccountType|null} [accountType] BizAccountLinkInfo accountType
         */

        /**
         * Constructs a new BizAccountLinkInfo.
         * @memberof VnameCert
         * @classdesc Represents a BizAccountLinkInfo.
         * @implements IBizAccountLinkInfo
         * @constructor
         * @param {VnameCert.IBizAccountLinkInfo=} [properties] Properties to set
         */
        function BizAccountLinkInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BizAccountLinkInfo whatsappBizAcctFbid.
         * @member {number|Long|null|undefined} whatsappBizAcctFbid
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.whatsappBizAcctFbid = null;

        /**
         * BizAccountLinkInfo whatsappAcctNumber.
         * @member {string|null|undefined} whatsappAcctNumber
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.whatsappAcctNumber = null;

        /**
         * BizAccountLinkInfo issueTime.
         * @member {number|Long|null|undefined} issueTime
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.issueTime = null;

        /**
         * BizAccountLinkInfo hostStorage.
         * @member {VnameCert.BizAccountLinkInfo.HostStorageType|null|undefined} hostStorage
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.hostStorage = null;

        /**
         * BizAccountLinkInfo accountType.
         * @member {VnameCert.BizAccountLinkInfo.AccountType|null|undefined} accountType
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         */
        BizAccountLinkInfo.prototype.accountType = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappBizAcctFbid", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappBizAcctFbid"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_whatsappAcctNumber", {
            get: $util.oneOfGetter($oneOfFields = ["whatsappAcctNumber"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_issueTime", {
            get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_hostStorage", {
            get: $util.oneOfGetter($oneOfFields = ["hostStorage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountLinkInfo.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizAccountLinkInfo instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.IBizAccountLinkInfo=} [properties] Properties to set
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo instance
         */
        BizAccountLinkInfo.create = function create(properties) {
            return new BizAccountLinkInfo(properties);
        };

        /**
         * Encodes the specified BizAccountLinkInfo message. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.IBizAccountLinkInfo} message BizAccountLinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountLinkInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.whatsappBizAcctFbid != null && Object.hasOwnProperty.call(message, "whatsappBizAcctFbid"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.whatsappBizAcctFbid);
            if (message.whatsappAcctNumber != null && Object.hasOwnProperty.call(message, "whatsappAcctNumber"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.whatsappAcctNumber);
            if (message.issueTime != null && Object.hasOwnProperty.call(message, "issueTime"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.issueTime);
            if (message.hostStorage != null && Object.hasOwnProperty.call(message, "hostStorage"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.hostStorage);
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.accountType);
            return writer;
        };

        /**
         * Encodes the specified BizAccountLinkInfo message, length delimited. Does not implicitly {@link VnameCert.BizAccountLinkInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.IBizAccountLinkInfo} message BizAccountLinkInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountLinkInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountLinkInfo.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.BizAccountLinkInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.whatsappBizAcctFbid = reader.uint64();
                        break;
                    }
                case 2: {
                        message.whatsappAcctNumber = reader.string();
                        break;
                    }
                case 3: {
                        message.issueTime = reader.uint64();
                        break;
                    }
                case 4: {
                        message.hostStorage = reader.int32();
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
         * Decodes a BizAccountLinkInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountLinkInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizAccountLinkInfo message.
         * @function verify
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizAccountLinkInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.whatsappBizAcctFbid != null && message.hasOwnProperty("whatsappBizAcctFbid")) {
                properties._whatsappBizAcctFbid = 1;
                if (!$util.isInteger(message.whatsappBizAcctFbid) && !(message.whatsappBizAcctFbid && $util.isInteger(message.whatsappBizAcctFbid.low) && $util.isInteger(message.whatsappBizAcctFbid.high)))
                    return "whatsappBizAcctFbid: integer|Long expected";
            }
            if (message.whatsappAcctNumber != null && message.hasOwnProperty("whatsappAcctNumber")) {
                properties._whatsappAcctNumber = 1;
                if (!$util.isString(message.whatsappAcctNumber))
                    return "whatsappAcctNumber: string expected";
            }
            if (message.issueTime != null && message.hasOwnProperty("issueTime")) {
                properties._issueTime = 1;
                if (!$util.isInteger(message.issueTime) && !(message.issueTime && $util.isInteger(message.issueTime.low) && $util.isInteger(message.issueTime.high)))
                    return "issueTime: integer|Long expected";
            }
            if (message.hostStorage != null && message.hasOwnProperty("hostStorage")) {
                properties._hostStorage = 1;
                switch (message.hostStorage) {
                default:
                    return "hostStorage: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                properties._accountType = 1;
                switch (message.accountType) {
                default:
                    return "accountType: enum value expected";
                case 0:
                    break;
                }
            }
            return null;
        };

        /**
         * Creates a BizAccountLinkInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizAccountLinkInfo} BizAccountLinkInfo
         */
        BizAccountLinkInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.VnameCert.BizAccountLinkInfo)
                return object;
            var message = new $root.VnameCert.BizAccountLinkInfo();
            if (object.whatsappBizAcctFbid != null)
                if ($util.Long)
                    (message.whatsappBizAcctFbid = $util.Long.fromValue(object.whatsappBizAcctFbid)).unsigned = true;
                else if (typeof object.whatsappBizAcctFbid === "string")
                    message.whatsappBizAcctFbid = parseInt(object.whatsappBizAcctFbid, 10);
                else if (typeof object.whatsappBizAcctFbid === "number")
                    message.whatsappBizAcctFbid = object.whatsappBizAcctFbid;
                else if (typeof object.whatsappBizAcctFbid === "object")
                    message.whatsappBizAcctFbid = new $util.LongBits(object.whatsappBizAcctFbid.low >>> 0, object.whatsappBizAcctFbid.high >>> 0).toNumber(true);
            if (object.whatsappAcctNumber != null)
                message.whatsappAcctNumber = String(object.whatsappAcctNumber);
            if (object.issueTime != null)
                if ($util.Long)
                    (message.issueTime = $util.Long.fromValue(object.issueTime)).unsigned = true;
                else if (typeof object.issueTime === "string")
                    message.issueTime = parseInt(object.issueTime, 10);
                else if (typeof object.issueTime === "number")
                    message.issueTime = object.issueTime;
                else if (typeof object.issueTime === "object")
                    message.issueTime = new $util.LongBits(object.issueTime.low >>> 0, object.issueTime.high >>> 0).toNumber(true);
            switch (object.hostStorage) {
            default:
                if (typeof object.hostStorage === "number") {
                    message.hostStorage = object.hostStorage;
                    break;
                }
                break;
            case "ON_PREMISE":
            case 0:
                message.hostStorage = 0;
                break;
            case "FACEBOOK":
            case 1:
                message.hostStorage = 1;
                break;
            }
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "ENTERPRISE":
            case 0:
                message.accountType = 0;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a BizAccountLinkInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {VnameCert.BizAccountLinkInfo} message BizAccountLinkInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizAccountLinkInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.whatsappBizAcctFbid != null && message.hasOwnProperty("whatsappBizAcctFbid")) {
                if (typeof message.whatsappBizAcctFbid === "number")
                    object.whatsappBizAcctFbid = options.longs === String ? String(message.whatsappBizAcctFbid) : message.whatsappBizAcctFbid;
                else
                    object.whatsappBizAcctFbid = options.longs === String ? $util.Long.prototype.toString.call(message.whatsappBizAcctFbid) : options.longs === Number ? new $util.LongBits(message.whatsappBizAcctFbid.low >>> 0, message.whatsappBizAcctFbid.high >>> 0).toNumber(true) : message.whatsappBizAcctFbid;
                if (options.oneofs)
                    object._whatsappBizAcctFbid = "whatsappBizAcctFbid";
            }
            if (message.whatsappAcctNumber != null && message.hasOwnProperty("whatsappAcctNumber")) {
                object.whatsappAcctNumber = message.whatsappAcctNumber;
                if (options.oneofs)
                    object._whatsappAcctNumber = "whatsappAcctNumber";
            }
            if (message.issueTime != null && message.hasOwnProperty("issueTime")) {
                if (typeof message.issueTime === "number")
                    object.issueTime = options.longs === String ? String(message.issueTime) : message.issueTime;
                else
                    object.issueTime = options.longs === String ? $util.Long.prototype.toString.call(message.issueTime) : options.longs === Number ? new $util.LongBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0).toNumber(true) : message.issueTime;
                if (options.oneofs)
                    object._issueTime = "issueTime";
            }
            if (message.hostStorage != null && message.hasOwnProperty("hostStorage")) {
                object.hostStorage = options.enums === String ? $root.VnameCert.BizAccountLinkInfo.HostStorageType[message.hostStorage] === undefined ? message.hostStorage : $root.VnameCert.BizAccountLinkInfo.HostStorageType[message.hostStorage] : message.hostStorage;
                if (options.oneofs)
                    object._hostStorage = "hostStorage";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                object.accountType = options.enums === String ? $root.VnameCert.BizAccountLinkInfo.AccountType[message.accountType] === undefined ? message.accountType : $root.VnameCert.BizAccountLinkInfo.AccountType[message.accountType] : message.accountType;
                if (options.oneofs)
                    object._accountType = "accountType";
            }
            return object;
        };

        /**
         * Converts this BizAccountLinkInfo to JSON.
         * @function toJSON
         * @memberof VnameCert.BizAccountLinkInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizAccountLinkInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BizAccountLinkInfo
         * @function getTypeUrl
         * @memberof VnameCert.BizAccountLinkInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BizAccountLinkInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/VnameCert.BizAccountLinkInfo";
        };

        /**
         * AccountType enum.
         * @name VnameCert.BizAccountLinkInfo.AccountType
         * @enum {number}
         * @property {number} ENTERPRISE=0 ENTERPRISE value
         */
        BizAccountLinkInfo.AccountType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENTERPRISE"] = 0;
            return values;
        })();

        /**
         * HostStorageType enum.
         * @name VnameCert.BizAccountLinkInfo.HostStorageType
         * @enum {number}
         * @property {number} ON_PREMISE=0 ON_PREMISE value
         * @property {number} FACEBOOK=1 FACEBOOK value
         */
        BizAccountLinkInfo.HostStorageType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ON_PREMISE"] = 0;
            values[valuesById[1] = "FACEBOOK"] = 1;
            return values;
        })();

        return BizAccountLinkInfo;
    })();

    VnameCert.BizAccountPayload = (function() {

        /**
         * Properties of a BizAccountPayload.
         * @memberof VnameCert
         * @interface IBizAccountPayload
         * @property {VnameCert.IVerifiedNameCertificate|null} [vnameCert] BizAccountPayload vnameCert
         * @property {Uint8Array|null} [bizAcctLinkInfo] BizAccountPayload bizAcctLinkInfo
         */

        /**
         * Constructs a new BizAccountPayload.
         * @memberof VnameCert
         * @classdesc Represents a BizAccountPayload.
         * @implements IBizAccountPayload
         * @constructor
         * @param {VnameCert.IBizAccountPayload=} [properties] Properties to set
         */
        function BizAccountPayload(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BizAccountPayload vnameCert.
         * @member {VnameCert.IVerifiedNameCertificate|null|undefined} vnameCert
         * @memberof VnameCert.BizAccountPayload
         * @instance
         */
        BizAccountPayload.prototype.vnameCert = null;

        /**
         * BizAccountPayload bizAcctLinkInfo.
         * @member {Uint8Array|null|undefined} bizAcctLinkInfo
         * @memberof VnameCert.BizAccountPayload
         * @instance
         */
        BizAccountPayload.prototype.bizAcctLinkInfo = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountPayload.prototype, "_vnameCert", {
            get: $util.oneOfGetter($oneOfFields = ["vnameCert"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(BizAccountPayload.prototype, "_bizAcctLinkInfo", {
            get: $util.oneOfGetter($oneOfFields = ["bizAcctLinkInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new BizAccountPayload instance using the specified properties.
         * @function create
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.IBizAccountPayload=} [properties] Properties to set
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload instance
         */
        BizAccountPayload.create = function create(properties) {
            return new BizAccountPayload(properties);
        };

        /**
         * Encodes the specified BizAccountPayload message. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.IBizAccountPayload} message BizAccountPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.vnameCert != null && Object.hasOwnProperty.call(message, "vnameCert"))
                $root.VnameCert.VerifiedNameCertificate.encode(message.vnameCert, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.bizAcctLinkInfo != null && Object.hasOwnProperty.call(message, "bizAcctLinkInfo"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.bizAcctLinkInfo);
            return writer;
        };

        /**
         * Encodes the specified BizAccountPayload message, length delimited. Does not implicitly {@link VnameCert.BizAccountPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.IBizAccountPayload} message BizAccountPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BizAccountPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BizAccountPayload message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountPayload.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.BizAccountPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.vnameCert = $root.VnameCert.VerifiedNameCertificate.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.bizAcctLinkInfo = reader.bytes();
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
         * Decodes a BizAccountPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BizAccountPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BizAccountPayload message.
         * @function verify
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BizAccountPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.vnameCert != null && message.hasOwnProperty("vnameCert")) {
                properties._vnameCert = 1;
                {
                    var error = $root.VnameCert.VerifiedNameCertificate.verify(message.vnameCert);
                    if (error)
                        return "vnameCert." + error;
                }
            }
            if (message.bizAcctLinkInfo != null && message.hasOwnProperty("bizAcctLinkInfo")) {
                properties._bizAcctLinkInfo = 1;
                if (!(message.bizAcctLinkInfo && typeof message.bizAcctLinkInfo.length === "number" || $util.isString(message.bizAcctLinkInfo)))
                    return "bizAcctLinkInfo: buffer expected";
            }
            return null;
        };

        /**
         * Creates a BizAccountPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.BizAccountPayload} BizAccountPayload
         */
        BizAccountPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.VnameCert.BizAccountPayload)
                return object;
            var message = new $root.VnameCert.BizAccountPayload();
            if (object.vnameCert != null) {
                if (typeof object.vnameCert !== "object")
                    throw TypeError(".VnameCert.BizAccountPayload.vnameCert: object expected");
                message.vnameCert = $root.VnameCert.VerifiedNameCertificate.fromObject(object.vnameCert);
            }
            if (object.bizAcctLinkInfo != null)
                if (typeof object.bizAcctLinkInfo === "string")
                    $util.base64.decode(object.bizAcctLinkInfo, message.bizAcctLinkInfo = $util.newBuffer($util.base64.length(object.bizAcctLinkInfo)), 0);
                else if (object.bizAcctLinkInfo.length >= 0)
                    message.bizAcctLinkInfo = object.bizAcctLinkInfo;
            return message;
        };

        /**
         * Creates a plain object from a BizAccountPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {VnameCert.BizAccountPayload} message BizAccountPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BizAccountPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.vnameCert != null && message.hasOwnProperty("vnameCert")) {
                object.vnameCert = $root.VnameCert.VerifiedNameCertificate.toObject(message.vnameCert, options);
                if (options.oneofs)
                    object._vnameCert = "vnameCert";
            }
            if (message.bizAcctLinkInfo != null && message.hasOwnProperty("bizAcctLinkInfo")) {
                object.bizAcctLinkInfo = options.bytes === String ? $util.base64.encode(message.bizAcctLinkInfo, 0, message.bizAcctLinkInfo.length) : options.bytes === Array ? Array.prototype.slice.call(message.bizAcctLinkInfo) : message.bizAcctLinkInfo;
                if (options.oneofs)
                    object._bizAcctLinkInfo = "bizAcctLinkInfo";
            }
            return object;
        };

        /**
         * Converts this BizAccountPayload to JSON.
         * @function toJSON
         * @memberof VnameCert.BizAccountPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BizAccountPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for BizAccountPayload
         * @function getTypeUrl
         * @memberof VnameCert.BizAccountPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        BizAccountPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/VnameCert.BizAccountPayload";
        };

        return BizAccountPayload;
    })();

    VnameCert.VerifiedNameCertificate = (function() {

        /**
         * Properties of a VerifiedNameCertificate.
         * @memberof VnameCert
         * @interface IVerifiedNameCertificate
         * @property {Uint8Array|null} [details] VerifiedNameCertificate details
         * @property {Uint8Array|null} [signature] VerifiedNameCertificate signature
         * @property {Uint8Array|null} [serverSignature] VerifiedNameCertificate serverSignature
         */

        /**
         * Constructs a new VerifiedNameCertificate.
         * @memberof VnameCert
         * @classdesc Represents a VerifiedNameCertificate.
         * @implements IVerifiedNameCertificate
         * @constructor
         * @param {VnameCert.IVerifiedNameCertificate=} [properties] Properties to set
         */
        function VerifiedNameCertificate(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VerifiedNameCertificate details.
         * @member {Uint8Array|null|undefined} details
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.details = null;

        /**
         * VerifiedNameCertificate signature.
         * @member {Uint8Array|null|undefined} signature
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.signature = null;

        /**
         * VerifiedNameCertificate serverSignature.
         * @member {Uint8Array|null|undefined} serverSignature
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         */
        VerifiedNameCertificate.prototype.serverSignature = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_details", {
            get: $util.oneOfGetter($oneOfFields = ["details"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_signature", {
            get: $util.oneOfGetter($oneOfFields = ["signature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(VerifiedNameCertificate.prototype, "_serverSignature", {
            get: $util.oneOfGetter($oneOfFields = ["serverSignature"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new VerifiedNameCertificate instance using the specified properties.
         * @function create
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.IVerifiedNameCertificate=} [properties] Properties to set
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate instance
         */
        VerifiedNameCertificate.create = function create(properties) {
            return new VerifiedNameCertificate(properties);
        };

        /**
         * Encodes the specified VerifiedNameCertificate message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.IVerifiedNameCertificate} message VerifiedNameCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifiedNameCertificate.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.details != null && Object.hasOwnProperty.call(message, "details"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.details);
            if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.signature);
            if (message.serverSignature != null && Object.hasOwnProperty.call(message, "serverSignature"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.serverSignature);
            return writer;
        };

        /**
         * Encodes the specified VerifiedNameCertificate message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.IVerifiedNameCertificate} message VerifiedNameCertificate message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VerifiedNameCertificate.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifiedNameCertificate.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.VerifiedNameCertificate();
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
                case 3: {
                        message.serverSignature = reader.bytes();
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
         * Decodes a VerifiedNameCertificate message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VerifiedNameCertificate.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VerifiedNameCertificate message.
         * @function verify
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VerifiedNameCertificate.verify = function verify(message) {
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
            if (message.serverSignature != null && message.hasOwnProperty("serverSignature")) {
                properties._serverSignature = 1;
                if (!(message.serverSignature && typeof message.serverSignature.length === "number" || $util.isString(message.serverSignature)))
                    return "serverSignature: buffer expected";
            }
            return null;
        };

        /**
         * Creates a VerifiedNameCertificate message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.VerifiedNameCertificate} VerifiedNameCertificate
         */
        VerifiedNameCertificate.fromObject = function fromObject(object) {
            if (object instanceof $root.VnameCert.VerifiedNameCertificate)
                return object;
            var message = new $root.VnameCert.VerifiedNameCertificate();
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
            if (object.serverSignature != null)
                if (typeof object.serverSignature === "string")
                    $util.base64.decode(object.serverSignature, message.serverSignature = $util.newBuffer($util.base64.length(object.serverSignature)), 0);
                else if (object.serverSignature.length >= 0)
                    message.serverSignature = object.serverSignature;
            return message;
        };

        /**
         * Creates a plain object from a VerifiedNameCertificate message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {VnameCert.VerifiedNameCertificate} message VerifiedNameCertificate
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VerifiedNameCertificate.toObject = function toObject(message, options) {
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
            if (message.serverSignature != null && message.hasOwnProperty("serverSignature")) {
                object.serverSignature = options.bytes === String ? $util.base64.encode(message.serverSignature, 0, message.serverSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.serverSignature) : message.serverSignature;
                if (options.oneofs)
                    object._serverSignature = "serverSignature";
            }
            return object;
        };

        /**
         * Converts this VerifiedNameCertificate to JSON.
         * @function toJSON
         * @memberof VnameCert.VerifiedNameCertificate
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VerifiedNameCertificate.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for VerifiedNameCertificate
         * @function getTypeUrl
         * @memberof VnameCert.VerifiedNameCertificate
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        VerifiedNameCertificate.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/VnameCert.VerifiedNameCertificate";
        };

        VerifiedNameCertificate.Details = (function() {

            /**
             * Properties of a Details.
             * @memberof VnameCert.VerifiedNameCertificate
             * @interface IDetails
             * @property {number|Long|null} [serial] Details serial
             * @property {string|null} [issuer] Details issuer
             * @property {string|null} [verifiedName] Details verifiedName
             * @property {Array.<VnameCert.ILocalizedName>|null} [localizedNames] Details localizedNames
             * @property {number|Long|null} [issueTime] Details issueTime
             */

            /**
             * Constructs a new Details.
             * @memberof VnameCert.VerifiedNameCertificate
             * @classdesc Represents a Details.
             * @implements IDetails
             * @constructor
             * @param {VnameCert.VerifiedNameCertificate.IDetails=} [properties] Properties to set
             */
            function Details(properties) {
                this.localizedNames = [];
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Details serial.
             * @member {number|Long|null|undefined} serial
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.serial = null;

            /**
             * Details issuer.
             * @member {string|null|undefined} issuer
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.issuer = null;

            /**
             * Details verifiedName.
             * @member {string|null|undefined} verifiedName
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.verifiedName = null;

            /**
             * Details localizedNames.
             * @member {Array.<VnameCert.ILocalizedName>} localizedNames
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.localizedNames = $util.emptyArray;

            /**
             * Details issueTime.
             * @member {number|Long|null|undefined} issueTime
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             */
            Details.prototype.issueTime = null;

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
            Object.defineProperty(Details.prototype, "_verifiedName", {
                get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(Details.prototype, "_issueTime", {
                get: $util.oneOfGetter($oneOfFields = ["issueTime"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new Details instance using the specified properties.
             * @function create
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.IDetails=} [properties] Properties to set
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details instance
             */
            Details.create = function create(properties) {
                return new Details(properties);
            };

            /**
             * Encodes the specified Details message. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @function encode
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.IDetails} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.serial != null && Object.hasOwnProperty.call(message, "serial"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.serial);
                if (message.issuer != null && Object.hasOwnProperty.call(message, "issuer"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.issuer);
                if (message.verifiedName != null && Object.hasOwnProperty.call(message, "verifiedName"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.verifiedName);
                if (message.localizedNames != null && message.localizedNames.length)
                    for (var i = 0; i < message.localizedNames.length; ++i)
                        $root.VnameCert.LocalizedName.encode(message.localizedNames[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                if (message.issueTime != null && Object.hasOwnProperty.call(message, "issueTime"))
                    writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.issueTime);
                return writer;
            };

            /**
             * Encodes the specified Details message, length delimited. Does not implicitly {@link VnameCert.VerifiedNameCertificate.Details.verify|verify} messages.
             * @function encodeDelimited
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.IDetails} message Details message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Details.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Details message from the specified reader or buffer.
             * @function decode
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Details.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.VerifiedNameCertificate.Details();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.serial = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.issuer = reader.string();
                            break;
                        }
                    case 4: {
                            message.verifiedName = reader.string();
                            break;
                        }
                    case 8: {
                            if (!(message.localizedNames && message.localizedNames.length))
                                message.localizedNames = [];
                            message.localizedNames.push($root.VnameCert.LocalizedName.decode(reader, reader.uint32()));
                            break;
                        }
                    case 10: {
                            message.issueTime = reader.uint64();
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
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details
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
             * @memberof VnameCert.VerifiedNameCertificate.Details
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
                    if (!$util.isInteger(message.serial) && !(message.serial && $util.isInteger(message.serial.low) && $util.isInteger(message.serial.high)))
                        return "serial: integer|Long expected";
                }
                if (message.issuer != null && message.hasOwnProperty("issuer")) {
                    properties._issuer = 1;
                    if (!$util.isString(message.issuer))
                        return "issuer: string expected";
                }
                if (message.verifiedName != null && message.hasOwnProperty("verifiedName")) {
                    properties._verifiedName = 1;
                    if (!$util.isString(message.verifiedName))
                        return "verifiedName: string expected";
                }
                if (message.localizedNames != null && message.hasOwnProperty("localizedNames")) {
                    if (!Array.isArray(message.localizedNames))
                        return "localizedNames: array expected";
                    for (var i = 0; i < message.localizedNames.length; ++i) {
                        var error = $root.VnameCert.LocalizedName.verify(message.localizedNames[i]);
                        if (error)
                            return "localizedNames." + error;
                    }
                }
                if (message.issueTime != null && message.hasOwnProperty("issueTime")) {
                    properties._issueTime = 1;
                    if (!$util.isInteger(message.issueTime) && !(message.issueTime && $util.isInteger(message.issueTime.low) && $util.isInteger(message.issueTime.high)))
                        return "issueTime: integer|Long expected";
                }
                return null;
            };

            /**
             * Creates a Details message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {VnameCert.VerifiedNameCertificate.Details} Details
             */
            Details.fromObject = function fromObject(object) {
                if (object instanceof $root.VnameCert.VerifiedNameCertificate.Details)
                    return object;
                var message = new $root.VnameCert.VerifiedNameCertificate.Details();
                if (object.serial != null)
                    if ($util.Long)
                        (message.serial = $util.Long.fromValue(object.serial)).unsigned = true;
                    else if (typeof object.serial === "string")
                        message.serial = parseInt(object.serial, 10);
                    else if (typeof object.serial === "number")
                        message.serial = object.serial;
                    else if (typeof object.serial === "object")
                        message.serial = new $util.LongBits(object.serial.low >>> 0, object.serial.high >>> 0).toNumber(true);
                if (object.issuer != null)
                    message.issuer = String(object.issuer);
                if (object.verifiedName != null)
                    message.verifiedName = String(object.verifiedName);
                if (object.localizedNames) {
                    if (!Array.isArray(object.localizedNames))
                        throw TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: array expected");
                    message.localizedNames = [];
                    for (var i = 0; i < object.localizedNames.length; ++i) {
                        if (typeof object.localizedNames[i] !== "object")
                            throw TypeError(".VnameCert.VerifiedNameCertificate.Details.localizedNames: object expected");
                        message.localizedNames[i] = $root.VnameCert.LocalizedName.fromObject(object.localizedNames[i]);
                    }
                }
                if (object.issueTime != null)
                    if ($util.Long)
                        (message.issueTime = $util.Long.fromValue(object.issueTime)).unsigned = true;
                    else if (typeof object.issueTime === "string")
                        message.issueTime = parseInt(object.issueTime, 10);
                    else if (typeof object.issueTime === "number")
                        message.issueTime = object.issueTime;
                    else if (typeof object.issueTime === "object")
                        message.issueTime = new $util.LongBits(object.issueTime.low >>> 0, object.issueTime.high >>> 0).toNumber(true);
                return message;
            };

            /**
             * Creates a plain object from a Details message. Also converts values to other types if specified.
             * @function toObject
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {VnameCert.VerifiedNameCertificate.Details} message Details
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Details.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (options.arrays || options.defaults)
                    object.localizedNames = [];
                if (message.serial != null && message.hasOwnProperty("serial")) {
                    if (typeof message.serial === "number")
                        object.serial = options.longs === String ? String(message.serial) : message.serial;
                    else
                        object.serial = options.longs === String ? $util.Long.prototype.toString.call(message.serial) : options.longs === Number ? new $util.LongBits(message.serial.low >>> 0, message.serial.high >>> 0).toNumber(true) : message.serial;
                    if (options.oneofs)
                        object._serial = "serial";
                }
                if (message.issuer != null && message.hasOwnProperty("issuer")) {
                    object.issuer = message.issuer;
                    if (options.oneofs)
                        object._issuer = "issuer";
                }
                if (message.verifiedName != null && message.hasOwnProperty("verifiedName")) {
                    object.verifiedName = message.verifiedName;
                    if (options.oneofs)
                        object._verifiedName = "verifiedName";
                }
                if (message.localizedNames && message.localizedNames.length) {
                    object.localizedNames = [];
                    for (var j = 0; j < message.localizedNames.length; ++j)
                        object.localizedNames[j] = $root.VnameCert.LocalizedName.toObject(message.localizedNames[j], options);
                }
                if (message.issueTime != null && message.hasOwnProperty("issueTime")) {
                    if (typeof message.issueTime === "number")
                        object.issueTime = options.longs === String ? String(message.issueTime) : message.issueTime;
                    else
                        object.issueTime = options.longs === String ? $util.Long.prototype.toString.call(message.issueTime) : options.longs === Number ? new $util.LongBits(message.issueTime.low >>> 0, message.issueTime.high >>> 0).toNumber(true) : message.issueTime;
                    if (options.oneofs)
                        object._issueTime = "issueTime";
                }
                return object;
            };

            /**
             * Converts this Details to JSON.
             * @function toJSON
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Details.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for Details
             * @function getTypeUrl
             * @memberof VnameCert.VerifiedNameCertificate.Details
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            Details.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/VnameCert.VerifiedNameCertificate.Details";
            };

            return Details;
        })();

        return VerifiedNameCertificate;
    })();

    VnameCert.LocalizedName = (function() {

        /**
         * Properties of a LocalizedName.
         * @memberof VnameCert
         * @interface ILocalizedName
         * @property {string|null} [lg] LocalizedName lg
         * @property {string|null} [lc] LocalizedName lc
         * @property {string|null} [verifiedName] LocalizedName verifiedName
         */

        /**
         * Constructs a new LocalizedName.
         * @memberof VnameCert
         * @classdesc Represents a LocalizedName.
         * @implements ILocalizedName
         * @constructor
         * @param {VnameCert.ILocalizedName=} [properties] Properties to set
         */
        function LocalizedName(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LocalizedName lg.
         * @member {string|null|undefined} lg
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.lg = null;

        /**
         * LocalizedName lc.
         * @member {string|null|undefined} lc
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.lc = null;

        /**
         * LocalizedName verifiedName.
         * @member {string|null|undefined} verifiedName
         * @memberof VnameCert.LocalizedName
         * @instance
         */
        LocalizedName.prototype.verifiedName = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_lg", {
            get: $util.oneOfGetter($oneOfFields = ["lg"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(LocalizedName.prototype, "_verifiedName", {
            get: $util.oneOfGetter($oneOfFields = ["verifiedName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new LocalizedName instance using the specified properties.
         * @function create
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.ILocalizedName=} [properties] Properties to set
         * @returns {VnameCert.LocalizedName} LocalizedName instance
         */
        LocalizedName.create = function create(properties) {
            return new LocalizedName(properties);
        };

        /**
         * Encodes the specified LocalizedName message. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @function encode
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.ILocalizedName} message LocalizedName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalizedName.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.lg != null && Object.hasOwnProperty.call(message, "lg"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.lg);
            if (message.lc != null && Object.hasOwnProperty.call(message, "lc"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.lc);
            if (message.verifiedName != null && Object.hasOwnProperty.call(message, "verifiedName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.verifiedName);
            return writer;
        };

        /**
         * Encodes the specified LocalizedName message, length delimited. Does not implicitly {@link VnameCert.LocalizedName.verify|verify} messages.
         * @function encodeDelimited
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.ILocalizedName} message LocalizedName message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LocalizedName.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LocalizedName message from the specified reader or buffer.
         * @function decode
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {VnameCert.LocalizedName} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalizedName.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.VnameCert.LocalizedName();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.lg = reader.string();
                        break;
                    }
                case 2: {
                        message.lc = reader.string();
                        break;
                    }
                case 3: {
                        message.verifiedName = reader.string();
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
         * Decodes a LocalizedName message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {VnameCert.LocalizedName} LocalizedName
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LocalizedName.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LocalizedName message.
         * @function verify
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LocalizedName.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.lg != null && message.hasOwnProperty("lg")) {
                properties._lg = 1;
                if (!$util.isString(message.lg))
                    return "lg: string expected";
            }
            if (message.lc != null && message.hasOwnProperty("lc")) {
                properties._lc = 1;
                if (!$util.isString(message.lc))
                    return "lc: string expected";
            }
            if (message.verifiedName != null && message.hasOwnProperty("verifiedName")) {
                properties._verifiedName = 1;
                if (!$util.isString(message.verifiedName))
                    return "verifiedName: string expected";
            }
            return null;
        };

        /**
         * Creates a LocalizedName message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {VnameCert.LocalizedName} LocalizedName
         */
        LocalizedName.fromObject = function fromObject(object) {
            if (object instanceof $root.VnameCert.LocalizedName)
                return object;
            var message = new $root.VnameCert.LocalizedName();
            if (object.lg != null)
                message.lg = String(object.lg);
            if (object.lc != null)
                message.lc = String(object.lc);
            if (object.verifiedName != null)
                message.verifiedName = String(object.verifiedName);
            return message;
        };

        /**
         * Creates a plain object from a LocalizedName message. Also converts values to other types if specified.
         * @function toObject
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {VnameCert.LocalizedName} message LocalizedName
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LocalizedName.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.lg != null && message.hasOwnProperty("lg")) {
                object.lg = message.lg;
                if (options.oneofs)
                    object._lg = "lg";
            }
            if (message.lc != null && message.hasOwnProperty("lc")) {
                object.lc = message.lc;
                if (options.oneofs)
                    object._lc = "lc";
            }
            if (message.verifiedName != null && message.hasOwnProperty("verifiedName")) {
                object.verifiedName = message.verifiedName;
                if (options.oneofs)
                    object._verifiedName = "verifiedName";
            }
            return object;
        };

        /**
         * Converts this LocalizedName to JSON.
         * @function toJSON
         * @memberof VnameCert.LocalizedName
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LocalizedName.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for LocalizedName
         * @function getTypeUrl
         * @memberof VnameCert.LocalizedName
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        LocalizedName.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/VnameCert.LocalizedName";
        };

        return LocalizedName;
    })();

    return VnameCert;
})();

module.exports = $root;
