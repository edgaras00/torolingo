import React from "react";
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
    <div
      className={`check-answer-wrapper ${
        result === "success"
          ? "right-answer"
          : result === "failure"
          ? "wrong-answer"
          : null
      }`}
    >
      <div
        className={`solution ${result === "failure" ? "wrong-solution" : null}`}
      >
        {listening ? renderListeningSolution(result) : renderSolution(result)}
      </div>
      {renderButtons(result)}
    </div>
  );
};

export default CheckAnswer;
