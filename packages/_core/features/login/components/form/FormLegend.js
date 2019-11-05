import PropTypes from 'prop-types'
import styled from 'styled-components/native'

import { colors } from '../../../../helpers/colors'

const FormLegend = styled.Text`
    color: ${colors.text};
    font-size: 14px;
    font-weight: 100;
    letter-spacing: 0.25px;
`

FormLegend.propTypes = {
    children: PropTypes.string.isRequired
}

export default FormLegend
