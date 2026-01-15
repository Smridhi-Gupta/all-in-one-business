"use client";
import React from "react";
import { motion } from "framer-motion";

const H1BServices = () => {
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

  const rows = [
    {
      service: "New H-1B Filing",
      when: "You’re sponsoring a foreign employee for the first time.",
      how: "Eligibility analysis, role evaluation, LCA filing, I-129 preparation, USCIS submission, consular guidance.",
    },
    {
      service: "H-1B Transfer / Change of Employer",
      when: "Hiring an existing H-1B worker from another company.",
      how: "Portability support, fast filing to reduce downtime, seamless compliance transition.",
    },
    {
      service: "H-1B Amendment",
      when: "Job title, salary, or work location changes.",
      how: "Assess amendment need, prepare filing, maintain USCIS compliance.",
    },
    {
      service: "H-1B Extension",
      when: "Employee visa nearing expiration.",
      how: "Deadline tracking, extension filing, lawful status continuity.",
    },
    {
      service: "RFE & Denial Response",
      when: "USCIS requests more evidence or issues a denial.",
      how: "Strong response drafting, documentation strategy, legal review via BAIS.",
    },
    {
      service: "Cap-Exempt H-1B",
      when: "Universities, research institutions, nonprofits.",
      how: "Cap-exempt eligibility review and filing management.",
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
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024] mb-8 sm:mb-12"
        >
          Comprehensive H-1B Services for Your Business
        </motion.h2>

        {/* Wrapper */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          {/* ===== Desktop Table ===== */}
          <table className="hidden md:table w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#FF6B00] text-white text-sm">
                <th className="py-4 px-6 font-semibold">Service Type</th>
                <th className="py-4 px-6 font-semibold">When You Need It</th>
                <th className="py-4 px-6 font-semibold">How We Help</th>
              </tr>
            </thead>

            <tbody>
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="py-4 px-6 font-semibold text-[#FF6B00]">
                    {row.service}
                  </td>
                  <td className="py-4 px-6 text-gray-700">{row.when}</td>
                  <td className="py-4 px-6 text-gray-700">{row.how}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* ===== Mobile Cards ===== */}
          <div className="md:hidden divide-y">
            {rows.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 text-left bg-white hover:bg-gray-50 transition"
              >
                <h3 className="text-[#FF6B00] font-semibold text-lg mb-2">
                  {row.service}
                </h3>

                <p className="text-sm text-gray-700 mb-2 leading-relaxed">
                  <span className="font-medium text-[#021024]">When: </span>
                  {row.when}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed">
                  <span className="font-medium text-[#021024]">How: </span>
                  {row.how}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default H1BServices;
