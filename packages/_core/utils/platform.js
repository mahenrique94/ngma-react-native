import { PLATFORMS } from '../constants/platforms'

import { Platform } from 'react-native'

const dependPlatform = (androidFn, iosFn) => (Platform.OS === PLATFORMS.IOS ? iosFn() : androidFn())

export { dependPlatform }
