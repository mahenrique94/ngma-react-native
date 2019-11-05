import { createCommand } from '../../utils/api'

const ROOT_API = '/clientAuth'

const sendCommand = (command, payload) => createCommand(ROOT_API, command, payload)

export { sendCommand }
