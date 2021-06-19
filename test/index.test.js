"use strict";
exports.__esModule = true;
// mocha + chai testing
// i am not supposed to import mocha as a module
var chai_1 = require("chai");
var testFunction = require("./test");
describe('test function', function () {
    it('should return "I can write a test"', function () {
        chai_1.expect(testFunction()).to.equal('I can write a test');
    });
});
