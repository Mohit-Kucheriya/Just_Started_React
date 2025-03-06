import React from 'react'

const InputField2 = ({ id, label, name, value, onChange, error }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                name={name}
                value={value}
                onChange={onChange}
            />
            <p className='error-msg'>{error}</p>
        </div>
    )
}

export default InputField2