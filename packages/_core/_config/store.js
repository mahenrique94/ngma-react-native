import { configs, environments } from '../constants/environments'

import createSagaMiddleware from 'redux-saga'

import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { isImmutable, Map } from 'immutable'

import { config } from '../_config/config'

import { reducers } from './reducers'

import { sagas } from './sagas'

import { reactotron } from './reactotron'

const isDevelopment = config.get(configs.NGMA_APP_ENVIRONMENT) === environments.development

const logger = createLogger({
    actionTransformer: ({ type, payload }) => {
        if (isImmutable(payload)) {
            return {
                payload: payload.toJS(),
                type
            }
        }
        return { payload, type }
    },
    stateTransformer: state => state.toJS()
})

const sagaMiddleware = createSagaMiddleware({
    sagaMonitor: isDevelopment ? reactotron.createSagaMonitor() : null
})

const initialState = Map()
const enhancers = []
const middleware = [sagaMiddleware]

if (isDevelopment) {
    middleware.push(logger)
    enhancers.push(reactotron.createEnhancer())
}

const store = createStore(reducers, initialState, compose(composeWithDevTools(applyMiddleware(...middleware), ...enhancers)))

sagaMiddleware.run(sagas)

export { store }
