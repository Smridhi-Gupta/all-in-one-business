"use client";

import { useState } from "react";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

import loginimg from "@/Assets/Images/Phrase_box_Logo.jpg";
import logo from "@/Assets/Images/Logos/png/phraselogo.png";

import Loader from "@/components/Loader";
import { BASE_URL_USER, FORGOT_PASSWORD } from "@/API";

export default function ForgetPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.put(BASE_URL_USER + FORGOT_PASSWORD, data);

      if (response.data.code === 200 && response.data.status === true) {
        toast.success(response.data.data);
        router.push("/login");
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

      <section className="login-section">
        <div className="container-fluid g-0">
          <Row className="row-min-h">
            {/* Left Image */}
            <Col lg={6} className="img-n">
              <div className="upper-fig-main-login">
                <figure className="login-img-main">
                  <Image src={loginimg} alt="login" className="img-fluid" />
                </figure>
              </div>
            </Col>

            {/* Right Form */}
            <Col lg={6}>
              <div className="inner-login-mian">
                <div className="loginupper-right">
                  <figure
                    className="creden_page_logo"
                    onClick={() => router.push("/")}
                    style={{ cursor: "pointer" }}
                  >
                    <Image src={logo} alt="logo" className="img-fluid" />
                  </figure>

                  <h2>Forgot Password</h2>
                  <p className="forg-pass-text">
                    Don’t worry we will help you recover your password
                  </p>

                  <Form onSubmit={handleSubmit(submitHandler)}>
                    <Row>
                      <Col md={12}>
                        <Form.Group
                          controlId="formGridEmail"
                          className="comn-class-inputs"
                        >
                          <Form.Label>Email Address</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="Enter Your Email Address"
                            {...register("email", { required: true })}
                          />
                          {errors.email && (
                            <span className="error">E-mail is required</span>
                          )}
                        </Form.Group>
                      </Col>
                    </Row>

                    <Button className="login-btn" type="submit">
                      Reset Password
                    </Button>

                    <div className="text-center mt-3">
                      <Link href="/login" className="link_back_btn">
                        Back to Login
                      </Link>
                    </div>
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </>
  );
}
