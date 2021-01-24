import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledError = styled.p`
    font-size: 0.875rem;
    color: #FF7171;
`

function Error({text, ...props}) {
    return (
        <StyledError>
            {text}
        </StyledError>
    )
}

Error.propTypes = {
    text: PropTypes.string
}

Error.defaultProps = {
    text: ''
}

export default Error
