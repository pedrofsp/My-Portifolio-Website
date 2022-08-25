import React from 'react';
import CardServices from '../../components/cardServices';
import TitleComponent from '../../components/Title';
import FrontEnd from '../../assets/frontend.png';
import Backend from '../../assets/Images/backend.png';
import Mobile from '../../assets/Images/mobile.png';
import './style.scss';
import { connect } from 'react-redux';

const Services = ({ english }) => {
  return (
    <div className="all-services">
      <div className="content">
        <TitleComponent
          text={
            english ? 'What Services you will Get from me?' : 'Meus servicos'
          }
        />
        <div className="center-carousel">
          <div className="center-card">
            <CardServices
              text={
                english ? 'Front-end Development' : 'Desenvolvimento Front-end'
              }
              image={FrontEnd}
            />
          </div>
          <div className="center-card">
            <CardServices
              text={english ? 'Mobile Development' : 'Desenvolvimento Mobile'}
              image={Mobile}
            />
          </div>
          <div className="center-card">
            <CardServices
              text={english ? 'Backend Development' : 'Desenvolvimento Backend'}
              image={Backend}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(Services);
