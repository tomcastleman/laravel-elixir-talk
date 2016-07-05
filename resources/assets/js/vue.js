import Vue from 'Vue';

// Setup Vue plugins

var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.use(require('vue-resource'));
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateHTTP = true;


// Initialise App

var App = Vue.extend({});
var router = new VueRouter();

router.map({
  '/': {
    component: Vue.component('List', require('./components/Firewall/ListPage.vue'))
  },
  '/add': {
    component: Vue.component('Add', require('./components/Firewall/AddPage.vue'))
  }
});

router.start(App, 'body');
