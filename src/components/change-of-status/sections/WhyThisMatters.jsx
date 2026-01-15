"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyThisMatters = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const zoomIn = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div variants={fadeUp} className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]">
            Why This Matters
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Your visa status affects more than just paperwork — it affects your
            life, career, and peace of mind.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 items-center">
          {/* Left: Cards */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <motion.div
              variants={slideLeft}
              className="bg-[#FFE5D0] border-l-4 border-[#FF6B00] rounded-md p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[#021024] text-base sm:text-lg font-semibold mb-2">
                The Reality
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                You may still have options. In most cases, you can maintain your
                lawful stay by changing your visa type — as long as you act in
                time and file your documents properly.
              </p>
            </motion.div>

            <motion.div
              variants={slideLeft}
              transition={{ delay: 0.2 }}
              className="bg-[#E9EDF1] border-l-4 border-gray-500 rounded-md p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-[#021024] text-base sm:text-lg font-semibold mb-2">
                The Impact
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                Making the right visa decision at the right time can prevent
                disruptions to your job, education, or family plans.
              </p>
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            variants={zoomIn}
            className="flex justify-center items-center"
          >
            <div className="w-full max-w-md h-48 sm:h-56 md:h-64 bg-[#C9D2DA] rounded-md flex justify-center items-center shadow-inner">
              <div className="w-3/4 h-28 sm:h-32 md:h-40 bg-[#E9EDF1] rounded-full"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyThisMatters;
