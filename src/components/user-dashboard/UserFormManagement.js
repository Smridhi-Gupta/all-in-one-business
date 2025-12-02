"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";

import { BASE_URL_USER } from "@/API";
import Sidebar from "./Sidebar";

export default function UserFormManagement() {
  const ITEMS_PER_PAGE = 5;

  const [forms, setForms] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedForm, setSelectedForm] = useState(null);
  const [showViewModal, setShowViewModal] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : "";

  const formattedDate = (date) => moment(date).format("DD-MM-YYYY | HH:mm");

  // 🔹 Fetch Forms
  useEffect(() => {
    getUserForms();
  }, [currentPage]);

  // 🔹 Search filtering
  useEffect(() => {
    filterList(searchQuery);
  }, [searchQuery, forms, currentPage]);

  const getUserForms = async () => {
    try {
      const res = await axios.get(`${BASE_URL_USER}/user-form`, {
        headers: { Token: token },
      });

      if (res.status === 200 && Array.isArray(res.data.data)) {
        const data = res.data.data;
        setForms(data);

        const totalCount = data.length;
        setTotalPages(Math.ceil(totalCount / ITEMS_PER_PAGE));

        const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
        setFilteredList(data.slice(startIndex, startIndex + ITEMS_PER_PAGE));
      } else {
        toast.error("No forms found");
      }
    } catch (error) {
      toast.error("Failed to fetch user forms");
    }
  };

  const filterList = (query) => {
    if (query === "") {
      setFilteredList(
        forms.slice(
          (currentPage - 1) * ITEMS_PER_PAGE,
          currentPage * ITEMS_PER_PAGE
        )
      );
    } else {
      const filtered = forms.filter(
        (form) =>
          form?.name?.toLowerCase().includes(query.toLowerCase()) ||
          form?.email?.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredList(filtered.slice(0, ITEMS_PER_PAGE));
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex">
        <Sidebar />

        <div className="flex-1 p-8 ml-16">

          <div className="bg-white rounded-xl shadow p-6 mt-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <h6 className="text-lg font-semibold">Services</h6>
              <input
                type="text"
                placeholder="Search by name or email"
                className="border rounded-md px-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr className="text-left text-sm text-gray-600">
                    <th className="px-4 py-3">Sr. No.</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Contact</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Action</th>
                  </tr>
                </thead>

                <tbody className="divide-y">
                  {filteredList?.length > 0 ? (
                    filteredList.map((form, index) => (
                      <tr key={form._id} className="hover:bg-gray-50">
                        <td className="px-4 py-3 text-sm">
                          {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                        </td>
                        <td className="px-4 py-3 text-sm">{form?.name}</td>
                        <td className="px-4 py-3 text-sm">{form?.email}</td>
                        <td className="px-4 py-3 text-sm">{form?.contact}</td>

                        <td className="px-4 py-3 text-sm">
                          {form.role === "AGENCY"
                            ? form?.serviceProvided
                            : form?.serviceRequired?.name}
                        </td>

                        <td className="px-4 py-3 text-sm">
                          {formattedDate(form?.createdAt)}
                        </td>

                        <td className="px-4 py-3 text-sm">
                          <span
                            className="text-blue-600 cursor-pointer hover:underline"
                            onClick={() => {
                              setShowViewModal(true);
                              setSelectedForm(form);
                            }}
                          >
                            View
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td
                        colSpan={7}
                        className="text-center py-6 text-gray-500"
                      >
                        No forms found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            {filteredList?.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-6">
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  First
                </button>

                <button
                  onClick={() => setCurrentPage(Math.max(currentPage - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Prev
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => setCurrentPage(index + 1)}
                    className={`px-3 py-1 border rounded ${
                      currentPage === index + 1
                        ? "bg-blue-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    setCurrentPage(Math.min(currentPage + 1, totalPages))
                  }
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Next
                </button>

                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-1 border rounded disabled:opacity-50"
                >
                  Last
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* View Modal */}
      {showViewModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-lg w-full max-w-2xl p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Form Details</h2>
              <button
                onClick={() => setShowViewModal(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                ✕
              </button>
            </div>

            {selectedForm ? (
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Name:</strong> {selectedForm?.name}
                </p>
                <p>
                  <strong>Email:</strong> {selectedForm?.email}
                </p>
                <p>
                  <strong>Contact:</strong> {selectedForm?.contact}
                </p>
                <p>
                  <strong>Company Name:</strong>{" "}
                  {selectedForm?.companyName || "—"}
                </p>
                <p>
                  <strong>Website:</strong> {selectedForm?.website || "—"}
                </p>
                <p>
                  <strong>Service Required:</strong>{" "}
                  {selectedForm?.serviceRequired?.name || "—"}
                </p>
                <p>
                  <strong>Message:</strong>{" "}
                  {selectedForm?.message || "No message provided"}
                </p>
                <p>
                  <strong>Role:</strong> {selectedForm?.role}
                </p>
                <p>
                  <strong>Submitted On:</strong>{" "}
                  {formattedDate(selectedForm?.createdAt)}
                </p>
              </div>
            ) : (
              <p>No data found</p>
            )}

            <div className="mt-6 text-right">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-4 py-2 border rounded hover:bg-gray-100"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
