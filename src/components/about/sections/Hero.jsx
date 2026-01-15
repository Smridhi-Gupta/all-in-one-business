import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full text-white text-center 
        pt-28 sm:pt-32 md:pt-44 
        pb-16 sm:pb-20 md:pb-28 
        bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#031225]/70"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
          About Us
        </h1>

        <p className="text-xs sm:text-sm md:text-base leading-relaxed font-normal text-gray-200 max-w-3xl mx-auto">
          We take pride in delivering customised solutions that reflect your
          business targets and transform business challenges into success
          opportunities through our dedicated effort toward results-driven
          customer satisfaction.
        </p>

        <div className="flex justify-center items-center gap-2 mt-6 sm:mt-8 md:mt-10 text-xs sm:text-sm md:text-base opacity-90">
          <Link href="/" className="hover:text-[#FF5100] transition">
            Home
          </Link>
          <ChevronRight size={16} />
          <span className="text-[#FF5100]">About Us</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
