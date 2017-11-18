'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchResultsHandler = undefined;

var _imageSearch = require('../../services/imageSearch.service');

var imageSearchService = new _imageSearch.ImageSearchService();

function searchResultsHandler(req, res) {
  imageSearchService.getLatestResults().then(function (results) {
    return res.send(results);
  });
}

exports.searchResultsHandler = searchResultsHandler;