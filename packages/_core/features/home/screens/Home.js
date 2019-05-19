import { configs } from '../../../constants/environments'

import { config } from '../../../_config/config'

import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Home = () => (
    <View style={{ ...styles.container, backgroundColor: config.get(configs.NGMA_APP_PRIMARY_COLOR) }}>
        <Text style={{ ...styles.title, color: config.get(configs.NGMA_APP_TITLE_COLOR) }}>{config.get(configs.NGMA_APP_TITLE)}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 54
    }
})

export default Home
