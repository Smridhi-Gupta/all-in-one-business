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

export default function Services() {
  const [activeTab, setActiveTab] = useState("IT");

  return (
    <section className="relative w-full text-black py-10 px-6 lg:px-20 bg-white overflow-hidden">
      {/* Tabs */}
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

      {/* Main Content - 3 sections */}
      <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto items-center mt-[-70px]">
        {/* Left: Heading + Subheading */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
            Run your enterprise IT on the{" "}
            <span className="text-[#FF5100]">ServiceNow AI Platform</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Bring your AI, data, and workflows together with automation for more
            efficient core IT functions.
          </p>
          <Button
            size="lg"
            className="bg-[#FF5100] hover:bg-[#dc4804] text-white font-semibold rounded-lg shadow-md"
          >
            Explore IT Solutions
          </Button>
        </div>

        {/* Center: Floating Card */}


        {/* Right: Solutions List centered vertically */}
        <div className="flex flex-col gap-4 justify-center">
          <ul className="space-y-3 text-lg">
            {[
              "IT Service Management",
              "IT Operations Management",
              "IT Asset Management",
              "Strategic Portfolio Management",
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-2 border-l-4 border-[#FF5100] pl-4 shadow-md p-3 rounded-md"
              >
                <span className="text-[#FF5100]">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

                <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md"
          >
            <Card className="rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-[#f9fafb]">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-[#FF5100] mb-4">
                  Incident summarized by AI agents
                </h3>
                <div className="space-y-4 text-gray-700">
                  <div className="border-l-4 border-[#FF5100] pl-4 shadow-md p-3 rounded-md">
                    <h4 className="font-medium text-black">Issue</h4>
                    <p className="text-gray-600 text-sm mt-1">
                      Employee is facing an issue with the Rewards Processing
                      application.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#00FFFF] pl-4 shadow-md p-3 rounded-md">
                    <h4 className="font-medium text-black">Actions Taken</h4>
                    <ul className="mt-2 space-y-2">
                      <li className="bg-[#FF5100]/10 p-2 rounded-md text-sm border border-[#FF5100]/30 shadow">
                        <strong>Issue escalated:</strong> Sent to IT for review.
                      </li>
                      <li className="bg-[#00FFFF]/10 p-2 rounded-md text-sm border border-[#00FFFF]/30 shadow">
                        <strong>Restart application:</strong> Suggested restart.
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
