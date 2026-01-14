"use client";
import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const OurProcess = () => {
  // Reusable fade-up animation for each step
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: i * 0.15, // each step appears one by one
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
      className="bg-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers when 30% of section is visible
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold text-[#021024]"
        >
          How Our Process Works
        </motion.h2>

        <motion.p
          variants={fadeUp}
          custom={0.2}
          className="text-gray-600 mt-3 text-lg max-w-3xl mx-auto"
        >
          We make the H-1B journey efficient and error-free — both for employers
          and employees.
        </motion.p>

        {/* Process Steps */}
        <div className="mt-12 text-left space-y-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i + 1}
              className="flex items-start gap-3 bg-[#F9FAFB] rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <CheckCircle className="text-[#FF6B00] w-6 h-6 mt-1 shrink-0" />
              <div>
                <h3 className="font-semibold text-[#021024] text-lg">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base mt-1">
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
