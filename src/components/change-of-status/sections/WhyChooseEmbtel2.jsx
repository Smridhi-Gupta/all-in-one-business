"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react";

const WhyChooseEmbtel2 = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1 + 0.2,
      },
    }),
  };

  return (
    <motion.section
      className="bg-[#021024] text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div variants={fadeUp}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Why Choose Embtel + BAIS
          </h2>
          <p className="text-gray-300 mt-3 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Changing your visa status involves multiple forms, timelines, and
            evidence — and one small mistake can lead to rejection or loss of
            status. That’s where our team steps in.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="mt-10 sm:mt-12 space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Top Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                title: "Personalized Guidance",
                desc: "We listen to your situation and help identify practical filing options.",
              },
              {
                title: "23+ Years of Experience",
                desc: "Our team and BAIS handle your paperwork carefully, ensuring every requirement is met.",
              },
              {
                title: "Timely Submissions",
                desc: "We keep track of all deadlines so you don't miss critical dates.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                className="bg-white text-gray-900 rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Users className="text-[#601313] w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                title: "Regular Updates",
                desc: "You'll always know the status of your case and what's coming next.",
              },
              {
                title: "Peace of Mind",
                desc: "You can focus on your next steps while we handle the details.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i + 3}
                variants={cardVariants}
                className="bg-white text-gray-900 rounded-2xl shadow-sm p-5 sm:p-6 flex flex-col items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Users className="text-[#601313] w-8 h-8 sm:w-10 sm:h-10 mb-3 sm:mb-4" />
                <h3 className="font-semibold text-base sm:text-lg mb-2">
                  {card.title}
                </h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.5 }}
          className="bg-[#3C1F17] border border-[#FF6B00] rounded-lg px-4 sm:px-6 py-4 mt-10 sm:mt-12 max-w-4xl mx-auto text-xs sm:text-sm md:text-base text-gray-100"
        >
          <p>
            With <span className="font-semibold">Embtel Solutions</span> and{" "}
            <span className="font-semibold">Bay Area Immigration Services</span>
            , you’re not facing the immigration maze alone — you’re supported by
            an experienced, reliable, and caring team.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseEmbtel2;
