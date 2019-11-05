import { combineReducers } from 'redux-immutable'

import { reducers as loginReducers } from '../features/login/reducers'

const reducers = combineReducers({ loginReducers })

export { reducers }
