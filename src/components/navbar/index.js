import React from "react";
import Logo from "../../assets/Images/Logo.svg";
import { Link as ScrollLink } from "react-scroll";
import { connect } from "react-redux";
import SwitchLanguage from "../SwitchLanguage";
import { Navbar, Nav, Container } from "react-bootstrap";

const NavbarComponent = ({ english }) => {
  const topics = [
    { namePT: "Carreira", nameEN: "Carrer", to: "career" },
    { namePT: "Seviços", nameEN: "Services", to: "services" },
    { namePT: "Experiências", nameEN: "Experiences", to: "experiences" },
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
                  key={item.to}
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
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ marginLeft: "10px" }}
              >
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
