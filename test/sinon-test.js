'use strict';

let chai = require('chai'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    Promise = require('bluebird'),
    expect = chai.expect,
    should = chai.should();

chai.use(chaiAsPromised);

// gives us .eventually() which lets us check to see whether
// a promise resolves.

describe('sinon tests', function () {
    let student, schedule;

    beforeEach(function() {
        student = {
            dropClass: function(classId, callback) {
                // do stuff
                // !!callback.method tells you whether the method exists on the object 
                if(!!callback.dropClass) {
                    callback.dropClass();
                } else {
                    callback();
                }
            },
            addClass: function(schedule) {
                if (!schedule.classIsFull()) {
                    return true;
                } else {
                    return false;
                }
            }
        };

        schedule = {
            dropClass: function() { 
                console.log('class dropped');
            },
            classIsFull: function(){
                return true;
            }
        };
    });

    describe('student.dropClass', function() {
        it('should call the callback', function(){
            let spy = sinon.spy();

            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it('should call the callback and log to the console', function() {
            function onClassDropped() {
                console.log("onClassDropped was called");
            }

            let spy = sinon.spy(onClassDropped);

            student.dropClass(1, spy);
            spy.called.should.be.true;
        });

        it('should call the callback even if it is a method of an object', function() {
            sinon.spy(schedule, 'dropClass');
            student.dropClass(1, schedule);
            schedule.dropClass.called.should.be.true;
        });
    });

    // stubs are easier to control than spies.  Stubs are a superset of what spies do.
    describe('student with stubs', function() {
        it('should call a stubbed method', function() {
            let stub = sinon.stub(schedule); // goes through every method on this object and replaces with a stub function
            student.dropClass(1, stub.dropClass);
           // student.dropClass(1, stub); // since stub has all the methods, this is valid too.
            stub.dropClass.called.should.be.true; // stubs don't call the inner implementation of the stubbed method'
        });

        it('should return true when the class is not full', function() {
            let stub = sinon.stub(schedule);
            stub.classIsFull.returns(false);

            let returnVal = student.addClass(stub)
            returnVal.should.be.true;
        })
    });

    // you can set up expectations before the tests are even run. Then you verify the mocks based on whether expectations were met.
    // mocks are not needed in most situations.  Stubs wil do most of the time.
    describe('student with mocks', function() {
        it('mocks schedule', function(){
             let mockObj = sinon.mock(schedule);
            //  let expectation = mockObj.expects('classIsFull').twice();
             let expectation = mockObj.expects('classIsFull').once();             

             student.addClass(schedule);
             expectation.verify();
        });
    });
});