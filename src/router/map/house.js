export default [
    {
      path: '/',
      name: 'home',
      component: resolve => require(['@/views/Home.vue'], resolve),
      meta: {
        title: '首页'
      }
    }
    // {
    //   path: '/city-list',
    //   name: 'city-list',
    //   component: resolve => require(['@/views/cityList.vue'], resolve),
    //   meta: {
    //     title: '城市选择'
    //   }
    // }
  ]
  