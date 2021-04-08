'use strict';

var _Object$defineProperty = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty(exports, '__esModule', {
  value: true,
});

exports.getDataRoutes = void 0;

var getDataRoutes = function getDataRoutes(auth, system) {
  return [
    {
      name: '文章分析',
      icon: '',
      show: true,
      value: '/data/article',
      route: '/'.concat(system, '/data/article'),
    },
    {
      name: '视频分析',
      icon: '',
      show: true,
      value: '/data/video',
      route: '/'.concat(system, '/data/video'),
    },
  ];
};

exports.getDataRoutes = getDataRoutes;
