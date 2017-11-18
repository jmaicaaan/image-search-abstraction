'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');
var imageSearch = require('../../services/imageSearch.service').ImageSearchService;

var _require = require('../../services/sequel.service'),
    SequelService = _require.SequelService;

var _sequelService = void 0;

describe('#search', function () {
  before(function () {
    _sequelService = new SequelService().getInstance();
  });
  after(function () {
    _sequelService.close();
    app.close();
  });
  it('should be able to add term', function (done) {
    var term = 'Node.JS';
    server(app).get('/search').query({ term: term }).expect(200).end(function (err, res) {
      assert.equal(res.body.length > 0, true); //contains result
      done(err);
    });
  }).timeout(15000);
  it('should not be able to add empty term', function (done) {
    server(app).get('/search').query({ term: '' }).expect(500, done);
  }).timeout(15000);
});