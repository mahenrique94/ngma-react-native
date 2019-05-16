import { createSelector } from 'reselect'

const REDUCER_NAME = 'loginReducers'

const getErrorObservable = state => state.get(REDUCER_NAME).get('error')
const getLoadingObservable = state => state.get(REDUCER_NAME).get('loading')

const getErrorSelector = createSelector(
    getErrorObservable,
    error => error
)

const getLoadingSelector = createSelector(
    getLoadingObservable,
    loading => loading
)

export { getErrorSelector, getLoadingSelector }
