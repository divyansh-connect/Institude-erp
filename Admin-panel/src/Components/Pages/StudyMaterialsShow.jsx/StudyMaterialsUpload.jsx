import React, { use, useState } from "react";
import { useRef } from "react";

const StudyMaterialsUpload = ({ uploadMaterials, setUploadMaterials }) => {
  const studyCourses = useRef();
  const studyTitle = useRef();
  const studyFile = useRef();
  const [uploadInput, setUploadInput] = useState("");
  const [validator, setValidator] = useState({
    title: "",
    upload: "",
  });

  let error = {};
  const handleSubmit = (e) => {
    e.preventDefault();
    const demoImput = uploadInput;
    const courses = studyCourses.current.value;
    const title = studyTitle.current.value.trim();
    const upload = studyFile.current.files[0];
    console.log(title, upload);

    if (!upload) {
      error.upload = "select pdf";
    }
    if (!demoImput) {
      error.upload = "First upload pdf";
    }
    if (!title) {
      error.title = "Title is required";
    }
    setValidator(error);
    if (Object.keys(error).length === 0) {
      setUploadMaterials([
        {
          course: courses,
          title: title,
          date: Date.now(),
          file: upload,
        },
        ...uploadMaterials,
      ]);
      studyCourses.current.selectedIndex = 0;
      studyTitle.current.value = "";
      studyFile.current.value = "";
      setUploadInput("");
    }
  };

  return (
    <div className="mt-4 mb-3">
      <div className="card shadow p-3 form-card">
        <h3 className="text-center mb-4">Upload Study Materials</h3>

        <form onSubmit={handleSubmit}>
          <div className="row align-items-end">
            {/* Course */}
            <div className="col-md-2 mb-3">
              <label className="form-label">Course*</label>
              <select className="form-select" ref={studyCourses}>
                <option>DCA</option>
                <option>PGDCA</option>
              </select>
            </div>

            {/* Title */}
            <div className="col-md-6 mb-3">
              <label className="form-label">
                Title*
                {validator.title && (
                  <span className="mx-2 text-danger text-center small">
                    {validator.title}
                  </span>
                )}
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                required
                ref={studyTitle}
              />
            </div>

            {/* File Upload */}
            <div className="col-md-4 mb-3">
              <label className="form-label">
                Upload Pdf*
                {validator.upload && (
                  <span className="mx-2 text-danger text-center small">
                    {validator.upload}
                  </span>
                )}
              </label>
              <div className="d-flex">
                <input
                  type="file"
                  ref={studyFile}
                  style={{ display: "none" }}
                  onChange={(e) => setUploadInput(e.target.value)}
                />
                <button
                  type="button"
                  className={`btn btn-outline-primary`}
                  onClick={() => {
                    studyFile.current.click();
                  }}
                >
                  Upload
                </button>
                <input
                  type="text"
                  className="form-control mx-1"
                  readOnly
                  value={uploadInput}
                />
              </div>
            </div>

            {/* Button */}
            <div className="col-md-12 mb-3">
              <button type="submit" className="btn btn-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudyMaterialsUpload;
