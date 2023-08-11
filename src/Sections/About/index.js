import React from "react";
import StackComponent from "../../components/Stack";
import TitleComponent from "../../components/Title";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { isMobile } from "../../functions/functions";

const About = ({ english }) => {
  const stackArray = [
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
  ];

  const textEN =
    "In 2019 I started my studies in Computer Science at the Federal University of Lavras, where I learned the main programming concepts (OOP, Data Structures, etc). In the sequence, in 2020 I joined into the Junior Company of my course called Comp Junior, and there I had my first contacts with web development. In addition to work as a Frontend in Vuejs and React Native, in the company I developed my communication and teamwork through agile methodologies (scrum/kanbam) and as a commercial representative. In 2021 I joined as an intern into an Accounting company called Finnac, where I worked on an accounting system, both in front-end with React js and in the back-end with Django REST API. Now in 2022 I was admitted to an international exchange program for the Polytechnic Institute of Braganca in Portugal, making possible new opportunities to develop myself further as a professional and person!";
  const textPT =
    "Em 2019, iniciei meus estudos em Ciência da Computação pela Universidade Federal de Lavras, onde aprendi os conceitos principais de programação (POO, Estrutura de dados, etc.). Na sequência, em 2020, ingressei na Empresa Júnior do meu curso, chamada Comp Júnior, onde tive meus primeiros contatos com desenvolvimento web. Além de trabalhar como Frontend em Vue.js e React Native, na Comp, desenvolvi minha comunicação e trabalho em equipe através de metodologias ágeis (Scrum/Kanban) e como representante comercial. Em 2021, ingressei como estagiário em uma empresa de Contabilidade chamada Finnac, onde trabalhei em um sistema de contabilidades tanto no front-end em React.js quanto no back-end em Django REST API. Por último, em 2022, fui admitido para um programa de intercâmbio no Instituto Politécnico de Portugal, o que está me proporcionando novas oportunidades para me desenvolver ainda mais como profissional!";

  const listStack = stackArray.map((item) => (
    <StackComponent small={isMobile()} text={item} />
  ));

  return (
    <Container className="all-about">
      <TitleComponent text={english ? "My career so far" : "Minha jornada"} />
      <div className="d-flex flex-column flex-md-row">
        <p
          className={`montserrat-regular ${isMobile() ? "" : "lead"}`}
          style={{
            flex: 1.5,
          }}
        >
          {english ? textEN : textPT}
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
