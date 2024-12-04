import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="mt-5 flex gap-6 justify-center">
            <NavLink
                style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                    };
                }}
                to="/"
            >
                Home
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                    };
                }}
                to="/user"
            >
                User
            </NavLink>
            <NavLink
                style={(e) => {
                    return {
                        color: e.isActive ? "red" : "",
                    };
                }}
                to="/about"
            >
                About
            </NavLink>
        </nav>
    );
};

export default Nav;
