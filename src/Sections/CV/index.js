import React from "react";
import cvEnglish from "../../assets/CV/pedro_presotto_cv_english.pdf";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";
import "./style.scss";

const CV = ({ english }) => {
  return (
    <div
      className="d-flex justify-content-center py-5"
      style={{ backgroundColor: "#ff2727" }}
    >
      <div>
        <h4
          className="cv-text text-center text-white"
          style={{ fontSize: "30px" }}
        >
          {english
            ? "Check my CV out for more details!"
            : "Confira meu CV para mais detalhes!"}
        </h4>
        <div className="my-4"></div>
        <div className="d-flex justify-content-center">
          <a href={cvEnglish} target="_blank" rel="noreferrer">
            <Button
              variant="light"
              style={{ color: "#ff2727", fontWeight: "bold" }}
            >
              Download
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(CV);
