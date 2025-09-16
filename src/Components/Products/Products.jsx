import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import view from "../../assets/Group 14.png";
import Edit from "../../assets/Group 12.png";
import delicon from "../../assets/Group 13.png";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <div className="flex text-black py-20 flex-col items-center justify-center space-y-5">
      <h4 className="Raleway text-xl">--- Sip & Savor ---</h4>
      <h1 className="text-4xl">Our Popular Products</h1>
      <Link to="/addcoffee" className="btn  bg-[#E3B577] text-[#] text-normal">
        Add Coffee
      </Link>
      <div className="Raleway grid grid-cols-2 gap-4 p-4  mb-4">
        {products && products.length > 0 ? (
          products.map((product, idx) => (
            <div
              className="Raleway flex   p-4  mb-4 flex-row items-center justify-around"
              key={idx}
            >
              {/* picture */}
              <div className="w-1/2 ">
                <img
                  src={product.picUrl}
                  alt={product.name}
                  className="size-20 h-auto"
                />
              </div>

              {/* details */}
              <div className="w-1/2 space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Name:</span>
                  <span>{product.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Chef:</span>
                  <span>{product.chef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold">Taste:</span>
                  <span>{product.taste}</span>
                </div>
              </div>
              {/* asseablilty */}
              <div>
                <img src={view} className="siz-10" alt="" />
                <img src={Edit} className="siz-10" alt="" />
                <img src={delicon} className="siz-10" alt="" />
              </div>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </div>
  );
};

export default Products;
