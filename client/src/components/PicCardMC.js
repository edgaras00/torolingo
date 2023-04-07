import React, { useState } from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import "../styles/picCardMC.css";

const PicCardMC = ({ onNextQuestion, text, solution, choices, addMistake }) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

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
        {result === "success" ? (
          <button className="check-answer" onClick={onNextQuestion}>
            CONTINUE
          </button>
        ) : (
          <button
            className="check-answer"
            onClick={() => handleCheckAnswer(solution, userChoice)}
          >
            CHECK
          </button>
        )}
      </div>
    </div>
  );
};

export default PicCardMC;
