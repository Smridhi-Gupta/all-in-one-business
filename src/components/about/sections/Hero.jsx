import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      className="relative w-full text-white pt-36 pb-20 md:pt-44 md:pb-28 text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#031225]/65"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          About Us
        </h1>

        <p className="text-sm md:text-base leading-relaxed font-normal">
          We take pride in delivering customised solutions that reflect your
          business targets and transform business challenges into success
          opportunities through our dedicated effort toward results-driven
          customer satisfaction.
        </p>

        <div className="flex justify-center items-center gap-2 mt-10 text-sm md:text-base opacity-90">
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
