import React from "react";

function PropsCard({ item, handleFriendsBtn, propsCardIdx }) {
  const { name, profession, img, friends } = item;

  return (
    <div className="w-60 overflow-hidden rounded-md font-Questrial shadow-md">
      <div className="h-44 w-full bg-sky-300">
        <img className="h-full w-full object-cover" src={img} alt="" />
      </div>
      <div className="w-full bg-white p-3">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <h5 className="text-md font-medium">{profession}</h5>
        <button
          onClick={() => handleFriendsBtn(propsCardIdx)}
          className={`mt-3 rounded-md ${friends ? "bg-green-600" : "bg-red-600"} px-3 py-1 text-zinc-100 outline-none active:outline-none`}
        >
          {friends ? "Friends" : "Not Friends"}
        </button>
      </div>
    </div>
  );
}

export default PropsCard;
