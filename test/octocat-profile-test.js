'use strict';
// CLI command:

// phantomjs mocha-phantomjs-core.js <TESTS> <REPORTER> <CONFIG as JSON>

// jshint esversion: 6, strict: global, node: true, mocha: true


let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    request = require('request'),
    jsdom = require('jsdom'),
    expect = chai.expect,
    should = chai.should;

chai.use(chaiHttp);

describe('Github Developer API', function(){
    describe('GET /users/:username/repos', () => {
        this.timeout(15000);
        it('Lists all public repositories for the specified user.', (done) => {
            setTimeout(done, 10000);
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
        it('Exists', (done) => {
            this.timeout(10000);            
            request({ uri:'http://github.com/octocat' }, function (error, response, body) {  
            if (error && response.statusCode !== 200) {
                console.log('Error when contacting github.com')
            }

            jsdom.env({
                html: body,
                scripts: [
                'http://code.jquery.com/jquery-1.5.min.js'
                ],
                done: function (err, window) {
                let $ = window.jQuery;
                let avatar = $('.vcard-avatar').html();

                avatar.should.exist;
                console.log(avatar);
            }});
            });
            done();
        });
    });
});