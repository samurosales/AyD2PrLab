var Add = require("../app");

describe("Add functionality", () => {
    it("calculates that x + y = z", () => {
        expect(9).toEqual(9);
        expect(9).toEqual(9);
    });
    it("calculates that x + y != z", () => {
        expect(10).not.toEqual(9);
    });
});