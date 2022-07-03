import React from 'react'
import './form-input.styles.css'

const FormInput = ({ ...otherProps }) => {
    return (
        <div className='group' >
            <input className='form-input' {...otherProps} /> </div>
    )
}

export default FormInput