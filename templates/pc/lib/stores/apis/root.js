'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _Object$defineProperty2 = require('@babel/runtime-corejs3/core-js-stable/object/define-property');

_Object$defineProperty2(exports, '__esModule', {
  value: true,
});

exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/object/define-property')
);

var _defineProperties = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/object/define-properties')
);

var _getOwnPropertyDescriptors = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors')
);

var _forEach = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/instance/for-each')
);

var _getOwnPropertyDescriptor = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor')
);

var _filter = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/instance/filter')
);

var _getOwnPropertySymbols = _interopRequireDefault(
  require('@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols')
);

var _keys = _interopRequireDefault(require('@babel/runtime-corejs3/core-js-stable/object/keys'));

var _defineProperty3 = _interopRequireDefault(
  require('@babel/runtime-corejs3/helpers/defineProperty')
);

var _constants = require('@constants/constants');

var _common2 = _interopRequireDefault(require('./_common'));

var _login = _interopRequireDefault(require('./login'));

var _home = _interopRequireDefault(require('./home'));

function ownKeys(object, enumerableOnly) {
  var keys = (0, _keys.default)(object);
  if (_getOwnPropertySymbols.default) {
    var symbols = (0, _getOwnPropertySymbols.default)(object);
    if (enumerableOnly)
      symbols = (0, _filter.default)(symbols).call(symbols, function (sym) {
        return (0, _getOwnPropertyDescriptor.default)(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      var _context;
      (0, _forEach.default)((_context = ownKeys(Object(source), true))).call(
        _context,
        function (key) {
          (0, _defineProperty3.default)(target, key, source[key]);
        }
      );
    } else if (_getOwnPropertyDescriptors.default) {
      (0, _defineProperties.default)(target, (0, _getOwnPropertyDescriptors.default)(source));
    } else {
      var _context2;
      (0, _forEach.default)((_context2 = ownKeys(Object(source)))).call(_context2, function (key) {
        (0,
        _defineProperty2.default)(target, key, (0, _getOwnPropertyDescriptor.default)(source, key));
      });
    }
  }
  return target;
}

var API = _objectSpread(_objectSpread({}, _common2.default), _login.default);

var baseUrl; // if (__DEV__) {
// }

console.log(_common2.default);
var _default = API;
exports.default = _default;
