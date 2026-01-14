"use client";
import React from "react";
import { motion } from "framer-motion";
import { Globe, ShieldCheck, Users } from "lucide-react";

const IndustryExpertise = () => {
  // Reusable fade-up variant
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15, // stagger each element slightly
        ease: "easeOut",
      },
    }),
  };

  // Card content
  const cards = [
    {
      icon: <Globe className="text-[#FF6B00] w-10 h-10 mb-4" />,
      title: "Information Technology (IT) & Staffing Firms",
      desc: "We’ve supported hundreds of IT staffing companies with bulk H-1B processing, end-client documentation, and compliance audits. Our process ensures both employer and end-client letters meet USCIS standards, minimizing RFEs.",
    },
    {
      icon: <ShieldCheck className="text-[#FF6B00] w-10 h-10 mb-4" />,
      title: "Healthcare & Medical Institutions",
      desc: "Hospitals and medical centers rely on us to onboard nurses, therapists, technicians, and medical IT staff through efficient H-1B sponsorships, ensuring continuity of patient care and full regulatory compliance.",
    },
    {
      icon: <Users className="text-[#FF6B00] w-10 h-10 mb-4" />,
      title: "Hospitality & Service Industry",
      desc: "From international chefs to hotel managers and specialty role professionals, we streamline the H-1B hiring process for hospitality groups that rely on global expertise.",
    },
  ];

  return (
    <motion.section
      className="bg-[#F9FAFB] py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% visible
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-[#021024] mb-12"
        >
          Industry-Specific Expertise
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="bg-white p-8 rounded-2xl shadow-sm text-left hover:shadow-md transition-shadow duration-300"
            >
              {card.icon}
              <h3 className="font-bold text-lg text-[#021024] mb-2">
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
          className="bg-[#021024] text-white py-6 px-8 rounded-xl border border-[#FF6B00] max-w-4xl mx-auto text-sm md:text-base leading-relaxed"
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
