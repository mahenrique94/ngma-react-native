import { all } from 'redux-saga/effects'

import { sagas as loginSagas } from '../features/login/sagas'

function* sagas() {
    yield all([loginSagas()])
}

export { sagas }
