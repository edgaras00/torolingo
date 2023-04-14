import React, { useref } from "react";
import "../styles/checkAnswer.css";

const CheckAnswer = ({
  onCheckAnswer,
  onNextQuestion,
  normalizedSolution,
  userSolution,
  solution,
  result,
  listening,
  translation,
}) => {
  const r = useref(null);
  const renderButtons = (result) => {
    if (result === "success") {
      return (
        <button className="check-answer" onClick={onNextQuestion}>
          CONTINUE
        </button>
      );
    }
    return (
      <button
        className={`check-answer ${
          result === "failure" ? "wrong-answer-button" : null
        }`}
        onClick={() => onCheckAnswer(normalizedSolution, userSolution)}
        ref={r}
      >
        CHECK
      </button>
    );
  };

  const renderSolution = (result) => {
    if (result === "success") return solution;
    if (result === "failure") return "Wrong answer. Try again.";
    return null;
  };

  const renderListeningSolution = (result) => {
    if (result === "success") {
      return (
        <div className="listening-solution-wrapper">
          <div className="listening-solution">{solution}</div>
          <div className="translation">{translation}</div>
        </div>
      );
    }
    if (result === "failure") return "Wrong answer. Try again.";
    return null;
  };

  return (
    <div className="check-answer-wrapper">
      <div className="solution">
        {listening ? renderListeningSolution(result) : renderSolution(result)}
      </div>
      {renderButtons(result)}
    </div>
  );
};

export default CheckAnswer;
