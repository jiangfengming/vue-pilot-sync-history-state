import Vue from 'vue'
import { PathRouter } from 'vue-pilot'
import router from './router'
import App from './App'

Vue.use(PathRouter)

new Vue({
  el: '#app',
  router,
  ...App
})
