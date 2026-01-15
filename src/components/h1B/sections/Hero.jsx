"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="bg-[#021024] text-white 
      py-24 sm:py-28 md:py-32 lg:py-40 
      px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-block bg-[#0D2039] text-white text-xs sm:text-sm font-semibold px-4 py-1 rounded-full mb-4"
        >
          Visa Status Protection
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug"
        >
          H-1B Visa Services for Employers{" "}
          <span className="text-[#FF6B00]">| Embtel Solutions</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="mt-2 text-xs sm:text-sm md:text-base text-gray-200"
        >
          in Partnership with Bay Area Immigration Services
        </motion.p>

        {/* Tagline */}
        <motion.h3
          variants={fadeUp}
          custom={0.3}
          className="mt-5 text-lg sm:text-xl md:text-2xl font-medium text-gray-100"
        >
          Hire and Retain Global Talent with Confidence
        </motion.h3>

        {/* White Info Box */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          className="bg-white text-gray-800 rounded-2xl 
          mt-8 sm:mt-10 
          p-5 sm:p-6 md:p-8 shadow-lg"
        >
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-5">
            Finding the right talent shouldn’t be limited by borders. At{" "}
            <span className="font-semibold text-[#021024]">
              Embtel Solutions
            </span>
            , in partnership with{" "}
            <span className="font-semibold text-[#021024]">
              Bay Area Immigration Services
            </span>
            , we help U.S. businesses in IT, Healthcare, and Hospitality bring
            skilled international professionals onboard through seamless H-1B
            visa processing, transfers, amendments, and extensions.
          </p>

          {/* Inner Orange Box */}
          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="bg-[#FFE5D0] border border-[#FF6B00] 
            rounded-lg p-4 sm:p-5 text-sm sm:text-base leading-relaxed text-gray-800"
          >
            With over 23 years of combined immigration experience, our team
            ensures every case is compliant, timely, and strategically planned —
            so you can focus on running your business while we manage every
            immigration detail.
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.8}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-8 sm:mt-10"
        >
          <button className="w-full sm:w-auto bg-[#FF6B00] hover:bg-[#e35f00] text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            Book Your Free Consultation
          </button>

          <button className="w-full sm:w-auto border border-[#FF6B00] text-[#021024] bg-white hover:bg-[#FFF4EE] font-medium px-6 py-3 rounded-md shadow-md transition">
            Call Now: (510) 770-8700
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
