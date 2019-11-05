import { Record } from 'immutable'

const store = Record({
    error: false,
    loading: false
})()

export { store }
