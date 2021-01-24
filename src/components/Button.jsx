import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonTag = styled.button`
    border: none;
    border-radius: 6px;
    width: 180px;
    height: 56px;
    font-size: 1rem;
    text-align: center;
    opacity: ${props => props.disabled ? '0.5' : ''};
    color: ${props => props.disabled ? '#2C2738' : '#EBF4F8'};
    background: ${props => props.disabled ? '#DBE2EA' : '#0880AE'};
    box-shadow: ${props => props.disabled 
                    ? 
                    '0px 4px 8px rgba(44, 39, 56, 0.08)' 
                    : 
                    '0px 2px 4px rgba(44, 39, 56, 0.08), 0px 4px 8px rgba(44, 39, 56, 0.08);'
                };

    &:hover {
        box-shadow: ${props => props.disabled 
            ? 
            '' 
            : 
            '0px 12px 24px rgba(44, 39, 56, 0.08), 0px 24px 48px rgba(44, 39, 56, 0.16)'
    };

    &:active {
        border: 2px solid rgba(44, 39, 56, 0.86);
        box-shadow: 0px 2px 4px rgba(44, 39, 56, 0.0001), 
                    0px 4px 8px rgba(44, 39, 56, 0.08);
    }
`

function Button({children, disabled, onClick, ...props}) {
    return (
        <ButtonTag disabled={disabled} onClick={onClick} {...props}>
            {children}
        </ButtonTag>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    onClick: PropTypes.func
}

Button.defaultProps = {
    children: 'I am a button',
    disabled: false,
    onClick: () => {}
}

export default Button
