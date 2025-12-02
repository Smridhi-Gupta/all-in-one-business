"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

import loginimg from "@/Assets/Images/Phrase_box_Logo.jpg";
import { BASE_URL_USER, RESET_PASSWORD, CHECKSECURITYCODE } from "@/API";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const securityCode = searchParams.get("security_code") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [isLinkValid, setIsLinkValid] = useState(true);
  const [loading, setLoading] = useState(true);

  const newPassword = watch("newPassword");

  // Redirect if Already Logged In
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, [router]);

  // Validate security code
  useEffect(() => {
    if (!securityCode.trim()) {
      setIsLinkValid(false);
      setLoading(false);
      return;
    }
    validateCode();
  }, [securityCode]);

  const validateCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL_USER + CHECKSECURITYCODE, {
        security_code: securityCode,
        language: "ENGLISH",
      });

      if (response.status === 200) {
        setIsLinkValid(true);
      } else {
        setIsLinkValid(false);
      }
    } catch (error) {
      setIsLinkValid(false);
    } finally {
      setLoading(false);
    }
  };

  // Submit New Password
  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("password", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("security_code", securityCode);

    try {
      const response = await axios.post(
        BASE_URL_USER + RESET_PASSWORD,
        formData
      );

      toast.success(
        response?.data?.data?.message || "Password reset successful"
      );

      router.push("/login");
    } catch (error) {
      const errMessage =
        error?.response?.data?.error_description || "Something went wrong";
      toast.error(errMessage);
    }
  };

  return (
    <section className="min-h-screen flex">
      {/* LEFT IMAGE */}
      <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
        <Image
          src={loginimg}
          alt="Login Visual"
          className="object-cover w-full h-full"
          priority
        />
      </div>

      {/* RIGHT FORM */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
        <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Reset Password
          </h2>

          {loading ? (
            <p className="text-center text-gray-500">Validating your link...</p>
          ) : isLinkValid ? (
            <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
              {/* New Password */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  New Password
                </label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter New Password"
                    onKeyDown={(e) => {
                      if (e.key === " ") e.preventDefault();
                    }}
                    className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("newPassword", {
                      required: "This field is required",
                      maxLength: {
                        value: 25,
                        message: "Password must be less than 25 characters",
                      },
                      pattern: {
                        value:
                          /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                        message:
                          "Password must include uppercase, lowercase, number, special character.",
                      },
                    })}
                  />

                  <span
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer text-gray-500"
                  >
                    {showPassword ? (
                      <AiOutlineEye />
                    ) : (
                      <AiOutlineEyeInvisible />
                    )}
                  </span>
                </div>

                {errors.newPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.newPassword.message}
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
                    type={showPassword1 ? "text" : "password"}
                    placeholder="Confirm New Password"
                    onKeyDown={(e) => {
                      if (e.key === " ") e.preventDefault();
                    }}
                    className="w-full border rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    {...register("confirmPassword", {
                      required: "This field is required",
                      maxLength: {
                        value: 25,
                        message: "Password must be less than 25 characters",
                      },
                      validate: (value) =>
                        value === newPassword ||
                        "New password and confirm must match.",
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

                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Reset Password
              </button>
            </form>
          ) : (
            <>
              <h2 className="text-red-600 text-xl font-semibold text-center mb-4">
                Your password reset link has expired or is invalid.
              </h2>

              <p className="text-center text-gray-600">
                Please request a new reset link{" "}
                <Link
                  href="/forgotpassword"
                  className="text-blue-600 hover:underline"
                >
                  here
                </Link>
                .
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
