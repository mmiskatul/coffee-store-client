import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import view from "../../assets/Group 14.png";
import Edit from "../../assets/Group 12.png";
import delicon from "../../assets/Group 13.png";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-5 text-black">
      <h4 className="Raleway text-xl">--- Sip & Savor ---</h4>
      <h1 className="text-4xl">Our Popular Products</h1>
      <Link to="/addcoffee" className="btn bg-[#E3B577] text-black font-normal">
        Add Coffee
      </Link>

      <div className="Raleway grid grid-cols-1 md:grid-cols-2 gap-8 p-10 mb-4 w-full max-w-6xl">
        {products && products.length > 0 ? (
          products.map((product, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row items-center md:items-start justify-between p-10 rounded-lg shadow-md bg-[#F5F4F1]"
            >
              {/* Left: Picture */}
              <div className="w-full md:w-1/4 flex justify-center md:justify-start mb-4 md:mb-0">
                <img
                  src={product.picUrl}
                  alt={product.name}
                  className="size-58 rounded-md"
                />
              </div>

              {/* Middle: Details */}
              <div className="w-full md:w-1/2 flex flex-col justify-center pt-15 space-y-2 px-4">
                <div className="flex space-x-2">
                  <span className="font-semibold ">Name:</span>
                  <span className="text-gray-700">{product.name}</span>
                </div>
                <div className="flex space-x-2">
                  <span className="font-semibold">Chef:</span>
                  <span className="text-gray-700">{product.chef}</span>
                </div>
                <div className="flex space-x-2">
                  <span className="font-semibold">Price:</span>
                  <span className="text-gray-700">{product.price ? `${product.price} Taka `:""} </span>
                </div>
                
              </div>

              {/* Right: Actions */}
              <div className="w-full md:w-1/5 flex flex-col  pt-6 items-center md:items-end space-y-8 mt-4 md:mt-0">
                <Link to={`/coffee/${product._id}`}><img src={view} alt="Delete" className="w-8 h-8 cursor-pointer"/></Link>
                <Link><img src={Edit} alt="Edit" className="w-8 h-8 cursor-pointer" /></Link>
                <Link><img src={delicon} alt="Delete" className="w-8 h-8 cursor-pointer"/></Link>
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
