import React, { useState } from "react";
import Card from "./components/Card";
import Song from "./components/Song";
import StateBasics from "./components/StateBasics";
import StateBasics1 from "./components/StateBasics1";
import Slide from "./components/Slide";
import Props from "./components/Props";
import PropsCard from "./components/PropsCard";

function App() {
  const data = [
    {
      name: "Hermoine",
      profession: "Web Developer",
      img: "https://mighty.tools/mockmind-api/content/human/124.jpg",
      friends: false,
    },
    {
      name: "Harry",
      profession: "Web Developer",
      img: "https://mighty.tools/mockmind-api/content/human/122.jpg",
      friends: false,
    },
    {
      name: "Mohit",
      profession: "Web Developer",
      img: "https://mighty.tools/mockmind-api/content/human/80.jpg",
      friends: false,
    },
  ];

  const [realData, setRealData] = useState(data);

  const handleFriendsBtn = (propsCardIdx) => {
    return setRealData((previous) =>
      previous.map((item, index) => {
        if (index === propsCardIdx) {
          return { ...item, friends: !item.friends };
        }
        return item;
      }),
    );
  };

  return (
    <div className="flex h-screen w-full items-center justify-center gap-3 bg-zinc-50">
      {/* <Card /> */}

      {/* <Song /> */}

      {/* <StateBasics /> */}

      {/* <StateBasics1 /> */}

      {/* <Slide /> */}

      {/* <Props text="Know more" bgColor="bg-blue-600"  />
      <Props text="Download"   bgColor="bg-red-600"/> */}

      {realData.map((item, index) => (
        <PropsCard
          item={item}
          key={index}
          handleFriendsBtn={handleFriendsBtn}
          propsCardIdx={index}
        />
      ))}
    </div>
  );
}

export default App;
