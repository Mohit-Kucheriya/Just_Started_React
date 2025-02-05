import React from "react";

function Props({ text, bgColor }) {
  return (
    <div>
      <button className={`m-2 rounded-md ${bgColor} px-3 py-1 text-zinc-100`}>
        {text}
      </button>
    </div>
  );
}

export default Props;
