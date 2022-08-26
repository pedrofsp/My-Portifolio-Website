import React from 'react';
import './style.scss';

export default function ButtonComponent(props) {
  return (
    <button
      className={`button-component ${props.color} ${props.size}`}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
}
