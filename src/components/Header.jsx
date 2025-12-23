// import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-[#fffaf3] h-20 flex items-center px-10">
      
      {/* LEFT LOGO */}
      <div className="flex items-center">
        <img
          src="https://static.wixstatic.com/media/509081_4ce6f687794a4eac8d05de7c13ecfdfa~mv2.png/v1/fill/w_78,h_78,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/_edited_edited.png"
          alt="SafaiMitra"
          className="h-11"
        />
      </div>

      {/* CENTER */}
      <div className="flex items-center gap-8 mx-auto">
        <img
          src="https://static.wixstatic.com/media/509081_c07ec5a01d1d4564be0d6ca9ffb0d499~mv2.png/v1/fill/w_72,h_72,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/gem-logo.png"
          alt="GeM"
          className="h-9"
        />

        <ul className="flex gap-6 text-[15px] text-gray-800">
          <li className="text-blue-600 font-semibold cursor-pointer">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-600">
            Features
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
