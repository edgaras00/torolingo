import React from "react";
import { Link } from "react-router-dom";
import "../styles/completedCard.css";

const CompleteCard = ({ mistakeCount, questionCount }) => {
  const rightAnswers = questionCount - mistakeCount;
  const score = Math.round((rightAnswers / questionCount) * 100);
  return (
    <div className="completed-card">
      <div className="completed-top">
        <div className="completed-picture">
          <div className="placeholder"></div>
        </div>
      </div>
      <div className="completed-middle">
        <div className="result-wrapper">
          <div className="result-head">Mistakes</div>
          <div className="result">{mistakeCount}</div>
        </div>
        <div className="result-wrapper">
          <div className="result-head">Score</div>
          <div className="result">{score}%</div>
        </div>
      </div>
      <div className="completed-bottom">
        <Link to="/">
          <button>END</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCard;
