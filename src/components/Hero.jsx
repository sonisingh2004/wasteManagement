import { useState } from "react";
import DemoModal from "./DemoModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero-gradient text-white h-screen flex pt-20">
      <div className="max-w-7xl mx-auto px-6 py-24 flex flex-col lg:flex-row items-center justify-between">

        {/* Left Content */}
        <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight">
            India’s No.1 Waste Collection
            <span className="block text-yellow-300">
              Management Software
            </span>
          </h1>

          <p className="text-lg opacity-95">
            Door-to-Door Collection • RFID • GPS Tracking • QR Codes •
            Route Mapping • Online Payments
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Book a Demo
            </button>

            <button
            onClick={() => setIsModalOpen(true)}
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="https://swachhindia.ndtv.com/wp-content/uploads/sites/3/2016/08/660_3.jpg"
            alt="Waste management dashboard"
            className="max-w-md w-full drop-shadow-2xl rounded-2xl"
          />
        </div>

      </div>
    </section>

    <DemoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
