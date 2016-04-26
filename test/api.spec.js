import app from '../server.js';
import { expect } from 'chai';
var supertest = require('supertest');
var agent = supertest.agent(app);


describe('backend APIT', () => {

  it('does something', function(done) {
    this.timeout(8000);

    agent.get('')
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
        expect(res.body.length).to.equal(1)
        done()
      });
    })


})
