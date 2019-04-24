/**
 * @class DateHelper
 * Class to perform operations on Date values
 */

 export class DateHelper {
    /**
     * @function
     * Get the current date formatted as 08/08/2017.
     * @param none
     * @returns {string} - Return a formatted date as a string in the form of month, day, year.
     */
     public static getFormattedCurrentDate(): string {
        const currentDate: Date = new Date();

        // January is 0 by default so 1 is added for formattting
        const month: number = currentDate.getMonth() + 1;
        const day: number = currentDate.getDate();
        const year: number = currentDate.getFullYear();

        const formattedDate: string = DateHelper.formatDate(month, day, year);

        return formattedDate;
     }

    /**
     * @function
     * Format a date as mm/dd/yyyy.
     * @param {number} month - A given month.
     * @param {number} day -  A given day.
     * @param {number} year - A given year.
     * @returns string - Return the formatted date as a string.
     */
     public static formatDate(month: number, day: number, year: number): string {
        const isMonthLessThanTen = month < 10;
        const isDayLessThanTen = day < 10;
        let formattedDate: string;

        if (isMonthLessThanTen && isDayLessThanTen) {
            formattedDate = `0${month}/0${day}/${year}`;
        } else if (isMonthLessThanTen && !isDayLessThanTen) {
            formattedDate = `0${month}/${day}/${year}`;
        } else if (!isMonthLessThanTen && isDayLessThanTen) {
            formattedDate = `${month}/0${day}/${year}`;
        } else {
            formattedDate = `${month}/${day}/${year}`;
        }

        // Example of post-formatted date: 08/08/2017
        return formattedDate;
     }
 }