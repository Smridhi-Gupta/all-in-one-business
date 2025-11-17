"use client";
import React from "react";
import { motion } from "framer-motion";

const H1BServices = () => {
  // Smooth fade-up animation variant
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        delay: i * 0.25,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const rows = [
    {
      service: "New H-1B Filing",
      when: "You’re sponsoring a foreign employee for the first time.",
      how: "Eligibility analysis, position evaluation, LCA filing, I-129 petition preparation, USCIS submission, consular guidance.",
    },
    {
      service: "H-1B Transfer / Change of Employer",
      when: "When you hire an existing H-1B worker from another company.",
      how: "Portability support, quick petition filing to minimize downtime, compliance documentation for seamless transition.",
    },
    {
      service: "H-1B Amendment",
      when: "Job title, salary, or work location changes.",
      how: "Assess whether amendment is required, prepare and file petition, ensure continuous compliance with USCIS regulations.",
    },
    {
      service: "H-1B Extension",
      when: "Employee's visa is nearing expiration.",
      how: "Manage deadlines, prepare extension filings, maintain lawful status, and avoid employment gaps.",
    },
    {
      service: "RFE & Denial Response",
      when: "USCIS requests additional evidence or issues a denial.",
      how: "Expert drafting of responses, document gathering, and legal representation through Bay Area Immigration Services.",
    },
    {
      service: "Cap-Exempt H-1B",
      when: "Universities, research institutions, and nonprofit entities.",
      how: "Identify and manage filings exempt from annual cap.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16 px-4 sm:px-6 md:px-10 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024] mb-10 sm:mb-12"
        >
          Comprehensive H-1B Services for Your Business
        </motion.h2>

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto border border-gray-200 rounded-lg shadow-sm">
          {/* Desktop Table */}
          <table className="hidden md:table min-w-full border-collapse text-left">
            <thead>
              <tr className="bg-[#FF6B00] text-white text-sm md:text-base">
                <th className="py-4 px-6 font-semibold rounded-tl-lg">
                  Service Type
                </th>
                <th className="py-4 px-6 font-semibold">When You Need It</th>
                <th className="py-4 px-6 font-semibold rounded-tr-lg">
                  How We Help
                </th>
              </tr>
            </thead>

            <tbody className="text-gray-800">
              {rows.map((row, i) => (
                <motion.tr
                  key={i}
                  variants={fadeUp}
                  custom={i + 1}
                  className={i % 2 === 0 ? "bg-white" : "bg-[#F9FAFB]"}
                >
                  <td className="py-4 px-6 text-[#FF6B00] font-medium whitespace-normal">
                    {row.service}
                  </td>
                  <td className="py-4 px-6 text-sm md:text-base whitespace-normal">
                    {row.when}
                  </td>
                  <td className="py-4 px-6 text-sm md:text-base whitespace-normal">
                    {row.how}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>

          {/* Mobile Cards */}
          <div className="md:hidden divide-y divide-gray-200">
            {rows.map((row, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i + 1}
                className="p-5 text-left bg-white hover:bg-gray-50 transition-all"
              >
                <h3 className="text-[#FF6B00] font-semibold text-lg mb-2">
                  {row.service}
                </h3>
                <p className="text-gray-700 text-sm mb-2">
                  <span className="font-medium text-[#021024]">When: </span>
                  {row.when}
                </p>
                <p className="text-gray-700 text-sm">
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
