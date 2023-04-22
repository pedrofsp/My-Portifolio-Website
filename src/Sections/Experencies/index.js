import React, { useState } from "react";
import TitleComponent from "../../components/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "./style.scss";
import { connect } from "react-redux";
import ExperiencesCard from "../../components/ExperiencesCard";
import CompJunior from "../../assets/Images/compjunior.png";
import Construpontes from "../../assets/Images/construpontes.png";
import HHS from "../../assets/Images/hhs.png";
import Sigma from "../../assets/Images/sigma.png";
import Icount from "../../assets/Images/icount.png";

const Experencies = ({ english }) => {
  const [experiences] = useState([
    {
      company: "Comp Junior",
      experiences: [
        {
          title: {
            en: "Institutional Comp Junior Dynamic Website",
            pt: "Site Dinâmico Institucional Comp Junior",
          },
          text: {
            en: "Institutional web site developed during my period as a trainee.",
            pt: "Site institucional desenvolvido durante meu período de trainee.",
          },
          date: "2020 July - 2020 August",
          img: CompJunior,
          stack: [
            "Vue Js",
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "Insomnia",
          ],
        },
        {
          title: {
            en: "Institutional Construpontes Website",
            pt: "Site Institucional Construpontes",
          },
          text: {
            en: "dynamic Institutional web site, during development i had my first experiences with animations and integrations.",
            pt: "Site institucional dinâmico, durante o desenvolvimento tive minhas primeiras experiências com animações e integrações.",
          },
          date: "2021 Feb - 2021 April",
          img: Construpontes,
          stack: [
            "Vue Js",
            "HTML",
            "CSS",
            "SASS",
            "Javascript",
            "Bootstrap",
            "Insomnia",
          ],
        },
        {
          title: {
            en: "Institutional HHS Website",
            pt: "Site Institucional HHS",
          },
          text: {
            en: "static Institutional web site, during development i learned a lot about SASS and how to deal with dark mode.",
            pt: "Site institucional estático, durante o desenvolvimento aprendi muito sobre SASS e como lidar com o modo escuro.",
          },
          date: "2021 May - 2021 April",
          img: HHS,
          stack: [
            "Vue Js",
            "HTML",
            "CSS",
            "SASS",
            "Javascript",
            "Bootstrap",
            "Insomnia",
          ],
        },
        {
          title: { en: "Sigmavaf App", pt: "Aplicativo Sigmavaf" },
          text: {
            en: "The project consisted of a dynamic Institutional website of the company Construpontes. My first experience with Mobile development.",
            pt: "O projeto consistiu em um site institucional dinâmico da empresa Construpontes. Minha primeira experiência com desenvolvimento Mobile.",
          },
          date: "2021 May - 2021 July",
          img: Sigma,
          stack: ["React Native", "Typescript"],
        },
      ],
    },
    {
      company: "Icount/ Finnac",
      experiences: [
        {
          title: {
            en: "Icount Plus Web Sistem",
            pt: "Sistema Web Icount Plus",
          },
          text: {
            en: "The project consisted of a web-based accounting control system for small businesses.",
            pt: "O projeto consistiu em um sistema de controle contábil baseado na web para pequenas empresas.",
          },
          date: "2021 May - 2021 July",
          img: Icount,
          stack: [
            "React Js",
            "HTML",
            "CSS",
            "Javascript",
            "Bootstrap",
            "Insomnia",
            "Django REST Framework",
            "Firebase",
          ],
        },
      ],
    },
  ]);

  const listExperiences = experiences.map((item) => {
    return (
      <TabPanel>
        {item.experiences.map((item2) => {
          return (
            <div>
              <div className="flex-space"></div>
              <ExperiencesCard
                title={english ? item2.title.en : item2.title.pt}
                text={english ? item2.text.en : item2.text.pt}
                date={item2.date}
                img={item2.img}
                stack={item2.stack}
              />
              <div className="flex-space"></div>
            </div>
          );
        })}
      </TabPanel>
    );
  });

  const listCompanies = experiences.map((item) => {
    return <Tab>{item.company}</Tab>;
  });

  return (
    <div className="all-experencies">
      <div className="content">
        <TitleComponent
          text={
            english
              ? "My professional experencies"
              : "Minhas esperiencias Profissionais"
          }
        />
        <Tabs>
          <TabList>{listCompanies}</TabList>
          {listExperiences}
        </Tabs>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Experencies);
