"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Variants for smooth fade-up entry
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="bg-[#021024] text-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="inline-block bg-[#0D2039] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4"
        >
          Visa Status Protection
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={fadeUp}
          custom={0.1}
          className="text-3xl md:text-5xl font-bold leading-snug"
        >
          H-1B Visa Services for Employers{" "}
          <span className="text-[#FF6B00]">| Embtel Solutions</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="mt-3 text-sm md:text-base text-gray-200"
        >
          in Partnership with Bay Area Immigration Services
        </motion.p>

        {/* Tagline */}
        <motion.h3
          variants={fadeUp}
          custom={0.3}
          className="mt-6 text-xl md:text-2xl font-medium text-gray-100"
        >
          Hire and Retain Global Talent with Confidence
        </motion.h3>

        {/* White Info Box (comes from bottom) */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          className="bg-white text-gray-800 rounded-2xl mt-10 p-8 md:p-10 shadow-lg"
        >
          <p className="text-base md:text-lg leading-relaxed mb-6">
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

          {/* Inner Orange Box (slightly delayed) */}
          <motion.div
            variants={fadeUp}
            custom={0.6}
            className="bg-[#FFE5D0] border border-[#FF6B00] rounded-lg p-4 md:p-6 text-sm md:text-base leading-relaxed text-gray-800"
          >
            With over 23 years of combined immigration experience, our team
            ensures every case is compliant, timely, and strategically planned —
            so you can focus on running your business while we manage every
            immigration detail.
          </motion.div>
        </motion.div>

        {/* Buttons (appear last) */}
        <motion.div
          variants={fadeUp}
          custom={0.8}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mt-10"
        >
          <button className="bg-[#FF6B00] hover:bg-[#e35f00] text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            Book Your Free Consultation
          </button>
          <button className="border border-[#FF6B00] text-[#021024] bg-white hover:bg-[#FFF4EE] font-medium px-6 py-3 rounded-md shadow-md transition">
            Call Now: (510) 770-8700
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
