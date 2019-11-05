import { environments } from '../constants/environments'

import * as configs from '../_environments'

const environment = process.env.NGMA_APP_ENVIRONMENT || environments.development
const config = configs[environment]

export { config }
