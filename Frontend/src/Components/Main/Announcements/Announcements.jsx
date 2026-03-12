import React from "react";

const Announcements = () => {
  return (
    <section
      className="py-4 bg-style bg-body-tertiary announcements-section"
      id="announcements"
    >
      <div className="container bg-style bg-announcements pt-4 h-100 d-flex flex-column rounded shadow">
        <div className="text-center mb-4 bg-announcements-img rounded-2">
          <h1 className="fw-bold text-white py-3 m-0">Announcements</h1>
          <p className="p-3 text-danger bg-light bg-opacity-50">
            Latest academic updates and official notices.
          </p>
        </div>

        {/* Scroll Area */}
        <div className="announcements-scroll-area flex-grow-1  ">
          {/* Notice 1 */}
          <div className="announcement-item mb-4 p-3 bg-announcements-li shadow-sm border border-2 rounded-4">
            <div className="row align-items-center">
              <div className="col-md-2 text-center announcement-date">
                <h4 className="fw-bold mb-0">15</h4>
                <small>Feb 2026</small>
              </div>

              <div className="col-md-10">
                <h5 className="fw-bold mb-1">PGDCA Exam Schedule Released</h5>
                <p className="text-white-50 mb-0">
                  The examination schedule for PGDCA students has been
                  published. Please check the examination section for details.
                </p>
              </div>
            </div>
          </div>

          {/* Notice 2 */}
          <div className="announcement-item mb-4 p-3 bg-announcements-li shadow-sm border border-2 rounded-4">
            <div className="row align-items-center">
              <div className="col-md-2 text-center announcement-date">
                <h4 className="fw-bold mb-0">10</h4>
                <small>Feb 2026</small>
              </div>

              <div className="col-md-10">
                <h5 className="fw-bold mb-1">CPCT Training Batch Started</h5>
                <p className="text-white-50 mb-0">
                  New CPCT preparation batch has started. Interested students
                  can contact the office for enrollment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Announcements;
