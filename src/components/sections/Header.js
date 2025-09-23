import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-gray-900 text-gray-100 shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-wide text-white">
          All <span className="text-gray-400">In</span> One business
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-6 flex- font-medium">
          <Link href="/" className="hover:text-white transition-colors">
            HOME
          </Link>
          <Link href="/course" className="hover:text-white transition-colors">
            SERVICES
          </Link>
         
        </nav>

        {/* Student Portal Button */}
        <Link
          href="/student-portal"
          className="ml-6 bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition-colors"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};

export default Header;
