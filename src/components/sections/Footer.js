import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            All In One Business
          </h2>

          <p className="text-gray-400 text-sm mb-4">
            Empowering students with job-ready IT skills through hands-on
            training, certifications, and expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>

            <li>
              <Link href="/contact" className="hover:text-white">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col gap-3">
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Address:</span>
            <br />
            39159 Paseo Padre Pkwy #105, <br />
            Fremont, CA 94538
          </p>
          <p className="text-gray-400 text-sm">
            <span className="font-semibold text-white">Email:</span>
            <br />
            test@yopmail.com
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TransTech Academy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
