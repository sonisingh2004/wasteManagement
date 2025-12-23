export default function AllInOneSolutionSection() {
  return (
    <section className="relative py-28 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 overflow-hidden">

      {/* Soft background glow */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-300/50 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-300/50 rounded-full blur-3xl animate-pulse" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 animate-fade-in">
          All-in-one solution for efficient
          <span className="block text-blue-600 mt-2">
            fleet & waste management
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-20 animate-fade-in" style={{animationDelay: '0.2s'}}>
          A one-stop system that delivers all your operational needs
          across departments with complete transparency and control.
        </p>

        {/* Core Modules */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">

          {[
            {
              title: "Door-to-Door Collection",
              desc: "RFID / QR Code / POI based tracking",
              icon: "🚮",
            },
            {
              title: "Complaint Management",
              desc: "Citizen grievance tracking & resolution",
              icon: "🧑‍💼",
            },
            {
              title: "Waste Tracking",
              desc: "AVTS & real-time route monitoring",
              icon: "📍",
            },
            {
              title: "User Charges",
              desc: "Online payment & billing system",
              icon: "₹",
            },
            {
              title: "Fuel & Attendance",
              desc: "Vehicle fuel & workforce tracking",
              icon: "⛽",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 p-6 animate-fade-in"
              style={{animationDelay: `${0.3 + index * 0.1}s`}}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">

          {[
            {
              title: "Live Updates",
              desc: "Real-time data from ground operations",
              icon: "📡",
            },
            {
              title: "Cost Optimisation",
              desc: "Reduce operational cost & inefficiencies",
              icon: "⏳",
            },
            {
              title: "Smart Control Room",
              desc: "Centralised monitoring & dashboards",
              icon: "📊",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-md p-8 hover:scale-[1.05] hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{animationDelay: `${0.8 + index * 0.15}s`}}
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer text */}
        <p className="text-sm text-gray-500 mb-8 max-w-xl mx-auto">
          Live data from the ground to ensure 100% operations, instant
          alerts & notifications, and intelligent control-room insights.
        </p>

        {/* CTA */}
        <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 hover:scale-105 transition-all duration-300 animate-fade-in" style={{animationDelay: '1.2s'}}>
          See Price
        </button>

      </div>
    </section>
  );
}
