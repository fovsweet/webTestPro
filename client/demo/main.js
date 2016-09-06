import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'

console.log(123)

new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
