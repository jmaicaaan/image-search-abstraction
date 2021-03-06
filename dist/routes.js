'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = routes;

var _index = require('./handlers/index');

function routes(app) {
  app.get('/', _index.introHandler);
  app.get('/search?:term?/:offset?', _index.searchHandler);
  app.get('/latest', _index.searchResultsHandler);
};