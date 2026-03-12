import React from "react";
import AddAnnouncement from "./AddAnnouncement";
import ShowAnnouncement from "./ShowAnnouncement";

const Announcements = () => {
  return (
    <>
      <h3 className="mb-3">Manage Announcements</h3>
      <div className="row ">
        <div className="col-12">
          <AddAnnouncement />
        </div>
        <div className="col-12 ">
          <ShowAnnouncement />
        </div>
      </div>
    </>
  );
};

export default Announcements;
