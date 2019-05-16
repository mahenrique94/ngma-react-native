import { formats } from '../constants/dateFormats'

import moment from 'moment'

const format = (date, pattern) => moment(date).format(pattern)
const isEquals = (date1, date2) => date1.format(formats.american) === date2.format(formats.american)
const isSameDay = (date1, date2) => date1.isSame(date2, 'day')
const isToday = date => moment().diff(date, 'days') === 0

export { format, isEquals, isSameDay, isToday }
