'use strict';

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.getSystemChildMenus = void 0;

var _home = require('./home');

var getSystemChildMenus = function getSystemChildMenus(auth, system) {
  return {
    home: (0, _home.getHomeRoutes)(auth, system),
  };
};

exports.getSystemChildMenus = getSystemChildMenus;
