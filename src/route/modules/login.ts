import { Route } from '../types'

export const loginRoute: Route = {
  path: '/login',
  name: 'login',
  component: () =>
    import(/* webpackChunkName: "login" */ '../../views/Login.vue')
}
