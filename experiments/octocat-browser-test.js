'use strict';
require('jsdom').env("https://github.com/octocat", ["http://code.jquery.com/jquery.js"], function(err, window) {console.log(window.$('.vcard-avatar .avatar').html());});
// CLI command:
// format for shell command
// $ phantomjs node_moduls/mocha-phantomjs-core/mocha-phantomjs-core.js <TESTS> <REPORTER> <CONFIG as JSON>

// $ phantomjs node_modules/mocha-phantomjs-core/mocha-phantomjs-core.js test/octocat-browser-test.js

// jshint esversion: 6, strict: global, node: true, mocha: true

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    jsdom = require('jsdom'),
    $ = require('jquery'),
    request = require('request'),
    sys = require('sys'),
    expect = chai.expect,
    assert = chai.assert,
    should = chai.should;

chai.use(chaiHttp);

describe('GitHub User Profile', function(){

    it('Displays a profile picture', (done) => {
    request({ uri: "https://github.com/octocat"}, function (err, res, body) {
        if (error && response.statusCode !== 200) {
            console.log('Error when contacting google.com')
        }
        
        sys.puts(body);
    });

    let profileAvatar;
    jsdom.env(
        "https://github.com/octocat",
        ["http://code.jquery.com/jquery.js"],
        {url: "https://github.com/octocat"},
        function (err, window) {
            profileAvatar = window.$(".vcard-avatar .avatar").html()[0];
        }
    );
        // expect(profileAvatar).to.exist;  
        assert.isObject(profileAvatar, 'profile avatar is an object');                              
        done();
    });
});