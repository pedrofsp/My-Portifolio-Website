import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import { connect } from 'react-redux';
import './style.scss';

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
                <Link to="/">Home</Link>
                <Link to="/">About</Link>
                <Link to="/">Services</Link>
                <Link to="/">Contact</Link>
              </div>
            )}
          </div>
        ) : (
          <div className="center-link">
            {openNav && (
              <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/">Sobre</Link>
                <Link to="/">Servicos</Link>
                <Link to="/">Contato</Link>
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
