import Vue from 'vue'
import Vuex from 'vuex'
import { userStore } from './modules/user'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    userStore
  }
})
