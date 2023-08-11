import React from "react";
import "./style.scss";
import Photo from "../../assets/foto_de_trage_sem_fundo_resolucao_original.png";
import { connect } from "react-redux";
import { Container } from "react-bootstrap";
import SwitchLanguage from "../../components/SwitchLanguage";
import { isMobile } from "../../functions/functions";

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
              className="welcome-text display-4"
              style={{ fontWeight: "bold" }}
            >
              {english
                ? "Welcome to my Portifólio!"
                : "Bem vindo ao meu portifolio!"}
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
