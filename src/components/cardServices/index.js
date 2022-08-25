import React from 'react';
import './style.scss';

export default function CardServices(props) {
  return (
    <div className="all-card">
      <div className="center-icon">
        <div className="icon">
          <img src={props.image} />
        </div>
      </div>
      <h4>{props.text}</h4>
    </div>
  );
}
