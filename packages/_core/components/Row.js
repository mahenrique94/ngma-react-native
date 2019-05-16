import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Row = styled.View`
    margin-bottom: 24px;
`

Row.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Row
