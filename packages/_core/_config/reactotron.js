import Reactotron from 'reactotron-react-native'
import sagaPlugin from 'reactotron-redux-saga'

import { reactotronRedux } from 'reactotron-redux'

const reactotron = Reactotron.configure({
    name: 'NGMA - Herbalife'
})
    .use(reactotronRedux())
    .use(sagaPlugin())
    .useReactNative()
    .connect()

export { reactotron }
