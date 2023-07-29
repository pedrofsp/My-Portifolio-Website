import React from "react";
import Logo from "../../assets/Logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { connect } from "react-redux";
import SwitchLanguage from "../SwitchLanguage";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = ({ english }) => {
  const topics = [
    { namePT: "Carreira", nameEN: "Carrer", to: "career" },
    { namePT: "Seviços", nameEN: "Services", to: "services" },
    { namePT: "Experiencias", nameEN: "Experiences", to: "experiences" },
    { namePT: "CV", nameEN: "CV", to: "cv" },
    { namePT: "Contato", nameEN: "Contact", to: "contact" },
  ];

  return (
    <Navbar bg="light" expand="lg" className="fixed-top">
      <Container>
        <div className="d-flex justify-content-between w-100">
          <ScrollLink to="top">
            <img
              src={Logo}
              alt="logo"
              style={{ width: "250px", cursor: "pointer" }}
            />
          </ScrollLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
        </div>
        <div className="w-100">
          <Navbar.Collapse id="basic-navbar-nav ">
            <Nav className="mr-auto w-100 justify-content-end">
              {topics.map((item) => (
                <ScrollLink
                  className="fs-5 p-3 text-dark text-center font-weight-bold"
                  to={item.to}
                  offset={-120}
                  style={{
                    textDecoration: "none",
                    cursor: "pointer",
                  }}
                >
                  {english ? item.nameEN : item.namePT}
                </ScrollLink>
              ))}
              <div className="d-flex justify-content-center align-items-center px-3">
                <SwitchLanguage />
              </div>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Container>
    </Navbar>
  );
};

export default connect((state) => ({
  english: state.english,
}))(NavbarComponent);
