import { expect } from "chai";
import { NumberHelper } from "../src/NumberHelper";

describe("NumberHelper", () => {
    describe("getRandomInteger", () => {
        it("should return a random integer between the minValue and the maxValue", () => {
            const minValue = 0;
            const maxValue = 50;

            expect(NumberHelper.getRandomInteger(minValue, maxValue)).to.be.within(minValue, maxValue);
        });

        it("should throw an error if the integer 0 is given for the maxValue", () => {
            const minValue = 0;
            const maxValue = 0;

            expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter Numbers greater than zero.`);
        });

        it("should throw an error is a negative number is given", () => {
            const minValue = 0;
            const maxValue = -6;

            expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter Numbers greater than zero.`);
        });

        it("should throw an error if a non-number is given", () => {
            const minValue = 0;
            const maxValue = "B";

            expect(NumberHelper.getRandomInteger.bind(NumberHelper.getRandomInteger, minValue, maxValue)).to.throw(Error, `${minValue} AND/OR ${maxValue} are not valid input. Please enter Numbers greater than zero.`);
        });
    });
});