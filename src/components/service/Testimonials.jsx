"use client";

import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "Embtel Solutions transformed our vision into reality with their expertise and dedication.",
    name: "Akash Patel",
    role: "Founder",
  },
  {
    quote: "Their digital marketing strategies boosted our leads by over 200%.",
    name: "Ritika Sharma",
    role: "Marketing Head",
  },
  {
    quote: "Professional team, timely delivery, and excellent communication!",
    name: "Sanjay Mehra",
    role: "CEO",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section
      className="relative w-full py-20 px-6 bg-fixed bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1600&auto=format&fit=crop')",
      }}
    >
      {/* LIGHT / SOFT OVERLAY */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        
        {/* ================= LEFT SIDE ================= */}
        <div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF5100] tracking-wide mb-3">
            <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
            TESTIMONIALS
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#031225] leading-tight">
            What Our Clients <br /> Say About Us
          </h2>

          <p className="text-gray-600 text-sm md:text-base mt-4 max-w-md">
            Real feedback from businesses who trusted us for their digital growth
            and achieved measurable success.
          </p>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="relative">
          
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl p-10 shadow-[0_0_40px_rgba(0,0,0,0.08)] border border-gray-100 text-left relative">
            
            <Quote size={32} className="text-[#031225] opacity-60 mb-4" />

            <p className="text-lg text-[#031225] font-medium leading-relaxed">
              "{testimonials[index].quote}"
            </p>

            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#FF5100]/20 flex items-center justify-center text-sm font-bold text-[#031225]">
                {testimonials[index].name.charAt(0)}
              </div>

              <div>
                <h4 className="font-semibold text-[#031225]">
                  {testimonials[index].name}
                </h4>
                <p className="text-gray-500 text-sm">
                  {testimonials[index].role}
                </p>
              </div>
            </div>

            {/* Arrows */}
            <div className="absolute bottom-6 right-6 flex gap-3">
              <button
                onClick={prev}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FF5100] hover:text-white text-[#031225] transition"
              >
                <ChevronLeft size={16} />
              </button>

              <button
                onClick={next}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-[#FF5100] hover:text-white text-[#031225] transition"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-start mt-6 gap-2">
            {testimonials.map((_, i) => (
              <span
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === index ? "bg-[#FF5100]" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
