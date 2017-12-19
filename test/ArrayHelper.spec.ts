import { expect } from "chai";
import { NullLiteral } from "typescript";
import { ArrayHelper } from "../src/ArrayHelper";

describe("ArrayHelper", () => {
    describe("isArrayNullOrEmpty", () => {
        it("should return true when an empty array is passed in", () => {
            const someEmptyArray = [];

            expect(ArrayHelper.isArrayNullOrEmpty(someEmptyArray)).to.equal(true);
        });

        it("should return false when an array with values is passed in", () => {
            const nonEmptyArray: number[] = [1, 2, 3, 4, 5];

            expect(ArrayHelper.isArrayNullOrEmpty(nonEmptyArray)).to.equal(false);
        });

        it("should return true when null is passed in", () => {
            const nullValue: NullLiteral[] = null;

            expect(ArrayHelper.isArrayNullOrEmpty(nullValue)).to.equal(true);
        });
    });
});