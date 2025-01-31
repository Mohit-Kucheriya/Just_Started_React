import React from "react";

function Song() {
  const data = [
    { songName: "52 Bars", artistName: "Karan Aujla" },
    { songName: "Chhalakata Hamro Jawaniya", artistName: "Pawan Singh" },
  ];

  const handleClick = () => {
    alert("Start Downloading");
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-gray-400 font-poppins">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-72 overflow-hidden rounded-lg bg-slate-200 px-3 py-4"
        >
          <h2 className="mb-2 text-xl font-semibold">{item.songName}</h2>
          <p className="mb-4 text-sm text-slate-500">{item.artistName}</p>
          <button
            onClick={handleClick}
            className="rounded-lg bg-orange-600 px-3 py-1 text-white hover:bg-orange-500"
          >
            Download
          </button>
        </div>
      ))}
    </div>
  );
}

export default Song;
