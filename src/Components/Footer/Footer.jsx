import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import bgimage from "../../assets/Rectangle 18.png";

function Footer() {
  return (
    <footer
      className="w-full flex flex-col md:flex-row justify-between items-start bg-white text-black p-10 gap-10"
      style={{ backgroundImage: `url(${bgimage})`, backgroundSize: "cover" }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Title + Description */}
        <div>
          <h2 className="text-3xl font-bold text-[#331A15]">Coffee House</h2>
          <p className="text-gray-700 mt-2">
            Brewing happiness in every cup! Explore our collection of rich, aromatic coffees and stay connected with us for the latest flavors and updates.
          </p>
        </div>

        {/* Social Media */}
        <div className="flex space-x-4 mt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#4A2C23]">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#4A2C23]">
            <FaInstagram />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#4A2C23]">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 bg-[#331A15] text-white rounded-full hover:bg-[#4A2C23]">
            <FaLinkedinIn />
          </a>
        </div>

        {/* Get in Touch */}
        <div className="mt-6 space-y-2">
          <h3 className="text-xl font-semibold text-[#331A15]">Get in Touch</h3>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#331A15]" /> 123 Coffee Street, Dhaka, Bangladesh
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-[#331A15]" /> contact@coffeehouse.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-[#331A15]" /> +880 123 456 789
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-1/2">
        <form className="bg-[#F5F4F1] p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-[#331A15] mb-4">Connect With Us</h3>
          <fieldset className="w-full space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              Enter your email address
            </label>
            <div className="flex">
              <input
                type="email"
                placeholder="username@site.com"
                className="input input-bordered w-full rounded-l-lg"
              />
              <button className="btn bg-[#331A15] hover:bg-[#4A2C23] text-white rounded-r-lg">
                Subscribe
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
