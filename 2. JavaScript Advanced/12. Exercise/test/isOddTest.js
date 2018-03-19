let expect = require('chai').expect;
const isOddOrEven = require('../isOdd');


describe("Test Odd Or EVEN", function () {

    it("Should return EVEN with even string length", function () {
        let result = isOddOrEven("even");
        expect(result).to.be.equal('even');
    });

    it("Should return ODD with Odd string length" , function () {
        let result = isOddOrEven("odd");
        expect(result).to.be.equal('odd');
    });

    it("Should return EVEN with empty string" , function () {
        let result = isOddOrEven("");
        expect(result).to.be.equal('even');
    });

    it("Should return undefined with number", function () {
        let result = isOddOrEven(0);
        expect(result).to.be.undefined;
    });

    it("Should return undefined with array ", function () {
        let result = isOddOrEven([0,5,6]);
        expect(result).to.be.undefined;
    });

    it("Should return undefined with object ", function () {
        let result = isOddOrEven({});
        expect(result).to.be.undefined;
    });

});