"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#031225] text-gray-300 pt-14 sm:pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* ===== Left Column ===== */}
        <div>
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={120}
            height={120}
            className="mb-5 w-[110px] sm:w-[120px]"
          />

          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Embtel Solutions Ltd. delivers superior web design, development, and
            digital marketing services tailored to each client’s unique business
            needs, ensuring long-term success. Customer satisfaction is at the
            heart of everything we do. We provide specialized support and expert
            guidance at every stage, helping our clients achieve their goals
            with confidence and clarity.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  bg-[#1A1E2E] hover:bg-[#FF5100] 
                  p-3 rounded-full transition-all duration-300
                  focus:outline-none focus:ring-2 focus:ring-[#FF5100]/50
                "
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* ===== Services ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Digital Marketing",
              "Development",
              "PPC",
              "DA & AI",
              "Security",
              "SEO",
              "Social Media",
              "Web Design",
              "Immigration Services",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[#FF5100] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ===== Service Locations ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Service Locations
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              "Fremont",
              "San Jose",
              "Oakland",
              "San Mateo",
              "San Francisco",
              "Palo Alto",
            ].map((city, i) => (
              <li key={i}>{city}</li>
            ))}
          </ul>
        </div>

        {/* ===== Company ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            {[
              "About Us",
              "Industries",
              "Services",
              "Security",
              "Blog",
              "Contact Us",
            ].map((item, i) => (
              <li key={i}>
                <Link
                  href="#"
                  className="hover:text-[#FF5100] transition-colors"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-xs sm:text-sm text-gray-400 px-4">
        Copyright © {new Date().getFullYear()} Embtel Solutions - All Rights
        Reserved. Designed by{" "}
        <span className="text-[#FF5100] font-semibold cursor-pointer hover:underline">
          Embtel Solutions, Inc.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
