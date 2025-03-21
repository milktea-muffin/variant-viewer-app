import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import atoms from './plugins/atoms'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  atoms,
  render: h => h(App)
}).$mount('#app')
