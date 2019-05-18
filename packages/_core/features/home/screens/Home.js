import { configs } from '../../../constants/environments'

import { config } from '../../../_config/config'

import PropTypes from 'prop-types'
import React from 'react'

import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

const Home = ({ requestLogout }) => (
    <View style={{ ...styles.container, backgroundColor: config.get(configs.NGMA_APP_PRIMARY_COLOR) }}>
        <Text style={{ ...styles.title, color: config.get(configs.NGMA_APP_TITLE_COLOR) }}>{config.get(configs.NGMA_APP_TITLE)}</Text>
        <TouchableWithoutFeedback onPress={requestLogout}>
            <View
                style={{
                    ...styles.button,
                    backgroundColor: config.get(configs.NGMA_APP_TITLE_COLOR),
                    color: config.get(configs.NGMA_APP_PRIMARY_COLOR)
                }}
            >
                <Text>Logout</Text>
            </View>
        </TouchableWithoutFeedback>
    </View>
)

const styles = StyleSheet.create({
    button: {
        borderRadius: 7,
        padding: 16
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 54
    }
})

Home.propTypes = {
    requestLogout: PropTypes.func.isRequired
}

export default Home
