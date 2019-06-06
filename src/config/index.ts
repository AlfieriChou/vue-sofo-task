import * as _ from 'lodash'
import * as development from './default.config'
import * as stag from './stg.config'
import * as prod from './prod.config'
import { Config } from '@/types'

interface DefaultConfig {
  env: string
  config: Config
}

const configs: DefaultConfig[] = [
  {
    env: 'development',
    config: development.config
  },
  { env: 'staging', config: stag.config },
  {
    env: 'production',
    config: prod.config
  }
]

const env: string = process.env.NODE_ENV || 'development'

const defaultConfig = configs.find(item => {
  return item.env === env
})

export const config: Config = defaultConfig
  ? defaultConfig.config
  : {
      baseUrl: 'http://127.0.0.1:4000'
    }
