import Home from '@/views/Home'
export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page', //路由别名, 一级路由注意前面的斜杠
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  // 动态参数
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '@/views/Detail.vue' )
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'son',
        name: 'son',
        alias: 'son_alias', // 路由别名， 子路由不用加斜杠
        component: () => import('@/views/son.vue')
      }
    ]
  },
  // 命名视图
  {
    path: '/namedView',
    components: {
      default: () => import('@/views/Home.vue'),
      email: () => import('@/views/Email.vue'),
      tel: () => import('@/views/Tel.vue')
    }
  },
  // 重定向
  {
    // 路径字符串
    // path: '/redirect',
    // redirect: '/about'

    // name对象
    // path: '/redirect',
    // redirect: {
    //   name: 'about'
    // }

    // function
    path: '/redirect',
    redirect: to => {
      console.log(to)
      // 返回字符串
      // return '/about'
      // 返回对象
      return {
        name: 'about'
      }
    }
  }
]
