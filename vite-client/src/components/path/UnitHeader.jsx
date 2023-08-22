import React, { useState } from "react";
import { Link } from "react-router-dom";

import notebookImage from "../../images/notebook.png";

import "../../styles/unitHeader.css";

const UnitHeader = ({
  unitNumber,
  description,
  primaryColor,
  secondaryColor,
  hoverColor,
}) => {
  const [hovered, setHovered] = useState(false);

  const handleOnMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
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
          <img
            src={notebookImage}
            alt="notebook"
            width="38px"
          />
          GUIDEBOOK
        </div>
      </Link>
    </header>
  );
};

export default UnitHeader;
