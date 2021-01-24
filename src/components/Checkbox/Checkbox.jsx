import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import checkmark from './checkmark.svg'

const StyledCheckbox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 28px;
    height: 28px;
    background-clip: content-box;
    border: 1px solid #DBE2EA;
    border-radius: 4px;
    box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
    background-color: white;

    &:checked{
        border: 2px solid #0880AE;
        box-sizing: border-box;
        box-shadow: 0px 4px 8px rgba(44, 39, 56, 0.04);
        background: url(${checkmark});
        background-position: center;
        background-repeat: no-repeat;
        background-color: white;
    }
`

const Checkbox = React.forwardRef((props, ref) => {
    const {id} = props
    
    return (
        <StyledCheckbox type="checkbox" name={id} id={id} ref={ref} {...props}/>
    )
})

Checkbox.propTypes = {
    id: PropTypes.string
}

Checkbox.defaultProps = {
    id: ''
}

export default Checkbox
