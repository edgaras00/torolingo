import React, { useState } from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import "../styles/multipleChoiceCard.css";

const MultipleChoiceCard = ({
  onNextQuestion,
  text,
  solution,
  choices,
  addMistake,
  normalizedSolution,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const onOptionChange = (event) => setUserChoice(event.target.value);
  const handleCorrectAnswer = () => setResult("success");
  const handleWrongAnswer = () => {
    setResult("failure");
    addMistake();
  };

  const handleCheckAnswer = (correctSolution, userSolution) => {
    if (correctSolution === userSolution) {
      setResult("success");
      return;
    }
    if (correctSolution !== userSolution) {
      setResult("failure");
      addMistake();
      return;
    }
  };

  const answerChoices = choices.map((choice, index) => (
    <Choice
      key={index}
      value={choice}
      choiceState={userChoice}
      onOptionChange={onOptionChange}
    />
  ));

  return (
    <div className="multiple-choice-card">
      <div className="card-top">
        <div className="exit-lesson">
          <Link to="/">
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">{text}</h3>
        </div>
      </div>
      <div className="mc-card-middle">
        <div className="choices-container">
          <form className="mc-form">{answerChoices}</form>
        </div>
      </div>
      <div className="card-bottom">
        <div className="solution">{result === "success" ? solution : null}</div>
        {result === "success" ? (
          <button className="check-answer" onClick={onNextQuestion}>
            CONTINUE
          </button>
        ) : (
          <button
            className="check-answer"
            onClick={() => handleCheckAnswer(normalizedSolution, userChoice)}
          >
            CHECK
          </button>
        )}
        {/* <button
          className="check-answer"
          onClick={() =>
            onNextQuestion(
              normalizedSolution,
              userChoice,
              handleCorrectAnswer,
              handleWrongAnswer
            )
          }
        >
          CHECK
        </button> */}
        {/* <button
          className="check-answer"
          onClick={() =>
            onNextQuestion(
              normalizedSolution,
              userChoice,
              handleCorrectAnswer,
              handleWrongAnswer
            )
          }
        >
          CONTINUE
        </button> */}
      </div>
    </div>
  );
};

export default MultipleChoiceCard;
