
export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
      <div className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between">
        
        {/* Left Hero Content */}
        <div className="text-center lg:text-left lg:w-1/2 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-extrabold">
            India’s No.1 Waste Collection  
            <span className="block text-yellow-300">Management Software</span>
          </h1>

          <p className="text-lg lg:text-xl">
            Door-to-Door Waste Collection • RFID • GPS • QR Code • GIS Route Mapping • Online Payments
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#features"
              className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition"
            >
              Book a Demo
            </a>
            <a
              href="#contact"
              className="px-6 py-3 border border-white font-semibold rounded-lg hover:bg-white hover:text-black transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="mt-10 lg:mt-0 lg:w-1/2 flex justify-center">
          <img
            src="/hero-waste-management.png"
            alt="Smart waste management dashboard"
            className="w-full max-w-md animate-fadeIn"
          />
        </div>

      </div>
    </section>
  );
}
