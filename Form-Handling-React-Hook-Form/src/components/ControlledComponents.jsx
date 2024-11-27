import React from "react";
import { useState } from "react";

function ControlledComponents() {

  const [val, setVal] = useState({ name: "", age: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val);

  }

  return (
    <div className="p-4" >
      <form action="" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setVal({ ...val, name: e.target.value })}
          type="text"
          placeholder="Enter your name"
          className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
        />
        <input
          onChange={(e) => setVal({ ...val, age: e.target.value })}

          type="text"
          placeholder="Enter your age"
          className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
        />
        <input
          type="submit"
          value="Submit"
          className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm cursor-pointer "
        />
      </form>
    </div>
  );
}

export default ControlledComponents;
