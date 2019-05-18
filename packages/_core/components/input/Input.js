import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { compose } from 'recompose'
import { TextField } from 'react-native-material-textfield'
import { handleTextInput, withNextInputAutoFocusInput } from 'react-native-formik'

import { colors } from '../../helpers/colors'

const Input = styled(TextField).attrs({
    baseColor: colors.text,
    lineWidth: 1,
    textColor: colors.text,
    tintColor: '#84565e'
})``

Input.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
}

export default compose(
    handleTextInput,
    withNextInputAutoFocusInput
)(Input)
