import React from "react";
import { useParams, useNavigate } from "react-router-dom";

const UserDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate("/user");
    };

    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-yellow-400 mb-3">User Details</h1>
            <p className="text-xl ">Hey {name}</p>
            <button
                onClick={goBackHandler}
                className="px-3 py-1 bg-yellow-300 hover:bg-yellow-400 mt-4 text-sm rounded-md"
            >
                Go back
            </button>
        </div>
    );
};

export default UserDetails;
