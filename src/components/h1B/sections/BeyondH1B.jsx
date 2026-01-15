"use client";
import React from "react";
import { motion } from "framer-motion";

const BeyondH1B = () => {
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

  const cards = [
    {
      title: "H-4 Dependent Visas",
      desc: "Complete processing support for spouses and children of H-1B visa holders.",
    },
    {
      title: "H-4 EAD Applications",
      desc: "Guidance for eligible dependents to obtain work authorization in the U.S.",
    },
    {
      title: "Green Card Transition Support",
      desc: "Strategic planning for H-1B to Green Card transition via PERM, I-140, and I-485.",
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
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]"
        >
          Beyond H-1B: Dependents & Green Card Transition
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg"
        >
          We also support:
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="
                bg-white
                border border-gray-100
                p-6 sm:p-8
                rounded-2xl
                text-left
                shadow-sm
                hover:-translate-y-1 hover:shadow-lg
                transition-all duration-300
              "
            >
              <h3 className="font-bold text-base sm:text-lg text-[#021024] mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <motion.div
          variants={fadeUp}
          custom={cards.length + 1}
          className="
            bg-[#FFF4EE]
            border border-[#FF6B00]
            px-5 sm:px-8 py-5 sm:py-6
            rounded-xl
            max-w-4xl mx-auto
            text-sm sm:text-base
            text-gray-800
            leading-relaxed
            mt-10 sm:mt-12
          "
        >
          With{" "}
          <span className="font-semibold text-[#021024]">Embtel Solutions</span>{" "}
          and{" "}
          <span className="font-semibold text-[#021024]">
            Bay Area Immigration Services
          </span>
          , you’re not navigating the immigration maze alone — you’re supported
          by an experienced, reliable, and caring team.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default BeyondH1B;
