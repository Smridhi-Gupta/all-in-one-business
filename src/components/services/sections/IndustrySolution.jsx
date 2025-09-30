"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function IndustrySolution() {
  const tabs = [
    "Banking",
    "Government",
    "Healthcare",
    "Automotive",
    "Technology Providers",
    "Retail",
  ];

  const [activeTab, setActiveTab] = useState("Banking");

  return (
    <section className="w-full bg-white py-20 px-6 lg:px-20 text-gray-900">
      {/* ✅ Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <h2 className="text-4xl lg:text-5xl font-bold leading-tight text-[#031225]">
          Explore ServiceNow IT solutions by industry
        </h2>
      </div>

      {/* ✅ Industry Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        <div className="flex flex-wrap justify-center gap-7 mb-16 rounded-full bg-gray-100 p-4 w-full max-w-6xl mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition shadow-sm ${
                activeTab === tab
                  ? "bg-[#FF5100] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-[#FF5100] hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section */}
        <div className="flex flex-col gap-6">
          <h3 className="text-3xl lg:text-4xl font-bold leading-snug text-[#031225]">
            Accelerate IT transformation in{" "}
            <span className="text-[#FF5100]">{activeTab}</span> while staying audit
            ready
          </h3>
          <p className="text-gray-700 text-lg">
            Consolidate IT service processes across {activeTab.toLowerCase()} for
            complete visibility. Drive IT innovation while achieving regulatory
            compliance.
          </p>

          <button className="bg-[#FF5100] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#031225] hover:text-white transition w-fit">
            Learn More
          </button>

          <div>
            <h4 className="font-semibold mb-3 text-[#031225] text-lg">
              Solution includes:
            </h4>
            <ul className="space-y-2 text-base">
              <li>
                <Link href="#" className="text-[#FF5100] hover:underline">
                  IT Service Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FF5100] hover:underline">
                  IT Operations Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#FF5100] hover:underline">
                  IT Asset Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section -> Gray Placeholder Box */}
        <div className="w-full h-72 md:h-96 rounded-2xl bg-gray-200 flex items-center justify-center shadow-lg">
          <span className="text-gray-600 text-lg">[{activeTab} Preview]</span>
        </div>
      </div>
    </section>
  );
}
