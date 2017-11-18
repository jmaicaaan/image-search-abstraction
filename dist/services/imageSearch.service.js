'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSearchService = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _googleImages = require('google-images');

var _googleImages2 = _interopRequireDefault(_googleImages);

var _keys = require('../../config/keys.json');

var _keys2 = _interopRequireDefault(_keys);

var _sequel = require('./sequel.service');

var _search_result = require('../../models/search_result');

var _search_result2 = _interopRequireDefault(_search_result);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageSearchService = function ImageSearchService() {
  var _this = this;

  _classCallCheck(this, ImageSearchService);

  this.searchImage = function (term, offset) {
    return _this.client.search(term, { page: offset }).then(function (items) {
      return _this.addSearchResult(term).then(function () {
        return items;
      });
    });
  };

  this.addSearchResult = function (term) {
    if (term) {
      _this.getConnection();
      return _this._searchResult.create({ term: term }).then(function () {
        return _this._sequel.close();
      });
    }
    throw 'No term to be added';
  };

  this.getLatestResults = function () {
    _this.getConnection();
    return _this._searchResult.findAll({ limit: 10 }).then(function (list) {
      return _this._sequel.close().then(function () {
        return list;
      });
    });
  };

  this.getConnection = function () {
    _this._sequel = new _sequel.SequelService().getInstance();
    _this._searchResult = (0, _search_result2.default)(_this._sequel, _sequelize2.default);
  };

  this.client = new _googleImages2.default(_keys2.default.googleImage.cse, _keys2.default.googleImage.apiKey);
  this.getConnection();
};

exports.ImageSearchService = ImageSearchService;