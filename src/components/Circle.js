import React from "react";
import "../styles/circle.css";

const Circle = ({ primaryColor, secondaryColor, icon, left, right }) => {
  return (
    <button
      className="circle"
      style={{
        backgroundColor: primaryColor,
        boxShadow: `0 7px ${secondaryColor}`,
        left,
        right,
      }}
    >
      <img src={icon} width="31px" alt="lesson icon" />
    </button>
  );
};

export default Circle;
