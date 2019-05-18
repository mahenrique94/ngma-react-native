import { facebook } from '../../../constants/permissions'

import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import SyncStorage from 'sync-storage'

import { AccessToken, LoginManager } from 'react-native-fbsdk'
import { withNavigation } from 'react-navigation'

import { i18n } from '../../../_translate/i18n'

import { isLogged } from '../../../utils/auth'
import { not } from '../../../utils/functions'

import ButtonGradient from '../../../components/ButtonGradient'
import ButtonTransparent from '../../../components/ButtonTransparent'
import Container from '../../../components/Container'
import Form from '../components/form'
import Link from '../../../components/Link'
import Row from '../../../components/Row'

const LoginSignUp = ({ loading, navigation, requestLoginFacebook }) => {
    useEffect(() => {
        SyncStorage.init().then(() => {
            if (isLogged()) {
                navigation.navigate('Home')
            }
        })
    }, [])

    const login = () => {
        LoginManager.logInWithReadPermissions(facebook)
            .then(({ isCancelled }) => {
                if (not(isCancelled)) {
                    AccessToken.getCurrentAccessToken().then(requestLoginFacebook)
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
                    <ButtonTransparent onClick={() => navigation.navigate('LoginRegister')}>
                        {i18n.t('buttons.signUpEmail')}
                    </ButtonTransparent>
                </Row>
                <Link onClick={() => navigation.navigate('LoginForm')}>{i18n.t('links.haveAccount')}</Link>
            </Form>
        </Container>
    )
}

LoginSignUp.propTypes = {
    loading: PropTypes.bool.isRequired,
    navigation: PropTypes.object.isRequired,
    requestLoginFacebook: PropTypes.func.isRequired
}

export default withNavigation(LoginSignUp)
