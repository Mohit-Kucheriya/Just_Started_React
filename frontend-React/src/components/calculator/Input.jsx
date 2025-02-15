import React from "react";

function Input({ placeholder, onInput, value }) {
  const handleInput = (e) => {
    onInput(e.target.value);
  };

  return <input value={value} type="text" placeholder={placeholder} onInput={handleInput} />;
}

export default Input;
