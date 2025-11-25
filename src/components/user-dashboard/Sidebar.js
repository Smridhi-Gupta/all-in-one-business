"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

import { useRouter, usePathname } from "next/navigation";

import logo from "@/Assets/Images/LoneStarInnovationo-Logo.png";
import deleteimg from "@/Assets/Images/logImage.svg";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();

  const [show, setShow] = useState(false);
  const [activeMenu, setActiveMenu] = useState(pathname);
  const [isToggled, setIsToggled] = useState(false);

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  const handleToggle = () => setIsToggled((prev) => !prev);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully.");
    router.push("/login");
    setShow(false);
  };

  return (
    <>
      <div className={`sidebar col-3 ${isToggled ? "active-sidebar" : ""}`}>
        <div className="toggl-main" onClick={handleToggle}>
          <i className="fa-solid fa-bars"></i>
        </div>

        <div className="sidebar-wrapper d-flex">
          <div className="sidebar-content">

            {/* Sidebar Logo */}
            <div className="sidebar-logo">
              {/* Uncomment if you need logo click */}
              {/* <figure className="text-center" onClick={() => router.push("/dashboard")}>
                <Image src={logo} alt="Logo" className="img-fluid" />
              </figure> */}
            </div>

            <ul className="slide-navli">

              {/* MAIN SECTION */}
              <li className="sidebar-section-heading">Main</li>

              <li
                className={`inner-slide-li subitem ${
                  activeMenu === "/create-form" ? "active" : ""
                }`}
                onClick={() => router.push("/create-form")}
              >
                + New Service
              </li>

              <li
                className={`inner-slide-li subitem ${
                  activeMenu === "/services" ? "active" : ""
                }`}
                onClick={() => router.push("/services")}
              >
                Services
              </li>

              {/* ACCOUNT SECTION */}
              <li className="sidebar-section-heading">Account</li>

              <li
                className={`inner-slide-li subitem ${
                  activeMenu === "/profile" ||
                  activeMenu === "/change-password"
                    ? "active"
                    : ""
                }`}
                onClick={() => router.push("/profile")}
              >
                Settings
              </li>

              <li className="inner-slide-li logout subitem" onClick={() => setShow(true)}>
                Logout
              </li>

            </ul>
          </div>
        </div>
      </div>

      {/* Logout Confirmation Modal */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        className="modal-delete-logout"
      >
        <Modal.Body className="p-0">
          <div className="inner-body-delete-logout">

            <div className="img-modal">
              <figure>
                <Image src={deleteimg} alt="Logout Confirm" />
              </figure>
            </div>

            <h4>Are you sure you want to logout?</h4>

            <div className="upper-btns-modal-pair">
              <Button className="comn-modal-btns-blue" onClick={logoutHandler}>
                Yes, Logout
              </Button>
              <Button
                className="comn-modal-btns-transparent"
                onClick={() => setShow(false)}
              >
                No, Stay Here
              </Button>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
