'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageSearchService = undefined;

var _config = require('../../config/config.json');

var _config2 = _interopRequireDefault(_config);

var _googleImages = require('google-images');

var _googleImages2 = _interopRequireDefault(_googleImages);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ImageSearchService = function ImageSearchService() {
  var _this = this;

  _classCallCheck(this, ImageSearchService);

  this.searchImage = function (term, offset) {
    return _this.client.search(term, { page: offset });
  };

  this.client = new _googleImages2.default(_config2.default.googleImage.cse, _config2.default.googleImage.apiKey);
};

exports.ImageSearchService = ImageSearchService;