"use client";

import { CheckCircle } from "lucide-react";
import React from "react";

const features = [
  {
    title: "Data-Driven",
    subtitle: "Analytics & Insights",
    icon: "📊",
  },
  {
    title: "Strategic",
    subtitle: "Custom Solutions",
    icon: "💡",
  },
  {
    title: "Targeted Reach",
    subtitle: "Right Audience",
    icon: "🎯",
  },
  {
    title: "ROI Focused",
    subtitle: "Measurable Results",
    icon: "📈",
  },
];

export default function WhatIsDigitalMarketing() {
  return (
    <section className="w-full pt-20 sm:pt-28 lg:pt-40 pb-16 sm:pb-20 px-4 sm:px-6 bg-[#e6f2ff] -mt-8 sm:-mt-14 lg:-mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
        {/* LEFT CONTENT */}
        <div className="space-y-5 sm:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#031225] leading-snug">
            What Is Digital Marketing & <br /> Why It Matters
          </h2>

          <p className="text-gray-600 text-sm sm:text-md leading-relaxed max-w-lg">
            Digital marketing is not just about being visible online — it’s
            about attracting the right audience, building trust, and turning
            visitors into customers.
          </p>

          <p className="text-gray-600 text-sm sm:text-md leading-relaxed max-w-lg">
            From SEO and paid advertising to social media and automation, our
            strategies are designed to grow your brand, increase qualified
            traffic, and generate measurable ROI.
          </p>

          {/* BULLET POINTS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-2">
            {[
              "Brand visibility",
              "Higher sales",
              "Lead generation",
              "Scalable growth",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle size={18} className="text-[#FF5100]" />
                <span className="text-sm sm:text-md text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FEATURE CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                bg-white rounded-2xl p-5 shadow-md border border-[#E6F2FF]
                hover:shadow-lg transition-all
              "
            >
              <span className="text-2xl">{f.icon}</span>
              <h3 className="mt-2 font-bold text-[#031225] text-base sm:text-lg">
                {f.title}
              </h3>
              <p className="text-sm sm:text-md text-gray-500">{f.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
