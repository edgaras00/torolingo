import React, { useState } from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import CheckAnswer from "./CheckAnswer";
import { capitalize } from "../utils";
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
      <div className="card-top mc-card-top">
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
      <CheckAnswer
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={capitalize(solution)}
        normalizedSolution={normalizedSolution}
        userSolution={userChoice}
      />
    </div>
  );
};

export default MultipleChoiceCard;
