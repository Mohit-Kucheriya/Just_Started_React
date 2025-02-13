import React from "react";
import { UserContext } from "../utils/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";

function User() {
  const { user } = useContext(UserContext);

  return (
    <div className="mx-auto mt-5 w-1/2">
      {/* <h1 className="mb-5 text-center text-2xl font-semibold">User</h1> */}
      <ul className="flex flex-col gap-4">
        {user.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>
              <div className="rounded-md bg-slate-700 p-4 text-white shadow-md">
                <h2 className="text-xl font-medium">Name: {user.name}</h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;
