import Vue from 'vue'
import App from './App.vue'
import { router } from './route'
import { store } from './store'
import 'element-ui/lib/theme-chalk/index.css'
import { Table, TableColumn, Col, Row, Button, Checkbox } from 'element-ui'
import axios from 'axios'
import { config } from './config'

Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Col)
Vue.use(Row)
Vue.use(Button)
Vue.use(Checkbox)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$config = config

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
