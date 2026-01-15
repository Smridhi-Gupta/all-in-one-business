"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative w-full bg-white overflow-hidden py-12 md:py-14">
      {/* ===== TRUSTED BY BRANDS ===== */}
      <div className="flex flex-col items-center mb-16 md:mb-24 px-4">
        <p className="text-sm md:text-base font-bold text-gray-700 mb-6 text-center">
          Trusted by brands who value results
        </p>

        <div className="relative w-full flex justify-center">
          <div className="bg-[#0B1221] w-full max-w-5xl rounded-2xl shadow-lg relative z-10 overflow-hidden">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              speed={4000}
              loop
              slidesPerView="auto"
              className="w-full"
            >
              {partners.map((logo, i) => (
                <SwiperSlide
                  key={i}
                  className="!w-[120px] sm:!w-[150px] md:!w-[180px] flex justify-center items-center py-4"
                >
                  <Image
                    src={logo}
                    alt="partner logo"
                    width={140}
                    height={50}
                    className="object-contain opacity-90 w-auto h-8 sm:h-10"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[70%] md:w-[62%] h-16 bg-[#FF5100] rounded-2xl z-0"></div>
        </div>
      </div>

      {/* ===== INFINITY BG (hide on mobile) ===== */}
      <div className="absolute inset-0 justify-center items-center translate-y-24 hidden md:flex">
        <Image
          src="/infinity.png"
          alt="background"
          width={1300}
          height={1400}
          className="object-cover opacity-100"
        />
      </div>

      {/* ===== HEADER ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6"
      >
        <span className="inline-flex items-center gap-2 bg-white border border-gray-400 font-medium px-3 py-1 rounded-full text-sm">
          <span className="w-2 h-2 rounded-full bg-[#FF5100]"></span>
          Services
        </span>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#031225] leading-tight">
            Comprehensive Digital <br /> Marketing Services
          </h2>

          <div className="mt-4 md:mt-0 max-w-md text-gray-500 text-sm">
            Tailored solutions designed for measurable growth and impact.
            <br />
            <button className="mt-3 px-5 py-2 bg-[#FF5100] text-white rounded-full text-sm font-medium hover:bg-orange-500">
              Explore more
            </button>
          </div>
        </div>
      </motion.div>

      {/* ===== SERVICE CARDS ===== */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const position = (index % 3) + 1;
          const marginClass =
            typeof window !== "undefined" && window.innerWidth >= 1024
              ? position === 2
                ? "mt-8"
                : "-mt-6"
              : "";

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              whileHover={{ y: -6, scale: 1.01 }}
              className={`
                group relative rounded-2xl
                shadow-[0_10px_30px_rgba(0,0,0,0.18)]
                p-6 flex flex-col justify-between
                bg-white text-[#031225]
                hover:bg-[#031225] hover:text-white
                transition-all duration-300 cursor-pointer
                min-h-[360px] md:h-[420px]
                ${marginClass}
              `}
            >
              <div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p className="mb-6 text-gray-600 group-hover:text-gray-300 transition text-sm sm:text-base">
                  {service.desc}
                </p>

                <button className="inline-flex items-center gap-2 bg-[#FF5100] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-orange-500">
                  Learn more →
                </button>
              </div>

              <div className="mt-6 flex justify-end">
                <Image
                  src={`/services-${index + 1}.png`}
                  alt={service.title}
                  width={260}
                  height={100}
                  className="object-contain w-[200px] sm:w-[240px] md:w-[280px]"
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
