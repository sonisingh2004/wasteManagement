export default function Hero() {
  return (
    <section className="hero-gradient text-white">
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
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition">
              Book a Demo
            </button>

            <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <img
            src="/hero-waste-management.png"
            alt="Waste management dashboard"
            className="max-w-md w-full drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
