import React from "react";
import coffeeImage from '../../assets/Rectangle.png'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <div
      className= "navbar navbar-center flex items-center justify-center shadow-sm py-1 bg-cover bg-center"
      style={{ backgroundImage: `url(${coffeeImage})` }}
    >
        <img src={logo} alt="" />
      <h1 className="text-white text-6xl font-normal">Espresso Emporium</h1>
    </div>
  );
};

export default Navbar;
