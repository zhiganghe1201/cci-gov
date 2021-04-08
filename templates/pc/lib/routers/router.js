'use strict';

var _interopRequireDefault = require('@babel/runtime-corejs3/helpers/interopRequireDefault');

var _vue = _interopRequireDefault(require('vue'));

var _vueRouter = _interopRequireDefault(require('vue-router'));

var _vuex = _interopRequireDefault(require('vuex'));

var _setTitle = _interopRequireDefault(require('@common/set-title'));

var _app = _interopRequireDefault(require('@components/app'));

var _login = _interopRequireDefault(require('@containers/login/modules/login'));

var _global = _interopRequireDefault(require('./_global'));

var _root = require('../stores/root');

// import '@babel/polyfill';
var root = document.createElement('div');
document.body.appendChild(root);

// const vm = new Vue({
// 	el: '#app',
// 	data: {
// 		message: 'hello vue'
// 	},
// 	template: '<App />',
// 	components: {
// 		App
// 	}
// })

/**
 * 全局组件
 */
_vue.default.component('set-title', _setTitle.default);

_vue.default.use(_vuex.default);

var store = new _vuex.default.Store(_root.storeConfig);

_vue.default.use(_global.default);

new _vue.default({
  store: store,
  render: function render(h) {
    return h(_login.default);
  },
}).$mount(root);
