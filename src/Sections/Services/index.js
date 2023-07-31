import React from "react";
import CardServices from "../../components/cardServices";
import TitleComponent from "../../components/Title";
import FrontEnd from "../../assets/frontend.png";
import Backend from "../../assets/Images/backend.png";
import Mobile from "../../assets/Images/mobile.png";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";

const Services = ({ english }) => {
  const servicesArr = [
    {
      textEN: "Front-end Development",
      textPT: "Desenvolvimento Front-end",
      img: FrontEnd,
    },
    {
      textEN: "Mobile Development",
      textPT: "Desenvolvimento Mobile",
      img: Mobile,
    },
    {
      textEN: "Back-end Development",
      textPT: "Desenvolvimento Back-end",
      img: Backend,
    },
  ];

  const listServices = servicesArr.map((item) => (
    <div className="d-flex justify-content-center">
      <div className="d-flex flex-column">
        <CardServices
          text={english ? item.textEN : item.textPT}
          image={item.img}
        />
        <div className="d-md-none my-3"></div>
      </div>
    </div>
  ));

  return (
    <Container>
      <TitleComponent
        text={english ? "What Services you will Get from me?" : "Meus servicos"}
      />
      <div className="d-flex flex-column flex-md-row justify-content-between">
        {listServices}
      </div>
    </Container>
    // <div></div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Services);
