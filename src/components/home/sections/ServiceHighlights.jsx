import React from "react";
import { Sparkles, Zap, Globe } from "lucide-react"; // using lucide icons

const highlights = [
  {
    icon: <Sparkles size={36} className="text-[#FF5100]" />,
    title: "Smart Automation",
    desc: "Streamline processes and save time with AI-driven automation tailored for your business.",
  },
  {
    icon: <Zap size={36} className="text-[#FF5100]" />,
    title: "Faster Growth",
    desc: "Accelerate business outcomes with scalable digital solutions and innovation.",
  },
  {
    icon: <Globe size={36} className="text-[#FF5100]" />,
    title: "Global Reach",
    desc: "Expand your business reach with powerful tools designed for worldwide scalability.",
  },
];

const ServiceHighlights = () => {
  return (
    <section className="w-full bg-white py-20 px-6 text-gray-900">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          AI Platform{" "}
          <span className="text-[#FF5100]">
            For Business Transformation
          </span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover how our solutions transform the way your business works with
          efficiency, speed, and innovation.
        </p>
      </div>

      {/* Highlight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {highlights.map((item, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 hover:border-[#FF5100] hover:shadow-orange-200 transition-all duration-300"
          >
            <div className="mb-6 flex justify-center">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceHighlights;
