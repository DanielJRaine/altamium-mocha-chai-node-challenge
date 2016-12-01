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
    // beforeEach(function(){
    //     chai.request('https://www.github.com');
    // });
    describe('GET /users/:username/repos', () => {
        it('Lists all public repositories for the specified user.', (done) => {
            chai.request('https://www.github.com')
                    .get('/users/octocat/repos')
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('array');  
                        done();
                    });
        });
    });
});