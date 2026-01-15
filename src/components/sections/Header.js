"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

/* ================= DATA ================= */
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
  },

  Immigration: {
    Immigration: [
      { label: "H1-B", link: "/h1B" },
      { label: "Change of Status", link: "/change-of-status" },
    ],
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
  const pathname = usePathname();

  const [activeCategory, setActiveCategory] = useState("IT");
  const [showServices, setShowServices] = useState(false);
  const [showIndustries, setShowIndustries] = useState(false);

  /* Mobile states */
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileCategory, setMobileCategory] = useState(null);
  const [mobileSub, setMobileSub] = useState(null);

  /* Close menus on route change */
  useEffect(() => {
    setShowServices(false);
    setShowIndustries(false);
    setMobileMenu(false);
  }, [pathname]);

  return (
    <header className="fixed w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto h-[72px] flex items-center justify-between px-6">
        {/* LOGO */}
        <Link href="/">
          <Image src="/Logo.png" alt="Logo" width={80} height={20} />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8 text-[#031225] font-medium text-[15px]">
          <Link href="/">Home</Link>

          {/* SERVICES DESKTOP */}
          <div className="relative" onMouseEnter={() => setShowServices(true)}>
            <div className="flex items-center gap-1 cursor-pointer">
              <span>Services</span>
              <ChevronDown size={14} />
            </div>

            {showServices && (
              <div
                className="fixed left-0 top-[72px] w-screen h-[60vh] bg-white border-t flex z-50"
                onMouseLeave={() => setShowServices(false)}
              >
                {/* LEFT */}
                <div className="w-[300px] bg-[#f3f3f3] p-4 space-y-2 overflow-y-auto">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onMouseEnter={() => setActiveCategory(cat)}
                      className={`px-4 py-2 rounded-md font-bold cursor-pointer ${
                        activeCategory === cat ? "bg-white" : "hover:bg-white"
                      }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>

                {/* RIGHT */}
                <div className="flex-1 px-12 py-6 grid grid-cols-3 gap-4 overflow-y-auto">
                  {Object.entries(subCategories[activeCategory] || {}).map(
                    ([heading, items]) => (
                      <div key={heading}>
                        <Link
                          href="/service"
                          className="font-bold mb-2 flex items-center gap-2 hover:text-[#FF5100]"
                        >
                          <span className="w-3 h-3 bg-[#FF5100] rounded-full shrink-0" />
                          <span>{heading}</span>
                        </Link>

                        <ul className="space-y-2">
                          {items.map((item, i) =>
                            typeof item === "string" ? (
                              <li key={i} className="text-sm text-gray-600">
                                {item}
                              </li>
                            ) : (
                              <li key={i}>
                                <Link
                                  href={item.link}
                                  className="text-sm text-gray-600 hover:text-[#FF5100]"
                                >
                                  {item.label}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
          </div>

          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Search size={18} />
          <Link
            href="/login"
            className="hidden md:block border px-4 py-1.5 rounded-md"
          >
            Login
          </Link>

          {/* MOBILE BURGER */}
          <button className="md:hidden" onClick={() => setMobileMenu(true)}>
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}
      {mobileMenu && (
        <div className="fixed inset-0 bg-white z-9999 overflow-y-auto">
          <div className="flex justify-between items-center px-6 h-[72px] border-b">
            <Image src="/Logo.png" alt="Logo" width={80} height={20} />
            <button onClick={() => setMobileMenu(false)}>
              <X size={26} />
            </button>
          </div>

          <div className="p-4 space-y-3">
            <Link href="/" className="block py-2">
              Home
            </Link>

            {/* MOBILE SERVICES */}
            <div>
              <button
                onClick={() =>
                  setMobileCategory(
                    mobileCategory === "Services" ? null : "Services"
                  )
                }
                className="w-full flex justify-between py-2 font-semibold"
              >
                Services
                <ChevronDown size={16} />
              </button>

              {mobileCategory === "Services" && (
                <div className="pl-4 space-y-2">
                  {categories.map((cat) => (
                    <div key={cat}>
                      <button
                        onClick={() =>
                          setMobileSub(mobileSub === cat ? null : cat)
                        }
                        className="w-full flex justify-between py-1 font-medium"
                      >
                        {cat}
                        <ChevronDown size={14} />
                      </button>

                      {mobileSub === cat && (
                        <div className="pl-4 space-y-1 text-sm text-gray-600">
                          {Object.entries(subCategories[cat]).map(
                            ([_, items]) =>
                              items.map((item, i) =>
                                typeof item === "string" ? (
                                  <div key={i}>{item}</div>
                                ) : (
                                  <Link
                                    key={i}
                                    href={item.link}
                                    className="block text-[#FF5100]"
                                  >
                                    {item.label}
                                  </Link>
                                )
                              )
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="block py-2">
              About Us
            </Link>
            <Link href="/contact" className="block py-2">
              Contact Us
            </Link>
            <Link href="/login" className="block py-2">
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
