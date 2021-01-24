import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledLabel = styled.label`
    font-weight: 500;
    font-size: 1rem;
    color: #756F86;
`

function Label({htmlFor, text, children, ...props}) {
    return (
        <StyledLabel htmlFor={htmlFor} {...props}>
            {text}
            {children}
        </StyledLabel>
    )
}

Label.propTypes = {
    htmlFor: PropTypes.string,
    text: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
}

Label.defaultProps = {
    htmlFor: '',
    text: '',
    children: null
}

export default Label
