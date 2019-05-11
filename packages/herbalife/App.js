import React from 'react'

import { StyleSheet, View } from 'react-native'
import { AccessToken, LoginButton } from 'react-native-fbsdk'

const App = () => {

    const handleLogin = (error, result) => {
        console.log('Entrando...')
        if (error) {
            console.error(error)
        } else {
            console.log('Entrei...')
            console.log(result)
            AccessToken.getCurrentAccessToken().then(data => {
                console.log('Pegando token...')
                console.log(data)
            })            
        }
    }

    const handleLogout = () => console.log('Saindo...')

    return (
        <View style={styles.container}>
            <LoginButton
                onLoginFinished={handleLogin}
                onLogoutFinished={handleLogout}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export default App