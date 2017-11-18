const assert = require('assert');
const app = require('../../../dist/index');
const server = require('supertest');
const { SequelService } = require('../../services/sequel.service');

let _sequelService;

describe('searchResults', () => {
  before(() => {
    _sequelService = new SequelService().getInstance();
  });
  after(() => {
    _sequelService.close();
  });
  describe('#searchResults', () => {
    afterEach(() => {
      app.close();
    });
    it('should be able to get the latest results', done => {
      server(app)
        .get('/latest')
        .expect(200, done);
    });
  });
});