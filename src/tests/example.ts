// A sample Jasmine test
import { returnIn } from "~/tests/helper";

describe("A suite", () => {
    it("contains spec with an expectation", () => {
        expect(true).toBe(true);
    });

    const values = ["hi", true, 10, "hi", true, 10, "hi", true, 10];
    const millis = [100, 200, 300, 100, 200, 300, 100, 200, 300];

    for (let i = 0; i < values.length; i++) {
        const value = values[i];
        const ms = millis[i];
        it(`returns ${value} in ${ms} ms`, async () => {
            const result = await returnIn(value, ms);
            expect(result).toEqual(value);
        });
    }
});
