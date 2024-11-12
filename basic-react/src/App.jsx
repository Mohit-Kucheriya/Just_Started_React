import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SecondPage from "./components/SecondPage";
import Card from "./components/Card";
// function App() {
//   const data = ["Mohit", "Harry", "Alice"];

//   // Here we get a warning, that is each child in list should have a unique "key" prop. Because now react is considering all of them as same. So as map function accepts two things, first the function and second the index
//   return (
//     <div className="flex items-center justify-center h-screen">
//       {data.map((elem, index) => (
//         <div className="p-4 w-fit bg-zinc-400 rounded-xl mt-2 ml-2" key={index}>
//           {elem}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;

function App() {
  return(
    <>
       <Card />

    </>
  );
}

export default App;
