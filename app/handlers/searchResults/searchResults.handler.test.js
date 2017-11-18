const assert = require('assert');
const app = require('../../../dist/index');
const server = require('supertest');

describe('searchResults', () => {
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