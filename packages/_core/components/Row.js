import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Row = styled.View`
    align-items: ${({ center }) => (center ? 'center' : 'stretch')};
    margin-bottom: 24px;
`

Row.defaultProps = {
    center: false
}

Row.propTypes = {
    center: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired
}

export default Row
