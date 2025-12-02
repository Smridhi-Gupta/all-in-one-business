import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "All In One Business",
  description: "Next.js + Tailwind Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ UserProvider WRAP START */}
        {/* <UserProvider>
          <Header />
          {children}
          <Footer />
        </UserProvider> */}
        {/* ✅ UserProvider WRAP END */}

        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}