"use client";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full py-28 md:py-44 text-white text-center
        bg-cover bg-center
      "
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#031225]/85"></div>

      {/* CONTENT */}
      <div className="relative z-10 px-6">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold">
          Digital Marketing
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-sm md:text-base opacity-90">
          Boost Traffic & Sales with Expert Digital Marketing
        </p>

        {/* Breadcrumb */}
        <div className="mt-6 flex items-center justify-center text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer transition">
            Home
          </span>
          <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
          <span className="text-white">Digital Marketing</span>
        </div>
      </div>
    </section>
  );
}
