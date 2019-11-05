import { connect } from 'react-redux'

import { actions } from '../../login/actions'

import Home from '../screens/Home'

const mapDispatchToProps = {
    requestLogout: actions.requestLogout
}

export default connect(
    null,
    mapDispatchToProps
)(Home)
