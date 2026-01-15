import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-[#031225] text-white pt-28 sm:pt-32 md:pt-44 pb-16 sm:pb-20 md:pb-28 text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          Contact Us
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-normal max-w-3xl mx-auto">
          We take pride in delivering customised solutions that reflect your
          business targets and transform business challenges into success
          opportunities through our dedicated effort toward results-driven
          customer satisfaction.
        </p>

        {/* Breadcrumb */}
        <div className="flex justify-center items-center gap-2 mt-8 sm:mt-10 text-xs sm:text-sm md:text-base opacity-90">
          <Link href="/" className="hover:text-[#FF5100] transition-colors">
            Home
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-[#FF5100] font-medium">Contact Us</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
