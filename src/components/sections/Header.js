// import React from "react";
// import Link from "next/link";

// const Header = () => {
//   return (
//     <header className="w-full bg-gray-900 text-gray-100 shadow-lg">
//       <div className="container mx-auto flex items-center justify-between px-6 py-4">
//         {/* Logo */}
//         <div className="text-2xl font-bold tracking-wide text-white">
//           All <span className="text-gray-400">In</span> One business
//         </div>

//         {/* Navigation Links */}
//         <nav className="hidden md:flex gap-6 flex- font-medium items-center-safe">
//           <Link href="/" className="hover:text-white transition-colors">
//             HOME
//           </Link>
//           <Link href="/course" className="hover:text-white transition-colors">
//             SERVICES
//           </Link>
//           <Link
//             href="/student-portal"
//             className="bg-gray-700 text-white px-4 py-2 rounded-md font-semibold hover:bg-gray-600 transition-colors"
//           >
//             Contact Us
//           </Link>
//         </nav>

//         {/* Student Portal Button */}
//       </div>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="w-full bg-[#031225] text-white shadow-lg fixed top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          All<span className="text-[#FF5100]">In</span>OneBusiness
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex gap-8 font-medium items-center">
          <Link href="/" className="hover:text-[#FF5100] transition-colors">
            HOME
          </Link>
          <Link href="/about" className="hover:text-[#FF5100] transition-colors">
            ABOUT US
          </Link>
          <Link
            href="/services"
            className="hover:text-[#FF5100] transition-colors"
          >
            SERVICES
          </Link>
          <Link
            href="/student-portal"
            className="bg-[#FF5100] px-5 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
