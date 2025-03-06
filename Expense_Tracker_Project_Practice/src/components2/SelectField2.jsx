import React from "react";

const SelectField2 = ({
    id,
    label,
    name,
    value,
    onChange,
    optionsValue,
    defaultValue,
    error,
    className
}) => {
    return (
        <div className={`input-container ${className}`}>
            <label htmlFor={id}>{label}</label>
            <select name={name} value={value} onChange={onChange}>
                {defaultValue && <option value="">{defaultValue}</option>}
                {optionsValue.map((optionValue, i) => (
                    <option key={i} value={optionValue}>
                        {optionValue}
                    </option>
                ))}
            </select>
            <p className="error-msg">{error}</p>
        </div>
    );
};

export default SelectField2;
