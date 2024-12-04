import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavCopy = () => {
    return (
        <nav className="mt-5 flex gap-6 justify-center">
            <NavLink
                className={(e) => {
                    return [
                        e.isActive ? "text-purple-500" : ""
                    ].join(" ")
                }}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                className={(e) => {
                    return [
                        e.isActive ? "text-green-500" : ""
                    ].join(" ")
                }}
                to="/user"
            >
                User
            </NavLink>
            <NavLink
                className={(e) => {
                    return [
                        e.isActive ? "text-pink-500" : ""
                    ].join(" ")
                }}
                to="/about"
            >
                About
            </NavLink>
        </nav>
    );
};

export default NavCopy;
