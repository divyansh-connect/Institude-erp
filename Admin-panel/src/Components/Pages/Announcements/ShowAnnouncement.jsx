import React from "react";

const ShowAnnouncement = () => {
  return (
    <>
      <div className="card shadow-sm">
        <div className="card-body">
          <h5 className="mb-3">Published Announcements</h5>

          <div className="row g-3">
            {/* Announcement Card */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 border">
                <div className="card-body">
                  <h6 className="fw-semibold mb-2">PGDCA Exam Schedule</h6>

                  <p className="text-muted small mb-3">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, nostrum? Corrupti, debitis amet. Quisquam, minus
                    consequuntur in, reprehenderit architecto, optio laudantium
                    velit obcaecati at consectetur ipsam. Nulla itaque delectus
                    officiis.
                  </p>

                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-secondary">27-10-2026</small>

                    <button className="btn btn-sm btn-outline-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowAnnouncement;
