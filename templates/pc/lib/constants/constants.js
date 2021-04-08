'use strict';

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.SYSTEM_REGEX = exports.ACCOUNT_TOKEN_KEY = exports.TOKEN_KEY = exports.DEV_WITH_SERVER = exports.PRE_ROUTER_URL = void 0;

/**
 * 根路由
 */
var PRE_ROUTER_URL = process.env.NODE_ENV === 'developemnt' ? '/' : '/';
/**
 * 开发模式
 * !0 后端 !1前端:3000端口
 */

exports.PRE_ROUTER_URL = PRE_ROUTER_URL;
var DEV_WITH_SERVER = !0;
/**
 * 用于判断登录token / user
 */

exports.DEV_WITH_SERVER = DEV_WITH_SERVER;
var TOKEN_KEY = 'user_token';
exports.TOKEN_KEY = TOKEN_KEY;
var ACCOUNT_TOKEN_KEY = 'accont_token';
exports.ACCOUNT_TOKEN_KEY = ACCOUNT_TOKEN_KEY;
var SYSTEM_REGEX = /^(xls|sd)$/;
exports.SYSTEM_REGEX = SYSTEM_REGEX;
