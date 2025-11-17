"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyChooseEmbtel = () => {
  // Fade-up animation variant
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

  const rows = [
    [
      "H-1B (lost job or between employers)",
      "B-2 (Visitor), F-1 (Student), O-1 (Talent-based)",
      "Gives extra time to plan next steps or start new studies",
    ],
    [
      "F-1 / OPT (ending soon)",
      "H-1B, O-1, or another work visa",
      "Allows continued stay or transition to a new employment visa",
    ],
    [
      "H-4 / L-2 (dependent)",
      "H-1B or O-1",
      "Gain independent work rights or start your own career path",
    ],
    [
      "L-1 / E visa holders",
      "H-1B, O-1, or permanent residency path",
      "Continue living in the U.S. if your company or role changes",
    ],
    [
      "Other visa types (B, J, etc.)",
      "F-1, B-2, or employment visas",
      "Stay longer, study, or prepare for your next opportunity",
    ],
  ];

  return (
    <motion.section
      className="bg-white py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.div variants={fadeUp} custom={0} className="mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]">
            Why Choose Embtel + BAIS
          </h2>
          <p className="text-gray-600 mt-3 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Changing your visa status involves multiple forms, timelines, and
            evidence — and one small mistake can lead to rejection or loss of
            status. That’s where our team steps in.
          </p>
        </motion.div>

        {/* Responsive Table / Cards */}
        <div className="mt-12 overflow-hidden border border-gray-200 rounded-lg shadow-sm">
          {/* Desktop Table */}
          <table className="hidden md:table min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#FF6B00] text-white text-sm md:text-base">
                <th className="py-3 px-4 font-semibold rounded-tl-lg w-1/3">
                  If You Currently Hold
                </th>
                <th className="py-3 px-4 font-semibold">You Might Change To</th>
                <th className="py-3 px-4 font-semibold rounded-tr-lg">
                  Why People Choose This Option
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-800">
              {rows.map(([current, next, reason], i) => (
                <motion.tr
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                >
                  <td className="py-4 px-6 border border-gray-200 text-sm md:text-base">
                    {current}
                  </td>
                  <td className="py-4 px-6 border border-gray-200 text-sm md:text-base">
                    {next}
                  </td>
                  <td className="py-4 px-6 border border-gray-200 text-sm md:text-base">
                    {reason}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Mobile View (Stacked Cards) */}
          <div className="md:hidden divide-y divide-gray-200">
            {rows.map(([current, next, reason], i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 text-left bg-white hover:bg-gray-50 transition-all"
              >
                <h3 className="text-[#FF6B00] font-semibold text-lg mb-2">
                  {current}
                </h3>
                <p className="text-gray-700 text-sm mb-1">
                  <span className="font-semibold text-[#021024]">
                    You Might Change To:
                  </span>{" "}
                  {next}
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-semibold text-[#021024]">
                    Why People Choose This Option:
                  </span>{" "}
                  {reason}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          custom={rows.length + 1}
          className="max-w-4xl mx-auto mt-10 border border-[#FF6B00] rounded-md px-5 sm:px-6 py-4 text-sm sm:text-base text-gray-700 leading-relaxed"
        >
          <p>
            With{" "}
            <span className="font-semibold text-[#021024]">
              Embtel Solutions
            </span>{" "}
            and{" "}
            <span className="font-semibold text-[#021024]">
              Bay Area Immigration Services
            </span>
            , you’re not facing the immigration maze alone — you’re supported by
            an experienced, reliable, and caring team.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseEmbtel;
