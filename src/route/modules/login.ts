import { RouteConfig } from 'vue-router'

export const loginRoute: RouteConfig = {
  path: '/login',
  name: 'login',
  component: () =>
    import(/* webpackChunkName: "login" */ '../../views/Login.vue')
}
