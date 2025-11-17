"use client";
import React from "react";
import { motion } from "framer-motion";
import { Users } from "lucide-react"; // or any icon you prefer

const WhyChooseEmbtel2 = () => {
  // Fade-up variant (for text + sections)
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Card animation (staggered)
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: i * 0.1 + 0.3,
      },
    }),
  };

  return (
    <motion.section
      className="bg-[#021024] text-white py-16 px-6 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // triggers once when 30% is visible
      variants={fadeUp}
    >
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <motion.div variants={fadeUp}>
          <h2 className="text-3xl md:text-4xl font-bold">
            Why Choose Embtel + BAIS
          </h2>
          <p className="text-gray-300 mt-3 text-lg max-w-3xl mx-auto">
            Changing your visa status involves multiple forms, timelines, and
            evidence — and one small mistake can lead to rejection or loss of
            status. Thats where our team steps in.
          </p>
        </motion.div>

        {/* Card Layout */}
        <motion.div
          className="mt-12 flex flex-col items-center space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {/* Top Row (3 Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center w-full">
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
                className="bg-white text-gray-900 rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <Users className="text-[#601313] w-10 h-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Bottom Row (2 Cards Centered) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center mt-4">
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
                className="bg-white text-gray-900 rounded-2xl shadow-md p-6 w-full max-w-sm flex flex-col items-center text-center hover:shadow-lg transition-all duration-300"
              >
                <Users className="text-[#601313] w-10 h-10 mb-4" />
                <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Note */}
        <motion.div
          variants={fadeUp}
          transition={{ delay: 0.6 }}
          className="bg-[#3C1F17] border border-[#FF6B00] rounded-lg px-6 py-4 mt-12 max-w-4xl mx-auto text-sm md:text-base text-gray-100"
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
