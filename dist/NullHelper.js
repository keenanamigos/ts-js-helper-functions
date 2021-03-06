"use strict";
/**
 * @class NullHelper
 * Class to peform checks and operations on null values.
 */
exports.__esModule = true;
var NullHelper = (function () {
    function NullHelper() {
    }
    /**
     * @function
     * Convert a null value to the integer 0 or return the given value.
     * @param {any} input - Given value to be checked and converted if null.
     * @returns {any} - Return the integer 0 if null or the given input otherwise
     */
    NullHelper.convertNullToZero = function (input) {
        return input !== null ? input : 0;
    };
    return NullHelper;
}());
exports.NullHelper = NullHelper;
