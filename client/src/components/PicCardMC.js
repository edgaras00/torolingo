import React, { useState } from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import "../styles/picCardMC.css";

const PicCardMC = ({ onNextQuestion, text, solution, choices }) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleCorrectAnswer = () => setResult("success");
  const handleWrongAnswer = () => setResult("failure");

  const onOptionChange = (event) => setUserChoice(event.target.value);

  const answerChoices = choices.map((choice, index) => (
    <Choice
      key={index}
      value={choice}
      choiceState={userChoice}
      onOptionChange={onOptionChange}
    />
  ));

  return (
    <div className="translation-card">
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
        <div className="mc-pic"></div>
        <div className="choices-container">
          <form className="mc-form">{answerChoices}</form>
        </div>
      </div>
      <div className="card-bottom">
        <button
          className="check-answer"
          onClick={() =>
            onNextQuestion(
              solution,
              userChoice,
              handleCorrectAnswer,
              handleWrongAnswer
            )
          }
        >
          CHECK
        </button>
      </div>
    </div>
  );
};

export default PicCardMC;
