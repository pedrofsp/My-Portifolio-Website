import React, { useEffect, useState } from "react";
import StackComponent from "../../../components/Stack";
import TitleComponent from "../../../components/Title";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { isMobile } from "../../../functions/functions";
import { fetchData } from "../../../Utils/RealtimeDatabaseUtils";

const About = ({ english }) => {
  const [aboutText, setAboutText] = useState([]);
  const [stackArray, setStackArray] = useState([]);

  useEffect(() => {
    fetchData("/AboutSection/aboutText.json").then((res) => {
      if (res) setAboutText(res);
    });
    fetchData("/AboutSection/HardSkills.json").then((res) => {
      if (res) setStackArray(res);
    });
  }, []);

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
