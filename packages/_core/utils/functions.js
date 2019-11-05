import { isNull as _isNull, isUndefined as _isUndefined } from 'lodash'

const not = expression => !expression

let debounceTimeout = null

const debounce = (cb, time) => {
    clearTimeout(debounceTimeout)
    debounceTimeout = setTimeout(cb, time)
}

const isEmpty = o => {
    if (o) {
        if (o.length) {
            return !o.length
        }
        if (Object.keys(o).length) {
            return false
        }
    }
    return true
}

const isNotEmpty = o => !isEmpty(o)
const isNotNull = o => not(_isNull(o))
const isUndefined = obj => _isUndefined(obj)
const isNotUndefined = obj => not(_isUndefined(obj))

export { debounce, isEmpty, isNotEmpty, isNotNull, isUndefined, isNotUndefined, not }
