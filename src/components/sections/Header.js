import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-gray-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white">
          All In <span className="text-gray-400">One</span> Business
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link href="/course" className="hover:text-white transition-colors">
            COURSE
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            ABOUT
          </Link>
          <Link href="/contact" className="hover:text-white transition-colors">
            CONTACT
          </Link>
        </nav>

        {/* Student Portal Button */}
        <Link
          href="/student-portal"
          className="ml-6 bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition-colors"
        >
          STUDENT PORTAL
        </Link>
      </div>
    </header>
  );
};

export default Header;
