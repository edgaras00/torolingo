import React from "react";
import { Link } from "react-router-dom";
import "../styles/vocabLink.css";

const VocabLink = ({ unit, color, image }) => {
  return (
    <Link to={`vocabulary-${unit}`} className="vocab-link">
      <div className="vocab-content" style={{ backgroundColor: color }}>
        <div className="text">UNIT {unit}</div>
        <img src={image} width="50px" />
      </div>
    </Link>
  );
};

export default VocabLink;
