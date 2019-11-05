import PropTypes from 'prop-types'
import React from 'react'

import Input from '../Input'

const FormField = props => <Input {...props} />

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
}

export default FormField
