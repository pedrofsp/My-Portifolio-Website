import React, { useEffect, useState } from "react";
import StackComponent from "../../../components/Stack";
import TitleComponent from "../../../components/Title";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { isMobile } from "../../../functions/functions";
import { fetchData } from "../../../Utils/RealtimeDatabaseUtils";

const About = ({ english }) => {
  const [aboutText, setAboutText] = useState({
    en: "I graduated with a degree in Computer Science from the Federal University of Lavras, where I studied key programming concepts such as Object-Oriented Programming and Data Structures. In 2020, I joined Comp Junior, the junior company associated with my course, where I gained my first experience in web development. I worked as a Frontend Developer using Vue.js and React Native, and enhanced my communication and teamwork skills through agile methodologies (Scrum/Kanban), while also serving as a commercial representative. In 2021, I completed an internship at Finnac, an accounting company, where I contributed to developing an accounting system, working on both the frontend (React.js) and backend (Django REST API). In 2022, I participated in an international exchange program at the Polytechnic Institute of Bragança in Portugal, which provided me with further opportunities for professional and personal development.",
    pt: "Sou formado em Ciência da Computação pela Universidade Federal de Lavras, onde estudei conceitos chave de programação, como Programação Orientada a Objetos e Estruturas de Dados. Em 2020, ingressei na Comp Júnior, a empresa júnior do meu curso, onde tive meus primeiros contatos com desenvolvimento web. Trabalhei como Desenvolvedor Frontend utilizando Vue.js e React Native, e aperfeiçoei minhas habilidades de comunicação e trabalho em equipe por meio de metodologias ágeis (Scrum/Kanban), além de atuar como representante comercial. Em 2021, completei um estágio na Finnac, uma empresa de contabilidade, onde contribuí para o desenvolvimento de um sistema contábil, trabalhando tanto no frontend (React.js) quanto no backend (Django REST API). Em 2022, participei de um programa de intercâmbio no Instituto Politécnico de Bragança, em Portugal, o que me proporcionou novas oportunidades de desenvolvimento profissional e pessoal.",
  });

  const [stackArray, setStackArray] = useState([
    "Vue Js",
    "React Js",
    "React Native",
    "Django REST API",
    "Firebase",
    "Sass",
    "Bootstrap",
    "Scrum",
    "Git / Github / Gitlab",
    "C/C++",
    "Python",
    "Java",
    "Figma",
    "Node",
    "Express",
    "Mongo",
    "Mysql",
    "Bubble",
  ]);

  useEffect(() => {
    fetchData("/AboutSection/aboutText/").then((res) => {
      if (res) setAboutText(res);
    });
    fetchData("/AboutSection/HardSkills/").then((res) => {
      if (res) setStackArray(res);
    });
  }, []);

  const listStack = stackArray.map((item, index) => (
    <StackComponent key={index} small={isMobile()} text={item} />
  ));

  return (
    <Container className="all-about">
      <TitleComponent text={english ? "My career so far" : "Minha jornada"} />
      <div className="d-flex flex-column flex-md-row">
        <p
          className={`montserrat-regular ${isMobile() ? "" : "lead"}`}
          style={{
            flex: 1.5,
            fontSize: "18px",
            lineHeight: "1.7",
          }}
        >
          {english ? aboutText.en : aboutText.pt}
        </p>
        <div className="d-none d-md-block mx-3"></div>
        <div style={{ flex: 1 }}>{listStack}</div>
      </div>
    </Container>
  );
};

export default connect((state) => ({
  english: state.english,
}))(About);
