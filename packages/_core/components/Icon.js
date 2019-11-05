import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { colors } from '../helpers/colors'

const StyledIcon = styled(FontAwesomeIcon)`
    margin-right: ${({ withMargin }) => (withMargin ? 16 : 0)}px;
`

const Icon = ({ color, icon, size, withMargin }) => <StyledIcon color={color} name={icon} size={size} withMargin={withMargin} />

Icon.defaultProps = {
    color: colors.text,
    size: 20,
    withMargin: false
}

Icon.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number,
    withMargin: PropTypes.bool
}

export default Icon
