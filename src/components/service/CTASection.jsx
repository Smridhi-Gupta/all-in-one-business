"use client";

import { Calendar } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="
        w-full 
        py-10 sm:py-14 md:py-16         
        px-4 sm:px-6 
        text-center 
        bg-linear-to-r from-[#031225] via-[#07305A] to-[#0A3A6E]
        text-white
      "
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug mb-4">
        Ready to Scale Your Business <br className="hidden sm:block" /> with
        Digital Marketing?
      </h2>

      {/* Subtext */}
      <p className="text-gray-200 text-sm sm:text-base max-w-xl mx-auto mb-6 sm:mb-7 px-1">
        Get a free strategy call with our experts and discover growth
        opportunities for your business.
      </p>

      {/* Button */}
      <Link href="/contact" className="inline-flex justify-center">
        <button
          className="
            bg-white text-[#031225] 
            px-6 sm:px-7 py-2.5 sm:py-3 
            rounded-lg 
            font-bold text-sm sm:text-base 
            flex items-center gap-2
            hover:bg-gray-100 transition-all duration-300
            shadow-lg cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-white/40
          "
        >
          <Calendar size={16} />
          Schedule a Call
        </button>
      </Link>

      {/* Bottom Note */}
      <p className="text-gray-300 text-xs sm:text-sm mt-4">
        Free consultation · No obligation · Expert guidance
      </p>
    </section>
  );
}
