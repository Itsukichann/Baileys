/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
