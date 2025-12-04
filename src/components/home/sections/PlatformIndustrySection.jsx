"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const PlatformIndustrySection = () => {
  const exploreButtons = Array(9).fill("Explore more");

  return (
    <section className="w-full bg-white py-20 text-center">
      {/* ===== Top Heading ===== */}
      <h2 className="text-2xl md:text-4xl font-bold text-[#031225] mb-10">
        One platform, any industry
      </h2>

      {/* ===== Explore Buttons Grid ===== */}
      <div className="flex flex-wrap justify-center gap-6 mb-10 max-w-5xl mx-auto">
        {exploreButtons.map((text, i) => (
          <button
            key={i}
            className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#031225] 
            text-[#FF5100]
            transition-all duration-300 text-sm font-semibold"
          >
            <ExternalLink size={14} className="text-[#FF5100]" />
            {text}
          </button>
        ))}
      </div>

      {/* ===== Marketing Services Row ===== */}
      <div className="max-w-6xl mx-auto px-8 md:px-20 flex flex-col md:flex-row md:items-center md:justify-between mb-10 text-left gap-10">
        
        {/* Left Content with Equal Width */}
        <div className="w-full md:w-1/2 max-w-l">
          <h3 className="text-3xl md:text-4xl font-bold text-[#031225] leading-tight mb-3">
            Comprehensive Digital <br /> Marketing Services
          </h3>

          <p className="text-gray-500 text-sm md:text-base max-w-md leading-relaxed">
            Tailored Solutions for Your Business Growth. Tailored Solutions for 
            Your Business Growth. Tailored Solutions for Your Business Growth.
          </p>
        </div>

        {/* Button */}
        <div className="w-full md:w-auto flex md:justify-end">
          <button className="px-7 py-3 bg-[#FF5100] text-white rounded-full text-sm font-semibold hover:bg-orange-500 shadow-md transition-all duration-300">
            Explore more
          </button>
        </div>
      </div>

      {/* ===== Testimonial Section ===== */}
      <div className="flex justify-center">
        <div className="relative w-[90%] md:w-[70%] lg:w-[60%] rounded-2xl overflow-hidden shadow-lg">

          {/* Background Image */}
          <Image
            src="/blog-1.jpg"
            alt="testimonial background"
            width={1200}
            height={600}
            className="object-cover w-full h-[400px]"
            priority
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-6 text-center">

            {/* Star Rating */}
            <div className="flex justify-center mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <span key={i} className="text-[#FF5100] text-2xl">
                    ★
                  </span>
                ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-white text-sm md:text-base max-w-xl leading-relaxed mb-4">
              It is a paradisematic country, in which roasted parts of sentences
              fly into your mouth. Even the all-powerful Pointing has no control
              about.
            </p>

            {/* Name */}
            <h4 className="text-white font-bold text-base md:text-lg">
              Shams W.Pawel
            </h4>
            <p className="text-gray-300 text-xs">
              Founder & CEO of XpeedStudio
            </p>
          </div>
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-5">
        <span className="w-2.5 h-2.5 bg-[#FF5100] rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-300 rounded-full"></span>
      </div>
    </section>
  );
};

export default PlatformIndustrySection;