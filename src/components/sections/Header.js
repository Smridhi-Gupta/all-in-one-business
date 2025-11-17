"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, User } from "lucide-react";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(null);

  const show = (menu) => setOpenMenu(menu);
  const hide = () => setOpenMenu(null);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        {/* ================= Logo ================= */}
        <Link href="/">
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={120}
            height={34}
            className="cursor-pointer object-contain"
          />
        </Link>

        {/* ================= Navigation ================= */}
        <nav className="hidden md:flex items-center gap-8 text-[#031225] font-medium text-[15px]">
          <Link href="/" className="hover:text-[#FF5100] transition">
            Home
          </Link>

          {/* ========== SERVICES DROPDOWN (FULL WIDTH, ALL LINKS → /services) ========== */}
          <div
            className="relative"
            onMouseEnter={() => show("services")}
            onMouseLeave={hide}
          >
            <div className="flex items-center gap-1">
              <Link
                href="/services"
                className="hover:text-[#FF5100] transition"
              >
                Services
              </Link>
              <ChevronDown
                size={15}
                className="cursor-pointer hover:text-[#FF5100]"
              />
            </div>

            {openMenu === "services" && (
              <div className="fixed left-0 top-[82px] w-full bg-white z-40 py-12 border-t border-gray-200">
                <div className="mx-auto max-w-[1180px] grid grid-cols-3 gap-20 px-10">
                  {/* COLUMN 1 */}
                  <div className="space-y-10">
                    {/* DIGITAL MARKETING */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3 
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* WEB DESIGN */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* SOCIAL MEDIA */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
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
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* PPC */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
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
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
                      >
                        DA & AI
                      </h4>
                    </Link>

                    <ul className="text-[15px] text-[#494949] leading-[28px]">
                      {["CRM", "Web Scrapping", "Chatbot"].map((item, i) => (
                        <li key={i}>
                          <Link
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* DEVELOPMENT */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center mb-3
              hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
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
                            href="/services"
                            className="hover:text-[#FF5100] cursor-pointer transition"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* GRAPHIC */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
                      >
                        GRAPHIC DESIGN
                      </h4>
                    </Link>

                    {/* IMMIGRATION */}
                    <Link href="/services">
                      <h4
                        className="text-[17px] font-bold tracking-[0.3px] flex items-center hover:text-[#FF5100] transition cursor-pointer
              before:content-['•'] before:text-[#FF5100] before:mr-2"
                      >
                        IMMIGRATION SERVICES
                      </h4>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* ========= INDUSTRIES DROPDOWN ========= */}
          <div
            className="relative"
            onMouseEnter={() => show("industries")}
            onMouseLeave={hide}
          >
            <button className="flex items-center gap-1 hover:text-[#FF5100] transition">
              Industries <ChevronDown size={15} />
            </button>

            {openMenu === "industries" && (
              <div className="absolute top-[50px] left-0 w-[260px] bg-[#fafafa] shadow-md border border-[#e5e5e5] z-50">
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
                      className="px-5 py-3 border-b border-[#e5e5e5] hover:bg-[#f0f0f0] cursor-pointer hover:text-[#FF5100] transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ========= ABOUT US DROPDOWN ========= */}
          <div
            className="relative"
            onMouseEnter={() => show("about")}
            onMouseLeave={hide}
          >
            <button className="flex items-center gap-1 hover:text-[#FF5100] transition">
              About Us <ChevronDown size={15} />
            </button>

            {openMenu === "about" && (
              <div className="absolute left-0 top-[50px] w-[260px] bg-[#f7f7f7] shadow-md border border-[#e6e6e6] z-50">
                <ul className="text-[15px] text-[#031225]">
                  <li className="px-5 py-3 hover:bg-[#ececec] cursor-pointer border-b border-[#e6e6e6] hover:text-[#FF5100] transition">
                    Career
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link href="/contact" className="hover:text-[#FF5100] transition">
            Contact Us
          </Link>
        </nav>

        {/* ========== RIGHT SIDE ========== */}
        <div className="flex items-center gap-4">
          <Search
            className="text-[#031225] cursor-pointer hover:text-[#FF5100]"
            size={18}
          />

          <Link
            href="/login"
            className="text-sm px-4 py-1.5 border border-gray-300 rounded-md hover:bg-gray-100"
          >
            Login
          </Link>

          <div className="relative group">
            <User className="cursor-pointer hover:text-[#FF5100]" />

            <div className="absolute hidden group-hover:block top-8 right-0 w-[180px] bg-white shadow-xl border border-gray-200 rounded-md">
              <ul className="text-sm">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5100]">
                  My Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5100]">
                  Settings
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[#FF5100]">
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
