"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

import {
  FaLaptopCode,
  FaPassport,
  FaCalculator,
  FaFileAlt,
  FaGavel,
  FaUsers,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section
      className="
        relative w-full min-h-screen pt-[150px] pb-12
        flex flex-col items-center text-white
        bg-[#031225] overflow-hidden
        bg-[url('/Home-Hero-bg.png')] bg-cover bg-no-repeat
      "
    >
      {/* FLOATING STATS */}
      <div className="absolute top-[37%] left-[16%] bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-white">90%</h3>
        <p className="text-sm text-gray-300">Technology Efficiency</p>
      </div>

      <div className="absolute top-[37%] right-[16%] bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-center">
        <h3 className="text-xl font-semibold text-white">250+</h3>
        <p className="text-sm text-gray-300">Our Agency Partners</p>
      </div>

      {/* HERO CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center text-center"
      >
        <span className="inline-flex items-center bg-white/30 text-sm text-gray-200 px-3 rounded-full mb-3">
          <span className="w-2 h-2 bg-[#FF5100] rounded-full mr-2"></span>
          Digital Solutions
        </span>

        <h1 className="text-5xl md:text-6xl font-bold mb-3">
          Embtel Digital Solutions
        </h1>

        <p className="text-gray-300 max-w-2xl mb-8 text-sm md:text-base font-semibold">
          Expert Digital Marketing Services Tailored for Success. Experience
          Growth Through Innovation and Technology.
        </p>

        {/* CTA BUTTONS */}
        <div className="flex flex-wrap gap-4 justify-center mb-20">
          <Link
            href="/contact"
            className="px-7 py-2 bg-[#FF5100] hover:bg-orange-500 rounded-full
              text-white font-medium shadow-md hover:shadow-orange-400/30 transition"
          >
            Let’s Contact Us
          </Link>

          <Link
            href="/about"
            className="px-7 py-2 bg-white text-black hover:bg-gray-100
              rounded-full font-medium transition"
          >
            More About Us
          </Link>
        </div>

        {/* PLATFORM / ORBIT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative md:w-[750px]"
        >
          <section className="business-section">
            <div className="platform">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>

              {/* ITEMS */}
              <div className="item item-1">
                <div className="icon"><FaLaptopCode /></div>
                <span>IT Services</span>
              </div>

              <div className="item item-2">
                <div className="icon"><FaPassport /></div>
                <span>Immigration</span>
              </div>

              <div className="item item-3">
                <div className="icon"><FaCalculator /></div>
                <span>Accounting</span>
              </div>

              <div className="item item-4">
                <div className="icon"><FaFileAlt /></div>
                <span>Document Evaluation</span>
              </div>

              <div className="item item-5">
                <div className="icon"><FaGavel /></div>
                <span>Judiciary</span>
              </div>

              <div className="item item-6">
                <div className="icon"><FaUsers /></div>
                <span>Staffing</span>
              </div>

              <div className="item item-7">
                <div className="icon"><FaChalkboardTeacher /></div>
                <span>Corporate Training</span>
              </div>

            </div>
          </section>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
