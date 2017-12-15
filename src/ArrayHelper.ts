/**
 * @class ArrayHelper
 * Class provides static methods to perform checks and operations on arrays
 */

export class ArrayHelper {
    /**
     * @function
     * Performs a check to see if a given array is null or empty.
     * @param array - A given array of any type to be checked
     * @returns boolean - Return true or false dependent on if the array is null or empty.
     */
    public static isArrayNullOrEmpty(array: any[]): boolean {
        if (array === null || array.length === 0) {
            return true;
        }

        return false;
    }
}