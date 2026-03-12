import React from "react";
import College from "../../../assets/College.jpg";

const Admissions = () => {
  return (
    <section className="Admissions-Section" id="admissions">
      <div className="container-fluid">
        <div className="row d-flex justify-content-around align-items-center">
          <div className="col-md-3 bg-white bg-opacity-75 vh-100">
            <h1>Makhanlal Chaturvedi National University</h1>
          </div>
          {/* <div className="col-md-3"></div> */}
          <div className="col-3 bg-white bg-opacity-75 ">
            <form action="">
              <input type="text" placeholder="Enter Name *" />
              <input type="email" placeholder="Enter Email Address *" />
              <input type="text" placeholder="Enter Email Address *" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Admissions;
