import React from "react";
import "../styles/tipTop.css";

const TipTop = ({ header }) => {
  return (
    <div className="tip-top">
      <div>TIP</div>
      <h3>{header}</h3>
    </div>
  );
};

export default TipTop;
