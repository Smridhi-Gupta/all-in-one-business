"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const WhyEmbtel2 = () => {
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

  const points = [
    {
      title: "Dedicated Corporate Immigration Desk",
      desc: "Single point of contact for all filings and communication.",
    },
    {
      title: "Full Compliance Support",
      desc: "LCA filing, prevailing wage validation, and USCIS-ready documentation.",
    },
    {
      title: "Fast, Transparent Communication",
      desc: "We keep your HR team informed at every stage of the process.",
    },
    {
      title: "Legal Precision + Operational Efficiency",
      desc: "Powered by our partnership with Bay Area Immigration Services.",
    },
    {
      title: "Real-Time Case Tracking",
      desc: "Dedicated case manager and structured progress updates.",
    },
    {
      title: "Strategic Partnership",
      desc: "Blending legal expertise with strong operational execution.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024] mb-10"
        >
          Why Choose Embtel Solutions
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
          {points.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="
                bg-[#F9FAFB]
                border border-gray-100
                rounded-2xl
                p-5 sm:p-6
                flex gap-4
                hover:-translate-y-1 hover:shadow-lg
                transition-all duration-300
              "
            >
              <CheckCircle className="w-6 h-6 text-[#FF6B00] mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-[#021024] text-sm sm:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyEmbtel2;
