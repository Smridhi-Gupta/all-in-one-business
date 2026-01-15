"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const PlatformIndustrySection = () => {
  const exploreButtons = [
    "IT",
    "Immigration",
    "Accounting",
    "Document Evaluation",
    "Judiciary",
    "Staffing",
    "Corporate Training",
  ];

  return (
    <section className="w-full bg-white py-12 sm:py-16 md:py-20 text-center px-4">
      {/* ===== Heading ===== */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031225] mb-6 sm:mb-10">
        One platform, any industry
      </h2>

      {/* ===== Explore Buttons (Swipeable on mobile) ===== */}
      <div
        className="
          flex sm:flex-wrap
          overflow-x-auto sm:overflow-visible
          justify-start sm:justify-center
          gap-2 sm:gap-4
          mb-8 sm:mb-10
          max-w-5xl mx-auto
          px-1
        "
      >
        {exploreButtons.map((text, i) => (
          <button
            key={i}
            className="
              flex-shrink-0 flex items-center gap-2
              px-4 sm:px-6 py-2 sm:py-2.5 rounded-full 
              border border-[#031225]
              text-[#FF5100] text-xs sm:text-sm font-semibold
              transition-all duration-300 
              hover:bg-[#FF5100] hover:text-white
              active:scale-95
            "
          >
            <ExternalLink size={14} />
            {text}
          </button>
        ))}
      </div>

      {/* ===== Marketing Row ===== */}
      <div className="max-w-5xl mx-auto px-2 sm:px-6 flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-left gap-6 sm:gap-10">
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031225] leading-tight mb-3">
            Comprehensive Digital <br className="hidden sm:block" /> Marketing
            Services
          </h3>

          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-md">
            Tailored Solutions for Your Business Growth. Tailored Solutions for
            Your Business Growth. Tailored Solutions for Your Business Growth.
          </p>
        </div>

        <div className="w-full md:w-auto flex md:justify-end">
          <button
            className="
              w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 
              bg-[#FF5100] text-white rounded-full text-sm font-semibold 
              hover:bg-orange-500 shadow-md 
              transition-all duration-300 
              active:scale-95
            "
          >
            Explore more
          </button>
        </div>
      </div>

      {/* ===== Testimonial ===== */}
      <div className="flex justify-center px-2 sm:px-6">
        <div className="relative max-w-5xl w-full mx-auto rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/blog-1.jpg"
            alt="testimonial background"
            width={1200}
            height={600}
            className="object-cover w-full h-[240px] sm:h-[300px] md:h-[400px]"
            priority
          />

          {/* Glass overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] flex flex-col justify-center items-center px-4 sm:px-6 text-center">
            {/* Stars */}
            <div className="flex justify-center mb-2 sm:mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span
                    key={i}
                    className="text-[#FF5100] text-base sm:text-2xl"
                  >
                    ★
                  </span>
                ))}
            </div>

            {/* Text */}
            <p className="text-white text-xs sm:text-sm md:text-base max-w-xl leading-relaxed mb-3 sm:mb-4">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about.
            </p>

            {/* Name */}
            <h4 className="text-white font-bold text-sm sm:text-base md:text-lg">
              Shams W.Pawel
            </h4>
            <p className="text-gray-300 text-xs">
              Founder & CEO of XpeedStudio
            </p>
          </div>
        </div>
      </div>

      {/* ===== Pagination ===== */}
      <div className="flex justify-center gap-2 mt-4 sm:mt-5">
        <span className="w-2.5 h-2.5 bg-[#FF5100] rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default PlatformIndustrySection;
