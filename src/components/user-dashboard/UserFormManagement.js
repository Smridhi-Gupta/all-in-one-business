"use client";

import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment";
import { Button, Modal } from "react-bootstrap";

import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";

import { BASE_URL_USER } from "@/API";

export default function UserFormManagement() {
  const ITEMS_PER_PAGE = 5;

  const [forms, setForms] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading] = useState(false);

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
  }, [searchQuery]);

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
      console.error("Error fetching forms:", error);
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
      <div className="container-fluid">
        <Header />

        <div className="row">
          <Sidebar />

          <div className="col-9 main-dash-left">
            <section className="back-dashboard-sec comn-dashboard-page">
              <div className="main-notification-messege">
                <div className="notifi-list d-flex justify-content-between align-items-center">
                  <h6>Services</h6>
                  <input
                    type="text"
                    placeholder="Search by name or email"
                    className="form-control w-25"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                <div className="notification-table pt-0">
                  <Table>
                    <thead>
                      <tr className="head-class-td">
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Service</th>
                        <th>Date</th>
                        <th>Action</th>
                      </tr>
                    </thead>

                    <tbody>
                      {filteredList?.length > 0 ? (
                        filteredList.map((form, index) => (
                          <tr key={form._id}>
                            <td>
                              {(currentPage - 1) * ITEMS_PER_PAGE + index + 1}
                            </td>
                            <td>{form?.name}</td>
                            <td>{form?.email}</td>
                            <td>{form?.contact}</td>

                            <td>
                              {form.role === "AGENCY"
                                ? form?.serviceProvided
                                : form?.serviceRequired?.name}
                            </td>

                            <td>{formattedDate(form?.createdAt)}</td>

                            <td>
                              <span
                                className="text-primary cursor-pointer"
                                style={{ cursor: "pointer" }}
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
                          <td colSpan={7} className="text-center">
                            No forms found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </Table>

                  {/* Pagination */}
                  {filteredList?.length > 0 && (
                    <div className="cstm_pagination text-center">
                      <Pagination>
                        <Pagination.First
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}
                        />
                        <Pagination.Prev
                          onClick={() =>
                            setCurrentPage(Math.max(currentPage - 1, 1))
                          }
                          disabled={currentPage === 1}
                        />
                        {Array.from({ length: totalPages }).map((_, index) => (
                          <Pagination.Item
                            key={index + 1}
                            active={index + 1 === currentPage}
                            onClick={() => setCurrentPage(index + 1)}
                          >
                            {index + 1}
                          </Pagination.Item>
                        ))}
                        <Pagination.Next
                          onClick={() =>
                            setCurrentPage(
                              Math.min(currentPage + 1, totalPages)
                            )
                          }
                          disabled={currentPage === totalPages}
                        />
                        <Pagination.Last
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}
                        />
                      </Pagination>
                    </div>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* View Modal */}
      <Modal
        show={showViewModal}
        onHide={() => setShowViewModal(false)}
        centered
        size="lg"
        className="comm_modal cst_inner_wid_modal"
      >
        <Modal.Header closeButton>
          <Modal.Title className="fs-1">Form Details</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {selectedForm ? (
            <div className="p-3 fs-4">
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
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowViewModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
