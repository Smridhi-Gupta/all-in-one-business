"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const industries = [
  {
    title: "Cleaning",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Law",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Automotive",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Home Services",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Law",
    image:
      "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Cyber Security",
    image:
      "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Automotive",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=400&auto=format&fit=crop",
  },
  {
    title: "Home Services",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=400&auto=format&fit=crop",
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      
      {/* Heading */}
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#031225]">
          Explore Our Diverse Industrial
        </h2>
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#031225] mt-1">
          Expertise in California
        </h2>
      </div>

      {/* FULL WIDTH SLIDER */}
      <div className="w-full">
        <Swiper
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          speed={1100}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            0: { slidesPerView: 1.2 },
            480: { slidesPerView: 2.2 },
            768: { slidesPerView: 3.2 },
            1024: { slidesPerView: 4.2 },
            1280: { slidesPerView: 5.2 },
          }}
          className="px-0!"
        >
          {industries.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center text-center">

                {/* IMAGE */}
                <div className="w-70 h-50 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* TITLE */}
                <p className="mt-4 text-lg font-bold text-[#031225]">
                  {item.title}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
