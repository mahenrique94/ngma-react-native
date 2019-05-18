import { facebook } from '../../../constants/permissions'

import PropTypes from 'prop-types'
import React from 'react'

import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { withNavigation } from 'react-navigation'

import { i18n } from '../../../_translate/i18n'

import { not } from '../../../utils/functions'

import ButtonGradient from '../../../components/ButtonGradient'
import ButtonTransparent from '../../../components/ButtonTransparent'
import Container from '../../../components/Container'
import Form from '../components/form'
import Link from '../../../components/Link'
import Row from '../../../components/Row'

const LoginSignUp = ({ navigation }) => {
    const login = () => {
        LoginManager.logInWithReadPermissions(facebook)
            .then(({ isCancelled }) => {
                if (not(isCancelled)) {
                    AccessToken.getCurrentAccessToken().then(data => {
                        console.log('Pegando token...')
                        console.log(data)
                    })
                }
            })
            .catch(error => console.log(error))
    }

    return (
        <Container justifyContent="flex-end">
            <Form legend={i18n.t('subtitles.signUp')} title={i18n.t('titles.signUp')}>
                <Row>
                    <ButtonGradient block icon="facebook" onClick={login}>
                        {i18n.t('buttons.signUpFacebook')}
                    </ButtonGradient>
                </Row>
                <Row>
                    <ButtonTransparent onClick={() => null}>{i18n.t('buttons.signUpEmail')}</ButtonTransparent>
                </Row>
                <Link onClick={() => navigation.navigate('LoginForm')}>{i18n.t('links.haveAccount')}</Link>
            </Form>
        </Container>
    )
}

LoginSignUp.propTypes = {
    navigation: PropTypes.object.isRequired
}

export default withNavigation(LoginSignUp)
