import React from "react";
import { Link, Outlet } from "react-router-dom";

function User() {
  return (
    <div className="mx-auto w-1/2 rounded-lg bg-gray-100 p-4 shadow-md">
      <h1 className="text-3xl font-semibold">User Profile</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
        minima!
      </p>
      <nav className="">
        <ul className="flex flex-col items-start gap-4">
          <li className="p-2 text-lg font-medium">
            <Link to="/user/john">John</Link>
          </li>
          <li className="p-2 text-lg font-medium">
            <Link to="/user/hermoine">Hermoine</Link>
          </li>
          <li className="p-2 text-lg font-medium">
            <Link to="/user/harry">Harry</Link>
          </li>
        </ul>
      </nav>
      <div className="border border-gray-300  my-4"></div>
      <Outlet />
    </div>
  );
}

export default User;
