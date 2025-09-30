"use client";
import React from "react";
import { FaRobot, FaDatabase, FaProjectDiagram } from "react-icons/fa";

const cards = [
  {
    title: "Any AI",
    desc: "Integrate AI seamlessly into every workflow across your business.",
    icon: <FaRobot size={28} />,
  },
  {
    title: "Any Data",
    desc: "Connect structured & unstructured data to power insights at scale.",
    icon: <FaDatabase size={28} />,
  },
  {
    title: "Any Workflows",
    desc: "Automate processes end-to-end for faster, smarter outcomes.",
    icon: <FaProjectDiagram size={28} />,
  },
];

const BringIntelligence = () => {
  return (
    <section className="w-full bg-white py-20 px-6 text-[#031225] relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Bring intelligence to every <br />
          <span className="text-[#FF5100]">corner of your business</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          Unlock the power of AI, data, and automation to create smarter
          workflows and drive transformation.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#f9f9f9] border border-transparent hover:border-[#FF5100] 
                         rounded-2xl p-10 shadow-md hover:shadow-[#FF5100]/30 
                         transition duration-300 group"
            >
              {/* Icon Box */}
              <div className="w-14 h-14 flex items-center justify-center 
                              rounded-full bg-[#FF5100] text-white mb-6 mx-auto group-hover:scale-110 transition">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-[#031225]">
                {card.title}
              </h3>
              <p className="text-gray-600">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BringIntelligence;
