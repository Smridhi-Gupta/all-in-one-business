import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="w-full min-h-screen bg-[#031225] flex flex-col items-center justify-center text-white px-6 pt-24">
      {/* Two-column layout */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        
        {/* Left Column - Heading */}
        <div className="md:w-1/2 text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            Empower Your <span className="text-[#FF5100]">Business</span> <br /> With Smart Solutions
          </h1>
        </div>

        {/* Right Column - Subheading + Buttons */}
        <div className="md:w-1/2 flex flex-col items-start text-left">
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            We provide all-in-one services to take your business to the next level with innovation, growth, and success.
          </p>
          <div className="flex gap-6">
            <Link
              href="/services"
              className="bg-[#FF5100] px-6 py-3 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="border border-[#FF5100] px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#FF5100] hover:text-white transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Grey image placeholder below */}
      <div className="w-full max-w-6xl h-64 bg-gray-700 mt-12 rounded-lg"></div>
    </section>
  );
};

export default Hero;
