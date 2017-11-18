'use strict';

var assert = require('assert');
var app = require('../../../dist/index');
var server = require('supertest');

describe('searchResults', function () {
  describe('#searchResults', function () {
    afterEach(function () {
      app.close();
    });
    it('should be able to get the latest results', function (done) {
      server(app).get('/latest').expect(200, done);
    });
  });
});