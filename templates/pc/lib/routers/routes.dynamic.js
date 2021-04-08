'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _classCallCheck2 = _interopRequireDefault(
  require('@babel/runtime-corejs3/helpers/classCallCheck')
);

var _createClass2 = _interopRequireDefault(require('@babel/runtime-corejs3/helpers/createClass'));

var _lodash = require('lodash');

var _vueRouter = _interopRequireDefault(require('vue-router'));

var Manager = /*#__PURE__*/ (function () {
  function Manager(basicRoutes, dynamicRoutes) {
    (0, _classCallCheck2.default)(this, Manager);
    this.basicRoutes = basicRoutes;
    this.dynamicRoutes = dynamicRoutes;
    this.router = null;
    this.config = this.init();
  }

  (0, _createClass2.default)(Manager, [
    {
      key: 'init',
      value: function init() {},
    },
  ]);
  return Manager;
})();
