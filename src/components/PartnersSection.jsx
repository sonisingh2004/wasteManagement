export default function PartnersSection() {
const logos = [
  "https://cdn-prod.mybharats.in/events/683d3a350e883111868.png",
  "https://static.wixstatic.com/media/509081_b9dfaa18385a4163a6429e5ac771db0a~mv2.jpg/v1/fill/w_333,h_188,al_c,lg_1,q_80,enc_avif,quality_auto/509081_b9dfaa18385a4163a6429e5ac771db0a~mv2.jpg",
  "https://static.wixstatic.com/media/509081_ad0f6f6aacff4c7ea90f2f738dcb7060~mv2.png/v1/fill/w_195,h_258,al_c,q_85,blur_3,enc_avif,quality_auto/509081_ad0f6f6aacff4c7ea90f2f738dcb7060~mv2.png",
  "https://media.licdn.com/dms/image/v2/C560BAQFbAaiJWhGjpQ/company-logo_200_200/company-logo_200_200/0/1630655488118/zonta_infratech_private_limited_logo?e=2147483647&v=beta&t=3KI4-1WKdCmeUml9cULwcxPoJgjXBP2tlqKDAmuGMc4",
  "https://5.imimg.com/data5/SELLER/Default/2022/4/XJ/WV/GX/151090304/noida-and-greater-noida-authority-application-services-500x500.jpg",
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
