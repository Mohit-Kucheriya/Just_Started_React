import React from "react";
import Navbar from "./components/Navbar";
import CardMusic from "./components/CardMusic";
import { useState } from "react";

function App() {
  const data = [
    {
      songName: "Mahiya ve",
      artistName: "Shankar Mahadevan",
      addedToFavourite: false,
    },
    { songName: "52 Bars", artistName: "Karan Aujla", addedToFavourite: false },
    {
      songName: "True Stories",
      artistName: "A.P Dhillon",
      addedToFavourite: false,
    },
    { songName: "Fell For You", artistName: "Shubh", addedToFavourite: false },
    { songName: "Bandana", artistName: "Shubh", addedToFavourite: false },
  ];

  const [songData, setSongData] = useState(data);

  const handleAddedToFavourite = (idx) => {
    return setSongData((prev) =>
      prev.map((songItem, songIdx) => {
        if (songIdx === idx) {
          return { ...songItem, addedToFavourite: !songItem.addedToFavourite };
        }
        return songItem;
      }),
    );
  };

  return (
    <div className="h-screen w-full bg-zinc-100 font-Questrial">
      <Navbar data={songData}/>
      <div className="mt-10 flex flex-wrap gap-4 px-20">
        {songData.map((item, index) => (
          <CardMusic
            key={index}
            item={item}
            handleAddedToFavourite={handleAddedToFavourite}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
