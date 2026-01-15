"use client";
import React from "react";
import { motion } from "framer-motion";

const TakeControlVisa = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.12,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      className="bg-[#f9fafb] text-[#021024] py-16 sm:py-20 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
        >
          Take Control of Your Visa Status Today
        </motion.h2>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={1}
          className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
        >
          If your situation has changed — don’t wait until it’s too late. Even a
          short delay can affect your ability to stay legally in the U.S.
        </motion.p>

        {/* Content Card */}
        <motion.div
          variants={fadeUp}
          custom={2}
          className="
            bg-white 
            rounded-2xl 
            shadow-[0_10px_40px_rgba(0,0,0,0.06)]
            p-6 sm:p-10 
            mb-10 
            max-w-3xl 
            mx-auto
          "
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

          <p className="font-semibold text-[#021024] mb-2">
            Your stay matters. Your options still exist.
          </p>

          <p className="text-gray-600">Let’s secure them together.</p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          variants={fadeUp}
          custom={3}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
        >
          <button
            className="
              bg-[#FF6B00] 
              hover:bg-[#e85d00] 
              text-white 
              font-medium 
              px-8 py-3 
              rounded-lg 
              shadow-md
              transition-all
            "
          >
            Book Your Free Consultation
          </button>

          <button
            className="
              border border-[#FF6B00] 
              text-[#021024] 
              hover:bg-[#FFF3ED] 
              px-8 py-3 
              rounded-lg 
              transition-all
            "
          >
            Call Now: (510) 770-8700
          </button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default TakeControlVisa;
