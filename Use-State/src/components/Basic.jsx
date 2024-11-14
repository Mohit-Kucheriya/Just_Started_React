import React, { useState } from "react";

function Basic() {
    const [score, setScore] = useState(10);

    return (
        <div className="p-5 font-mono">
            <h1 className="text-3xl font-semibold">Basic - Updating the state variable directly</h1>
            <p className="text-xl">Score: {score}</p>
            <button
                onClick={() => setScore(20)}
                className="bg-black text-white px-3 py-1 rounded mt-2"
            >
                Increase
            </button>
        </div>
    );
}

export default Basic;
