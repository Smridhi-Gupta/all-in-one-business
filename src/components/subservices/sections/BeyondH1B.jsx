"use client";
import React from "react";
import { motion } from "framer-motion";

const BeyondH1B = () => {
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

  const cards = [
    {
      title: "H-4 Dependent Visas",
      desc: "H-4 dependent visa processing for spouses and children of H-1B holders.",
    },
    {
      title: "H-4 EAD Applications",
      desc: "H-4 EAD applications, where eligible, allowing dependents to work in the U.S.",
    },
    {
      title: "Green Card Transition Support",
      desc: "H-1B to Green Card transition planning through PERM, I-140, and I-485 filings.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-[#021024]"
        >
          Beyond H-1B: Dependents & Green Card Transition
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-600 mt-3 text-lg"
        >
          We also support:
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 text-left"
            >
              <h3 className="font-bold text-lg text-[#021024] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <motion.div
          variants={fadeUp}
          custom={cards.length + 1}
          className="bg-[#FFE6DC] border border-[#FF6B00] text-gray-800 py-5 px-8 rounded-xl max-w-4xl mx-auto text-sm md:text-base leading-relaxed mt-12"
        >
          With{" "}
          <span className="font-semibold text-[#021024]">Embtel Solutions</span>{" "}
          and{" "}
          <span className="font-semibold text-[#021024]">
            Bay Area Immigration Services
          </span>
          , you’re not facing the immigration maze alone — you’re supported by
          an experienced, reliable, and caring team.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeyondH1B;
