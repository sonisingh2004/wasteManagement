import React from "react";

const Footer = () => {
  return (
    <footer className="relative w-full bg-[#fffdf8] overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-200/70 via-transparent to-purple-200/60 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-10 py-16">
        
        {/* TOP CONTENT */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14 text-sm text-gray-900">
          
          {/* Column 1 */}
          <div>
            <h2 className="text-3xl font-light mb-2">
              
            </h2>
            <p className="font-semibold mb-6"></p>

            <img
              src="https://briskodetechnology.com/images/Briskode/logo.png"
              alt="SafaiMitra"
              className="h-20"
            />
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            <p>Features</p>
            <p>Pricing</p>
            <p>Resources</p>
            <p>Contact</p>
            <p className="font-semibold">Download App</p>
            <p className="font-semibold">Login To Dashboard</p>
          </div>

          {/* Column 3 */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-1">Global Office</h3>
            <p></p>
            <p>Near Care Hospital, Chandrasekharpur,</p>
            <p>Bhubaneswar, Odisha 751001</p>
            <p>Email :- briskodetechnology@gmail.com</p>
            <p>Mobile:- +91 9348354248 </p>
            <p>Phone:- +91 8117856483</p>

            <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg">
              Book a Demo
            </button>

            <p className="mt-3 inline-block border-b border-black pb-1">
             
            </p>
          </div>

          {/* Column 4 */}
          <div className="flex flex-col justify-between">
            <p>
              We're looking for <br />
              talented, passionate <br />
              folks to join our team.
            </p>

            <p className="mt-10 inline-block border-b border-black pb-1">
              2025-26 © <a href="https://briskodetechnology.com/">Briskodetechnology.pvt.ltd</a>
            </p>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="border-t border-black my-10"></div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          
          <p>© 2025–26 by Briskode Technologies Pvt. Ltd</p>

          
        </div>

      </div>
    </footer>
  );
};

export default Footer;
