import React from "react";

function CardMusic({ item, handleAddedToFavourite, index }) {
  const { songName, artistName, addedToFavourite } = item;

  return (
    <div className="relative flex w-72 gap-4 rounded-lg bg-white p-3 pb-8 shadow-lg">
      <div className="h-24 w-24 overflow-hidden rounded-lg bg-[#ff7101]">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1571330735066-03aaa9429d89?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div>
      <div className="font-semibold">
        <h3 className="text-2xl text-black">{songName}</h3>
        <h5 className="text-md text-gray-500">{artistName}</h5>
      </div>
      <button
        onClick={() => handleAddedToFavourite(index)}
        className={`absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%] whitespace-nowrap rounded-lg ${addedToFavourite ? "bg-teal-500" : "bg-[#ff7101]"} px-3 py-1 text-white`}
      >
        {addedToFavourite ? "Added" : "Add to Favourite"}
      </button>
    </div>
  );
}

export default CardMusic;
