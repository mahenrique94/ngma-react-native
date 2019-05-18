import PropTypes from 'prop-types'
import React from 'react'

import { withNavigation } from 'react-navigation'

import { i18n } from '../../../_translate/i18n'

import Container from '../../../components/Container'
import Form from '../../../components/form'
import FormLogin from '../components/form'
import Link from '../../../components/Link'

import { loginForm as loginFormFields } from '../fields'

const LoginForm = ({ navigation }) => (
    <Container justifyContent="flex-end">
        <FormLogin legend={i18n.t('subtitles.login')} title={i18n.t('titles.login')}>
            <Form
                fields={loginFormFields}
                initialValues={{}}
                onSubmit={values => console.log(values)}
                submitButtonLabel={i18n.t('buttons.login')}
            />
            <Link onClick={() => navigation.navigate('LoginRemember')}>{i18n.t('links.forgetPassword')}</Link>
        </FormLogin>
    </Container>
)

LoginForm.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default withNavigation(LoginForm)
