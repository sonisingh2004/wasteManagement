export default function SmartWasteSection() {
  return (
    <section className="smart-waste-gradient w-full py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">

        {/* LEFT ICON */}
        <div className="flex-shrink-0">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3063/3063827.png"
            alt="Smart Waste Icon"
            className="w-28 h-28"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="text-white max-w-3xl">
          <h2 className="text-4xl font-semibold mb-4">
            Smart waste management
          </h2>

          <p className="text-base leading-relaxed text-white/90">
            It provides smart waste management software solutions that
            support the green transformation of waste management. Achieve
            efficiency, reduce costs, ensure 100% transparency, and promote
            re-sustainability. It tools are designed to enhance
            waste management processes effectively in the United States and
            beyond.
          </p>
        </div>

      </div>
    </section>
  );
}
