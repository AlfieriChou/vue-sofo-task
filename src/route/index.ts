import Vue from 'vue'
import Router from 'vue-router'
import { loginRoute } from './modules/login'
import { homeRoute } from './modules/home'

Vue.use(Router)

export default new Router({
  routes: [loginRoute, homeRoute]
})
