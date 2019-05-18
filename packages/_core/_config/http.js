import { configs } from '../constants/environments'
import { CODES } from '../constants/HTTP'
import { times } from '../constants/times'

import axios from 'axios'

import { config } from './config'

import { getToken, isLogged } from '../utils/auth'

import NavigationService from '../services/NavigationService'

const API_URL = config.get(configs.NGMA_APP_API_URL)

const http = axios.create({
    baseURL: API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: times.THIRD_SECONDS
})

http.interceptors.request.use(request => {
    if (isLogged()) {
        request.headers.Authorization = getToken()
    }
    return request
})

http.interceptors.response.use(null, error => {
    const { response } = error
    if (response) {
        const { status } = response
        if (status === CODES.UNAUTHORIZED) {
            NavigationService.navigate('LoginForm')
        }
    }
})

export { http }
