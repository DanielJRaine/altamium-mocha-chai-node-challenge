'use strict';
// jshint strict: global, esversion: 6
/// <reference path="typings/mocha/mocha.d.ts" />

let chai = require('chai'),
    expect = chai.expect;

chai.should();

describe('number tests', function () {
    function isEven(num) {
        return num % 2 === 0;
    }

    describe('isEven', function () {
        it('should return true when number is even', function () {
            isEven(4).should.be.true;
        });

        it('should return false when number is odd', function () {
            expect(isEven(5)).to.be.false;
        })
    });

    function add(num1, num2){
        return num1 + num2;
    }

    describe('add with setup/teardown', function () {
        let num;

        beforeEach(function(){
            num = 5;
        });

        // it.only runs only this one test. Careful with this one.
        // it.only('should be 12 when adding 7 to 5', function(){ 

        it('should be 12 when adding 7 to 5', function(){            
            add(num, 7).should.equal(12);
        });
        // xit skips the test.  Same as it.skip(...).  Shows test as 'pending'
        xit('should be 12 when adding 7 to 5', function(){
            add(num, 7).should.equal(12);
        });
    });
});
