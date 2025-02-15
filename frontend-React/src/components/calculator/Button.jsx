import React from 'react'

function Button({label, onClick, dataOperation}) {
  return (
    <button data-operation={dataOperation} onClick={onClick}>
        {label}
    </button>
  )
}

export default Button