'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');

var _require = require('../../services/sequel.service'),
    SequelService = _require.SequelService;

var _sequelService = void 0;

describe('#searchResults', function () {
  before(function () {
    _sequelService = new SequelService().getInstance();
  });
  after(function () {
    _sequelService.close();
    app.close();
  });
  it('should be able to get the latest results', function (done) {
    server(app).get('/latest').expect(200, done);
  }).timeout(15000);
});