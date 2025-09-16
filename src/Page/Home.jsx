import React from "react";
import Feature from "../Components/Feature/Feature";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import pic1 from "../assets/cups/Rectangle 9.png";
import pic2 from "../assets/cups/Rectangle 10.png";
import pic3 from "../assets/cups/Rectangle 11.png";
import pic4 from "../assets/cups/Rectangle 12.png";
import pic5 from "../assets/cups/Rectangle 13.png";
import pic6 from "../assets/cups/Rectangle 14.png";
import pic7 from "../assets/cups/Rectangle 15.png";
import pic8 from "../assets/cups/Rectangle 16.png";

const Home = () => {
  const pictures = [
    { id: 1, pic: pic1 },
    { id: 2, pic: pic2 },
    { id: 3, pic: pic3 },
    { id: 4, pic: pic4 },
    { id: 5, pic: pic5 },
    { id: 6, pic: pic6 },
    { id: 7, pic: pic7 },
    { id: 8, pic: pic8 },
  ];
  return (
    <div className="flex flex-col justify-center items-center  bg-white">
      <Hero />
      <Feature />
      <Products />
      <div className="flex flex-col items-center gap-5 justify-center">
        <h3 className="Raleway text-black font-bold"> Follow Us Now</h3>
        <h1 className="text-[#331A15] text-5xl">Follow on Instagram</h1>

       
      </div>
    </div>
  );
};

export default Home;
