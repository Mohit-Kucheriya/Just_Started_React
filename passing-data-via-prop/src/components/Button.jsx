import React from "react";

function Button({ text, bgColor }) {
    return (
        <div className="p-2">
            <button
                className={`px-3 py-1 text-sm font-mono rounded-md ${bgColor} text-white`}
            >
                {text}
            </button>
        </div>
    );
}

export default Button;
