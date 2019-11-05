import { configs } from '../constants/environments'

import { createAction as reduxCreateAction } from 'redux-actions'

import { config } from '../_config/config'

const createAction = name => reduxCreateAction(`${config.get(configs.NGMA_APP_NAMESPACE).toUpperCase()}_${name.toUpperCase()}`)
const getAction = name => `${config.get(configs.NGMA_APP_NAMESPACE).toUpperCase()}_${name.toUpperCase()}`

export { createAction, getAction }
