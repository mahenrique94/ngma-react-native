import * as yup from 'yup'

import { i18n } from '../../_translate/i18n'

const loginForm = [
    {
        label: i18n.t('labels.email'),
        name: 'email',
        type: 'email',
        validation: yup
            .string()
            .email()
            .lowercase()
            .required()
            .trim()
    },
    {
        label: i18n.t('labels.password'),
        name: 'password',
        type: 'password',
        validation: yup
            .string()
            .required()
            .trim()
    }
]

const loginRemember = [
    {
        label: i18n.t('labels.email'),
        name: 'email',
        type: 'email',
        validation: yup
            .string()
            .email()
            .lowercase()
            .required()
            .trim()
    }
]

export { loginForm, loginRemember }
