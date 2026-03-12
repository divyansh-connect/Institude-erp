import React from "react";
import { PiDownloadSimpleFill } from "react-icons/pi";

const StudyMaterials = () => {
  return (
    <section
      className="bg-body-tertiary py-lg-5 bg-style study-materials-section"
      id="materials"
    >
      <div className="container pt-3 h-100 d-flex shadow-sm rounded study-materials-div">
        {/* Heading */}
        <div className="text-center mb-1 mb-lg-4 study-materials-left">
          <h1 className="fw-bold text-danger bg-opacity-50 pt-2 pt-lg-5 pb-3 bg-white mb-0">
            Study Materials
          </h1>
          <p className="text-danger bg-white p-3 p-lg-2 ">
            Download notes, syllabus and academic resources.
          </p>
        </div>

        {/* Scroll Area */}
        <div className="materials-scroll-area flex-grow-1 px-2">
          {/* DCA */}
          <div className="row justify-content-center mb-1 mb-lg-4">
            <div className="col-12 py-2 col-md-10 bg-materials-colour shadow rounded ">
              <h5 className="fw-bold mb-3 pt-2 ps-2">
                Diploma in Computer Applications
              </h5>

              <ul className="list-group shadow-sm materials-list-scroll">
                <li className="list-group-item d-flex bg-materials-li justify-content-between align-items-center">
                  MS Office Notes
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>
                <li className="list-group-item d-flex bg-materials-li justify-content-between align-items-center">
                  MS Office Notes
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>

                <li className="list-group-item d-flex bg-materials-li justify-content-between align-items-center">
                  MS Office Notes
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* PGDCA */}
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 py-2 bg-materials-colour shadow rounded ">
              <h5 className="fw-bold mb-3 pt-2 ps-2">
                Post Graduate Diploma in Computer Applications
              </h5>

              <ul className="list-group shadow-sm materials-list-scroll">
                <li className="list-group-item bg-materials-li d-flex justify-content-between align-items-center">
                  Database Management
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>
                <li className="list-group-item bg-materials-li d-flex justify-content-between align-items-center">
                  Database Management
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>

                <li className="list-group-item d-flex bg-materials-li justify-content-between align-items-center">
                  Project Guidelines
                  <button className="btn btn-sm btn-outline-primary">
                    <PiDownloadSimpleFill />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyMaterials;
