import Vue from 'Vue';

// Setup Vue plugins

var VueRouter = require('vue-router');
Vue.use(VueRouter);
Vue.use(require('vue-resource'));
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateHTTP = true;


// Initialise basic Single Page App (SPA)

var App = Vue.extend({});
var router = new VueRouter();

router.map({
  '/': {
    component: {
      template: '<h2>Static Demo App</h2>'
    }
  },
  '/firewall': {
    component: Vue.component('FirewallEditor', require('./components/Firewall/Main.vue'))
  },
  '/icons': {
    component: Vue.component('Icons', require('./components/Icons.vue'))
  },
  '/manifest': {
    component: Vue.component('Manifest', require('./components/Manifest.vue'))
  }
});

router.start(App, 'body');
