// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Header from "@/components/sections/Header";
// import Footer from "@/components/sections/Footer";
// import { UserProvider } from "@/context/UserContext"; // ✅ ADD THIS

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "All In One Business",
//   description: "Next.js + Tailwind Project",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         {/* ✅ UserProvider WRAP START */}
//         <UserProvider>
//           <Header />
//           {children}
//           <Footer />
//         </UserProvider>
//         {/* ✅ UserProvider WRAP END */}
//       </body>
//     </html>
//   );
// }

"use client";

// import { ToastContainer } from "react-toastify";
import { usePathname } from "next/navigation";
import { UserProvider } from "@/context/UserContext";
import Footer from "@/components/sections/Footer";
import Header from "@/components/sections/Header";

export default function ClientLayout({ children }) {
  const pathname = usePathname();

  // ✅ pages jinke liye Header/Footer hide karna hai
  const noLayoutPages = [
    "/login",
    "/signup",
    "/change-password",
    "/user-form",
    "edit-profile",
    "/forget-password",
    "/profile",
    "/reset-password",
    "/service-form",
  ];

  const hideLayout = noLayoutPages.some((path) => pathname.startsWith(path));

  return (
    <UserProvider>
      {!hideLayout && <Header />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </UserProvider>
  );
}
