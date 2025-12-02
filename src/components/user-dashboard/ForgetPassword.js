"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import loginimg from "@/Assets/Images/Phrase_box_Logo.jpg";
import logo from "@/Assets/Images/Logos/png/phraselogo.png";

import Loader from "@/components/Loader";
import { BASE_URL_USER, FORGOT_PASSWORD } from "@/API";

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.put(BASE_URL_USER + FORGOT_PASSWORD, data);

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response.data.data);
        router.push("/login");
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

      <section className="min-h-screen flex">
        {/* Left Image Section */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
          <figure className="w-full h-full">
            <Image
              src={loginimg}
              alt="login"
              className="object-cover w-full h-full"
              priority
            />
          </figure>
        </div>

        {/* Right Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6">
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <figure
                onClick={() => router.push("/")}
                className="cursor-pointer"
              >
                <Image src={logo} alt="logo" className="h-14 w-auto" />
              </figure>
            </div>

            <h2 className="text-2xl font-semibold text-center mb-2">
              Forgot Password
            </h2>
            <p className="text-sm text-gray-500 text-center mb-6">
              Don’t worry, we will help you recover your password
            </p>

            <form onSubmit={handleSubmit(submitHandler)} className="space-y-5">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email Address"
                  className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500 text-xs">
                    E-mail is required
                  </span>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              >
                Reset Password
              </button>

              {/* Back to Login */}
              <div className="text-center mt-3">
                <Link
                  href="/login"
                  className="text-blue-600 hover:underline text-sm"
                >
                  Back to Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
