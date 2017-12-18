"use strict";
/**
 * @class ArrayHelper
 * Class provides static methods to perform checks and operations on arrays
 */
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayHelper = /** @class */ (function () {
    function ArrayHelper() {
    }
    /**
     * @function
     * Performs a check to see if a given array is null or empty.
     * @param {any[]} array - A given array of any type to be checked
     * @returns {boolean} - Return true or false dependent on if the array is null or empty.
     */
    ArrayHelper.isArrayNullOrEmpty = function (array) {
        if (array === null || array.length === 0) {
            return true;
        }
        return false;
    };
    return ArrayHelper;
}());
exports.ArrayHelper = ArrayHelper;
