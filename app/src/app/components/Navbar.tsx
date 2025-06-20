import React from "react";
import Image from "next/image";

const navigate = ["Home", "About Us", "Services", "Products", "Contact Us"];

const Navbar = () => {
  return (
    <nav className="w-full px-6 lg:px-16 py-4 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-sm border-b border-blue-400/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 relative">
            <Image 
              src="/Logo.png" 
              alt="Lodexar Logo" 
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="text-white font-bold text-xl hidden sm:block">
            Lodexar
          </span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          {navigate.map((nav, i) => (
            <a
              key={i}
              href={`#${nav.toLowerCase().replace(" ", "-")}`}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium relative group"
            >
              {nav}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
