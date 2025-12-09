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
  IT: [
    "Digital Marketing",
    "Web Design",
    "Social Media",
    "SEO",
    "PPC",
    "DA & AI",
    "Development",
    "Graphic Designing",
  ],
  Immigration: ["Dummy Immigration Service"],
  Accounting: ["Dummy Accounting Service"],
  DocumentEvaluation: ["Dummy Document Evaluation"],
  Judiciary: ["Dummy Judiciary Service"],
  Staffing: ["Dummy Staffing Service"],
  CorporateTraining: ["Dummy Corporate Training"],
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
        fixed left-0 top-[85px] w-screen h-[520px]
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
                      className={`px-4 py-3 rounded-lg cursor-pointer transition 
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
                <div className="flex-1 px-20 py-12 grid grid-cols-3 gap-14 overflow-y-auto">
                  {(subCategories[activeCategory] || []).map((sub, i) => (
                    <Link
                      key={i}
                      href="/subservices"
                      className="
              text-[#031225] hover:text-[#FF5100] 
              font-medium text-[16px] transition
            "
                    >
                      → {sub}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
          {/* ================= INDUSTRIES DROPDOWN (FIXED) ================= */}
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
        z-[9999]
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
