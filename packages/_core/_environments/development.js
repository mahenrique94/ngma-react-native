import { configs } from '../constants/environments'

const config = new Map()

config.set(configs.NGMA_APP_ENVIRONMENT, 'development')
config.set(configs.NGMA_APP_NAMESPACE, 'NGMA_HERBALIFE')
config.set(configs.NGMA_APP_PRIMARY_COLOR, 'white')
config.set(configs.NGMA_APP_TITLE, 'NGMA')
config.set(configs.NGMA_APP_TITLE_COLOR, 'red')

export { config }
