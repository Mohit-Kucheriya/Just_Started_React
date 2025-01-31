/*
import React, { useState } from "react";

function StateBasics() {
  const [val, setVal] = useState({
    name: "Mohit Kucheriya",
    isLoggedIn: false,
  });

  return (
    <div className="p-4 font-poppins font-medium">
      <h1 className="mb-2 text-3xl">{val.name}</h1>
      <p className="mb-3 text-xl">isLoggedIn : {val.isLoggedIn.toString()}</p>
      <button
        onClick={() => setVal({ ...val, isLoggedIn: !val.isLoggedIn })}
        className={`rounded-lg ${val.isLoggedIn ? "bg-blue-600" : "bg-red-600"} px-4 py-2 text-white`}
      >
        Change
      </button>
    </div>
  );
}

export default StateBasics;
*/

import React, { useState } from "react";

function StateBasics() {
  const [val, setVal] = useState({
    name: "Mohit Kucheriya",
    isLoggedIn: false,
  });

  const handleClick = () => {
    setVal({ ...val, isLoggedIn: !val.isLoggedIn, gender:"Male" });
    console.log(val);
  };

  return (
    <div className="font-Questrial p-4">
      <h1 className="mb-2 text-4xl font-medium">{val.name}</h1>
      <p className="mb-3 text-2xl font-medium">
        isLoggedIn : {val.isLoggedIn.toString()}
      </p>
      <button
        onClick={handleClick}
        className={`rounded-lg ${val.isLoggedIn ? "bg-blue-700" : "bg-green-700"} w-32 max-w-sm px-3 py-1 text-lg text-white`}
      >
        {val.isLoggedIn ? "Logout" : "Login"}

      </button>
    </div>
  );
}

export default StateBasics;
