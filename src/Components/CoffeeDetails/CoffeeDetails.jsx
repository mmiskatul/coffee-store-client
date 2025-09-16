import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched product:", data);
        setProduct(data);
      })
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  if (!product) {
    return <p className="text-center mt-10">Loading product details...</p>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#F5F4F1] p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={product.picUrl}
          alt={product.name}
          className="rounded-lg shadow-md w-64 h-64 object-cover"
        />
      </div>

      {/* Right - Details */}
      <div className="w-full md:w-1/2 space-y-4 px-6">
        <h2 className="text-3xl font-bold text-[#331A15] mb-4 border-b-2 border-[#E3B577] pb-2">
          Product Details
        </h2>

        <div className="space-y-3">
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Name:
            </span>{" "}
            {product.name}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Chef:
            </span>{" "}
            {product.chef}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Supplier:
            </span>{" "}
            {product.supplier}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Taste:
            </span>{" "}
            {product.taste}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Category:
            </span>{" "}
            {product.category}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Details:
            </span>{" "}
            {product.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
