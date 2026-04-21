/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.Ephemeral = (function() {

    /**
     * Namespace Ephemeral.
     * @exports Ephemeral
     * @namespace
     */
    var Ephemeral = {};

    Ephemeral.EphemeralSetting = (function() {

        /**
         * Properties of an EphemeralSetting.
         * @memberof Ephemeral
         * @interface IEphemeralSetting
         * @property {number|null} [duration] EphemeralSetting duration
         * @property {number|Long|null} [timestamp] EphemeralSetting timestamp
         */

        /**
         * Constructs a new EphemeralSetting.
         * @memberof Ephemeral
         * @classdesc Represents an EphemeralSetting.
         * @implements IEphemeralSetting
         * @constructor
         * @param {Ephemeral.IEphemeralSetting=} [properties] Properties to set
         */
        function EphemeralSetting(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EphemeralSetting duration.
         * @member {number|null|undefined} duration
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         */
        EphemeralSetting.prototype.duration = null;

        /**
         * EphemeralSetting timestamp.
         * @member {number|Long|null|undefined} timestamp
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         */
        EphemeralSetting.prototype.timestamp = null;

        // OneOf field names bound to virtual getters and setters
        var $oneOfFields;

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EphemeralSetting.prototype, "_duration", {
            get: $util.oneOfGetter($oneOfFields = ["duration"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        // Virtual OneOf for proto3 optional field
        Object.defineProperty(EphemeralSetting.prototype, "_timestamp", {
            get: $util.oneOfGetter($oneOfFields = ["timestamp"]),
            set: $util.oneOfSetter($oneOfFields)
        });

        /**
         * Creates a new EphemeralSetting instance using the specified properties.
         * @function create
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.IEphemeralSetting=} [properties] Properties to set
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting instance
         */
        EphemeralSetting.create = function create(properties) {
            return new EphemeralSetting(properties);
        };

        /**
         * Encodes the specified EphemeralSetting message. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @function encode
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.IEphemeralSetting} message EphemeralSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EphemeralSetting.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 1, wireType 5 =*/13).sfixed32(message.duration);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 2, wireType 1 =*/17).sfixed64(message.timestamp);
            return writer;
        };

        /**
         * Encodes the specified EphemeralSetting message, length delimited. Does not implicitly {@link Ephemeral.EphemeralSetting.verify|verify} messages.
         * @function encodeDelimited
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.IEphemeralSetting} message EphemeralSetting message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EphemeralSetting.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EphemeralSetting message from the specified reader or buffer.
         * @function decode
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EphemeralSetting.decode = function decode(reader, length, error) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.Ephemeral.EphemeralSetting();
            while (reader.pos < end) {
                var tag = reader.uint32();
                if (tag === error)
                    break;
                switch (tag >>> 3) {
                case 1: {
                        message.duration = reader.sfixed32();
                        break;
                    }
                case 2: {
                        message.timestamp = reader.sfixed64();
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
         * Decodes an EphemeralSetting message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EphemeralSetting.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EphemeralSetting message.
         * @function verify
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EphemeralSetting.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            var properties = {};
            if (message.duration != null && message.hasOwnProperty("duration")) {
                properties._duration = 1;
                if (!$util.isInteger(message.duration))
                    return "duration: integer expected";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                properties._timestamp = 1;
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            }
            return null;
        };

        /**
         * Creates an EphemeralSetting message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {Ephemeral.EphemeralSetting} EphemeralSetting
         */
        EphemeralSetting.fromObject = function fromObject(object) {
            if (object instanceof $root.Ephemeral.EphemeralSetting)
                return object;
            var message = new $root.Ephemeral.EphemeralSetting();
            if (object.duration != null)
                message.duration = object.duration | 0;
            if (object.timestamp != null)
                if ($util.Long)
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from an EphemeralSetting message. Also converts values to other types if specified.
         * @function toObject
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {Ephemeral.EphemeralSetting} message EphemeralSetting
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EphemeralSetting.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (message.duration != null && message.hasOwnProperty("duration")) {
                object.duration = message.duration;
                if (options.oneofs)
                    object._duration = "duration";
            }
            if (message.timestamp != null && message.hasOwnProperty("timestamp")) {
                if (typeof message.timestamp === "number")
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
                if (options.oneofs)
                    object._timestamp = "timestamp";
            }
            return object;
        };

        /**
         * Converts this EphemeralSetting to JSON.
         * @function toJSON
         * @memberof Ephemeral.EphemeralSetting
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EphemeralSetting.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for EphemeralSetting
         * @function getTypeUrl
         * @memberof Ephemeral.EphemeralSetting
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        EphemeralSetting.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/Ephemeral.EphemeralSetting";
        };

        return EphemeralSetting;
    })();

    return Ephemeral;
})();

module.exports = $root;
