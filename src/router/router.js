import Home from '@/views/Home'
export default [
  {
    path: '/',
    name: 'home',
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
    component: () => import( '@/views/Detail.vue' )
  },
  // 嵌套路由
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        path: 'son',
        component: () => import('@/views/son.vue')
      }
    ]
  }
]
