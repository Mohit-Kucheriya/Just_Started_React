import React from "react";
import About from "./components/About";
import User from "./components/User";
import UserDetails from "./components/UserDetails";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-Poppins min-h-screen w-full bg-slate-200">
      <nav className="w-full bg-white shadow-md">
        <ul className="flex justify-center gap-5 p-2 py-5">
          <li className="text-xl font-medium">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-xl font-medium">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="text-xl font-medium">
            <Link to={"/user"}>User</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/user" element={<User />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  );
}

export default App;
