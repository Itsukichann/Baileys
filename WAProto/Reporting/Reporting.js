/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Reporting = (function() {

    /**
     * Namespace Reporting.
     * @exports Reporting
     * @namespace
     */
    var Reporting = {};

    Reporting.Field = (function() {

        /**
         * Properties of a Field.
         * @memberof Reporting
         * @interface IField
         * @property {number|null} [minVersion] Field minVersion
         * @property {number|null} [maxVersion] Field maxVersion
         * @property {number|null} [notReportableMinVersion] Field notReportableMinVersion
         * @property {boolean|null} [isMessage] Field isMessage
         * @property {Object.<string,Reporting.IField>|null} [subfield] Field subfield
         */

        /**
         * Constructs a new Field.
         * @memberof Reporting
         * @classdesc Represents a Field.
         * @implements IField
         * @constructor
         * @param {Reporting.IField=} [properties] Properties to set
         */
        function Field(properties) {
            this.subfield = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Field minVersion.
         * @member {number|null|undefined} minVersion
         * @memberof Reporting.Field
         * @instance
         */
        Field.prototype.minVersion = null;

        /**
         * Field maxVersion.
         * @member {number|null|undefined} maxVersion
         * @memberof Reporting.Field
         * @instance
         */
        Field.prototype.maxVersion = null;

        /**
         * Field notReportableMinVersion.
         * @member {number|null|undefined} notReportableMinVersion
         * @memberof Reporting.Field
         * @instance
         */
        Field.prototype.notReportableMinVersion = null;

        /**
         * Field isMessage.
         * @member {boolean|null|undefined} isMessage
         * @memberof Reporting.Field
         * @instance
         */
        Field.prototype.isMessage = null;

        /**
         * Field subfield.
         * @member {Object.<string,Reporting.IField>} subfield
         * @memberof Reporting.Field
         * @instance
         */
        Field.prototype.subfield = $util.emptyObject;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_minVersion", {
            get: $util.oneOfGetter($oneOfFields = ["minVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_maxVersion", {
            get: $util.oneOfGetter($oneOfFields = ["maxVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_notReportableMinVersion", {
            get: $util.oneOfGetter($oneOfFields = ["notReportableMinVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Field.prototype, "_isMessage", {
            get: $util.oneOfGetter($oneOfFields = ["isMessage"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Field instance using the specified properties.
         * @function create
         * @memberof Reporting.Field
         * @static
         * @param {Reporting.IField=} [properties] Properties to set
         * @returns {Reporting.Field} Field instance
         */
        Field.create = function create(properties) {
            return new Field(properties);
        };

        /**
         * Encodes the specified Field message. Does not implicitly {@link Reporting.Field.verify|verify} messages.
         * @function encode
         * @memberof Reporting.Field
         * @static
         * @param {Reporting.IField} message Field message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Field.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minVersion != null && Object.hasOwnProperty.call(message, "minVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minVersion);
            if (message.maxVersion != null && Object.hasOwnProperty.call(message, "maxVersion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxVersion);
            if (message.notReportableMinVersion != null && Object.hasOwnProperty.call(message, "notReportableMinVersion"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.notReportableMinVersion);
            if (message.isMessage != null && Object.hasOwnProperty.call(message, "isMessage"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isMessage);
            if (message.subfield != null && Object.hasOwnProperty.call(message, "subfield"))
                for (var keys = Object.keys(message.subfield), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.Reporting.Field.encode(message.subfield[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Encodes the specified Field message, length delimited. Does not implicitly {@link Reporting.Field.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Reporting.Field
         * @static
         * @param {Reporting.IField} message Field message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Field.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Field message from the specified reader or buffer.
         * @function decode
         * @memberof Reporting.Field
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Reporting.Field} Field
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Field.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Reporting.Field(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.minVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.maxVersion = reader.uint32();
                        break;
                    }
                case 3: {
                        message.notReportableMinVersion = reader.uint32();
                        break;
                    }
                case 4: {
                        message.isMessage = reader.bool();
                        break;
                    }
                case 5: {
                        if (message.subfield === $util.emptyObject)
                            message.subfield = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.Reporting.Field.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.subfield[key] = value;
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
         * Decodes a Field message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Reporting.Field
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Reporting.Field} Field
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Field.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Field message.
         * @function verify
         * @memberof Reporting.Field
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Field.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.minVersion != null && message.hasOwnProperty("minVersion")) {
                properties._minVersion = 1;
                if (!$util.isInteger(message.minVersion))
                    return "minVersion: integer expected";
            }
            if (message.maxVersion != null && message.hasOwnProperty("maxVersion")) {
                properties._maxVersion = 1;
                if (!$util.isInteger(message.maxVersion))
                    return "maxVersion: integer expected";
            }
            if (message.notReportableMinVersion != null && message.hasOwnProperty("notReportableMinVersion")) {
                properties._notReportableMinVersion = 1;
                if (!$util.isInteger(message.notReportableMinVersion))
                    return "notReportableMinVersion: integer expected";
            }
            if (message.isMessage != null && message.hasOwnProperty("isMessage")) {
                properties._isMessage = 1;
                if (typeof message.isMessage !== "boolean")
                    return "isMessage: boolean expected";
            }
            if (message.subfield != null && message.hasOwnProperty("subfield")) {
                if (!$util.isObject(message.subfield))
                    return "subfield: object expected";
                var key = Object.keys(message.subfield);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "subfield: integer key{k:uint32} expected";
                    {
                        var error = $root.Reporting.Field.verify(message.subfield[key[i]]);
                        if (error)
                            return "subfield." + error;
                    }
                }
            }
            return null;
        };

        /**
         * Creates a Field message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Reporting.Field
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Reporting.Field} Field
         */
        Field.fromObject = function fromObject(object) {
            if (object instanceof $root.Reporting.Field)
                return object;
            var message = new $root.Reporting.Field();
            if (object.minVersion != null)
                message.minVersion = object.minVersion >>> 0;
            if (object.maxVersion != null)
                message.maxVersion = object.maxVersion >>> 0;
            if (object.notReportableMinVersion != null)
                message.notReportableMinVersion = object.notReportableMinVersion >>> 0;
            if (object.isMessage != null)
                message.isMessage = Boolean(object.isMessage);
            if (object.subfield) {
                if (typeof object.subfield !== "object")
                    throw TypeError(".Reporting.Field.subfield: object expected");
                message.subfield = {};
                for (var keys = Object.keys(object.subfield), i = 0; i < keys.length; ++i) {
                    if (typeof object.subfield[keys[i]] !== "object")
                        throw TypeError(".Reporting.Field.subfield: object expected");
                    message.subfield[keys[i]] = $root.Reporting.Field.fromObject(object.subfield[keys[i]]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a Field message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Reporting.Field
         * @static
         * @param {Reporting.Field} message Field
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Field.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.subfield = {};
            if (message.minVersion != null && message.hasOwnProperty("minVersion")) {
                object.minVersion = message.minVersion;
                if (options.oneofs)
                    object._minVersion = "minVersion";
            }
            if (message.maxVersion != null && message.hasOwnProperty("maxVersion")) {
                object.maxVersion = message.maxVersion;
                if (options.oneofs)
                    object._maxVersion = "maxVersion";
            }
            if (message.notReportableMinVersion != null && message.hasOwnProperty("notReportableMinVersion")) {
                object.notReportableMinVersion = message.notReportableMinVersion;
                if (options.oneofs)
                    object._notReportableMinVersion = "notReportableMinVersion";
            }
            if (message.isMessage != null && message.hasOwnProperty("isMessage")) {
                object.isMessage = message.isMessage;
                if (options.oneofs)
                    object._isMessage = "isMessage";
            }
            var keys2;
            if (message.subfield && (keys2 = Object.keys(message.subfield)).length) {
                object.subfield = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.subfield[keys2[j]] = $root.Reporting.Field.toObject(message.subfield[keys2[j]], options);
            }
            return object;
        };

        /**
         * Converts this Field to JSON.
         * @function toJSON
         * @memberof Reporting.Field
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Field.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Field
         * @function getTypeUrl
         * @memberof Reporting.Field
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Field.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Reporting.Field";
        };

        return Field;
    })();

    Reporting.Config = (function() {

        /**
         * Properties of a Config.
         * @memberof Reporting
         * @interface IConfig
         * @property {Object.<string,Reporting.IField>|null} [field] Config field
         * @property {number|null} [version] Config version
         */

        /**
         * Constructs a new Config.
         * @memberof Reporting
         * @classdesc Represents a Config.
         * @implements IConfig
         * @constructor
         * @param {Reporting.IConfig=} [properties] Properties to set
         */
        function Config(properties) {
            this.field = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Config field.
         * @member {Object.<string,Reporting.IField>} field
         * @memberof Reporting.Config
         * @instance
         */
        Config.prototype.field = $util.emptyObject;

        /**
         * Config version.
         * @member {number|null|undefined} version
         * @memberof Reporting.Config
         * @instance
         */
        Config.prototype.version = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Config.prototype, "_version", {
            get: $util.oneOfGetter($oneOfFields = ["version"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Config instance using the specified properties.
         * @function create
         * @memberof Reporting.Config
         * @static
         * @param {Reporting.IConfig=} [properties] Properties to set
         * @returns {Reporting.Config} Config instance
         */
        Config.create = function create(properties) {
            return new Config(properties);
        };

        /**
         * Encodes the specified Config message. Does not implicitly {@link Reporting.Config.verify|verify} messages.
         * @function encode
         * @memberof Reporting.Config
         * @static
         * @param {Reporting.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.field != null && Object.hasOwnProperty.call(message, "field"))
                for (var keys = Object.keys(message.field), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).uint32(keys[i]);
                    $root.Reporting.Field.encode(message.field[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
            return writer;
        };

        /**
         * Encodes the specified Config message, length delimited. Does not implicitly {@link Reporting.Config.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Reporting.Config
         * @static
         * @param {Reporting.IConfig} message Config message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Config.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Config message from the specified reader or buffer.
         * @function decode
         * @memberof Reporting.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Reporting.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Reporting.Config(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        if (message.field === $util.emptyObject)
                            message.field = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.uint32();
                                break;
                            case 2:
                                value = $root.Reporting.Field.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.field[key] = value;
                        break;
                    }
                case 2: {
                        message.version = reader.uint32();
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
         * Decodes a Config message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Reporting.Config
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Reporting.Config} Config
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Config.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Config message.
         * @function verify
         * @memberof Reporting.Config
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Config.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.field != null && message.hasOwnProperty("field")) {
                if (!$util.isObject(message.field))
                    return "field: object expected";
                var key = Object.keys(message.field);
                for (var i = 0; i < key.length; ++i) {
                    if (!$util.key32Re.test(key[i]))
                        return "field: integer key{k:uint32} expected";
                    {
                        var error = $root.Reporting.Field.verify(message.field[key[i]]);
                        if (error)
                            return "field." + error;
                    }
                }
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                properties._version = 1;
                if (!$util.isInteger(message.version))
                    return "version: integer expected";
            }
            return null;
        };

        /**
         * Creates a Config message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Reporting.Config
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Reporting.Config} Config
         */
        Config.fromObject = function fromObject(object) {
            if (object instanceof $root.Reporting.Config)
                return object;
            var message = new $root.Reporting.Config();
            if (object.field) {
                if (typeof object.field !== "object")
                    throw TypeError(".Reporting.Config.field: object expected");
                message.field = {};
                for (var keys = Object.keys(object.field), i = 0; i < keys.length; ++i) {
                    if (typeof object.field[keys[i]] !== "object")
                        throw TypeError(".Reporting.Config.field: object expected");
                    message.field[keys[i]] = $root.Reporting.Field.fromObject(object.field[keys[i]]);
                }
            }
            if (object.version != null)
                message.version = object.version >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a Config message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Reporting.Config
         * @static
         * @param {Reporting.Config} message Config
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Config.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.objects || options.defaults)
                object.field = {};
            var keys2;
            if (message.field && (keys2 = Object.keys(message.field)).length) {
                object.field = {};
                for (var j = 0; j < keys2.length; ++j)
                    object.field[keys2[j]] = $root.Reporting.Field.toObject(message.field[keys2[j]], options);
            }
            if (message.version != null && message.hasOwnProperty("version")) {
                object.version = message.version;
                if (options.oneofs)
                    object._version = "version";
            }
            return object;
        };

        /**
         * Converts this Config to JSON.
         * @function toJSON
         * @memberof Reporting.Config
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Config.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Config
         * @function getTypeUrl
         * @memberof Reporting.Config
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Config.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Reporting.Config";
        };

        return Config;
    })();

    Reporting.Reportable = (function() {

        /**
         * Properties of a Reportable.
         * @memberof Reporting
         * @interface IReportable
         * @property {number|null} [minVersion] Reportable minVersion
         * @property {number|null} [maxVersion] Reportable maxVersion
         * @property {number|null} [notReportableMinVersion] Reportable notReportableMinVersion
         * @property {boolean|null} [never] Reportable never
         */

        /**
         * Constructs a new Reportable.
         * @memberof Reporting
         * @classdesc Represents a Reportable.
         * @implements IReportable
         * @constructor
         * @param {Reporting.IReportable=} [properties] Properties to set
         */
        function Reportable(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reportable minVersion.
         * @member {number|null|undefined} minVersion
         * @memberof Reporting.Reportable
         * @instance
         */
        Reportable.prototype.minVersion = null;

        /**
         * Reportable maxVersion.
         * @member {number|null|undefined} maxVersion
         * @memberof Reporting.Reportable
         * @instance
         */
        Reportable.prototype.maxVersion = null;

        /**
         * Reportable notReportableMinVersion.
         * @member {number|null|undefined} notReportableMinVersion
         * @memberof Reporting.Reportable
         * @instance
         */
        Reportable.prototype.notReportableMinVersion = null;

        /**
         * Reportable never.
         * @member {boolean|null|undefined} never
         * @memberof Reporting.Reportable
         * @instance
         */
        Reportable.prototype.never = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_minVersion", {
            get: $util.oneOfGetter($oneOfFields = ["minVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_maxVersion", {
            get: $util.oneOfGetter($oneOfFields = ["maxVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_notReportableMinVersion", {
            get: $util.oneOfGetter($oneOfFields = ["notReportableMinVersion"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(Reportable.prototype, "_never", {
            get: $util.oneOfGetter($oneOfFields = ["never"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new Reportable instance using the specified properties.
         * @function create
         * @memberof Reporting.Reportable
         * @static
         * @param {Reporting.IReportable=} [properties] Properties to set
         * @returns {Reporting.Reportable} Reportable instance
         */
        Reportable.create = function create(properties) {
            return new Reportable(properties);
        };

        /**
         * Encodes the specified Reportable message. Does not implicitly {@link Reporting.Reportable.verify|verify} messages.
         * @function encode
         * @memberof Reporting.Reportable
         * @static
         * @param {Reporting.IReportable} message Reportable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reportable.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.minVersion != null && Object.hasOwnProperty.call(message, "minVersion"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.minVersion);
            if (message.maxVersion != null && Object.hasOwnProperty.call(message, "maxVersion"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxVersion);
            if (message.notReportableMinVersion != null && Object.hasOwnProperty.call(message, "notReportableMinVersion"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.notReportableMinVersion);
            if (message.never != null && Object.hasOwnProperty.call(message, "never"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.never);
            return writer;
        };

        /**
         * Encodes the specified Reportable message, length delimited. Does not implicitly {@link Reporting.Reportable.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Reporting.Reportable
         * @static
         * @param {Reporting.IReportable} message Reportable message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reportable.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reportable message from the specified reader or buffer.
         * @function decode
         * @memberof Reporting.Reportable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Reporting.Reportable} Reportable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reportable.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Reporting.Reportable();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.minVersion = reader.uint32();
                        break;
                    }
                case 2: {
                        message.maxVersion = reader.uint32();
                        break;
                    }
                case 3: {
                        message.notReportableMinVersion = reader.uint32();
                        break;
                    }
                case 4: {
                        message.never = reader.bool();
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
         * Decodes a Reportable message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Reporting.Reportable
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Reporting.Reportable} Reportable
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reportable.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reportable message.
         * @function verify
         * @memberof Reporting.Reportable
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reportable.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.minVersion != null && message.hasOwnProperty("minVersion")) {
                properties._minVersion = 1;
                if (!$util.isInteger(message.minVersion))
                    return "minVersion: integer expected";
            }
            if (message.maxVersion != null && message.hasOwnProperty("maxVersion")) {
                properties._maxVersion = 1;
                if (!$util.isInteger(message.maxVersion))
                    return "maxVersion: integer expected";
            }
            if (message.notReportableMinVersion != null && message.hasOwnProperty("notReportableMinVersion")) {
                properties._notReportableMinVersion = 1;
                if (!$util.isInteger(message.notReportableMinVersion))
                    return "notReportableMinVersion: integer expected";
            }
            if (message.never != null && message.hasOwnProperty("never")) {
                properties._never = 1;
                if (typeof message.never !== "boolean")
                    return "never: boolean expected";
            }
            return null;
        };

        /**
         * Creates a Reportable message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Reporting.Reportable
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Reporting.Reportable} Reportable
         */
        Reportable.fromObject = function fromObject(object) {
            if (object instanceof $root.Reporting.Reportable)
                return object;
            var message = new $root.Reporting.Reportable();
            if (object.minVersion != null)
                message.minVersion = object.minVersion >>> 0;
            if (object.maxVersion != null)
                message.maxVersion = object.maxVersion >>> 0;
            if (object.notReportableMinVersion != null)
                message.notReportableMinVersion = object.notReportableMinVersion >>> 0;
            if (object.never != null)
                message.never = Boolean(object.never);
            return message;
        };

        /**
         * Creates a plain object from a Reportable message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Reporting.Reportable
         * @static
         * @param {Reporting.Reportable} message Reportable
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reportable.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.minVersion != null && message.hasOwnProperty("minVersion")) {
                object.minVersion = message.minVersion;
                if (options.oneofs)
                    object._minVersion = "minVersion";
            }
            if (message.maxVersion != null && message.hasOwnProperty("maxVersion")) {
                object.maxVersion = message.maxVersion;
                if (options.oneofs)
                    object._maxVersion = "maxVersion";
            }
            if (message.notReportableMinVersion != null && message.hasOwnProperty("notReportableMinVersion")) {
                object.notReportableMinVersion = message.notReportableMinVersion;
                if (options.oneofs)
                    object._notReportableMinVersion = "notReportableMinVersion";
            }
            if (message.never != null && message.hasOwnProperty("never")) {
                object.never = message.never;
                if (options.oneofs)
                    object._never = "never";
            }
            return object;
        };

        /**
         * Converts this Reportable to JSON.
         * @function toJSON
         * @memberof Reporting.Reportable
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reportable.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Reportable
         * @function getTypeUrl
         * @memberof Reporting.Reportable
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Reportable.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Reporting.Reportable";
        };

        return Reportable;
    })();

    return Reporting;
})();

module.exports = $root;
