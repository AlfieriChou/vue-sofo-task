import Home from '../../views/Home.vue'
import { Route } from '../types'

export const homeRoute: Route = {
  path: '/',
  name: 'home',
  component: () => Home,
  children: [
    {
      path: 'info',
      name: 'info',
      component: () =>
        import(/* webpackChunkName: "info" */ '../../views/Info.vue')
    },
    {
      path: 'task',
      name: 'task',
      component: () =>
        import(/* webpackChunkName: "task" */ '../../views/Task.vue')
    },
    {
      path: 'tag',
      name: 'tag',
      component: () =>
        import(/* webpackChunkName: "tag" */ '../../views/Tag.vue')
    },
    {
      path: 'user',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: "user" */ '../../views/Users.vue')
    }
  ]
}
