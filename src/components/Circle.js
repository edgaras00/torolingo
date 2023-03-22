import React from "react";
import "../styles/circle.css";

const Circle = ({ color, shadowColor, icon }) => {
  return (
    <button
      className="circle"
      style={{ backgroundColor: color, boxShadow: `0 7px rgb(${shadowColor})` }}
    >
      <img src={icon} width="32px" alt="lesson icon" />
    </button>
  );
};

export default Circle;
