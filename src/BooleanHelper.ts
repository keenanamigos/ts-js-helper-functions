/**
 * @class BooleanHelper
 * Class provides static methods to perform checks and operations on boolean values
 */

 export class BooleanHelper {
    /**
     * @function
     * Convert a given boolean to a corresponding integer value
     * @param {boolean} value - Boolean to be converted.
     * @returns {number} - Return the proper integer value given a true or false parameter.
     */
     public static convertBooleanToInt(value: boolean): number {
        if (value === true) {
            return 1;
        }

        return 0;
     }
 }