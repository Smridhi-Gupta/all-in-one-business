"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { IMAGE_URL, BASE_URL_USER, UPLOAD_IMAGE, USER_DETAILS } from "@/API";
import Sidebar from "./Sidebar";
import Loader from "./Loader";

function Profile() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  useEffect(() => {
    if (token) getUserDetail();
  }, [token]);

  const getUserDetail = async () => {
    setIsLoading(true);
    try {
      const headers = { token };
      const response = await axios.get(BASE_URL_USER + USER_DETAILS, {
        headers,
      });

      if (response.status === 200 && response.data.status === true) {
        setUserDetail(response.data.data);
        dispatch(setUser(response.data.data));
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const uploadImage = (e) => {
    const allowedTypes = ["image/png", "image/jpg", "image/jpeg"];

    if (!e.target.files || e.target.files.length === 0) {
      toast.error("Please select a file.");
      return;
    }

    const file = e.target.files[0];

    if (!allowedTypes.includes(file.type)) {
      toast.error("Only JPG and PNG files are allowed.");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("File size should not exceed 5MB.");
      return;
    }

    imageUploadHandler(file);
  };

  const imageUploadHandler = async (file) => {
    setIsLoading(true);
    try {
      const headers = {
        token,
        "Content-Type": "multipart/form-data",
      };

      const formdata = new FormData();
      formdata.append("file", file);

      const response = await axios.post(
        BASE_URL_USER + UPLOAD_IMAGE,
        formdata,
        { headers }
      );

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response?.data?.message);
        getUserDetail();
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

          <div className="bg-white rounded-xl shadow p-6 mt-6 max-w-5xl">
            <h3 className="text-xl font-semibold mb-6">My Profile</h3>

            {/* Profile Top */}
            <div className="flex items-center gap-6 mb-8">
              {/* Profile Image */}
              <div className="relative w-32 h-32">
                <label
                  htmlFor="file"
                  className="absolute -top-2 -right-2 bg-blue-600 p-2 rounded-full cursor-pointer"
                >
                  {/* <Image src={editProfile} alt="edit" className="w-5 h-5" /> */}
                </label>

                <input
                  id="file"
                  type="file"
                  className="hidden"
                  onChange={uploadImage}
                  accept="image/png, image/jpg, image/jpeg"
                />

                {/* <Image
                  src={
                    userDetail?.image ? IMAGE_URL + userDetail.image : prescript
                  }
                  alt="profile"
                  width={128}
                  height={128}
                  className="w-32 h-32 rounded-full object-cover border"
                /> */}
              </div>

              {/* Edit Button */}
              <button
                onClick={() =>
                  router.push(`/edit-profile?id=${userDetail?._id}`)
                }
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Edit Profile
              </button>
            </div>

            {/* Profile Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  disabled
                  value={userDetail?.name || ""}
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  disabled
                  value={userDetail?.email || ""}
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Change Password */}
            <div className="flex items-center justify-between mt-10 bg-gray-50 p-4 rounded-md">
              <h6 className="text-sm font-medium">
                Do you want to update your password?
              </h6>

              <Link
                href="/change-password"
                className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Change Password
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
