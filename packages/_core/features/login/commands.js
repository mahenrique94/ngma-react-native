import { commandsTypes } from './constants'

import { handleSuccess } from '../../utils/api'

import { sendCommand } from './api'

const commands = {
    login: payload => sendCommand(commandsTypes.LOGIN, payload).then(handleSuccess),
    loginFacebook: token => sendCommand(commandsTypes.LOGIN_FACEBOOK, { token }).then(handleSuccess),
    register: payload => sendCommand(commandsTypes.REGISTER, payload).then(handleSuccess)
}

export { commands }
