import React from "react";

function Navbar({ data }) {
  return (
    <div className="flex w-full items-center justify-between p-4 px-20">
      <h3 className="text-3xl font-semibold text-[#ff7101]">Orange</h3>
      <div className="flex items-center gap-3 rounded-md bg-[#ff7101] px-4 py-1 text-white">
        <h5 className="">Favourite</h5>
        <span>{data.filter((item) => item.addedToFavourite).length}</span>
      </div>
    </div>
  );
}

export default Navbar;
