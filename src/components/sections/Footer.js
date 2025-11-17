"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#031225] text-gray-300 pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ===== Left Column (Logo + About) ===== */}
        <div>
          <Image
            src="/Logo.png"
            alt="Company Logo"
            width={120}
            height={120}
            className="mb-6"
          />

          <p className="text-gray-300 text-[14px] leading-relaxed mb-6">
            Embtel Solutions Ltd. delivers superior web design, development, and
            digital marketing services tailored to each client’s unique business
            needs, ensuring long-term success. Customer satisfaction is at the
            heart of everything we do. We provide specialized support and expert
            guidance at every stage, helping our clients achieve their goals
            with confidence and clarity.
          </p>

          {/* ===== Social Icons ===== */}
          <div className="flex gap-3">
            <a
              href="#"
              className="bg-[#1A1E2E] hover:bg-[#FF5100] p-2.5 rounded-full transition-all"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-[#1A1E2E] hover:bg-[#FF5100] p-2.5 rounded-full transition-all"
            >
              <Twitter size={18} />
            </a>
            <a
              href="#"
              className="bg-[#1A1E2E] hover:bg-[#FF5100] p-2.5 rounded-full transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="bg-[#1A1E2E] hover:bg-[#FF5100] p-2.5 rounded-full transition-all"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* ===== Column 2: Services ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link href="#">Digital Marketing</Link></li>
            <li><Link href="#">Development</Link></li>
            <li><Link href="#">PPC</Link></li>
            <li><Link href="#">DA & AI</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">SEO</Link></li>
            <li><Link href="#">Social Media</Link></li>
            <li><Link href="#">Web Design</Link></li>
            <li><Link href="#">Immigration Services</Link></li>
          </ul>
        </div>

        {/* ===== Column 3: Service Locations ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">
            Service Locations
          </h3>
          <ul className="space-y-2 text-[15px]">
            <li>Fremont</li>
            <li>San Jose</li>
            <li>Oakland</li>
            <li>San Mateo</li>
            <li>San Francisco</li>
            <li>Palo Alto</li>
          </ul>
        </div>

        {/* ===== Column 4: Company ===== */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-[15px]">
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Industries</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Security</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* ===== Bottom Bar ===== */}
      <div className="border-t border-white/10 mt-10 pt-5 text-center text-sm text-gray-400">
        Copyright © {new Date().getFullYear()} Embtel Solutions - All Rights
        Reserved. Designed by{" "}
        <span className="text-[#FF5100] font-semibold cursor-pointer hover:underline">
          Embtel Solutions, Inc.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
