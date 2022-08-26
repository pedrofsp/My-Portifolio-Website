import React from 'react';
import TitleComponent from '../../components/Title';
import './style.scss';
import Linkedin from '../../assets/Images/linkedin.png';
import Instagram from '../../assets/Images/instagram.png';
import { connect } from 'react-redux';

const Contact = ({ english }) => {
  return (
    <div className="all-contact">
      <div className="center-content">
        <div className="content">
          <TitleComponent text={english ? 'Contact' : 'Contato'} />
          <div className="flex-topics">
            <div className="flex-space-topics"></div>
            <div>
              <h5>{english ? 'Phone' : 'Telefone/Telemóvel'}</h5>
              <p>🇧🇷 +55 35 98885-3741</p>
              <p>🇵🇹 +351 913 438 068</p>
            </div>
            <div className="flex-space-topics"></div>
            <div>
              <h5>Email</h5>
              <p>pedrohenriquefsp90@gmail.com</p>
            </div>
            <div className="flex-space-topics"></div>
            <div>
              <h5>{english ? 'Social Media' : 'Redes Sociais'}</h5>
              <a
                href="https://www.linkedin.com/in/pedro-presotto/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Linkedin} alt="linkedin-logo" />
              </a>
              <a
                href="https://www.instagram.com/pedro_presotto/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="instagram-logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <p>
          {english
            ? 'Development by Pedro Presotto 2022'
            : 'Desenvolvido por Pedro Presotto 2022'}
        </p>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Contact);
