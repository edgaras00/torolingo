import React from "react";
import { Link } from "react-router-dom";
import "../styles/vocabLink.css";

const VocabLink = ({ unit }) => {
  return (
    <Link to={`/vocabulary-${unit}`} className="vocab-link">
      <div className="vocab-content">
        <div className="text">UNIT {unit}</div>
      </div>
    </Link>
  );
};

export default VocabLink;
