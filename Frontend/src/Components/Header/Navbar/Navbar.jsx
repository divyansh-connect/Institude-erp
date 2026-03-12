import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top shadow-sm py-3">
        <div className="container ">
          {/* Brand */}
          <a className="navbar-brand fw-bold fs-5" href="#">
            ACT Computer
          </a>

          {/* Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse " id="navbarContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 custom-nav ">
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#courses">
                  Courses
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#materials">
                  Study Materials
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#announcements">
                  Announcements
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#results">
                  Examination Results
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#admissions">
                  Admissions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
