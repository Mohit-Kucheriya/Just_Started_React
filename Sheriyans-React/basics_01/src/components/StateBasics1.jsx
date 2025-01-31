import React, { useState } from "react";

function StateBasics1() {
  //   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);

  const [val, setVal] = useState([
    { name: "Mohit", age: 25 },
    { name: "Harry", age: 24 },
    { name: "Hermoine", age: 26 },
  ]);

  return (
    <div className="font-Questrial p-4">
      {val.map((item, index) => (
        <div key={index}>
          <p className="text-2xl font-semibold">{item.name}</p>
          <p className="text-md font-semibold">{item.age}</p>
        </div>
      ))}
      {/* <button
        onClick={() =>
          setVal(() => val.filter((item, index) => index !== val.length - 1))
        }
        className="rounded-md bg-green-600 px-3 py-2 text-white"
      >
        Remove
      </button> */}

      {/* <button
        onClick={() => setVal(() => val.filter((item) => item % 2 !== 0))}
        className="mb-1 rounded-md bg-blue-700 px-3 py-1 text-white"
      >
        Change
      </button> */}

      {/* Adding numbers */}
      {/* <button
        onClick={() => setVal((prev) => [...prev, val.length + 1])}
        className="mb-1 rounded-md bg-blue-700 px-3 py-1 text-white"
      >
        Change
      </button> */}

      <button
        onClick={() =>
          setVal(() =>
            val.map(item =>item.name === "Harry" ? ({ name: "Harry", age: 26 }) : item),
          )
        }
        className="mb-1 mt-3 rounded-md bg-blue-700 px-3 py-1 text-white"
      >
        Change
      </button>
    </div>
  );
}

export default StateBasics1;
