import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTextField = styled.input`
    margin: ${props => props.margin ? props.margin : 0};
    padding: 1rem;
    border: 1px solid #DBE2EA;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    border-radius: 6px;
    color: #2C2738;
    font-size: 1rem;

    &:focus {
        outline: none;
        border: 2px solid #0880AE;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    }

    &::placeholder {
        color: #7C9CBF;
    }
`

const TextField = React.forwardRef((props, ref) => {
    const {placeholder, id, type} = props
    
    return (
        <StyledTextField placeholder={placeholder} name={id} id={id} type={type} ref={ref} {...props} />
    )
})

TextField.propTypes = {
    placeholder: PropTypes.string,
    id: PropTypes.string,
    type: PropTypes.string
}

TextField.defaultProps = {
    placeholder: 'Placeholder',
    id: '',
    type: 'text'
}

export default TextField
