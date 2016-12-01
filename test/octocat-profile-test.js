'use strict';

// jshint esversion: 6, strict: global, node: true, mocha: true

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    expect = chai.expect,
    should = chai.should();

chai.use(chaiHttp);

describe('Github Developer API', function(){
    describe('GET /users/:username/repos', () => {
        it('Lists all public repositories for the specified user.', (done) => {
            this.timeout(10000);
            chai.request('https://api.github.com')
                    .get('/users/octocat/repos')
                    .then((res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');  
                        done();
                    })
                    .catch((err) => {
                        throw err;
                    })
                    ;
        });
    });
});

describe('GitHub User Profile', function(){
    it('Displays a profile picture', function(){
        browser.get('https://www.github.com/octocat', function(){
            
        });
    });
});