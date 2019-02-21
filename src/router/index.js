import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'

Vue.use(Router)

export default new Router({
  mode: 'history', // 还有一种是hash
  // base: process.env.BASE_URL,
  routes
})
