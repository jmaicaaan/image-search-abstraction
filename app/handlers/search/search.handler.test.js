const assert = require('assert');
const app = require('../../../dist/index');
const server = require('supertest');
const imageSearch = require('../../services/imageSearch.service').ImageSearchService;
const { SequelService } = require('../../services/sequel.service');

let _sequelService;

describe('#search', () => {
  before(() => {
    _sequelService = new SequelService().getInstance();
  });
  after(() => {
    _sequelService.close();
    app.close();
  });
  it('should be able to add term', done => {
    const term = 'Node.JS';
    server(app)
      .get('/search')
      .query({ term })
      .expect(200)
      .end((err, res) => {
        assert.equal(res.body.length > 0, true); //contains result
        done(err);
      });
  }).timeout(15000);
  it('should not be able to add empty term', done => {
    server(app)
      .get('/search')
      .query({ term: '' })
      .expect(500, done);
  }).timeout(15000);
});