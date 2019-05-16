import { isNull, isUndefined } from 'lodash'

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
const isNotNull = o => not(isNull(o))
const isUndefined = obj => isUndefined(obj)
const isNotUndefined = obj => not(isUndefined(obj))

export { debounce, isEmpty, isNotEmpty, isNotNull, isUndefined, isNotUndefined, not }
