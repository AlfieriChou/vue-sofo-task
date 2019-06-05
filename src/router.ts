import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'info',
          name: 'info',
          component: () =>
            import(/* webpackChunkName: "info" */ './views/Info.vue')
        },
        {
          path: 'task',
          name: 'task',
          component: () =>
            import(/* webpackChunkName: "task" */ './views/Task.vue')
        },
        {
          path: 'tag',
          name: 'tag',
          component: () =>
            import(/* webpackChunkName: "tag" */ './views/Tag.vue')
        },
        {
          path: 'user',
          name: 'user',
          component: () =>
            import(/* webpackChunkName: "user" */ './views/Users.vue')
        }
      ]
    }
  ]
})
