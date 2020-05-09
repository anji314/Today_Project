import Vue from 'vue'
import App from './App.vue'
import vuerouter from'vue-router';

Vue.use(vuerouter);

new Vue({
  el: '#app',
  render: h => h(App)
})
