import React, { useState } from 'react'

function ControlledComponents() {

  const [val, setVal] = useState({ name: "", age: "" })

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(val);

  }

  return (
    <div>
      <div className="p-4">
        <form action="" onSubmit={handleSubmit}>
          <input
            onChange={(event) => setVal({ ...val, name: event.target.value })}
            type="text"
            placeholder="Enter your name"
            className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
          />
          <input
            onChange={(event) => setVal({ ...val, age: event.target.value })}
            type="text"
            placeholder="Enter your age"
            className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
          />
          <input
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm cursor-pointer "
            value="Submit"
          />
        </form>
      </div>
    </div>
  )
}

export default ControlledComponents