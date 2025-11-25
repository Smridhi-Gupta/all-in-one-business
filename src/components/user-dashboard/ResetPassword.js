"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-toastify";

import loginimg from "@/Assets/Images/Phrase_box_Logo.jpg";
import { BASE_URL_USER, RESET_PASSWORD, CHECKSECURITYCODE } from "@/API";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const securityCode = searchParams.get("security_code") || "";

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  const [isLinkValid, setIsLinkValid] = useState(true);
  const [loading, setLoading] = useState(true);

  const newPassword = watch("newPassword");

  // Redirect if Already Logged In
  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("token")) {
      router.push("/dashboard");
    }
  }, []);

  // Validate security code
  useEffect(() => {
    if (!securityCode.trim()) {
      setIsLinkValid(false);
      setLoading(false);
      return;
    }
    validateCode();
  }, [securityCode]);

  const validateCode = async () => {
    setLoading(true);
    try {
      const response = await axios.post(BASE_URL_USER + CHECKSECURITYCODE, {
        security_code: securityCode,
        language: "ENGLISH",
      });

      if (response.status === 200) {
        setIsLinkValid(true);
      } else {
        setIsLinkValid(false);
      }
    } catch (error) {
      setIsLinkValid(false);
    } finally {
      setLoading(false);
    }
  };

  // Submit New Password
  const submitHandler = async (data) => {
    const formData = new FormData();
    formData.append("password", data.newPassword);
    formData.append("confirmPassword", data.confirmPassword);
    formData.append("security_code", securityCode);

    try {
      const response = await axios.post(BASE_URL_USER + RESET_PASSWORD, formData);

      toast.success(
        response?.data?.data?.message || "Password reset successful"
      );

      router.push("/login");
    } catch (error) {
      const errMessage =
        error?.response?.data?.error_description || "Something went wrong";
      toast.error(errMessage);
    }
  };

  return (
    <section className="login-section">
      <div className="container-fluid g-0">
        <Row className="row-min-h">

          {/* LEFT IMAGE */}
          <Col lg={6} className="img-n">
            <div className="upper-fig-main-login">
              <figure className="login-img-main">
                <Image src={loginimg} alt="Login Visual" className="img-fluid" />
              </figure>
            </div>
          </Col>

          {/* RIGHT FORM */}
          <Col lg={6}>
            <div className="inner-login-mian">
              <div className="loginupper-right">
                <h2>Reset Password</h2>

                {loading ? (
                  <p>Validating your link...</p>
                ) : isLinkValid ? (
                  <Form onSubmit={handleSubmit(submitHandler)}>
                    <Row>

                      {/* New Password */}
                      <Col md={12}>
                        <Form.Group className="comn-class-inputs">
                          <Form.Label>New Password</Form.Label>

                          <div className="cstPassGroup">
                            <Form.Control
                              type={showPassword ? "text" : "password"}
                              placeholder="Enter New Password"
                              onKeyDown={(e) => {
                                if (e.key === " ") e.preventDefault();
                              }}
                              {...register("newPassword", {
                                required: "This field is required",
                                maxLength: {
                                  value: 25,
                                  message:
                                    "Password must be less than 25 characters",
                                },
                                pattern: {
                                  value:
                                    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/,
                                  message:
                                    "Password must include uppercase, lowercase, number, special character.",
                                },
                              })}
                            />

                            <div
                              onClick={() => setShowPassword(!showPassword)}
                              className="eyeToggleBtn"
                            >
                              {showPassword ? (
                                <AiOutlineEye />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </div>
                          </div>

                          {errors.newPassword && (
                            <p className="error">{errors.newPassword.message}</p>
                          )}
                        </Form.Group>
                      </Col>

                      {/* Confirm Password */}
                      <Col md={12}>
                        <Form.Group className="comn-class-inputs">
                          <Form.Label>Confirm New Password</Form.Label>

                          <div className="cstPassGroup">
                            <Form.Control
                              type={showPassword1 ? "text" : "password"}
                              placeholder="Confirm New Password"
                              onKeyDown={(e) => {
                                if (e.key === " ") e.preventDefault();
                              }}
                              {...register("confirmPassword", {
                                required: "This field is required",
                                maxLength: {
                                  value: 25,
                                  message:
                                    "Password must be less than 25 characters",
                                },
                                validate: (value) =>
                                  value === newPassword ||
                                  "New password and confirm must match.",
                              })}
                            />

                            <div
                              onClick={() => setShowPassword1(!showPassword1)}
                              className="eyeToggleBtn"
                            >
                              {showPassword1 ? (
                                <AiOutlineEye />
                              ) : (
                                <AiOutlineEyeInvisible />
                              )}
                            </div>
                          </div>

                          {errors.confirmPassword && (
                            <p className="error">
                              {errors.confirmPassword.message}
                            </p>
                          )}
                        </Form.Group>
                      </Col>

                    </Row>

                    <Button className="login-btn" type="submit">
                      Reset Password
                    </Button>
                  </Form>
                ) : (
                  <>
                    <h2 style={{ color: "#bb2125" }}>
                      Your password reset link has expired or is invalid.
                    </h2>

                    <div className="auth-bottom-link-sec">
                      <p style={{ fontSize: "20px" }}>
                        Please request a new reset link{" "}
                        <Link href="/forgotpassword">here</Link>.
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
}
