let expect=require("chai").expect;
let StringBuilder=require("../string builder");
//let str=new StringBuilder("aa");
let str;
describe("Group Test #1", function() {
    describe("append", function() {
        it("proper str", function() {
            str=new StringBuilder("aa");
            str.append("z");
            expect(str.toString()).to.be.equal("aaz");
        });
        it("Test with invalid string", function () {
            str=new StringBuilder("aa");
            expect(() => str.append({},2)).to.throw(TypeError);
        });
    });
    describe("toString", function () {
        it("proper", function () {
            str=new StringBuilder("az");
            expect(str.toString()).to.be.equal("az");
        });
        it("non proper", function () {
            str=new StringBuilder("");
            expect(() => str.toString().to.be.equal(""));
        })
    });
    describe("prepend", function () {
        it("proper", function () {
            str=new StringBuilder("aaa");
            str.prepend("z");
            expect(str.toString()).to.be.equal("zaaa");
        });
        it("unproper", function () {
            str=new StringBuilder("a");
            expect(() => str.prepend({},2)).to.throw(TypeError);
        })
    });
    describe("insert at", function () {
        it("proper", function () {
            str=new StringBuilder("Hello");
            str.insertAt("Bye",2);
            expect(str.toString()).to.be.equal("HeByello");
        });
        it("unproper", function () {
            str=new StringBuilder("Hello");
            expect(() => str.insertAt({},50)).to.throw(TypeError);
        });
        it("range", function () {
            str=new StringBuilder("Hello");
            str.insertAt("az",50);
            expect(str.toString()).to.be.equal("Helloaz");
        });
        it("range", function () {
            str=new StringBuilder("Hello");
            str.insertAt("az",-50);
            expect(str.toString()).to.be.equal("azHello");
        });
    });
    describe("Test if functions exist", function () {

        it("Test if append() exsists ", function () {
            expect(StringBuilder.prototype).to.ownProperty('append');
        });

        it("Test if prepend() exists ", function () {
            expect(StringBuilder.prototype).to.ownProperty('prepend');
        });

        it("Test if insertAt() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('insertAt');
        });

        it("Test if remove() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('remove');
        });

        it("Test if toString() exists", function () {
            expect(StringBuilder.prototype).to.ownProperty('toString');
        });

        it("Test if _vrfyParam() exists", function () {
            expect(StringBuilder).to.ownProperty('_vrfyParam');
        });

    });
    describe("Test initial state", function () {
        it("Test with undefined", function () {

            stringBuilder = new StringBuilder(undefined)
            expect(stringBuilder._stringArray.length).to.be.equal(0);
        });


        it("Test with real string", function () {
            str=new StringBuilder("test");
            expect(str._stringArray.length).to.be.equal(4);
        });

        it("Test with object", function () {

            expect(() => stringBuilder = new StringBuilder({})).to.throw(TypeError);
        });

    });
    describe("Test REMOVE", function () {
        it("Test with real string", function () {
            str=new StringBuilder("test");
            str.remove(0,2);
            expect(str.toString()).to.be.equal('st');
        });

        it("Test with invalid index", function () {
            str=new StringBuilder("test");
            str.remove(-7,2);
            expect(str.toString()).to.be.equal('st');
        });

        it("Test with lenght outside of the array", function () {

            stringBuilder.remove(0,16);
            expect(stringBuilder.toString()).to.be.equal('');
        });
        it("Test with negative length", function () {
            str=new StringBuilder("test");
            str.remove(1,-16);
            expect(str.toString()).to.be.equal('test');
        });
    });
});