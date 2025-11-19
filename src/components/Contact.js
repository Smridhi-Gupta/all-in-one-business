"use client";
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Facebook,
  Instagram,
  Linkedin,
  X,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="w-full mt-25">
      {/* TOP HEADER */}
      <div className="bg-[#031225] py-30 text-center text-white">
        <h1 className="text-6xl font-semibold">Contact Us</h1>
        <p className="mt-2 text-sm">
          Home <span className="mx-2">→</span> Contact Us
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="w-[90%] max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-20 px-40">
        {/* LEFT SECTION */}
        <div className="pr-8">
          <h2 className="text-[38px] font-bold text-[#031225] leading-tight">
            Embtel Solutions Digital <br /> Marketing Agency
          </h2>

          <p className="text-gray-600 mt-5 text-[16px] max-w-[520px] leading-relaxed">
            Embtel Solutions is your one-stop destination for comprehensive
            solutions that drive business growth. We empower you with innovative
            technology, security, and digital expertise to ensure success in
            today’s competitive landscape.
          </p>

          <div className="mt-10 space-y-6 text-[16px]">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-[#031225] p-2 rounded-full flex items-center justify-center">
                <Phone className="text-white w-5 h-5" />
              </div>
              <span>(510) 962-7900</span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-[#031225] p-2 rounded-full flex items-center justify-center">
                <Mail className="text-white w-5 h-5" />
              </div>
              <span>info@embtelsolutions.com</span>
            </div>

            {/* Address 1 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#031225] p-2 rounded-full flex items-center justify-center">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <span>
                39159, Paseo Padre Pkwy, Suite #119, Fremont, CA 94538
              </span>
            </div>

            {/* Address 2 */}
            <div className="flex items-center gap-4">
              <div className="bg-[#031225] p-2 rounded-full flex items-center justify-center">
                <MapPin className="text-white w-5 h-5" />
              </div>
              <span>
                SCO-12, A-Block, 2nd Floor, CCC, VIP Road, Zirakpur, Punjab,
                India - 140603
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10">
            <X className="w-6 h-6 text-black cursor-pointer" />
            <Facebook className="w-6 h-6 text-[#1877F2] cursor-pointer" />
            <Instagram className="w-6 h-6 text-[#E1306C] cursor-pointer" />
            <Linkedin className="w-6 h-6 text-[#0A66C2] cursor-pointer" />
          </div>
        </div>

        {/* RIGHT SECTION — FORM */}
        <div className="pl-8">
          <div className="text-center mb-10">
            <img src="/embtel-logo.png" alt="embtel" className="mx-auto w-40" />
          </div>

          {/* Form Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-semibold text-[#031225]">
                First Name *
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="First Name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#031225]">
                Last Name *
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="Last Name"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#031225]">
                Email Id *
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="Email"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#031225]">
                Contact Number
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="🇮🇳 Phone"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#031225]">
                Company/Organization
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="Organization"
              />
            </div>

            <div>
              <label className="text-sm font-semibold text-[#031225]">
                Website
              </label>
              <input
                className="w-full border p-2 mt-1 rounded"
                placeholder="https://example.com"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-[#031225]">
                Service Required *
              </label>
              <select className="w-full border p-2 mt-1 rounded">
                <option>Select one</option>
                <option>SEO</option>
                <option>Web Development</option>
                <option>Branding</option>
                <option>Social Media Marketing</option>
              </select>
            </div>

            <div className="sm:col-span-2">
              <label className="text-sm font-semibold text-[#031225]">
                Message
              </label>
              <textarea
                rows="4"
                className="w-full border p-2 mt-1 rounded"
                placeholder="Leave your message..."
              ></textarea>
            </div>

            <div className="sm:col-span-2 flex items-start gap-3">
              <input type="checkbox" className="mt-1" />
              <p className="text-sm text-gray-600">
                I agree to receive updates, new features, and notifications via
                email and SMS.
              </p>
            </div>

            {/* Captcha */}
            <div className="sm:col-span-2">
              <div className="border rounded p-4 text-center text-gray-500">
                [ ReCAPTCHA Placeholder ]
              </div>
            </div>

            <div className="sm:col-span-2">
              <button className="w-full bg-[#031225] text-white py-3 rounded hover:bg-[#FF5100] transition-all">
                Send a Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
