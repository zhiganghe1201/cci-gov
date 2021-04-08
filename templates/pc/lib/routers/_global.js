'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

require('core-js/modules/es.regexp.exec');

require('core-js/modules/es.string.split');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(require('@babel/runtime-corejs3/helpers/typeof'));

var _constants = require('@constants/constants');

/**
 * 全局变量初始化使用 保证_global是最高级别变量
 */

/**
 * 组件内遵守使用this.$global
 * 组件外等特殊场景使用_global
 */
(typeof window === 'undefined' ? 'undefined' : (0, _typeof2.default)(window)) === 'object'
  ? (window._global = {})
  : ((void 0)._global = {}); // GUID  Globally Unique Identifier

_global.GUID = location.host.split('.')[0]; // 程序打开时间

_global.landingTime = new Date(); // 用户信息
// _global.user = Storage.get(TOKEN_KEY) || {};
// 环境

_global.env = process.env.NODE_ENV; // 缩放比例

_global.scale = 1;
_global.height = window.innerHeight;
_global.width = window.innerWidth;
var _default = {
  install: function install(Vue) {
    Vue.prototype.$global = _global;
    /**
     * 权限信息
     */
    // Vue.prototype.$auth = _global.user.auth;
  },
};
exports.default = _default;
