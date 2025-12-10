"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";

const categories = [
  "IT",
  "Immigration",
  "Accounting",
  "Document Evaluation",
  "Judiciary",
  "Staffing",
  "Corporate Training",
];

const subCategories = {
  IT: {
    "Digital Marketing": [
      "Franchise Digital Marketing",
      "Digital Marketing Strategy Development",
      "Enterprise Digital Marketing",
    ],
    "Web Design & Development": [
      "Custom Website Design",
      "WordPress Web Design",
      "eCommerce Web Design",
      "WordPress",
      "Full Stack Websites",
      "Hosting & Domain",
      "Security",
    ],
    "Social Media": [
      "Social Media Management",
      "Franchise Social Media",
      "Enterprise Social Media",
    ],
    SEO: [
      "Local SEO",
      "Technical SEO",
      "AI SEO Services",
      "Franchise SEO",
      "Enterprise SEO",
      "SEO Audit",
    ],
    PPC: [
      "Search Engine Marketing",
      "Google Ads Management",
      "Lead Generation Services",
    ],
    "DA & AI": ["CRM", "Web Scrapping", "Chatbot"],
    "Graphic Design": [],
  },

  Immigration: {
    Immigration: ["H1-B", "Change of Status"],
  },
  Accounting: {
    "Dummy Accounting Service": [],
  },
  DocumentEvaluation: {
    "Dummy Document Evaluation": [],
  },
  Judiciary: {
    "Dummy Judiciary Service": [],
  },
  Staffing: {
    "Dummy Staffing Service": [],
  },
  CorporateTraining: {
    "Dummy Corporate Training": [],
  },
};

const Header = () => {
  const [activeCategory, setActiveCategory] = useState("IT");
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm fixed z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
        {/* LOGO */}
        <Link href="/">
          <Image src="/Logo.png" alt="Company Logo" width={120} height={14} />
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-8 text-[#031225] font-medium text-[15px]">
          <Link href="/" className="hover:text-[#FF5100]">
            Home
          </Link>
          {/* ================= SERVICES SIDEBAR + MEGA MENU ================= */}
          <div className="relative" onMouseEnter={() => setShowServices(true)}>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="hover:text-[#FF5100]">Services</span>
              <ChevronDown size={15} />
            </div>

            {showServices && (
              <div
                className="
        fixed left-0 top-[85px] w-screen h-screen
        bg-white border-t border-gray-200
        flex z-9999
      "
                onMouseLeave={() => setShowServices(false)}
              >
                {/* ===== LEFT SIDEBAR ===== */}
                <div className="w-[320px] bg-[#f3f3f3] p-6 space-y-3 overflow-y-auto">
                  {categories.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveCategory(item)}
                      className={`px-4 py-3 rounded-lg cursor-pointer transition text-md font-bold
              ${
                activeCategory === item
                  ? "bg-white font-bold text-[#031225]"
                  : "hover:bg-white"
              }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* ===== RIGHT MEGA MENU ===== */}
                <div className="flex-1 px-20 py-8 grid grid-cols-3 gap-6 overflow-y-auto grid-flow-row-dense">
                  {subCategories[activeCategory] &&
                    Object.entries(subCategories[activeCategory]).map(
                      ([heading, items], i) => (
                        <div key={i}>
                          {/* HEADING */}
                          <Link
                            href={`/service`}
                            className="font-bold text-md text-[#031225] mb-4 flex items-center gap-2 hover:text-[#FF5100] transition"
                          >
                            <span className="w-3 h-3 bg-[#FF5100] rounded-full"></span>
                            {heading}
                          </Link>

                          {/* LIST */}
                          {items.length > 0 && (
                            <ul className="space-y-1">
                              {items.map((item, j) => (
                                <li key={j}>
                                  <Link
                                    href=""
                                    className="text-[#555] hover:text-[#FF5100] text-sm transition"
                                  >
                                    {item}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    )}
                </div>
              </div>
            )}
          </div>
          {/* ================= INDUSTRIES DROPDOWN (WORKING LIKE SERVICES) ================= */}
          <div
            className="relative"
            onMouseEnter={() => setShowIndustries(true)}
            onMouseLeave={() => setShowIndustries(false)}
          >
            {/* Trigger */}
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#FF5100]">
              <span>Industries</span>
              <ChevronDown size={15} />
            </div>

            {/* Dropdown */}
            {showIndustries && (
              <div
                className="
        absolute top-[42px] left-0 w-[260px]
        bg-[#fafafa] shadow-md border border-[#e5e5e5]
        z-9999
      "
              >
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
                      className="
              px-5 py-3 border-b border-gray-200
              hover:bg-gray-100 hover:text-[#FF5100]
              cursor-pointer transition
            "
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* ABOUT */}
          <Link href="/about" className="hover:text-[#FF5100]">
            About Us
          </Link>
          {/* CONTACT */}
          <Link href="/contact" className="hover:text-[#FF5100]">
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
