import React, { useEffect, useState } from "react";
import TitleComponent from "../../../components/Title";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { connect } from "react-redux";
import ExperiencesCard from "../../../components/ExperiencesCard";
import { Container } from "react-bootstrap";
import { fetchData } from "../../../Utils/RealtimeDatabaseUtils";

const Experencies = ({ english }) => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    fetchData("/experiences/companies.json").then((res) => {
      setExperiences(res);
    });
  });

  const listExperiences = experiences.map((company) => {
    return (
      <TabPanel>
        {company.experiences.map((project) => {
          return (
            <div>
              <br />
              <ExperiencesCard
                title={english ? project.title.en : project.title.pt}
                text={english ? project.text.en : project.text.pt}
                date={project.date}
                img={project.image}
                stack={project.stack}
              />
            </div>
          );
        })}
      </TabPanel>
    );
  });

  const listCompanies = experiences.map((company) => {
    return <Tab>{company.name}</Tab>;
  });

  return (
    <Container>
      <div>
        <TitleComponent
          text={
            english
              ? "My professional experencies"
              : "Minhas experiências Profissionais"
          }
        />
        <Tabs>
          <TabList>{listCompanies}</TabList>
          {listExperiences}
        </Tabs>
      </div>
    </Container>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Experencies);
