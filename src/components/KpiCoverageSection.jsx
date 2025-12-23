export default function KpiCoverageSection() {
  return (
    <section className="relative kpi-animated-gradient min-h-screen">
      
      {/* CONTENT WRAPPER */}
      <div className="min-h-screen flex items-center justify-center px-4 py-20">

        <div className="max-w-5xl w-full text-center">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
            KPI – POI Based Household Coverage
            <span className="block text-blue-600 mt-2">
              Monitoring System
            </span>
          </h2>

          {/* Glass Card */}
          <div className="backdrop-blur-xl bg-white/40 rounded-3xl shadow-2xl p-8 md:p-12">

            {/* KPI Map */}
            <div className="flex justify-center mb-12">
              <img
                src="https://ars.els-cdn.com/content/image/1-s2.0-S2226585621000364-gr1.jpg"
                alt="KPI Map"
                className="rounded-2xl shadow-lg max-w-full md:max-w-xl"
              />
            </div>

            {/* Waste Categories */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {[
                ["Plastic", "https://cdn-icons-png.flaticon.com/512/3082/3082036.png", "text-blue-600"],
                ["Organic", "https://cdn-icons-png.flaticon.com/512/3082/3082045.png", "text-green-600"],
                ["Paper", "https://cdn-icons-png.flaticon.com/512/3082/3082034.png", "text-yellow-500"],
                ["Glass", "https://cdn-icons-png.flaticon.com/512/3082/3082038.png", "text-orange-500"],
                ["Metal", "https://cdn-icons-png.flaticon.com/512/3082/3082032.png", "text-red-500"],
                ["E-Waste", "https://cdn-icons-png.flaticon.com/512/3082/3082041.png", "text-gray-600"],
              ].map(([label, img, color]) => (
                <div key={label} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center">
                    <img src={img} alt={label} className="h-8" />
                  </div>
                  <span className={`text-sm font-semibold ${color}`}>
                    {label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
