export default function FeaturesResourcesSection() {
  return (
    <>
      {/* ================= FEATURES CTA ================= */}
      <section className="relative py-24 overflow-hidden bg-[#fffdf8]">
        {/* Soft gradient edges */}
        <div className="absolute inset-0 bg-gradient-to-r from-pink-200/40 via-transparent to-blue-200/40" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="text-4xl text-gray-500 mb-3">Features</p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            From API integrations to powerful <br />
            analytics – SafaiMitra has it all.
          </h2>

          <p className="text-gray-600 text-sm max-w-2xl mx-auto mb-8">
            Built Java platform which supports multiple API integrations with
            all IoT devices like GPS, Mobile, CCTV, Sensors, RFID, Biometric
            machines and more.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Discover more features
          </button>
        </div>
      </section>

      {/* ================= RESOURCES ================= */}
      <section className="py-24 bg-[#fffdf8]">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="text-4xl text-gray-500 mb-3">Resources</p>
          <h3 className="text-3xl font-semibold mb-14">
            The latest from SafaiMitra
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {[
              {
                title: "Revolutionizing Waste Management",
                desc: "Why small towns must embrace digital waste systems.",
                img: "https://images.unsplash.com/photo-1605600659908-0ef719419d41",
              },
              {
                title: "Why Small Towns Need Digital Systems",
                desc: "More than metro cities need smart management.",
                img: "https://images.unsplash.com/photo-1581091870627-3b9b9f0e2c6d",
              },
              {
                title: "Role of Sanitation Services",
                desc: "India’s cleanliness drive needs smart tech.",
                img: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition overflow-hidden text-left"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-44 w-full object-cover"
                />
                <div className="p-5">
                  <h4 className="font-semibold mb-2 text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}

          </div>

          <button className="mt-12 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition">
            Our Assets
          </button>
        </div>
      </section>

      {/* ================= CLIENT TESTIMONIAL ================= */}
      <section className="bg-sky-200 py-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-16">

          {/* Left text */}
          <div className="text-white">
            <p className="text-5xl font-bold mb-2">Our Clients</p>
            <h3 className="text-3xl font-semibold leading-snug">
              Why companies <br /> like SafaiMitra?
            </h3>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md ml-auto">
            <p className="text-sm text-gray-800 mb-4">
              “User Charges Collection increased – Our budget didn’t.”
            </p>

            <p className="text-xs text-gray-600 mb-6">
              By SafaiMitra User Charges System our monthly cash collection
              increased by 40%. It’s online software performance is really good.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/40"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="text-sm font-semibold">Rohan Goyal</p>
                <p className="text-xs text-gray-500">
                  Waste Management India
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
