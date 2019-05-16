import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const FormBody = styled.View`
    padding: 24px 0;
    width: 100%;
`

FormBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object]).isRequired
}

export default FormBody
