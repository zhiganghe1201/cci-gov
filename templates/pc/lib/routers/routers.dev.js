'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.basicRoutes = void 0;

var _concat = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/instance/concat')
);

var _toConsumableArray2 = _interopRequireDefault(
  require('@babel/runtime-corejs3/helpers/toConsumableArray')
);

var _app = require('../containers/login/app');

var _context;

var basicRoutes = {
  base: '/',
  // base: PRE_ROUTER_URL,
  mode: 'history',
  routes: (0, _concat.default)((_context = [])).call(
    _context,
    (0, _toConsumableArray2.default)(_app.loginConfig),
    [
      {
        path: '*',
        redirect: function redirect(to) {
          return '/login';
        },
      },
    ]
  ),
};
exports.basicRoutes = basicRoutes;
