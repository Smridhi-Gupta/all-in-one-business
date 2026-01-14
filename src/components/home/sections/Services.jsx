"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

/* === SWIPER IMPORTS === */
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Services = () => {
  const services = [
    {
      title: "Social Media Marketing",
      desc: "Leverage the power of popular social media platforms to enhance brand visibility and engagement.",
    },
    {
      title: "Search Engine Optimization",
      desc: "Enhance your online visibility with our expert Search Engine Optimization (SEO) services.",
      dark: true,
    },
    {
      title: "PPC Advertising",
      desc: "Implement highly targeted advertising campaigns to reach your audience at the right moment.",
    },
    {
      title: "Content Marketing",
      desc: "Develop and distribute valuable, relevant, and consistent content to attract and engage your target audience.",
    },
    {
      title: "Email Marketing",
      desc: "Cultivate direct communication with your audience through personalized and targeted email campaigns.",
    },
    {
      title: "Technology Integration",
      desc: "Seamlessly integrate cutting-edge technology solutions into your business operations.",
    },
  ];

  /* ===== PARTNERS ===== */
  const partners = [
    "/partners/partner-1.webp",
    "/partners/p-2.webp",
    "/partners/p-3.webp",
    "/partners/p-4.webp",
    "/partners/p-5.webp",
    "/partners/p-6.webp",
    "/partners/p-7.webp",
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-10">
      {/* ===== Trusted by Brands ===== */}
      <div className="flex flex-col items-center mb-20">
        <p className="text-base font-bold text-gray-700 mb-6">
          Trusted by brands who value results
        </p>

        <div className="relative w-full flex justify-center">
          {/* BLACK BOX */}
          <div className="bg-[#0B1221] w-[90%] max-w-5xl px-5 py-4 rounded-2xl shadow-lg relative z-10">
            <Swiper
              modules={[Autoplay]}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
              }}
              speed={4000}
              loop={true}
              slidesPerView={2}
              spaceBetween={40}
              breakpoints={{
                640: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className="flex items-center"
            >
              {partners.map((logo, i) => (
                <SwiperSlide key={i} className="flex justify-center items-center">
                  <Image
                    src={logo}
                    alt="partner logo"
                    width={140}
                    height={50}
                    className="object-contain opacity-90 rounded-2xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* ORANGE SHADOW BLOCK */}
          <div className="absolute bottom-[-18px] left-1/2 -translate-x-1/2 w-[62%] h-20 bg-[#FF5100] rounded-2xl z-0"></div>
        </div>
      </div>

      {/* ===== Infinity Background ===== */}
      <div className="absolute inset-0 flex justify-center items-center translate-y-16">
        <Image
          src="/infinity.png"
          alt="infinity background"
          width={1350}
          height={1500}
          className="object-cover opacity-100 saturate-150"
        />
      </div>

      {/* ===== Section Header ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <span className="inline-flex items-center gap-2 bg-white border border-gray-400 font-medium px-2 py-0.5 rounded-full">
          <span className="w-2 h-2 rounded-full bg-[#FF5100]"></span>
          Services
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-[#031225]">
            Comprehensive Digital <br /> Marketing Services
          </h2>

          <div className="mt-4 md:mt-0 max-w-md text-gray-500 text-sm">
            Tailored Solutions for Your Business Growth. Discover expert digital
            marketing solutions designed for performance and impact.
            <br />
            <button className="mt-3 px-5 py-2 bg-[#FF5100] text-white rounded-full text-sm font-medium hover:bg-orange-500 cursor-pointer">
              Explore more
            </button>
          </div>
        </div>
      </div>

      {/* ===== SERVICE CARDS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => {
          const position = (index % 3) + 1;
          const marginClass = position === 2 ? "mt-8" : "-mt-6";

          return (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className={`relative h-[420px] rounded-2xl shadow-[0_8px_25px_rgba(0,0,0,0.15)]
              p-6 flex flex-col justify-between ${marginClass}
              ${
                service.dark
                  ? "bg-[#031225] text-white"
                  : "bg-white text-[#031225]"
              }`}
            >
              <div>
                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                <p
                  className={`mb-6 ${
                    service.dark ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>

                <button className="inline-flex items-center gap-2 bg-[#FF5100] text-white px-7 py-1.5 rounded-full text-sm font-medium hover:bg-orange-500 cursor-pointer">
                  Learn more <span className="font-bold">»</span>
                </button>
              </div>

              <div className="mt-auto flex justify-end">
                <Image
                  src={`/services-${index + 1}.png`}
                  alt={service.title}
                  width={320}
                  height={100}
                  className="object-contain"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
