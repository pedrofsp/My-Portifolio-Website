import React from "react";
import StackComponent from "../Stack";
import "./style.scss";

export default function ExperiencesCard(props) {
  const listStack = props.stack.map((item) => {
    return (
      <div className="flex-stack-item">
        <StackComponent text={item} small />
        <div className="flex-space"></div>
      </div>
    );
  });

  return (
    <div className="all-experiences-card">
      <img src={props.img} alt="imagem" />
      <div className="center-content">
        <div className="content">
          <h4>
            {props.title} [{props.date}]
          </h4>
          <p>{props.text}</p>
          <div className="stack-flex">{listStack}</div>
        </div>
      </div>
    </div>
  );
}
