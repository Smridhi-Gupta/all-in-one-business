"use client";
import React from "react";
import { motion } from "framer-motion";

const TakeControlVisa = () => {
  // Smooth fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 60 }, // more distance for better perception
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2, // smoother transition
        delay: i * 0.25, // slower stagger
        ease: [0.25, 0.1, 0.25, 1], // smooth cubic-bezier easing
      },
    }),
  };

  return (
    <motion.section
      className="bg-[#f7f7f7] text-[#021024] py-20 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Take Control of Your Visa Status Today
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-lg text-gray-700 mb-10 leading-relaxed"
        >
          If your situation has changed — dont wait until its too late. Even a
          short delay can affect your ability to stay legally in the U.S.
        </motion.p>

        {/* White Content Card */}
        <motion.div
          variants={fadeUp}
          custom={0.4}
          className="bg-white rounded-2xl shadow-md p-10 mb-10 max-w-3xl mx-auto"
        >
          <p className="text-gray-700 leading-relaxed mb-5">
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

          <p className="font-semibold text-[#021024] mb-3">
            Your stay matters. Your options still exist.
          </p>

          <p className="text-gray-700">Let’s secure them together.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={0.6}
          className="flex flex-col md:flex-row justify-center items-center gap-6"
        >
          <button className="bg-[#FF6B00] hover:bg-[#e85d00] text-white font-medium px-8 py-3 rounded-md transition">
            Book Your Free Consultation
          </button>
          <button className="border border-[#FF6B00] text-[#021024] hover:bg-[#FFF3ED] px-8 py-3 rounded-md transition">
            Call Now: (510) 770-8700
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TakeControlVisa;
