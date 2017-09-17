import Vue from 'vue'
import App from './App.vue'
import VuejsDialog from 'vuejs-dialog'

Vue.use(VuejsDialog)

new Vue({
  el: '#app',
  render: h => h(App)
})
