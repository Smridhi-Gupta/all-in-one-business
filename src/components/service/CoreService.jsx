"use client";

import Link from "next/link";

const services = [
  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    title: "Franchise Digital Marketing",
    points: [
      "Local SEO for multi-location visibility",
      "Centralized campaign management",
      "Franchise marketing performance reporting",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    title: "Digital Marketing Strategy Development",
    points: [
      "Omnichannel strategy execution",
      "Advanced analytics & attribution",
      "Scalable automation systems",
    ],
  },
  {
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
    title: "Enterprise Digital Marketing",
    points: [
      "Ecommerce SEO & paid ads",
      "Social media & influencer marketing",
      "Email & marketing automation",
    ],
  },
];

export default function CoreService() {
  return (
    <section className="w-full py-14 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#031225] mb-3">
          Core Digital Marketing Services
        </h2>
        <p className="text-gray-500 text-md max-w-xl mx-auto mb-12">
          Comprehensive solutions tailored to your business needs and growth
          objectives
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className="
                bg-white border border-gray-200 rounded-2xl p-2.5 text-left
                shadow-sm hover:shadow-lg transition-all duration-300
                flex flex-col
              "
            >
              {/* IMAGE */}
              <div
                className="w-full h-56 rounded-xl mb-5 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${service.image})`,
                }}
              ></div>

              {/* HEADING */}
              <h3 className="font-bold text-[#031225] mb-4 text-lg px-2">
                {service.title}
              </h3>

              {/* POINTS */}
              <ul className="space-y-2 flex-grow">
                {service.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 text-sm flex items-start gap-2 px-2"
                  >
                    <span className="text-[#FF5100] text-3xl leading-none">
                      •
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* CTA BUTTON */}
              <div className="px-2 mt-5">
                <Link
                  href="/category"
                  className="
                    inline-block w-full text-center
                    bg-[#FF5100] text-white
                    py-2.5 rounded-lg text-sm font-medium
                    hover:bg-orange-500 transition
                  "
                >
                  Explore Services
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
