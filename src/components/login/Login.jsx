"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { BASE_URL_USER, LOGIN } from "@/API";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(BASE_URL_USER + LOGIN, data);

      if (response.data.code === 200 && response.data.status === true) {
        localStorage.setItem("token", response.data.data.access_token);
        router.push("/services");
      } else {
        alert(response.data.message || "Login failed");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#031225] px-4 pt-40">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-[#031225] mb-6">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8">Login to your account</p>

        <form className="space-y-5" onSubmit={submitHandler}>
          <div>
            <label className="block text-sm font-medium text-[#031225]">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={data.email}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#031225]">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={data.password}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
              placeholder="Enter your password"
            />
          </div>

          <div className="text-right">
            <button type="button" className="text-sm text-[#FF5100] hover:underline">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF5100] text-white py-3 rounded-lg font-semibold 
            shadow-md hover:bg-[#e54a00] transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don’t have an account?
          <Link href="/signup" className="text-[#FF5100] font-medium hover:underline ml-1">
            Sign Up
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
