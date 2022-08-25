import React from 'react';
import './style.scss';

export default function StackComponent(props) {
  return (
    <div className={`all-stack-component ${props.small ? 'small' : ''}`}>
      <span>{props.text}</span>
    </div>
  );
}
