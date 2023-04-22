import React from "react";
import ButtonComponent from "../../components/Button";
import "./style.scss";
import Photo from "../../assets/foto_1.png";
import { connect } from "react-redux";

function toggleLanguage(english) {
  return {
    type: "TOGGLE_LANGUAGE",
    english,
  };
}

const Introduction = ({ english, dispatch }) => {
  return (
    <div className="all-introduction">
      <div className="content">
        <div className="flex-content">
          <div className="left">
            <h2>
              {english
                ? "Welcome to my Portifólio!"
                : "Bem vindo ao meu portifolio!"}
            </h2>
            <div className="flex-button">
              <ButtonComponent
                onClick={() => {
                  dispatch(toggleLanguage(true));
                }}
                text="English"
                color={english ? "red" : "outline"}
              />
              <div className="flex-space"></div>
              <ButtonComponent
                onClick={() => {
                  dispatch(toggleLanguage(false));
                }}
                text="Portuguese"
                color={english ? "outline" : "red"}
              />
            </div>
          </div>
          <div className="right">
            <img src={Photo} alt="Foto" />
          </div>
          <div className="elipse"></div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Introduction);
