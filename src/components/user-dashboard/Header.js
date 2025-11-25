"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

import userImg from "@/Assets/Images/blank.png";

import { useDispatch, useSelector } from "react-redux";
import { setUser } from "@/redux/slices/AdminDetails";

import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL_USER, IMAGE_URL, USER_DETAILS } from "@/API";

function Header() {
  const router = useRouter();
  const dispatch = useDispatch();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const [isLoading, setIsLoading] = useState(false);
  const userStateDetail = useSelector((state) => state.user.user);

  useEffect(() => {
    if (token) getDetail();
  }, []);

  // ------------------------------- GET USER DETAILS -------------------------------
  const getDetail = async () => {
    try {
      setIsLoading(true);

      const headers = { Token: token };

      const response = await axios.get(BASE_URL_USER + USER_DETAILS, {
        headers,
      });

      if (response.data.code === 200 && response.data.status === true) {
        const userDetail = response.data.data;
        dispatch(setUser(userDetail));
      } else {
        toast.error("Failed to fetch user details");
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
    <nav className="dashboard_header navbar navbar-expand-lg navbar-admin">
      <div className="container-fluid m-0 p-0">
        <div className="welcom-upper d-flex">
          <h6 className="user_name">Hello {userStateDetail?.name || ""}</h6>

          <div className="dash_header_notify_wrap notifi-icon-na d-flex">
            <div className="divider"></div>

            {/* PROFILE LINK */}
            <Link href="/profile" className="dash_profile_image">
              <Image
                src={
                  userStateDetail?.image
                    ? IMAGE_URL + userStateDetail.image
                    : userImg
                }
                alt="User"
                width={40}
                height={40}
                className="img-fluid"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
