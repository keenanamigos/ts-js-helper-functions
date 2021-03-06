"use strict";
/**
 * @class NumberHelper
 * Class provides static methods to perform checks and operations on numbers
 */
exports.__esModule = true;
var NumberHelper = (function () {
    function NumberHelper() {
    }
    /**
     * @function
     * Return a random integer between the given minimum and maximum values.
     * @param {number} minValue - Minimum value the returned integer can be.
     * @param {number} maxValue - Maximum value the returned integer can be.
     * @returns {number} - Return an integer.
     */
    NumberHelper.getRandomInteger = function (minValue, maxValue) {
        if (NumberHelper.isZeroOrGreater(minValue) && NumberHelper.isGreaterThanZero(maxValue)) {
            // The maximum and minimum are both inclusive
            return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        }
        else {
            throw new Error(minValue + " AND/OR " + maxValue + " are not valid input. Please enter values greater than zero.");
        }
    };
    /**
     * @function
     * Determine if a given number is greater than zero.
     * @param {number} number - Number to be checked.
     * @returns {boolean} - Return an boolean based on if the given value is greater than or less than zero.
     */
    NumberHelper.isGreaterThanZero = function (input) {
        return input > 0;
    };
    /**
     * @function
     * Determine if a given number is zero or greater.
     * @param {number} number - Number to be checked.
     * @returns {boolean} - Return an boolean based on if the given value is zero or greater.
     */
    NumberHelper.isZeroOrGreater = function (input) {
        return input >= 0;
    };
    return NumberHelper;
}());
exports.NumberHelper = NumberHelper;
