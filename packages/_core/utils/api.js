import { configs } from '../constants/environments'

import { config } from '../_config/config'
import { http } from '../_config/http'

const handleError = error => {
    if (error.response) {
        if (error.response.data) {
            if (error.response.data.result) {
                throw new Error(error.response.data.result)
            }
            throw new Error(error.response.data)
        }
        throw new Error(error.response)
    } else if (error.request) {
        throw new Error(error.request)
    } else {
        throw new Error(error.message)
    }
}

const handleSuccess = ({ data }) => data.result

const createCommand = (endpoint, command, payload) =>
    http
        .post(`${config.get(configs.NGMA_APP_API_URL)}/${endpoint}`, {
            command,
            payload: { ...payload, company_id: config.get(configs.NGMA_APP_COMPANY_ID) }
        })
        .catch(handleError)

export { createCommand, handleSuccess }
