import React from "react";

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar navbar-light bg-white shadow-sm px-4">
      {/* Toggle Button (Mobile Only) */}
      <button
        className="btn btn-sm btn-outline-dark d-md-none me-3"
        onClick={toggleSidebar}
      >
        ☰
      </button>

      <span className="navbar-brand mb-0 h5">Dashboard</span>

      <div>
        <span className="me-3">Admin</span>
        <button className="btn btn-sm btn-outline-danger">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
