import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Fetch error:", err));
  }, []);
  return (
    <div className="flex py-20 flex-col items-center justify-center space-y-5">
      <h4 className="Raleway text-xl">--- Sip & Savor ---</h4>
      <h1 className="text-4xl">Our Popular Products</h1>
      <Link to="/addcoffee" className="btn  bg-[#E3B577] text-[#] text-normal">
        Add Coffee
      </Link>
      <div className="Raleway grid grid-cols-2 gap-4 p-4 border mb-4">
        {products && products.length > 0 ? (
          products.map((product, idx) => (
            <div
              className="Raleway flex  gap-4 p-4  mb-4"
              key={idx}
            >
              {/* picture */}
              <div className="size-20">
                <img
                  src={product.picUrl}
                  alt={product.name}
                  className="w-full h-auto"
                />
              </div>

              {/* details */}
              <div>
                <h2 className="text-xl font-bold">{product.name}</h2>
                <p>Chef: {product.chef}</p>
                <p>Category: {product.category}</p>
                <p>Taste: {product.taste}</p>
                <p>{product.details}</p>
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
