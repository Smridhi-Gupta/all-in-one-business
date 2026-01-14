import React from "react";

const ContactBanner = () => {
  return (
    <section className="w-full bg-gray-900 py-10 px-6 lg:px-20">
      <div className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Text Content */}
        <h2 className="text-3xl lg:text-4xl font-bold text-white">
          Let’s put <span className="text-[#FF5100]">AI</span> to work in IT
        </h2>
        <p className="text-gray-300 text-lg">
          Our experts can help you get started evaluating the solution that
          best fits your needs. Schedule a custom demo for IT to see how it
          would work in your specific environment.
        </p>

        {/* Contact Button with blinking effect */}
        <button className="bg-[#FF5100] text-white font-semibold px-6 py-3 rounded-full text-lg hover:bg-orange-600 transition animate-pulse">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default ContactBanner;
