const InputField = ({ label, id, name, error, value, onChange }) => {
    return (
        <div className="input-container">
            <label htmlFor={id}>{label}</label>
            <input id={id} name={name} value={value} onChange={onChange} />
            <p className="error-message">{error}</p>
        </div>
    );
};

export default InputField;
