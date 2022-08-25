import React from 'react';
import './style.scss';

export default function Post(props) {
  return (
    <div className="all-post">
      <h3>
        {props.id} - {props.title}
      </h3>
      <p>{props.body}</p>
    </div>
  );
}
