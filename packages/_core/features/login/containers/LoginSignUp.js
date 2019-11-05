import { connect } from 'react-redux'

import { actions } from '../actions'
import { selectors } from '../selectors'

import LoginSignUp from '../screens/LoginSignUp'

const mapStateToProps = state => ({
    loading: selectors.getLoading(state)
})

const mapDispatchToProps = {
    requestLoginFacebook: actions.requestLoginFacebook
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginSignUp)
