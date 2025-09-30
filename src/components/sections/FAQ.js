"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "What is the ServiceNow AI Platform?",
    answer:
      "ServiceNow AI Platform helps enterprises automate workflows, improve IT efficiency, and unify AI and data for smarter operations.",
  },
  {
    question: "How secure is the platform?",
    answer:
      "Our platform follows industry-leading security standards with data encryption, access controls, and continuous monitoring.",
  },
  {
    question: "Can I integrate it with existing tools?",
    answer:
      "Yes! ServiceNow AI Platform offers extensive APIs and connectors to integrate seamlessly with your current enterprise tools.",
  },
  {
    question: "Is it suitable for small businesses?",
    answer:
      "Absolutely. The platform is scalable and adaptable for businesses of all sizes, from startups to large enterprises.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gray-50 py-20 px-6 lg:px-20 text-[#031225]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-12">
          Frequently Asked <span className="text-[#FF5100]">Questions</span>
        </h2>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-2xl font-bold text-[#FF5100]">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 border-t border-gray-200 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
