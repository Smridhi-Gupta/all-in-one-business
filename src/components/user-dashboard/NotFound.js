"use client";

import React from "react";
import Image from "next/image";
import notFound from "@/Assets/Images/404notFound2.png";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 p-4">
      <div className="max-w-[567px] w-full">
        <Image
          src={notFound}
          alt="404 Not Found"
          className="mx-auto w-full h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
