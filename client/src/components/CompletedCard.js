import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import mascotStanding2 from "../mascot-standing2.png";
import "../styles/completedCard.css";

const CompleteCard = ({ mistakeCount, questionCount }) => {
  const rightAnswers = questionCount - mistakeCount;
  const score = Math.round((rightAnswers / questionCount) * 100);

  const mistakeClass = mistakeCount > 0 ? "has-mistakes" : "no-mistakes";

  const [displayScore, setDisplayScore] = useState(0);
  const [displayMistakes, setDisplayMistakes] = useState(0);

  console.log(displayScore);

  useEffect(() => {
    if (displayMistakes < mistakeCount) {
      const intervalId = setInterval(() => {
        setDisplayMistakes((mistakes) => mistakes + 1);
      }, 6);
      return () => clearInterval(intervalId);
    }

    if (displayScore < score) {
      const intervalId = setInterval(() => {
        setDisplayScore((score) => score + 1);
      }, 5);
      return () => clearInterval(intervalId);
    }
  }, [score, displayScore, mistakeCount, displayMistakes]);

  return (
    <div className="completed-card">
      <div className="completed-top">
        <div className="completed-picture">
          <img src={mascotStanding2} alt="mascot" />
        </div>
      </div>
      <div className="completed-middle">
        <div className="result-wrapper">
          <div className={`result-head ${mistakeClass}`}>Mistakes</div>
          <div className={`result ${mistakeClass}`}>{displayMistakes}</div>
        </div>
        <div className="result-wrapper">
          <div className="result-head total-score">Score</div>
          <div className="result total-score">{displayScore}%</div>
        </div>
      </div>
      <div className="completed-bottom">
        <Link to="/">
          <button className="check-answer">CONTINUE</button>
        </Link>
      </div>
    </div>
  );
};

export default CompleteCard;
