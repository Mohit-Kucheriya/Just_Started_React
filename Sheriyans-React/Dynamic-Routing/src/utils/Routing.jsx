import React from "react";
import Home from "../components/Home";
import About from "../components/About";
import User from "../components/User";
import UserDetails from "../components/UserDetails";
import { Routes, Route } from "react-router-dom";

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/user" element={<User />}>
        <Route path="/user/:name" element={<UserDetails />} />
      </Route>
    </Routes>
  );
}

export default Routing;
