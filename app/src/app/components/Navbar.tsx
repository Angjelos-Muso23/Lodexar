import Image from "next/image";
import React from "react";

import logo from "../../../public/Logo.png";

const navigate = ["Home", "About Us", "Services", "Products", "Contact Us"];

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-blue-400/20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 px-6 py-4 backdrop-blur-sm lg:px-16">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <div className="flex w-32 items-center justify-center">
          <Image src={logo} alt="Lodexar Logo" className="w-full" />
        </div>

        <div className="hidden items-center space-x-8 md:flex">
          {navigate.map((nav, i) => (
            <a
              key={i}
              href={`#${nav.toLowerCase().replace(" ", "-")}`}
              className="group relative font-medium text-gray-300 transition-colors duration-300 hover:text-blue-400"
            >
              {nav}
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
        <a href="#contact-us">
          <button className="transform rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2 font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-blue-600 hover:to-cyan-600 hover:shadow-blue-500/25">
            Get Started
          </button>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
