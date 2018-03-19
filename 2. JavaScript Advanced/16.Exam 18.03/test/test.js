let expect=require("chai").expect;
let PaymentPackage=require("../payment package");
let pay;
describe("Group Test #1", function() {
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        expect(pay.toString()).to.be.equal("Package: az\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
    });
    it("error", function() {

        expect(() => pay=new PaymentPackage("az", -1500)).to.throw();
    });
    it("error", function() {

        expect(() => pay=new PaymentPackage("", 1500)).to.throw();
    });
    it("error", function() {

        expect(() => pay=new PaymentPackage(3, 1500)).to.throw();
    });
    it("error", function() {

        expect(() => pay=new PaymentPackage(4, "aa")).to.throw();
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        expect(pay.VAT).to.be.equal(20);
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        expect(pay.name).to.be.equal("az");
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        expect(pay.active).to.be.equal(true);
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        expect(pay.value).to.be.equal(1500);
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        pay.active=false;
        expect(pay.active).to.be.equal(false);
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        pay.VAT=50;
        expect(pay.VAT).to.be.equal(50);
    });
    it("error", function() {
        pay=new PaymentPackage("az", 1500);
        expect(() => pay.active=50).to.throw();
    });
    it("error", function() {
        pay=new PaymentPackage("az", 1500);
        expect(() => pay.VAT=true).to.throw();
    });
    it("proper", function() {
        pay=new PaymentPackage("az", 1500);
        pay.active=false;
        expect(pay.toString()).to.be.equal("Package: az (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800");
    });
    it("error", function() {
        expect(() => pay=new PaymentPackage("az")).to.throw();
    });
    it("Test exist", function () {
        expect(PaymentPackage.prototype).to.ownProperty('name');
    });
    it("Test exist", function () {
        expect(PaymentPackage.prototype).to.ownProperty('value');
    });
    it("Test exist", function () {
        expect(PaymentPackage.prototype).to.ownProperty('VAT');
    });
    it("Test exist", function () {
        expect(PaymentPackage.prototype).to.ownProperty('active');
    });
    it("Test exist", function () {
        expect(PaymentPackage.prototype).to.ownProperty('toString');
    });
    it("error", function() {
        pay=new PaymentPackage("az", 1500);
        expect(() => pay.active=null).to.throw();
    });
});