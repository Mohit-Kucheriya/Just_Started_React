import React from "react";
import { useForm } from "react-hook-form";

function ReactHookForm() {
    const { register, handleSubmit } = useForm();

    return (
        <div className="p-4">
            <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
                <input
                    {...register("name")}
                    type="text"
                    placeholder="Enter your name"
                    className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
                />
                <input
                    {...register("age")}
                    type="text"
                    placeholder="Enter your age"
                    className="border-2 border-gray-200 rounded-md p-2 mr-2 outline-none"
                />
                <input
                    type="submit"
                    value="Submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm cursor-pointer "
                />
            </form>
        </div>
    );
}

export default ReactHookForm;
