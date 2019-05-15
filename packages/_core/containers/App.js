import { PREFIXES } from '@constants/platforms'

import React from 'react'

import { Provider } from 'react-redux'

import Routes from '@routes'

import { store } from '@cfg/store'

import { dependPlatform } from '@utils/platform'

import NavigationService from '@/services/NavigationService'

const prefix = dependPlatform(() => PREFIXES.ANDROID, () => PREFIXES.IOS)

const App = () => (
    <Provider store={store}>
        <Routes ref={navigatorRef => NavigationService.setTopLevelNavigator(navigatorRef)} uriPrefix={prefix} />
    </Provider>
)

export default App
