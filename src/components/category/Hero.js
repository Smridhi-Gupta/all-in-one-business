"use client";
import { ChevronRight } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="w-full bg-[#031225] py-30 md:py-24 mt-29 text-white text-center">
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
        <span className="hover:text-white cursor-pointer transition">Home</span>
        <ChevronRight className="mx-2 w-4 h-4 text-gray-400" />
        <span className="text-white">Digital Marketing</span>
      </div>
    </div>
  );
}
