'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchHandler = undefined;

var _imageSearch = require('../../services/imageSearch.service');

var imageSearchService = new _imageSearch.ImageSearchService();

function searchHandler(req, res) {
  var term = req.query.term;
  var offset = req.query.offset;
  imageSearchService.searchImage(term, offset).then(function (resp) {
    res.send(resp);
  });
}

exports.searchHandler = searchHandler;