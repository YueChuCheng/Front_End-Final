import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import $ from'jquery'
import VueFirestore from 'vue-firestore'

Vue.config.productionTip = false
Vue.use(VueFirestore)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
