"use strict";
/**
 * @class BooleanHelper
 * Class provides static methods to perform checks and operations on boolean values
 */
exports.__esModule = true;
var BooleanHelper = (function () {
    function BooleanHelper() {
    }
    /**
     * @function
     * Convert a given boolean to a corresponding integer value
     * @param {boolean} value - Boolean to be converted.
     * @returns {number} - Return the proper integer value given a true or false parameter.
     */
    BooleanHelper.convertBooleanToInt = function (value) {
        return !!value ? 1 : 0;
    };
    return BooleanHelper;
}());
exports.BooleanHelper = BooleanHelper;
