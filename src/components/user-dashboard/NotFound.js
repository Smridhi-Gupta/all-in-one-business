"use client";

import React from "react";
import Image from "next/image";
import notFound from "@/Assets/Images/404notFound2.png";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        src={notFound}
        alt="404 Not Found"
        style={{
          maxWidth: "567px",
          margin: "0 auto",
          display: "block",
        }}
        className="not-found-child"
      />
    </div>
  );
}
