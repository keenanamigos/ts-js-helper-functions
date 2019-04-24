/**
 * @class ArrayHelper
 * Class provides static methods to perform checks and operations on arrays
 */

export class ArrayHelper {
    /**
     * @function
     * Performs a check to see if a given array is null or empty.
     * @param {any[]} array - A given array of any type to be checked
     * @returns {boolean} - Return true or false dependent on if the array is null or empty.
     */
    public static isArrayNullOrEmpty(array: any[]): boolean {
        return !array || array.length === 0;
    }
}