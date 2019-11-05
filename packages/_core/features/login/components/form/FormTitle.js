import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { colors } from '../../../../helpers/colors'

const FormTitle = styled.Text`
    color: ${colors.text};
    font-size: 34px;
    font-weight: 500;
    letter-spacing: 0.25px;
    margin-bottom: 7px;
`

FormTitle.propTypes = {
    children: PropTypes.string.isRequired
}

export default FormTitle
