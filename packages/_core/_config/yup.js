import { setLocale } from 'yup'

import { i18n } from '../_translate/i18n'

const validationsFormKey = 'validations.form'

setLocale({
    string: {
        email: i18n.t(`${validationsFormKey}.email`)
    }
})
