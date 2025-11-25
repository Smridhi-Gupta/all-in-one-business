import Profile from "@/components/user-dashboard/Profile";
import ProtectedRoute from "@/components/user-dashboard/ProtectedRoutes";
import React from "react";

const page = () => {
  return (
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  );
};

export default page;
