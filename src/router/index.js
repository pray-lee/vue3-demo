import Vue from 'vue'
import Router from 'vue-router'
import routes from './router'
import { setTitle } from '@/lib/util'

Vue.use(Router)

const router = new Router({
  mode: 'history' ,// 还有hash
  routes
})

//导航全局前置守卫, 一般都在index里配置
// 模拟登陆
const HAS_LOGIN = true
router.beforeEach((to, from, next) => {
  // 通过路由元信息的设置可以设置每一页的网页title
  to.meta && setTitle(to.meta.title)

  alert('路由全局前置守卫触发')
  if (to.name !== 'login'){
    if(HAS_LOGIN) next()
    else next({name: 'login'})
  } else {
    if(HAS_LOGIN) next({name: 'home'})
    else next()
  }
})

router.afterEach((to, from) => {
  alert('路由全局后置守卫触发')
})

export default router
