import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import Cookies from 'vue-cookies'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'

Vue.use(Cookies);

Vue.use(VuePlyr);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  beforeCreate() {
    const id = Cookies.get('access_id');
    const password = Cookies.get('access_password');
    console.log('befirecreate', id, password);
    if (id !== null && password !== null) {
      this.$store.dispatch('user/login', {
        id: id,
        password: password,
      })
    }
  },
  render: h => h(App)
}).$mount('#app')
