import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            src={`${process.env.PUBLIC_URL}/images/notebook.png`}
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
