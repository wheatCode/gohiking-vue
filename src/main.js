import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css'
import GAuth from 'vue-google-oauth2'
import VueCookies from 'vue-cookies'
import axios from '@/plugins/axios'
import VueSocialSharing from 'vue-social-sharing'

Vue.prototype.$axios = axios
Vue.config.productionTip = false;


const gauthOption = {
  clientId: '196210496299-inlsrr7d45je22vu7ancickaoaabeavl.apps.googleusercontent.com',
  scope: 'profile email',
  prompt: 'select_account'
}
Vue.use(GAuth, gauthOption)
Vue.use(VueCookies)
Vue.use(VueSocialSharing);

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
