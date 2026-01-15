"use client";

import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={26} />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <TrendingUp size={26} />,
    value: "250+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={26} />,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: <Award size={26} />,
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section
      className="relative w-full py-24 px-6 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* LIGHT OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">

        {/* Heading */}
        <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF5100] tracking-wide mb-3">
          <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
          OUR IMPACT
        </span>

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-14">
          Our Journey in Numbers
        </h2>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl p-8
                border border-gray-100
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:-translate-y-1.5
                transition-all duration-300
              "
            >
              {/* ICON */}
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-[#FF5100]/15 flex items-center justify-center text-[#FF5100]">
                {stat.icon}
              </div>

              {/* VALUE */}
              <h3 className="text-4xl font-extrabold text-[#031225] mb-2">
                {stat.value}
              </h3>

              {/* LABEL */}
              <p className="text-gray-600 text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
