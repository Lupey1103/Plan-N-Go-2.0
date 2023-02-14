import React from "react";
import Logo from "../assets/Plan-N-Go.png";


export const Navbar = () => {
  return (
    <nav className="bg-teal-900 py-3 shadow-xl">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={Logo} alt="" className="w-20"></img>
          </a>
          <div>
            <a href="#" className="mr-3 text-lg text-white font-poppins hover:text-blue-500 ">Sign Up</a>
            <a href="#" className="mr-3 p-2 border-4 rounded-full text-lg text-white font-poppins hover:text-blue-500">Sign In</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
