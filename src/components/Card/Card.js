import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div
      style={{ backgroundImage: `url(${props.src})` }}
      alt={props.alt}
      className="card"
      onClick={() => props.handleClick(props.name)}
    ></div>
  );
};

export default Card;
