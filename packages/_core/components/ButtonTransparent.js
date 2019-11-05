import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { TouchableWithoutFeedback } from 'react-native'

import { colors } from '../helpers/colors'

const StyledButton = styled.View`
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 26px;
    padding: 16px;
`

const StyledText = styled.Text`
    color: ${colors.textTransparent};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.23px;
    text-align: center;
    text-transform: uppercase;
`

const Button = ({ children, onClick }) => (
    <TouchableWithoutFeedback onPress={onClick}>
        <StyledButton>
            <StyledText>{children}</StyledText>
        </StyledButton>
    </TouchableWithoutFeedback>
)

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Button
