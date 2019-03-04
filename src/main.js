import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bus from '@/lib/bus'
// 如果是开发环境的话，使用mock模拟，这里判断一下
if (process.env.NODE_ENV !== 'production') require('./mock')
Vue.config.productionTip = false
Vue.prototype.$bus = bus

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
