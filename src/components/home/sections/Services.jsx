"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      desc: "Leverage the power of popular social media platforms to enhance brand visibility and engagement.",
    },
    {
      title: "Search Engine Optimization",
      desc: "Enhance your online visibility with our expert Search Engine Optimization (SEO) services.",
      dark: true,
    },
    {
      title: "PPC Advertising",
      desc: "Implement highly targeted advertising campaigns to reach your audience at the right moment.",
    },
    {
      title: "Content Marketing",
      desc: "Develop and distribute valuable, relevant, and consistent content to attract and engage your target audience.",
    },
    {
      title: "Email Marketing",
      desc: "Cultivate direct communication with your audience through personalized and targeted email campaigns.",
    },
    {
      title: "Technology Integration",
      desc: "Seamlessly integrate cutting-edge technology solutions into your business operations.",
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-10">
      {/* ===== Trusted by Brands Section ===== */}
      <div className="flex flex-col items-center mb-20">
        <p className="text-base font-bold text-gray-700 mb-6">
          Trusted by brands who value results
        </p>

        {/* Outer Wrapper for Overlapping Bars */}
        <div className="relative">
          {/* Main Navy Bar */}
          <div className="bg-[#0B1221] flex items-center justify-center gap-12 px-10 py-6 rounded-2xl shadow-lg relative z-10">
            {[1, 2, 3, 4].map((_, i) => (
              <Image
                key={i}
                src="/logoipsum.png"
                alt="brand logo"
                width={120}
                height={30}
                className="object-contain opacity-90"
              />
            ))}
          </div>

          {/* Orange Underbar (Overlapping) */}
          <div className="absolute bottom-[-22px] left-1/2 -translate-x-1/2 w-[92%] h-[100px] bg-[#FF5100] rounded-2xl z-0"></div>
        </div>
      </div>

      {/* ===== Infinity Background ===== */}
      <div className="absolute inset-0 flex justify-center items-center translate-y-15">
        <Image
          src="/infinity.png"
          alt="infinity background"
          width={1350}
          height={1500}
          className="object-cover opacity-100 saturate-150"
        />
      </div>

      {/* ===== Section Header ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 bg-white border border-gray-400 font-medium px-2 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#FF5100]"></span>
          Services
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#031225] mb-3">
              Comprehensive Digital <br /> Marketing Services
            </h2>
          </div>
          <div className="mt-4 md:mt-0 max-w-md text-gray-500 text-sm leading-relaxed">
            Tailored Solutions for Your Business Growth. Discover expert digital
            marketing solutions designed for performance and impact.
            <br />
            <button className="mt-3 px-5 py-2 bg-[#FF5100] text-white rounded-full text-sm font-medium hover:bg-orange-500 transition-all">
              Explore more
            </button>
          </div>
        </div>
      </div>

      {/* ===== Service Cards Grid (with stagger effect) ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {services.map((service, index) => {
          // Determine card position (1, 2, 3 repeating pattern)
          const position = (index % 3) + 1; // 1 → left, 2 → center, 3 → right

          // Position logic for stagger effect
          let marginClass = "";
          if (position === 2) marginClass = "mt-8"; // middle card slightly down
          else marginClass = "-mt-6"; // left/right cards slightly up

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative w-full h-[420px] rounded-2xl ${
                service.dark
                  ? "bg-[#031225] text-white"
                  : "bg-white text-[#031225]"
              } shadow-[0_8px_25px_rgba(0,0,0,0.15)] p-6 flex flex-col justify-between transition-all ${marginClass}`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p
                  className={`text-md ${
                    service.dark ? "text-gray-300" : "text-gray-600"
                  } mb-6`}
                >
                  {service.desc}
                </p>

                {/* Learn More Button */}
                <button className="inline-flex items-center gap-2 bg-[#FF5100] text-white px-7 py-1.5 rounded-full text-sm font-medium hover:bg-orange-500 transition-all">
                  Learn more <span className="text-base font-bold">»</span>
                </button>
              </div>

              {/* Card Image */}
              <div className="mt-6 flex justify-center">
                <Image
                  src="/serviceCard3.png"
                  alt={service.title}
                  width={160}
                  height={90}
                  className="object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
