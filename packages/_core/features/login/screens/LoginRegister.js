import PropTypes from 'prop-types'
import React from 'react'

import { withNavigation } from 'react-navigation'

import { i18n } from '../../../_translate/i18n'

import Container from '../../../components/Container'
import Form from '../../../components/form'
import FormLogin from '../components/form'
import Link from '../../../components/Link'

import { loginForm as loginFormFields } from '../fields'

const LoginRegister = ({ error, loading, navigation, requestRegister }) => (
    <Container justifyContent="flex-end">
        <FormLogin legend={i18n.t('subtitles.register')} title={i18n.t('titles.register')}>
            <Form fields={loginFormFields} onSubmit={requestRegister} submitButtonLabel={i18n.t('buttons.register')} />
            <Link onClick={() => navigation.navigate('LoginForm')}>{i18n.t('links.haveAccount')}</Link>
        </FormLogin>
    </Container>
)

LoginRegister.propTypes = {
    error: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
    requestRegister: PropTypes.func.isRequired
}

export default withNavigation(LoginRegister)
