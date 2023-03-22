import React from "react";
import "../styles/unitHeader.css";

const UnitHeader = ({ unitNumber, unitDescription }) => {
  return (
    <div className="unit-header">
      <div className="header-text">
        <h2>Unit {unitNumber}</h2>
        <p>{unitDescription}</p>
      </div>
      <div className="unit-lesson-btn">GUIDEBOOK</div>
    </div>
  );
};

export default UnitHeader;
