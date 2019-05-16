import React from 'react'

import { AccessToken, LoginManager } from 'react-native-fbsdk'

import { i18n } from '../../../_translate/i18n'

import ButtonGradient from '../../../components/ButtonGradient'
import ButtonTransparent from '../../../components/ButtonTransparent'
import Container from '../../../components/Container'
import Form from '../components/form'
import Link from '../../../components/Link'
import Row from '../../../components/Row'

const LoginSignUp = () => {
    const login = () => {
        LoginManager.logInWithReadPermissions(['email'])
            .then(result => {
                if (result.isCancelled) {
                    console.log('Cancelado')
                } else {
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
                    <ButtonGradient icon="facebook" onClick={() => login()}>
                        {i18n.t('buttons.signUpFacebook')}
                    </ButtonGradient>
                </Row>
                <Row>
                    <ButtonTransparent onClick={() => null}>{i18n.t('buttons.signUpEmail')}</ButtonTransparent>
                </Row>
                <Link onClick={() => null}>{i18n.t('links.haveAccount')}</Link>
            </Form>
        </Container>
    )
}

LoginSignUp.propTypes = {}

export default LoginSignUp
