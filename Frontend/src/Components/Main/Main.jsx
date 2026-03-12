import React from "react";
import Curousel from "./Curousel/Curousel";
import SectionFaculty from "./Section/SectionFaculty";
import SectionFeaturette from "./Section/SectionFeaturette";
import Footer from "./Footer";
import Courses from "./Courses/Courses";
import Facilities from "./Facilities/Facilities";
import StudyMaterials from "./StudyMaterials/StudyMaterials";
import Announcements from "./Announcements/Announcements";
import Admissions from "./Admissions/Admissions";

const Main = () => {
  return (
    <>
      <Curousel></Curousel>

      <section className="  bg-body-secondary  py-4" id="courses">
        <Courses></Courses>
        <Facilities></Facilities>
      </section>
      <StudyMaterials></StudyMaterials>
      <Announcements></Announcements>
      {/* <Admissions></Admissions> */}
      {/* <SectionFeaturette></SectionFeaturette> */}
      <SectionFaculty></SectionFaculty>
      <Footer></Footer>
    </>
  );
};

export default Main;
