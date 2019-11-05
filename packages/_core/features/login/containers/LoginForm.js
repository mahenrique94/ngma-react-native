import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import LoginForm from '../screens/LoginForm'

const mapStateToProps = state => ({
    error: selectors.getError(state),
    loading: selectors.getLoading(state)
})

const mapDispatchToProps = {
    requestLogin: actions.requestLogin
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginForm)
