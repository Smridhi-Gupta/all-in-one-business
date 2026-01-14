"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, BarChart3, Bookmark, Clock } from "lucide-react";

const ComplianceExcellence = () => {
  // Fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15, // stagger effect
        ease: "easeOut",
      },
    }),
  };

  const features = [
    {
      icon: <FileText className="w-10 h-10 text-[#FF6B00] mb-4" />,
      title: "Public Access File (PAF) maintenance",
    },
    {
      icon: <BarChart3 className="w-10 h-10 text-[#FF6B00] mb-4" />,
      title: "Wage compliance and work location documentation",
    },
    {
      icon: <Bookmark className="w-10 h-10 text-[#FF6B00] mb-4" />,
      title: "Accurate SOC codes and job descriptions",
    },
    {
      icon: <Clock className="w-10 h-10 text-[#FF6B00] mb-4" />,
      title: "Consistent status tracking for each employee",
    },
  ];

  return (
    <motion.section
      className="bg-[#021024] text-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Compliance & Documentation Excellence
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-300 text-lg mb-12"
        >
          H-1B compliance is non-negotiable — every small oversight can lead to
          heavy penalties or denials.
        </motion.p>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-[#021634] shadow-inner hover:shadow-md transition-all duration-300"
            >
              {feature.icon}
              <h3 className="font-semibold text-base leading-snug">
                {feature.title.split(" (")[0]}{" "}
                {feature.title.includes("(") && (
                  <>
                    <br />({feature.title.split("(")[1]}
                  </>
                )}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <motion.div
          variants={fadeUp}
          custom={features.length + 1}
          className="bg-[#3A1F1A] border border-[#FF6B00] text-gray-200 py-5 px-8 rounded-xl max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
        >
          With{" "}
          <span className="font-semibold text-white">Embtel Solutions</span> and{" "}
          <span className="font-semibold text-white">
            Bay Area Immigration Services
          </span>
          , you’re not facing the immigration maze alone — you’re supported by
          an experienced, reliable, and caring team.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ComplianceExcellence;
