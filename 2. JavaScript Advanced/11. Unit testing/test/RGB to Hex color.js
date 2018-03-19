function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}
let expect=require("chai").expect;
describe("Group Test #1", function() {
    it("should return #FF9EAA", function() {
        expect(rgbToHexColor(255,158,170)).to.be.equal("#FF9EAA");
    });
    it("should return #", function() {
        expect(rgbToHexColor(0,0,0)).to.be.equal("#000000");
    });
    it("should return #FF9EAA", function() {
        expect(rgbToHexColor(12,13,14)).to.be.equal("#0C0D0E");
    });
    it("should return #FF9EAA", function() {
        expect(rgbToHexColor(255,255,255)).to.be.equal("#FFFFFF");
    });
    it("should return undefined for (-1, 10, 10)", () => {
        expect(rgbToHexColor(-1, 10, 10)).to.equal(undefined);
    })
});