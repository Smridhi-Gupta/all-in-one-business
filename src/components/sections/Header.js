"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search } from "lucide-react";
import { usePathname } from "next/navigation";

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

  const pathname = usePathname();

  // ✅ Close menus on route change
  useEffect(() => {
    setShowServices(false);
    setShowIndustries(false);
  }, [pathname]);

  return (
    <header className="w-full bg-white shadow-sm fixed z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 h-[72px]">
        {/* LOGO */}
        <Link href="/">
          <Image src="/Logo.png" alt="Company Logo" width={80} height={20} />
        </Link>

        {/* NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[#031225] font-medium text-[15px]">
          <Link href="/" className="hover:text-[#FF5100]">Home</Link>

          {/* SERVICES */}
          <div className="relative" onMouseEnter={() => setShowServices(true)}>
            <div className="flex items-center gap-1 cursor-pointer">
              <span className="hover:text-[#FF5100]">Services</span>
              <ChevronDown size={15} />
            </div>

            {showServices && (
              <div
                className="
                  fixed left-0 top-[72px]
                  w-screen h-[60vh]
                  bg-white border-t border-gray-200
                  flex z-9999
                "
                onMouseLeave={() => setShowServices(false)}
              >
                {/* LEFT SIDEBAR */}
                <div className="w-[300px] bg-[#f3f3f3] p-4 space-y-2 overflow-y-auto">
                  {categories.map((item, i) => (
                    <div
                      key={i}
                      onMouseEnter={() => setActiveCategory(item)}
                      className={`px-4 py-2 rounded-md cursor-pointer transition font-bold
                        ${
                          activeCategory === item
                            ? "bg-white text-[#031225]"
                            : "hover:bg-white"
                        }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                {/* RIGHT CONTENT */}
                <div className="flex-1 px-12 py-6 grid grid-cols-3 gap-4 overflow-y-auto">
                  {subCategories[activeCategory] &&
                    Object.entries(subCategories[activeCategory]).map(
                      ([heading, items], i) => (
                        <div key={i}>
                          <Link
                            href="/service"
                            className="font-bold text-md text-[#031225] mb-2 flex items-center gap-2 hover:text-[#FF5100]"
                          >
                            <span className="w-3 h-3 bg-[#FF5100] rounded-full"></span>
                            {heading}
                          </Link>

                          {items.length > 0 && (
                            <ul className="space-y-0.5">
                              {items.map((item, j) => (
                                <li key={j}>
                                  <Link
                                    href=""
                                    className="text-[#555] hover:text-[#FF5100] text-sm"
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

          {/* INDUSTRIES */}
          <div
            className="relative"
            onMouseEnter={() => setShowIndustries(true)}
            onMouseLeave={() => setShowIndustries(false)}
          >
            <div className="flex items-center gap-1 cursor-pointer hover:text-[#FF5100]">
              <span>Industries</span>
              <ChevronDown size={15} />
            </div>

            {showIndustries && (
              <div className="absolute top-[42px] left-0 w-[260px] bg-[#fafafa] shadow-md border z-9999">
                <ul>
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
                      className="px-5 py-3 border-b hover:bg-gray-100 hover:text-[#FF5100]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <Link href="/about" className="hover:text-[#FF5100]">About Us</Link>
          <Link href="/contact" className="hover:text-[#FF5100]">Contact Us</Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Search size={18} className="cursor-pointer hover:text-[#FF5100]" />
          <Link
            href="/login"
            className="text-sm px-4 py-1.5 border rounded-md hover:bg-gray-100"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
