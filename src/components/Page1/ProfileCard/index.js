import React from 'react';
import './style.scss';

export default function ProfileCard(props) {
  return (
    <div className="all-profile-card">
      <h3>{props.name}</h3>
      <p>{props.email}</p>
      <a href={props.site}>{props.site}</a>
      <p>{props.phone}</p>
    </div>
  );
}
