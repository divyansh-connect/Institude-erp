import React from "react";

const Curousel = () => {
  return (
    <>
      <div
        id="myCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="4000"
      >
        <div className="carousel-inner mt-5">
          {/* Slide 1 */}
          <div className="carousel-item active">
            <div className="carousel-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b"
              className="d-block w-100 carousel-img"
              alt="University Campus"
            />
            <div className="carousel-caption text-center">
              <h1 className="fw-bold display-4">University Student Portal</h1>
              <p className="lead">
                Access academic programs, structured learning resources, and
                official university services in one place.
              </p>
              <a className="btn btn-primary btn-lg" href="#programs">
                Explore Programs
              </a>
            </div>
          </div>

          {/* Slide 2 */}
          <div className="carousel-item">
            <div className="carousel-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              className="d-block w-100 carousel-img"
              alt="Study Materials"
            />
            <div className="carousel-caption text-center">
              <h1 className="fw-bold display-4">Study Materials & Resources</h1>
              <p className="lead">
                Download lecture notes, reference materials, and academic
                documents securely.
              </p>
              <a className="btn btn-primary btn-lg " href="#materials">
                View Study Materials
              </a>
            </div>
          </div>

          {/* Slide 3 */}
          <div className="carousel-item">
            <div className="carousel-overlay"></div>
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              className="d-block w-100 carousel-img"
              alt="Examination & Results"
            />
            <div className="carousel-caption text-center">
              <h1 className="fw-bold display-4">Examination & Results</h1>
              <p className="lead">
                Check examination schedules and access your academic results
                anytime.
              </p>
              <a className="btn btn-primary btn-lg" href="#results">
                Check Results
              </a>
            </div>
          </div>
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
};

export default Curousel;
