import React from 'react';
import StackComponent from '../../components/Stack';
import TitleComponent from '../../components/Title';
import { connect } from 'react-redux';
import './style.scss';

const About = ({ english }) => {
  const stackArray = [
    'Vue Js',
    'React Js',
    'React Native',
    'Django REST API',
    'Firebase',
    'Sass',
    'Bootstrap',
    'Scrum',
    'Git / Github / Gitlab',
    'C/C++',
    'Python',
    'Java',
    'Figma',
  ];

  const listStack = stackArray.map((item) => (
    <div className="flex-stack">
      <StackComponent text={item} />
      <div className="flex-space"></div>
    </div>
  ));

  return (
    <div className="all-about">
      <div className="content">
        <TitleComponent text={english ? 'My career so far' : 'Minha jornada'} />
        <div className="flex-content">
          {english ? (
            <p>
              In 2019 I started my studies in Computer Science at the Federal
              University of Lavras, where I learned the main programming
              concepts (OOP, Data Structures, etc). In the sequence, in 2020 I
              joined into the Junior Company of my course called Comp Junior,
              and there I had my first contacts with web development. In
              addition to work as a Frontend in Vuejs and React Native, in the
              company I developed my communication and teamwork through agile
              methodologies (scrum/kanbam) and as a commercial representative.
              In 2021 I joined as an intern into an Accounting company called
              Finnac, where I worked on an accounting system, both in front-end
              with React js and in the back-end with Django REST API. Now in
              2022 I was admitted to an international exchange program for the
              Polytechnic Institute of Braganca in Portugal, making possible new
              opportunities to develop myself further as a professional and
              person!
            </p>
          ) : (
            <p>
              Em 2019 iniciei meus estudos em Ciências da Computação pela
              Universidade federal de Lavras onde aprendi os conceitos
              principais de programação (POO, Estrutura de dados e etc). Na
              sequencia, em 2020 ingressei na Empresa Júnior do meu curso
              chamada Comp Júnior e la tive meus primeiros contatos com
              desenvolvimento web. Além de trabalhar como Frontend em Vuejs e
              React Native, na comp eu desenvolvi minha comunição e trabalho em
              equipe atravez de metodologias ageis (scrum/kanbam) e como
              representante comercial. Em 2021 ingressei como estagiario em uma
              empresa de Contabilidade chamada Finnac onde trabalhei em um
              sistema de conbilidades tanto no front-end em React js quanto no
              back-end em Django REST API. E por ultimo em 2022 fui admitido
              para um programa de intercambio para o Instituto Politécnico de
              Portugal o que esta me abrindo novas oportunidades para me
              desenvolver ainda mais como profissional!
            </p>
          )}

          <div className="stack">{listStack}</div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(About);
