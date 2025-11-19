"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What Is Digital Marketing And How Can It Help My Business?",
    a: "Digital marketing includes all online strategies used to attract, engage, and convert customers. It helps grow your online visibility, increase traffic, and generate leads or sales."
  },
  {
    q: "How Do I Choose Which Digital Marketing Services I Need?",
    a: "We help identify the right services based on your business goals, target audience, and budget."
  },
  {
    q: "How Long Does It Take To See Results From Digital Marketing?",
    a: "SEO takes time, while paid campaigns show quicker results. A balanced strategy works best."
  },
  {
    q: "Can I Track The Performance Of My Digital Marketing Campaigns?",
    a: "Yes, we provide detailed performance reports and analytics dashboards."
  },
  {
    q: "Do You Work With Small Businesses Or Only Large Companies?",
    a: "We work with startups, small businesses, and large enterprises across many industries."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-[#031225] mb-10">FAQs</h2>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i}>
              {/* QUESTION ROW */}
              <button
                onClick={() => toggle(i)}
                className="
                  w-full bg-[#f2f8ff] text-left 
                  px-6 py-5 rounded-sm 
                  font-bold text-[17px] 
                  flex justify-between items-center cursor-pointer
                "
              >
                {faq.q}

                {openIndex === i ? (
                  <ChevronUp size={22} className="text-gray-700" />
                ) : (
                  <ChevronDown size={22} className="text-gray-700" />
                )}
              </button>

              {/* ANSWER */}
              {openIndex === i && (
                <div className="px-10 py-6 text-gray-700 text-[15px] text-left leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
