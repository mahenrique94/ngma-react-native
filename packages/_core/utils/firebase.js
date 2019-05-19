import firebase from 'react-native-firebase'

import { not } from './functions'

const checkPermission = async () => {
    const hasPermission = await firebase.messaging().hasPermission()
    if (not(hasPermission)) {
        await firebase.messaging().requestPermission()
    }
}

const listenTopic = topic => firebase.messaging().subscribeToTopic(topic)

export { checkPermission, listenTopic }
