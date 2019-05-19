import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

const normalizeFont = size => size
const normalizeHeight = height => hp(height)
const normalizeWidth = width => wp(width)

export { normalizeFont, normalizeHeight, normalizeWidth }
