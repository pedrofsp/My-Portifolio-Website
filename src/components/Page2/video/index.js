import React from 'react';
import { connect } from 'react-redux';

const VideoComponent = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <strong>Modulo {activeModule.title}</strong>
      <span>Aula {activeLesson.title}</span>
    </div>
  );
};

export default connect((state) => ({
  activeModule: state.activeModule,
  activeLesson: state.activeLesson,
}))(VideoComponent);
