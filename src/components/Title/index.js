import React from 'react';
import './style.scss';

export default function TitleComponent(props) {
  return (
    <div className="all-title-component">
      <h1>{props.text}</h1>
      <div className="line"></div>
    </div>
  );
}
