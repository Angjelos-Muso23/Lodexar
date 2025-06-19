import Image from "next/image";
import React from "react";
import logo from "../../public/Logo.png";

const navigate = ["Home", "About Us", "Contact Us"];

const Navbar = () => {
  return (
    <div className="w-full h-max px-16 py-4 bg-[#1A1A1A] flex justify-between items-center border-b-2 border-[#B0F3F3]">
      <div className="w-32 ">
        <Image src={logo} alt="logo" className="w-full h-full" />
      </div>
      <div className="flex items-center justify-center gap-4">
        {navigate.map((nav, i) => (
          <p key={i} className="text-lg text-white">
            {nav}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
