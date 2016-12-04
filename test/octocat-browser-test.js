'use strict';
// CLI command:
// format for shell command
// $ phantomjs node_moduls/mocha-phantomjs-core/mocha-phantomjs-core.js <TESTS> <REPORTER> <CONFIG as JSON>

// $ phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/octocat-browser-test.js

// jshint esversion: 6, strict: global, node: true, mocha: true
// let casper = require('casper').create();
if (typeof initMochaPhantomJS === 'function') {
    initMochaPhantomJS();
}

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,

    should = chai.should();

chai.use(chaiHttp);

describe('GitHub User Profile', function(){
    it('Displays a profile picture', (done) => {

        // let driver = browser.driver;
        // driver.get("https://www.github.com/octocat");
        // driver.findElements(by.src(''))
        //       .then(function(array){
        //             expect(array.length).not.toBe(0);
        //         });
        // this.timeout(10000);
        // page.open('https://github.com/octocat', function(status) {
        //     let content = page.content;
        //     console.log("content: " + content);
        //     // console.log('Content: ' + content);
        //     phantom.exit();
        // });
        done();
    });
});