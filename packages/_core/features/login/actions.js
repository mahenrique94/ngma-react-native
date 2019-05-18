import { actionsTypes } from './constants'

import { createAction } from '../../utils/actions'

const actions = {
    requestLogin: createAction(actionsTypes.LOGIN_REQUEST_LOGIN),
    requestLoginFacebook: createAction(actionsTypes.LOGIN_REQUEST_LOGIN_FACEBOOK),
    requestLogout: createAction(actionsTypes.LOGIN_REQUEST_LOGOUT),
    requestRegister: createAction(actionsTypes.LOGIN_REQUEST_REGISTER),
    requestRememberPassword: createAction(actionsTypes.LOGIN_REQUEST_REMEMBER_PASSWORD),
    setError: createAction(actionsTypes.LOGIN_SET_ERROR),
    setLoading: createAction(actionsTypes.LOGIN_SET_LOADING)
}

export { actions }
