import React from "react";
import "../styles/circle.css";

const Circle = ({ color, shadowColor, icon, left, right }) => {
  return (
    <button
      className="circle"
      style={{
        backgroundColor: color,
        boxShadow: `0 7px rgb(${shadowColor})`,
        left,
        right,
      }}
    >
      <img src={icon} width="31px" alt="lesson icon" />
    </button>
  );
};

export default Circle;
