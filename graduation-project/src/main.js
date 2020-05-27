import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon/iconfont.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Flexable from '@/assets/js/flexable.js'
import axios from 'axios'
// import $ from '@/assets/js/jquery.js'

Vue.use(ElementUI)
Vue.use(Flexable)
// Vue.use($)

Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
