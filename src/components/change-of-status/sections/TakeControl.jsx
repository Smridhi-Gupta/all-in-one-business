"use client";
import React from "react";
import { motion } from "framer-motion";

const TakeControl = () => {
  // Fade-up animation for smooth scroll entry
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      className="bg-[#021024] text-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers only when 30% visible
      variants={fadeUp}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Take Control of Your Visa Status Today
          </h2>
          <p className="text-gray-300 mt-3 text-lg max-w-3xl mx-auto">
            If your situation has changed — dont wait until its too late. Even
            a short delay can affect your ability to stay legally in the U.S.
          </p>
        </motion.div>

        {/* White Box */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="bg-white text-gray-800 rounded-2xl mt-10 p-8 md:p-10 shadow-lg"
        >
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Let our team at{" "}
            <span className="font-semibold text-[#021024]">
              Embtel Solutions
            </span>
            , together with{" "}
            <span className="font-semibold text-[#021024]">
              Bay Area Immigration Services
            </span>
            , help you organize, prepare, and submit your Change of Status
            documentation with care and confidence.
          </p>

          <p className="font-semibold text-[#021024] text-base md:text-lg mb-2">
            Your stay matters. Your options still exist.
          </p>
          <p className="text-gray-700">Let’s secure them together.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.4 }}
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

export default TakeControl;
