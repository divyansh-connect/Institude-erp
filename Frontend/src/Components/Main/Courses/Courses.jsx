import React from "react";
import DCA from "../../../assets/DCA.png";
import PGDCA from "../../../assets/PGDCA.png";

const Courses = () => {
  return (
    <>
      <div className="container bg-style pb-2 bg-dark-subtle shadow rounded mb-3">
        {/* Heading */}
        <div className="text-center pt-4 mb-5">
          <h1 className="fw-bold text-danger ">ACT Computer Courses</h1>
          <p className="text-black">
            Affiliated to Makhanlal Chaturvedi National University – Offering
            Recognized DCA & PGDCA Programs with Industry-Focused Training
          </p>
        </div>

        {/* DCA */}
        <div className="card mb-4 bg-body-tertiary shadow border-2 p-2">
          <div className="row g-0 align-items-stretch">
            <div className="col-12 col-lg-5 d-flex Courses-div">
              <img
                src={DCA}
                className="img-fluid rounded-start w-100 h-100 object-fit-cover"
                alt="DCA"
              />
            </div>
            <div className="col-lg-7">
              <div className="card-body p-4">
                <h4 className="fw-bold">
                  DCA – Diploma in Computer Applications
                </h4>
                <p className="text-muted">
                  A Comprehensive Foundation Program Covering MS Office, Tally,
                  Internet, Programming Basics, and Practical Computer Skills
                  for Career Growth
                </p>
                <ul className="mb-3">
                  <li>Duration: 6 Months</li>
                  <li>Practical Training</li>
                  <li>Certification Included</li>
                </ul>
                <a href="#admissions" className="btn btn-primary w-100">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* PGDCA */}
        <div className="card mb-4 bg-body-tertiary shadow border-2 p-2 ">
          <div className="row g-0 align-items-stretch flex-md-row-reverse">
            <div className="col-12 col-lg-5 d-flex Courses-div">
              <img
                src={PGDCA}
                className="img-fluid rounded-end w-100 h-100 object-fit-cover"
                alt="PGDCA"
              />
            </div>
            <div className="col-lg-7">
              <div className="card-body p-4">
                <h4 className="fw-bold">
                  PGDCA – Post Graduate Diploma in Computer Applications
                </h4>
                <p className="text-muted">
                  Master Advanced Computer Applications, Programming Languages,
                  DBMS, and Practical Software Development with
                  Industry-Oriented Training
                </p>
                <ul className="mb-3">
                  <li>Duration: 1 Year</li>
                  <li>Project Based Learning</li>
                  <li>Industry Oriented Curriculum</li>
                </ul>
                <a href="#admissions" className="btn btn-primary w-100">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
