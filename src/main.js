import Vue from 'vue';
import router from './router';
import App from './App.vue';
import './axios';
import store from './vuex';

require('@/assets/main.scss');
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(router);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
