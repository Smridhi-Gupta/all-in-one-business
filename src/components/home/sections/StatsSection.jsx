"use client";

import React from "react";
import { Users, CheckSquare, DollarSign, Award } from "lucide-react";

const stats = [
  {
    icon: <Users size={26} strokeWidth={1.5} />,
    value: "165,489 +",
    label: "Happy Customers",
  },
  {
    icon: <CheckSquare size={26} strokeWidth={1.5} />,
    value: "254 +",
    label: "Project Complete",
  },
  {
    icon: <DollarSign size={26} strokeWidth={1.5} />,
    value: "2 M+",
    label: "Registered Member",
  },
  {
    icon: <Award size={26} strokeWidth={1.5} />,
    value: "578",
    label: "Awards Winning",
  },
];

const StatsSection = () => {
  return (
    <section className="w-full bg-[#f1f5fc] py-10 sm:py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 text-center">
        {stats.map((item, i) => (
          <div key={i} className="flex flex-col items-center justify-center">
            {/* Icon */}
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-4">
              <span className="text-[#031225]">{item.icon}</span>
            </div>

            {/* Value */}
            <h3 className="text-[#031225] font-bold text-xl sm:text-2xl mb-1">
              {item.value}
            </h3>

            {/* Label */}
            <p className="text-gray-500 text-xs sm:text-sm font-semibold">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
