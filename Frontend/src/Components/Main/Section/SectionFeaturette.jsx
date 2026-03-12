import React from "react";

const SectionFeaturette = () => {
  return (
    <div id="coures" className="pt-4">
      <>
        <hr className="featurette-divider my-5" />
        {/* Featurette 1 */}
        <div className="row featurette align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              The first standout title{" "}
              <span className="text-body-secondary">
                It will blow your mind.
              </span>
            </h2>

            <p className="lead">
              The human face is a very complex and distinctive part of the body.
              It includes more than 40 structurally and functionally independent
              muscles, each of which can be activated independently. It is one
              of the strongest indicators of human emotions.
            </p>
          </div>

          <div className="col-md-5 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text
                x="50%"
                y="50%"
                fill="var(--bs-secondary-color)"
                dy=".3em"
                textAnchor="middle"
              >
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider my-5" />
        {/* Featurette 2 */}
        <div className="row featurette align-items-center">
          <div className="col-md-7 order-md-2">
            <h2 className="featurette-heading fw-normal lh-1">
              Oh yes, that's good{" "}
              <span className="text-body-secondary">See for yourself.</span>
            </h2>

            <p className="lead">
              When we laugh or cry, we display our emotions, allowing others to
              understand us by reading facial changes such as the eyes,
              eyebrows, eyelids, nose, and lips.
            </p>
          </div>

          <div className="col-md-5 order-md-1 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text
                x="50%"
                y="50%"
                fill="var(--bs-secondary-color)"
                dy=".3em"
                textAnchor="middle"
              >
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider my-5" />
        {/* Featurette 3 */}
        <div className="row featurette align-items-center">
          <div className="col-md-7">
            <h2 className="featurette-heading fw-normal lh-1">
              The first standout title{" "}
              <span className="text-body-secondary">
                It will blow your mind.
              </span>
            </h2>

            <p className="lead">
              The human face is a very complex and distinctive part of the body.
              It includes more than 40 structurally and functionally independent
              muscles, each of which can be activated independently. It is one
              of the strongest indicators of human emotions.
            </p>
          </div>

          <div className="col-md-5 text-center">
            <svg
              className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
              width="500"
              height="500"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              preserveAspectRatio="xMidYMid slice"
              aria-label="Placeholder"
            >
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="var(--bs-secondary-bg)" />
              <text
                x="50%"
                y="50%"
                fill="var(--bs-secondary-color)"
                dy=".3em"
                textAnchor="middle"
              >
                500x500
              </text>
            </svg>
          </div>
        </div>

        <hr className="featurette-divider my-5" />
      </>
    </div>
  );
};

export default SectionFeaturette;
