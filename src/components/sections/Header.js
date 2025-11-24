"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={120}
            height={34}
            className="cursor-pointer object-contain"
          />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-[#031225] font-medium text-[15px]">
          {/* HOME */}
          <Link href="/" className="hover:text-[#FF5100] transition">
            Home
          </Link>

          {/* ================= SERVICES MEGA DROPDOWN ================= */}
          <div className="relative group">
            {/* TRIGGER */}
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="hover:text-[#FF5100] transition">Services</span>
              <ChevronDown size={15} className="hover:text-[#FF5100]" />
            </div>

            {/* MEGA MENU */}
            <div
              className="
      hidden group-hover:block
      absolute left-1/2 -translate-x-1/2 top-full
      w-screen bg-white z-40
      py-12 border-t border-gray-200
    "
            >
              <div className="mx-auto max-w-[1180px] grid grid-cols-3 gap-20 px-10">
                {/* COLUMN 1 */}
                <div className="space-y-10">
                  {/* DIGITAL MARKETING */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold tracking-[0.3px] flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      DIGITAL MARKETING
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "Franchise Digital Marketing",
                      "Digital Marketing Strategy Development",
                      "Enterprise Digital Marketing",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* WEB DESIGN */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      WEB DESIGN
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "Custom Website Design",
                      "WordPress Web Design",
                      "eCommerce Web Design",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* SOCIAL MEDIA */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      SOCIAL MEDIA
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "Social Media Management",
                      "Franchise Social Media",
                      "Enterprise Social Media",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLUMN 2 */}
                <div className="space-y-10">
                  {/* SEO */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      SEO
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "Local SEO",
                      "Technical SEO",
                      "AI SEO Services",
                      "Franchise SEO",
                      "Enterprise SEO",
                      "SEO Audit",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* PPC */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      PPC
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "Search Engine Marketing",
                      "Google Ads Management",
                      "Lead Generation Services",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* COLUMN 3 */}
                <div className="space-y-10">
                  {/* DA & AI */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      DA & AI
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {["CRM", "Web Scrapping", "Chatbot"].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* DEVELOPMENT */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      DEVELOPMENT
                    </h4>
                  </Link>

                  <ul className="text-[15px] text-[#494949] leading-[28px]">
                    {[
                      "WordPress",
                      "Full Stack Websites",
                      "Hosting & Domain",
                      "Security",
                    ].map((item, i) => (
                      <li key={i}>
                        <Link
                          href="/subservices"
                          className="hover:text-[#FF5100] transition"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  {/* GRAPHIC DESIGN */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      GRAPHIC DESIGN
                    </h4>
                  </Link>

                  {/* IMMIGRATION */}
                  <Link href="/services">
                    <h4
                      className="text-[17px] font-bold flex items-center
            before:content-['•'] before:text-[#FF5100] before:mr-2
            hover:text-[#FF5100] cursor-pointer"
                    >
                      IMMIGRATION SERVICES
                    </h4>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* ================= INDUSTRIES DROPDOWN ================= */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#FF5100]">
              <span>Industries</span>
              <ChevronDown size={15} />
            </div>

            <div className="hidden group-hover:block absolute top-[42px] left-0 w-[260px] bg-[#fafafa] shadow-md border border-[#e5e5e5] z-50">
              <ul className="text-[15px] text-[#031225]">
                {[
                  "Accounting Firm Industry",
                  "Cleaning Industry",
                  "Cyber Security Industry",
                  "Healthcare Industry",
                  "Home Services Industry",
                  "Immigration Firm Industry",
                  "IT Industry",
                  "Law Industry",
                  "Retail Industry",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="px-5 py-3 border-b border-gray-200 hover:bg-gray-100 hover:text-[#FF5100] cursor-pointer transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ================= ABOUT US DROPDOWN ================= */}
          <div className="relative group">
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#FF5100]">
              <span>About Us</span>
              <ChevronDown size={15} />
            </div>

            <div className="hidden group-hover:block absolute top-[42px] left-0 w-[260px] bg-[#f7f7f7] shadow-md border border-[#e6e6e6] z-50">
              <ul className="text-[15px] text-[#031225]">
                <li className="px-5 py-3 hover:bg-[#ececec] hover:text-[#FF5100] cursor-pointer transition">
                  Career
                </li>
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <Link href="/contact" className="hover:text-[#FF5100] transition">
            Contact Us
          </Link>
        </nav>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          <Search size={18} className="cursor-pointer hover:text-[#FF5100]" />

          <Link
            href="/login"
            className="text-sm px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
