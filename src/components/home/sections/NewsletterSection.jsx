"use client";

import React from "react";
import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="w-full flex justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div
        className="max-w-6xl w-full bg-linear-to-r from-[#031225] via-[#081b33] to-[#0b254d] rounded-3xl 
        p-6 sm:p-8 md:p-12 lg:p-16
        flex flex-col md:flex-row items-center justify-between 
        relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]"
      >
        {/* Left Content */}
        <div className="text-white max-w-lg space-y-4 z-10 text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
            Subscribe our newsletter
          </h2>

          <p className="text-xs sm:text-sm leading-relaxed text-gray-300">
            We’ll send you curated content, proven tactics, and updates that
            help your brand grow. Join our list and stay in the loop.
          </p>

          <button
            className="mt-3 sm:mt-4 px-6 sm:px-8 py-2 bg-[#FF5100] 
            text-white rounded-full text-sm sm:text-base font-medium 
            transition-all shadow-lg hover:bg-orange-500"
          >
            Let’s contact us
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-8 md:mt-0 relative flex justify-center md:justify-end w-full md:w-1/2 z-10">
          <Image
            src="/newsletter.png"
            alt="Newsletter Illustration"
            width={350}
            height={350}
            className="object-contain w-[220px] sm:w-[260px] md:w-[300px] lg:w-[350px] 
              drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            priority
          />
        </div>

        {/* Glow Effect */}
        <div
          className="absolute bottom-0 right-0 w-[250px] sm:w-[320px] md:w-[400px] h-[250px] sm:h-[320px] md:h-[400px] 
          bg-blue-500/20 blur-[120px] rounded-full pointer-events-none"
        ></div>
      </div>
    </section>
  );
};

export default NewsletterSection;
