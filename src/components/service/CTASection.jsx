"use client";

import { Calendar } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="
        w-full 
        py-8         
        px-6 
        text-center 
        bg-linear-to-r from-[#031225] via-[#07305A] to-[#0A3A6E]
        text-white
      "
    >
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-extrabold leading-snug mb-3">
        Ready to Scale Your Business <br /> with Digital Marketing?
      </h2>

      {/* Subtext */}
      <p className="text-gray-200 text-md max-w-xl mx-auto mb-7">
        Get a free strategy call with our experts and discover growth
        opportunities for your business.
      </p>

      {/* Button */}
      <button
        className="
          bg-white text-[#031225] 
          px-6 py-3 rounded-lg 
          font-bold text-md flex items-center gap-2 mx-auto
          hover:bg-gray-100 transition-all
          shadow-lg
        "
      >
        <Calendar size={16} />
        Schedule a Call
      </button>

      {/* Bottom Note */}
      <p className="text-gray-300 text-sm mt-4">
        Free consultation · No obligation · Expert guidance
      </p>
    </section>
  );
}
