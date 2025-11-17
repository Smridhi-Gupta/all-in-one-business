"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] pt-[200px] flex flex-col items-center text-white bg-[#031225] overflow-hidden pt-[7rem] pb-[3rem]">
      {/* ===== Floating Stats (Slightly Lower) ===== */}
      <div className="absolute top-[32%] left-[12%] bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-center">
        <h3 className="text-xl font-semibold text-white">90%</h3>
        <p className="text-xs text-gray-300">Technology Efficiency</p>
      </div>

      <div className="absolute top-[32%] right-[12%] bg-white/5 backdrop-blur-md px-6 py-3 rounded-xl border border-white/10 text-center">
        <h3 className="text-xl font-semibold text-white">250+</h3>
        <p className="text-xs text-gray-300">Our Agency Partners</p>
      </div>

      {/* ===== Hero Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        {/* Small Label */}
        <span className="inline-flex items-center bg-white/10 border border-white/20 text-xs text-gray-200 px-3 py-1 rounded-full mb-3">
          <span className="w-2 h-2 bg-[#FF5100] rounded-full mr-2"></span>
          Digital Solutions
        </span>

        {/* Main Heading */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-3 leading-snug">
          Embtel Digital <br /> Solutions
        </h1>

        {/* Subheading */}
        <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-base leading-relaxed">
          Expert Digital Marketing Services Tailored for Success. Experience
          Growth Through Innovation and Technology.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-10">
          <button className="px-6 py-3 bg-[#FF5100] hover:bg-orange-500 rounded-full text-white font-medium shadow-md hover:shadow-orange-400/30 transition-all duration-300">
            Let’s contact us
          </button>
          <button className="px-6 py-3 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300">
            More About us
          </button>
        </div>

        {/* ===== Planet Image (Bigger) ===== */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative w-[340px] md:w-[420px] mt-2"
        >
          <Image
            src="/Home-Hero.png"
            alt="Digital Globe"
            width={420}
            height={420}
            className="mx-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.7)]"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
