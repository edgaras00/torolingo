import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/unitHeader.css";
import notebook from "../notebook.png";

const UnitHeader = ({
  unitNumber,
  description,
  primaryColor,
  secondaryColor,
  hoverColor,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleOnMouseEnter = () => {
    console.log("hovered");
    setHovered(true);
  };

  const handleMouseLeave = () => {
    console.log("left");
    setHovered(false);
  };

  return (
    <header className="unit-header" style={{ backgroundColor: primaryColor }}>
      <div className="header-text">
        <h2>Unit {unitNumber}</h2>
        <p>{description}</p>
      </div>
      <Link to={`guidebook-${unitNumber}`}>
        <div
          className="unit-lesson-btn"
          onMouseEnter={handleOnMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ backgroundColor: hovered ? hoverColor : secondaryColor }}
        >
          <img src={notebook} alt="notebook" width="38px" />
          GUIDEBOOK
        </div>
      </Link>
    </header>
  );
};

export default UnitHeader;
