import Vue from 'Vue';

// Setup vue-resource
Vue.use(require('vue-resource'));
Vue.http.options.xhr = {withCredentials: true};
Vue.http.options.emulateHTTP = true;

import FirewallList from './components/Firewall/List.vue'
import FirewallRule from './components/Firewall/Rule.vue'
import RuleAddDialog from './components/Firewall/AddDialog.vue'
import RuleDeleteDialog from './components/Firewall/DeleteDialog.vue'

new Vue({
  el: 'body',
  components: {
    FirewallList,
    FirewallRule,
    RuleAddDialog,
    RuleDeleteDialog,
  }
});