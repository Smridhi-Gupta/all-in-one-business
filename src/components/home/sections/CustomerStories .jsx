"use client";
import React from "react";
import Slider from "react-slick";

const customers = [
  {
    company: "TechCorp",
    story: "Using our platform, TechCorp scaled globally while reducing costs.",
  },
  {
    company: "EduSmart",
    story: "Empowering students and teachers with seamless digital classrooms.",
  },
  {
    company: "MediLife",
    story: "Delivering healthcare with speed, security, and compliance.",
  },
  {
    company: "RetailX",
    story: "Revolutionized retail with personalized customer experiences.",
  },
  {
    company: "Finova",
    story: "Finova transformed financial services with secure, real-time data.",
  },
];

const CustomerStories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2, // ✅ wider cards = show 2 instead of 3
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // Tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="w-full bg-white py-20 px-6 text-[#031225]">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          When our <span className="text-[#FF5100]">customers work</span>, the world works
        </h2>

        {/* Slider */}
        <Slider {...settings}>
          {customers.map((c, i) => (
            <div key={i} className="px-4">
              <div className="bg-gray-100 rounded-2xl p-10 min-h-[260px] flex flex-col justify-between shadow-md hover:shadow-lg transition w-full">
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  “{c.story}”
                </p>
                <h4 className="font-semibold text-[#FF5100] text-xl">{c.company}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerStories;
