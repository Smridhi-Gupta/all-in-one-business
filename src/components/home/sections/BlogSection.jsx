"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const blogs = [
  {
    id: 1,
    date: "07",
    month: "Nov",
    title: "7 Costly SEO Mistakes That Lower Your Google Rankings",
    image: "/blog.jpg",
  },
  {
    id: 2,
    date: "06",
    month: "Nov",
    title: "Local SEO Secrets for 2025: Boost Your Google Maps Visibility Fast",
    image: "/blog.jpg",
  },
  {
    id: 3,
    date: "04",
    month: "Nov",
    title:
      "Franchise Social Media Management: How to Handle Multiple Profiles Easily",
    image: "/blog.jpg",
  },
];

const BlogSection = () => {
  return (
    <section className="relative w-full bg-white py-20 overflow-hidden">
      {/* ===== Background Pattern ===== */}
      <div className="absolute inset-0 -z-10 opacity-80">
        <Image
          src="/blog.jpg"
          alt="blog background"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        {/* ===== Badge ===== */}
        <div className="flex justify-center mb-4">
          <div className="flex items-center gap-2 bg-[#fff] text-[#031225] border border-gray-200 px-4 py-1 rounded-full text-sm font-medium shadow-sm">
            <span className="w-2 h-2 bg-[#FF5100] rounded-full"></span> Blog
          </div>
        </div>

        {/* ===== Heading ===== */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#031225] mb-14">
          Find Your Answers Here
        </h2>

        {/* ===== Blog Cards ===== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 place-items-center">
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-[#031225] text-white rounded-2xl overflow-hidden shadow-lg max-w-sm w-full"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48">
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                {/* Date Badge */}
                <div className="absolute bottom-[-18px] left-6 bg-[#FF5100] text-white text-center rounded-full w-[55px] h-[55px] flex flex-col items-center justify-center shadow-md">
                  <span className="text-lg font-bold leading-none">
                    {blog.date}
                  </span>
                  <span className="text-[10px] uppercase font-medium">
                    {blog.month}
                  </span>
                </div>
              </div>

              {/* Blog Content */}
              <div className="pt-8 pb-6 px-6 text-left">
                <h3 className="text-base font-semibold mb-4 leading-snug">
                  {blog.title}
                </h3>
                <button className="flex items-center gap-2 text-sm font-medium text-white/80 hover:text-[#FF5100] transition-colors">
                  Read more <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
