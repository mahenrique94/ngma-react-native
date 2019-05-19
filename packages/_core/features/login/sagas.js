import { actionsTypes } from './constants'

import { all, call, put, takeLatest } from 'redux-saga/effects'

import { getAction } from '../../utils/actions'
import { logError } from '../../utils/log'
import { removeToken, setToken } from '../../utils/auth'

import { actions } from './actions'

import { commands } from './commands'

import NavigationService from '../../services/NavigationService'

function* login(command, payload) {
    try {
        yield put(actions.setLoading(true))
        const response = yield call(command, payload)
        if (response) {
            yield setToken(response)
            yield NavigationService.navigate('Home')
            yield put(actions.setLoading(false))
        }
    } catch (error) {
        yield put(actions.setError(true))
        yield put(actions.setLoading(false))
        yield logError(error)
    }
}

function* loginRequested({ payload }) {
    yield login(commands.login, payload)
}

function* loginFacebookRequested({ payload }) {
    yield login(commands.loginFacebook, payload.accessToken)
}

function* logoutRequested() {
    yield removeToken()
    yield NavigationService.navigate('LoginForm')
}

function* registerRequested({ payload }) {
    try {
        yield put(actions.setLoading(true))
        const response = yield call(commands.register, payload)
        if (response) {
            yield NavigationService.navigate('LoginForm')
            yield put(actions.setLoading(false))
        }
    } catch (error) {
        yield put(actions.setError(true))
        yield put(actions.setLoading(false))
        yield logError(error)
    }
}

function* watchLoginRequest() {
    yield takeLatest(getAction(actionsTypes.LOGIN_REQUEST_LOGIN), loginRequested)
}

function* watchLoginFacebookRequest() {
    yield takeLatest(getAction(actionsTypes.LOGIN_REQUEST_LOGIN_FACEBOOK), loginFacebookRequested)
}

function* watchLogoutRequest() {
    yield takeLatest(getAction(actionsTypes.LOGIN_REQUEST_LOGOUT), logoutRequested)
}

function* watchRegisterRequest() {
    yield takeLatest(getAction(actionsTypes.LOGIN_REQUEST_REGISTER), registerRequested)
}

function* sagas() {
    yield all([watchLoginRequest(), watchLoginFacebookRequest(), watchLogoutRequest(), watchRegisterRequest()])
}

export { sagas }
