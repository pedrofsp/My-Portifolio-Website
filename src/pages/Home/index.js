import React from 'react';
import Introduction from '../../Sections/Introduction';
import Services from '../../Sections/Services';
import About from '../../Sections/About';
import Experiencies from '../../Sections/Experencies';
import Contact from '../../Sections/Contact';
import CV from '../../Sections/CV';
import './style.scss';

export default function Home() {
  return (
    <div className="all-home">
      <Introduction />
      <div className="space"></div>
      <About />
      <div className="space"></div>
      <Services />
      <div className="space"></div>
      <Experiencies />
      <div className="space"></div>
      <CV />
      <div className="space"></div>
      <Contact />
    </div>
  );
}
