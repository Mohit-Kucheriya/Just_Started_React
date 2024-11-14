import React, { useState } from "react";

function Advanced() {
    const [val, setVal] = useState({ name: "Mohit Kucheriya", isBanned: false });

    return (
        <div className="p-5 font-mono">
            <h1 className="text-3xl font-semibold">
                Advanced - To Update the state variable, we need to copy the previous
                state and update the copy
            </h1>
            <h3 className="text-2xl">Name: {val.name}</h3>
            <p className="text-xl">isBanned: {val.isBanned.toString()}</p>
            <button
                onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
                className="bg-black text-white px-3 py-1 rounded mt-2"
            >
                Ban User
            </button>
        </div>
    );
}

export default Advanced;
