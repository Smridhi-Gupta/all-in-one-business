"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Users } from "lucide-react";

const IndustryExpertise = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
      },
    }),
  };

  const cards = [
    {
      icon: <Globe className="text-[#FF6B00] w-9 h-9" />,
      title: "Information Technology (IT) & Staffing Firms",
      desc: "We’ve supported hundreds of IT staffing companies with bulk H-1B processing, end-client documentation, and compliance audits. Our process ensures employer and end-client letters meet USCIS standards, minimizing RFEs.",
    },
    {
      icon: <ShieldCheck className="text-[#FF6B00] w-9 h-9" />,
      title: "Healthcare & Medical Institutions",
      desc: "Hospitals and medical centers rely on us to onboard nurses, therapists, technicians, and medical IT staff through efficient H-1B sponsorships, ensuring continuity of care and regulatory compliance.",
    },
    {
      icon: <Users className="text-[#FF6B00] w-9 h-9" />,
      title: "Hospitality & Service Industry",
      desc: "From international chefs to hotel managers and specialty professionals, we streamline the H-1B hiring process for hospitality groups that rely on global expertise.",
    },
  ];

  return (
    <motion.section
      className="bg-[#F9FAFB] py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
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
          Industry-Specific Expertise
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="
                bg-white 
                p-6 sm:p-8 
                rounded-2xl 
                border border-gray-100
                shadow-sm 
                hover:shadow-md hover:-translate-y-1
                transition-all duration-300 
                text-left
              "
            >
              <div className="w-14 h-14 bg-[#FFF4EE] rounded-xl flex items-center justify-center mb-4">
                {card.icon}
              </div>

              <h3 className="font-semibold text-base sm:text-lg text-[#021024] mb-2">
                {card.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Callout */}
        <motion.div
          variants={fadeUp}
          custom={cards.length + 1}
          className="
            bg-[#021024] 
            text-white 
            px-5 sm:px-8 py-5 sm:py-6 
            rounded-xl 
            border border-[#FF6B00]
            max-w-4xl mx-auto 
            text-sm sm:text-base 
            leading-relaxed
          "
        >
          If your current visa is expiring, it no longer fits your situation, or
          you just need time to decide your next steps — changing your status
          could be the solution that keeps you protected.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IndustryExpertise;
