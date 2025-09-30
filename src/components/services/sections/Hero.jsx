"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="w-full bg-[#031225] py-20 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side */}
        <div className="flex flex-col gap-6">
          <h3 className="text-lg text-[#FF5100] font-semibold">Solutions</h3>
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-white">
            Put AI to work in <span className="text-[#FF5100]">IT</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Use ServiceNow IT solutions to align strategy, assets, and portfolios
            to your business needs. Deliver autonomous IT for less friction,
            more visibility, and more focus on innovation.
          </p>
          <Link href="/ebook" className="w-max">
            <Button className="bg-[#FF5100] px-8 py-6 rounded-full text-lg font-semibold hover:bg-orange-600 transition-colors w-max">
              Read Ebook
            </Button>
          </Link>
        </div>

        {/* Right Side - Grey Div */}
        <div className="w-full h-72 md:h-96 bg-gray-700 rounded-2xl shadow-lg flex items-center justify-center">
          <span className="text-gray-300"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
