'use strict';
// CLI command:

// phantomjs mocha-phantomjs-core.js <TESTS> <REPORTER> <CONFIG as JSON>

// jshint esversion: 6, strict: global, node: true, mocha: true


let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    request = require('request'),
    httpUtils = require('request-mocha')(request),
    jsdom = require('jsdom').jsdom,
    expect = chai.expect,
    should = chai.should;

chai.use(chaiHttp);

describe('Github Developer API', function(){
    describe('GET /users/:username/repos', () => {
        this.timeout(15000);
        it('Lists all public repositories for the specified user.', (done) => {
            chai.request('https://api.github.com')
                    .get('/users/octocat/repos')
                    .then((res) => {
                        expect(res.status).to.be.equal(200);
                        expect(res.body).to.be.a('array');
                        done();
                    })
                    .catch((err) => {
                        throw err;
                    });
        });
    });
});

describe('Github Octocat Profile', function(){
    describe('Avatar', () => {
        this.timeout(15000);
        it('Exists', (done) => {
            setTimeout(done, 10000);            
            request({uri:'http://github.com/octocat'}, function (err, res, body) {
                jsdom.env({
                    html: res.body,
                    scripts: [
                    'http://code.jquery.com/jquery-1.5.min.js'
                    ],
                    done: function (err, window) {
                        let $ = window.jQuery;
                        let avatar = $('.vcard-avatar').html();
                        expect(avatar).to.exist;
                        done();
                }});
            });
        });

        it('Is contained within an image tag', (done) => {
            setTimeout(done, 10000);            
            request({uri:'http://github.com/octocat'}, function (err, res, body) {
                jsdom.env({
                    html: res.body,
                    scripts: [
                    'http://code.jquery.com/jquery-1.5.min.js'
                    ],
                    done: function (err, window) {
                        let $ = window.jQuery;
                        let avatar = $('.vcard-avatar').html();
                        expect(avatar).to.include('<img');
                        done();
                }});
            });
        });

        it("Contain's the Octocat's image from the correct source", (done) => {
            setTimeout(done, 10000);
            request({uri:'http://github.com/octocat'}, function (err, res, body) {
                jsdom.env({
                    html: res.body,
                    scripts: [
                    'http://code.jquery.com/jquery-1.5.min.js'
                    ],
                    done: function (err, window) {
                        let $ = window.jQuery;
                        let avatar = $('.vcard-avatar').html();
                        expect(avatar).to.include('https://avatars1.githubusercontent.com/u/583231?v=3&amp;s=460');
                        done();
                }});
            });
        });
    });
});