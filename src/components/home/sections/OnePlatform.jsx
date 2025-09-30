"use client";
import React, { useState } from "react";
import {
  FaHospital,
  FaShoppingCart,
  FaChalkboardTeacher,
  FaIndustry,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const industries = [
  {
    title: "Healthcare",
    icon: <FaHospital size={20} />,
    desc: "Powering healthcare with secure, scalable and compliant solutions.",
  },
  {
    title: "Retail",
    icon: <FaShoppingCart size={20} />,
    desc: "Deliver seamless shopping experiences online and offline.",
  },
  {
    title: "Education",
    icon: <FaChalkboardTeacher size={20} />,
    desc: "Enhance learning with digital classrooms and smart tools.",
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry size={20} />,
    desc: "Optimize production with IoT, automation, and data-driven insights.",
  },
  {
    title: "Technology",
    icon: <FaLaptopCode size={20} />,
    desc: "Accelerate innovation with cloud, AI, and modern development stacks.",
  },
  {
    title: "Finance",
    icon: <FaChartLine size={20} />,
    desc: "Secure and fast solutions for banking, trading, and fintech.",
  },
];

const OnePlatform = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="w-full bg-white py-20 px-6 text-[#031225] relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          One platform, <span className="text-[#FF5100]">any industry</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          From healthcare to finance, education to manufacturing — our platform
          adapts to your industry needs.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {industries.map((ind, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(i)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full border transition font-medium
                ${
                  activeTab === i
                    ? "bg-[#FF5100] text-white border-[#FF5100]"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200 border-gray-200"
                }`}
            >
              {ind.icon}
              {ind.title}
            </button>
          ))}
        </div>

        {/* Active Tab Content */}
        <div className="max-w-2xl mx-auto bg-[#f9f9f9] rounded-2xl p-10 shadow-md border border-[#FF5100]/20">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#FF5100] text-white mb-6 mx-auto">
            {industries[activeTab].icon}
          </div>
          <h3 className="text-2xl font-semibold mb-3">
            {industries[activeTab].title}
          </h3>
          <p className="text-gray-600">{industries[activeTab].desc}</p>
        </div>
      </div>
    </section>
  );
};

export default OnePlatform;
