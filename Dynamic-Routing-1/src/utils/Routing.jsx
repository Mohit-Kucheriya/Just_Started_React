import React from "react";
import Home from "../components/Home";
import User from "../components/User";
import About from "../components/About";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/user" element={<User />}></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    );
};

export default Routing;
