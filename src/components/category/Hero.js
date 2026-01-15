"use client";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full 
        py-20 sm:py-28 md:py-40 
        text-white text-center
        bg-cover bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#031225]/80"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-4 sm:px-6">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Digital Marketing
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-xs sm:text-sm md:text-base text-gray-200">
          Boost Traffic & Sales with Expert Digital Marketing
        </p>

        {/* Breadcrumb */}
        <div className="mt-5 sm:mt-6 flex items-center justify-center text-xs sm:text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer transition">
            Home
          </span>
          <ChevronRight className="mx-2 w-3.5 h-3.5 text-gray-400" />
          <span className="text-white">Digital Marketing</span>
        </div>
      </div>
    </section>
  );
}
