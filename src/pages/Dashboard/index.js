import React from "react";
import HardSkills from "../../Sections/Dashboard/HardSkills";
import AboutText from "../../Sections/Dashboard/AboutText";
import "./style.scss";
import Services from "../../Sections/Dashboard/Services";
import Experiences from "../../Sections/Dashboard/Experiences";

export default function Dashboard() {
  return (
    <div className="all-dash">
      <div className="space"></div>
      <HardSkills />
      <div className="space"></div>
      <AboutText />
      <div className="space"></div>
      <Services />
      <div className="space"></div>
      {/* <Experiences />
      <div className="space"></div> */}
    </div>
  );
}
