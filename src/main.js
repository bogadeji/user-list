import Vue from 'vue'
// import { createApp } from 'vue'
import vuetify from '@/plugins/vuetify'
import App from './App.vue'
import store from './store'


Vue.config.productionTip = false

new Vue({
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
