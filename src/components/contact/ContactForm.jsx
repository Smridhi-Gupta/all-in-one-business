"use client";

import React from "react";

const ContactForm = () => {
  return (
    <section className="w-full flex justify-center py-20 bg-[#f7f7f7]">
      <div className="w-full max-w-xl bg-white p-8 shadow-md rounded-lg">

        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <h2 className="text-2xl font-bold">embtel</h2>
        </div>

        {/* FORM */}
        <form className="space-y-4">

          {/* First + Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">First Name *</label>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Last Name *</label>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Email + Phone */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Email Id *</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Contact Number</label>
              <input
                type="tel"
                placeholder="Phone"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Company + Website */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-700">Company/Organization</label>
              <input
                type="text"
                placeholder="Organization"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
            <div>
              <label className="text-sm text-gray-700">Website</label>
              <input
                type="url"
                placeholder="https://example.com"
                className="w-full border border-gray-300 px-3 py-2 text-sm outline-none"
              />
            </div>
          </div>

          {/* Service Dropdown */}
          <div>
            <label className="text-sm text-gray-700">Service Required *</label>
            <select className="w-full border border-gray-300 px-3 py-2 text-sm outline-none">
              <option>Select one</option>
              <option>Digital Marketing</option>
              <option>Web Development</option>
              <option>SEO</option>
              <option>PPC</option>
              <option>DA & AI</option>
            </select>
          </div>

          {/* Message */}
          <div>
            <label className="text-sm text-gray-700">Message</label>
            <textarea
              rows="4"
              placeholder="Leave your message for us..."
              className="w-full border border-gray-300 px-3 py-2 text-sm outline-none resize-none"
            ></textarea>
          </div>

          {/* Checkbox */}
          <div className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" className="mt-1" />
            <p>
              I agree to get updates regarding queries, as well as notifications
              about new features, via email and SMS.
            </p>
          </div>

          {/* CAPTCHA PLACEHOLDER */}
          <div className="border border-gray-300 p-3 flex items-center gap-3 text-sm text-gray-700 w-fit">
            <input type="checkbox" />
            <span>I'm not a robot</span>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full bg-[#1f2c44] text-white py-3 text-sm font-semibold hover:bg-black transition"
          >
            Send a Message
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
