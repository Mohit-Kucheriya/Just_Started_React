import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="mb-4 flex w-full justify-center gap-4 bg-gray-100 p-4 shadow-md">
      <ul className="flex gap-6">
        <li className="text-lg font-medium">
          <NavLink
            style={(e) => {
              return {
                color: e.isActive ? "#E52020" : "#000",
                fontWeight: e.isActive ? "600" : "normal",
              };
            }}
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className="text-lg font-medium">
          <NavLink
            className={(e) => {
              return [
                e.isActive ? "font-semibold text-red-500" : "text-gray-700",
              ].join(" ");
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li className="text-lg font-medium">
          <NavLink
            className={(e) => {
              return [
                e.isActive ? "font-semibold text-red-500" : "text-gray-700",
              ].join(" ");
            }}
            to="/user"
          >
            User
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
