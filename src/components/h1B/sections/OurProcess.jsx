"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OurProcess = () => {
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

  const steps = [
    {
      title: "Initial Consultation & Case Evaluation",
      desc: "We analyze your hiring goals, company structure, and job requirements to confirm H-1B eligibility.",
    },
    {
      title: "Document & Data Collection",
      desc: "Our team assists HR departments and employees in preparing all required documentation — education proofs, job offers, and work credentials.",
    },
    {
      title: "Labor Condition Application (LCA)",
      desc: "We file the LCA with the Department of Labor to ensure compliance with prevailing wage and working conditions.",
    },
    {
      title: "Petition Drafting & Review",
      desc: "Every I-129 petition is drafted by experienced professionals and verified by legal experts at Bay Area Immigration Services.",
    },
    {
      title: "USCIS Filing & Tracking",
      desc: "Petitions are submitted accurately and tracked at every stage. Clients receive transparent updates on progress.",
    },
    {
      title: "RFE Handling & Resolution",
      desc: "If USCIS requests additional information, our team drafts strategic responses to ensure approvals.",
    },
    {
      title: "Approval & Post-Filing Support",
      desc: "Once approved, we guide your employee through stamping, change of status, and compliance maintenance.",
    },
  ];

  return (
    <motion.section
      className="bg-white py-12 sm:py-16 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#021024]"
        >
          How Our Process Works
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg max-w-3xl mx-auto"
        >
          We make the H-1B journey efficient and error-free — both for employers
          and employees.
        </motion.p>

        {/* Steps */}
        <div className="mt-10 sm:mt-12 space-y-5 sm:space-y-6 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="
                flex items-start gap-3
                bg-gray-50
                rounded-xl
                p-4 sm:p-5
                border border-gray-100
                hover:shadow-md hover:-translate-y-[2px]
                transition-all duration-300
              "
            >
              <CheckCircle className="text-[#FF6B00] w-5 h-5 sm:w-6 sm:h-6 mt-1 shrink-0" />

              <div>
                <h3 className="font-semibold text-[#021024] text-base sm:text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default OurProcess;
