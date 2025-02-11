import React, { useState } from "react";
import axios from "axios";

function Show() {
  const [products, setProducts] = useState([]);

  const getData = () => {
    const API_URL = "https://fakestoreapi.com/products";
    axios
      .get(API_URL)
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="font-Poppins min-h-screen w-full bg-slate-300 p-4">
      <button
        onClick={getData}
        className="mr-4 cursor-pointer rounded-md bg-sky-500 px-3 py-1 text-white outline-none"
      >
        Get Data
      </button>

      <div className="my-4 border border-slate-400"></div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="rounded-lg bg-white p-4 shadow-md">
              <div className="mb-2 h-28 w-28 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="">
                <h1 className="mb-2 text-xl font-semibold">{product.title}</h1>
                <p className="mb-5 text-justify text-sm">
                  {product.description}
                </p>
                <p className="text-md font-semibold">Price: ${product.price}</p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center">Loading...</div>
        )}
      </div>
    </div>
  );
}

export default Show;
