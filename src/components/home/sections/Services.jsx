// app/components/ServicesSection.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tabs = [
  "IT",
  "Risk and Security",
  "Human Resources",
  "CRM",
  "App Development",
  "Finance and Supply Chain",
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("IT");

  return (
    <section className="relative w-full  text-black py-24 px-6 lg:px-20 overflow-hidden bg-amber-200">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-16 ">
        <div className="flex flex-wrap justify-between gap-3 mb-16 rounded-4xl bg-amber-300 p-5 w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full font-medium transition shadow-sm ${
                activeTab === tab
                  ? "bg-gray-200 text-black"
                  : "bg-gray-800 text-white hover:bg-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        {/* Left: Text Section */}
        <div className="max-w-xl">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Run your enterprise IT on the{" "}
            <span className="text-[#FF5100]">ServiceNow AI Platform</span>
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Bring your AI, data, and workflows together with automation for more
            efficient core IT functions.
          </p>
          <Button
            size="lg"
            className="bg-[#FF5100] hover:bg-[#dc4804] text-black font-semibold rounded-lg shadow-md"
          >
            Explore IT Solutions
          </Button>

          {/* Solutions List */}
          <ul className="mt-8 space-y-3 text-lg">
            <li className="flex items-center gap-2">
              <span className="text-[#FF5100]">→</span> IT Service Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FF5100]">→</span> IT Operations Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FF5100]">→</span> IT Asset Management
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[#FF5100]">→</span> Strategic Portfolio
              Management
            </li>
          </ul>
        </div>

        {/* Right: Card & Person */}
        <div className="relative flex justify-center items-center">
          {/* AI Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <Card className="rounded-2xl shadow-xl overflow-hidden">
              <CardContent className="p-6 bg-white">
                <h3 className="text-xl font-semibold text-blue-900 mb-4">
                  Incident summarized by AI agents
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-800">Issue</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Employee is facing an issue with the Rewards Processing
                      application.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Actions Taken</h4>
                    <div className="mt-3 space-y-3">
                      <div className="bg-blue-50 p-3 rounded-md text-sm border border-blue-200">
                        <strong>Issue escalated:</strong> Issue was escalated to
                        IT to investigate.
                      </div>
                      <div className="bg-yellow-50 p-3 rounded-md text-sm border border-yellow-200">
                        <strong>Restart application:</strong> Restarting the
                        application was suggested.
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Floating Person + Buttons */}
          <div className="absolute -right-10 bottom-0 flex flex-col items-center gap-4">
            <img
              src="/woman.png" // replace with your image asset
              alt="Person"
              className="w-32 h-32 rounded-full border-4 border-[#FF5100] shadow-lg object-cover"
            />
            <Button className="bg-[#FF5100] hover:bg-[#dc4804] text-black font-semibold w-28 rounded-lg shadow-md">
              Contact
            </Button>
            <Button className="bg-[#FF5100] hover:bg-[#dc4804] text-black font-semibold w-28 rounded-lg shadow-md">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
