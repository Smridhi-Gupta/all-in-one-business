"use client";
import React from "react";
import Image from "next/image";

const features = [
  {
    title: "IT Service Management",
    desc: "Transform the impact and delivery of IT with resilient, productivity-boosting services.",
  },
  {
    title: "IT Operations Management",
    desc: "Use AIOps, insights, and automation to predict issues and streamline resolutions.",
  },
  {
    title: "IT Asset Management",
    desc: "Automate the software, hardware, and cloud asset lifecycle to cut costs and risk.",
  },
  {
    title: "Strategic Portfolio Management",
    desc: "Align your organization on a single platform to deliver the outcomes that matter.",
  },
];

const ServicesHighlights = () => {
  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20 text-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Left Side: Heading + Subheading */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Run your enterprise IT on the{" "}
            <span className="text-[#FF5100]">ServiceNow AI Platform</span>
          </h2>
          <p className="text-gray-700 text-lg">
            Bring your AI, data, and workflows together with automation for more
            efficient core IT functions.
          </p>
        </div>

        {/* Right Side: Grey placeholder div */}
        <div className="lg:w-1/2 relative flex justify-end items-start">
          <div className="w-full max-w-lg relative">
            <div className="bg-gray-200 rounded-2xl shadow-lg p-6 w-full h-72">
              {/* Optional content */}
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-gray-100 p-6 rounded-2xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
            <p className="text-gray-800 mb-4">{feature.desc}</p>
            <span className="text-[#FF5100] font-semibold flex items-center gap-1">
              Learn More <span className="text-lg">→</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesHighlights;
