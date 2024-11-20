import React from "react";
import Button from "./components/Button";
import Card from "./components/Card";

function App() {
  const data = [
    {
      name: "Harry Potter",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/52/528caa2472df37d6c417911fcd680155.jpeg",
    },
    {
      name: "Ron Wesely",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/52/5244188c7464be072ac85f1d548741bd.jpeg",
    },
    {
      name: "Hermoine Granger",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/cb/cb51f4c3c11539f9bcb540a9a283c1b5.jpeg",
    },
    {
      name: "Neville Longbottom",
      job: "Wizard",
      image:
        "https://wallpaper.forfun.com/fetch/00/001d184f225cfdb16d0a53add1b28610.jpeg",
    },
  ];

  return (
    <div className="w-full h-screen flex items-center justify-center gap-5">
      <Button text="Know more" bgColor="bg-blue-700" />
      <Button text="Download" bgColor="bg-red-700" />
      {data.map((item, index) => (
        <Card values={item} key={index} />
      ))}
    </div>
  );
}

export default App;
