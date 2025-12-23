export default function PartnersSection() {
const logos = [
  "https://briskodetechnology.com/images/portfolio/portfolio10.png",
  "https://briskodetechnology.com/images/Briskode/partner/Ganjam%20NAC.png",
  "https://briskodetechnology.com/images/Briskode/partner/truptitrucknbus.png",
  "https://briskodetechnology.com/images/Briskode/partner/pattachitra.png",
  "https://briskodetechnology.com/images/Briskode/partner/PB%20Associate.png",
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
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 p-6 flex items-center justify-center group"
            >
              <img
                src={logo}
                alt="Partner logo"
                className="h-16 object-contain transition"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
