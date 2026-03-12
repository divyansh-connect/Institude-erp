import React, { useState } from "react";
import { studentsData } from "../../../DemoData/LibarySeat";
import StudentPayFee from "./StudentPayFee";

const StudentList = () => {
  const [search, setSearch] = useState("");
  const [payFee, setPayFee] = useState(false);
  const filtered = studentsData.filter((s) =>
    (s.name + s.phone + s.guardian)
      .toLowerCase()
      .includes(search.toLowerCase()),
  );
  return (
    <>
      {payFee && <StudentPayFee setPayFee={setPayFee} />}
      <div className="container-fluid p-3">
        <div className="card shadow-sm">
          <div className="card-body">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="mb-0">Students</h5>
            </div>

            {/* Search */}
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search student..."
              // value={search}
              // onChange={(e) => setSearch(e.target.value)}
            />

            {/* Header Row */}
            <div className="d-none d-md-block">
              <div className="row fw-semibold border-bottom pb-2 mb-2 ">
                <div className="col-md-2">Name</div>
                <div className="col-md-2">Father/Husband</div>
                <div className="col-md-2">Phone</div>
                <div className="col-md-2">Course</div>
                <div className="col-md-2">Status</div>
                <div className="col-md-2 text-end">Action</div>
              </div>
            </div>

            {/* Scrollable List */}
            <div className="students-scroll">
              {filtered.map((s) => (
                <div
                  key={s.id}
                  className="row align-items-center py-2 border-bottom "
                >
                  <div className="col-md-2">{s.name}</div>
                  <div className="col-md-2">{s.guardian}</div>
                  <div className="col-md-2">{s.phone}</div>
                  <div className="col-md-2">{s.course}</div>

                  <div className="col-md-2">
                    <span
                      className={`badge ${
                        s.status === "Paid"
                          ? "bg-success"
                          : s.status === "Partial"
                            ? "bg-warning text-dark"
                            : "bg-danger"
                      }`}
                    >
                      {s.status}
                    </span>
                  </div>

                  <div className="col-md-2 text-end">
                    <button className="btn btn-sm btn-outline-primary me-2">
                      View
                    </button>
                    <button
                      className="btn btn-sm btn-success"
                      onClick={() => {
                        setPayFee(true);
                      }}
                    >
                      Pay Fee
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentList;
