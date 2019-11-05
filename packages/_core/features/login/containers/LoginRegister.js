import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import LoginRegister from '../screens/LoginRegister'

const mapStateToProps = state => ({
    error: selectors.getError(state),
    loading: selectors.getLoading(state)
})

const mapDispatchToProps = {
    requestRegister: actions.requestRegister
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginRegister)
