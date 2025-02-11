import React, { useEffect } from "react";

function Home() {
  useEffect(() => {
    console.log(`Component Home is mounted i.e. created`);
    return () => {
      console.log(`Component Home is unmounted i.e. destroyed`);
    };
  });

  return <div className="min-h-screen w-full bg-slate-300 p-4">Home</div>;
}

export default Home;
