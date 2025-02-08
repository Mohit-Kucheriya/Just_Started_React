import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const name = useRef(null);
  const age = useRef(null);

  const handleSubmitRef = (e) => {
    e.preventDefault();
    console.log("name:", name); // Logs the ref object
    console.log("name.current:", name.current); // Logs the DOM element
    console.log("name.current.value:", name.current.value); // Logs the input value
  };

  const [val, setVal] = useState({ name: "", email: "" });
  const handleAnotherSubmit = (e) => {
    e.preventDefault();
    console.log(val);
  };

  const { register, handleSubmit } = useForm();

  return (
    <div className="p-8">
      <h1 className="mb-4 text-2xl font-semibold">Form Handling</h1>

      {/* <form className="mb-5" action="" onSubmit={handleSubmitRef}>
        <input
          className="mr-5 rounded-lg border-2 border-blue-500 px-2 py-1 focus:outline-none"
          type="text"
          placeholder="Enter your name"
          ref={name}
        />
        <input
          className="mr-5 rounded-lg border-2 border-blue-500 px-2 py-1 focus:outline-none"
          type="text"
          placeholder="Enter your age"
          ref={age}
        />
        <input
          type="submit"
          className="cursor-pointer rounded-lg bg-blue-500 px-2 py-1 text-white"
        />
      </form> */}

      {/* <form action="" onSubmit={handleAnotherSubmit}>
        <input
          onChange={(e) => setVal({ ...val, name: e.target.value })}
          className="mr-5 rounded-lg border-2 border-red-500 px-2 py-1 focus:outline-none"
          type="text"
          placeholder="Name"
        />
        <input
          onChange={(e) => setVal({ ...val, email: e.target.value })}
          className="mr-5 rounded-lg border-2 border-red-500 px-2 py-1 focus:outline-none"
          type="email"
          placeholder="email"
        />
        <input
          className="cursor-pointer rounded-lg bg-red-500 px-2 py-1 text-white focus:outline-none"
          type="submit"
        />
      </form> */}

      <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
        <input
          className="mr-5 rounded-lg border-2 border-orange-500 bg-white px-2 py-1 focus:outline-none"
          {...register("name")}
          type="text"
          placeholder="Name"
        />
        <input
          className="mr-5 rounded-lg border-2 border-orange-500 px-2 py-1 focus:outline-none"
          {...register("email")}
          type="email"
          placeholder="email"
        />
        <input
          type="submit"
          className="cursor-pointer rounded-lg bg-orange-500 px-2 py-1 text-white focus:outline-none"
        />
      </form>
    </div>
  );
}

export default App;
