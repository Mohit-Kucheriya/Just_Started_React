import React from "react";
import { useState } from "react";

function Intermediate() {
    const [score, setScore] = useState(10);

    return (
        <div className="p-5 font-mono">
            <h1 className="text-3xl font-semibold">Intermediate - setScore function has a callback function, which has access to the previous value of score</h1>
            <p className="text-xl">Score: {score}</p>
            <button onClick={() => setScore(prev => prev + 1)} className="bg-black text-white px-3 py-1 rounded mt-2">
                Counter
            </button>
        </div>
    );
}

export default Intermediate;
