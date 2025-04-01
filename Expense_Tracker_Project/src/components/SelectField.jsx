const SelectField = ({
    label,
    id,
    name,
    error,
    value,
    onChange,
    optionsValue,
    defaultOptionValue,
}) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <select id={id} name={name} value={value} onChange={onChange}>

                {defaultOptionValue && (
                    <option value="" hidden>
                        {defaultOptionValue}
                    </option>
                )}
                
                {optionsValue.map((optionValue, i) => (
                    <option key={i} value={optionValue}>
                        {optionValue}
                    </option>
                ))}
            </select>
            <p className="error-message">{error}</p>
        </div>
    );
};

export default SelectField;
