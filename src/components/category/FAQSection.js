"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What Is Digital Marketing And How Can It Help My Business?",
    a: "Digital marketing includes all online strategies used to attract, engage, and convert customers. It helps grow your online visibility, increase traffic, and generate leads or sales.",
  },
  {
    q: "How Do I Choose Which Digital Marketing Services I Need?",
    a: "We help identify the right services based on your business goals, target audience, and budget.",
  },
  {
    q: "How Long Does It Take To See Results From Digital Marketing?",
    a: "SEO takes time, while paid campaigns show quicker results. A balanced strategy works best.",
  },
  {
    q: "Can I Track The Performance Of My Digital Marketing Campaigns?",
    a: "Yes, we provide detailed performance reports and analytics dashboards.",
  },
  {
    q: "Do You Work With Small Businesses Or Only Large Companies?",
    a: "We work with startups, small businesses, and large enterprises across many industries.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-start">
        {/* LEFT SIDE — FAQ */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031225] mb-6 sm:mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-md overflow-hidden border border-gray-100"
              >
                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className="
                    w-full bg-[#f2f8ff] text-left 
                    px-4 sm:px-6 py-4 sm:py-5 
                    font-semibold text-sm sm:text-base
                    flex justify-between items-center 
                    transition cursor-pointer
                    hover:bg-[#eaf3ff]
                  "
                >
                  {faq.q}

                  {openIndex === i ? (
                    <ChevronUp
                      size={20}
                      className="text-gray-600 flex-shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={20}
                      className="text-gray-600 flex-shrink-0"
                    />
                  )}
                </button>

                {/* ANSWER (animated height) */}
                <div
                  className={`
                    overflow-hidden transition-all duration-300 ease-in-out
                    ${
                      openIndex === i
                        ? "max-h-40 opacity-100"
                        : "max-h-0 opacity-0"
                    }
                  `}
                >
                  <div className="px-4 sm:px-6 py-3 sm:py-5 text-gray-700 text-sm sm:text-[15px] leading-relaxed bg-white">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE — IMAGE */}
        <div className="w-full h-[260px] sm:h-[360px] md:h-[520px] rounded-2xl overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
            alt="FAQ illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
