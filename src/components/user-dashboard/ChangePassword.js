"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import { BASE_URL_USER, CHANGE_PASSWORD } from "@/API";
import axios from "axios";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Loader from "./Loader";

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);

  const changePasswordHandler = async (data) => {
    if (data.old_password === data.new_password) {
      toast.error("Current and New password cannot be same.");
      return;
    }
    if (data.new_password !== data.new_password2) {
      toast.error("Create password and Confirm password must be same.");
      return;
    }

    const formData = new FormData();
    formData.append("old_password", data.old_password);
    formData.append("new_password", data.new_password);
    formData.append("language", "ENGLISH");

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const headers = { token };

      const response = await axios.post(
        BASE_URL_USER + CHANGE_PASSWORD,
        formData,
        { headers }
      );

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response.data.message);
        reset();
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
            / <span className="text-gray-800 font-medium">Change Password</span>
          </div>

          {/* Card */}
          <div className="bg-white rounded-xl shadow p-6 max-w-4xl">
            <h3 className="text-xl font-semibold mb-6">Change Password</h3>

            <form
              onSubmit={handleSubmit(changePasswordHandler)}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Old Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Old Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword1 ? "text" : "password"}
                    placeholder="Enter Old Password"
                    className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("old_password", {
                      required: "Please enter old password.",
                    })}
                  />
                  <span
                    onClick={() => setShowPassword1(!showPassword1)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword1 ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>
                {errors.old_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.old_password.message}
                  </p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Enter New Password"
                    className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("new_password", {
                      required: "Please enter new password",
                      maxLength: {
                        value: 25,
                        message: "Password must be less than 25 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                        message:
                          "Password must contain uppercase, lowercase, number & special character.",
                      },
                    })}
                  />
                  <span
                    onClick={() => setShowPassword2(!showPassword2)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword2 ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>
                {errors.new_password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.new_password.message}
                  </p>
                )}
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword3 ? "text" : "password"}
                    placeholder="Confirm New Password"
                    className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("new_password2", {
                      required: "Please enter confirm new password",
                      validate: (value) =>
                        value === watch("new_password") ||
                        "New password and confirm password do not match.",
                    })}
                  />
                  <span
                    onClick={() => setShowPassword3(!showPassword3)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword3 ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>
                {errors.new_password2 && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.new_password2.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="md:col-span-2 flex gap-4 mt-4">
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Update Password
                </button>

                <button
                  type="button"
                  onClick={() => router.push("/profile")}
                  className="border border-gray-300 px-6 py-2 rounded-md hover:bg-gray-100 transition"
                >
                  Discard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
