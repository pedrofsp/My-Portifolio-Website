import React from "react";
import "./style.scss";
import { Image } from "react-bootstrap";

export default function CardServices(props) {
  return (
    <div className="all-card">
      <div className="center-icon">
        <div className="icon">
          <Image src={props.image} alt="imagem" />
        </div>
      </div>
      <h4>{props.text}</h4>
    </div>
  );
}
