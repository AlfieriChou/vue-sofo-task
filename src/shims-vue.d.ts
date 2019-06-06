declare module '*.vue' {
  import Vue from 'vue'
  import { AxiosInstance } from 'axios'
  export default Vue

  module 'vue/types/vue' {
    interface Config {
      baseUrl: string
    }

    interface Vue {
      $axios: AxiosInstance
      $config: Config
    }
    interface VueConstructor {
      $axios: AxiosInstance
      $config: Config
    }
  }
}
