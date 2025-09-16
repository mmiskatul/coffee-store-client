import React from "react";
import bgImage from "../../assets/11 3.png";

const AddCoffee = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <form className="w-3/4 max-w-2xl p-8 rounded-lg bg-[#F4F3F0] shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-center text-[#331A15]">
          Add New Coffee
        </h1>
        <p className="text-sm mb-8 text-gray-600 text-center">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here.
        </p>

        {/* Grid Inputs */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-6">
          {/* Coffee Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Chef */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Chef</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Chef"
              className="input input-bordered w-full"
            />
          </div>

          {/* Supplier */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Supplier</span>
            </label>
            <input
              type="text"
              placeholder="Enter Supplier Name"
              className="input input-bordered w-full"
            />
          </div>

          {/* Taste */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Taste</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Taste"
              className="input input-bordered w-full"
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Category</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Category"
              className="input input-bordered w-full"
            />
          </div>

          {/* Details */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-[#331A15]">Details</span>
            </label>
            <input
              type="text"
              placeholder="Enter Coffee Details"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-8 text-center">
          <button className="btn bg-[#331A15] hover:bg-[#4A2C23] text-white w-full">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
