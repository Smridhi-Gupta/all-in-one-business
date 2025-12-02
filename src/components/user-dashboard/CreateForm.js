"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-toastify";
import { BASE_URL_USER } from "@/API";
import Sidebar from "./Sidebar";

const CreateForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    companyName: "",
    website: "",
    serviceRequired: "",
    serviceProvided: "",
    message: "",
    consentToContact: false,
    role: "",
  });

  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState([]);
  const router = useRouter();

  // ✅ Fetch user profile
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get(`${BASE_URL_USER}/view-profile`, {
          headers: { Token: localStorage.getItem("token") },
        });

        if (res.data?.data) {
          const user = res.data.data;
          setFormData((prev) => ({
            ...prev,
            name: user.name || "",
            email: user.email || "",
            contact: user.contact || "",
            companyName: user.companyName || "",
            website: user.website || "",
            role: user.role || "",
          }));
        }
      } catch (error) {
        toast.error("Failed to load profile data.");
      }
    };

    fetchProfile();
  }, []);

  // ✅ Fetch services
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get(`${BASE_URL_USER}/services`, {
          headers: { Token: localStorage.getItem("token") },
        });

        if (res.data?.services?.services) {
          setServices(res.data.services.services);
        } else {
          toast.error("No services found.");
        }
      } catch (error) {
        toast.error("Failed to load services list.");
      }
    };

    fetchServices();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // ✅ Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload =
        formData.role === "AGENCY"
          ? { ...formData, serviceProvided: formData.serviceProvided }
          : { ...formData, serviceRequired: formData.serviceRequired };

      if (formData.role === "AGENCY") {
        delete payload.serviceRequired;
      } else {
        delete payload.serviceProvided;
      }

      await axios.post(`${BASE_URL_USER}/user-form`, payload, {
        headers: { Token: localStorage.getItem("token") },
      });

      toast.success("Form Submitted Successfully!");

      setFormData((prev) => ({
        ...prev,
        contact: "",
        serviceRequired: "",
        serviceProvided: "",
        message: "",
        consentToContact: false,
      }));

      router.push("/services"); // ✅ Next.js navigation
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to submit form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <Sidebar />

      <div className="flex-1 p-8 ml-16">

        {/* ✅ Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6">
          <Link href="/forms" className="hover:text-blue-600">
            Form Management
          </Link>{" "}
          / <span className="text-gray-800 font-medium">Create Form</span>
        </div>

        <div className="bg-white rounded-xl shadow p-6 max-w-5xl">
          <h3 className="text-xl font-semibold mb-6">Create New Form</h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  disabled
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  disabled
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                />
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Contact Number
                </label>
                <input
                  type="text"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  name="role"
                  value={formData.role}
                  disabled
                  className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                >
                  <option value="">Select Role</option>
                  <option value="USER">User</option>
                  <option value="AGENCY">Agency</option>
                </select>
              </div>
            </div>

            {/* Agency Fields */}
            {formData.role === "AGENCY" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    value={formData.companyName}
                    disabled
                    className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Website
                  </label>
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    disabled
                    className="w-full border rounded-md px-4 py-2 bg-gray-100 cursor-not-allowed"
                  />
                </div>
              </div>
            )}

            {/* Conditional Service */}
            {formData.role === "AGENCY" ? (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Provided
                </label>
                <input
                  type="text"
                  name="serviceProvided"
                  value={formData.serviceProvided}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            ) : (
              <div>
                <label className="block text-sm font-medium mb-1">
                  Service Required
                </label>
                <select
                  name="serviceRequired"
                  value={formData.serviceRequired}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select Service</option>
                  {services.map((service) => (
                    <option key={service._id} value={service._id}>
                      {service.title || service.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Consent */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="consentToContact"
                checked={formData.consentToContact}
                onChange={handleChange}
                className="h-4 w-4"
              />
              <span className="text-sm">I consent to be contacted</span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Form"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateForm;
