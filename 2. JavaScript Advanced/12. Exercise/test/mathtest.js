let expect=require("chai").expect;
let mathEnforcer=require("../math enforcer");
describe("Group Test #1", function() {
    describe("addFive", function() {
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(5)).to.be.equal(10);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(3)).to.be.equal(8);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.addFive("soft")).to.be.equal(undefined);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.addFive(-2)).to.be.equal(3);
        });
    });
    describe("substracTen", function() {
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(11)).to.be.equal(1);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen("soft")).to.be.equal(undefined);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(-2)).to.be.equal(-12);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(5.5)).to.be.equal(-4.5)
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.subtractTen(-10.3)).to.be.equal(-20.3)
        });
    });
    describe("sum", function() {
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum(1,2)).to.be.equal(3);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum(15, 2)).to.be.equal(17);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum("soft",3)).to.be.equal(undefined);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum(3,"soft")).to.be.equal(undefined);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum("soft","uni")).to.be.equal(undefined);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum(-2,-5)).to.be.equal(-7);
        });
        it("with a non-number parameter, should return correct result", function() {
            expect(mathEnforcer.sum(2.3,2.2)).to.be.equal(4.5)
        });
    });
});