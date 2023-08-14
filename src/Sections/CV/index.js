import React from "react";
import cvEnglish from "../../assets/CV/pedro_presotto_cv_english.pdf";
import cvPortuguese from "../../assets/CV/pedro_presotto_cv_portuguese.pdf";
import { connect } from "react-redux";
import { Button } from "react-bootstrap";

const CV = ({ english }) => {
  return (
    <div className="background-red d-flex justify-content-center py-5">
      <div>
        <h4
          className="montserrat-semi-bold text-center text-white"
          style={{ fontSize: "30px" }}
        >
          {english
            ? "Check my CV out for more details!"
            : "Confira meu CV para mais detalhes!"}
        </h4>
        <div className="my-4"></div>
        <div className="d-flex justify-content-center">
          <a
            href={english ? cvEnglish : cvPortuguese}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="light" className="montserrat-semi-bold font-red">
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
