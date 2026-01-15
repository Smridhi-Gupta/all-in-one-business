"use client";
import React from "react";
import { motion } from "framer-motion";

const WhyEmbtel = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.08,
        ease: "easeOut",
      },
    }),
  };

  const challenges = [
    {
      challenge: "Frequent USCIS policy changes",
      solution:
        "Continuous monitoring of new regulations and proactive guidance to keep your filings compliant.",
    },
    {
      challenge: "Tight hiring deadlines",
      solution:
        "Fast-tracked H-1B transfer filings to onboard candidates quickly without status interruption.",
    },
    {
      challenge: "Incomplete or incorrect documentation",
      solution:
        "Dedicated documentation team ensures USCIS-ready submissions, reducing RFE and denial risks.",
    },
    {
      challenge: "Limited in-house immigration expertise",
      solution:
        "End-to-end management by our experienced specialists — you don’t need an internal legal team.",
    },
    {
      challenge: "High rejection rate from past consultants",
      solution:
        "We review prior petitions, identify weaknesses, and rebuild strong, approvable cases.",
    },
    {
      challenge: "Communication gaps",
      solution:
        "Assigned case managers provide real-time updates and status tracking dashboards.",
    },
    {
      challenge: "Cost unpredictability",
      solution:
        "Transparent, upfront pricing and clear timelines — no hidden legal or filing surprises.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]"
        >
          Why Choose Embtel + BAIS
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed"
        >
          Changing your visa status involves multiple forms, timelines, and
          evidence — and one small mistake can lead to rejection or loss of
          status. That’s where our team steps in.
        </motion.p>

        {/* Wrapper */}
        <div className="mt-10 sm:mt-12 border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* ===== Desktop Table ===== */}
          <table className="hidden md:table w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#D92525] text-white text-sm">
                <th className="py-4 px-6 font-semibold w-1/3">
                  Employer Challenge
                </th>
                <th className="py-4 px-6 font-semibold">Our Solution</th>
              </tr>
            </thead>

            <tbody>
              {challenges.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-6 font-semibold text-[#D92525]">
                    {row.challenge}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{row.solution}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* ===== Mobile Cards ===== */}
          <div className="md:hidden divide-y">
            {challenges.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <h3 className="text-[#D92525] font-semibold text-lg mb-2">
                  {row.challenge}
                </h3>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {row.solution}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default WhyEmbtel;
