import React from "react";

function Card() {
  const data = [
    {
      imageUrl:
        "https://wallpaper.forfun.com/fetch/69/69f47cdcd6b3f86ee9c711002a1bddfb.jpeg",
      name: "Sunset Beach",
      description:
        "A beautiful sunset over a peaceful beach with golden sand and gentle waves.",
      isTripAvailable: false,
    },
    {
      imageUrl:
        "https://wallpaper.forfun.com/fetch/bb/bba25f29d548e9f41ba73e6c5c2e7bdd.jpeg",
      name: "Mountain Peak",
      description:
        "A breathtaking view from the top of a snow-capped mountain, surrounded by clouds.",
      isTripAvailable: true,
    },
    {
      imageUrl:
        "https://wallpaper.forfun.com/fetch/a1/a1ca9c1c85895521e97994644bc7197d.jpeg",
      name: "City Skyline",
      description:
        "A vibrant city skyline at night, illuminated by colorful lights reflecting on the river.",
      isTripAvailable: true,
    },
    {
      imageUrl:
        "https://wallpaper.forfun.com/fetch/fd/fdf5bb9d06ad34a510bc11a29ff57540.jpeg",
      name: "Forest Trail",
      description:
        "A serene hiking trail through a lush green forest with sunlight filtering through the trees.",
      isTripAvailable: true,
    },
  ];

  return (
    <div className="flex h-screen w-full items-center justify-center gap-10 bg-gray-200 font-poppins">
      {data.map((item, index) => (
        <div
          key={index}
          className="w-72 overflow-hidden rounded-lg bg-zinc-500 shadow-md"
        >
          <div className="h-52 w-full bg-zinc-600">
            <img
              className="h-full w-full object-cover"
              src={item.imageUrl}
              alt=""
            />
          </div>
          <div className="w-full bg-white px-3 py-4">
            <h2 className="my-2 text-xl font-semibold">{item.name}</h2>
            <p className="mb-4 text-sm text-gray-500">{item.description}</p>
            <button
              className={`max-w-40 rounded-md ${item.isTripAvailable ? "bg-blue-700" : "bg-red-700"} px-3 py-1 text-sm text-zinc-200`}
            >
              {item.isTripAvailable ? "Book Trip" : "Already Booked"}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
