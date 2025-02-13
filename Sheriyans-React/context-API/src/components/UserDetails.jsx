import React, { useContext } from "react";
import { UserContext } from "../utils/Context";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { user } = useContext(UserContext);
  const { id } = useParams();

  const currentUser = user.find((_, i) => i + 1 === Number(id));
  const { name, email, phone } = currentUser;

  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/user");
  };

  return (
    <div className="mx-auto mt-5 w-1/2">
      {/* <h1 className="mb-5 text-center text-2xl font-semibold">User Details</h1> */}
      {currentUser ? (
        <div className="rounded-md bg-slate-700 p-4 text-white shadow-md">
          <h2 className="mb-2 text-xl font-medium">Name: {name}</h2>
          <p className="mb-1 text-sm font-medium">Email: {email}</p>
          <p className="text-sm font-medium">Phone: {phone}</p>
          <button
            onClick={handleClick}
            className="mt-4 cursor-pointer rounded-md bg-slate-500 px-3 py-1 text-sm text-white outline-none"
          >
            Go Back
          </button>
        </div>
      ) : (
        <p>User not found</p>
      )}
    </div>
  );
}

export default UserDetails;
