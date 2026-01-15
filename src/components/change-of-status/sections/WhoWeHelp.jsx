"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";
import Link from "next/link";

const WhoWeHelp = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-[#f9fafb] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]"
        >
          Who We Help
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg max-w-2xl mx-auto"
        >
          Every story is different, but the goal is always the same — to stay
          compliant and stress-free while keeping your future plans intact.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 space-y-8"
        >
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "H-1B visa holders who lost their jobs",
                desc: "Need time to find new employment",
              },
              {
                title: "Students (F-1/OPT)",
                desc: "Program or work authorization ending soon",
              },
              {
                title: "Dependents (H-4, L-2, etc.)",
                desc: "Want to move into a work-eligible visa",
              },
            ].map((card, index) => (
              <Link href="/subservices" key={index}>
                <motion.div
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Users className="text-[#601313] w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <h3 className="text-[#021024] font-semibold text-base sm:text-lg">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm">{card.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Professionals or freelancers",
                desc: "Exploring O-1, TN, or self-sponsorship options",
              },
              {
                title: "Anyone affected by policy changes",
                desc: "USCIS policies or personal circumstances",
              },
            ].map((card, index) => (
              <Link href="/subservices" key={index}>
                <motion.div
                  variants={cardVariants}
                  className="bg-white rounded-2xl shadow-sm p-5 sm:p-6 text-left border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <Users className="text-[#601313] w-5 h-5 sm:w-6 sm:h-6 mr-2" />
                    <h3 className="text-[#021024] font-semibold text-base sm:text-lg">
                      {card.title}
                    </h3>
                  </div>
                  <p className="text-gray-500 text-sm">{card.desc}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#021024] text-white border border-[#FF6B00] rounded-lg px-4 sm:px-6 py-4 sm:py-5 mt-10 sm:mt-14 max-w-4xl mx-auto"
        >
          <p className="text-xs sm:text-sm md:text-base leading-relaxed">
            If your current visa is expiring, it no longer fits your situation,
            or you just need time to decide your next steps — changing your
            status could be the solution that keeps you protected.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhoWeHelp;
