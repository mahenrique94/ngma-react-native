import PropTypes from 'prop-types'
import styled from 'styled-components/native'

const Container = styled.View`
    flex: 1;
    justify-content: ${({ justifyContent }) => justifyContent};
    padding: 56px 24px;
`

Container.defaultProps = {
    justifyContent: 'flex-start'
}

Container.propTypes = {
    children: PropTypes.oneOfType([PropTypes.array, PropTypes.func, PropTypes.object, PropTypes.string]).isRequired,
    justifyContent: PropTypes.string
}

export default Container
