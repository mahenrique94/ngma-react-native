import { handleActions } from 'redux-actions'

import { actions } from './actions'

import { store } from './store'

const reducers = handleActions(
    {
        [actions.setError]: (state, { payload }) => state.set('error', payload),
        [actions.setLoading]: (state, { payload }) => state.set('loading', payload)
    },
    store
)

export { reducers }
