import React, { useRef } from "react";

function App() {
  const name = useRef(null);
  const age = useRef(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(name.current);
    console.log(name.current.value);
    console.log(age.current.value);
  };

  return (
    <form action="" onSubmit={handleFormSubmit}>
      <input ref={name} type="text" placeholder="name" />
      <input ref={age} type="text" placeholder="age" />
      <input type="submit" />
    </form>
  );
}

export default App;
