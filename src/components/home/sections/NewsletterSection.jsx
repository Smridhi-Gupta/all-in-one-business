"use client";

import React from "react";
import Image from "next/image";

const NewsletterSection = () => {
  return (
    <section className="w-full flex justify-center py-20 px-6">
      <div className="max-w-6xl w-full h-80 bg-linear-to-r from-[#031225] via-[#081b33] to-[#0b254d] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.2)]">
        {/* Left Content */}
        <div className="text-white max-w-lg space-y-4 z-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            Subscribe our newsletter
          </h2>
          <p className="text-sm leading-relaxed">
            We’ll send you curated content, proven tactics, and updates that
            help your brand grow. Join our list and stay in the loop.
          </p>

          <button className="mt-4 px-8 py-1.5 bg-[#FF5100] text-white rounded-full text-lg font-medium transition-all shadow-lg">
            Let’s contact us
          </button>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 relative flex justify-center md:justify-end w-full md:w-1/2 z-10">
          <Image
            src="/newsletter.png"
            alt="Newsletter Illustration"
            width={350}
            height={350}
            className="object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            priority
          />
        </div>

        {/* Glow Effect */}
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/30 blur-[140px] rounded-full"></div>
      </div>
    </section>
  );
};

export default NewsletterSection;
