import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/native'

const StyledForm = styled.View`
    align-items: center;
`

import FormBody from './FormBody'
import FormLegend from './FormLegend'
import FormTitle from './FormTitle'

const Form = ({ children, legend, title }) => (
    <StyledForm>
        <FormTitle>{title}</FormTitle>
        <FormLegend>{legend}</FormLegend>
        <FormBody>{children}</FormBody>
    </StyledForm>
)

Form.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object]).isRequired,
    legend: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

export default Form
