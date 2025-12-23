export default function PartnersSection() {
const logos = [
  "https://swachhgopalpur.in/assets/logo1-t7lwI3o0.png",
  "https://swachhganjam.in/assets/logo-D7UUn_EU.png",
  "https://swachhgopalpur.in/assets/logo1-t7lwI3o0.png",
  "https://swachhganjam.in/assets/logo-D7UUn_EU.png",
  "https://swachhgopalpur.in/assets/logo1-t7lwI3o0.png",
];

  return (
    <section className="bg-[#fffaf3] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <p className="text-center text-gray-800 text-lg md:text-xl mb-16">
          All Inclusive IoT Platform | Fully Featured Website | Mobile Apps | Easy To Use
        </p>

        {/* Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 items-center">

          {logos.map((logo, index) => (
            <div
              key={index}
              className="h-[120px] w-[120px] bg-white rounded-[50%] shadow-sm hover:shadow-md transition-all duration-300  flex items-center justify-center group"
            >
              <img
                src={logo}
                alt="Partner logo"
                className="h-[90%] w-[90%] rounded-[40%] object-cover transition"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
