/**
 * @class NullHelper
 * Class to peform checks and operations on null values.
 */

class NullHelper {
    /**
     * @function
     * Convert a null value to the integer 0 or return the given value.
     * @param {any} input - Given value to be checked and converted if null.
     * @returns {any} - Return the integer 0 if null or the given input otherwise
     */
    public static convertNullToZero(input: any): any {
        if (input === null) {
            return 0;
        }

        return input;
    }
}