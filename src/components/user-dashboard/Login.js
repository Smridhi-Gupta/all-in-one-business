"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import Loader from "./Loader";
import { BASE_URL_USER, LOGIN } from "@/API";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // Prefill Remember Me
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (storedEmail) setValue("email", storedEmail);
      if (storedPassword) setValue("password", storedPassword);
    }
  }, []);

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(BASE_URL_USER + LOGIN, data);

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response.data.message);

        // Store email/password if Remember Me is checked
        if (rememberMe) {
          localStorage.setItem("email", data.email);
          localStorage.setItem("password", data.password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }

        localStorage.setItem("token", response.data.data.access_token);

        router.push("/service-form");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error_description || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // Redirect if already logged in
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/service-form");
    }
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      <section className="w-full min-h-screen bg-[#031225] flex items-center justify-center px-4 py-10">
        <div className="w-full max-w-xl bg-white shadow-lg rounded-2xl p-8">
          <h2 className="text-3xl font-semibold text-[#031225] text-center">
            Welcome Back
          </h2>
          <p className="text-gray-600 text-center mt-1 mb-6">
            Login to your account
          </p>

          <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
            {/* Email */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#031225]">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter Your Email"
                className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#FF5100] outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-red-500 text-sm mt-1">
                  Email is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-[#031225]">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Your Password"
                  className="mt-1 w-full border border-gray-200 rounded-lg px-3 py-2 pr-10 focus:ring-2 focus:ring-[#FF5100] outline-none"
                  {...register("password", {
                    required: true,
                    maxLength: 25,
                    pattern: /^\S*$/,
                  })}
                  onKeyDown={(e) => {
                    if (e.key === " ") e.preventDefault();
                  }}
                />

                {/* Eye Icon */}
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-3 top-3 text-xl text-gray-500"
                >
                  {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                </button>
              </div>

              {errors.password && (
                <span className="text-red-500 text-sm mt-1">
                  Password is required
                </span>
              )}
            </div>

            {/* Forgot Password / Remember */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-[#031225] text-sm">
                <input
                  type="checkbox"
                  className="h-4 w-4"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Remember Me
              </label>

              <Link
                href="/forgotpassword"
                className="text-[#FF5100] text-sm hover:underline"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full bg-[#FF5100] hover:bg-[#e64700] text-white py-2 rounded-lg transition font-medium"
            >
              Login
            </button>

            {/* Signup Link */}
            <p className="text-center text-[#031225] text-sm">
              Don’t have an account?{" "}
              <Link href="/signup" className="text-[#FF5100] font-medium">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
