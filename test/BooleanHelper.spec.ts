import { expect } from "chai";
import { BooleanHelper } from "../src/BooleanHelper";

describe("BooleanHelper", () => {
    describe("convertBooleanToInt", () => {
        it("should return 1 if the given boolean has a value of true", () => {
            const trueBool = true;

            expect(BooleanHelper.convertBooleanToInt(trueBool)).to.equal(1);
        });

        it("should return 1 if the given value is not a boolean but is truthy", () => {
            const truthyArray = [1, 2, 3, 4, 5];

            expect(BooleanHelper.convertBooleanToInt(!!truthyArray)).to.equal(1);
        });

        it("should return 0 if the given boolean has a value of false", () => {
            const falseBool = false;

            expect(BooleanHelper.convertBooleanToInt(falseBool)).to.equal(0);
        });


        it("should return 0 if the given value is not a boolean but is falsy", () => {
            const falsyString = "";

            expect(BooleanHelper.convertBooleanToInt(!!falsyString)).to.equal(0);
        });
    });
});