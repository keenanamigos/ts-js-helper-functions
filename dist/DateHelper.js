"use strict";
/**
 * @class DateHelper
 * Class to perform operations on Date values
 */
Object.defineProperty(exports, "__esModule", { value: true });
var DateHelper = /** @class */ (function () {
    function DateHelper() {
    }
    /**
     * @function
     * Get the current date formatted as 08/08/2017.
     * @param none
     * @returns {string} - Return a formatted date as a string in the form of month, day, year.
     */
    DateHelper.getFormattedCurrentDate = function () {
        var currentDate = new Date();
        // January is 0 by default so 1 is added for formattting
        var month = currentDate.getMonth() + 1;
        var day = currentDate.getDate();
        var year = currentDate.getFullYear();
        var formattedDate = DateHelper.formatDate(month, day, year);
        return formattedDate;
    };
    /**
     * @function
     * Format a date as mm/dd/yyyy.
     * @param {number} month - A given month.
     * @param {number} day -  A given day.
     * @param {number} year - A given year.
     * @returns string - Return the formatted date as a string.
     */
    DateHelper.formatDate = function (month, day, year) {
        var isMonthLessThanTen = (month < 10);
        var isDayLessThanTen = (day < 10);
        var formattedDate;
        if (isMonthLessThanTen && isDayLessThanTen) {
            formattedDate = "0" + month + "/0" + day + "/" + year;
        }
        else if (isMonthLessThanTen && !isDayLessThanTen) {
            formattedDate = "0" + month + "/" + day + "/" + year;
        }
        else if (!isMonthLessThanTen && isDayLessThanTen) {
            formattedDate = month + "/0" + day + "/" + year;
        }
        else {
            formattedDate = month + "/" + day + "/" + year;
        }
        // Example of post-formatted date: 08/08/2017
        return formattedDate;
    };
    return DateHelper;
}());
exports.DateHelper = DateHelper;
