'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _includes = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/instance/includes')
);

var _promise = _interopRequireDefault(require('@babel/runtime-corejs3/core-js-stable/promise'));

require('./css/global.scss');

require('@cci-team/sass/lib/core/index.scss');

require('./routers/router');

var _context;

var fn = function fn() {
  return console.log(1);
};

fn();
var pro = new _promise.default();
var isIncludes = (0, _includes.default)((_context = [1, 2, 3])).call(_context, 2);
