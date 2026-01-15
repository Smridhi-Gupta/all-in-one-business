"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const InfinitySection = () => {
  const cards = [
    {
      title: "Easy Payment",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.",
    },
    {
      title: "User Review",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.",
    },
    {
      title: "Communication",
      desc: "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise.",
    },
  ];

  return (
    <section className="relative w-full py-14 sm:py-20 bg-white text-center overflow-hidden">
      {/* ===== Heading ===== */}
      <div className="mb-10 sm:mb-14 px-4">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-[#031225] mb-2">
          Rounded icon with rounded border style
        </h2>
        <div className="flex justify-center items-center mb-3">
          <div className="w-10 sm:w-12 h-[3px] bg-[#FF5100] rounded-full"></div>
        </div>
        <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto">
          Modernize your rounded icon box with rounded border style. This is one
          of the best icon box styles for your WordPress site.
        </p>
      </div>

      {/* ===== Infinity Image ===== */}
      <div className="relative flex justify-center items-center mb-6 sm:mb-0">
        <Image
          src="/infinity.png"
          alt="infinity"
          width={1000}
          height={800}
          className="object-contain w-[320px] sm:w-[500px] md:w-[700px] lg:w-[900px] select-none"
          priority
        />

        {/* Center Label */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="absolute bg-black/50 px-4 sm:px-6 py-2 sm:py-3 rounded-lg backdrop-blur-sm shadow-lg"
        >
          <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
            AI AGENTS
          </h3>
        </motion.div>
      </div>

      {/* ===== Cards Section ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 sm:-mt-10">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -6, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.25)] p-6 text-left"
          >
            <h4 className="text-[#031225] font-bold mb-2 text-base sm:text-lg">
              {card.title}
            </h4>
            <p className="text-gray-600 text-sm sm:text-base mb-4 leading-relaxed">
              {card.desc}
            </p>
            <a
              href="#"
              className="text-[#007bff] text-sm font-medium hover:underline"
            >
              Read More
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default InfinitySection;
