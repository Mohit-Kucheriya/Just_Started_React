import React from "react";
import { useParams, useNavigate } from "react-router-dom";

function UserDetails() {
  const { name } = useParams();
  const navigate = useNavigate();

  const goBackHandler = () => {
    navigate("/user")
    // navigate(-1);
  };
  return (
    <div className="mx-auto text-left rounded-lg  p-2 ">
      <h1 className="mb-2 text-2xl font-semibold">User Profile</h1>
      <p className="mb-3 text-xl font-medium">
        Hey {name}
        🙋‍♂️
      </p>
      <p className="mb-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        dolorum?
      </p>
      <button
        onClick={goBackHandler}
        className="cursor-pointer rounded-md bg-pink-600 px-3 py-1 text-white shadow-md"
      >
        Go Back
      </button>
    </div>
  );
}

export default UserDetails;
