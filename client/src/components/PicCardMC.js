import React, { useState } from "react";
import { Link } from "react-router-dom";
import Choice from "./Choice";
import CheckAnswer from "./CheckAnswer";
import { capitalize, handleCheckAnswer } from "../utils";
import "../styles/picCardMC.css";

const PicCardMC = ({
  onNextQuestion,
  text,
  solution,
  choices,
  addMistake,
  image,
  locationState,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleOptionChange = (event) => setUserChoice(event.target.value);

  const answerChoices = choices.map((choice, index) => (
    <Choice
      key={index}
      value={choice}
      choiceState={userChoice}
      onOptionChange={handleOptionChange}
    />
  ));

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <Link to={locationState ? `/${locationState.from}` : "/"}>
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">{text}</h3>
        </div>
      </div>
      <div className="mc-card-middle">
        <div className="mc-pic">
          <img src={image} alt="question" />
        </div>
        <div className="choices-container">
          <form className="mc-form">{answerChoices}</form>
        </div>
      </div>
      <CheckAnswer
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={capitalize(solution)}
        normalizedSolution={solution}
        userSolution={userChoice}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default PicCardMC;
