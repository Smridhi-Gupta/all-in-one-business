"use client";

const services = [
  {
    imageBg: "bg-[#FF5100]",
    title: "Digital Marketing Strategy",
    points: [
      "Audience & market research",
      "Channel selection & budget planning",
      "Goal setting & KPI tracking",
    ],
  },
  {
    imageBg: "bg-[#031225]",
    title: "Franchise Digital Marketing",
    points: [
      "Local SEO for multi-location visibility",
      "Centralized campaign management",
      "Franchise marketing performance reporting",
    ],
  },
  {
    imageBg: "bg-[#FF5100]",
    title: "Enterprise Digital Marketing",
    points: [
      "Omnichannel strategy execution",
      "Advanced analytics & attribution",
      "Scalable automation systems",
    ],
  },
  {
    imageBg: "bg-[#031225]",
    title: "Ecommerce Digital Marketing",
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
          Comprehensive solutions tailored to your business needs and growth objectives
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {services.map((service, i) => (
            <div
              key={i}
              className="
                bg-white border border-gray-200 rounded-2xl p-6 text-left
                shadow-sm hover:shadow-lg transition-all duration-300
              "
            >
              {/* ✅ IMAGE PLACEHOLDER (COLORED DIV) */}
              <div
                className={`
                  w-full h-32 rounded-xl mb-5
                  ${service.imageBg}
                `}
              ></div>

              {/* ✅ HEADING */}
              <h3 className="font-bold text-[#031225] mb-4 text-lg md:text-lg">
                {service.title}
              </h3>

              {/* ✅ POINTS */}
              <ul className="space-y-2">
                {service.points.map((p, idx) => (
                  <li
                    key={idx}
                    className="text-gray-600 text-sm flex items-start gap-2"
                  >
                    <span className="text-[#FF5100] text-2xl leading-none">•</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
