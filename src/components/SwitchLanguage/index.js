import React from 'react';
import ButtonComponent from '../Button';
import { connect } from 'react-redux';
import './style.scss';

function toggleLanguage(english) {
  return {
    type: 'TOGGLE_LANGUAGE',
    english,
  };
}

const SwitchLanguage = ({ english, dispatch }) => {
  return (
    <div className="all-switch-language">
      <ButtonComponent
        onClick={() => {
          dispatch(toggleLanguage(true));
        }}
        text="English"
        color={english ? 'red' : 'outline'}
        size="small"
      />
      <div className="flex-space"></div>
      <ButtonComponent
        onClick={() => {
          dispatch(toggleLanguage(false));
        }}
        text="Portuguese"
        color={english ? 'outline' : 'red'}
        size="small"
      />
    </div>
  );
};

export default connect((state) => ({
  english: state.english,
}))(SwitchLanguage);
