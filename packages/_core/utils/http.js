import { CODES } from '../constants/HTTP'

const handleError = error => {
    console.log(error)
    throw new Error(error.response.data)
}

const handleSuccess = ({ data }) => data
const responseWas = (responseCode, httpCode) => responseCode === httpCode
const responseWasOK = responseCode => responseWas(responseCode, CODES.OK)

export { handleError, handleSuccess, responseWasOK }
