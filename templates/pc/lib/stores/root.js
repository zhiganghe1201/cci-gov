'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.storeConfig = void 0;

var _logger = _interopRequireDefault(require('vuex/dist/logger'));

var _root = _interopRequireDefault(require('./modules/root'));

//中间件
var debug = process.env.NODE_ENV !== 'production';
var storeConfig = {
  strict: debug,
  plugins: debug ? [(0, _logger.default)()] : [],
  modules: _root.default,
};
exports.storeConfig = storeConfig;
