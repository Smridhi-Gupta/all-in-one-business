"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { toast } from "react-toastify";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [isToggled, setIsToggled] = useState(true); // ✅ default expanded

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  const handleToggle = () => setIsToggled((prev) => !prev);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
    router.push("/login");
    setShow(false);
  };

  return (
    <>
      {/* ✅ Sidebar Wrapper */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white z-40
        transition-all duration-300 ease-in-out
        ${isToggled ? "w-64" : "w-20"}`}
      >
        {/* ✅ Toggle Button */}
        <div
          className="flex items-center justify-center h-16 border-b border-gray-700 cursor-pointer"
          onClick={handleToggle}
        >
          <i className="fa-solid fa-bars text-xl"></i>
        </div>

        {/* ✅ Menu */}
        <nav className="px-3 py-4">
          <ul className="space-y-1 text-sm">
            {/* MAIN */}
            <li className="text-gray-400 uppercase tracking-wide mb-2 px-2">
              Main
            </li>

            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
                ${
                  activeMenu === "/user-form"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              onClick={() => router.push("/user-form")}
            >
              <span className="text-lg">+</span>
              <span className={`${!isToggled && "hidden"}`}>New Service</span>
            </li>

            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
                ${
                  activeMenu === "/service-form"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              onClick={() => router.push("/service-form")}
            >
              <span>📋</span>
              <span className={`${!isToggled && "hidden"}`}>Services</span>
            </li>

            {/* ACCOUNT */}
            <li className="text-gray-400 uppercase tracking-wide mt-5 mb-2 px-2">
              Account
            </li>

            <li
              className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
                ${
                  activeMenu === "/profile" || activeMenu === "/change-password"
                    ? "bg-blue-600 text-white"
                    : "text-gray-300 hover:bg-gray-700"
                }`}
              onClick={() => router.push("/profile")}
            >
              <span>⚙️</span>
              <span className={`${!isToggled && "hidden"}`}>Settings</span>
            </li>

            <li
              className="flex items-center gap-3 px-3 py-2 mt-3 rounded-md text-red-400 hover:bg-red-600 hover:text-white transition cursor-pointer"
              onClick={() => {
                localStorage.removeItem("token"); // clear token
                router.push("/"); // redirect to homepage
              }}
            >
              <span>🚪</span>
              <span className={`${!isToggled && "hidden"}`}>Logout</span>
            </li>
          </ul>
        </nav>
      </aside>

      {/* ✅ Spacer for Content (IMPORTANT FIX) */}
      <div
        className={`transition-all duration-300
        ${isToggled ? "ml-64" : "ml-20"}`}
      />

      {/* ✅ Logout Modal */}
      {show && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[999]">
          <div className="bg-white rounded-lg w-[90%] max-w-md p-6 text-center">
            <h4 className="text-lg font-semibold mb-4 text-gray-800">
              Are you sure you want to logout?
            </h4>

            <div className="flex justify-center gap-4">
              <button
                onClick={logoutHandler}
                className="bg-red-600 text-white px-5 py-2 rounded-md hover:bg-red-700 transition"
              >
                Yes, Logout
              </button>

              <button
                onClick={() => setShow(false)}
                className="border border-gray-400 px-5 py-2 rounded-md hover:bg-gray-100 transition"
              >
                No, Stay Here
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
