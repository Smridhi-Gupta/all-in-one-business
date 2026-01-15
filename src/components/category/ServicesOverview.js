"use client";

import Link from "next/link";
import { Lightbulb, Store, Building, ShoppingCart } from "lucide-react";

const services = [
  {
    icon: <Lightbulb size={24} />,
    title: "Digital Marketing Strategy Development",
    bullets: [
      "Audience & Market Research",
      "Channel Selection & Budget Planning",
      "Goal Setting & KPI Mapping",
    ],
  },
  {
    icon: <Store size={24} />,
    title: "Franchise Digital Marketing",
    bullets: [
      "Local SEO for Multi-Location Visibility",
      "Centralized & Scalable Campaign Management",
      "Franchise Marketing Support & Reporting",
    ],
  },
  {
    icon: <Building size={24} />,
    title: "Enterprise Digital Marketing",
    bullets: [
      "Omnichannel Strategy & Execution",
      "Advanced Data Analytics & Attribution",
      "Scalable Campaign Management & Automation",
    ],
  },
  {
    icon: <ShoppingCart size={24} />,
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
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031225]">
          Full-Service Digital Marketing Solutions That Drive Growth
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-md mt-2 text-gray-600">
          Boost Your Online Presence, Traffic & Sales with Proven Digital
          Strategies
        </p>

        {/* Description */}
        <p className="mt-4 text-sm sm:text-md max-w-3xl mx-auto leading-relaxed text-gray-600">
          Digital marketing is more than just visibility — it’s about connecting
          with your audience, building trust, and turning clicks into customers.
          Our comprehensive digital marketing services are designed to help
          businesses of all sizes grow their brand, attract targeted traffic,
          and drive measurable results.
        </p>

        {/* CARDS */}
        <div className="mt-12">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {services.slice(0, 3).map((item, i) => (
              <ServiceCard key={i} {...item} />
            ))}
          </div>

          {/* Row 2 */}
          <div className="mt-6 flex justify-center md:justify-start md:w-1/3">
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
    <div
      className="
        text-left bg-white
        p-5 sm:p-6 rounded-xl
        shadow-lg
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.12)]
        transition-all duration-300
      "
    >
      {/* ICON */}
      <div
        className="
          w-16 h-16 sm:w-20 sm:h-20 
          rounded-full border border-[#FF5100]
          flex items-center justify-center text-[#FF5100]
          bg-white transition cursor-pointer
          hover:bg-[#FF5100] hover:text-white
        "
      >
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="mt-4 font-bold text-base sm:text-lg text-[#031225] leading-snug">
        {title}
      </h3>

      {/* BULLETS */}
      <ul className="mt-3 space-y-1">
        {bullets.map((b, i) => (
          <li
            key={i}
            className="flex gap-2 items-start text-sm sm:text-md text-gray-700"
          >
            <span className="text-lg text-[#FF5100]">►</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* BUTTON */}
      <Link
        href="/services"
        className="
          inline-block mt-5 bg-[#FF5100] text-white text-sm sm:text-base font-semibold
          px-5 py-3 rounded-sm transition
          hover:bg-[#e44900]
        "
      >
        Explore Now
      </Link>
    </div>
  );
}
