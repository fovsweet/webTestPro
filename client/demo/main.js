import Vue from 'vue'
import store from './vuex/store'
import App from './components/App.vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

new Vue({
  store, // inject store to all children
  el: 'body',
  components: { App }
})
