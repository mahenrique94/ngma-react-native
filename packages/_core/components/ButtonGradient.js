import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

import { TouchableWithoutFeedback } from 'react-native'

import { colors } from '../helpers/colors'

import Icon from './Icon'

const StyleGradient = styled(LinearGradient)`
    align-items: center;
    border-radius: 26px;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.17);
    flex-direction: row;
    justify-content: center;
    padding: 16px;
`

const StyledButton = styled.Text`
    color: ${colors.text};
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 1.23px;
    text-align: center;
    text-transform: uppercase;
`

const Button = ({ children, icon, onClick }) => (
    <TouchableWithoutFeedback onPress={onClick}>
        <StyleGradient colors={[colors.primary, colors.secondary]} end={{ x: 1, y: 0 }} start={{ x: 0, y: 0 }}>
            {icon && <Icon icon={icon} withMargin />}
            <StyledButton>{children}</StyledButton>
        </StyleGradient>
    </TouchableWithoutFeedback>
)

Button.defaultProps = {
    icon: null
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    icon: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

export default Button
