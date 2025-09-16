import React from "react";
import Feature from "../Components/Feature/Feature";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";


const Home = () => {
 
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
