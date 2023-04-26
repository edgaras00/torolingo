import React from "react";
import "../styles/circle.css";

const Circle = ({
  primaryColor,
  secondaryColor,
  icon,
  left,
  right,
  isUnlocked,
  isCompleted,
}) => {
  // Circle colors
  let circlePrimaryColor;
  let circleSecondaryColor;
  if (isCompleted) {
    circlePrimaryColor = "linear-gradient(to right, #dbbc57, #ffd700, #dbbc57)";
    circleSecondaryColor = "#bd9b28";
  } else if (isUnlocked) {
    circlePrimaryColor = primaryColor;
    circleSecondaryColor = secondaryColor;
  } else {
    circlePrimaryColor = "#afafaf";
    circleSecondaryColor = "#777777";
  }

  return (
    <button
      className="circle"
      style={{
        background: circlePrimaryColor,
        boxShadow: `0 7px ${circleSecondaryColor}`,
        left,
        right,
      }}
    >
      <img src={icon} width="31px" alt="lesson icon" />
    </button>
  );
};

export default Circle;
