"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, BarChart3, Bookmark, Clock } from "lucide-react";

const ComplianceExcellence = () => {
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

  const features = [
    {
      icon: <FileText className="w-7 h-7 text-[#FF6B00]" />,
      title: "Public Access File (PAF) Maintenance",
    },
    {
      icon: <BarChart3 className="w-7 h-7 text-[#FF6B00]" />,
      title: "Wage Compliance & Work Location Documentation",
    },
    {
      icon: <Bookmark className="w-7 h-7 text-[#FF6B00]" />,
      title: "Accurate SOC Codes & Job Descriptions",
    },
    {
      icon: <Clock className="w-7 h-7 text-[#FF6B00]" />,
      title: "Consistent Status Tracking for Each Employee",
    },
  ];

  return (
    <motion.section
      className="bg-[#021024] text-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3"
        >
          Compliance & Documentation Excellence
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-300 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto"
        >
          H-1B compliance is non-negotiable — even small oversights can result
          in costly penalties, delays, or petition denials.
        </motion.p>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="
                bg-[#071c35]
                border border-white/5
                p-6
                rounded-2xl
                flex flex-col items-center text-center
                hover:-translate-y-1 hover:shadow-lg
                transition-all duration-300
              "
            >
              {/* Icon badge */}
              <div className="w-14 h-14 bg-[#FFF4EE] rounded-xl flex items-center justify-center mb-4">
                {feature.icon}
              </div>

              <h3 className="text-sm sm:text-base font-semibold leading-snug text-gray-100">
                {feature.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          variants={fadeUp}
          custom={features.length + 1}
          className="
            bg-[#0c213b]
            border border-[#FF6B00]
            px-5 sm:px-8 py-5 sm:py-6
            rounded-xl
            max-w-4xl mx-auto
            text-sm sm:text-base
            text-gray-200
            leading-relaxed
          "
        >
          With{" "}
          <span className="font-semibold text-white">Embtel Solutions</span> and{" "}
          <span className="font-semibold text-white">
            Bay Area Immigration Services
          </span>
          , you’re not navigating the immigration maze alone — you’re supported
          by an experienced, reliable, and detail-oriented team.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ComplianceExcellence;
