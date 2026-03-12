import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const StudentPayFee = ({ setPayFee }) => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [feeType, setFeeType] = useState("");
  const [method, setMethod] = useState("Cash");
  const [customFee, setCustomFee] = useState("");

  const [saving, setSaving] = useState(false);
  const [showCustom, setShowCustom] = useState(false);
  const [valueError, setValueError] = useState({
    amount: "",
    paymentStatus: "",
  });

  return (
    <>
      <div className="overlay"></div>
      <div
        className="modal fade show ms-md-5"
        id="exampleModalCenteredScrollable"
        tabIndex="-1"
        aria-labelledby="institudeStudentFeeModal"
        style={{ display: "block" }}
        aria-modal="true"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            {/* Header */}
            <div className="modal-header">
              <h5 className="modal-title" id="institudeStudentFeeModal">
                Pay Fee
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={() => {
                  setPayFee(false);
                }}
              ></button>
            </div>

            {/* Body */}
            <div className="modal-body">
              {/* Student Info */}
              <div className="mb-3">
                <div className="fw-semibold">Student Name</div>
                <div className="text-muted small">
                  student course (student course Full Name)
                </div>
              </div>

              {/* Fee Summary */}
              <div className="border rounded p-2 mb-3 small">
                <div className="d-flex justify-content-between">
                  <span>Total Fee</span>
                  <span>₹ student totalFee</span>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Paid</span>
                  <span>₹ student paidFee</span>
                </div>

                <div className="d-flex justify-content-between fw-semibold text-danger">
                  <span>Remaining</span>
                  <span>₹ remaining </span>
                </div>
              </div>

              {/* Form */}
              <form>
                {/* Fee Type */}
                <div className="mb-3">
                  <label className="form-label">Fee Type</label>

                  <select
                    className="form-select"
                    value={feeType}
                    onChange={(e) => {
                      const value = e.target.value;
                      setFeeType(value);
                      setShowCustom(value === "other");
                    }}
                  >
                    <option value="">Select Fee Type</option>
                    <option value="admission">Admission Fee</option>
                    <option value="enrollment">Enrollment Fee</option>
                    <option value="exam1">Examination Fee (1st Sem)</option>
                    <option value="exam2">Examination Fee (2nd Sem)</option>
                    <option value="monthly">Monthly Fee</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {showCustom && (
                  <div className="mb-3">
                    <label className="form-label">Fee Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter custom fee title (e.g.  Fine)"
                      value={customFee}
                    />
                  </div>
                )}

                {/* Note */}

                {/* Amount */}
                <div className="mb-3">
                  <label className="form-label">Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>

                {/* Payment Method */}
                <div className="mb-3">
                  <label className="form-label">Payment Method</label>
                  <select
                    className="form-select"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                  >
                    <option value="">Select Payment Type</option>
                    <option>Cash</option>
                    <option>UPI</option>
                  </select>
                </div>

                {/* Footer Buttons */}
                <div className="d-flex justify-content-end gap-2">
                  <button
                    type="button"
                    className="btn btn-light"
                    data-bs-dismiss="modal"
                    onClick={() => {
                      setPayFee(false);
                    }}
                  >
                    Cancel
                  </button>

                  <button type="submit" className="btn btn-primary">
                    Pay Fee
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentPayFee;
