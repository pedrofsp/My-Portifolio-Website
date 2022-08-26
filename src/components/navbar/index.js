import React, { useEffect, useState } from 'react';
import Logo from '../../assets/Logo.png';
import { Link } from 'react-scroll';
import { connect } from 'react-redux';
import './style.scss';
import SwitchLanguage from '../SwitchLanguage';

const Navbar = ({ english }) => {
  const [openNav, setOpenNav] = useState(true);

  useEffect(() => {
    if (window.screen.width < 1024) {
      setOpenNav(false);
    }
  }, []);

  return (
    <div className="all-nav">
      <div className="flex-nav">
        <div className="image-center">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="toggle" onClick={() => setOpenNav(!openNav)}>
          <div className="hamburguer">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
        {english ? (
          <div className="center-link">
            {openNav && (
              <div className="links">
                <Link
                  to="career"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Career
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="services"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Services
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="experiences"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Experencies
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="cv"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  CV
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="contact"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Contact
                </Link>
                <div className="flex-space"></div>
                <div className="language">
                  <SwitchLanguage />
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="center-link">
            {openNav && (
              <div className="links">
                <Link
                  to="career"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Jornada
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="services"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Serviços
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="experiences"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Experiências
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="cv"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  CV
                </Link>
                <div className="flex-space"></div>
                <Link
                  to="contact"
                  offset={-120}
                  onClick={() => {
                    setOpenNav(false);
                  }}
                >
                  Contact
                </Link>
                <div className="flex-space"></div>
                <div className="language">
                  <SwitchLanguage />
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Navbar);
