import React from "react";

function Card() {
    const data = [
        {
            title: "Notebook",
            description: "A lined notebook ideal for taking notes, journaling, or sketching.",
            image: "https://wallpaper.forfun.com/fetch/73/738ea5544f8cb2ae179a5878cd9f332b.jpeg",
            inStock: true
        },
        {
            title: "Pen",
            description: "Smooth-writing ballpoint pen with blue ink for everyday use.",
            image: "https://wallpaper.forfun.com/fetch/95/9522dcb8ad252a2f91a210251c084f7f.jpeg",
            inStock: true
        },
        {
            title: "Pencil",
            description: "Graphite pencil suitable for drawing and writing, with an eraser at the end.",
            image: "https://wallpaper.forfun.com/fetch/37/37924b270abfca90ab743d9f83cf6f9b.jpeg",
            inStock: false
        },
        {
            title: "Eraser",
            description: "Soft eraser for cleanly removing pencil marks without smudging.",
            image: "https://cdn.pixabay.com/photo/2019/01/03/18/40/christmas-3911646_1280.jpg",
            inStock: true
        },
        {
            title: "Highlighter",
            description: "Fluorescent highlighter pen for emphasizing important text.",
            image: "https://cdn.pixabay.com/photo/2010/12/13/10/25/bright-2796_1280.jpg",
            inStock: false
        },

    ];


    return (
        <div className="w-full h-screen bg-zinc-100 flex justify-center items-center gap-5 flex-wrap p-5">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="w-64  bg-zinc-300  rounded-xl overflow-hidden flex-grow"
                >
                    <div className="w-full h-32 bg-zinc-500 ">
                        <img
                            className="w-full h-full object-cover"
                            src={elem.image}
                            alt=""
                        />
                    </div>
                    <div className="w-full px-3 py-4">
                        <h2 className="text-xl font-semibold">{elem.title}</h2>
                        <p className="text-xs opacity-80 mt-2">{elem.description}</p>

                        { /* Conditional rendering */}
                        <button className={`${elem.inStock ? "bg-zinc-600" : "bg-red-600"} text-zinc-100 text-xs px-4 py-2 rounded-md mt-3`}>{elem.inStock ? "In Stock" : "Out of Stock"}</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
