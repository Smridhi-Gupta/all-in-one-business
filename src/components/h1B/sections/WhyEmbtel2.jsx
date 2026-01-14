"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyEmbtel2 = () => {
  // Smooth fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.1,
        delay: i * 0.25,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  // Points data for left/right columns
  const leftPoints = [
    {
      title: "Dedicated Corporate Immigration Desk",
      desc: "— one point of contact for all your filings.",
    },
    {
      title: "Full Compliance Support",
      desc: "— LCA filing, prevailing wage verification, and USCIS-ready documentation.",
    },
    {
      title: "Fast, Transparent Communication",
      desc: "— we keep your HR team informed at every step.",
    },
  ];

  const rightPoints = [
    {
      title: "Legal Precision + Operational Efficiency",
      desc: "through partnership with Bay Area Immigration Services.",
    },
    {
      title: "Fast, Transparent Communication",
      desc: "— Dedicated case manager for each client and live case tracking.",
    },
    {
      title: "Strategic Partnership",
      desc: "— combining legal expertise with operational excellence.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024] mb-10 sm:mb-12"
        >
          Why Choose Embtel Solutions
        </motion.h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 text-left text-gray-700">
          {/* Left Column */}
          <div className="space-y-6 sm:space-y-8">
            {leftPoints.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="flex items-start space-x-3 bg-[#F9FAFB] rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] mt-1 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-[#021024]">
                    {item.title}
                  </span>{" "}
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-6 sm:space-y-8">
            {rightPoints.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 4}
                className="flex items-start space-x-3 bg-[#F9FAFB] rounded-lg p-4 sm:p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF6B00] mt-1 shrink-0" />
                <p className="text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-[#021024]">
                    {item.title}
                  </span>{" "}
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyEmbtel2;
