"use strict";
/**
 * @class BooleanHelper
 * Class provides static methods to perform checks and operations on boolean values
 */
Object.defineProperty(exports, "__esModule", { value: true });
var BooleanHelper = /** @class */ (function () {
    function BooleanHelper() {
    }
    /**
     * @function
     * Convert a given boolean to a corresponding integer value
     * @param value - Boolean to be converted.
     * @returns number - Return the proper integer value given a true or false parameter.
     */
    BooleanHelper.convertBooleanToInt = function (value) {
        if (value === true) {
            return 1;
        }
        return 0;
    };
    return BooleanHelper;
}());
exports.BooleanHelper = BooleanHelper;
