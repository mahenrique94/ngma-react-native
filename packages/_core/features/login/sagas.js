import { actions } from './constants'

import { all } from 'redux-saga/effects'

function* sagas() {
    yield all([])
}

export { sagas }
