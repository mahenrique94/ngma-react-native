import { createSelector } from 'reselect'

const REDUCER_NAME = 'loginReducers'

const selectors = {
    getError: createSelector(
        state => state.get(REDUCER_NAME).get('error'),
        error => error
    ),
    getLoading: createSelector(
        state => state.get(REDUCER_NAME).get('loading'),
        loading => loading
    )
}

export { selectors }
