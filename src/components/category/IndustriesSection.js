"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const industries = [
  { title: "Cleaning" },
  { title: "Law" },
  { title: "Cyber Security" },
  { title: "Automotive" },
  { title: "Home Services" },
    { title: "Law" },
  { title: "Cyber Security" },
  { title: "Automotive" },
  { title: "Home Services" },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#031225]">
          Explore Our Diverse Industrial
        </h2>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#031225] mt-1">
          Expertise in California
        </h2>

        {/* SLIDER */}
        <div className="mt-16">
          <Swiper
            spaceBetween={30}
            autoplay={{ delay: 2500 }}
            speed={1100}
            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              0: { slidesPerView: 1 },
              480: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
              1280: { slidesPerView: 5 },
            }}
          >
            {industries.map((item, i) => (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center text-center">

                  {/* GREY PLACEHOLDER BOX */}
                  <div
                    className="
                      w-40 h-20 
                      bg-gray-300 
                      rounded-md
                    "
                  ></div>

                  {/* TITLE */}
                  <p className="mt-4 text-[16px] font-semibold text-[#031225]">
                    {item.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
