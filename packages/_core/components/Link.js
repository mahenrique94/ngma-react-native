import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { TouchableWithoutFeedback } from 'react-native'

import { colors } from '../helpers/colors'

const StyledText = styled.Text`
    color: ${colors.text};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.25px;
    text-align: center;
`

const Button = ({ children, onClick }) => (
    <TouchableWithoutFeedback onPress={onClick}>
        <StyledText>{children}</StyledText>
    </TouchableWithoutFeedback>
)

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
