import { AppRegistry } from 'react-native'

import { configs } from '@ngma/core/constants/environments'

import { config } from '@ngma/core/_environments/development'

import App from '@ngma/core/containers/App'

import { name as appName } from './app.json'

import { NGMA_APP_PRIMARY_COLOR, NGMA_APP_TITLE, NGMA_APP_TITLE_COLOR } from 'react-native-dotenv'

config.set(configs.NGMA_APP_PRIMARY_COLOR, NGMA_APP_PRIMARY_COLOR)
config.set(configs.NGMA_APP_TITLE, NGMA_APP_TITLE)
config.set(configs.NGMA_APP_TITLE_COLOR, NGMA_APP_TITLE_COLOR)

AppRegistry.registerComponent(appName, () => App)
