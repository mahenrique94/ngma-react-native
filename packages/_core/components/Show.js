import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

const Show = ({ children, only }) => only && <Fragment>{children}</Fragment>

Show.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
    only: PropTypes.bool.isRequired
}

export default Show
