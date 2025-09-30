"use client";
import React from "react";

const stats = [
  {
    number: "48K+",
    label: "Projects Delivered",
  },
  {
    number: "72%",
    label: "Client Success Rate",
  },
  {
    number: "15+",
    label: "Years Experience",
  },
  {
    number: "250+",
    label: "Active Clients",
  },
];

const StatsAchievements = () => {
  return (
    <section className="w-full bg-[#031225] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-14">
          Our <span className="text-[#FF5100]">Achievements</span>
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center bg-white/5 
                         backdrop-blur-md rounded-xl py-10 px-6 
                         border border-transparent hover:border-[#FF5100] 
                         transition duration-300 shadow-md hover:shadow-[#FF5100]/30"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-[#FF5100] mb-3">
                {item.number}
              </h3>
              <p className="text-gray-300 text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsAchievements;
