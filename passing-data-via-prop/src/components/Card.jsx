import React from "react";

function Card({ values }) {
    const { name, job, image } = values;
    return (
        <div className="w-56 bg-zinc-100 rounded-md overflow-hidden font-mono shadow-md">
            <div className="w-full h-36 bg-blue-400 ">
                <img className="w-full h-full object-cover" src={image} alt="image" />
            </div>
            <div className="w-full p-3">
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="text-sm">{job}</p>
                <button className="px-2 py-1 text-sm rounded-md bg-black text-white mt-2">
                    Know more
                </button>
            </div>
        </div>
    );
}

export default Card;
