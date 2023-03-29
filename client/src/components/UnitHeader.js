import React from "react";
import { Link } from "react-router-dom";
import "../styles/unitHeader.css";
import notebook from "../notebook.png";

const UnitHeader = ({
  unitNumber,
  description,
  primaryColor,
  secondaryColor,
}) => {
  return (
    <header className="unit-header" style={{ backgroundColor: primaryColor }}>
      <div className="header-text">
        <h2>Unit {unitNumber}</h2>
        <p>{description}</p>
      </div>
      <Link to={`guidebook-${unitNumber}`}>
        <div
          className="unit-lesson-btn"
          style={{ backgroundColor: secondaryColor }}
        >
          <img src={notebook} alt="notebook" width="38px" />
          GUIDEBOOK
        </div>
      </Link>
    </header>
  );
};

export default UnitHeader;
