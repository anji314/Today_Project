import Vue from 'vue'
import App from './App.vue'
import vuerouter from'vue-router';
import KakaoLogout from './components/Login_service/KakaoLogout.vue';

Vue.use(vuerouter);
Vue.component('vue-kakao-logout',KakaoLogout);

new Vue({
  el: '#app',
  render: h => h(App)
})
