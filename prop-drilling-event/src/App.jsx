import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Harry Potter",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/52/528caa2472df37d6c417911fcd680155.jpeg",
      friends: false,
    },
    {
      name: "Ron Wesely",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/52/5244188c7464be072ac85f1d548741bd.jpeg",
      friends: false,
    },
    {
      name: "Hermoine Granger",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/cb/cb51f4c3c11539f9bcb540a9a283c1b5.jpeg",
      friends: false,
    },
    {
      name: "Neville Longbottom",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/00/001d184f225cfdb16d0a53add1b28610.jpeg",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);
  // state jaha banti hai wahi modify ki jaa sakti hai.

  const dummyFunction = () => alert("Dummy function");

  const handleFriendsButton = (cardIndex) => {
    setRealData((previousDataArray) => {
      return previousDataArray.map((item, index) => {
        if (index === cardIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <div className="w-full h-screen bg-zinc-300 flex items-center justify-center gap-5">
      {realData.map((item, index) => (
        <Card values={item} key={index} handleFriendsButton={handleFriendsButton} index={index} /> // here we are passing the data to the Card component
      ))}
    </div>
  );
}

export default App;

