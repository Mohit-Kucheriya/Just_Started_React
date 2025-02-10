import React from "react";

import Nav from "./components/Nav";
import Routing from "./utils/Routing";

function App() {
  return (
    <div className="font-Poppins h-screen w-full bg-slate-200 text-center">
      <Nav />
      <Routing />
    </div>
  );
}

export default App;
