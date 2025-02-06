// Core
import React from "react";
import { connect } from "react-redux";

// Libraries
import { Container } from "react-bootstrap";

// Service & Helpers
import { isMobile } from "../../../utils/functions";

// Components
import SwitchLanguage from "../../../components/SwitchLanguage";

// Assets
import Photo from "../../../assets/Images/foto_de_trage_sem_fundo_resolucao_original.png";

// Style
import "./style.scss";

const Introduction = ({ english, dispatch }) => {
  return (
    <div style={{ backgroundColor: "lightgray" }}>
      <Container
        className="d-flex flex-column flex-md-row justify-content-between mt-4 mt-md-0"
        style={{ position: "relative", bottom: "-20px" }}
      >
        <div className="d-flex flex-md-column justify-content-center align-center">
          <div style={{ width: `${isMobile() ? "80%" : "unset"}` }}>
            <h2
              className="montserrat-semi-bold display-4"
              style={{ fontWeight: "bold" }}
            >
              {english
                ? "Welcome to my portifolio!"
                : "Bem vindo ao meu portfólio!"}
            </h2>
            <SwitchLanguage />
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <img
            src={Photo}
            alt="Foto"
            style={{ height: `${isMobile() ? "300px" : "unset"}` }}
          />
        </div>
      </Container>
      <div className="elipse"></div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Introduction);
