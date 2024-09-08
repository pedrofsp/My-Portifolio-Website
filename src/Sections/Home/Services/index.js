import React from "react";
import CardServices from "../../../components/cardServices";
import TitleComponent from "../../../components/Title";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { fetchData } from "../../../Utils/RealtimeDatabaseUtils";

const Services = ({ english }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchData("/servicesSection/services/").then((res) => {
      if (res) setServices(res);
    });
  }, []);

  const listServices = services.map((item, index) => (
    <div className="d-flex justify-content-center" key={index}>
      <div className="d-flex flex-column">
        <CardServices
          text={english ? item.textEN : item.textPT}
          image={item.image}
        />
        <div className="d-md-none my-3"></div>
      </div>
    </div>
  ));

  return (
    <Container>
      <TitleComponent
        text={english ? "What Services you will get from me?" : "Meus serviços"}
      />
      <div className="d-flex flex-column flex-md-row justify-content-between">
        {listServices}
      </div>
    </Container>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Services);
