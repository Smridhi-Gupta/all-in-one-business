"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";

import { BASE_URL_USER, SIGNUP } from "@/API";

const Signup = () => {
  const router = useRouter();

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (data.password !== data.confirmPassword) {
      alert("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const payload = {
        name: data.name,
        email: data.email,
        password: data.password,
      };

      const response = await axios.post(BASE_URL_USER + SIGNUP, payload);

      if (response.status === 200 || response.status === 201) {
        alert("Signup successful!");
        router.push("/login");
      } else {
        alert("Signup failed!");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-start justify-center bg-[#031225] px-4 pt-38">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

        <h2 className="text-3xl font-bold text-center text-[#031225] mb-6">
          Create Account
        </h2>
        <p className="text-center text-gray-600 mb-8">Join us and start your journey</p>

        <form className="space-y-5" onSubmit={submitHandler}>
          
          <div>
            <label className="block text-sm font-medium text-[#031225]">
              Full Name
            </label>
            <input
              type="text"
              required
              name="name"
              value={data.name}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#031225]">
              Email Address
            </label>
            <input
              type="email"
              required
              name="email"
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
              required
              name="password"
              value={data.password}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
              placeholder="Create a password"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#031225]">
              Confirm Password
            </label>
            <input
              type="password"
              required
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={changeHandler}
              className="w-full mt-1 px-4 py-3 rounded-lg border border-gray-300 
              focus:outline-none focus:ring-2 focus:ring-[#FF5100]"
              placeholder="Re-enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#FF5100] text-white py-3 rounded-lg font-semibold 
            shadow-md hover:bg-[#e54a00] transition"
          >
            {loading ? "Signing up..." : "Signup"}
          </button>
        </form>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?
          <Link href="/login" className="text-[#FF5100] font-medium hover:underline ml-1">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
