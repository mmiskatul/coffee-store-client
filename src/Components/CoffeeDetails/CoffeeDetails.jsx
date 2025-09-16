import React from "react";

const CoffeeDetails = ({ coffee }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center bg-[#F5F4F1] p-8 rounded-lg shadow-lg max-w-4xl mx-auto mt-10">
      
      {/* Left - Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src={coffee.picUrl}
          alt={coffee.name}
          className="rounded-lg shadow-md w-64 h-64 object-cover"
        />
      </div>

      {/* Right - Details */}
      <div className="w-full md:w-1/2 space-y-4 px-6">
        <h2 className="text-3xl font-bold text-[#331A15] mb-4 border-b-2 border-[#E3B577] pb-2">
          Coffee Details
        </h2>

        <div className="space-y-3">
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Name:
            </span>{" "}
            {coffee.name}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Chef:
            </span>{" "}
            {coffee.chef}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Supplier:
            </span>{" "}
            {coffee.supplier}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Taste:
            </span>{" "}
            {coffee.taste}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Category:
            </span>{" "}
            {coffee.category}
          </p>
          <p>
            <span className="bg-[#E3B577] px-2 py-1 rounded font-semibold text-[#331A15]">
              Details:
            </span>{" "}
            {coffee.details}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
