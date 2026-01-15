"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyThisMatters = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024] mb-8 sm:mb-12 text-center"
        >
          Why This Matters
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 text-left text-gray-700">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "23+ Years of Experience",
                text: "Decades of successful H-1B filings, RFE handling, and status management.",
              },
              {
                title: "Full Compliance Support",
                text: "LCA filing, prevailing wage verification, and USCIS-ready documentation.",
              },
              {
                title: "Cost-Effective, Scalable Service",
                text: "Designed for startups to enterprise-level companies managing multiple petitions.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={0.1 + i * 0.1}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:shadow-sm transition"
              >
                <CheckCircle className="text-[#FF6B00] w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-[#021024]">
                    {item.title}
                  </span>{" "}
                  — {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {[
              {
                title: "Industry-Specific Expertise",
                text: "Specialized in high-volume filings for IT staffing firms, healthcare systems, and hospitality businesses.",
              },
              {
                title: "Fast, Transparent Communication",
                text: "Dedicated case manager for each client and live case tracking.",
              },
              {
                title: "Strategic Partnership",
                text: "Backed by Bay Area Immigration Services, a trusted U.S.-based immigration law firm.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={0.4 + i * 0.1}
                className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl hover:shadow-sm transition"
              >
                <CheckCircle className="text-[#FF6B00] w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-[#021024]">
                    {item.title}
                  </span>{" "}
                  — {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyThisMatters;
