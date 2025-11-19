"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    rating: 5,
    text: "From the first wireframe to the final site, Embtel delivered a flawless experience. Fast, modern, and built for results.",
    name: "James Kerr",
    role: "CEO",
  },
  {
    rating: 5,
    text: "We saw immediate ROI on our Google Ads. Embtel’s campaign structure, targeting, and copy were all top-notch.",
    name: "Laura Mitchell",
    role: "Co-Founder",
  },
  {
    rating: 5,
    text: "Their social media team knows how to capture attention. Our engagement rates have tripled since we started.",
    name: "Ryan Chen",
    role: "CMO",
  },
  {
    rating: 5,
    text: "From the first wireframe to the final site, Embtel delivered a flawless experience. Fast, modern, and built for results.",
    name: "James Kerr",
    role: "CEO",
  },
  {
    rating: 4,
    text: "We saw immediate ROI on our Google Ads. Embtel’s campaign structure, targeting, and copy were all top-notch.",
    name: "Laura Mitchell",
    role: "Co-Founder",
  },
  {
    rating: 5,
    text: "Their social media team knows how to capture attention. Our engagement rates have tripled since we started.",
    name: "Ryan Chen",
    role: "CMO",
  },
];

export default function TestimonialsSwiper() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#031225]">Testimonials</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Embtel Solutions transformed our vision into reality with their
          expertise, creativity, and dedication—truly a partner you can trust.
        </p>

        {/* Swiper */}
        <div className="py-10">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500 }}
            loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-lg px-8 py-10 text-left h-full">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <span key={i} className="text-[#FF5100] text-2xl">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-gray-700 leading-relaxed">{t.text}</p>

                  {/* User Row */}
                  <div className="flex gap-4 items-center mt-8">
                    {/* GREY PLACEHOLDER CIRCLE */}
                    <div className="w-14 h-14 rounded-full bg-gray-300"></div>

                    {/* Name + Role */}
                    <div>
                      <h4 className="font-bold text-lg text-[#031225]">
                        {t.name}
                      </h4>
                      <p className="text-gray-500 text-sm">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
