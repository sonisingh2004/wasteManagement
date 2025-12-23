// import React from "react";

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full bg-[#fffaf3] h-20 flex items-center px-10 sticky top-0">
      
      {/* LEFT LOGO */}
      <div className="flex items-center">
        <img
          src="https://briskodetechnology.com/images/Briskode/logo.png"
          alt="SafaiMitra"
          className="h-11"
        />
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-8 mx-auto">
        

        <ul className="flex gap-6 text-[15px] text-gray-800">
          <li className="text-blue-600 font-semibold cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            <Link to="/feature">Features</Link>
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Our Solutions
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Pricing
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            About us
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Privacy Policy
          </li>
        </ul>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5 text-sm">
        
        {/* Login */}
        <div className="flex items-center gap-1 cursor-pointer">
          <span>👤</span>
          <span>Log In</span>
        </div>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <span className="text-lg">👜</span>
          <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[11px] px-1.5 rounded-full">
            0
          </span>
        </div>

        {/* Startup India */}
        <span className="text-orange-500 font-semibold">
          #startupindia
        </span>

        {/* Call */}
        <span className="text-blue-900">
          Call us <strong>+91 9650774004</strong>
        </span>
      </div>
    </header>
  );
};

export default Header;
