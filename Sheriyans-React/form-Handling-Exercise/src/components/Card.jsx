import React from "react";

function Card({ user, handleRemoveUser, idx }) {
  const { name, email, image } = user;
  return (
    <div className="flex h-full w-72 flex-col items-center justify-center gap-3 rounded-xl bg-slate-700 p-4 text-center text-white shadow-md">
      <div className="h-20 w-20 overflow-hidden rounded-full bg-slate-400">
        <img
          className="h-full w-full object-cover object-center"
          src={image}
          alt=""
        />
      </div>
      <div className="">
        <h1 className="mb-2 text-2xl font-medium">{name}</h1>
        <h3 className="text-md mb-1 text-gray-400">{email}</h3>
        <p className="mb-4 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum,
          veritatis.
        </p>
        <button
          onClick={() => handleRemoveUser(idx)}
          className="cursor-pointer rounded-md bg-pink-800 px-3 py-1 text-sm"
        >
          Remove It
        </button>
      </div>
    </div>
  );
}

export default Card;
