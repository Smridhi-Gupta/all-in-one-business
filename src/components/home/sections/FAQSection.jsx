"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const categories = [
    "General Questions",
    "Pricing & Payments",
    "Working Process",
    "Support & Communication",
  ];

  const faqs = [
    {
      question: "How to Change my Photo from Admin Dashboard?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      question: "How to Change my Password easily?",
      answer:
        "You can easily change your password by going to Settings > Account > Change Password. Follow the steps and confirm via your registered email.",
    },
    {
      question: "How to Change my Subscription Plan using PayPal?",
      answer:
        "To change your plan, navigate to Billing > Subscription. Choose your new plan and select PayPal at checkout. Your new plan will activate instantly after confirmation.",
    },
    {
      question: "How to Change my Photo from Admin Dashboard?",
      answer:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      question: "How to Change my Password easily?",
      answer:
        "You can easily change your password by going to Settings > Account > Change Password. Follow the steps and confirm via your registered email.",
    },
    {
      question: "How to Change my Subscription Plan using PayPal?",
      answer:
        "To change your plan, navigate to Billing > Subscription. Choose your new plan and select PayPal at checkout. Your new plan will activate instantly after confirmation.",
    },
  ];

  const [activeCategory, setActiveCategory] = useState("General Questions");
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full min-h-[90vh] bg-[#031225] text-white py-20 px-6 md:px-12 overflow-hidden">
      {/* ===== Left-Aligned Background Image (30% width) ===== */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 w-[30%] h-full">
          <Image
            src="/faq_anim.png"
            alt="animated background"
            fill
            className="object-contain object-left opacity-100"
            priority
          />
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* ===== Top Badge ===== */}
        <div className="flex justify-center items-center mb-5 mt-[-50px]">
          <div className="flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-sm">
            <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span> FAQ
          </div>
        </div>

        {/* ===== Heading ===== */}
        <h2 className="text-4xl md:text-4xl font-bold mb-2">
          Find Your Answers Here
        </h2>
        <p className="text-gray-300 text-md mb-10">
          Everything you need to know, all in one place
        </p>

        {/* ===== Category Tabs ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer
        ${
          activeCategory === cat
            ? "bg-[#FF5100] text-white border-white shadow-[0_0_15px_rgba(255,81,0,0.5)]"
            : "bg-white text-black border-[#FF5100]"
        }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== FAQs ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {faqs.map((faq, index) => (
            <div key={index} className="w-full">
              {/* QUESTION CARD */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full rounded-2xl cursor-pointer px-6 py-4 shadow-lg bg-white border border-gray-200 flex justify-between items-center font-bold text-sm md:text-base text-[#031225]"
              >
                {faq.question}

                {openIndex === index ? (
                  <ChevronUp size={18} className="text-[#FF5100]" />
                ) : (
                  <ChevronDown size={18} className="text-[#FF5100]" />
                )}
              </button>

              {/* ANSWER BELOW (OUTSIDE CARD) */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.3 }}
                    className="pl-2 mt-3"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed px-8">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
