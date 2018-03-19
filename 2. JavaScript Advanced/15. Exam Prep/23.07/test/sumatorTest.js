let expect=require("chai").expect;
let Sumator=require("../sumator");
describe("Sumator", function() {
    let sumator;
    beforeEach(function () {
        sumator = new Sumator();
    });
    describe("toString", function() {
        it("should return empty", function() {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
        it("should return empty", function() {
            expect(sumator.toString()).to.be.equal("(empty)");
        });
    });
    describe("add", function () {
        it("proper", function () {
            sumator.add("az");
            sumator.add("toi");
            sumator.add("tq");
            expect(sumator.toString()).to.be.equal("az, toi, tq");
        });
        it("proper", function () {
            sumator.add("az");
            sumator.add(3);
            sumator.add("tq");
            expect(sumator.toString()).to.be.equal("az, 3, tq");
        });
    });
    describe("sumNums", function () {
        it("proper", function () {
            sumator.add(3);
            sumator.add(4);
            sumator.add(5);
            expect(sumator.sumNums()).to.be.equal(12);
        });
        it("proper", function () {
            sumator.add(-3);
            sumator.add(-4);
            sumator.add(-5);
            expect(sumator.sumNums()).to.be.equal(-12);
        });
        it("proper", function () {
            sumator.add(3);
            sumator.add("az");
            sumator.add(5);
            expect(sumator.sumNums()).to.be.equal(8);
        });
        it("proper", function () {
            sumator.add(3);
            sumator.add("aaaa");
            sumator.add(5);
            sumator.removeByFilter(x => x%2===1);
            expect(sumator.toString()).to.be.equal("aaaa");
        });
        it("proper", function () {
            sumator.add(2);
            sumator.add("aaaa");
            sumator.add(5);
            sumator.removeByFilter(x => x%2===1);
            expect(sumator.toString()).to.be.equal("2, aaaa");
        });
    })

});