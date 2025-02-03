import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Slide() {
  const [val, setVal] = useState(false);

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <div className="relative flex h-40 w-72 overflow-hidden rounded-lg">
        <img
          className={`h-full w-full shrink-0 object-cover transition-transform duration-700 ${val === false ? "-trasnslate-x-[0%]" : "-translate-x-[100%]"}`}
          src="https://wallpaper.forfun.com/fetch/a4/a4f69334204be4e0bd4efc6403cd562f.jpeg"
          alt=""
        />
        <img
          className={`h-full w-full shrink-0 object-cover transition-transform duration-700 ${val === false ? "-trasnslate-x-[0%]" : "-translate-x-[100%]"}`}
          src="https://wallpaper.forfun.com/fetch/fc/fc8feb0a0262c1ca74a6ceee485126a7.jpeg"
          alt=""
        />

        <span
          onClick={() => setVal(() => !val)}
          className="absolute bottom-0 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#dadada7b] text-white"
        >
          <FaArrowRightLong color="white" size={20} />
        </span>
      </div>
    </div>
  );
}

export default Slide;
