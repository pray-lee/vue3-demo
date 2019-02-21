import Home from '@/views/Home'
export default [
  {
    path: '/',
    name: 'home',
    alias: '/home_page', //路由别名, 一级路由注意前面的斜杠
    component: Home,
    // 路由传参（函数模式）--- 可以对传过来的参数做进一步处理, type这个名字就作为home组件里的props存在
    props: route => ({ type: route.query.type })
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    // 路由传参（对象模式） --- 它会被按原样设置为组件属性。当 props 是静态的时候有用
    props: {
      content: '对象模式的路由传参, 是静态的.'
    }
  },
  // 动态参数
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import( '@/views/Detail.vue' ),
    //路由传参（布尔模式）---- props设置为true ,在参数接收页面就不用$route.params.id接收参数了。直接使用props属性接收即可。见detail.vue文件
    props: true
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
  },
  // 如果没有匹配到以上任意一条，则跳转到404页面
  {
    path: '*',
    component: () => import('@/views/error_404.vue')
  }
]
