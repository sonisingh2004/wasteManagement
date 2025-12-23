import React from "react";

const features = [
  {
    title: "User Charge Collection",
    points: [
      "Geographical mapping of consumer",
      "Zone/Ward wise Customer identification",
      "GPS-enabled Mobile based collection",
      "MIS reports, Live monitoring",
      "Live Payment Collection and updates",
    ],
  },
  {
    title: "Complaint & HRMS",
    points: [
      "AI/ML Based Biometric Attendance",
      "Complaint Registration via Mobile app / CRM",
      "End-to-End Complaint Redressal",
      "OTP, Email & SMS Alerts",
      "Feedback and Analysis",
    ],
  },
  {
    title: "Beat Route Monitoring",
    points: [
      "Primary and Secondary Beat Route Creation",
      "GIS-Based Live Tracking",
      "Live Monitoring of fleet",
      "Best route selection for day to day operation",
      "Over speed and halt alert",
      "Fuel and efficiency optimization",
    ],
  },
  {
    title: "Waste Collection Monitoring",
    points: [
      "Daily Waste Collection with GPS",
      "Secondary Collection with Before/After Picture",
      "Real-time Live Location",
      "Daily Coverage Alerts",
      "Map View with Live Alerts",
      "MRF, FCTS, Plant, Landfill Management",
    ],
  },
  {
    title: "Door To Door Collection",
    points: [
      "Live Monitoring of Waste Generation",
      "Household Collection Tracking",
      "Daily Attendance & Performance",
      "Zone Wise Collection Reports",
    ],
  },
  {
    title: "Recycle Management",
    points: [
      "Storage, MRF and Recycle Management",
      "Waste Segregation Tracking",
      "Recyclable Material Monitoring",
      "Reporting & Analytics",
    ],
  },
];

const Feature = () => {
  return (
    <section className="bg-[#fffdf8] py-20 px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-light mb-4">Our Features</h1>
        <p className="text-gray-700 text-sm leading-relaxed">
          DVertex has its own proprietary software Safai Mitra which is developed
          for integration of the solid waste management industry's day-to-day
          operations. Our software is developed on the latest technology.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-10 text-center"
          >
            {/* ICON PLACEHOLDER */}
            <div className="h-20 w-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-200 to-purple-200"></div>

            <h2 className="text-2xl font-medium mb-4">
              {item.title}
            </h2>

            <ul className="text-sm text-gray-700 space-y-2 leading-relaxed">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
