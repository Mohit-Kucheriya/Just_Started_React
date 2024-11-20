import React from "react";

function Card({ values, handleFriendsButton, index }) {
    console.log(values); // data received from the parent component
    console.log(handleFriendsButton);

    const { name, job, image, friends } = values;

    return (
        <div className="w-56 bg-white rounded-md overflow-hidden font-mono shadow-lg">
            <div className="w-full h-40">
                <img className="w-full h-full object-cover" src={image} alt="image" />
            </div>
            <div className="w-full p-3">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-sm">{job}</p>
                <button
                    onClick={() => handleFriendsButton(index)}
                    className={`px-2 py-1 text-sm rounded-md ${friends ? "bg-blue-700" : "bg-green-700"} text-white mt-2`}
                >
                    {friends ? "Friends" : "Add Friends"}
                </button>
            </div>
        </div>
    );
}

export default Card;
