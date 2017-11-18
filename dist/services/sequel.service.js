'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SequelService = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

var _config = require('../../config/config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SequelService = function SequelService() {
  var _this = this;

  _classCallCheck(this, SequelService);

  this.getInstance = function () {
    return _this._sequel;
  };

  if (process.env.NODE_ENV == 'production') {
    this._sequel = new _sequelize2.default(process.env.DATABASE_URL || _config2.default.production.uri, {
      dialectOptions: {
        ssl: true
      }
    });
  } else {
    this._sequel = new _sequelize2.default(_config2.default.development.database, _config2.default.development.username, _config2.default.development.password, {
      host: _config2.default.development.host,
      dialect: _config2.default.development.dialect
    });
  }
};

exports.SequelService = SequelService;