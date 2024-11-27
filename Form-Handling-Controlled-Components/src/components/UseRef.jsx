import React, { useRef } from 'react'

function UseRef() {
    const name = useRef(null);
    const age = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Name :", name.current.value);
        console.log("Age :", age.current.value);

    }

    return (
        <div className="p-4">
            <form action="" onSubmit={handleSubmit}>
                <input
                    ref={name}
                    type="text"
                    placeholder="Enter your name"
                    className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
                />
                <input
                    ref={age}
                    type="text"
                    placeholder="Enter your age"
                    className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
                />
                <input
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm cursor-pointer "
                    value="Submit"
                />
            </form>
        </div>
    );
}

export default UseRef;