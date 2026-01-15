"use client";

import {
  ShieldCheck,
  Users,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const values = [
  {
    title: "Integrity & Transparency",
    desc: "We operate with honesty, ethical practices, and clear communication in every engagement.",
    icon: <ShieldCheck size={22} />,
  },
  {
    title: "Client-Centric Approach",
    desc: "Our strategies are built around client goals, ensuring measurable and meaningful outcomes.",
    icon: <Users size={22} />,
  },
  {
    title: "Innovation & Excellence",
    desc: "We continuously evolve with modern technologies to deliver high-quality digital solutions.",
    icon: <Sparkles size={22} />,
  },
  {
    title: "Accountability & Reliability",
    desc: "We take ownership of our work and deliver with consistency, precision, and trust.",
    icon: <CheckCircle2 size={22} />,
  },
];

export default function OurValues() {
  return (
    <section className="w-full bg-white py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14 items-center">

        {/* LEFT CARDS */}
        <div className="space-y-12">
          {[values[0], values[1]].map((value, i) => (
            <ValueCard key={i} value={value} />
          ))}
        </div>

        {/* CENTER HEADING */}
        <div className="text-center">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FF5100] tracking-wide mb-4">
            <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span>
            OUR VALUES
          </span>

          <h2 className="text-3xl md:text-5xl font-extrabold text-[#031225] mb-4">
            What Drives Us Forward
          </h2>

          <p className="text-gray-600 text-sm md:text-base max-w-sm mx-auto">
            Our values shape how we think, work, and deliver long-term success for
            our clients.
          </p>
        </div>

        {/* RIGHT CARDS */}
        <div className="space-y-12">
          {[values[2], values[3]].map((value, i) => (
            <ValueCard key={i} value={value} />
          ))}
        </div>

      </div>
    </section>
  );
}

/* ---------- CARD COMPONENT ---------- */

function ValueCard({ value }) {
  return (
    <div
      className="
        relative
        bg-white p-8 rounded-2xl
        border border-gray-100 border-l-4 border-l-[#FF5100]
        shadow-[0_10px_30px_rgba(0,0,0,0.12)]
        transition-all duration-300
      "
    >
      {/* FLOATING ICON */}
      <div
        className="
          absolute -top-6 right-40
          w-12 h-12 rounded-xl
          bg-[#FF5100]
          flex items-center justify-center
          text-white
        "
      >
        {value.icon}
      </div>

      <h3 className="text-lg font-bold text-[#031225] mb-3">
        {value.title}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {value.desc}
      </p>
    </div>
  );
}

