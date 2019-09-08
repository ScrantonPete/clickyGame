import React from "react";
import "./Header.css";

const Header = props => (
  <div id="headerContainer" className="container">
    <div id="title">Click to drink the Beer!</div>
    <div id="directions">But don't drink the same Beer twice!</div>
    <div id="scoreDiv">Score: {props.score}</div>
  </div>
);
export default Header;
