import React from "react";

export default function Innovations() {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* Section 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#0F3069]">
              When innovation works, <br /> the world works
            </h2>
            <p className="text-lg text-[#0F3069] mb-6">
              ServiceNow makes the world work better for everyone. Our
              cloud-based platform and solutions help digitize and unify
              organizations so they can find smarter, faster, better ways to
              make work flow.
            </p>
          </div>

          {/* Right Placeholder */}
          <div className="flex justify-center">
            <div className="w-full md:w-[28rem] h-72 md:h-80 bg-gray-300 rounded-xl flex items-center justify-center">
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Placeholder */}
          <div className="flex justify-center order-1 md:order-none">
            <div className="w-full md:w-[28rem] h-72 md:h-80 bg-gray-300 rounded-xl flex items-center justify-center">
            </div>
          </div>

          {/* Right Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-[#0F3069]">
              When our customers work, <br /> the world works
            </h2>
            <p className="text-lg text-[#0F3069]">
              Our customers are changing the world every day. They rely on
              ServiceNow to help them transform the way people work. Together,
              we’re building a better future—one workflow at a time.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
