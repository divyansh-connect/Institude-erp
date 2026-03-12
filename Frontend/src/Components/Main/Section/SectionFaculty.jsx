import React from "react";

const SectionFaculty = () => {
  return (
    <section className="py-3 bg-danger">
      <div className="container">
        {/* Heading */}
        <div className="pt-4 text-center mb-5">
          <h1 className="fw-bold text-white">Our Faculty</h1>
          <p className="text-warning ">
            Experienced educators guiding students toward academic excellence.
          </p>
        </div>

        <div className="row justify-content-center g-4">
          {/* Faculty 1 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                className="card-img-top"
                alt="Faculty 1"
              />
              <div className="card-body">
                <h5 className="fw-bold">Mr. Rajesh Sharma</h5>
                <p className="text-primary mb-1">Senior Computer Instructor</p>
                <p className="text-muted small">
                  10+ years of experience in programming, database systems, and
                  software development.
                </p>
              </div>
            </div>
          </div>

          {/* Faculty 2 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                className="card-img-top"
                alt="Faculty 2"
              />
              <div className="card-body">
                <h5 className="fw-bold">Ms. Priya Verma</h5>
                <p className="text-primary mb-1">DCA Program Head</p>
                <p className="text-muted small">
                  Specializes in computer fundamentals, MS Office training, and
                  practical lab sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Faculty 3 */}
          <div className="col-md-4">
            <div className="card border-0 shadow-sm text-center h-100">
              <img
                src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
                className="card-img-top "
                alt="Faculty 3"
              />
              <div className="card-body">
                <h5 className="fw-bold">Mr. Amit Singh</h5>
                <p className="text-primary mb-1">CPCT Trainer</p>
                <p className="text-muted small">
                  Dedicated trainer for CPCT preparation with focus on typing
                  skills and computer proficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFaculty;
