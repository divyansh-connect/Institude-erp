import React from "react";
import Library from "../../../assets/Library.jpg";
import CPCT from "../../../assets/CPCT.jpg";

const Facilities = () => {
  return (
    <>
      <div className="container pt-5 pb-3 bg-danger shadow rounded facilities-section mb-3">
        <div className="text-center mb-5">
          <h1 className="fw-bold text-white">
            Facilities & Certification Excellence
          </h1>
          <p className="text-muted">
            Modern Infrastructure, CPCT-Focused Training, Separate Library Study
            Area, Practical-Based Learning Environment, and Authorized
            University Certification to Shape Future Professionals
          </p>
        </div>

        <div className="row g-4 justify-content-center ">
          {/* Library */}
          <div className="col-md-6 ">
            <div className="card h-100 shadow-sm border-0 facilities-card facilities-img">
              <img
                src={Library}
                className="card-img-top facilities-img "
                alt="Library"
              />
              <div className="card-body text-center facilities-div py-0 pt-1">
                <h5 className="fw-bold">Study Zone – Knowledge Library</h5>
                <p className="text-muted mb-0">
                  Comfortable Space for Reading & Preparation.
                </p>
              </div>
            </div>
          </div>

          {/* CPCT */}
          <div className="col-md-6 ">
            <div className="card h-100 shadow-sm border-0 facilities-card facilities-img">
              <img
                src={CPCT}
                className="card-img-top facilities-img"
                alt="CPCT Training"
              />
              <div className="card-body text-center facilities-div py-0 pt-1">
                <h5 className="fw-bold">CPCT Training & Practice Module</h5>
                <p className="text-muted mb-0">
                  Hindi & English Typing with Practical Computer Training.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
