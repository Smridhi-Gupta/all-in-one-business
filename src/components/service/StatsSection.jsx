"use client";

import { Award, Briefcase, Users } from "lucide-react";

const stats = [
  {
    icon: <Award size={22} strokeWidth={1.5} />,
    value: "10+",
    label: "Years of Experience",
  },
  {
    icon: <Briefcase size={22} strokeWidth={1.5} />,
    value: "250+",
    label: "Projects Completed",
  },
  {
    icon: <Users size={22} strokeWidth={1.5} />,
    value: "200+",
    label: "Happy Clients",
  },
];

export default function StatsSection() {
  return (
    <section className="w-full flex justify-center px-6 relative z-30 -mt-24">
      <div
        className="
          max-w-6xl w-full 
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          gap-8
        "
      >
        {stats.map((item, i) => (
          <div
            key={i}
            className="
              bg-white rounded-2xl shadow-md border border-gray-100
              py-6 px-4
              flex flex-col items-center text-center
              transition-all duration-300 hover:shadow-xl
            "
          >
            {/* ICON BOX */}
            <div
              className="
                w-14 h-14 rounded-xl 
                bg-[#FFE8DE] 
                flex items-center justify-center
                mb-4
              "
            >
              <span className="text-[#FF5100]">{item.icon}</span>
            </div>

            {/* NUMBER */}
            <h3 className="text-3xl font-bold text-[#031225] mb-1">
              {item.value}
            </h3>

            {/* LABEL */}
            <p className="text-gray-500 text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
