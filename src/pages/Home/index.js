import React from "react";
import Introduction from "../../Sections/Home/Introduction";
import Services from "../../Sections/Home/Services";
import About from "../../Sections/Home/About";
import Experiencies from "../../Sections/Home/Experencies";
import Contact from "../../Sections/Home/Contact";
import CV from "../../Sections/Home/CV";
import Navbar from "../../components/navbar";
import "./style.scss";

export default function Home() {
  return (
    <div className="all-home">
      <Navbar />
      <div className="space" style={{ backgroundColor: "lightgray" }}></div>
      <div id="top">
        <Introduction />
      </div>
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
