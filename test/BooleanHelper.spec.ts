import { expect } from "chai";
import { BooleanHelper } from "../src/BooleanHelper";

describe("BooleanHelper", () => {
    describe("convertBooleanToInt", () => {
        it("should return 1 if the given boolean has a value of true", () => {
            const trueBool = true;

            expect(BooleanHelper.convertBooleanToInt(trueBool)).to.equal(1);
        });

        it("should return 0 if the given boolean has a value of false", () => {
            const falseBool = false;

            expect(BooleanHelper.convertBooleanToInt(falseBool)).to.equal(0);
        });
    });
});