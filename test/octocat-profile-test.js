'use strict';

let chai = require('chai'),
    chaiHttp = require('chai-http'),
    sinon = require('sinon'),
    chaiAsPromised = require('chai-as-promised'),
    Promise = require('bluebird'),
    expect = chai.expect,
    should = chai.should();

chai.use(chaiHttp);

describe('Github Developer API', function(){
    // beforeEach(function(){
    //     chai.request('https://www.github.com');
    // });
    describe('GET /users/:username/repos', function(){
        it('Lists all public repositories for the specified user (i.e., Octocat).', function(){
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