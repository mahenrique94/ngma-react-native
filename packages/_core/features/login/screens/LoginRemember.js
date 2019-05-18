import PropTypes from 'prop-types'
import React from 'react'

import { withNavigation } from 'react-navigation'

import { i18n } from '../../../_translate/i18n'

import Container from '../../../components/Container'
import Form from '../../../components/form'
import FormLogin from '../components/form'
import Link from '../../../components/Link'

import { loginRemember as loginRememberFields } from '../fields'

const LoginRemember = ({ navigation }) => (
    <Container justifyContent="flex-end">
        <FormLogin legend={i18n.t('subtitles.remember')} title={i18n.t('titles.remember')}>
            <Form
                fields={loginRememberFields}
                initialValues={{}}
                onSubmit={values => console.log(values)}
                submitButtonLabel={i18n.t('buttons.sendEmail')}
            />
            <Link onClick={() => navigation.navigate('LoginRemember')}>{i18n.t('links.notAMember')}</Link>
        </FormLogin>
    </Container>
)

LoginRemember.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default withNavigation(LoginRemember)
