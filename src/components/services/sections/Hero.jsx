"use client";
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  // Page transition: slide in from bottom
  const pageTransition = {
    initial: { opacity: 0, y: 80 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -60,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      className="bg-[#021024] text-white py-16 px-6 overflow-hidden"
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Top Badge */}
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-block bg-[#0c1424] text-gray-200 text-sm px-4 py-1 rounded-full border border-gray-600"
        >
          Visa Status Protection
        </motion.p>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-3xl md:text-5xl font-bold mt-4"
        >
          <span className="text-[#FF6B00]">Change of Status</span> Support
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-gray-300 mt-2 text-lg"
        >
          When immigration rules change, your options shouldn’t disappear.
        </motion.p>

        {/* Info Box */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-white text-gray-800 mt-10 p-6 md:p-10 rounded-2xl shadow-lg"
        >
          <p className="text-base leading-relaxed">
            If you’re in the U.S. on a visa — whether it’s a student, work, or
            dependent visa — and now facing uncertainty due to layoffs, policy
            updates, or personal circumstances, you’re not alone. Many people
            are struggling to figure out how to stay legally without
            interrupting their plans or risking their future.
          </p>

          {/* Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="bg-[#FFE5D0] border border-[#FF6B00] rounded-xl p-4 mt-6 text-left"
          >
            <p className="text-gray-800">
              <strong className="text-[#FF6B00]">The good news?</strong> You may
              still have options. In most cases, you can maintain your lawful
              stay by changing your visa type — as long as you act in time and
              file your documents properly.
            </p>
          </motion.div>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <button className="bg-[#FF6B00] hover:bg-[#e35f00] text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            Book Your Free Consultation
          </button>
          <button className="border border-[#FF6B00] text-[#FF6B00] hover:bg-[#FF6B00] hover:text-white font-medium px-6 py-3 rounded-md shadow-md transition">
            Call Now: (510) 770-8700
          </button>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="bg-[#3C1F17] border border-[#FF6B00] rounded-lg text-sm text-gray-200 px-6 py-4 mt-10 max-w-3xl mx-auto"
        >
          <strong>Note:</strong> Embtel Solutions and BAIS do not provide legal
          advice. We assist you with the documentation and filing process to
          help you maintain lawful status and move forward confidently.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
