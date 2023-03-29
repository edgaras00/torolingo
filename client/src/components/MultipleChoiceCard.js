import React, { useState } from "react";
import Choice from "./Choice";
import "../styles/multipleChoiceCard.css";

const MultipleChoiceCard = ({ onNextQuestion, text, solution, choices }) => {
  const [userChoice, setUserChoice] = useState("");

  const onOptionChange = (event) => setUserChoice(event.target.value);

  const answerChoices = choices.map((choice) => (
    <Choice
      value={choice}
      choiceState={userChoice}
      onOptionChange={onOptionChange}
    />
  ));

  return (
    <div className="multiple-choice-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
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
        <button className="check-answer" onClick={onNextQuestion}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default MultipleChoiceCard;
