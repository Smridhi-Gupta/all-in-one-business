import Image from "next/image";
import React from "react";

export default function Impact() {
  return (
    <section className="bg-gray-50 text-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1 - ServiceNow makes the world work better */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              ServiceNow makes the world work better for everyone
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              By putting people at the center of digital transformation,
              ServiceNow helps organizations unlock productivity, improve
              experiences, and accelerate innovation. Our platform unifies
              business processes, delivering the outcomes that matter most.
            </p>
          </div>

          {/* Right Circular Image */}
          <div className="flex justify-center">
            <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-lg">
              <Image
                src="/impact-img.png" // ⚡ replace with your cropped screenshot image
                alt="Impact section"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Section 2 - Our Commitments */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Commitments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            We are committed to building a more sustainable, equitable, and
            ethical future. From advancing environmental goals to supporting
            communities and promoting responsible innovation, ServiceNow is
            driving change that benefits everyone.
          </p>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src="/commitment-1.png" // ⚡ replace with your screenshot image
                alt="Commitment 1"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
                <p className="text-gray-600 text-sm">
                  We are working to reduce environmental impact by advancing
                  climate goals and enabling sustainable business practices.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src="/commitment-2.png" // ⚡ replace with your screenshot image
                alt="Commitment 2"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">Communities</h3>
                <p className="text-gray-600 text-sm">
                  We empower communities through education, job training, and
                  technology opportunities that make a real impact.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <Image
                src="/commitment-3.png" // ⚡ replace with your screenshot image
                alt="Commitment 3"
                width={400}
                height={250}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold mb-3">
                  Ethical Innovation
                </h3>
                <p className="text-gray-600 text-sm">
                  We are committed to creating technology responsibly, ensuring
                  fairness, transparency, and trust in everything we build.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}