"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "@/components/Sidebar";
import { BASE_URL_USER, UPDATE_PROFILE } from "@/API";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";

export default function EditProfile() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);

  const userDetail = {
    name: searchParams.get("name") || "",
    email: searchParams.get("email") || "",
  };

  const [name, setName] = useState(userDetail?.name || "");
  const [error, setError] = useState("");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  // ----------------------- Update Handler -----------------------
  const updateProfile = async () => {
    if (error !== "") return;

    setIsLoading(true);
    try {
      const headers = { token };
      const formdata = new FormData();
      formdata.append("name", name || userDetail?.name);

      const response = await axios.post(
        BASE_URL_USER + UPDATE_PROFILE,
        formdata,
        { headers }
      );

      if (response.status === 200 && response.data.code === 200) {
        toast.success(response.data.message);
        router.push("/profile");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error_description || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loader isLoading={isLoading} />

      <div className="min-h-screen bg-gray-100 flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-8 ml-16">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-500 mb-6">
            <span
              onClick={() => router.push("/profile")}
              className="cursor-pointer hover:text-blue-600"
            >
              My Profile
            </span>{" "}
            / <span className="text-gray-800 font-medium">Edit Profile</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow p-6 max-w-4xl">
            <h3 className="text-xl font-semibold mb-6">Update Profile</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter Your Full Name"
                  defaultValue={userDetail?.name}
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => {
                    let value = e.target.value;

                    if (
                      /^\s/.test(value) ||
                      /\s{2,}/.test(value) ||
                      /\s$/.test(value)
                    ) {
                      setError(
                        "Input cannot start or end with spaces, and cannot have multiple spaces."
                      );
                    } else if (value.length >= 50) {
                      setError("Value cannot exceed 50 characters");
                    } else if (value.trim() === "") {
                      setError("Please enter full name.");
                    } else if (value.length < 3) {
                      setError("Full name must be at least 3 characters long");
                    } else {
                      setError("");
                    }

                    setName(value);
                  }}
                />

                {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  disabled
                  defaultValue={userDetail?.email}
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={updateProfile}
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Update Profile
              </button>

              <button
                onClick={() => router.push("/profile")}
                className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 transition"
              >
                Discard
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
