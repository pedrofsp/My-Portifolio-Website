import React from "react";
import Introduction from "../../Sections/Introduction";
import Services from "../../Sections/Services";
import About from "../../Sections/About";
import Experiencies from "../../Sections/Experencies";
import Contact from "../../Sections/Contact";
import CV from "../../Sections/CV";
import "./style.scss";

export default function Home() {
  return (
    <div className="all-home">
      <Introduction />
      <div className="space"></div>
      <div id="career">
        <About />
      </div>
      <div className="space"></div>
      <div id="services">
        <Services />
      </div>
      <div className="space"></div>
      <div id="experiences">
        <Experiencies />
      </div>
      <div className="space"></div>
      <div id="cv">
        <CV />
      </div>
      <div className="space"></div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}
