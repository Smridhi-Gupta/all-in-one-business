"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const ServiceTabs = () => {
  const tabs = [
    {
      name: "SEO Service",
      title: "SEO Service",
      desc: "Our SEO services help your business rank higher on search engines, attract organic traffic, and improve visibility to reach your target audience effectively.",
      points: [
        "Keyword Research & Strategy",
        "Technical SEO Optimization",
        "Backlink Building",
      ],
      image: "/Home-s1.png",
    },
    {
      name: "Socmed Marketing",
      title: "Social Media Marketing",
      desc: "Build your brand presence and connect with your audience through social media. Our campaigns enhance engagement and community trust.",
      points: [
        "Platform-Specific Strategies",
        "Paid Campaign Management",
        "Analytics & Reporting",
      ],
      image: "/Home-s1.png",
    },
    {
      name: "PPC Advertising",
      title: "PPC Advertising",
      desc: "We design cost-effective PPC campaigns to drive targeted traffic and measurable results, ensuring every click contributes to your business growth.",
      points: [
        "Google Ads Management",
        "Keyword Targeting",
        "ROI Optimization",
      ],
      image: "/Home-s1.png",
    },
    {
      name: "Content Marketing",
      title: "Content Marketing",
      desc: "Our Content Marketing services help you attract, engage, and convert your audience through storytelling and strategy. We craft content that informs, entertains, and drives results.",
      points: [
        "Blog & Article Writing",
        "Content Strategy Development",
        "SEO-Optimized Copywriting",
      ],
      image: "/Home-s1.png",
    },
    {
      name: "Email Marketing",
      title: "Email Marketing",
      desc: "Cultivate meaningful connections with personalized email campaigns that engage your audience and deliver measurable conversions.",
      points: [
        "Targeted Email Campaigns",
        "Lead Nurturing Automation",
        "Performance Analytics",
      ],
      image: "/Home-s1.png",
    },
    {
      name: "Technology Integration",
      title: "Technology Integration",
      desc: "Seamlessly integrate advanced digital tools and analytics into your marketing stack to improve efficiency and drive innovation.",
      points: [
        "CRM Integration",
        "Marketing Automation Setup",
        "Custom API Development",
      ],
      image: "/Home-s1.png",
    },
  ];

  const [activeTab, setActiveTab] = useState("Content Marketing");

  const current = tabs.find((t) => t.name === activeTab);

  return (
    <section className="relative w-full min-h-[80vh] bg-[#031225] text-white overflow-hidden py-20 px-6 flex flex-col items-center justify-center">
      {/* ===== Background Animation Layer ===== */}
      <div className="absolute inset-0">
        <Image
          src="/bg-anim.png"
          alt="background animation"
          fill
          className="object-cover opacity-60 animate-pulse"
        />
      </div>

      {/* ===== Tabs ===== */}
      <div className="relative z-10 flex flex-wrap justify-center gap-4 mb-14">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`px-5 py-2 rounded-full border transition-all duration-300 text-sm font-medium ${
              activeTab === tab.name
                ? "bg-[#FF5100] text-white border-[#FF5100] shadow-md"
                : "bg-white text-[#031225] border-gray-200 hover:bg-gray-100"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* ===== Active Tab Content ===== */}
      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Image */}
        <motion.div
          key={current.image}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Image
            src={current.image}
            alt={current.title}
            width={400}
            height={350}
            className="rounded-2xl object-contain"
          />
        </motion.div>

        {/* Right Text Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.name}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#60A5FA] mb-4">
              {current.title}
            </h2>
            <p className="text-gray-300 text-sm md:text-base mb-6 leading-relaxed">
              {current.desc}
            </p>
            <ul className="mb-6 space-y-2">
              {current.points.map((point, i) => (
                <li
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-200"
                >
                  <span className="text-green-400">✔</span>
                  {point}
                </li>
              ))}
            </ul>
            <button className="self-start bg-[#22C55E] hover:bg-green-500 text-white px-6 py-2 rounded-full text-sm font-medium transition-all">
              Explore more
            </button>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServiceTabs;
