import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/products")
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
      <div>
        {products.map((product, idx) => (
          <div className="grid grid-cols-2 gap-4 p-4 border mb-4" key={idx}>
            {/* picture */}
            <div>
              <img
                src={product.imageUrl}
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
        ))}
      </div>
    </div>
  );
};

export default Products;
