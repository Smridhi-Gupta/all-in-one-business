"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="relative w-full min-h-screen pt-[180px] flex flex-col items-center text-white 
  bg-[#031225] overflow-hidden pb-12
  bg-[url('/Home-Hero-bg.png')] bg-cover bg-no-repeat bg-position-[center_140px]"
    >
      {/* ===== Floating Stats (Slightly Lower) ===== */}
      <div className="absolute top-[37%] left-[16%] bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-white">90%</h3>
        <p className="text-l text-gray-300">Technology Efficiency</p>
      </div>

      <div className="absolute top-[37%] right-[16%] bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-white">250+</h3>
        <p className="text-l text-gray-300">Our Agency Partners</p>
      </div>

      {/* ===== Hero Content ===== */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center bg-white/30 text-s text-gray-200 px-3 rounded-full">
          <span className="w-2 h-2 bg-[#FF5100] rounded-full mr-2"></span>
          Digital Solutions
        </span>

        <h1 className="text-6xl md:text-6xl font-bold mb-3 leading-tight">
          Embtel Digital <br /> Solutions
        </h1>

        <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-base leading-tight font-semibold">
          Expert Digital Marketing Services Tailored for Success. Experience
          Growth Through Innovation and Technology.
        </p>

        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <button className="px-7 py-2 bg-[#FF5100] hover:bg-orange-500 rounded-full text-white font-medium shadow-md hover:shadow-orange-400/30 transition-all duration-300 cursor-pointer">
            Let’s contact us
          </button>
          <button className="px-7 py-2 bg-white text-black hover:bg-gray-100 rounded-full font-medium transition-all duration-300 cursor-pointer">
            More About us
          </button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative md:w-[520px]"
        >
          <Image
            src="/Home-Hero.png"
            alt="Digital Globe"
            width={520}
            height={580}
            className="mx-auto drop-shadow-[0_0_50px_rgba(59,130,246,0.7)]"
            priority
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
