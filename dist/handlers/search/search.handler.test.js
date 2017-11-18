'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');
var imageSearch = require('../../services/imageSearch.service').ImageSearchService;

describe('search', function () {
  describe('#search', function () {
    afterEach(function () {
      app.close();
    });
    it('should be able to add term', function (done) {
      var term = 'Node.JS';
      server(app).get('/search').query({ term: term }).expect(200).end(function (err, res) {
        assert.equal(res.body.length > 0, true); //contains result
        done(err);
      });
    });
    it('should not be able to add empty term', function (done) {
      server(app).get('/search').query({ term: '' }).expect(500, done);
    });
  });
});