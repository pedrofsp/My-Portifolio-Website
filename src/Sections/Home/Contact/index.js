// Core
import React, { useState } from "react";
import { connect } from "react-redux";

// Libraries
import { Container } from "react-bootstrap";

// Components
import TitleComponent from "../../../components/Title";

// Assets
import Linkedin from "../../../assets/Images/linkedin.png";
import Instagram from "../../../assets/Images/instagram.png";

const Contact = ({ english }) => {
  const [socialMedia] = useState([
    {
      link: "https://www.linkedin.com/in/pedro-presotto/",
      img: Linkedin,
      alt: "Linkedin",
    },
    {
      link: "https://www.instagram.com/pedro_presotto/",
      img: Instagram,
      alt: "Instagram",
    },
  ]);

  const listSocialMedia = socialMedia.map((item, index) => {
    return (
      <a
        key={index}
        style={{ marginRight: "10px" }}
        href={item.link}
        target="_blank"
        rel="noreferrer"
      >
        <img style={{ width: "40px" }} src={item.img} alt={item.alt} />
      </a>
    );
  });

  return (
    <div>
      <Container className="content">
        <TitleComponent text={english ? "Contact" : "Contato"} />
        <div className="d-flex flex-column flex-md-row justify-content-between">
          <div>
            <h5>{english ? "Phone" : "Telefone/Telemóvel"}</h5>
            <p>🇧🇷 +55 35 98885-3741</p>
            <p>🇵🇹 +351 913 438 068</p>
          </div>
          <div>
            <h5>Email</h5>
            <p>pedrohenriquefsp90@gmail.com</p>
          </div>
          <div>
            <h5>{english ? "Social Media" : "Redes Sociais"}</h5>
            <div>{listSocialMedia}</div>
          </div>
        </div>
      </Container>
      <p
        style={{ fontSize: "14px" }}
        className="background-black font-white montserrat-semi-bold text-center mb-0 mt-5 py-2"
      >
        {english
          ? "Design and Development by Pedro Presotto 2022"
          : "Design e Desenvolvimento por Pedro Presotto 2022"}
      </p>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Contact);
