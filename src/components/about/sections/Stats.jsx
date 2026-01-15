"use client";

import { Briefcase, Users, TrendingUp, Award } from "lucide-react";

const stats = [
  {
    icon: <Briefcase size={24} />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <TrendingUp size={24} />,
    value: "250+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={24} />,
    value: "200+",
    label: "Happy Clients",
  },
  {
    icon: <Award size={24} />,
    value: "98%",
    label: "Client Satisfaction",
  },
];

export default function Stats() {
  return (
    <section
      className="
        relative w-full
        py-14 sm:py-18 md:py-24
        px-4 sm:px-6
        bg-cover bg-center
        md:bg-fixed
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        {/* Heading */}
        <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#FF5100] tracking-wide mb-3">
          <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
          OUR IMPACT
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-10 sm:mb-12 md:mb-14">
          Our Journey in Numbers
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                bg-white
                rounded-2xl
                p-6 sm:p-7 md:p-8
                border border-gray-100
                shadow-[0_10px_30px_rgba(0,0,0,0.08)]
                hover:-translate-y-1.5
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-xl bg-[#FF5100]/15 flex items-center justify-center text-[#FF5100]">
                {stat.icon}
              </div>

              {/* Value */}
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#031225] mb-2">
                {stat.value}
              </h3>

              {/* Label */}
              <p className="text-gray-600 text-xs sm:text-sm tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
