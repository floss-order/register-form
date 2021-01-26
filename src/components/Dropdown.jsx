import React from 'react'
import Select from 'react-select'
import PropTypes from 'prop-types' 

function Dropdown({ options, id, onChange, margin, ...props }) {
    const styles = {
        container: (provided) => ({
            ...provided,
            margin: margin ? margin : 0,
            boxShadow: '0px 4px 8px rgba(44, 39, 56, 0.04)',
            borderRadius: '6px',
        }),

        control: (provided, state) => ({
            ...provided,
            padding: '1rem 0.6rem',
            borderWidth: state.isFocused ? '2px' : '1px',
            borderColor: state.isFocused || state.isSelected  ? '#0880AE' : '#DBE2EA',
            boxShadow: 'none',

            '&:hover, &:focus, &:active': {
                borderWidth: '2px',
                borderColor: '#0880AE' 
            }
        }),

        placeholder: () => ({
            opacity: 0.5,
            color: '#7C9CBF',
        }),

        singleValue: () => ({
            color: '#2C2738'
        }),

        dropdownIndicator: provided =>({
            display: 'flex',
            justifyContent: 'center',
            color: '#0880AE'
        }),
        
        menu: provided => ({
            ...provided,
            marginTop: '4px',
            padding: '24px 0',
            border: '1px solid #DBE2EA',
            boxShadow: '0px 4px 8px rgba(44, 39, 56, 0.04), 0px 20px 20px rgba(44, 39, 56, 0.04)',
            borderRadius: '6px'
        }),

        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            padding: '12px 16px',
            color: '#756F86',
            backgroundColor: state.isFocused || state.isSelected ? '#EBF4F8' : 'transparent',
            
            '&:hover, &:focus, &:active': {
                backgroundColor: '#EBF4F8'
            },
        })
    }

    return (
        <Select
        styles={styles}
        components={{
            IndicatorSeparator: () => null,
        }}
        options={options}
        isSearchable={false}
        onChange={onChange}
        id={id}
        name={id}
        {...props}
      />
    )
}

Dropdown.propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string,
        label: PropTypes.string
    })),
    onChange: PropTypes.func
}

Dropdown.defaultProps = {
    options: {
        value: 'value',
        label: 'label'
    },
    onChange: () => {}
}

export default Dropdown
