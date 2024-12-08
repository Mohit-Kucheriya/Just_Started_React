import React from "react";
import { Link, Outlet } from "react-router-dom";

const User = () => {
    return (
        <div className="mt-10 w-1/2 m-auto">
            <h1 className="text-4xl font-bold mb-1 text-green-500">User</h1>
            <p className="text-xl mb-2 ">Welcome to User Page</p>
            <p className="text-sm opacity-80 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed amet neque
                ducimus eveniet autem hic ab aliquid molestias nihil sapiente?
            </p>

            <div className="flex flex-col gap-2 mt-4 w-1/2">
                <Link
                    className="text-xl bg-green-600 hover:bg-green-700 text-white p-2 mb-2"
                    to="/user/john"
                >
                    John
                </Link>
                <Link
                    className="text-xl bg-green-600 hover:bg-green-700 text-white p-2 mb-2"
                    to="/user/mohit"
                >
                    Mohit
                </Link>
                <Link
                    className="text-xl bg-green-600 hover:bg-green-700 text-white p-2 mb-2"
                    to="/user/ruchita"
                >
                    Ruchita
                </Link>
            </div>
            <hr />
            <Outlet />
        </div>
    );
};

export default User;
