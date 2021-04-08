'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

require('core-js/modules/es.object.to-string');

require('core-js/modules/es.promise');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.loginConfig = void 0;

var _promise = _interopRequireDefault(require('@babel/runtime-corejs3/core-js-stable/promise'));

var _interopRequireWildcard2 = _interopRequireDefault(
  require('@babel/runtime-corejs3/helpers/interopRequireWildcard')
);

var _main = _interopRequireDefault(require('./modules/main'));

var loginConfig = [
  {
    path: '/login',
    name: 'login',
    component: function component() {
      return _promise.default.resolve().then(function () {
        return (0, _interopRequireWildcard2.default)(require('./modules/main.vue'));
      });
    },
  },
];
exports.loginConfig = loginConfig;
