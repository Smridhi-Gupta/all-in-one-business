"use client";

import Link from "next/link";
import { Lightbulb, Store, Building, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={26} />,
    title: "Digital Marketing Strategy Development",
    bullets: [
      "Audience & Market Research",
      "Channel Selection & Budget Planning",
      "Goal Setting & KPI Mapping",
    ],
  },
  {
    icon: <Store size={26} />,
    title: "Franchise Digital Marketing",
    bullets: [
      "Local SEO for Multi-Location Visibility",
      "Centralized & Scalable Campaign Management",
      "Franchise Marketing Support & Reporting",
    ],
  },
  {
    icon: <Building size={26} />,
    title: "Enterprise Digital Marketing",
    bullets: [
      "Omnichannel Strategy & Execution",
      "Advanced Data Analytics & Attribution",
      "Scalable Campaign Management & Automation",
    ],
  },
  {
    icon: <ShoppingCart size={26} />,
    title: "Ecommerce Digital Marketing",
    bullets: [
      "Ecommerce SEO & PPC Advertising",
      "Social Media & Influencer Marketing",
      "Email & Marketing Automation",
    ],
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-4xl font-bold text-[#031225]">
          Full-Service Digital Marketing Solutions That Drive Growth
        </h2>

        {/* Subtitle */}
        <p className="text-md mt-2">
          Boost Your Online Presence, Traffic & Sales with Proven Digital
          Strategies
        </p>

        {/* Description */}
        <p className="mt-4 text-md max-w-3xl mx-auto leading-relaxed">
          Digital marketing is more than just visibility — it’s about connecting
          with your audience, building trust, and turning clicks into customers.
          Our comprehensive digital marketing services are designed to help
          businesses of all sizes grow their brand, attract targeted traffic,
          and drive measurable results. From SEO and PPC to content and social
          media, we use data-driven strategies to help you outperform the
          competition and achieve your marketing goals.
        </p>

        <div className="px-20">
          {/* ROW 1 → 3 CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-14">
            {services.slice(0, 3).map((item, i) => (
              <ServiceCard key={i} {...item} />
            ))}
          </div>

          {/* ROW 2 → ONLY 1 CARD (LEFT ALIGNED) */}
          <div className="mt-14 md:w-1/3">
            <ServiceCard {...services[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}

/* CARD COMPONENT */
function ServiceCard({ icon, title, bullets }) {
  return (
    <div className="text-left">
      {/* ICON CIRCLE — EXACT screenshot style */}
      <div
        className="
          w-20 h-20 rounded-full border border-[#FF5100]
          flex items-center justify-center text-[#FF5100]
          bg-white transition cursor-pointer
          hover:bg-[#FF5100] hover:text-white
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="mt-4 font-bold text-lg text-[#031225] leading-snug">
        {title}
      </h3>

      {/* BULLETS */}
      <ul className="mt-3 space-y-[2px]">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2 items-start">
            <span className="text-xl">►</span>
            <div className="text-md">{b}</div>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <Link
        href="/services"
        className="
          inline-block mt-5 bg-[#FF5100] text-white text-[16px] font-semibold
          px-5 py-[12px] rounded-sm transition
        "
      >
        Explore Now
      </Link>
    </div>
  );
}
