"use client";

import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import Loader from "@/components/Loader";
import { BASE_URL_USER, LOGIN } from "@/API";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  // ------------------ PREFILL REMEMBER ME ------------------
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedEmail = localStorage.getItem("email");
      const storedPassword = localStorage.getItem("password");

      if (storedEmail) setValue("email", storedEmail);
      if (storedPassword) setValue("password", storedPassword);
    }
  }, []);

  // ------------------ SUBMIT HANDLER ------------------
  const submitHandler = async (data) => {
    setIsLoading(true);

    try {
      const response = await axios.post(BASE_URL_USER + LOGIN, data);

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response.data.message);

        if (rememberMe) {
          localStorage.setItem("email", data.email);
          localStorage.setItem("password", data.password);
        } else {
          localStorage.removeItem("email");
          localStorage.removeItem("password");
        }

        const token = response.data.data.access_token;
        localStorage.setItem("token", token);

        router.push("/services");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.error_description || "An error occurred";
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  // ------------------ ALREADY LOGGED IN ------------------
  useEffect(() => {
    if (localStorage.getItem("token")) {
      router.push("/services");
    }
  }, []);

  return (
    <>
      <Loader isLoading={isLoading} />

      <section className="login-section">
        <div className="inner-login-mian">
          <div className="loginupper-right">
            <h2>Log in to your account</h2>
            <p className="forg-pass-text">
              Welcome back! Please fill the information below:
            </p>

            <Form onSubmit={handleSubmit(submitHandler)}>
              <Row>
                {/* Email */}
                <Col md={12}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Username or Email Address"
                      {...register("email", { required: true })}
                    />
                    {errors.email && (
                      <span className="error">E-mail is required</span>
                    )}
                  </Form.Group>
                </Col>

                {/* Password */}
                <Col md={12}>
                  <Form.Group className="comn-class-inputs">
                    <Form.Label>Password</Form.Label>

                    <div className="cstPassGroup">
                      <Form.Control
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter Your Password"
                        onKeyDown={(e) => {
                          if (e.key === " ") e.preventDefault();
                        }}
                        {...register("password", {
                          required: "Password is required",
                          maxLength: {
                            value: 25,
                            message: "Password must be less than 25 characters",
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
                      <span className="error">Password is required</span>
                    )}
                  </Form.Group>
                </Col>
              </Row>

              {/* Remember Me + Forgot Password */}
              <div className="upper-main-forgot-pass d-flex">
                <Form.Group className="custom-checkbox">
                  <Form.Check
                    type="checkbox"
                    className="ps-0"
                    label="Remember Me"
                    id="checkbox1"
                    checked={rememberMe}
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                </Form.Group>

                <Link href="/forgotpassword" className="forgot-link">
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <Button className="login-btn" type="submit">
                Login
              </Button>

              {/* Signup Link */}
              <p className="mt-3 text-center">
                Already have an account?{" "}
                <Link href="/signup" className="forgot-link">
                  Signup here
                </Link>
              </p>
            </Form>
          </div>
        </div>
      </section>
    </>
  );
}
