import { expect } from "chai";
import { NullLiteral } from "typescript";
import { NullHelper } from "../src/NullHelper";

describe("NullHelper", () => {
    describe("convertNullToZero", () => {
        it("should convert a null input to the integer 0", () => {
            const someInput: NullLiteral = null;

            expect(NullHelper.convertNullToZero(someInput)).to.equal(0);
        });

        it("should return the given input if it is not equal to null", () => {
            const someInput = "this is a string";

            expect(NullHelper.convertNullToZero(someInput)).to.equal(someInput);
        });
    });
});