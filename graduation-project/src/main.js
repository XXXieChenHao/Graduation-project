import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Flexable from '@/assets/js/flexable.js'
import axios from 'axios'
import VueLazyload from 'vue-lazyload'
require('../src/assets/js/mock')

Vue.use(ElementUI)
Vue.use(Flexable)
Vue.use(VueLazyload)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.prototype.$http = axios
Vue.config.productionTip = false

axios.interceptors.request.use(function (config) {
  console.log('12312312')
  return config
}, function (error) {
  return Promise.reject(error)
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
