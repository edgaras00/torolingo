import { useEffect } from "react";
import "../styles/checkAnswer.css";

const CheckAnswer = ({
  onCheckAnswer,
  onNextQuestion,
  normalizedSolution,
  userSolution,
  solution,
  altSolution,
  result,
  listening,
  translation,
  addMistake,
  setResult,
}) => {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 13) {
        if (result !== "success") {
          onCheckAnswer(
            normalizedSolution,
            userSolution,
            altSolution,
            setResult,
            addMistake
          );
          return;
        }
        onNextQuestion();
        return;
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [
    result,
    addMistake,
    altSolution,
    normalizedSolution,
    onCheckAnswer,
    setResult,
    userSolution,
    onNextQuestion,
  ]);

  const renderButtons = (result) => {
    if (result === "success") {
      return (
        <button className="check-answer-btn" onClick={onNextQuestion}>
          CONTINUE
        </button>
      );
    }
    return (
      <button
        className={`check-answer-btn ${
          result === "failure" ? "wrong-answer-button" : null
        }`}
        onClick={() =>
          onCheckAnswer(
            normalizedSolution,
            userSolution,
            altSolution,
            setResult,
            addMistake
          )
        }
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
