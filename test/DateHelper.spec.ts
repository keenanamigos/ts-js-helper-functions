import { expect } from "chai";
import { DateHelper } from "../src/DateHelper";

describe("DateHelper", () => {
    describe("formatDate", () => {
        it("should return a properly formatted date", () => {
            const month = 8;
            const day = 6;
            const year = 2018;

            const someDate: string = DateHelper.formatDate(month, day, year);
            expect(someDate).to.equal("08/06/2018");
        });
    });
});