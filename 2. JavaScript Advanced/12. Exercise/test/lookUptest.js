let expect=require("chai").expect;
let lookupChar=require("../lookUpChar");

describe("Group Test #1", function() {
    it("should return undefined", function() {
        expect(lookupChar(3, 5)).to.equal(undefined, "The function did not return the correct value!");
    });
    it("should return undefined", function() {
        expect(lookupChar("az","toi")).to.equal(undefined, "The function did not return the correct value!");
    });
    it("should return undefined", function() {
        expect(lookupChar("az",4)).to.equal("Incorrect index", "The function did not return the correct value!");
    });
    it("should return undefined", function() {
        expect(lookupChar("az",-4)).to.equal("Incorrect index", "The function did not return the correct value!");
    });
    it("should return undefined", function() {
        expect(lookupChar("test",2)).to.be.equal("s");
    });
    it("should return undefined", function() {
        expect(lookupChar("azfgh",2.5)).to.equal(undefined, "The function did not return the correct value!");
    });
    it("should return undefined", function() {
        expect(lookupChar("proba",3)).to.be.equal("b");
    });
    it("should return undefined", function() {
        expect(lookupChar([1,2,3],2)).to.be.equal(undefined);
    });
});

