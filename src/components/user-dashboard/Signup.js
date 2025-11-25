"use client";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Loader from "@/components/Loader";
import { BASE_URL_USER, SIGNUP } from "@/API";

export default function Signup() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const selectedRole = watch("role");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitHandler = async (data) => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await axios.post(BASE_URL_USER + SIGNUP, data);

      if (response.status === 200 || response.status === 201) {
        reset();
        router.push("/login"); // redirect after signup
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage(
        error?.response?.data?.message ||
          "Failed to sign up. Please try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <Loader isLoading={isLoading} />}

      <section className="login-section">
        <div className="inner-login-mian">
          <div className="loginupper-right">
            <h2>Create an Account</h2>
            <p className="forg-pass-text">
              Please fill in the details below to sign up:
            </p>

            {errorMessage && (
              <p className="text-danger text-center">{errorMessage}</p>
            )}

            <Form onSubmit={handleSubmit(submitHandler)}>
              {/* Row 1: Full Name + Email */}
              <Row>
                <Col md={6}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your full name"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <span className="error">Name is required</span>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="error">Email is required</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Row 2: Role + Password */}
              <Row>
                <Col md={6}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Role</Form.Label>
                    <Form.Select {...register("role", { required: true })}>
                      <option value="">Select Role</option>
                      <option value="USER">User</option>
                      <option value="AGENCY">Agency</option>
                    </Form.Select>
                    {errors.role && (
                      <span className="error">Role is required</span>
                    )}
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Password</Form.Label>
                    <div className="cstPassGroup">
                      <Form.Control
                        placeholder="Enter your password"
                        type={showPassword ? "text" : "password"}
                        {...register("password", {
                          required: "Password is required",
                          maxLength: {
                            value: 25,
                            message:
                              "Password must be less than 25 characters",
                          },
                          pattern: {
                            value: /^\S*$/,
                            message: "Password should not contain spaces",
                          },
                        })}
                      />
                      <div
                        onClick={togglePasswordVisibility}
                        className="eyeToggleBtn"
                      >
                        {showPassword ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </div>
                    {errors.password && (
                      <span className="error">{errors.password.message}</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Company fields only when role = AGENCY */}
              {selectedRole === "AGENCY" && (
                <Row>
                  <Col md={6}>
                    <Form.Group className="comn-class-inputs">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your company name"
                        {...register("companyName", { required: true })}
                      />
                      {errors.companyName && (
                        <span className="error">
                          Company name is required
                        </span>
                      )}
                    </Form.Group>
                  </Col>

                  <Col md={6}>
                    <Form.Group className="comn-class-inputs">
                      <Form.Label>Website</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter your website URL"
                        {...register("website")}
                      />
                    </Form.Group>
                  </Col>
                </Row>
              )}

              <Button className="login-btn" type="submit" disabled={isLoading}>
                {isLoading ? "Signing Up..." : "Sign Up"}
              </Button>

              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link href="/login" className="forgot-link">
                  Login here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
