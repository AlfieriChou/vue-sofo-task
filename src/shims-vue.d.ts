declare module '*.vue' {
  import Vue from 'vue'
  import { AxiosInstance } from 'axios'
  export default Vue

  module 'vue/types/vue' {
    interface Vue {
      $axios: AxiosInstance
    }
    interface VueConstructor {
      $axios: AxiosInstance
    }
  }
}
