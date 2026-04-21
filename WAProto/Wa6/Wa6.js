/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Wa6 = (function() {

    /**
     * Namespace Wa6.
     * @exports Wa6
     * @namespace
     */
    var Wa6 = {};

    Wa6.ClientPayload = (function() {

        /**
         * Properties of a ClientPayload.
         * @memberof Wa6
         * @interface IClientPayload
         * @property {number|Long|null} [username] ClientPayload username
         * @property {boolean|null} [passive] ClientPayload passive
         * @property {Wa6.ClientPayload.IUserAgent|null} [userAgent] ClientPayload userAgent
         * @property {Wa6.ClientPayload.IWebInfo|null} [webInfo] ClientPayload webInfo
         * @property {string|null} [pushName] ClientPayload pushName
         * @property {number|null} [sessionId] ClientPayload sessionId
         * @property {boolean|null} [shortConnect] ClientPayload shortConnect
         * @property {Wa6.ClientPayload.ConnectType|null} [connectType] ClientPayload connectType
         * @property {Wa6.ClientPayload.ConnectReason|null} [connectReason] ClientPayload connectReason
         * @property {Array.<number>|null} [shards] ClientPayload shards
         * @property {Wa6.ClientPayload.IDNSSource|null} [dnsSource] ClientPayload dnsSource
         * @property {number|null} [connectAttemptCount] ClientPayload connectAttemptCount
         * @property {number|null} [device] ClientPayload device
         * @property {Wa6.ClientPayload.IDevicePairingRegistrationData|null} [devicePairingData] ClientPayload devicePairingData
         * @property {Wa6.ClientPayload.Product|null} [product] ClientPayload product
         * @property {Uint8Array|null} [fbCat] ClientPayload fbCat
         * @property {Uint8Array|null} [fbUserAgent] ClientPayload fbUserAgent
         * @property {boolean|null} [oc] ClientPayload oc
         * @property {number|null} [lc] ClientPayload lc
         * @property {Wa6.ClientPayload.IOSAppExtension|null} [iosAppExtension] ClientPayload iosAppExtension
         * @property {number|Long|null} [fbAppId] ClientPayload fbAppId
         * @property {Uint8Array|null} [fbDeviceId] ClientPayload fbDeviceId
         * @property {boolean|null} [pull] ClientPayload pull
         * @property {Uint8Array|null} [paddingBytes] ClientPayload paddingBytes
         * @property {number|null} [yearClass] ClientPayload yearClass
         * @property {number|null} [memClass] ClientPayload memClass
         * @property {Wa6.ClientPayload.IInteropData|null} [interopData] ClientPayload interopData
         * @property {Wa6.ClientPayload.TrafficAnonymization|null} [trafficAnonymization] ClientPayload trafficAnonymization
         * @property {boolean|null} [lidDbMigrated] ClientPayload lidDbMigrated
         * @property {Wa6.ClientPayload.AccountType|null} [accountType] ClientPayload accountType
         * @property {number|null} [connectionSequenceInfo] ClientPayload connectionSequenceInfo
         * @property {boolean|null} [paaLink] ClientPayload paaLink
         * @property {number|null} [preacksCount] ClientPayload preacksCount
         * @property {number|null} [processingQueueSize] ClientPayload processingQueueSize
         * @property {Array.<string>|null} [pairedPeripherals] ClientPayload pairedPeripherals
         */

        /**
         * Constructs a new ClientPayload.
         * @memberof Wa6
         * @classdesc Represents a ClientPayload.
         * @implements IClientPayload
         * @constructor
         * @param {Wa6.IClientPayload=} [properties] Properties to set
         */
        function ClientPayload(properties) {
            this.shards = [];
            this.pairedPeripherals = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ClientPayload username.
         * @member {number|Long|null|undefined} username
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.username = null;

        /**
         * ClientPayload passive.
         * @member {boolean|null|undefined} passive
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.passive = null;

        /**
         * ClientPayload userAgent.
         * @member {Wa6.ClientPayload.IUserAgent|null|undefined} userAgent
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.userAgent = null;

        /**
         * ClientPayload webInfo.
         * @member {Wa6.ClientPayload.IWebInfo|null|undefined} webInfo
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.webInfo = null;

        /**
         * ClientPayload pushName.
         * @member {string|null|undefined} pushName
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pushName = null;

        /**
         * ClientPayload sessionId.
         * @member {number|null|undefined} sessionId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.sessionId = null;

        /**
         * ClientPayload shortConnect.
         * @member {boolean|null|undefined} shortConnect
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.shortConnect = null;

        /**
         * ClientPayload connectType.
         * @member {Wa6.ClientPayload.ConnectType|null|undefined} connectType
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectType = null;

        /**
         * ClientPayload connectReason.
         * @member {Wa6.ClientPayload.ConnectReason|null|undefined} connectReason
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectReason = null;

        /**
         * ClientPayload shards.
         * @member {Array.<number>} shards
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.shards = $util.emptyArray;

        /**
         * ClientPayload dnsSource.
         * @member {Wa6.ClientPayload.IDNSSource|null|undefined} dnsSource
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.dnsSource = null;

        /**
         * ClientPayload connectAttemptCount.
         * @member {number|null|undefined} connectAttemptCount
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectAttemptCount = null;

        /**
         * ClientPayload device.
         * @member {number|null|undefined} device
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.device = null;

        /**
         * ClientPayload devicePairingData.
         * @member {Wa6.ClientPayload.IDevicePairingRegistrationData|null|undefined} devicePairingData
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.devicePairingData = null;

        /**
         * ClientPayload product.
         * @member {Wa6.ClientPayload.Product|null|undefined} product
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.product = null;

        /**
         * ClientPayload fbCat.
         * @member {Uint8Array|null|undefined} fbCat
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbCat = null;

        /**
         * ClientPayload fbUserAgent.
         * @member {Uint8Array|null|undefined} fbUserAgent
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbUserAgent = null;

        /**
         * ClientPayload oc.
         * @member {boolean|null|undefined} oc
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.oc = null;

        /**
         * ClientPayload lc.
         * @member {number|null|undefined} lc
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.lc = null;

        /**
         * ClientPayload iosAppExtension.
         * @member {Wa6.ClientPayload.IOSAppExtension|null|undefined} iosAppExtension
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.iosAppExtension = null;

        /**
         * ClientPayload fbAppId.
         * @member {number|Long|null|undefined} fbAppId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbAppId = null;

        /**
         * ClientPayload fbDeviceId.
         * @member {Uint8Array|null|undefined} fbDeviceId
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.fbDeviceId = null;

        /**
         * ClientPayload pull.
         * @member {boolean|null|undefined} pull
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pull = null;

        /**
         * ClientPayload paddingBytes.
         * @member {Uint8Array|null|undefined} paddingBytes
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.paddingBytes = null;

        /**
         * ClientPayload yearClass.
         * @member {number|null|undefined} yearClass
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.yearClass = null;

        /**
         * ClientPayload memClass.
         * @member {number|null|undefined} memClass
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.memClass = null;

        /**
         * ClientPayload interopData.
         * @member {Wa6.ClientPayload.IInteropData|null|undefined} interopData
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.interopData = null;

        /**
         * ClientPayload trafficAnonymization.
         * @member {Wa6.ClientPayload.TrafficAnonymization|null|undefined} trafficAnonymization
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.trafficAnonymization = null;

        /**
         * ClientPayload lidDbMigrated.
         * @member {boolean|null|undefined} lidDbMigrated
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.lidDbMigrated = null;

        /**
         * ClientPayload accountType.
         * @member {Wa6.ClientPayload.AccountType|null|undefined} accountType
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.accountType = null;

        /**
         * ClientPayload connectionSequenceInfo.
         * @member {number|null|undefined} connectionSequenceInfo
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.connectionSequenceInfo = null;

        /**
         * ClientPayload paaLink.
         * @member {boolean|null|undefined} paaLink
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.paaLink = null;

        /**
         * ClientPayload preacksCount.
         * @member {number|null|undefined} preacksCount
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.preacksCount = null;

        /**
         * ClientPayload processingQueueSize.
         * @member {number|null|undefined} processingQueueSize
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.processingQueueSize = null;

        /**
         * ClientPayload pairedPeripherals.
         * @member {Array.<string>} pairedPeripherals
         * @memberof Wa6.ClientPayload
         * @instance
         */
        ClientPayload.prototype.pairedPeripherals = $util.emptyArray;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_username", {
            get: $util.oneOfGetter($oneOfFields = ["username"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_passive", {
            get: $util.oneOfGetter($oneOfFields = ["passive"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_userAgent", {
            get: $util.oneOfGetter($oneOfFields = ["userAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_webInfo", {
            get: $util.oneOfGetter($oneOfFields = ["webInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_pushName", {
            get: $util.oneOfGetter($oneOfFields = ["pushName"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_sessionId", {
            get: $util.oneOfGetter($oneOfFields = ["sessionId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_shortConnect", {
            get: $util.oneOfGetter($oneOfFields = ["shortConnect"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectType", {
            get: $util.oneOfGetter($oneOfFields = ["connectType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectReason", {
            get: $util.oneOfGetter($oneOfFields = ["connectReason"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_dnsSource", {
            get: $util.oneOfGetter($oneOfFields = ["dnsSource"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectAttemptCount", {
            get: $util.oneOfGetter($oneOfFields = ["connectAttemptCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_device", {
            get: $util.oneOfGetter($oneOfFields = ["device"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_devicePairingData", {
            get: $util.oneOfGetter($oneOfFields = ["devicePairingData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_product", {
            get: $util.oneOfGetter($oneOfFields = ["product"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbCat", {
            get: $util.oneOfGetter($oneOfFields = ["fbCat"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbUserAgent", {
            get: $util.oneOfGetter($oneOfFields = ["fbUserAgent"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_oc", {
            get: $util.oneOfGetter($oneOfFields = ["oc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_lc", {
            get: $util.oneOfGetter($oneOfFields = ["lc"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_iosAppExtension", {
            get: $util.oneOfGetter($oneOfFields = ["iosAppExtension"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbAppId", {
            get: $util.oneOfGetter($oneOfFields = ["fbAppId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_fbDeviceId", {
            get: $util.oneOfGetter($oneOfFields = ["fbDeviceId"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_pull", {
            get: $util.oneOfGetter($oneOfFields = ["pull"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_paddingBytes", {
            get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_yearClass", {
            get: $util.oneOfGetter($oneOfFields = ["yearClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_memClass", {
            get: $util.oneOfGetter($oneOfFields = ["memClass"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_interopData", {
            get: $util.oneOfGetter($oneOfFields = ["interopData"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_trafficAnonymization", {
            get: $util.oneOfGetter($oneOfFields = ["trafficAnonymization"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_lidDbMigrated", {
            get: $util.oneOfGetter($oneOfFields = ["lidDbMigrated"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_accountType", {
            get: $util.oneOfGetter($oneOfFields = ["accountType"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_connectionSequenceInfo", {
            get: $util.oneOfGetter($oneOfFields = ["connectionSequenceInfo"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_paaLink", {
            get: $util.oneOfGetter($oneOfFields = ["paaLink"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_preacksCount", {
            get: $util.oneOfGetter($oneOfFields = ["preacksCount"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(ClientPayload.prototype, "_processingQueueSize", {
            get: $util.oneOfGetter($oneOfFields = ["processingQueueSize"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new ClientPayload instance using the specified properties.
         * @function create
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.IClientPayload=} [properties] Properties to set
         * @returns {Wa6.ClientPayload} ClientPayload instance
         */
        ClientPayload.create = function create(properties) {
            return new ClientPayload(properties);
        };

        /**
         * Encodes the specified ClientPayload message. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @function encode
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.IClientPayload} message ClientPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPayload.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.username != null && Object.hasOwnProperty.call(message, "username"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.username);
            if (message.passive != null && Object.hasOwnProperty.call(message, "passive"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.passive);
            if (message.userAgent != null && Object.hasOwnProperty.call(message, "userAgent"))
                $root.Wa6.ClientPayload.UserAgent.encode(message.userAgent, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.webInfo != null && Object.hasOwnProperty.call(message, "webInfo"))
                $root.Wa6.ClientPayload.WebInfo.encode(message.webInfo, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.pushName != null && Object.hasOwnProperty.call(message, "pushName"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.pushName);
            if (message.sessionId != null && Object.hasOwnProperty.call(message, "sessionId"))
                writer.uint32(/* id 9, wireType 5 =*/77).sfixed32(message.sessionId);
            if (message.shortConnect != null && Object.hasOwnProperty.call(message, "shortConnect"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.shortConnect);
            if (message.connectType != null && Object.hasOwnProperty.call(message, "connectType"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.connectType);
            if (message.connectReason != null && Object.hasOwnProperty.call(message, "connectReason"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.connectReason);
            if (message.shards != null && message.shards.length) {
                writer.uint32(/* id 14, wireType 2 =*/114).fork();
                for (var i = 0; i < message.shards.length; ++i)
                    writer.int32(message.shards[i]);
                writer.ldelim();
            }
            if (message.dnsSource != null && Object.hasOwnProperty.call(message, "dnsSource"))
                $root.Wa6.ClientPayload.DNSSource.encode(message.dnsSource, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.connectAttemptCount != null && Object.hasOwnProperty.call(message, "connectAttemptCount"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.connectAttemptCount);
            if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                writer.uint32(/* id 18, wireType 0 =*/144).uint32(message.device);
            if (message.devicePairingData != null && Object.hasOwnProperty.call(message, "devicePairingData"))
                $root.Wa6.ClientPayload.DevicePairingRegistrationData.encode(message.devicePairingData, writer.uint32(/* id 19, wireType 2 =*/154).fork()).ldelim();
            if (message.product != null && Object.hasOwnProperty.call(message, "product"))
                writer.uint32(/* id 20, wireType 0 =*/160).int32(message.product);
            if (message.fbCat != null && Object.hasOwnProperty.call(message, "fbCat"))
                writer.uint32(/* id 21, wireType 2 =*/170).bytes(message.fbCat);
            if (message.fbUserAgent != null && Object.hasOwnProperty.call(message, "fbUserAgent"))
                writer.uint32(/* id 22, wireType 2 =*/178).bytes(message.fbUserAgent);
            if (message.oc != null && Object.hasOwnProperty.call(message, "oc"))
                writer.uint32(/* id 23, wireType 0 =*/184).bool(message.oc);
            if (message.lc != null && Object.hasOwnProperty.call(message, "lc"))
                writer.uint32(/* id 24, wireType 0 =*/192).int32(message.lc);
            if (message.iosAppExtension != null && Object.hasOwnProperty.call(message, "iosAppExtension"))
                writer.uint32(/* id 30, wireType 0 =*/240).int32(message.iosAppExtension);
            if (message.fbAppId != null && Object.hasOwnProperty.call(message, "fbAppId"))
                writer.uint32(/* id 31, wireType 0 =*/248).uint64(message.fbAppId);
            if (message.fbDeviceId != null && Object.hasOwnProperty.call(message, "fbDeviceId"))
                writer.uint32(/* id 32, wireType 2 =*/258).bytes(message.fbDeviceId);
            if (message.pull != null && Object.hasOwnProperty.call(message, "pull"))
                writer.uint32(/* id 33, wireType 0 =*/264).bool(message.pull);
            if (message.paddingBytes != null && Object.hasOwnProperty.call(message, "paddingBytes"))
                writer.uint32(/* id 34, wireType 2 =*/274).bytes(message.paddingBytes);
            if (message.yearClass != null && Object.hasOwnProperty.call(message, "yearClass"))
                writer.uint32(/* id 36, wireType 0 =*/288).int32(message.yearClass);
            if (message.memClass != null && Object.hasOwnProperty.call(message, "memClass"))
                writer.uint32(/* id 37, wireType 0 =*/296).int32(message.memClass);
            if (message.interopData != null && Object.hasOwnProperty.call(message, "interopData"))
                $root.Wa6.ClientPayload.InteropData.encode(message.interopData, writer.uint32(/* id 38, wireType 2 =*/306).fork()).ldelim();
            if (message.trafficAnonymization != null && Object.hasOwnProperty.call(message, "trafficAnonymization"))
                writer.uint32(/* id 40, wireType 0 =*/320).int32(message.trafficAnonymization);
            if (message.lidDbMigrated != null && Object.hasOwnProperty.call(message, "lidDbMigrated"))
                writer.uint32(/* id 41, wireType 0 =*/328).bool(message.lidDbMigrated);
            if (message.accountType != null && Object.hasOwnProperty.call(message, "accountType"))
                writer.uint32(/* id 42, wireType 0 =*/336).int32(message.accountType);
            if (message.connectionSequenceInfo != null && Object.hasOwnProperty.call(message, "connectionSequenceInfo"))
                writer.uint32(/* id 43, wireType 5 =*/349).sfixed32(message.connectionSequenceInfo);
            if (message.paaLink != null && Object.hasOwnProperty.call(message, "paaLink"))
                writer.uint32(/* id 44, wireType 0 =*/352).bool(message.paaLink);
            if (message.preacksCount != null && Object.hasOwnProperty.call(message, "preacksCount"))
                writer.uint32(/* id 45, wireType 0 =*/360).int32(message.preacksCount);
            if (message.processingQueueSize != null && Object.hasOwnProperty.call(message, "processingQueueSize"))
                writer.uint32(/* id 46, wireType 0 =*/368).int32(message.processingQueueSize);
            if (message.pairedPeripherals != null && message.pairedPeripherals.length)
                for (var i = 0; i < message.pairedPeripherals.length; ++i)
                    writer.uint32(/* id 47, wireType 2 =*/378).string(message.pairedPeripherals[i]);
            return writer;
        };

        /**
         * Encodes the specified ClientPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.IClientPayload} message ClientPayload message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ClientPayload.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ClientPayload message from the specified reader or buffer.
         * @function decode
         * @memberof Wa6.ClientPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Wa6.ClientPayload} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPayload.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.username = reader.uint64();
                        break;
                    }
                case 3: {
                        message.passive = reader.bool();
                        break;
                    }
                case 5: {
                        message.userAgent = $root.Wa6.ClientPayload.UserAgent.decode(reader, reader.uint32());
                        break;
                    }
                case 6: {
                        message.webInfo = $root.Wa6.ClientPayload.WebInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 7: {
                        message.pushName = reader.string();
                        break;
                    }
                case 9: {
                        message.sessionId = reader.sfixed32();
                        break;
                    }
                case 10: {
                        message.shortConnect = reader.bool();
                        break;
                    }
                case 12: {
                        message.connectType = reader.int32();
                        break;
                    }
                case 13: {
                        message.connectReason = reader.int32();
                        break;
                    }
                case 14: {
                        if (!(message.shards && message.shards.length))
                            message.shards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.shards.push(reader.int32());
                        } else
                            message.shards.push(reader.int32());
                        break;
                    }
                case 15: {
                        message.dnsSource = $root.Wa6.ClientPayload.DNSSource.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.connectAttemptCount = reader.uint32();
                        break;
                    }
                case 18: {
                        message.device = reader.uint32();
                        break;
                    }
                case 19: {
                        message.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.product = reader.int32();
                        break;
                    }
                case 21: {
                        message.fbCat = reader.bytes();
                        break;
                    }
                case 22: {
                        message.fbUserAgent = reader.bytes();
                        break;
                    }
                case 23: {
                        message.oc = reader.bool();
                        break;
                    }
                case 24: {
                        message.lc = reader.int32();
                        break;
                    }
                case 30: {
                        message.iosAppExtension = reader.int32();
                        break;
                    }
                case 31: {
                        message.fbAppId = reader.uint64();
                        break;
                    }
                case 32: {
                        message.fbDeviceId = reader.bytes();
                        break;
                    }
                case 33: {
                        message.pull = reader.bool();
                        break;
                    }
                case 34: {
                        message.paddingBytes = reader.bytes();
                        break;
                    }
                case 36: {
                        message.yearClass = reader.int32();
                        break;
                    }
                case 37: {
                        message.memClass = reader.int32();
                        break;
                    }
                case 38: {
                        message.interopData = $root.Wa6.ClientPayload.InteropData.decode(reader, reader.uint32());
                        break;
                    }
                case 40: {
                        message.trafficAnonymization = reader.int32();
                        break;
                    }
                case 41: {
                        message.lidDbMigrated = reader.bool();
                        break;
                    }
                case 42: {
                        message.accountType = reader.int32();
                        break;
                    }
                case 43: {
                        message.connectionSequenceInfo = reader.sfixed32();
                        break;
                    }
                case 44: {
                        message.paaLink = reader.bool();
                        break;
                    }
                case 45: {
                        message.preacksCount = reader.int32();
                        break;
                    }
                case 46: {
                        message.processingQueueSize = reader.int32();
                        break;
                    }
                case 47: {
                        if (!(message.pairedPeripherals && message.pairedPeripherals.length))
                            message.pairedPeripherals = [];
                        message.pairedPeripherals.push(reader.string());
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
         * Decodes a ClientPayload message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Wa6.ClientPayload
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Wa6.ClientPayload} ClientPayload
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ClientPayload.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ClientPayload message.
         * @function verify
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ClientPayload.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.username != null && message.hasOwnProperty("username")) {
                properties._username = 1;
                if (!$util.isInteger(message.username) && !(message.username && $util.isInteger(message.username.low) && $util.isInteger(message.username.high)))
                    return "username: integer|Long expected";
            }
            if (message.passive != null && message.hasOwnProperty("passive")) {
                properties._passive = 1;
                if (typeof message.passive !== "boolean")
                    return "passive: boolean expected";
            }
            if (message.userAgent != null && message.hasOwnProperty("userAgent")) {
                properties._userAgent = 1;
                {
                    var error = $root.Wa6.ClientPayload.UserAgent.verify(message.userAgent);
                    if (error)
                        return "userAgent." + error;
                }
            }
            if (message.webInfo != null && message.hasOwnProperty("webInfo")) {
                properties._webInfo = 1;
                {
                    var error = $root.Wa6.ClientPayload.WebInfo.verify(message.webInfo);
                    if (error)
                        return "webInfo." + error;
                }
            }
            if (message.pushName != null && message.hasOwnProperty("pushName")) {
                properties._pushName = 1;
                if (!$util.isString(message.pushName))
                    return "pushName: string expected";
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId")) {
                properties._sessionId = 1;
                if (!$util.isInteger(message.sessionId))
                    return "sessionId: integer expected";
            }
            if (message.shortConnect != null && message.hasOwnProperty("shortConnect")) {
                properties._shortConnect = 1;
                if (typeof message.shortConnect !== "boolean")
                    return "shortConnect: boolean expected";
            }
            if (message.connectType != null && message.hasOwnProperty("connectType")) {
                properties._connectType = 1;
                switch (message.connectType) {
                default:
                    return "connectType: enum value expected";
                case 0:
                case 1:
                case 100:
                case 101:
                case 102:
                case 103:
                case 104:
                case 105:
                case 106:
                case 107:
                case 108:
                case 109:
                case 110:
                case 111:
                case 112:
                    break;
                }
            }
            if (message.connectReason != null && message.hasOwnProperty("connectReason")) {
                properties._connectReason = 1;
                switch (message.connectReason) {
                default:
                    return "connectReason: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                    break;
                }
            }
            if (message.shards != null && message.hasOwnProperty("shards")) {
                if (!Array.isArray(message.shards))
                    return "shards: array expected";
                for (var i = 0; i < message.shards.length; ++i)
                    if (!$util.isInteger(message.shards[i]))
                        return "shards: integer[] expected";
            }
            if (message.dnsSource != null && message.hasOwnProperty("dnsSource")) {
                properties._dnsSource = 1;
                {
                    var error = $root.Wa6.ClientPayload.DNSSource.verify(message.dnsSource);
                    if (error)
                        return "dnsSource." + error;
                }
            }
            if (message.connectAttemptCount != null && message.hasOwnProperty("connectAttemptCount")) {
                properties._connectAttemptCount = 1;
                if (!$util.isInteger(message.connectAttemptCount))
                    return "connectAttemptCount: integer expected";
            }
            if (message.device != null && message.hasOwnProperty("device")) {
                properties._device = 1;
                if (!$util.isInteger(message.device))
                    return "device: integer expected";
            }
            if (message.devicePairingData != null && message.hasOwnProperty("devicePairingData")) {
                properties._devicePairingData = 1;
                {
                    var error = $root.Wa6.ClientPayload.DevicePairingRegistrationData.verify(message.devicePairingData);
                    if (error)
                        return "devicePairingData." + error;
                }
            }
            if (message.product != null && message.hasOwnProperty("product")) {
                properties._product = 1;
                switch (message.product) {
                default:
                    return "product: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                    break;
                }
            }
            if (message.fbCat != null && message.hasOwnProperty("fbCat")) {
                properties._fbCat = 1;
                if (!(message.fbCat && typeof message.fbCat.length === "number" || $util.isString(message.fbCat)))
                    return "fbCat: buffer expected";
            }
            if (message.fbUserAgent != null && message.hasOwnProperty("fbUserAgent")) {
                properties._fbUserAgent = 1;
                if (!(message.fbUserAgent && typeof message.fbUserAgent.length === "number" || $util.isString(message.fbUserAgent)))
                    return "fbUserAgent: buffer expected";
            }
            if (message.oc != null && message.hasOwnProperty("oc")) {
                properties._oc = 1;
                if (typeof message.oc !== "boolean")
                    return "oc: boolean expected";
            }
            if (message.lc != null && message.hasOwnProperty("lc")) {
                properties._lc = 1;
                if (!$util.isInteger(message.lc))
                    return "lc: integer expected";
            }
            if (message.iosAppExtension != null && message.hasOwnProperty("iosAppExtension")) {
                properties._iosAppExtension = 1;
                switch (message.iosAppExtension) {
                default:
                    return "iosAppExtension: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            }
            if (message.fbAppId != null && message.hasOwnProperty("fbAppId")) {
                properties._fbAppId = 1;
                if (!$util.isInteger(message.fbAppId) && !(message.fbAppId && $util.isInteger(message.fbAppId.low) && $util.isInteger(message.fbAppId.high)))
                    return "fbAppId: integer|Long expected";
            }
            if (message.fbDeviceId != null && message.hasOwnProperty("fbDeviceId")) {
                properties._fbDeviceId = 1;
                if (!(message.fbDeviceId && typeof message.fbDeviceId.length === "number" || $util.isString(message.fbDeviceId)))
                    return "fbDeviceId: buffer expected";
            }
            if (message.pull != null && message.hasOwnProperty("pull")) {
                properties._pull = 1;
                if (typeof message.pull !== "boolean")
                    return "pull: boolean expected";
            }
            if (message.paddingBytes != null && message.hasOwnProperty("paddingBytes")) {
                properties._paddingBytes = 1;
                if (!(message.paddingBytes && typeof message.paddingBytes.length === "number" || $util.isString(message.paddingBytes)))
                    return "paddingBytes: buffer expected";
            }
            if (message.yearClass != null && message.hasOwnProperty("yearClass")) {
                properties._yearClass = 1;
                if (!$util.isInteger(message.yearClass))
                    return "yearClass: integer expected";
            }
            if (message.memClass != null && message.hasOwnProperty("memClass")) {
                properties._memClass = 1;
                if (!$util.isInteger(message.memClass))
                    return "memClass: integer expected";
            }
            if (message.interopData != null && message.hasOwnProperty("interopData")) {
                properties._interopData = 1;
                {
                    var error = $root.Wa6.ClientPayload.InteropData.verify(message.interopData);
                    if (error)
                        return "interopData." + error;
                }
            }
            if (message.trafficAnonymization != null && message.hasOwnProperty("trafficAnonymization")) {
                properties._trafficAnonymization = 1;
                switch (message.trafficAnonymization) {
                default:
                    return "trafficAnonymization: enum value expected";
                case 0:
                case 1:
                    break;
                }
            }
            if (message.lidDbMigrated != null && message.hasOwnProperty("lidDbMigrated")) {
                properties._lidDbMigrated = 1;
                if (typeof message.lidDbMigrated !== "boolean")
                    return "lidDbMigrated: boolean expected";
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
            if (message.connectionSequenceInfo != null && message.hasOwnProperty("connectionSequenceInfo")) {
                properties._connectionSequenceInfo = 1;
                if (!$util.isInteger(message.connectionSequenceInfo))
                    return "connectionSequenceInfo: integer expected";
            }
            if (message.paaLink != null && message.hasOwnProperty("paaLink")) {
                properties._paaLink = 1;
                if (typeof message.paaLink !== "boolean")
                    return "paaLink: boolean expected";
            }
            if (message.preacksCount != null && message.hasOwnProperty("preacksCount")) {
                properties._preacksCount = 1;
                if (!$util.isInteger(message.preacksCount))
                    return "preacksCount: integer expected";
            }
            if (message.processingQueueSize != null && message.hasOwnProperty("processingQueueSize")) {
                properties._processingQueueSize = 1;
                if (!$util.isInteger(message.processingQueueSize))
                    return "processingQueueSize: integer expected";
            }
            if (message.pairedPeripherals != null && message.hasOwnProperty("pairedPeripherals")) {
                if (!Array.isArray(message.pairedPeripherals))
                    return "pairedPeripherals: array expected";
                for (var i = 0; i < message.pairedPeripherals.length; ++i)
                    if (!$util.isString(message.pairedPeripherals[i]))
                        return "pairedPeripherals: string[] expected";
            }
            return null;
        };

        /**
         * Creates a ClientPayload message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Wa6.ClientPayload} ClientPayload
         */
        ClientPayload.fromObject = function fromObject(object) {
            if (object instanceof $root.Wa6.ClientPayload)
                return object;
            var message = new $root.Wa6.ClientPayload();
            if (object.username != null)
                if ($util.Long)
                    (message.username = $util.Long.fromValue(object.username)).unsigned = true;
                else if (typeof object.username === "string")
                    message.username = parseInt(object.username, 10);
                else if (typeof object.username === "number")
                    message.username = object.username;
                else if (typeof object.username === "object")
                    message.username = new $util.LongBits(object.username.low >>> 0, object.username.high >>> 0).toNumber(true);
            if (object.passive != null)
                message.passive = Boolean(object.passive);
            if (object.userAgent != null) {
                if (typeof object.userAgent !== "object")
                    throw TypeError(".Wa6.ClientPayload.userAgent: object expected");
                message.userAgent = $root.Wa6.ClientPayload.UserAgent.fromObject(object.userAgent);
            }
            if (object.webInfo != null) {
                if (typeof object.webInfo !== "object")
                    throw TypeError(".Wa6.ClientPayload.webInfo: object expected");
                message.webInfo = $root.Wa6.ClientPayload.WebInfo.fromObject(object.webInfo);
            }
            if (object.pushName != null)
                message.pushName = String(object.pushName);
            if (object.sessionId != null)
                message.sessionId = object.sessionId | 0;
            if (object.shortConnect != null)
                message.shortConnect = Boolean(object.shortConnect);
            switch (object.connectType) {
            default:
                if (typeof object.connectType === "number") {
                    message.connectType = object.connectType;
                    break;
                }
                break;
            case "CELLULAR_UNKNOWN":
            case 0:
                message.connectType = 0;
                break;
            case "WIFI_UNKNOWN":
            case 1:
                message.connectType = 1;
                break;
            case "CELLULAR_EDGE":
            case 100:
                message.connectType = 100;
                break;
            case "CELLULAR_IDEN":
            case 101:
                message.connectType = 101;
                break;
            case "CELLULAR_UMTS":
            case 102:
                message.connectType = 102;
                break;
            case "CELLULAR_EVDO":
            case 103:
                message.connectType = 103;
                break;
            case "CELLULAR_GPRS":
            case 104:
                message.connectType = 104;
                break;
            case "CELLULAR_HSDPA":
            case 105:
                message.connectType = 105;
                break;
            case "CELLULAR_HSUPA":
            case 106:
                message.connectType = 106;
                break;
            case "CELLULAR_HSPA":
            case 107:
                message.connectType = 107;
                break;
            case "CELLULAR_CDMA":
            case 108:
                message.connectType = 108;
                break;
            case "CELLULAR_1XRTT":
            case 109:
                message.connectType = 109;
                break;
            case "CELLULAR_EHRPD":
            case 110:
                message.connectType = 110;
                break;
            case "CELLULAR_LTE":
            case 111:
                message.connectType = 111;
                break;
            case "CELLULAR_HSPAP":
            case 112:
                message.connectType = 112;
                break;
            }
            switch (object.connectReason) {
            default:
                if (typeof object.connectReason === "number") {
                    message.connectReason = object.connectReason;
                    break;
                }
                break;
            case "PUSH":
            case 0:
                message.connectReason = 0;
                break;
            case "USER_ACTIVATED":
            case 1:
                message.connectReason = 1;
                break;
            case "SCHEDULED":
            case 2:
                message.connectReason = 2;
                break;
            case "ERROR_RECONNECT":
            case 3:
                message.connectReason = 3;
                break;
            case "NETWORK_SWITCH":
            case 4:
                message.connectReason = 4;
                break;
            case "PING_RECONNECT":
            case 5:
                message.connectReason = 5;
                break;
            case "UNKNOWN":
            case 6:
                message.connectReason = 6;
                break;
            }
            if (object.shards) {
                if (!Array.isArray(object.shards))
                    throw TypeError(".Wa6.ClientPayload.shards: array expected");
                message.shards = [];
                for (var i = 0; i < object.shards.length; ++i)
                    message.shards[i] = object.shards[i] | 0;
            }
            if (object.dnsSource != null) {
                if (typeof object.dnsSource !== "object")
                    throw TypeError(".Wa6.ClientPayload.dnsSource: object expected");
                message.dnsSource = $root.Wa6.ClientPayload.DNSSource.fromObject(object.dnsSource);
            }
            if (object.connectAttemptCount != null)
                message.connectAttemptCount = object.connectAttemptCount >>> 0;
            if (object.device != null)
                message.device = object.device >>> 0;
            if (object.devicePairingData != null) {
                if (typeof object.devicePairingData !== "object")
                    throw TypeError(".Wa6.ClientPayload.devicePairingData: object expected");
                message.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.fromObject(object.devicePairingData);
            }
            switch (object.product) {
            default:
                if (typeof object.product === "number") {
                    message.product = object.product;
                    break;
                }
                break;
            case "WHATSAPP":
            case 0:
                message.product = 0;
                break;
            case "MESSENGER":
            case 1:
                message.product = 1;
                break;
            case "INTEROP":
            case 2:
                message.product = 2;
                break;
            case "INTEROP_MSGR":
            case 3:
                message.product = 3;
                break;
            case "WHATSAPP_LID":
            case 4:
                message.product = 4;
                break;
            }
            if (object.fbCat != null)
                if (typeof object.fbCat === "string")
                    $util.base64.decode(object.fbCat, message.fbCat = $util.newBuffer($util.base64.length(object.fbCat)), 0);
                else if (object.fbCat.length >= 0)
                    message.fbCat = object.fbCat;
            if (object.fbUserAgent != null)
                if (typeof object.fbUserAgent === "string")
                    $util.base64.decode(object.fbUserAgent, message.fbUserAgent = $util.newBuffer($util.base64.length(object.fbUserAgent)), 0);
                else if (object.fbUserAgent.length >= 0)
                    message.fbUserAgent = object.fbUserAgent;
            if (object.oc != null)
                message.oc = Boolean(object.oc);
            if (object.lc != null)
                message.lc = object.lc | 0;
            switch (object.iosAppExtension) {
            default:
                if (typeof object.iosAppExtension === "number") {
                    message.iosAppExtension = object.iosAppExtension;
                    break;
                }
                break;
            case "SHARE_EXTENSION":
            case 0:
                message.iosAppExtension = 0;
                break;
            case "SERVICE_EXTENSION":
            case 1:
                message.iosAppExtension = 1;
                break;
            case "INTENTS_EXTENSION":
            case 2:
                message.iosAppExtension = 2;
                break;
            }
            if (object.fbAppId != null)
                if ($util.Long)
                    (message.fbAppId = $util.Long.fromValue(object.fbAppId)).unsigned = true;
                else if (typeof object.fbAppId === "string")
                    message.fbAppId = parseInt(object.fbAppId, 10);
                else if (typeof object.fbAppId === "number")
                    message.fbAppId = object.fbAppId;
                else if (typeof object.fbAppId === "object")
                    message.fbAppId = new $util.LongBits(object.fbAppId.low >>> 0, object.fbAppId.high >>> 0).toNumber(true);
            if (object.fbDeviceId != null)
                if (typeof object.fbDeviceId === "string")
                    $util.base64.decode(object.fbDeviceId, message.fbDeviceId = $util.newBuffer($util.base64.length(object.fbDeviceId)), 0);
                else if (object.fbDeviceId.length >= 0)
                    message.fbDeviceId = object.fbDeviceId;
            if (object.pull != null)
                message.pull = Boolean(object.pull);
            if (object.paddingBytes != null)
                if (typeof object.paddingBytes === "string")
                    $util.base64.decode(object.paddingBytes, message.paddingBytes = $util.newBuffer($util.base64.length(object.paddingBytes)), 0);
                else if (object.paddingBytes.length >= 0)
                    message.paddingBytes = object.paddingBytes;
            if (object.yearClass != null)
                message.yearClass = object.yearClass | 0;
            if (object.memClass != null)
                message.memClass = object.memClass | 0;
            if (object.interopData != null) {
                if (typeof object.interopData !== "object")
                    throw TypeError(".Wa6.ClientPayload.interopData: object expected");
                message.interopData = $root.Wa6.ClientPayload.InteropData.fromObject(object.interopData);
            }
            switch (object.trafficAnonymization) {
            default:
                if (typeof object.trafficAnonymization === "number") {
                    message.trafficAnonymization = object.trafficAnonymization;
                    break;
                }
                break;
            case "OFF":
            case 0:
                message.trafficAnonymization = 0;
                break;
            case "STANDARD":
            case 1:
                message.trafficAnonymization = 1;
                break;
            }
            if (object.lidDbMigrated != null)
                message.lidDbMigrated = Boolean(object.lidDbMigrated);
            switch (object.accountType) {
            default:
                if (typeof object.accountType === "number") {
                    message.accountType = object.accountType;
                    break;
                }
                break;
            case "DEFAULT":
            case 0:
                message.accountType = 0;
                break;
            case "GUEST":
            case 1:
                message.accountType = 1;
                break;
            }
            if (object.connectionSequenceInfo != null)
                message.connectionSequenceInfo = object.connectionSequenceInfo | 0;
            if (object.paaLink != null)
                message.paaLink = Boolean(object.paaLink);
            if (object.preacksCount != null)
                message.preacksCount = object.preacksCount | 0;
            if (object.processingQueueSize != null)
                message.processingQueueSize = object.processingQueueSize | 0;
            if (object.pairedPeripherals) {
                if (!Array.isArray(object.pairedPeripherals))
                    throw TypeError(".Wa6.ClientPayload.pairedPeripherals: array expected");
                message.pairedPeripherals = [];
                for (var i = 0; i < object.pairedPeripherals.length; ++i)
                    message.pairedPeripherals[i] = String(object.pairedPeripherals[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a ClientPayload message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Wa6.ClientPayload
         * @static
         * @param {Wa6.ClientPayload} message ClientPayload
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ClientPayload.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.shards = [];
                object.pairedPeripherals = [];
            }
            if (message.username != null && message.hasOwnProperty("username")) {
                if (typeof message.username === "number")
                    object.username = options.longs === String ? String(message.username) : message.username;
                else
                    object.username = options.longs === String ? $util.Long.prototype.toString.call(message.username) : options.longs === Number ? new $util.LongBits(message.username.low >>> 0, message.username.high >>> 0).toNumber(true) : message.username;
                if (options.oneofs)
                    object._username = "username";
            }
            if (message.passive != null && message.hasOwnProperty("passive")) {
                object.passive = message.passive;
                if (options.oneofs)
                    object._passive = "passive";
            }
            if (message.userAgent != null && message.hasOwnProperty("userAgent")) {
                object.userAgent = $root.Wa6.ClientPayload.UserAgent.toObject(message.userAgent, options);
                if (options.oneofs)
                    object._userAgent = "userAgent";
            }
            if (message.webInfo != null && message.hasOwnProperty("webInfo")) {
                object.webInfo = $root.Wa6.ClientPayload.WebInfo.toObject(message.webInfo, options);
                if (options.oneofs)
                    object._webInfo = "webInfo";
            }
            if (message.pushName != null && message.hasOwnProperty("pushName")) {
                object.pushName = message.pushName;
                if (options.oneofs)
                    object._pushName = "pushName";
            }
            if (message.sessionId != null && message.hasOwnProperty("sessionId")) {
                object.sessionId = message.sessionId;
                if (options.oneofs)
                    object._sessionId = "sessionId";
            }
            if (message.shortConnect != null && message.hasOwnProperty("shortConnect")) {
                object.shortConnect = message.shortConnect;
                if (options.oneofs)
                    object._shortConnect = "shortConnect";
            }
            if (message.connectType != null && message.hasOwnProperty("connectType")) {
                object.connectType = options.enums === String ? $root.Wa6.ClientPayload.ConnectType[message.connectType] === undefined ? message.connectType : $root.Wa6.ClientPayload.ConnectType[message.connectType] : message.connectType;
                if (options.oneofs)
                    object._connectType = "connectType";
            }
            if (message.connectReason != null && message.hasOwnProperty("connectReason")) {
                object.connectReason = options.enums === String ? $root.Wa6.ClientPayload.ConnectReason[message.connectReason] === undefined ? message.connectReason : $root.Wa6.ClientPayload.ConnectReason[message.connectReason] : message.connectReason;
                if (options.oneofs)
                    object._connectReason = "connectReason";
            }
            if (message.shards && message.shards.length) {
                object.shards = [];
                for (var j = 0; j < message.shards.length; ++j)
                    object.shards[j] = message.shards[j];
            }
            if (message.dnsSource != null && message.hasOwnProperty("dnsSource")) {
                object.dnsSource = $root.Wa6.ClientPayload.DNSSource.toObject(message.dnsSource, options);
                if (options.oneofs)
                    object._dnsSource = "dnsSource";
            }
            if (message.connectAttemptCount != null && message.hasOwnProperty("connectAttemptCount")) {
                object.connectAttemptCount = message.connectAttemptCount;
                if (options.oneofs)
                    object._connectAttemptCount = "connectAttemptCount";
            }
            if (message.device != null && message.hasOwnProperty("device")) {
                object.device = message.device;
                if (options.oneofs)
                    object._device = "device";
            }
            if (message.devicePairingData != null && message.hasOwnProperty("devicePairingData")) {
                object.devicePairingData = $root.Wa6.ClientPayload.DevicePairingRegistrationData.toObject(message.devicePairingData, options);
                if (options.oneofs)
                    object._devicePairingData = "devicePairingData";
            }
            if (message.product != null && message.hasOwnProperty("product")) {
                object.product = options.enums === String ? $root.Wa6.ClientPayload.Product[message.product] === undefined ? message.product : $root.Wa6.ClientPayload.Product[message.product] : message.product;
                if (options.oneofs)
                    object._product = "product";
            }
            if (message.fbCat != null && message.hasOwnProperty("fbCat")) {
                object.fbCat = options.bytes === String ? $util.base64.encode(message.fbCat, 0, message.fbCat.length) : options.bytes === Array ? Array.prototype.slice.call(message.fbCat) : message.fbCat;
                if (options.oneofs)
                    object._fbCat = "fbCat";
            }
            if (message.fbUserAgent != null && message.hasOwnProperty("fbUserAgent")) {
                object.fbUserAgent = options.bytes === String ? $util.base64.encode(message.fbUserAgent, 0, message.fbUserAgent.length) : options.bytes === Array ? Array.prototype.slice.call(message.fbUserAgent) : message.fbUserAgent;
                if (options.oneofs)
                    object._fbUserAgent = "fbUserAgent";
            }
            if (message.oc != null && message.hasOwnProperty("oc")) {
                object.oc = message.oc;
                if (options.oneofs)
                    object._oc = "oc";
            }
            if (message.lc != null && message.hasOwnProperty("lc")) {
                object.lc = message.lc;
                if (options.oneofs)
                    object._lc = "lc";
            }
            if (message.iosAppExtension != null && message.hasOwnProperty("iosAppExtension")) {
                object.iosAppExtension = options.enums === String ? $root.Wa6.ClientPayload.IOSAppExtension[message.iosAppExtension] === undefined ? message.iosAppExtension : $root.Wa6.ClientPayload.IOSAppExtension[message.iosAppExtension] : message.iosAppExtension;
                if (options.oneofs)
                    object._iosAppExtension = "iosAppExtension";
            }
            if (message.fbAppId != null && message.hasOwnProperty("fbAppId")) {
                if (typeof message.fbAppId === "number")
                    object.fbAppId = options.longs === String ? String(message.fbAppId) : message.fbAppId;
                else
                    object.fbAppId = options.longs === String ? $util.Long.prototype.toString.call(message.fbAppId) : options.longs === Number ? new $util.LongBits(message.fbAppId.low >>> 0, message.fbAppId.high >>> 0).toNumber(true) : message.fbAppId;
                if (options.oneofs)
                    object._fbAppId = "fbAppId";
            }
            if (message.fbDeviceId != null && message.hasOwnProperty("fbDeviceId")) {
                object.fbDeviceId = options.bytes === String ? $util.base64.encode(message.fbDeviceId, 0, message.fbDeviceId.length) : options.bytes === Array ? Array.prototype.slice.call(message.fbDeviceId) : message.fbDeviceId;
                if (options.oneofs)
                    object._fbDeviceId = "fbDeviceId";
            }
            if (message.pull != null && message.hasOwnProperty("pull")) {
                object.pull = message.pull;
                if (options.oneofs)
                    object._pull = "pull";
            }
            if (message.paddingBytes != null && message.hasOwnProperty("paddingBytes")) {
                object.paddingBytes = options.bytes === String ? $util.base64.encode(message.paddingBytes, 0, message.paddingBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.paddingBytes) : message.paddingBytes;
                if (options.oneofs)
                    object._paddingBytes = "paddingBytes";
            }
            if (message.yearClass != null && message.hasOwnProperty("yearClass")) {
                object.yearClass = message.yearClass;
                if (options.oneofs)
                    object._yearClass = "yearClass";
            }
            if (message.memClass != null && message.hasOwnProperty("memClass")) {
                object.memClass = message.memClass;
                if (options.oneofs)
                    object._memClass = "memClass";
            }
            if (message.interopData != null && message.hasOwnProperty("interopData")) {
                object.interopData = $root.Wa6.ClientPayload.InteropData.toObject(message.interopData, options);
                if (options.oneofs)
                    object._interopData = "interopData";
            }
            if (message.trafficAnonymization != null && message.hasOwnProperty("trafficAnonymization")) {
                object.trafficAnonymization = options.enums === String ? $root.Wa6.ClientPayload.TrafficAnonymization[message.trafficAnonymization] === undefined ? message.trafficAnonymization : $root.Wa6.ClientPayload.TrafficAnonymization[message.trafficAnonymization] : message.trafficAnonymization;
                if (options.oneofs)
                    object._trafficAnonymization = "trafficAnonymization";
            }
            if (message.lidDbMigrated != null && message.hasOwnProperty("lidDbMigrated")) {
                object.lidDbMigrated = message.lidDbMigrated;
                if (options.oneofs)
                    object._lidDbMigrated = "lidDbMigrated";
            }
            if (message.accountType != null && message.hasOwnProperty("accountType")) {
                object.accountType = options.enums === String ? $root.Wa6.ClientPayload.AccountType[message.accountType] === undefined ? message.accountType : $root.Wa6.ClientPayload.AccountType[message.accountType] : message.accountType;
                if (options.oneofs)
                    object._accountType = "accountType";
            }
            if (message.connectionSequenceInfo != null && message.hasOwnProperty("connectionSequenceInfo")) {
                object.connectionSequenceInfo = message.connectionSequenceInfo;
                if (options.oneofs)
                    object._connectionSequenceInfo = "connectionSequenceInfo";
            }
            if (message.paaLink != null && message.hasOwnProperty("paaLink")) {
                object.paaLink = message.paaLink;
                if (options.oneofs)
                    object._paaLink = "paaLink";
            }
            if (message.preacksCount != null && message.hasOwnProperty("preacksCount")) {
                object.preacksCount = message.preacksCount;
                if (options.oneofs)
                    object._preacksCount = "preacksCount";
            }
            if (message.processingQueueSize != null && message.hasOwnProperty("processingQueueSize")) {
                object.processingQueueSize = message.processingQueueSize;
                if (options.oneofs)
                    object._processingQueueSize = "processingQueueSize";
            }
            if (message.pairedPeripherals && message.pairedPeripherals.length) {
                object.pairedPeripherals = [];
                for (var j = 0; j < message.pairedPeripherals.length; ++j)
                    object.pairedPeripherals[j] = message.pairedPeripherals[j];
            }
            return object;
        };

        /**
         * Converts this ClientPayload to JSON.
         * @function toJSON
         * @memberof Wa6.ClientPayload
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ClientPayload.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for ClientPayload
         * @function getTypeUrl
         * @memberof Wa6.ClientPayload
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        ClientPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Wa6.ClientPayload";
        };

        /**
         * AccountType enum.
         * @name Wa6.ClientPayload.AccountType
         * @enum {number}
         * @property {number} DEFAULT=0 DEFAULT value
         * @property {number} GUEST=1 GUEST value
         */
        ClientPayload.AccountType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "DEFAULT"] = 0;
            values[valuesById[1] = "GUEST"] = 1;
            return values;
        })();

        /**
         * ConnectReason enum.
         * @name Wa6.ClientPayload.ConnectReason
         * @enum {number}
         * @property {number} PUSH=0 PUSH value
         * @property {number} USER_ACTIVATED=1 USER_ACTIVATED value
         * @property {number} SCHEDULED=2 SCHEDULED value
         * @property {number} ERROR_RECONNECT=3 ERROR_RECONNECT value
         * @property {number} NETWORK_SWITCH=4 NETWORK_SWITCH value
         * @property {number} PING_RECONNECT=5 PING_RECONNECT value
         * @property {number} UNKNOWN=6 UNKNOWN value
         */
        ClientPayload.ConnectReason = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "PUSH"] = 0;
            values[valuesById[1] = "USER_ACTIVATED"] = 1;
            values[valuesById[2] = "SCHEDULED"] = 2;
            values[valuesById[3] = "ERROR_RECONNECT"] = 3;
            values[valuesById[4] = "NETWORK_SWITCH"] = 4;
            values[valuesById[5] = "PING_RECONNECT"] = 5;
            values[valuesById[6] = "UNKNOWN"] = 6;
            return values;
        })();

        /**
         * ConnectType enum.
         * @name Wa6.ClientPayload.ConnectType
         * @enum {number}
         * @property {number} CELLULAR_UNKNOWN=0 CELLULAR_UNKNOWN value
         * @property {number} WIFI_UNKNOWN=1 WIFI_UNKNOWN value
         * @property {number} CELLULAR_EDGE=100 CELLULAR_EDGE value
         * @property {number} CELLULAR_IDEN=101 CELLULAR_IDEN value
         * @property {number} CELLULAR_UMTS=102 CELLULAR_UMTS value
         * @property {number} CELLULAR_EVDO=103 CELLULAR_EVDO value
         * @property {number} CELLULAR_GPRS=104 CELLULAR_GPRS value
         * @property {number} CELLULAR_HSDPA=105 CELLULAR_HSDPA value
         * @property {number} CELLULAR_HSUPA=106 CELLULAR_HSUPA value
         * @property {number} CELLULAR_HSPA=107 CELLULAR_HSPA value
         * @property {number} CELLULAR_CDMA=108 CELLULAR_CDMA value
         * @property {number} CELLULAR_1XRTT=109 CELLULAR_1XRTT value
         * @property {number} CELLULAR_EHRPD=110 CELLULAR_EHRPD value
         * @property {number} CELLULAR_LTE=111 CELLULAR_LTE value
         * @property {number} CELLULAR_HSPAP=112 CELLULAR_HSPAP value
         */
        ClientPayload.ConnectType = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "CELLULAR_UNKNOWN"] = 0;
            values[valuesById[1] = "WIFI_UNKNOWN"] = 1;
            values[valuesById[100] = "CELLULAR_EDGE"] = 100;
            values[valuesById[101] = "CELLULAR_IDEN"] = 101;
            values[valuesById[102] = "CELLULAR_UMTS"] = 102;
            values[valuesById[103] = "CELLULAR_EVDO"] = 103;
            values[valuesById[104] = "CELLULAR_GPRS"] = 104;
            values[valuesById[105] = "CELLULAR_HSDPA"] = 105;
            values[valuesById[106] = "CELLULAR_HSUPA"] = 106;
            values[valuesById[107] = "CELLULAR_HSPA"] = 107;
            values[valuesById[108] = "CELLULAR_CDMA"] = 108;
            values[valuesById[109] = "CELLULAR_1XRTT"] = 109;
            values[valuesById[110] = "CELLULAR_EHRPD"] = 110;
            values[valuesById[111] = "CELLULAR_LTE"] = 111;
            values[valuesById[112] = "CELLULAR_HSPAP"] = 112;
            return values;
        })();

        ClientPayload.DNSSource = (function() {

            /**
             * Properties of a DNSSource.
             * @memberof Wa6.ClientPayload
             * @interface IDNSSource
             * @property {Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null} [dnsMethod] DNSSource dnsMethod
             * @property {boolean|null} [appCached] DNSSource appCached
             */

            /**
             * Constructs a new DNSSource.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a DNSSource.
             * @implements IDNSSource
             * @constructor
             * @param {Wa6.ClientPayload.IDNSSource=} [properties] Properties to set
             */
            function DNSSource(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DNSSource dnsMethod.
             * @member {Wa6.ClientPayload.DNSSource.DNSResolutionMethod|null|undefined} dnsMethod
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             */
            DNSSource.prototype.dnsMethod = null;

            /**
             * DNSSource appCached.
             * @member {boolean|null|undefined} appCached
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             */
            DNSSource.prototype.appCached = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DNSSource.prototype, "_dnsMethod", {
                get: $util.oneOfGetter($oneOfFields = ["dnsMethod"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DNSSource.prototype, "_appCached", {
                get: $util.oneOfGetter($oneOfFields = ["appCached"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new DNSSource instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.IDNSSource=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource instance
             */
            DNSSource.create = function create(properties) {
                return new DNSSource(properties);
            };

            /**
             * Encodes the specified DNSSource message. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.IDNSSource} message DNSSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DNSSource.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.dnsMethod != null && Object.hasOwnProperty.call(message, "dnsMethod"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.dnsMethod);
                if (message.appCached != null && Object.hasOwnProperty.call(message, "appCached"))
                    writer.uint32(/* id 16, wireType 0 =*/128).bool(message.appCached);
                return writer;
            };

            /**
             * Encodes the specified DNSSource message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DNSSource.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.IDNSSource} message DNSSource message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DNSSource.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DNSSource message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DNSSource.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.DNSSource();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 15: {
                            message.dnsMethod = reader.int32();
                            break;
                        }
                    case 16: {
                            message.appCached = reader.bool();
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
             * Decodes a DNSSource message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DNSSource.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DNSSource message.
             * @function verify
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DNSSource.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.dnsMethod != null && message.hasOwnProperty("dnsMethod")) {
                    properties._dnsMethod = 1;
                    switch (message.dnsMethod) {
                    default:
                        return "dnsMethod: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                        break;
                    }
                }
                if (message.appCached != null && message.hasOwnProperty("appCached")) {
                    properties._appCached = 1;
                    if (typeof message.appCached !== "boolean")
                        return "appCached: boolean expected";
                }
                return null;
            };

            /**
             * Creates a DNSSource message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.DNSSource} DNSSource
             */
            DNSSource.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.ClientPayload.DNSSource)
                    return object;
                var message = new $root.Wa6.ClientPayload.DNSSource();
                switch (object.dnsMethod) {
                default:
                    if (typeof object.dnsMethod === "number") {
                        message.dnsMethod = object.dnsMethod;
                        break;
                    }
                    break;
                case "SYSTEM":
                case 0:
                    message.dnsMethod = 0;
                    break;
                case "GOOGLE":
                case 1:
                    message.dnsMethod = 1;
                    break;
                case "HARDCODED":
                case 2:
                    message.dnsMethod = 2;
                    break;
                case "OVERRIDE":
                case 3:
                    message.dnsMethod = 3;
                    break;
                case "FALLBACK":
                case 4:
                    message.dnsMethod = 4;
                    break;
                case "MNS":
                case 5:
                    message.dnsMethod = 5;
                    break;
                case "MNS_SECONDARY":
                case 6:
                    message.dnsMethod = 6;
                    break;
                case "SOCKS_PROXY":
                case 7:
                    message.dnsMethod = 7;
                    break;
                }
                if (object.appCached != null)
                    message.appCached = Boolean(object.appCached);
                return message;
            };

            /**
             * Creates a plain object from a DNSSource message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {Wa6.ClientPayload.DNSSource} message DNSSource
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DNSSource.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.dnsMethod != null && message.hasOwnProperty("dnsMethod")) {
                    object.dnsMethod = options.enums === String ? $root.Wa6.ClientPayload.DNSSource.DNSResolutionMethod[message.dnsMethod] === undefined ? message.dnsMethod : $root.Wa6.ClientPayload.DNSSource.DNSResolutionMethod[message.dnsMethod] : message.dnsMethod;
                    if (options.oneofs)
                        object._dnsMethod = "dnsMethod";
                }
                if (message.appCached != null && message.hasOwnProperty("appCached")) {
                    object.appCached = message.appCached;
                    if (options.oneofs)
                        object._appCached = "appCached";
                }
                return object;
            };

            /**
             * Converts this DNSSource to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.DNSSource
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DNSSource.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DNSSource
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.DNSSource
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DNSSource.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.ClientPayload.DNSSource";
            };

            /**
             * DNSResolutionMethod enum.
             * @name Wa6.ClientPayload.DNSSource.DNSResolutionMethod
             * @enum {number}
             * @property {number} SYSTEM=0 SYSTEM value
             * @property {number} GOOGLE=1 GOOGLE value
             * @property {number} HARDCODED=2 HARDCODED value
             * @property {number} OVERRIDE=3 OVERRIDE value
             * @property {number} FALLBACK=4 FALLBACK value
             * @property {number} MNS=5 MNS value
             * @property {number} MNS_SECONDARY=6 MNS_SECONDARY value
             * @property {number} SOCKS_PROXY=7 SOCKS_PROXY value
             */
            DNSSource.DNSResolutionMethod = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "SYSTEM"] = 0;
                values[valuesById[1] = "GOOGLE"] = 1;
                values[valuesById[2] = "HARDCODED"] = 2;
                values[valuesById[3] = "OVERRIDE"] = 3;
                values[valuesById[4] = "FALLBACK"] = 4;
                values[valuesById[5] = "MNS"] = 5;
                values[valuesById[6] = "MNS_SECONDARY"] = 6;
                values[valuesById[7] = "SOCKS_PROXY"] = 7;
                return values;
            })();

            return DNSSource;
        })();

        ClientPayload.DevicePairingRegistrationData = (function() {

            /**
             * Properties of a DevicePairingRegistrationData.
             * @memberof Wa6.ClientPayload
             * @interface IDevicePairingRegistrationData
             * @property {Uint8Array|null} [eRegid] DevicePairingRegistrationData eRegid
             * @property {Uint8Array|null} [eKeytype] DevicePairingRegistrationData eKeytype
             * @property {Uint8Array|null} [eIdent] DevicePairingRegistrationData eIdent
             * @property {Uint8Array|null} [eSkeyId] DevicePairingRegistrationData eSkeyId
             * @property {Uint8Array|null} [eSkeyVal] DevicePairingRegistrationData eSkeyVal
             * @property {Uint8Array|null} [eSkeySig] DevicePairingRegistrationData eSkeySig
             * @property {Uint8Array|null} [buildHash] DevicePairingRegistrationData buildHash
             * @property {Uint8Array|null} [deviceProps] DevicePairingRegistrationData deviceProps
             */

            /**
             * Constructs a new DevicePairingRegistrationData.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a DevicePairingRegistrationData.
             * @implements IDevicePairingRegistrationData
             * @constructor
             * @param {Wa6.ClientPayload.IDevicePairingRegistrationData=} [properties] Properties to set
             */
            function DevicePairingRegistrationData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * DevicePairingRegistrationData eRegid.
             * @member {Uint8Array|null|undefined} eRegid
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eRegid = null;

            /**
             * DevicePairingRegistrationData eKeytype.
             * @member {Uint8Array|null|undefined} eKeytype
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eKeytype = null;

            /**
             * DevicePairingRegistrationData eIdent.
             * @member {Uint8Array|null|undefined} eIdent
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eIdent = null;

            /**
             * DevicePairingRegistrationData eSkeyId.
             * @member {Uint8Array|null|undefined} eSkeyId
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeyId = null;

            /**
             * DevicePairingRegistrationData eSkeyVal.
             * @member {Uint8Array|null|undefined} eSkeyVal
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeyVal = null;

            /**
             * DevicePairingRegistrationData eSkeySig.
             * @member {Uint8Array|null|undefined} eSkeySig
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.eSkeySig = null;

            /**
             * DevicePairingRegistrationData buildHash.
             * @member {Uint8Array|null|undefined} buildHash
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.buildHash = null;

            /**
             * DevicePairingRegistrationData deviceProps.
             * @member {Uint8Array|null|undefined} deviceProps
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             */
            DevicePairingRegistrationData.prototype.deviceProps = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eRegid", {
                get: $util.oneOfGetter($oneOfFields = ["eRegid"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eKeytype", {
                get: $util.oneOfGetter($oneOfFields = ["eKeytype"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eIdent", {
                get: $util.oneOfGetter($oneOfFields = ["eIdent"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyId", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeyVal", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeyVal"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_eSkeySig", {
                get: $util.oneOfGetter($oneOfFields = ["eSkeySig"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_buildHash", {
                get: $util.oneOfGetter($oneOfFields = ["buildHash"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(DevicePairingRegistrationData.prototype, "_deviceProps", {
                get: $util.oneOfGetter($oneOfFields = ["deviceProps"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new DevicePairingRegistrationData instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.IDevicePairingRegistrationData=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData instance
             */
            DevicePairingRegistrationData.create = function create(properties) {
                return new DevicePairingRegistrationData(properties);
            };

            /**
             * Encodes the specified DevicePairingRegistrationData message. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.IDevicePairingRegistrationData} message DevicePairingRegistrationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DevicePairingRegistrationData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.eRegid != null && Object.hasOwnProperty.call(message, "eRegid"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.eRegid);
                if (message.eKeytype != null && Object.hasOwnProperty.call(message, "eKeytype"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.eKeytype);
                if (message.eIdent != null && Object.hasOwnProperty.call(message, "eIdent"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.eIdent);
                if (message.eSkeyId != null && Object.hasOwnProperty.call(message, "eSkeyId"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.eSkeyId);
                if (message.eSkeyVal != null && Object.hasOwnProperty.call(message, "eSkeyVal"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.eSkeyVal);
                if (message.eSkeySig != null && Object.hasOwnProperty.call(message, "eSkeySig"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.eSkeySig);
                if (message.buildHash != null && Object.hasOwnProperty.call(message, "buildHash"))
                    writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.buildHash);
                if (message.deviceProps != null && Object.hasOwnProperty.call(message, "deviceProps"))
                    writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.deviceProps);
                return writer;
            };

            /**
             * Encodes the specified DevicePairingRegistrationData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.DevicePairingRegistrationData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.IDevicePairingRegistrationData} message DevicePairingRegistrationData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            DevicePairingRegistrationData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DevicePairingRegistrationData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.DevicePairingRegistrationData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.eRegid = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.eKeytype = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.eIdent = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.eSkeyId = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.eSkeyVal = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.eSkeySig = reader.bytes();
                            break;
                        }
                    case 7: {
                            message.buildHash = reader.bytes();
                            break;
                        }
                    case 8: {
                            message.deviceProps = reader.bytes();
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
             * Decodes a DevicePairingRegistrationData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            DevicePairingRegistrationData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a DevicePairingRegistrationData message.
             * @function verify
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            DevicePairingRegistrationData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.eRegid != null && message.hasOwnProperty("eRegid")) {
                    properties._eRegid = 1;
                    if (!(message.eRegid && typeof message.eRegid.length === "number" || $util.isString(message.eRegid)))
                        return "eRegid: buffer expected";
                }
                if (message.eKeytype != null && message.hasOwnProperty("eKeytype")) {
                    properties._eKeytype = 1;
                    if (!(message.eKeytype && typeof message.eKeytype.length === "number" || $util.isString(message.eKeytype)))
                        return "eKeytype: buffer expected";
                }
                if (message.eIdent != null && message.hasOwnProperty("eIdent")) {
                    properties._eIdent = 1;
                    if (!(message.eIdent && typeof message.eIdent.length === "number" || $util.isString(message.eIdent)))
                        return "eIdent: buffer expected";
                }
                if (message.eSkeyId != null && message.hasOwnProperty("eSkeyId")) {
                    properties._eSkeyId = 1;
                    if (!(message.eSkeyId && typeof message.eSkeyId.length === "number" || $util.isString(message.eSkeyId)))
                        return "eSkeyId: buffer expected";
                }
                if (message.eSkeyVal != null && message.hasOwnProperty("eSkeyVal")) {
                    properties._eSkeyVal = 1;
                    if (!(message.eSkeyVal && typeof message.eSkeyVal.length === "number" || $util.isString(message.eSkeyVal)))
                        return "eSkeyVal: buffer expected";
                }
                if (message.eSkeySig != null && message.hasOwnProperty("eSkeySig")) {
                    properties._eSkeySig = 1;
                    if (!(message.eSkeySig && typeof message.eSkeySig.length === "number" || $util.isString(message.eSkeySig)))
                        return "eSkeySig: buffer expected";
                }
                if (message.buildHash != null && message.hasOwnProperty("buildHash")) {
                    properties._buildHash = 1;
                    if (!(message.buildHash && typeof message.buildHash.length === "number" || $util.isString(message.buildHash)))
                        return "buildHash: buffer expected";
                }
                if (message.deviceProps != null && message.hasOwnProperty("deviceProps")) {
                    properties._deviceProps = 1;
                    if (!(message.deviceProps && typeof message.deviceProps.length === "number" || $util.isString(message.deviceProps)))
                        return "deviceProps: buffer expected";
                }
                return null;
            };

            /**
             * Creates a DevicePairingRegistrationData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.DevicePairingRegistrationData} DevicePairingRegistrationData
             */
            DevicePairingRegistrationData.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.ClientPayload.DevicePairingRegistrationData)
                    return object;
                var message = new $root.Wa6.ClientPayload.DevicePairingRegistrationData();
                if (object.eRegid != null)
                    if (typeof object.eRegid === "string")
                        $util.base64.decode(object.eRegid, message.eRegid = $util.newBuffer($util.base64.length(object.eRegid)), 0);
                    else if (object.eRegid.length >= 0)
                        message.eRegid = object.eRegid;
                if (object.eKeytype != null)
                    if (typeof object.eKeytype === "string")
                        $util.base64.decode(object.eKeytype, message.eKeytype = $util.newBuffer($util.base64.length(object.eKeytype)), 0);
                    else if (object.eKeytype.length >= 0)
                        message.eKeytype = object.eKeytype;
                if (object.eIdent != null)
                    if (typeof object.eIdent === "string")
                        $util.base64.decode(object.eIdent, message.eIdent = $util.newBuffer($util.base64.length(object.eIdent)), 0);
                    else if (object.eIdent.length >= 0)
                        message.eIdent = object.eIdent;
                if (object.eSkeyId != null)
                    if (typeof object.eSkeyId === "string")
                        $util.base64.decode(object.eSkeyId, message.eSkeyId = $util.newBuffer($util.base64.length(object.eSkeyId)), 0);
                    else if (object.eSkeyId.length >= 0)
                        message.eSkeyId = object.eSkeyId;
                if (object.eSkeyVal != null)
                    if (typeof object.eSkeyVal === "string")
                        $util.base64.decode(object.eSkeyVal, message.eSkeyVal = $util.newBuffer($util.base64.length(object.eSkeyVal)), 0);
                    else if (object.eSkeyVal.length >= 0)
                        message.eSkeyVal = object.eSkeyVal;
                if (object.eSkeySig != null)
                    if (typeof object.eSkeySig === "string")
                        $util.base64.decode(object.eSkeySig, message.eSkeySig = $util.newBuffer($util.base64.length(object.eSkeySig)), 0);
                    else if (object.eSkeySig.length >= 0)
                        message.eSkeySig = object.eSkeySig;
                if (object.buildHash != null)
                    if (typeof object.buildHash === "string")
                        $util.base64.decode(object.buildHash, message.buildHash = $util.newBuffer($util.base64.length(object.buildHash)), 0);
                    else if (object.buildHash.length >= 0)
                        message.buildHash = object.buildHash;
                if (object.deviceProps != null)
                    if (typeof object.deviceProps === "string")
                        $util.base64.decode(object.deviceProps, message.deviceProps = $util.newBuffer($util.base64.length(object.deviceProps)), 0);
                    else if (object.deviceProps.length >= 0)
                        message.deviceProps = object.deviceProps;
                return message;
            };

            /**
             * Creates a plain object from a DevicePairingRegistrationData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {Wa6.ClientPayload.DevicePairingRegistrationData} message DevicePairingRegistrationData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            DevicePairingRegistrationData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.eRegid != null && message.hasOwnProperty("eRegid")) {
                    object.eRegid = options.bytes === String ? $util.base64.encode(message.eRegid, 0, message.eRegid.length) : options.bytes === Array ? Array.prototype.slice.call(message.eRegid) : message.eRegid;
                    if (options.oneofs)
                        object._eRegid = "eRegid";
                }
                if (message.eKeytype != null && message.hasOwnProperty("eKeytype")) {
                    object.eKeytype = options.bytes === String ? $util.base64.encode(message.eKeytype, 0, message.eKeytype.length) : options.bytes === Array ? Array.prototype.slice.call(message.eKeytype) : message.eKeytype;
                    if (options.oneofs)
                        object._eKeytype = "eKeytype";
                }
                if (message.eIdent != null && message.hasOwnProperty("eIdent")) {
                    object.eIdent = options.bytes === String ? $util.base64.encode(message.eIdent, 0, message.eIdent.length) : options.bytes === Array ? Array.prototype.slice.call(message.eIdent) : message.eIdent;
                    if (options.oneofs)
                        object._eIdent = "eIdent";
                }
                if (message.eSkeyId != null && message.hasOwnProperty("eSkeyId")) {
                    object.eSkeyId = options.bytes === String ? $util.base64.encode(message.eSkeyId, 0, message.eSkeyId.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeyId) : message.eSkeyId;
                    if (options.oneofs)
                        object._eSkeyId = "eSkeyId";
                }
                if (message.eSkeyVal != null && message.hasOwnProperty("eSkeyVal")) {
                    object.eSkeyVal = options.bytes === String ? $util.base64.encode(message.eSkeyVal, 0, message.eSkeyVal.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeyVal) : message.eSkeyVal;
                    if (options.oneofs)
                        object._eSkeyVal = "eSkeyVal";
                }
                if (message.eSkeySig != null && message.hasOwnProperty("eSkeySig")) {
                    object.eSkeySig = options.bytes === String ? $util.base64.encode(message.eSkeySig, 0, message.eSkeySig.length) : options.bytes === Array ? Array.prototype.slice.call(message.eSkeySig) : message.eSkeySig;
                    if (options.oneofs)
                        object._eSkeySig = "eSkeySig";
                }
                if (message.buildHash != null && message.hasOwnProperty("buildHash")) {
                    object.buildHash = options.bytes === String ? $util.base64.encode(message.buildHash, 0, message.buildHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.buildHash) : message.buildHash;
                    if (options.oneofs)
                        object._buildHash = "buildHash";
                }
                if (message.deviceProps != null && message.hasOwnProperty("deviceProps")) {
                    object.deviceProps = options.bytes === String ? $util.base64.encode(message.deviceProps, 0, message.deviceProps.length) : options.bytes === Array ? Array.prototype.slice.call(message.deviceProps) : message.deviceProps;
                    if (options.oneofs)
                        object._deviceProps = "deviceProps";
                }
                return object;
            };

            /**
             * Converts this DevicePairingRegistrationData to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            DevicePairingRegistrationData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for DevicePairingRegistrationData
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.DevicePairingRegistrationData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            DevicePairingRegistrationData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.ClientPayload.DevicePairingRegistrationData";
            };

            return DevicePairingRegistrationData;
        })();

        /**
         * IOSAppExtension enum.
         * @name Wa6.ClientPayload.IOSAppExtension
         * @enum {number}
         * @property {number} SHARE_EXTENSION=0 SHARE_EXTENSION value
         * @property {number} SERVICE_EXTENSION=1 SERVICE_EXTENSION value
         * @property {number} INTENTS_EXTENSION=2 INTENTS_EXTENSION value
         */
        ClientPayload.IOSAppExtension = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SHARE_EXTENSION"] = 0;
            values[valuesById[1] = "SERVICE_EXTENSION"] = 1;
            values[valuesById[2] = "INTENTS_EXTENSION"] = 2;
            return values;
        })();

        ClientPayload.InteropData = (function() {

            /**
             * Properties of an InteropData.
             * @memberof Wa6.ClientPayload
             * @interface IInteropData
             * @property {number|Long|null} [accountId] InteropData accountId
             * @property {Uint8Array|null} [token] InteropData token
             * @property {boolean|null} [enableReadReceipts] InteropData enableReadReceipts
             */

            /**
             * Constructs a new InteropData.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents an InteropData.
             * @implements IInteropData
             * @constructor
             * @param {Wa6.ClientPayload.IInteropData=} [properties] Properties to set
             */
            function InteropData(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * InteropData accountId.
             * @member {number|Long|null|undefined} accountId
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.accountId = null;

            /**
             * InteropData token.
             * @member {Uint8Array|null|undefined} token
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.token = null;

            /**
             * InteropData enableReadReceipts.
             * @member {boolean|null|undefined} enableReadReceipts
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             */
            InteropData.prototype.enableReadReceipts = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_accountId", {
                get: $util.oneOfGetter($oneOfFields = ["accountId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_token", {
                get: $util.oneOfGetter($oneOfFields = ["token"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(InteropData.prototype, "_enableReadReceipts", {
                get: $util.oneOfGetter($oneOfFields = ["enableReadReceipts"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new InteropData instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.IInteropData=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.InteropData} InteropData instance
             */
            InteropData.create = function create(properties) {
                return new InteropData(properties);
            };

            /**
             * Encodes the specified InteropData message. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.IInteropData} message InteropData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteropData.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.accountId != null && Object.hasOwnProperty.call(message, "accountId"))
                    writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.accountId);
                if (message.token != null && Object.hasOwnProperty.call(message, "token"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.token);
                if (message.enableReadReceipts != null && Object.hasOwnProperty.call(message, "enableReadReceipts"))
                    writer.uint32(/* id 3, wireType 0 =*/24).bool(message.enableReadReceipts);
                return writer;
            };

            /**
             * Encodes the specified InteropData message, length delimited. Does not implicitly {@link Wa6.ClientPayload.InteropData.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.IInteropData} message InteropData message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            InteropData.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes an InteropData message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.InteropData} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteropData.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.InteropData();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.accountId = reader.uint64();
                            break;
                        }
                    case 2: {
                            message.token = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.enableReadReceipts = reader.bool();
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
             * Decodes an InteropData message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.InteropData} InteropData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            InteropData.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies an InteropData message.
             * @function verify
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            InteropData.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.accountId != null && message.hasOwnProperty("accountId")) {
                    properties._accountId = 1;
                    if (!$util.isInteger(message.accountId) && !(message.accountId && $util.isInteger(message.accountId.low) && $util.isInteger(message.accountId.high)))
                        return "accountId: integer|Long expected";
                }
                if (message.token != null && message.hasOwnProperty("token")) {
                    properties._token = 1;
                    if (!(message.token && typeof message.token.length === "number" || $util.isString(message.token)))
                        return "token: buffer expected";
                }
                if (message.enableReadReceipts != null && message.hasOwnProperty("enableReadReceipts")) {
                    properties._enableReadReceipts = 1;
                    if (typeof message.enableReadReceipts !== "boolean")
                        return "enableReadReceipts: boolean expected";
                }
                return null;
            };

            /**
             * Creates an InteropData message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.InteropData} InteropData
             */
            InteropData.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.ClientPayload.InteropData)
                    return object;
                var message = new $root.Wa6.ClientPayload.InteropData();
                if (object.accountId != null)
                    if ($util.Long)
                        (message.accountId = $util.Long.fromValue(object.accountId)).unsigned = true;
                    else if (typeof object.accountId === "string")
                        message.accountId = parseInt(object.accountId, 10);
                    else if (typeof object.accountId === "number")
                        message.accountId = object.accountId;
                    else if (typeof object.accountId === "object")
                        message.accountId = new $util.LongBits(object.accountId.low >>> 0, object.accountId.high >>> 0).toNumber(true);
                if (object.token != null)
                    if (typeof object.token === "string")
                        $util.base64.decode(object.token, message.token = $util.newBuffer($util.base64.length(object.token)), 0);
                    else if (object.token.length >= 0)
                        message.token = object.token;
                if (object.enableReadReceipts != null)
                    message.enableReadReceipts = Boolean(object.enableReadReceipts);
                return message;
            };

            /**
             * Creates a plain object from an InteropData message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {Wa6.ClientPayload.InteropData} message InteropData
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            InteropData.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.accountId != null && message.hasOwnProperty("accountId")) {
                    if (typeof message.accountId === "number")
                        object.accountId = options.longs === String ? String(message.accountId) : message.accountId;
                    else
                        object.accountId = options.longs === String ? $util.Long.prototype.toString.call(message.accountId) : options.longs === Number ? new $util.LongBits(message.accountId.low >>> 0, message.accountId.high >>> 0).toNumber(true) : message.accountId;
                    if (options.oneofs)
                        object._accountId = "accountId";
                }
                if (message.token != null && message.hasOwnProperty("token")) {
                    object.token = options.bytes === String ? $util.base64.encode(message.token, 0, message.token.length) : options.bytes === Array ? Array.prototype.slice.call(message.token) : message.token;
                    if (options.oneofs)
                        object._token = "token";
                }
                if (message.enableReadReceipts != null && message.hasOwnProperty("enableReadReceipts")) {
                    object.enableReadReceipts = message.enableReadReceipts;
                    if (options.oneofs)
                        object._enableReadReceipts = "enableReadReceipts";
                }
                return object;
            };

            /**
             * Converts this InteropData to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.InteropData
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            InteropData.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for InteropData
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.InteropData
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            InteropData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.ClientPayload.InteropData";
            };

            return InteropData;
        })();

        /**
         * Product enum.
         * @name Wa6.ClientPayload.Product
         * @enum {number}
         * @property {number} WHATSAPP=0 WHATSAPP value
         * @property {number} MESSENGER=1 MESSENGER value
         * @property {number} INTEROP=2 INTEROP value
         * @property {number} INTEROP_MSGR=3 INTEROP_MSGR value
         * @property {number} WHATSAPP_LID=4 WHATSAPP_LID value
         */
        ClientPayload.Product = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "WHATSAPP"] = 0;
            values[valuesById[1] = "MESSENGER"] = 1;
            values[valuesById[2] = "INTEROP"] = 2;
            values[valuesById[3] = "INTEROP_MSGR"] = 3;
            values[valuesById[4] = "WHATSAPP_LID"] = 4;
            return values;
        })();

        /**
         * TrafficAnonymization enum.
         * @name Wa6.ClientPayload.TrafficAnonymization
         * @enum {number}
         * @property {number} OFF=0 OFF value
         * @property {number} STANDARD=1 STANDARD value
         */
        ClientPayload.TrafficAnonymization = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "OFF"] = 0;
            values[valuesById[1] = "STANDARD"] = 1;
            return values;
        })();

        ClientPayload.UserAgent = (function() {

            /**
             * Properties of a UserAgent.
             * @memberof Wa6.ClientPayload
             * @interface IUserAgent
             * @property {Wa6.ClientPayload.UserAgent.Platform|null} [platform] UserAgent platform
             * @property {Wa6.ClientPayload.UserAgent.IAppVersion|null} [appVersion] UserAgent appVersion
             * @property {string|null} [mcc] UserAgent mcc
             * @property {string|null} [mnc] UserAgent mnc
             * @property {string|null} [osVersion] UserAgent osVersion
             * @property {string|null} [manufacturer] UserAgent manufacturer
             * @property {string|null} [device] UserAgent device
             * @property {string|null} [osBuildNumber] UserAgent osBuildNumber
             * @property {string|null} [phoneId] UserAgent phoneId
             * @property {Wa6.ClientPayload.UserAgent.ReleaseChannel|null} [releaseChannel] UserAgent releaseChannel
             * @property {string|null} [localeLanguageIso6391] UserAgent localeLanguageIso6391
             * @property {string|null} [localeCountryIso31661Alpha2] UserAgent localeCountryIso31661Alpha2
             * @property {string|null} [deviceBoard] UserAgent deviceBoard
             * @property {string|null} [deviceExpId] UserAgent deviceExpId
             * @property {Wa6.ClientPayload.UserAgent.DeviceType|null} [deviceType] UserAgent deviceType
             * @property {string|null} [deviceModelType] UserAgent deviceModelType
             */

            /**
             * Constructs a new UserAgent.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a UserAgent.
             * @implements IUserAgent
             * @constructor
             * @param {Wa6.ClientPayload.IUserAgent=} [properties] Properties to set
             */
            function UserAgent(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * UserAgent platform.
             * @member {Wa6.ClientPayload.UserAgent.Platform|null|undefined} platform
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.platform = null;

            /**
             * UserAgent appVersion.
             * @member {Wa6.ClientPayload.UserAgent.IAppVersion|null|undefined} appVersion
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.appVersion = null;

            /**
             * UserAgent mcc.
             * @member {string|null|undefined} mcc
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.mcc = null;

            /**
             * UserAgent mnc.
             * @member {string|null|undefined} mnc
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.mnc = null;

            /**
             * UserAgent osVersion.
             * @member {string|null|undefined} osVersion
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.osVersion = null;

            /**
             * UserAgent manufacturer.
             * @member {string|null|undefined} manufacturer
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.manufacturer = null;

            /**
             * UserAgent device.
             * @member {string|null|undefined} device
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.device = null;

            /**
             * UserAgent osBuildNumber.
             * @member {string|null|undefined} osBuildNumber
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.osBuildNumber = null;

            /**
             * UserAgent phoneId.
             * @member {string|null|undefined} phoneId
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.phoneId = null;

            /**
             * UserAgent releaseChannel.
             * @member {Wa6.ClientPayload.UserAgent.ReleaseChannel|null|undefined} releaseChannel
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.releaseChannel = null;

            /**
             * UserAgent localeLanguageIso6391.
             * @member {string|null|undefined} localeLanguageIso6391
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.localeLanguageIso6391 = null;

            /**
             * UserAgent localeCountryIso31661Alpha2.
             * @member {string|null|undefined} localeCountryIso31661Alpha2
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.localeCountryIso31661Alpha2 = null;

            /**
             * UserAgent deviceBoard.
             * @member {string|null|undefined} deviceBoard
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceBoard = null;

            /**
             * UserAgent deviceExpId.
             * @member {string|null|undefined} deviceExpId
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceExpId = null;

            /**
             * UserAgent deviceType.
             * @member {Wa6.ClientPayload.UserAgent.DeviceType|null|undefined} deviceType
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceType = null;

            /**
             * UserAgent deviceModelType.
             * @member {string|null|undefined} deviceModelType
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             */
            UserAgent.prototype.deviceModelType = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_platform", {
                get: $util.oneOfGetter($oneOfFields = ["platform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_appVersion", {
                get: $util.oneOfGetter($oneOfFields = ["appVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_mcc", {
                get: $util.oneOfGetter($oneOfFields = ["mcc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_mnc", {
                get: $util.oneOfGetter($oneOfFields = ["mnc"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_osVersion", {
                get: $util.oneOfGetter($oneOfFields = ["osVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_manufacturer", {
                get: $util.oneOfGetter($oneOfFields = ["manufacturer"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_device", {
                get: $util.oneOfGetter($oneOfFields = ["device"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_osBuildNumber", {
                get: $util.oneOfGetter($oneOfFields = ["osBuildNumber"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_phoneId", {
                get: $util.oneOfGetter($oneOfFields = ["phoneId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_releaseChannel", {
                get: $util.oneOfGetter($oneOfFields = ["releaseChannel"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_localeLanguageIso6391", {
                get: $util.oneOfGetter($oneOfFields = ["localeLanguageIso6391"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_localeCountryIso31661Alpha2", {
                get: $util.oneOfGetter($oneOfFields = ["localeCountryIso31661Alpha2"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceBoard", {
                get: $util.oneOfGetter($oneOfFields = ["deviceBoard"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceExpId", {
                get: $util.oneOfGetter($oneOfFields = ["deviceExpId"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(UserAgent.prototype, "_deviceModelType", {
                get: $util.oneOfGetter($oneOfFields = ["deviceModelType"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new UserAgent instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.IUserAgent=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent instance
             */
            UserAgent.create = function create(properties) {
                return new UserAgent(properties);
            };

            /**
             * Encodes the specified UserAgent message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.IUserAgent} message UserAgent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAgent.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.platform != null && Object.hasOwnProperty.call(message, "platform"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int32(message.platform);
                if (message.appVersion != null && Object.hasOwnProperty.call(message, "appVersion"))
                    $root.Wa6.ClientPayload.UserAgent.AppVersion.encode(message.appVersion, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                if (message.mcc != null && Object.hasOwnProperty.call(message, "mcc"))
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.mcc);
                if (message.mnc != null && Object.hasOwnProperty.call(message, "mnc"))
                    writer.uint32(/* id 4, wireType 2 =*/34).string(message.mnc);
                if (message.osVersion != null && Object.hasOwnProperty.call(message, "osVersion"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.osVersion);
                if (message.manufacturer != null && Object.hasOwnProperty.call(message, "manufacturer"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.manufacturer);
                if (message.device != null && Object.hasOwnProperty.call(message, "device"))
                    writer.uint32(/* id 7, wireType 2 =*/58).string(message.device);
                if (message.osBuildNumber != null && Object.hasOwnProperty.call(message, "osBuildNumber"))
                    writer.uint32(/* id 8, wireType 2 =*/66).string(message.osBuildNumber);
                if (message.phoneId != null && Object.hasOwnProperty.call(message, "phoneId"))
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.phoneId);
                if (message.releaseChannel != null && Object.hasOwnProperty.call(message, "releaseChannel"))
                    writer.uint32(/* id 10, wireType 0 =*/80).int32(message.releaseChannel);
                if (message.localeLanguageIso6391 != null && Object.hasOwnProperty.call(message, "localeLanguageIso6391"))
                    writer.uint32(/* id 11, wireType 2 =*/90).string(message.localeLanguageIso6391);
                if (message.localeCountryIso31661Alpha2 != null && Object.hasOwnProperty.call(message, "localeCountryIso31661Alpha2"))
                    writer.uint32(/* id 12, wireType 2 =*/98).string(message.localeCountryIso31661Alpha2);
                if (message.deviceBoard != null && Object.hasOwnProperty.call(message, "deviceBoard"))
                    writer.uint32(/* id 13, wireType 2 =*/106).string(message.deviceBoard);
                if (message.deviceExpId != null && Object.hasOwnProperty.call(message, "deviceExpId"))
                    writer.uint32(/* id 14, wireType 2 =*/114).string(message.deviceExpId);
                if (message.deviceType != null && Object.hasOwnProperty.call(message, "deviceType"))
                    writer.uint32(/* id 15, wireType 0 =*/120).int32(message.deviceType);
                if (message.deviceModelType != null && Object.hasOwnProperty.call(message, "deviceModelType"))
                    writer.uint32(/* id 16, wireType 2 =*/130).string(message.deviceModelType);
                return writer;
            };

            /**
             * Encodes the specified UserAgent message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.IUserAgent} message UserAgent message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            UserAgent.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a UserAgent message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAgent.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.UserAgent();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.platform = reader.int32();
                            break;
                        }
                    case 2: {
                            message.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.decode(reader, reader.uint32());
                            break;
                        }
                    case 3: {
                            message.mcc = reader.string();
                            break;
                        }
                    case 4: {
                            message.mnc = reader.string();
                            break;
                        }
                    case 5: {
                            message.osVersion = reader.string();
                            break;
                        }
                    case 6: {
                            message.manufacturer = reader.string();
                            break;
                        }
                    case 7: {
                            message.device = reader.string();
                            break;
                        }
                    case 8: {
                            message.osBuildNumber = reader.string();
                            break;
                        }
                    case 9: {
                            message.phoneId = reader.string();
                            break;
                        }
                    case 10: {
                            message.releaseChannel = reader.int32();
                            break;
                        }
                    case 11: {
                            message.localeLanguageIso6391 = reader.string();
                            break;
                        }
                    case 12: {
                            message.localeCountryIso31661Alpha2 = reader.string();
                            break;
                        }
                    case 13: {
                            message.deviceBoard = reader.string();
                            break;
                        }
                    case 14: {
                            message.deviceExpId = reader.string();
                            break;
                        }
                    case 15: {
                            message.deviceType = reader.int32();
                            break;
                        }
                    case 16: {
                            message.deviceModelType = reader.string();
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
             * Decodes a UserAgent message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            UserAgent.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a UserAgent message.
             * @function verify
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            UserAgent.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.platform != null && message.hasOwnProperty("platform")) {
                    properties._platform = 1;
                    switch (message.platform) {
                    default:
                        return "platform: enum value expected";
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
                    case 12:
                    case 13:
                    case 14:
                    case 15:
                    case 16:
                    case 17:
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 23:
                    case 24:
                    case 25:
                    case 26:
                    case 27:
                    case 28:
                    case 29:
                    case 30:
                    case 31:
                    case 32:
                    case 33:
                    case 34:
                    case 35:
                    case 36:
                    case 37:
                        break;
                    }
                }
                if (message.appVersion != null && message.hasOwnProperty("appVersion")) {
                    properties._appVersion = 1;
                    {
                        var error = $root.Wa6.ClientPayload.UserAgent.AppVersion.verify(message.appVersion);
                        if (error)
                            return "appVersion." + error;
                    }
                }
                if (message.mcc != null && message.hasOwnProperty("mcc")) {
                    properties._mcc = 1;
                    if (!$util.isString(message.mcc))
                        return "mcc: string expected";
                }
                if (message.mnc != null && message.hasOwnProperty("mnc")) {
                    properties._mnc = 1;
                    if (!$util.isString(message.mnc))
                        return "mnc: string expected";
                }
                if (message.osVersion != null && message.hasOwnProperty("osVersion")) {
                    properties._osVersion = 1;
                    if (!$util.isString(message.osVersion))
                        return "osVersion: string expected";
                }
                if (message.manufacturer != null && message.hasOwnProperty("manufacturer")) {
                    properties._manufacturer = 1;
                    if (!$util.isString(message.manufacturer))
                        return "manufacturer: string expected";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    properties._device = 1;
                    if (!$util.isString(message.device))
                        return "device: string expected";
                }
                if (message.osBuildNumber != null && message.hasOwnProperty("osBuildNumber")) {
                    properties._osBuildNumber = 1;
                    if (!$util.isString(message.osBuildNumber))
                        return "osBuildNumber: string expected";
                }
                if (message.phoneId != null && message.hasOwnProperty("phoneId")) {
                    properties._phoneId = 1;
                    if (!$util.isString(message.phoneId))
                        return "phoneId: string expected";
                }
                if (message.releaseChannel != null && message.hasOwnProperty("releaseChannel")) {
                    properties._releaseChannel = 1;
                    switch (message.releaseChannel) {
                    default:
                        return "releaseChannel: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                        break;
                    }
                }
                if (message.localeLanguageIso6391 != null && message.hasOwnProperty("localeLanguageIso6391")) {
                    properties._localeLanguageIso6391 = 1;
                    if (!$util.isString(message.localeLanguageIso6391))
                        return "localeLanguageIso6391: string expected";
                }
                if (message.localeCountryIso31661Alpha2 != null && message.hasOwnProperty("localeCountryIso31661Alpha2")) {
                    properties._localeCountryIso31661Alpha2 = 1;
                    if (!$util.isString(message.localeCountryIso31661Alpha2))
                        return "localeCountryIso31661Alpha2: string expected";
                }
                if (message.deviceBoard != null && message.hasOwnProperty("deviceBoard")) {
                    properties._deviceBoard = 1;
                    if (!$util.isString(message.deviceBoard))
                        return "deviceBoard: string expected";
                }
                if (message.deviceExpId != null && message.hasOwnProperty("deviceExpId")) {
                    properties._deviceExpId = 1;
                    if (!$util.isString(message.deviceExpId))
                        return "deviceExpId: string expected";
                }
                if (message.deviceType != null && message.hasOwnProperty("deviceType")) {
                    properties._deviceType = 1;
                    switch (message.deviceType) {
                    default:
                        return "deviceType: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                        break;
                    }
                }
                if (message.deviceModelType != null && message.hasOwnProperty("deviceModelType")) {
                    properties._deviceModelType = 1;
                    if (!$util.isString(message.deviceModelType))
                        return "deviceModelType: string expected";
                }
                return null;
            };

            /**
             * Creates a UserAgent message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.UserAgent} UserAgent
             */
            UserAgent.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.ClientPayload.UserAgent)
                    return object;
                var message = new $root.Wa6.ClientPayload.UserAgent();
                switch (object.platform) {
                default:
                    if (typeof object.platform === "number") {
                        message.platform = object.platform;
                        break;
                    }
                    break;
                case "ANDROID":
                case 0:
                    message.platform = 0;
                    break;
                case "IOS":
                case 1:
                    message.platform = 1;
                    break;
                case "WINDOWS_PHONE":
                case 2:
                    message.platform = 2;
                    break;
                case "BLACKBERRY":
                case 3:
                    message.platform = 3;
                    break;
                case "BLACKBERRYX":
                case 4:
                    message.platform = 4;
                    break;
                case "S40":
                case 5:
                    message.platform = 5;
                    break;
                case "S60":
                case 6:
                    message.platform = 6;
                    break;
                case "PYTHON_CLIENT":
                case 7:
                    message.platform = 7;
                    break;
                case "TIZEN":
                case 8:
                    message.platform = 8;
                    break;
                case "ENTERPRISE":
                case 9:
                    message.platform = 9;
                    break;
                case "SMB_ANDROID":
                case 10:
                    message.platform = 10;
                    break;
                case "KAIOS":
                case 11:
                    message.platform = 11;
                    break;
                case "SMB_IOS":
                case 12:
                    message.platform = 12;
                    break;
                case "WINDOWS":
                case 13:
                    message.platform = 13;
                    break;
                case "WEB":
                case 14:
                    message.platform = 14;
                    break;
                case "PORTAL":
                case 15:
                    message.platform = 15;
                    break;
                case "GREEN_ANDROID":
                case 16:
                    message.platform = 16;
                    break;
                case "GREEN_IPHONE":
                case 17:
                    message.platform = 17;
                    break;
                case "BLUE_ANDROID":
                case 18:
                    message.platform = 18;
                    break;
                case "BLUE_IPHONE":
                case 19:
                    message.platform = 19;
                    break;
                case "FBLITE_ANDROID":
                case 20:
                    message.platform = 20;
                    break;
                case "MLITE_ANDROID":
                case 21:
                    message.platform = 21;
                    break;
                case "IGLITE_ANDROID":
                case 22:
                    message.platform = 22;
                    break;
                case "PAGE":
                case 23:
                    message.platform = 23;
                    break;
                case "MACOS":
                case 24:
                    message.platform = 24;
                    break;
                case "OCULUS_MSG":
                case 25:
                    message.platform = 25;
                    break;
                case "OCULUS_CALL":
                case 26:
                    message.platform = 26;
                    break;
                case "MILAN":
                case 27:
                    message.platform = 27;
                    break;
                case "CAPI":
                case 28:
                    message.platform = 28;
                    break;
                case "WEAROS":
                case 29:
                    message.platform = 29;
                    break;
                case "ARDEVICE":
                case 30:
                    message.platform = 30;
                    break;
                case "VRDEVICE":
                case 31:
                    message.platform = 31;
                    break;
                case "BLUE_WEB":
                case 32:
                    message.platform = 32;
                    break;
                case "IPAD":
                case 33:
                    message.platform = 33;
                    break;
                case "TEST":
                case 34:
                    message.platform = 34;
                    break;
                case "SMART_GLASSES":
                case 35:
                    message.platform = 35;
                    break;
                case "BLUE_VR":
                case 36:
                    message.platform = 36;
                    break;
                case "AR_WRIST":
                case 37:
                    message.platform = 37;
                    break;
                }
                if (object.appVersion != null) {
                    if (typeof object.appVersion !== "object")
                        throw TypeError(".Wa6.ClientPayload.UserAgent.appVersion: object expected");
                    message.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.fromObject(object.appVersion);
                }
                if (object.mcc != null)
                    message.mcc = String(object.mcc);
                if (object.mnc != null)
                    message.mnc = String(object.mnc);
                if (object.osVersion != null)
                    message.osVersion = String(object.osVersion);
                if (object.manufacturer != null)
                    message.manufacturer = String(object.manufacturer);
                if (object.device != null)
                    message.device = String(object.device);
                if (object.osBuildNumber != null)
                    message.osBuildNumber = String(object.osBuildNumber);
                if (object.phoneId != null)
                    message.phoneId = String(object.phoneId);
                switch (object.releaseChannel) {
                default:
                    if (typeof object.releaseChannel === "number") {
                        message.releaseChannel = object.releaseChannel;
                        break;
                    }
                    break;
                case "RELEASE":
                case 0:
                    message.releaseChannel = 0;
                    break;
                case "BETA":
                case 1:
                    message.releaseChannel = 1;
                    break;
                case "ALPHA":
                case 2:
                    message.releaseChannel = 2;
                    break;
                case "DEBUG":
                case 3:
                    message.releaseChannel = 3;
                    break;
                }
                if (object.localeLanguageIso6391 != null)
                    message.localeLanguageIso6391 = String(object.localeLanguageIso6391);
                if (object.localeCountryIso31661Alpha2 != null)
                    message.localeCountryIso31661Alpha2 = String(object.localeCountryIso31661Alpha2);
                if (object.deviceBoard != null)
                    message.deviceBoard = String(object.deviceBoard);
                if (object.deviceExpId != null)
                    message.deviceExpId = String(object.deviceExpId);
                switch (object.deviceType) {
                default:
                    if (typeof object.deviceType === "number") {
                        message.deviceType = object.deviceType;
                        break;
                    }
                    break;
                case "PHONE":
                case 0:
                    message.deviceType = 0;
                    break;
                case "TABLET":
                case 1:
                    message.deviceType = 1;
                    break;
                case "DESKTOP":
                case 2:
                    message.deviceType = 2;
                    break;
                case "WEARABLE":
                case 3:
                    message.deviceType = 3;
                    break;
                case "VR":
                case 4:
                    message.deviceType = 4;
                    break;
                }
                if (object.deviceModelType != null)
                    message.deviceModelType = String(object.deviceModelType);
                return message;
            };

            /**
             * Creates a plain object from a UserAgent message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {Wa6.ClientPayload.UserAgent} message UserAgent
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            UserAgent.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.platform != null && message.hasOwnProperty("platform")) {
                    object.platform = options.enums === String ? $root.Wa6.ClientPayload.UserAgent.Platform[message.platform] === undefined ? message.platform : $root.Wa6.ClientPayload.UserAgent.Platform[message.platform] : message.platform;
                    if (options.oneofs)
                        object._platform = "platform";
                }
                if (message.appVersion != null && message.hasOwnProperty("appVersion")) {
                    object.appVersion = $root.Wa6.ClientPayload.UserAgent.AppVersion.toObject(message.appVersion, options);
                    if (options.oneofs)
                        object._appVersion = "appVersion";
                }
                if (message.mcc != null && message.hasOwnProperty("mcc")) {
                    object.mcc = message.mcc;
                    if (options.oneofs)
                        object._mcc = "mcc";
                }
                if (message.mnc != null && message.hasOwnProperty("mnc")) {
                    object.mnc = message.mnc;
                    if (options.oneofs)
                        object._mnc = "mnc";
                }
                if (message.osVersion != null && message.hasOwnProperty("osVersion")) {
                    object.osVersion = message.osVersion;
                    if (options.oneofs)
                        object._osVersion = "osVersion";
                }
                if (message.manufacturer != null && message.hasOwnProperty("manufacturer")) {
                    object.manufacturer = message.manufacturer;
                    if (options.oneofs)
                        object._manufacturer = "manufacturer";
                }
                if (message.device != null && message.hasOwnProperty("device")) {
                    object.device = message.device;
                    if (options.oneofs)
                        object._device = "device";
                }
                if (message.osBuildNumber != null && message.hasOwnProperty("osBuildNumber")) {
                    object.osBuildNumber = message.osBuildNumber;
                    if (options.oneofs)
                        object._osBuildNumber = "osBuildNumber";
                }
                if (message.phoneId != null && message.hasOwnProperty("phoneId")) {
                    object.phoneId = message.phoneId;
                    if (options.oneofs)
                        object._phoneId = "phoneId";
                }
                if (message.releaseChannel != null && message.hasOwnProperty("releaseChannel")) {
                    object.releaseChannel = options.enums === String ? $root.Wa6.ClientPayload.UserAgent.ReleaseChannel[message.releaseChannel] === undefined ? message.releaseChannel : $root.Wa6.ClientPayload.UserAgent.ReleaseChannel[message.releaseChannel] : message.releaseChannel;
                    if (options.oneofs)
                        object._releaseChannel = "releaseChannel";
                }
                if (message.localeLanguageIso6391 != null && message.hasOwnProperty("localeLanguageIso6391")) {
                    object.localeLanguageIso6391 = message.localeLanguageIso6391;
                    if (options.oneofs)
                        object._localeLanguageIso6391 = "localeLanguageIso6391";
                }
                if (message.localeCountryIso31661Alpha2 != null && message.hasOwnProperty("localeCountryIso31661Alpha2")) {
                    object.localeCountryIso31661Alpha2 = message.localeCountryIso31661Alpha2;
                    if (options.oneofs)
                        object._localeCountryIso31661Alpha2 = "localeCountryIso31661Alpha2";
                }
                if (message.deviceBoard != null && message.hasOwnProperty("deviceBoard")) {
                    object.deviceBoard = message.deviceBoard;
                    if (options.oneofs)
                        object._deviceBoard = "deviceBoard";
                }
                if (message.deviceExpId != null && message.hasOwnProperty("deviceExpId")) {
                    object.deviceExpId = message.deviceExpId;
                    if (options.oneofs)
                        object._deviceExpId = "deviceExpId";
                }
                if (message.deviceType != null && message.hasOwnProperty("deviceType")) {
                    object.deviceType = options.enums === String ? $root.Wa6.ClientPayload.UserAgent.DeviceType[message.deviceType] === undefined ? message.deviceType : $root.Wa6.ClientPayload.UserAgent.DeviceType[message.deviceType] : message.deviceType;
                    if (options.oneofs)
                        object._deviceType = "deviceType";
                }
                if (message.deviceModelType != null && message.hasOwnProperty("deviceModelType")) {
                    object.deviceModelType = message.deviceModelType;
                    if (options.oneofs)
                        object._deviceModelType = "deviceModelType";
                }
                return object;
            };

            /**
             * Converts this UserAgent to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.UserAgent
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            UserAgent.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for UserAgent
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.UserAgent
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            UserAgent.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.ClientPayload.UserAgent";
            };

            UserAgent.AppVersion = (function() {

                /**
                 * Properties of an AppVersion.
                 * @memberof Wa6.ClientPayload.UserAgent
                 * @interface IAppVersion
                 * @property {number|null} [primary] AppVersion primary
                 * @property {number|null} [secondary] AppVersion secondary
                 * @property {number|null} [tertiary] AppVersion tertiary
                 * @property {number|null} [quaternary] AppVersion quaternary
                 * @property {number|null} [quinary] AppVersion quinary
                 */

                /**
                 * Constructs a new AppVersion.
                 * @memberof Wa6.ClientPayload.UserAgent
                 * @classdesc Represents an AppVersion.
                 * @implements IAppVersion
                 * @constructor
                 * @param {Wa6.ClientPayload.UserAgent.IAppVersion=} [properties] Properties to set
                 */
                function AppVersion(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * AppVersion primary.
                 * @member {number|null|undefined} primary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.primary = null;

                /**
                 * AppVersion secondary.
                 * @member {number|null|undefined} secondary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.secondary = null;

                /**
                 * AppVersion tertiary.
                 * @member {number|null|undefined} tertiary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.tertiary = null;

                /**
                 * AppVersion quaternary.
                 * @member {number|null|undefined} quaternary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.quaternary = null;

                /**
                 * AppVersion quinary.
                 * @member {number|null|undefined} quinary
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 */
                AppVersion.prototype.quinary = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_primary", {
                    get: $util.oneOfGetter($oneOfFields = ["primary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_secondary", {
                    get: $util.oneOfGetter($oneOfFields = ["secondary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_tertiary", {
                    get: $util.oneOfGetter($oneOfFields = ["tertiary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_quaternary", {
                    get: $util.oneOfGetter($oneOfFields = ["quaternary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(AppVersion.prototype, "_quinary", {
                    get: $util.oneOfGetter($oneOfFields = ["quinary"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new AppVersion instance using the specified properties.
                 * @function create
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.IAppVersion=} [properties] Properties to set
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion instance
                 */
                AppVersion.create = function create(properties) {
                    return new AppVersion(properties);
                };

                /**
                 * Encodes the specified AppVersion message. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @function encode
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.IAppVersion} message AppVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppVersion.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.primary != null && Object.hasOwnProperty.call(message, "primary"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.primary);
                    if (message.secondary != null && Object.hasOwnProperty.call(message, "secondary"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.secondary);
                    if (message.tertiary != null && Object.hasOwnProperty.call(message, "tertiary"))
                        writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.tertiary);
                    if (message.quaternary != null && Object.hasOwnProperty.call(message, "quaternary"))
                        writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.quaternary);
                    if (message.quinary != null && Object.hasOwnProperty.call(message, "quinary"))
                        writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.quinary);
                    return writer;
                };

                /**
                 * Encodes the specified AppVersion message, length delimited. Does not implicitly {@link Wa6.ClientPayload.UserAgent.AppVersion.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.IAppVersion} message AppVersion message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                AppVersion.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes an AppVersion message from the specified reader or buffer.
                 * @function decode
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppVersion.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.UserAgent.AppVersion();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.primary = reader.uint32();
                                break;
                            }
                        case 2: {
                                message.secondary = reader.uint32();
                                break;
                            }
                        case 3: {
                                message.tertiary = reader.uint32();
                                break;
                            }
                        case 4: {
                                message.quaternary = reader.uint32();
                                break;
                            }
                        case 5: {
                                message.quinary = reader.uint32();
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
                 * Decodes an AppVersion message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                AppVersion.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies an AppVersion message.
                 * @function verify
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                AppVersion.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.primary != null && message.hasOwnProperty("primary")) {
                        properties._primary = 1;
                        if (!$util.isInteger(message.primary))
                            return "primary: integer expected";
                    }
                    if (message.secondary != null && message.hasOwnProperty("secondary")) {
                        properties._secondary = 1;
                        if (!$util.isInteger(message.secondary))
                            return "secondary: integer expected";
                    }
                    if (message.tertiary != null && message.hasOwnProperty("tertiary")) {
                        properties._tertiary = 1;
                        if (!$util.isInteger(message.tertiary))
                            return "tertiary: integer expected";
                    }
                    if (message.quaternary != null && message.hasOwnProperty("quaternary")) {
                        properties._quaternary = 1;
                        if (!$util.isInteger(message.quaternary))
                            return "quaternary: integer expected";
                    }
                    if (message.quinary != null && message.hasOwnProperty("quinary")) {
                        properties._quinary = 1;
                        if (!$util.isInteger(message.quinary))
                            return "quinary: integer expected";
                    }
                    return null;
                };

                /**
                 * Creates an AppVersion message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Wa6.ClientPayload.UserAgent.AppVersion} AppVersion
                 */
                AppVersion.fromObject = function fromObject(object) {
                    if (object instanceof $root.Wa6.ClientPayload.UserAgent.AppVersion)
                        return object;
                    var message = new $root.Wa6.ClientPayload.UserAgent.AppVersion();
                    if (object.primary != null)
                        message.primary = object.primary >>> 0;
                    if (object.secondary != null)
                        message.secondary = object.secondary >>> 0;
                    if (object.tertiary != null)
                        message.tertiary = object.tertiary >>> 0;
                    if (object.quaternary != null)
                        message.quaternary = object.quaternary >>> 0;
                    if (object.quinary != null)
                        message.quinary = object.quinary >>> 0;
                    return message;
                };

                /**
                 * Creates a plain object from an AppVersion message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {Wa6.ClientPayload.UserAgent.AppVersion} message AppVersion
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                AppVersion.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.primary != null && message.hasOwnProperty("primary")) {
                        object.primary = message.primary;
                        if (options.oneofs)
                            object._primary = "primary";
                    }
                    if (message.secondary != null && message.hasOwnProperty("secondary")) {
                        object.secondary = message.secondary;
                        if (options.oneofs)
                            object._secondary = "secondary";
                    }
                    if (message.tertiary != null && message.hasOwnProperty("tertiary")) {
                        object.tertiary = message.tertiary;
                        if (options.oneofs)
                            object._tertiary = "tertiary";
                    }
                    if (message.quaternary != null && message.hasOwnProperty("quaternary")) {
                        object.quaternary = message.quaternary;
                        if (options.oneofs)
                            object._quaternary = "quaternary";
                    }
                    if (message.quinary != null && message.hasOwnProperty("quinary")) {
                        object.quinary = message.quinary;
                        if (options.oneofs)
                            object._quinary = "quinary";
                    }
                    return object;
                };

                /**
                 * Converts this AppVersion to JSON.
                 * @function toJSON
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                AppVersion.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for AppVersion
                 * @function getTypeUrl
                 * @memberof Wa6.ClientPayload.UserAgent.AppVersion
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                AppVersion.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Wa6.ClientPayload.UserAgent.AppVersion";
                };

                return AppVersion;
            })();

            /**
             * DeviceType enum.
             * @name Wa6.ClientPayload.UserAgent.DeviceType
             * @enum {number}
             * @property {number} PHONE=0 PHONE value
             * @property {number} TABLET=1 TABLET value
             * @property {number} DESKTOP=2 DESKTOP value
             * @property {number} WEARABLE=3 WEARABLE value
             * @property {number} VR=4 VR value
             */
            UserAgent.DeviceType = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "PHONE"] = 0;
                values[valuesById[1] = "TABLET"] = 1;
                values[valuesById[2] = "DESKTOP"] = 2;
                values[valuesById[3] = "WEARABLE"] = 3;
                values[valuesById[4] = "VR"] = 4;
                return values;
            })();

            /**
             * Platform enum.
             * @name Wa6.ClientPayload.UserAgent.Platform
             * @enum {number}
             * @property {number} ANDROID=0 ANDROID value
             * @property {number} IOS=1 IOS value
             * @property {number} WINDOWS_PHONE=2 WINDOWS_PHONE value
             * @property {number} BLACKBERRY=3 BLACKBERRY value
             * @property {number} BLACKBERRYX=4 BLACKBERRYX value
             * @property {number} S40=5 S40 value
             * @property {number} S60=6 S60 value
             * @property {number} PYTHON_CLIENT=7 PYTHON_CLIENT value
             * @property {number} TIZEN=8 TIZEN value
             * @property {number} ENTERPRISE=9 ENTERPRISE value
             * @property {number} SMB_ANDROID=10 SMB_ANDROID value
             * @property {number} KAIOS=11 KAIOS value
             * @property {number} SMB_IOS=12 SMB_IOS value
             * @property {number} WINDOWS=13 WINDOWS value
             * @property {number} WEB=14 WEB value
             * @property {number} PORTAL=15 PORTAL value
             * @property {number} GREEN_ANDROID=16 GREEN_ANDROID value
             * @property {number} GREEN_IPHONE=17 GREEN_IPHONE value
             * @property {number} BLUE_ANDROID=18 BLUE_ANDROID value
             * @property {number} BLUE_IPHONE=19 BLUE_IPHONE value
             * @property {number} FBLITE_ANDROID=20 FBLITE_ANDROID value
             * @property {number} MLITE_ANDROID=21 MLITE_ANDROID value
             * @property {number} IGLITE_ANDROID=22 IGLITE_ANDROID value
             * @property {number} PAGE=23 PAGE value
             * @property {number} MACOS=24 MACOS value
             * @property {number} OCULUS_MSG=25 OCULUS_MSG value
             * @property {number} OCULUS_CALL=26 OCULUS_CALL value
             * @property {number} MILAN=27 MILAN value
             * @property {number} CAPI=28 CAPI value
             * @property {number} WEAROS=29 WEAROS value
             * @property {number} ARDEVICE=30 ARDEVICE value
             * @property {number} VRDEVICE=31 VRDEVICE value
             * @property {number} BLUE_WEB=32 BLUE_WEB value
             * @property {number} IPAD=33 IPAD value
             * @property {number} TEST=34 TEST value
             * @property {number} SMART_GLASSES=35 SMART_GLASSES value
             * @property {number} BLUE_VR=36 BLUE_VR value
             * @property {number} AR_WRIST=37 AR_WRIST value
             */
            UserAgent.Platform = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "ANDROID"] = 0;
                values[valuesById[1] = "IOS"] = 1;
                values[valuesById[2] = "WINDOWS_PHONE"] = 2;
                values[valuesById[3] = "BLACKBERRY"] = 3;
                values[valuesById[4] = "BLACKBERRYX"] = 4;
                values[valuesById[5] = "S40"] = 5;
                values[valuesById[6] = "S60"] = 6;
                values[valuesById[7] = "PYTHON_CLIENT"] = 7;
                values[valuesById[8] = "TIZEN"] = 8;
                values[valuesById[9] = "ENTERPRISE"] = 9;
                values[valuesById[10] = "SMB_ANDROID"] = 10;
                values[valuesById[11] = "KAIOS"] = 11;
                values[valuesById[12] = "SMB_IOS"] = 12;
                values[valuesById[13] = "WINDOWS"] = 13;
                values[valuesById[14] = "WEB"] = 14;
                values[valuesById[15] = "PORTAL"] = 15;
                values[valuesById[16] = "GREEN_ANDROID"] = 16;
                values[valuesById[17] = "GREEN_IPHONE"] = 17;
                values[valuesById[18] = "BLUE_ANDROID"] = 18;
                values[valuesById[19] = "BLUE_IPHONE"] = 19;
                values[valuesById[20] = "FBLITE_ANDROID"] = 20;
                values[valuesById[21] = "MLITE_ANDROID"] = 21;
                values[valuesById[22] = "IGLITE_ANDROID"] = 22;
                values[valuesById[23] = "PAGE"] = 23;
                values[valuesById[24] = "MACOS"] = 24;
                values[valuesById[25] = "OCULUS_MSG"] = 25;
                values[valuesById[26] = "OCULUS_CALL"] = 26;
                values[valuesById[27] = "MILAN"] = 27;
                values[valuesById[28] = "CAPI"] = 28;
                values[valuesById[29] = "WEAROS"] = 29;
                values[valuesById[30] = "ARDEVICE"] = 30;
                values[valuesById[31] = "VRDEVICE"] = 31;
                values[valuesById[32] = "BLUE_WEB"] = 32;
                values[valuesById[33] = "IPAD"] = 33;
                values[valuesById[34] = "TEST"] = 34;
                values[valuesById[35] = "SMART_GLASSES"] = 35;
                values[valuesById[36] = "BLUE_VR"] = 36;
                values[valuesById[37] = "AR_WRIST"] = 37;
                return values;
            })();

            /**
             * ReleaseChannel enum.
             * @name Wa6.ClientPayload.UserAgent.ReleaseChannel
             * @enum {number}
             * @property {number} RELEASE=0 RELEASE value
             * @property {number} BETA=1 BETA value
             * @property {number} ALPHA=2 ALPHA value
             * @property {number} DEBUG=3 DEBUG value
             */
            UserAgent.ReleaseChannel = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "RELEASE"] = 0;
                values[valuesById[1] = "BETA"] = 1;
                values[valuesById[2] = "ALPHA"] = 2;
                values[valuesById[3] = "DEBUG"] = 3;
                return values;
            })();

            return UserAgent;
        })();

        ClientPayload.WebInfo = (function() {

            /**
             * Properties of a WebInfo.
             * @memberof Wa6.ClientPayload
             * @interface IWebInfo
             * @property {string|null} [refToken] WebInfo refToken
             * @property {string|null} [version] WebInfo version
             * @property {Wa6.ClientPayload.WebInfo.IWebdPayload|null} [webdPayload] WebInfo webdPayload
             * @property {Wa6.ClientPayload.WebInfo.WebSubPlatform|null} [webSubPlatform] WebInfo webSubPlatform
             * @property {string|null} [browser] WebInfo browser
             * @property {string|null} [browserVersion] WebInfo browserVersion
             */

            /**
             * Constructs a new WebInfo.
             * @memberof Wa6.ClientPayload
             * @classdesc Represents a WebInfo.
             * @implements IWebInfo
             * @constructor
             * @param {Wa6.ClientPayload.IWebInfo=} [properties] Properties to set
             */
            function WebInfo(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * WebInfo refToken.
             * @member {string|null|undefined} refToken
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.refToken = null;

            /**
             * WebInfo version.
             * @member {string|null|undefined} version
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.version = null;

            /**
             * WebInfo webdPayload.
             * @member {Wa6.ClientPayload.WebInfo.IWebdPayload|null|undefined} webdPayload
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.webdPayload = null;

            /**
             * WebInfo webSubPlatform.
             * @member {Wa6.ClientPayload.WebInfo.WebSubPlatform|null|undefined} webSubPlatform
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.webSubPlatform = null;

            /**
             * WebInfo browser.
             * @member {string|null|undefined} browser
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.browser = null;

            /**
             * WebInfo browserVersion.
             * @member {string|null|undefined} browserVersion
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             */
            WebInfo.prototype.browserVersion = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_refToken", {
                get: $util.oneOfGetter($oneOfFields = ["refToken"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_version", {
                get: $util.oneOfGetter($oneOfFields = ["version"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_webdPayload", {
                get: $util.oneOfGetter($oneOfFields = ["webdPayload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_webSubPlatform", {
                get: $util.oneOfGetter($oneOfFields = ["webSubPlatform"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_browser", {
                get: $util.oneOfGetter($oneOfFields = ["browser"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(WebInfo.prototype, "_browserVersion", {
                get: $util.oneOfGetter($oneOfFields = ["browserVersion"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new WebInfo instance using the specified properties.
             * @function create
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.IWebInfo=} [properties] Properties to set
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo instance
             */
            WebInfo.create = function create(properties) {
                return new WebInfo(properties);
            };

            /**
             * Encodes the specified WebInfo message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @function encode
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.IWebInfo} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.refToken != null && Object.hasOwnProperty.call(message, "refToken"))
                    writer.uint32(/* id 1, wireType 2 =*/10).string(message.refToken);
                if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.version);
                if (message.webdPayload != null && Object.hasOwnProperty.call(message, "webdPayload"))
                    $root.Wa6.ClientPayload.WebInfo.WebdPayload.encode(message.webdPayload, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                if (message.webSubPlatform != null && Object.hasOwnProperty.call(message, "webSubPlatform"))
                    writer.uint32(/* id 4, wireType 0 =*/32).int32(message.webSubPlatform);
                if (message.browser != null && Object.hasOwnProperty.call(message, "browser"))
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.browser);
                if (message.browserVersion != null && Object.hasOwnProperty.call(message, "browserVersion"))
                    writer.uint32(/* id 6, wireType 2 =*/50).string(message.browserVersion);
                return writer;
            };

            /**
             * Encodes the specified WebInfo message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.IWebInfo} message WebInfo message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            WebInfo.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a WebInfo message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.WebInfo();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.refToken = reader.string();
                            break;
                        }
                    case 2: {
                            message.version = reader.string();
                            break;
                        }
                    case 3: {
                            message.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.decode(reader, reader.uint32());
                            break;
                        }
                    case 4: {
                            message.webSubPlatform = reader.int32();
                            break;
                        }
                    case 5: {
                            message.browser = reader.string();
                            break;
                        }
                    case 6: {
                            message.browserVersion = reader.string();
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
             * Decodes a WebInfo message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            WebInfo.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a WebInfo message.
             * @function verify
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            WebInfo.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.refToken != null && message.hasOwnProperty("refToken")) {
                    properties._refToken = 1;
                    if (!$util.isString(message.refToken))
                        return "refToken: string expected";
                }
                if (message.version != null && message.hasOwnProperty("version")) {
                    properties._version = 1;
                    if (!$util.isString(message.version))
                        return "version: string expected";
                }
                if (message.webdPayload != null && message.hasOwnProperty("webdPayload")) {
                    properties._webdPayload = 1;
                    {
                        var error = $root.Wa6.ClientPayload.WebInfo.WebdPayload.verify(message.webdPayload);
                        if (error)
                            return "webdPayload." + error;
                    }
                }
                if (message.webSubPlatform != null && message.hasOwnProperty("webSubPlatform")) {
                    properties._webSubPlatform = 1;
                    switch (message.webSubPlatform) {
                    default:
                        return "webSubPlatform: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    }
                }
                if (message.browser != null && message.hasOwnProperty("browser")) {
                    properties._browser = 1;
                    if (!$util.isString(message.browser))
                        return "browser: string expected";
                }
                if (message.browserVersion != null && message.hasOwnProperty("browserVersion")) {
                    properties._browserVersion = 1;
                    if (!$util.isString(message.browserVersion))
                        return "browserVersion: string expected";
                }
                return null;
            };

            /**
             * Creates a WebInfo message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.ClientPayload.WebInfo} WebInfo
             */
            WebInfo.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.ClientPayload.WebInfo)
                    return object;
                var message = new $root.Wa6.ClientPayload.WebInfo();
                if (object.refToken != null)
                    message.refToken = String(object.refToken);
                if (object.version != null)
                    message.version = String(object.version);
                if (object.webdPayload != null) {
                    if (typeof object.webdPayload !== "object")
                        throw TypeError(".Wa6.ClientPayload.WebInfo.webdPayload: object expected");
                    message.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.fromObject(object.webdPayload);
                }
                switch (object.webSubPlatform) {
                default:
                    if (typeof object.webSubPlatform === "number") {
                        message.webSubPlatform = object.webSubPlatform;
                        break;
                    }
                    break;
                case "WEB_BROWSER":
                case 0:
                    message.webSubPlatform = 0;
                    break;
                case "APP_STORE":
                case 1:
                    message.webSubPlatform = 1;
                    break;
                case "WIN_STORE":
                case 2:
                    message.webSubPlatform = 2;
                    break;
                case "DARWIN":
                case 3:
                    message.webSubPlatform = 3;
                    break;
                case "WIN32":
                case 4:
                    message.webSubPlatform = 4;
                    break;
                case "WIN_HYBRID":
                case 5:
                    message.webSubPlatform = 5;
                    break;
                }
                if (object.browser != null)
                    message.browser = String(object.browser);
                if (object.browserVersion != null)
                    message.browserVersion = String(object.browserVersion);
                return message;
            };

            /**
             * Creates a plain object from a WebInfo message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {Wa6.ClientPayload.WebInfo} message WebInfo
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            WebInfo.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.refToken != null && message.hasOwnProperty("refToken")) {
                    object.refToken = message.refToken;
                    if (options.oneofs)
                        object._refToken = "refToken";
                }
                if (message.version != null && message.hasOwnProperty("version")) {
                    object.version = message.version;
                    if (options.oneofs)
                        object._version = "version";
                }
                if (message.webdPayload != null && message.hasOwnProperty("webdPayload")) {
                    object.webdPayload = $root.Wa6.ClientPayload.WebInfo.WebdPayload.toObject(message.webdPayload, options);
                    if (options.oneofs)
                        object._webdPayload = "webdPayload";
                }
                if (message.webSubPlatform != null && message.hasOwnProperty("webSubPlatform")) {
                    object.webSubPlatform = options.enums === String ? $root.Wa6.ClientPayload.WebInfo.WebSubPlatform[message.webSubPlatform] === undefined ? message.webSubPlatform : $root.Wa6.ClientPayload.WebInfo.WebSubPlatform[message.webSubPlatform] : message.webSubPlatform;
                    if (options.oneofs)
                        object._webSubPlatform = "webSubPlatform";
                }
                if (message.browser != null && message.hasOwnProperty("browser")) {
                    object.browser = message.browser;
                    if (options.oneofs)
                        object._browser = "browser";
                }
                if (message.browserVersion != null && message.hasOwnProperty("browserVersion")) {
                    object.browserVersion = message.browserVersion;
                    if (options.oneofs)
                        object._browserVersion = "browserVersion";
                }
                return object;
            };

            /**
             * Converts this WebInfo to JSON.
             * @function toJSON
             * @memberof Wa6.ClientPayload.WebInfo
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            WebInfo.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for WebInfo
             * @function getTypeUrl
             * @memberof Wa6.ClientPayload.WebInfo
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            WebInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.ClientPayload.WebInfo";
            };

            /**
             * WebSubPlatform enum.
             * @name Wa6.ClientPayload.WebInfo.WebSubPlatform
             * @enum {number}
             * @property {number} WEB_BROWSER=0 WEB_BROWSER value
             * @property {number} APP_STORE=1 APP_STORE value
             * @property {number} WIN_STORE=2 WIN_STORE value
             * @property {number} DARWIN=3 DARWIN value
             * @property {number} WIN32=4 WIN32 value
             * @property {number} WIN_HYBRID=5 WIN_HYBRID value
             */
            WebInfo.WebSubPlatform = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "WEB_BROWSER"] = 0;
                values[valuesById[1] = "APP_STORE"] = 1;
                values[valuesById[2] = "WIN_STORE"] = 2;
                values[valuesById[3] = "DARWIN"] = 3;
                values[valuesById[4] = "WIN32"] = 4;
                values[valuesById[5] = "WIN_HYBRID"] = 5;
                return values;
            })();

            WebInfo.WebdPayload = (function() {

                /**
                 * Properties of a WebdPayload.
                 * @memberof Wa6.ClientPayload.WebInfo
                 * @interface IWebdPayload
                 * @property {boolean|null} [usesParticipantInKey] WebdPayload usesParticipantInKey
                 * @property {boolean|null} [supportsStarredMessages] WebdPayload supportsStarredMessages
                 * @property {boolean|null} [supportsDocumentMessages] WebdPayload supportsDocumentMessages
                 * @property {boolean|null} [supportsUrlMessages] WebdPayload supportsUrlMessages
                 * @property {boolean|null} [supportsMediaRetry] WebdPayload supportsMediaRetry
                 * @property {boolean|null} [supportsE2EImage] WebdPayload supportsE2EImage
                 * @property {boolean|null} [supportsE2EVideo] WebdPayload supportsE2EVideo
                 * @property {boolean|null} [supportsE2EAudio] WebdPayload supportsE2EAudio
                 * @property {boolean|null} [supportsE2EDocument] WebdPayload supportsE2EDocument
                 * @property {string|null} [documentTypes] WebdPayload documentTypes
                 * @property {Uint8Array|null} [features] WebdPayload features
                 */

                /**
                 * Constructs a new WebdPayload.
                 * @memberof Wa6.ClientPayload.WebInfo
                 * @classdesc Represents a WebdPayload.
                 * @implements IWebdPayload
                 * @constructor
                 * @param {Wa6.ClientPayload.WebInfo.IWebdPayload=} [properties] Properties to set
                 */
                function WebdPayload(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }

                /**
                 * WebdPayload usesParticipantInKey.
                 * @member {boolean|null|undefined} usesParticipantInKey
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.usesParticipantInKey = null;

                /**
                 * WebdPayload supportsStarredMessages.
                 * @member {boolean|null|undefined} supportsStarredMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsStarredMessages = null;

                /**
                 * WebdPayload supportsDocumentMessages.
                 * @member {boolean|null|undefined} supportsDocumentMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsDocumentMessages = null;

                /**
                 * WebdPayload supportsUrlMessages.
                 * @member {boolean|null|undefined} supportsUrlMessages
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsUrlMessages = null;

                /**
                 * WebdPayload supportsMediaRetry.
                 * @member {boolean|null|undefined} supportsMediaRetry
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsMediaRetry = null;

                /**
                 * WebdPayload supportsE2EImage.
                 * @member {boolean|null|undefined} supportsE2EImage
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EImage = null;

                /**
                 * WebdPayload supportsE2EVideo.
                 * @member {boolean|null|undefined} supportsE2EVideo
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EVideo = null;

                /**
                 * WebdPayload supportsE2EAudio.
                 * @member {boolean|null|undefined} supportsE2EAudio
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EAudio = null;

                /**
                 * WebdPayload supportsE2EDocument.
                 * @member {boolean|null|undefined} supportsE2EDocument
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.supportsE2EDocument = null;

                /**
                 * WebdPayload documentTypes.
                 * @member {string|null|undefined} documentTypes
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.documentTypes = null;

                /**
                 * WebdPayload features.
                 * @member {Uint8Array|null|undefined} features
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 */
                WebdPayload.prototype.features = null;

                // OneOf field names bound to virtual getters and setters
                var $oneOfFields;

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_usesParticipantInKey", {
                    get: $util.oneOfGetter($oneOfFields = ["usesParticipantInKey"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsStarredMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsStarredMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsDocumentMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsDocumentMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsUrlMessages", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsUrlMessages"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsMediaRetry", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsMediaRetry"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EImage", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EImage"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EVideo", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EVideo"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EAudio", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EAudio"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_supportsE2EDocument", {
                    get: $util.oneOfGetter($oneOfFields = ["supportsE2EDocument"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_documentTypes", {
                    get: $util.oneOfGetter($oneOfFields = ["documentTypes"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                // Virtual OneOf for proto3 optional field
                Object.defineProperty(WebdPayload.prototype, "_features", {
                    get: $util.oneOfGetter($oneOfFields = ["features"]),
                    set: $util.oneOfSetter($oneOfFields)
                });

                /**
                 * Creates a new WebdPayload instance using the specified properties.
                 * @function create
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.IWebdPayload=} [properties] Properties to set
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload instance
                 */
                WebdPayload.create = function create(properties) {
                    return new WebdPayload(properties);
                };

                /**
                 * Encodes the specified WebdPayload message. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encode
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.usesParticipantInKey != null && Object.hasOwnProperty.call(message, "usesParticipantInKey"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.usesParticipantInKey);
                    if (message.supportsStarredMessages != null && Object.hasOwnProperty.call(message, "supportsStarredMessages"))
                        writer.uint32(/* id 2, wireType 0 =*/16).bool(message.supportsStarredMessages);
                    if (message.supportsDocumentMessages != null && Object.hasOwnProperty.call(message, "supportsDocumentMessages"))
                        writer.uint32(/* id 3, wireType 0 =*/24).bool(message.supportsDocumentMessages);
                    if (message.supportsUrlMessages != null && Object.hasOwnProperty.call(message, "supportsUrlMessages"))
                        writer.uint32(/* id 4, wireType 0 =*/32).bool(message.supportsUrlMessages);
                    if (message.supportsMediaRetry != null && Object.hasOwnProperty.call(message, "supportsMediaRetry"))
                        writer.uint32(/* id 5, wireType 0 =*/40).bool(message.supportsMediaRetry);
                    if (message.supportsE2EImage != null && Object.hasOwnProperty.call(message, "supportsE2EImage"))
                        writer.uint32(/* id 6, wireType 0 =*/48).bool(message.supportsE2EImage);
                    if (message.supportsE2EVideo != null && Object.hasOwnProperty.call(message, "supportsE2EVideo"))
                        writer.uint32(/* id 7, wireType 0 =*/56).bool(message.supportsE2EVideo);
                    if (message.supportsE2EAudio != null && Object.hasOwnProperty.call(message, "supportsE2EAudio"))
                        writer.uint32(/* id 8, wireType 0 =*/64).bool(message.supportsE2EAudio);
                    if (message.supportsE2EDocument != null && Object.hasOwnProperty.call(message, "supportsE2EDocument"))
                        writer.uint32(/* id 9, wireType 0 =*/72).bool(message.supportsE2EDocument);
                    if (message.documentTypes != null && Object.hasOwnProperty.call(message, "documentTypes"))
                        writer.uint32(/* id 10, wireType 2 =*/82).string(message.documentTypes);
                    if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                        writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.features);
                    return writer;
                };

                /**
                 * Encodes the specified WebdPayload message, length delimited. Does not implicitly {@link Wa6.ClientPayload.WebInfo.WebdPayload.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.IWebdPayload} message WebdPayload message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                WebdPayload.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };

                /**
                 * Decodes a WebdPayload message from the specified reader or buffer.
                 * @function decode
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decode = function decode(reader, length, error) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.ClientPayload.WebInfo.WebdPayload();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        if (tag === error)
                            break;
                        switch (tag >>> 3) {
                        case 1: {
                                message.usesParticipantInKey = reader.bool();
                                break;
                            }
                        case 2: {
                                message.supportsStarredMessages = reader.bool();
                                break;
                            }
                        case 3: {
                                message.supportsDocumentMessages = reader.bool();
                                break;
                            }
                        case 4: {
                                message.supportsUrlMessages = reader.bool();
                                break;
                            }
                        case 5: {
                                message.supportsMediaRetry = reader.bool();
                                break;
                            }
                        case 6: {
                                message.supportsE2EImage = reader.bool();
                                break;
                            }
                        case 7: {
                                message.supportsE2EVideo = reader.bool();
                                break;
                            }
                        case 8: {
                                message.supportsE2EAudio = reader.bool();
                                break;
                            }
                        case 9: {
                                message.supportsE2EDocument = reader.bool();
                                break;
                            }
                        case 10: {
                                message.documentTypes = reader.string();
                                break;
                            }
                        case 11: {
                                message.features = reader.bytes();
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
                 * Decodes a WebdPayload message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                WebdPayload.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };

                /**
                 * Verifies a WebdPayload message.
                 * @function verify
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                WebdPayload.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    var properties = {};
                    if (message.usesParticipantInKey != null && message.hasOwnProperty("usesParticipantInKey")) {
                        properties._usesParticipantInKey = 1;
                        if (typeof message.usesParticipantInKey !== "boolean")
                            return "usesParticipantInKey: boolean expected";
                    }
                    if (message.supportsStarredMessages != null && message.hasOwnProperty("supportsStarredMessages")) {
                        properties._supportsStarredMessages = 1;
                        if (typeof message.supportsStarredMessages !== "boolean")
                            return "supportsStarredMessages: boolean expected";
                    }
                    if (message.supportsDocumentMessages != null && message.hasOwnProperty("supportsDocumentMessages")) {
                        properties._supportsDocumentMessages = 1;
                        if (typeof message.supportsDocumentMessages !== "boolean")
                            return "supportsDocumentMessages: boolean expected";
                    }
                    if (message.supportsUrlMessages != null && message.hasOwnProperty("supportsUrlMessages")) {
                        properties._supportsUrlMessages = 1;
                        if (typeof message.supportsUrlMessages !== "boolean")
                            return "supportsUrlMessages: boolean expected";
                    }
                    if (message.supportsMediaRetry != null && message.hasOwnProperty("supportsMediaRetry")) {
                        properties._supportsMediaRetry = 1;
                        if (typeof message.supportsMediaRetry !== "boolean")
                            return "supportsMediaRetry: boolean expected";
                    }
                    if (message.supportsE2EImage != null && message.hasOwnProperty("supportsE2EImage")) {
                        properties._supportsE2EImage = 1;
                        if (typeof message.supportsE2EImage !== "boolean")
                            return "supportsE2EImage: boolean expected";
                    }
                    if (message.supportsE2EVideo != null && message.hasOwnProperty("supportsE2EVideo")) {
                        properties._supportsE2EVideo = 1;
                        if (typeof message.supportsE2EVideo !== "boolean")
                            return "supportsE2EVideo: boolean expected";
                    }
                    if (message.supportsE2EAudio != null && message.hasOwnProperty("supportsE2EAudio")) {
                        properties._supportsE2EAudio = 1;
                        if (typeof message.supportsE2EAudio !== "boolean")
                            return "supportsE2EAudio: boolean expected";
                    }
                    if (message.supportsE2EDocument != null && message.hasOwnProperty("supportsE2EDocument")) {
                        properties._supportsE2EDocument = 1;
                        if (typeof message.supportsE2EDocument !== "boolean")
                            return "supportsE2EDocument: boolean expected";
                    }
                    if (message.documentTypes != null && message.hasOwnProperty("documentTypes")) {
                        properties._documentTypes = 1;
                        if (!$util.isString(message.documentTypes))
                            return "documentTypes: string expected";
                    }
                    if (message.features != null && message.hasOwnProperty("features")) {
                        properties._features = 1;
                        if (!(message.features && typeof message.features.length === "number" || $util.isString(message.features)))
                            return "features: buffer expected";
                    }
                    return null;
                };

                /**
                 * Creates a WebdPayload message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {Wa6.ClientPayload.WebInfo.WebdPayload} WebdPayload
                 */
                WebdPayload.fromObject = function fromObject(object) {
                    if (object instanceof $root.Wa6.ClientPayload.WebInfo.WebdPayload)
                        return object;
                    var message = new $root.Wa6.ClientPayload.WebInfo.WebdPayload();
                    if (object.usesParticipantInKey != null)
                        message.usesParticipantInKey = Boolean(object.usesParticipantInKey);
                    if (object.supportsStarredMessages != null)
                        message.supportsStarredMessages = Boolean(object.supportsStarredMessages);
                    if (object.supportsDocumentMessages != null)
                        message.supportsDocumentMessages = Boolean(object.supportsDocumentMessages);
                    if (object.supportsUrlMessages != null)
                        message.supportsUrlMessages = Boolean(object.supportsUrlMessages);
                    if (object.supportsMediaRetry != null)
                        message.supportsMediaRetry = Boolean(object.supportsMediaRetry);
                    if (object.supportsE2EImage != null)
                        message.supportsE2EImage = Boolean(object.supportsE2EImage);
                    if (object.supportsE2EVideo != null)
                        message.supportsE2EVideo = Boolean(object.supportsE2EVideo);
                    if (object.supportsE2EAudio != null)
                        message.supportsE2EAudio = Boolean(object.supportsE2EAudio);
                    if (object.supportsE2EDocument != null)
                        message.supportsE2EDocument = Boolean(object.supportsE2EDocument);
                    if (object.documentTypes != null)
                        message.documentTypes = String(object.documentTypes);
                    if (object.features != null)
                        if (typeof object.features === "string")
                            $util.base64.decode(object.features, message.features = $util.newBuffer($util.base64.length(object.features)), 0);
                        else if (object.features.length >= 0)
                            message.features = object.features;
                    return message;
                };

                /**
                 * Creates a plain object from a WebdPayload message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {Wa6.ClientPayload.WebInfo.WebdPayload} message WebdPayload
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                WebdPayload.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (message.usesParticipantInKey != null && message.hasOwnProperty("usesParticipantInKey")) {
                        object.usesParticipantInKey = message.usesParticipantInKey;
                        if (options.oneofs)
                            object._usesParticipantInKey = "usesParticipantInKey";
                    }
                    if (message.supportsStarredMessages != null && message.hasOwnProperty("supportsStarredMessages")) {
                        object.supportsStarredMessages = message.supportsStarredMessages;
                        if (options.oneofs)
                            object._supportsStarredMessages = "supportsStarredMessages";
                    }
                    if (message.supportsDocumentMessages != null && message.hasOwnProperty("supportsDocumentMessages")) {
                        object.supportsDocumentMessages = message.supportsDocumentMessages;
                        if (options.oneofs)
                            object._supportsDocumentMessages = "supportsDocumentMessages";
                    }
                    if (message.supportsUrlMessages != null && message.hasOwnProperty("supportsUrlMessages")) {
                        object.supportsUrlMessages = message.supportsUrlMessages;
                        if (options.oneofs)
                            object._supportsUrlMessages = "supportsUrlMessages";
                    }
                    if (message.supportsMediaRetry != null && message.hasOwnProperty("supportsMediaRetry")) {
                        object.supportsMediaRetry = message.supportsMediaRetry;
                        if (options.oneofs)
                            object._supportsMediaRetry = "supportsMediaRetry";
                    }
                    if (message.supportsE2EImage != null && message.hasOwnProperty("supportsE2EImage")) {
                        object.supportsE2EImage = message.supportsE2EImage;
                        if (options.oneofs)
                            object._supportsE2EImage = "supportsE2EImage";
                    }
                    if (message.supportsE2EVideo != null && message.hasOwnProperty("supportsE2EVideo")) {
                        object.supportsE2EVideo = message.supportsE2EVideo;
                        if (options.oneofs)
                            object._supportsE2EVideo = "supportsE2EVideo";
                    }
                    if (message.supportsE2EAudio != null && message.hasOwnProperty("supportsE2EAudio")) {
                        object.supportsE2EAudio = message.supportsE2EAudio;
                        if (options.oneofs)
                            object._supportsE2EAudio = "supportsE2EAudio";
                    }
                    if (message.supportsE2EDocument != null && message.hasOwnProperty("supportsE2EDocument")) {
                        object.supportsE2EDocument = message.supportsE2EDocument;
                        if (options.oneofs)
                            object._supportsE2EDocument = "supportsE2EDocument";
                    }
                    if (message.documentTypes != null && message.hasOwnProperty("documentTypes")) {
                        object.documentTypes = message.documentTypes;
                        if (options.oneofs)
                            object._documentTypes = "documentTypes";
                    }
                    if (message.features != null && message.hasOwnProperty("features")) {
                        object.features = options.bytes === String ? $util.base64.encode(message.features, 0, message.features.length) : options.bytes === Array ? Array.prototype.slice.call(message.features) : message.features;
                        if (options.oneofs)
                            object._features = "features";
                    }
                    return object;
                };

                /**
                 * Converts this WebdPayload to JSON.
                 * @function toJSON
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                WebdPayload.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };

                /**
                 * Gets the default type url for WebdPayload
                 * @function getTypeUrl
                 * @memberof Wa6.ClientPayload.WebInfo.WebdPayload
                 * @static
                 * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns {string} The default type url
                 */
                WebdPayload.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                    if (typeUrlPrefix === undefined) {
                        typeUrlPrefix = "type.googleapis.com";
                    }
                    return typeUrlPrefix + "/Wa6.ClientPayload.WebInfo.WebdPayload";
                };

                return WebdPayload;
            })();

            return WebInfo;
        })();

        return ClientPayload;
    })();

    Wa6.HandshakeMessage = (function() {

        /**
         * Properties of a HandshakeMessage.
         * @memberof Wa6
         * @interface IHandshakeMessage
         * @property {Wa6.HandshakeMessage.IClientHello|null} [clientHello] HandshakeMessage clientHello
         * @property {Wa6.HandshakeMessage.IServerHello|null} [serverHello] HandshakeMessage serverHello
         * @property {Wa6.HandshakeMessage.IClientFinish|null} [clientFinish] HandshakeMessage clientFinish
         */

        /**
         * Constructs a new HandshakeMessage.
         * @memberof Wa6
         * @classdesc Represents a HandshakeMessage.
         * @implements IHandshakeMessage
         * @constructor
         * @param {Wa6.IHandshakeMessage=} [properties] Properties to set
         */
        function HandshakeMessage(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * HandshakeMessage clientHello.
         * @member {Wa6.HandshakeMessage.IClientHello|null|undefined} clientHello
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientHello = null;

        /**
         * HandshakeMessage serverHello.
         * @member {Wa6.HandshakeMessage.IServerHello|null|undefined} serverHello
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.serverHello = null;

        /**
         * HandshakeMessage clientFinish.
         * @member {Wa6.HandshakeMessage.IClientFinish|null|undefined} clientFinish
         * @memberof Wa6.HandshakeMessage
         * @instance
         */
        HandshakeMessage.prototype.clientFinish = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_clientHello", {
            get: $util.oneOfGetter($oneOfFields = ["clientHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_serverHello", {
            get: $util.oneOfGetter($oneOfFields = ["serverHello"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(HandshakeMessage.prototype, "_clientFinish", {
            get: $util.oneOfGetter($oneOfFields = ["clientFinish"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new HandshakeMessage instance using the specified properties.
         * @function create
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.IHandshakeMessage=} [properties] Properties to set
         * @returns {Wa6.HandshakeMessage} HandshakeMessage instance
         */
        HandshakeMessage.create = function create(properties) {
            return new HandshakeMessage(properties);
        };

        /**
         * Encodes the specified HandshakeMessage message. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @function encode
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.IHandshakeMessage} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.clientHello != null && Object.hasOwnProperty.call(message, "clientHello"))
                $root.Wa6.HandshakeMessage.ClientHello.encode(message.clientHello, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.serverHello != null && Object.hasOwnProperty.call(message, "serverHello"))
                $root.Wa6.HandshakeMessage.ServerHello.encode(message.serverHello, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.clientFinish != null && Object.hasOwnProperty.call(message, "clientFinish"))
                $root.Wa6.HandshakeMessage.ClientFinish.encode(message.clientFinish, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified HandshakeMessage message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.IHandshakeMessage} message HandshakeMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        HandshakeMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a HandshakeMessage message from the specified reader or buffer.
         * @function decode
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Wa6.HandshakeMessage} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.HandshakeMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 2: {
                        message.clientHello = $root.Wa6.HandshakeMessage.ClientHello.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        message.serverHello = $root.Wa6.HandshakeMessage.ServerHello.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.decode(reader, reader.uint32());
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
         * Decodes a HandshakeMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Wa6.HandshakeMessage} HandshakeMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        HandshakeMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a HandshakeMessage message.
         * @function verify
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        HandshakeMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.clientHello != null && message.hasOwnProperty("clientHello")) {
                properties._clientHello = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ClientHello.verify(message.clientHello);
                    if (error)
                        return "clientHello." + error;
                }
            }
            if (message.serverHello != null && message.hasOwnProperty("serverHello")) {
                properties._serverHello = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ServerHello.verify(message.serverHello);
                    if (error)
                        return "serverHello." + error;
                }
            }
            if (message.clientFinish != null && message.hasOwnProperty("clientFinish")) {
                properties._clientFinish = 1;
                {
                    var error = $root.Wa6.HandshakeMessage.ClientFinish.verify(message.clientFinish);
                    if (error)
                        return "clientFinish." + error;
                }
            }
            return null;
        };

        /**
         * Creates a HandshakeMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Wa6.HandshakeMessage} HandshakeMessage
         */
        HandshakeMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.Wa6.HandshakeMessage)
                return object;
            var message = new $root.Wa6.HandshakeMessage();
            if (object.clientHello != null) {
                if (typeof object.clientHello !== "object")
                    throw TypeError(".Wa6.HandshakeMessage.clientHello: object expected");
                message.clientHello = $root.Wa6.HandshakeMessage.ClientHello.fromObject(object.clientHello);
            }
            if (object.serverHello != null) {
                if (typeof object.serverHello !== "object")
                    throw TypeError(".Wa6.HandshakeMessage.serverHello: object expected");
                message.serverHello = $root.Wa6.HandshakeMessage.ServerHello.fromObject(object.serverHello);
            }
            if (object.clientFinish != null) {
                if (typeof object.clientFinish !== "object")
                    throw TypeError(".Wa6.HandshakeMessage.clientFinish: object expected");
                message.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.fromObject(object.clientFinish);
            }
            return message;
        };

        /**
         * Creates a plain object from a HandshakeMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {Wa6.HandshakeMessage} message HandshakeMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        HandshakeMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.clientHello != null && message.hasOwnProperty("clientHello")) {
                object.clientHello = $root.Wa6.HandshakeMessage.ClientHello.toObject(message.clientHello, options);
                if (options.oneofs)
                    object._clientHello = "clientHello";
            }
            if (message.serverHello != null && message.hasOwnProperty("serverHello")) {
                object.serverHello = $root.Wa6.HandshakeMessage.ServerHello.toObject(message.serverHello, options);
                if (options.oneofs)
                    object._serverHello = "serverHello";
            }
            if (message.clientFinish != null && message.hasOwnProperty("clientFinish")) {
                object.clientFinish = $root.Wa6.HandshakeMessage.ClientFinish.toObject(message.clientFinish, options);
                if (options.oneofs)
                    object._clientFinish = "clientFinish";
            }
            return object;
        };

        /**
         * Converts this HandshakeMessage to JSON.
         * @function toJSON
         * @memberof Wa6.HandshakeMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        HandshakeMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for HandshakeMessage
         * @function getTypeUrl
         * @memberof Wa6.HandshakeMessage
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        HandshakeMessage.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Wa6.HandshakeMessage";
        };

        HandshakeMessage.ClientFinish = (function() {

            /**
             * Properties of a ClientFinish.
             * @memberof Wa6.HandshakeMessage
             * @interface IClientFinish
             * @property {Uint8Array|null} ["static"] ClientFinish static
             * @property {Uint8Array|null} [payload] ClientFinish payload
             * @property {Uint8Array|null} [extendedCiphertext] ClientFinish extendedCiphertext
             * @property {Uint8Array|null} [paddedBytes] ClientFinish paddedBytes
             * @property {boolean|null} [simulateXxkemFs] ClientFinish simulateXxkemFs
             */

            /**
             * Constructs a new ClientFinish.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ClientFinish.
             * @implements IClientFinish
             * @constructor
             * @param {Wa6.HandshakeMessage.IClientFinish=} [properties] Properties to set
             */
            function ClientFinish(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientFinish static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype["static"] = null;

            /**
             * ClientFinish payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.payload = null;

            /**
             * ClientFinish extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.extendedCiphertext = null;

            /**
             * ClientFinish paddedBytes.
             * @member {Uint8Array|null|undefined} paddedBytes
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.paddedBytes = null;

            /**
             * ClientFinish simulateXxkemFs.
             * @member {boolean|null|undefined} simulateXxkemFs
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             */
            ClientFinish.prototype.simulateXxkemFs = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_paddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientFinish.prototype, "_simulateXxkemFs", {
                get: $util.oneOfGetter($oneOfFields = ["simulateXxkemFs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ClientFinish instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.IClientFinish=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish instance
             */
            ClientFinish.create = function create(properties) {
                return new ClientFinish(properties);
            };

            /**
             * Encodes the specified ClientFinish message. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientFinish.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message["static"]);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.payload);
                if (message.extendedCiphertext != null && Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.extendedCiphertext);
                if (message.paddedBytes != null && Object.hasOwnProperty.call(message, "paddedBytes"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.paddedBytes);
                if (message.simulateXxkemFs != null && Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    writer.uint32(/* id 5, wireType 0 =*/40).bool(message.simulateXxkemFs);
                return writer;
            };

            /**
             * Encodes the specified ClientFinish message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientFinish.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.IClientFinish} message ClientFinish message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientFinish.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientFinish message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientFinish.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.HandshakeMessage.ClientFinish();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message["static"] = reader.bytes();
                            break;
                        }
                    case 2: {
                            message.payload = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.extendedCiphertext = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.paddedBytes = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.simulateXxkemFs = reader.bool();
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
             * Decodes a ClientFinish message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientFinish.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientFinish message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientFinish.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                if (message.paddedBytes != null && message.hasOwnProperty("paddedBytes")) {
                    properties._paddedBytes = 1;
                    if (!(message.paddedBytes && typeof message.paddedBytes.length === "number" || $util.isString(message.paddedBytes)))
                        return "paddedBytes: buffer expected";
                }
                if (message.simulateXxkemFs != null && message.hasOwnProperty("simulateXxkemFs")) {
                    properties._simulateXxkemFs = 1;
                    if (typeof message.simulateXxkemFs !== "boolean")
                        return "simulateXxkemFs: boolean expected";
                }
                return null;
            };

            /**
             * Creates a ClientFinish message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ClientFinish} ClientFinish
             */
            ClientFinish.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.HandshakeMessage.ClientFinish)
                    return object;
                var message = new $root.Wa6.HandshakeMessage.ClientFinish();
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                if (object.paddedBytes != null)
                    if (typeof object.paddedBytes === "string")
                        $util.base64.decode(object.paddedBytes, message.paddedBytes = $util.newBuffer($util.base64.length(object.paddedBytes)), 0);
                    else if (object.paddedBytes.length >= 0)
                        message.paddedBytes = object.paddedBytes;
                if (object.simulateXxkemFs != null)
                    message.simulateXxkemFs = Boolean(object.simulateXxkemFs);
                return message;
            };

            /**
             * Creates a plain object from a ClientFinish message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {Wa6.HandshakeMessage.ClientFinish} message ClientFinish
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientFinish.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
                    if (options.oneofs)
                        object._static = "static";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    if (options.oneofs)
                        object._payload = "payload";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    object.extendedCiphertext = options.bytes === String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                    if (options.oneofs)
                        object._extendedCiphertext = "extendedCiphertext";
                }
                if (message.paddedBytes != null && message.hasOwnProperty("paddedBytes")) {
                    object.paddedBytes = options.bytes === String ? $util.base64.encode(message.paddedBytes, 0, message.paddedBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.paddedBytes) : message.paddedBytes;
                    if (options.oneofs)
                        object._paddedBytes = "paddedBytes";
                }
                if (message.simulateXxkemFs != null && message.hasOwnProperty("simulateXxkemFs")) {
                    object.simulateXxkemFs = message.simulateXxkemFs;
                    if (options.oneofs)
                        object._simulateXxkemFs = "simulateXxkemFs";
                }
                return object;
            };

            /**
             * Converts this ClientFinish to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientFinish.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ClientFinish
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ClientFinish
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ClientFinish.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.HandshakeMessage.ClientFinish";
            };

            return ClientFinish;
        })();

        HandshakeMessage.ClientHello = (function() {

            /**
             * Properties of a ClientHello.
             * @memberof Wa6.HandshakeMessage
             * @interface IClientHello
             * @property {Uint8Array|null} [ephemeral] ClientHello ephemeral
             * @property {Uint8Array|null} ["static"] ClientHello static
             * @property {Uint8Array|null} [payload] ClientHello payload
             * @property {boolean|null} [useExtended] ClientHello useExtended
             * @property {Uint8Array|null} [extendedCiphertext] ClientHello extendedCiphertext
             * @property {Uint8Array|null} [paddedBytes] ClientHello paddedBytes
             * @property {boolean|null} [sendServerHelloPaddedBytes] ClientHello sendServerHelloPaddedBytes
             * @property {boolean|null} [simulateXxkemFs] ClientHello simulateXxkemFs
             * @property {Wa6.HandshakeMessage.HandshakePqMode|null} [pqMode] ClientHello pqMode
             * @property {Uint8Array|null} [extendedEphemeral] ClientHello extendedEphemeral
             */

            /**
             * Constructs a new ClientHello.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ClientHello.
             * @implements IClientHello
             * @constructor
             * @param {Wa6.HandshakeMessage.IClientHello=} [properties] Properties to set
             */
            function ClientHello(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ClientHello ephemeral.
             * @member {Uint8Array|null|undefined} ephemeral
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.ephemeral = null;

            /**
             * ClientHello static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype["static"] = null;

            /**
             * ClientHello payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.payload = null;

            /**
             * ClientHello useExtended.
             * @member {boolean|null|undefined} useExtended
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.useExtended = null;

            /**
             * ClientHello extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.extendedCiphertext = null;

            /**
             * ClientHello paddedBytes.
             * @member {Uint8Array|null|undefined} paddedBytes
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.paddedBytes = null;

            /**
             * ClientHello sendServerHelloPaddedBytes.
             * @member {boolean|null|undefined} sendServerHelloPaddedBytes
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.sendServerHelloPaddedBytes = null;

            /**
             * ClientHello simulateXxkemFs.
             * @member {boolean|null|undefined} simulateXxkemFs
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.simulateXxkemFs = null;

            /**
             * ClientHello pqMode.
             * @member {Wa6.HandshakeMessage.HandshakePqMode|null|undefined} pqMode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.pqMode = null;

            /**
             * ClientHello extendedEphemeral.
             * @member {Uint8Array|null|undefined} extendedEphemeral
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             */
            ClientHello.prototype.extendedEphemeral = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_useExtended", {
                get: $util.oneOfGetter($oneOfFields = ["useExtended"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_paddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_sendServerHelloPaddedBytes", {
                get: $util.oneOfGetter($oneOfFields = ["sendServerHelloPaddedBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_simulateXxkemFs", {
                get: $util.oneOfGetter($oneOfFields = ["simulateXxkemFs"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_pqMode", {
                get: $util.oneOfGetter($oneOfFields = ["pqMode"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ClientHello.prototype, "_extendedEphemeral", {
                get: $util.oneOfGetter($oneOfFields = ["extendedEphemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ClientHello instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.IClientHello=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello instance
             */
            ClientHello.create = function create(properties) {
                return new ClientHello(properties);
            };

            /**
             * Encodes the specified ClientHello message. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientHello.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ephemeral != null && Object.hasOwnProperty.call(message, "ephemeral"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
                if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                if (message.useExtended != null && Object.hasOwnProperty.call(message, "useExtended"))
                    writer.uint32(/* id 4, wireType 0 =*/32).bool(message.useExtended);
                if (message.extendedCiphertext != null && Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.extendedCiphertext);
                if (message.paddedBytes != null && Object.hasOwnProperty.call(message, "paddedBytes"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.paddedBytes);
                if (message.sendServerHelloPaddedBytes != null && Object.hasOwnProperty.call(message, "sendServerHelloPaddedBytes"))
                    writer.uint32(/* id 7, wireType 0 =*/56).bool(message.sendServerHelloPaddedBytes);
                if (message.simulateXxkemFs != null && Object.hasOwnProperty.call(message, "simulateXxkemFs"))
                    writer.uint32(/* id 8, wireType 0 =*/64).bool(message.simulateXxkemFs);
                if (message.pqMode != null && Object.hasOwnProperty.call(message, "pqMode"))
                    writer.uint32(/* id 9, wireType 0 =*/72).int32(message.pqMode);
                if (message.extendedEphemeral != null && Object.hasOwnProperty.call(message, "extendedEphemeral"))
                    writer.uint32(/* id 10, wireType 2 =*/82).bytes(message.extendedEphemeral);
                return writer;
            };

            /**
             * Encodes the specified ClientHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ClientHello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.IClientHello} message ClientHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ClientHello.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ClientHello message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientHello.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.HandshakeMessage.ClientHello();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ephemeral = reader.bytes();
                            break;
                        }
                    case 2: {
                            message["static"] = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.payload = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.useExtended = reader.bool();
                            break;
                        }
                    case 5: {
                            message.extendedCiphertext = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.paddedBytes = reader.bytes();
                            break;
                        }
                    case 7: {
                            message.sendServerHelloPaddedBytes = reader.bool();
                            break;
                        }
                    case 8: {
                            message.simulateXxkemFs = reader.bool();
                            break;
                        }
                    case 9: {
                            message.pqMode = reader.int32();
                            break;
                        }
                    case 10: {
                            message.extendedEphemeral = reader.bytes();
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
             * Decodes a ClientHello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ClientHello.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ClientHello message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ClientHello.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.ephemeral != null && message.hasOwnProperty("ephemeral")) {
                    properties._ephemeral = 1;
                    if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                        return "ephemeral: buffer expected";
                }
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.useExtended != null && message.hasOwnProperty("useExtended")) {
                    properties._useExtended = 1;
                    if (typeof message.useExtended !== "boolean")
                        return "useExtended: boolean expected";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                if (message.paddedBytes != null && message.hasOwnProperty("paddedBytes")) {
                    properties._paddedBytes = 1;
                    if (!(message.paddedBytes && typeof message.paddedBytes.length === "number" || $util.isString(message.paddedBytes)))
                        return "paddedBytes: buffer expected";
                }
                if (message.sendServerHelloPaddedBytes != null && message.hasOwnProperty("sendServerHelloPaddedBytes")) {
                    properties._sendServerHelloPaddedBytes = 1;
                    if (typeof message.sendServerHelloPaddedBytes !== "boolean")
                        return "sendServerHelloPaddedBytes: boolean expected";
                }
                if (message.simulateXxkemFs != null && message.hasOwnProperty("simulateXxkemFs")) {
                    properties._simulateXxkemFs = 1;
                    if (typeof message.simulateXxkemFs !== "boolean")
                        return "simulateXxkemFs: boolean expected";
                }
                if (message.pqMode != null && message.hasOwnProperty("pqMode")) {
                    properties._pqMode = 1;
                    switch (message.pqMode) {
                    default:
                        return "pqMode: enum value expected";
                    case 0:
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                        break;
                    }
                }
                if (message.extendedEphemeral != null && message.hasOwnProperty("extendedEphemeral")) {
                    properties._extendedEphemeral = 1;
                    if (!(message.extendedEphemeral && typeof message.extendedEphemeral.length === "number" || $util.isString(message.extendedEphemeral)))
                        return "extendedEphemeral: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ClientHello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ClientHello} ClientHello
             */
            ClientHello.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.HandshakeMessage.ClientHello)
                    return object;
                var message = new $root.Wa6.HandshakeMessage.ClientHello();
                if (object.ephemeral != null)
                    if (typeof object.ephemeral === "string")
                        $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                    else if (object.ephemeral.length >= 0)
                        message.ephemeral = object.ephemeral;
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.useExtended != null)
                    message.useExtended = Boolean(object.useExtended);
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                if (object.paddedBytes != null)
                    if (typeof object.paddedBytes === "string")
                        $util.base64.decode(object.paddedBytes, message.paddedBytes = $util.newBuffer($util.base64.length(object.paddedBytes)), 0);
                    else if (object.paddedBytes.length >= 0)
                        message.paddedBytes = object.paddedBytes;
                if (object.sendServerHelloPaddedBytes != null)
                    message.sendServerHelloPaddedBytes = Boolean(object.sendServerHelloPaddedBytes);
                if (object.simulateXxkemFs != null)
                    message.simulateXxkemFs = Boolean(object.simulateXxkemFs);
                switch (object.pqMode) {
                default:
                    if (typeof object.pqMode === "number") {
                        message.pqMode = object.pqMode;
                        break;
                    }
                    break;
                case "HANDSHAKE_PQ_MODE_UNKNOWN":
                case 0:
                    message.pqMode = 0;
                    break;
                case "XXKEM":
                case 1:
                    message.pqMode = 1;
                    break;
                case "XXKEM_FS":
                case 2:
                    message.pqMode = 2;
                    break;
                case "WA_CLASSICAL":
                case 3:
                    message.pqMode = 3;
                    break;
                case "WA_PQ":
                case 4:
                    message.pqMode = 4;
                    break;
                case "IKKEM":
                case 5:
                    message.pqMode = 5;
                    break;
                case "IKKEM_FS":
                case 6:
                    message.pqMode = 6;
                    break;
                case "XXKEM_2":
                case 7:
                    message.pqMode = 7;
                    break;
                case "IKKEM_2":
                case 8:
                    message.pqMode = 8;
                    break;
                }
                if (object.extendedEphemeral != null)
                    if (typeof object.extendedEphemeral === "string")
                        $util.base64.decode(object.extendedEphemeral, message.extendedEphemeral = $util.newBuffer($util.base64.length(object.extendedEphemeral)), 0);
                    else if (object.extendedEphemeral.length >= 0)
                        message.extendedEphemeral = object.extendedEphemeral;
                return message;
            };

            /**
             * Creates a plain object from a ClientHello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {Wa6.HandshakeMessage.ClientHello} message ClientHello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ClientHello.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.ephemeral != null && message.hasOwnProperty("ephemeral")) {
                    object.ephemeral = options.bytes === String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
                    if (options.oneofs)
                        object._ephemeral = "ephemeral";
                }
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
                    if (options.oneofs)
                        object._static = "static";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    if (options.oneofs)
                        object._payload = "payload";
                }
                if (message.useExtended != null && message.hasOwnProperty("useExtended")) {
                    object.useExtended = message.useExtended;
                    if (options.oneofs)
                        object._useExtended = "useExtended";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    object.extendedCiphertext = options.bytes === String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                    if (options.oneofs)
                        object._extendedCiphertext = "extendedCiphertext";
                }
                if (message.paddedBytes != null && message.hasOwnProperty("paddedBytes")) {
                    object.paddedBytes = options.bytes === String ? $util.base64.encode(message.paddedBytes, 0, message.paddedBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.paddedBytes) : message.paddedBytes;
                    if (options.oneofs)
                        object._paddedBytes = "paddedBytes";
                }
                if (message.sendServerHelloPaddedBytes != null && message.hasOwnProperty("sendServerHelloPaddedBytes")) {
                    object.sendServerHelloPaddedBytes = message.sendServerHelloPaddedBytes;
                    if (options.oneofs)
                        object._sendServerHelloPaddedBytes = "sendServerHelloPaddedBytes";
                }
                if (message.simulateXxkemFs != null && message.hasOwnProperty("simulateXxkemFs")) {
                    object.simulateXxkemFs = message.simulateXxkemFs;
                    if (options.oneofs)
                        object._simulateXxkemFs = "simulateXxkemFs";
                }
                if (message.pqMode != null && message.hasOwnProperty("pqMode")) {
                    object.pqMode = options.enums === String ? $root.Wa6.HandshakeMessage.HandshakePqMode[message.pqMode] === undefined ? message.pqMode : $root.Wa6.HandshakeMessage.HandshakePqMode[message.pqMode] : message.pqMode;
                    if (options.oneofs)
                        object._pqMode = "pqMode";
                }
                if (message.extendedEphemeral != null && message.hasOwnProperty("extendedEphemeral")) {
                    object.extendedEphemeral = options.bytes === String ? $util.base64.encode(message.extendedEphemeral, 0, message.extendedEphemeral.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendedEphemeral) : message.extendedEphemeral;
                    if (options.oneofs)
                        object._extendedEphemeral = "extendedEphemeral";
                }
                return object;
            };

            /**
             * Converts this ClientHello to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ClientHello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ClientHello
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ClientHello
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ClientHello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.HandshakeMessage.ClientHello";
            };

            return ClientHello;
        })();

        /**
         * HandshakePqMode enum.
         * @name Wa6.HandshakeMessage.HandshakePqMode
         * @enum {number}
         * @property {number} HANDSHAKE_PQ_MODE_UNKNOWN=0 HANDSHAKE_PQ_MODE_UNKNOWN value
         * @property {number} XXKEM=1 XXKEM value
         * @property {number} XXKEM_FS=2 XXKEM_FS value
         * @property {number} WA_CLASSICAL=3 WA_CLASSICAL value
         * @property {number} WA_PQ=4 WA_PQ value
         * @property {number} IKKEM=5 IKKEM value
         * @property {number} IKKEM_FS=6 IKKEM_FS value
         * @property {number} XXKEM_2=7 XXKEM_2 value
         * @property {number} IKKEM_2=8 IKKEM_2 value
         */
        HandshakeMessage.HandshakePqMode = (function() {
            var valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "HANDSHAKE_PQ_MODE_UNKNOWN"] = 0;
            values[valuesById[1] = "XXKEM"] = 1;
            values[valuesById[2] = "XXKEM_FS"] = 2;
            values[valuesById[3] = "WA_CLASSICAL"] = 3;
            values[valuesById[4] = "WA_PQ"] = 4;
            values[valuesById[5] = "IKKEM"] = 5;
            values[valuesById[6] = "IKKEM_FS"] = 6;
            values[valuesById[7] = "XXKEM_2"] = 7;
            values[valuesById[8] = "IKKEM_2"] = 8;
            return values;
        })();

        HandshakeMessage.ServerHello = (function() {

            /**
             * Properties of a ServerHello.
             * @memberof Wa6.HandshakeMessage
             * @interface IServerHello
             * @property {Uint8Array|null} [ephemeral] ServerHello ephemeral
             * @property {Uint8Array|null} ["static"] ServerHello static
             * @property {Uint8Array|null} [payload] ServerHello payload
             * @property {Uint8Array|null} [extendedStatic] ServerHello extendedStatic
             * @property {Uint8Array|null} [paddingBytes] ServerHello paddingBytes
             * @property {Uint8Array|null} [extendedCiphertext] ServerHello extendedCiphertext
             */

            /**
             * Constructs a new ServerHello.
             * @memberof Wa6.HandshakeMessage
             * @classdesc Represents a ServerHello.
             * @implements IServerHello
             * @constructor
             * @param {Wa6.HandshakeMessage.IServerHello=} [properties] Properties to set
             */
            function ServerHello(properties) {
                if (properties)
                    for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * ServerHello ephemeral.
             * @member {Uint8Array|null|undefined} ephemeral
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.ephemeral = null;

            /**
             * ServerHello static.
             * @member {Uint8Array|null|undefined} static
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype["static"] = null;

            /**
             * ServerHello payload.
             * @member {Uint8Array|null|undefined} payload
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.payload = null;

            /**
             * ServerHello extendedStatic.
             * @member {Uint8Array|null|undefined} extendedStatic
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.extendedStatic = null;

            /**
             * ServerHello paddingBytes.
             * @member {Uint8Array|null|undefined} paddingBytes
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.paddingBytes = null;

            /**
             * ServerHello extendedCiphertext.
             * @member {Uint8Array|null|undefined} extendedCiphertext
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             */
            ServerHello.prototype.extendedCiphertext = null;

            // OneOf field names bound to virtual getters and setters
            var $oneOfFields;

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_ephemeral", {
                get: $util.oneOfGetter($oneOfFields = ["ephemeral"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_static", {
                get: $util.oneOfGetter($oneOfFields = ["static"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_payload", {
                get: $util.oneOfGetter($oneOfFields = ["payload"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_extendedStatic", {
                get: $util.oneOfGetter($oneOfFields = ["extendedStatic"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_paddingBytes", {
                get: $util.oneOfGetter($oneOfFields = ["paddingBytes"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            // Virtual OneOf for proto3 optional field
            Object.defineProperty(ServerHello.prototype, "_extendedCiphertext", {
                get: $util.oneOfGetter($oneOfFields = ["extendedCiphertext"]),
                set: $util.oneOfSetter($oneOfFields)
            });

            /**
             * Creates a new ServerHello instance using the specified properties.
             * @function create
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.IServerHello=} [properties] Properties to set
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello instance
             */
            ServerHello.create = function create(properties) {
                return new ServerHello(properties);
            };

            /**
             * Encodes the specified ServerHello message. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @function encode
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerHello.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.ephemeral != null && Object.hasOwnProperty.call(message, "ephemeral"))
                    writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.ephemeral);
                if (message["static"] != null && Object.hasOwnProperty.call(message, "static"))
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message["static"]);
                if (message.payload != null && Object.hasOwnProperty.call(message, "payload"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.payload);
                if (message.extendedStatic != null && Object.hasOwnProperty.call(message, "extendedStatic"))
                    writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.extendedStatic);
                if (message.paddingBytes != null && Object.hasOwnProperty.call(message, "paddingBytes"))
                    writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.paddingBytes);
                if (message.extendedCiphertext != null && Object.hasOwnProperty.call(message, "extendedCiphertext"))
                    writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.extendedCiphertext);
                return writer;
            };

            /**
             * Encodes the specified ServerHello message, length delimited. Does not implicitly {@link Wa6.HandshakeMessage.ServerHello.verify|verify} messages.
             * @function encodeDelimited
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.IServerHello} message ServerHello message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            ServerHello.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a ServerHello message from the specified reader or buffer.
             * @function decode
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerHello.decode = function decode(reader, length, error) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Wa6.HandshakeMessage.ServerHello();
                while (reader.pos < end) {
                    var tag = reader.uint32();
                    if (tag === error)
                        break;
                    switch (tag >>> 3) {
                    case 1: {
                            message.ephemeral = reader.bytes();
                            break;
                        }
                    case 2: {
                            message["static"] = reader.bytes();
                            break;
                        }
                    case 3: {
                            message.payload = reader.bytes();
                            break;
                        }
                    case 4: {
                            message.extendedStatic = reader.bytes();
                            break;
                        }
                    case 5: {
                            message.paddingBytes = reader.bytes();
                            break;
                        }
                    case 6: {
                            message.extendedCiphertext = reader.bytes();
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
             * Decodes a ServerHello message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            ServerHello.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a ServerHello message.
             * @function verify
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            ServerHello.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                var properties = {};
                if (message.ephemeral != null && message.hasOwnProperty("ephemeral")) {
                    properties._ephemeral = 1;
                    if (!(message.ephemeral && typeof message.ephemeral.length === "number" || $util.isString(message.ephemeral)))
                        return "ephemeral: buffer expected";
                }
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    properties._static = 1;
                    if (!(message["static"] && typeof message["static"].length === "number" || $util.isString(message["static"])))
                        return "static: buffer expected";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    properties._payload = 1;
                    if (!(message.payload && typeof message.payload.length === "number" || $util.isString(message.payload)))
                        return "payload: buffer expected";
                }
                if (message.extendedStatic != null && message.hasOwnProperty("extendedStatic")) {
                    properties._extendedStatic = 1;
                    if (!(message.extendedStatic && typeof message.extendedStatic.length === "number" || $util.isString(message.extendedStatic)))
                        return "extendedStatic: buffer expected";
                }
                if (message.paddingBytes != null && message.hasOwnProperty("paddingBytes")) {
                    properties._paddingBytes = 1;
                    if (!(message.paddingBytes && typeof message.paddingBytes.length === "number" || $util.isString(message.paddingBytes)))
                        return "paddingBytes: buffer expected";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    properties._extendedCiphertext = 1;
                    if (!(message.extendedCiphertext && typeof message.extendedCiphertext.length === "number" || $util.isString(message.extendedCiphertext)))
                        return "extendedCiphertext: buffer expected";
                }
                return null;
            };

            /**
             * Creates a ServerHello message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {Wa6.HandshakeMessage.ServerHello} ServerHello
             */
            ServerHello.fromObject = function fromObject(object) {
                if (object instanceof $root.Wa6.HandshakeMessage.ServerHello)
                    return object;
                var message = new $root.Wa6.HandshakeMessage.ServerHello();
                if (object.ephemeral != null)
                    if (typeof object.ephemeral === "string")
                        $util.base64.decode(object.ephemeral, message.ephemeral = $util.newBuffer($util.base64.length(object.ephemeral)), 0);
                    else if (object.ephemeral.length >= 0)
                        message.ephemeral = object.ephemeral;
                if (object["static"] != null)
                    if (typeof object["static"] === "string")
                        $util.base64.decode(object["static"], message["static"] = $util.newBuffer($util.base64.length(object["static"])), 0);
                    else if (object["static"].length >= 0)
                        message["static"] = object["static"];
                if (object.payload != null)
                    if (typeof object.payload === "string")
                        $util.base64.decode(object.payload, message.payload = $util.newBuffer($util.base64.length(object.payload)), 0);
                    else if (object.payload.length >= 0)
                        message.payload = object.payload;
                if (object.extendedStatic != null)
                    if (typeof object.extendedStatic === "string")
                        $util.base64.decode(object.extendedStatic, message.extendedStatic = $util.newBuffer($util.base64.length(object.extendedStatic)), 0);
                    else if (object.extendedStatic.length >= 0)
                        message.extendedStatic = object.extendedStatic;
                if (object.paddingBytes != null)
                    if (typeof object.paddingBytes === "string")
                        $util.base64.decode(object.paddingBytes, message.paddingBytes = $util.newBuffer($util.base64.length(object.paddingBytes)), 0);
                    else if (object.paddingBytes.length >= 0)
                        message.paddingBytes = object.paddingBytes;
                if (object.extendedCiphertext != null)
                    if (typeof object.extendedCiphertext === "string")
                        $util.base64.decode(object.extendedCiphertext, message.extendedCiphertext = $util.newBuffer($util.base64.length(object.extendedCiphertext)), 0);
                    else if (object.extendedCiphertext.length >= 0)
                        message.extendedCiphertext = object.extendedCiphertext;
                return message;
            };

            /**
             * Creates a plain object from a ServerHello message. Also converts values to other types if specified.
             * @function toObject
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {Wa6.HandshakeMessage.ServerHello} message ServerHello
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            ServerHello.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                var object = {};
                if (message.ephemeral != null && message.hasOwnProperty("ephemeral")) {
                    object.ephemeral = options.bytes === String ? $util.base64.encode(message.ephemeral, 0, message.ephemeral.length) : options.bytes === Array ? Array.prototype.slice.call(message.ephemeral) : message.ephemeral;
                    if (options.oneofs)
                        object._ephemeral = "ephemeral";
                }
                if (message["static"] != null && message.hasOwnProperty("static")) {
                    object["static"] = options.bytes === String ? $util.base64.encode(message["static"], 0, message["static"].length) : options.bytes === Array ? Array.prototype.slice.call(message["static"]) : message["static"];
                    if (options.oneofs)
                        object._static = "static";
                }
                if (message.payload != null && message.hasOwnProperty("payload")) {
                    object.payload = options.bytes === String ? $util.base64.encode(message.payload, 0, message.payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.payload) : message.payload;
                    if (options.oneofs)
                        object._payload = "payload";
                }
                if (message.extendedStatic != null && message.hasOwnProperty("extendedStatic")) {
                    object.extendedStatic = options.bytes === String ? $util.base64.encode(message.extendedStatic, 0, message.extendedStatic.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendedStatic) : message.extendedStatic;
                    if (options.oneofs)
                        object._extendedStatic = "extendedStatic";
                }
                if (message.paddingBytes != null && message.hasOwnProperty("paddingBytes")) {
                    object.paddingBytes = options.bytes === String ? $util.base64.encode(message.paddingBytes, 0, message.paddingBytes.length) : options.bytes === Array ? Array.prototype.slice.call(message.paddingBytes) : message.paddingBytes;
                    if (options.oneofs)
                        object._paddingBytes = "paddingBytes";
                }
                if (message.extendedCiphertext != null && message.hasOwnProperty("extendedCiphertext")) {
                    object.extendedCiphertext = options.bytes === String ? $util.base64.encode(message.extendedCiphertext, 0, message.extendedCiphertext.length) : options.bytes === Array ? Array.prototype.slice.call(message.extendedCiphertext) : message.extendedCiphertext;
                    if (options.oneofs)
                        object._extendedCiphertext = "extendedCiphertext";
                }
                return object;
            };

            /**
             * Converts this ServerHello to JSON.
             * @function toJSON
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            ServerHello.prototype.toJSON = function toJSON() {
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            /**
             * Gets the default type url for ServerHello
             * @function getTypeUrl
             * @memberof Wa6.HandshakeMessage.ServerHello
             * @static
             * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns {string} The default type url
             */
            ServerHello.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
                if (typeUrlPrefix === undefined) {
                    typeUrlPrefix = "type.googleapis.com";
                }
                return typeUrlPrefix + "/Wa6.HandshakeMessage.ServerHello";
            };

            return ServerHello;
        })();

        return HandshakeMessage;
    })();

    return Wa6;
})();

module.exports = $root;
