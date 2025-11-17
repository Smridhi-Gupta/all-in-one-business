"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyThisMatters = () => {
  // Reusable fade-up animation
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
      className="bg-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-[#021024] mb-12"
        >
          Why This Matters
        </motion.h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left text-gray-700">
          {/* Left Column */}
          <div className="space-y-8">
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
                custom={0.2 + i * 0.1}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-[#FF6B00] w-6 h-6 mt-1 shrink-0" />
                <p>
                  <span className="font-semibold text-[#021024]">
                    {item.title}
                  </span>{" "}
                  — {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
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
                custom={0.5 + i * 0.1}
                className="flex items-start gap-3"
              >
                <CheckCircle className="text-[#FF6B00] w-6 h-6 mt-1 shrink-0" />
                <p>
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
