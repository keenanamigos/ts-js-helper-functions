import { expect } from "chai";
import { NullLiteral } from "typescript";
import { ObjectHelper } from "../src/ObjectHelper";

describe("ObjectHelper", () => {
    describe("isObjectNullOrEmpty", () => {
        it("should return true if an empty object is passed in", () => {
            const someObject: object = {};

            expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.equal(true);
        });

        it("should return false if an object with properties is passed in", () => {
            const someObject: object = {
                name: "some name",
                age: 26
            };

            expect(ObjectHelper.isObjectNullOrEmpty(someObject)).to.equal(false);
        });

        it("should return true if null is passed in", () => {
            const someValue: NullLiteral = null;

            expect(ObjectHelper.isObjectNullOrEmpty(someValue)).to.equal(true);
        });

        it("should throw a TypeError if the given parameter is not an object", () => {
            const someArray: number[] = [1, 2, 3];

            expect(ObjectHelper.isObjectNullOrEmpty.bind(ObjectHelper.isObjectNullOrEmpty, someArray)).to.throw(TypeError, `${someArray } is not an Object.`);
        });
    });
});