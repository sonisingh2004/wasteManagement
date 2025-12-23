import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="w-full bg-[#fffaf3] h-20 flex items-center px-6 md:px-10 fixed top-0 z-50 shadow-md">
        
        {/* LEFT LOGO */}
        <Link to='/'>
        <div className="flex items-center">
          <img
            src="https://briskodetechnology.com/images/Briskode/logo.png"
            alt="briskode"
            className="h-10 md:h-11"
          />
        </div>
        </Link>
        

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 mx-auto">
          <ul className="flex gap-6 text-[15px] text-gray-800">
            <li className={location.pathname === "/" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === "/feature" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              <Link to="/feature">Features</Link>
            </li>
            <li className={location.pathname === "/solutions" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              Our Solutions
            </li>
            <li className={location.pathname === "/pricing" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              Pricing
            </li>
            <li className={location.pathname === "/about" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              About us
            </li>
            <li className={location.pathname === "/privacy" ? "text-blue-600 font-semibold" : "hover:text-blue-600 cursor-pointer"}>
              Privacy Policy
            </li>
          </ul>
        </div>

        {/* DESKTOP RIGHT */}
        <div className="hidden md:flex items-center gap-5 text-sm">
          <div className="flex items-center gap-1 cursor-pointer">
            <span>👤</span>
            <span>Log In</span>
          </div>

          <div className="relative cursor-pointer">
            <span className="text-lg">👜</span>
            <span className="absolute -top-2 -right-3 bg-blue-600 text-white text-[11px] px-1.5 rounded-full">
              0
            </span>
          </div>

          <span className="text-orange-500 font-semibold">
            #startupindia
          </span>

          <span className="text-blue-900 whitespace-nowrap">
            Call us <strong>+91 9650774004</strong>
          </span>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="ml-auto md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed top-20 left-0 w-full bg-[#fffaf3] shadow-lg z-40 md:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6 text-gray-800">
            <li 
              onClick={() => setOpen(false)}
              className={location.pathname === "/" ? "text-blue-600 font-semibold" : ""}
            >
              <Link to="/">Home</Link>
            </li>
            <li 
              onClick={() => setOpen(false)}
              className={location.pathname === "/feature" ? "text-blue-600 font-semibold" : ""}
            >
              <Link to="/feature">Features</Link>
            </li>
            <li className={location.pathname === "/solutions" ? "text-blue-600 font-semibold" : ""}>
              Our Solutions
            </li>
            <li className={location.pathname === "/pricing" ? "text-blue-600 font-semibold" : ""}>
              Pricing
            </li>
            <li className={location.pathname === "/about" ? "text-blue-600 font-semibold" : ""}>
              About us
            </li>
            <li className={location.pathname === "/privacy" ? "text-blue-600 font-semibold" : ""}>
              Privacy Policy
            </li>

            <hr />

            <li className="flex items-center gap-2">
              👤 Log In
            </li>

            <li className="flex items-center gap-2">
              👜 Cart (0)
            </li>

            <li className="text-orange-500 font-semibold">
              #startupindia
            </li>

            <li className="text-blue-900">
              Call us <strong>+91 9650774004</strong>
            </li>
          </ul>
        </div>
      )}

      {/* HEADER SPACER */}
      <div className="h-20"></div>
    </>
  );
};

export default Header;
