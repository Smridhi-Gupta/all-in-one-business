"use client";

import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="w-full min-h-screen bg-[#031225] text-white flex items-center justify-center px-6 py-16">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        {/* LEFT TEXT CONTENT */}
        <div className="space-y-6">
          <span className="inline-block text-[13px] tracking-wide uppercase px-3 py-1 rounded-full border border-white/20 text-[#FF5100]">
            Result-driven digital marketing agency
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Boost Traffic, Leads <br />& Sales with{" "}
            <span className="text-[#FF5100]">Expert</span>
            <br />
            <span className="text-[#FF5100]">Digital Marketing</span>
          </h1>

          <p className="text-gray-300 max-w-lg text-md md:text-base">
            We help businesses grow faster with data-driven SEO, paid ads,
            social media, and conversion-focused strategies.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#FF5100] hover:bg-orange-600 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-[0_0_20px_rgba(255,81,0,0.45)] transition-all">
              Get Free Strategy Call →
            </button>

            <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-6 py-3 rounded-lg text-sm font-medium flex items-center gap-2 transition-all">
              <ArrowRight size={16} />
              View Case Studies
            </button>
          </div>
        </div>

        {/* ✅ RIGHT SIDE METRICS CARD (WITH GREY ICON DIV) */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 px-10 py-9 shadow-[0_0_40px_rgba(0,0,0,0.25)] max-w-md w-full mx-auto">
          <div className="space-y-7">
            <MetricBar label="Traffic Growth +175%" width="w-[75%]" />
            <MetricBar label="Revenue Growth +220%" width="w-[90%]" />
            <MetricBar label="Conversion Rate +92%" width="w-[85%]" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- REUSABLE METRIC BAR (GREY ICON DIV) ---------------- */

function MetricBar({ label, width }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-2">
        {/* ✅ GREY ICON PLACEHOLDER */}
        <div className="w-12 h-12 rounded-lg bg-gray-400/30 flex items-center justify-center"></div>

        <p className="text-md text-gray-200">{label}</p>
      </div>

      <div className="w-full bg-white/10 h-2 rounded-full">
        <div className={`bg-[#FF5100] ${width} h-2 rounded-full`}></div>
      </div>
    </div>
  );
}
