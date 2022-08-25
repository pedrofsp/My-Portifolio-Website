import React from 'react';
import './style.scss';
import cvEnglish from '../../assets/CV/pedro_presotto_cv_english.pdf';
import { connect } from 'react-redux';

const CV = ({ english }) => {
  return (
    <div className="all-cv">
      <div className="content">
        <h4>
          {english
            ? 'Check my CV out for more details!'
            : 'Confira meu CV para mais detalhes!'}
        </h4>
        <div className="center-button">
          <a href={cvEnglish} target="_blank" rel="noreferrer">
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(CV);
