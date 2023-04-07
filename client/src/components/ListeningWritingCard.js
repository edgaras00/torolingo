import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/listeningWritingCard.css";

const ListeningWritingCard = ({
  onNextQuestion,
  solution,
  normalizedSolution,
  audio,
  slowAudio,
  header,
  addMistake,
  normalizeText,
}) => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const handleRightAnswer = () => setResult("success");
  const handleWrongAnswer = () => {
    setResult("failure");
    addMistake();
  };

  const handleAudioClick = () => {
    audio.play();
  };

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <Link to="/">
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">{header}</h3>
        </div>
        <div className="audio-box-wrapper">
          <div
            className="audio-box normal-audio"
            onClick={handleAudioClick}
          ></div>
          <div
            className="audio-box slow-audio"
            onClick={handleAudioClick}
          ></div>
        </div>
      </div>
      <div className="form-container">
        <form className="writing-form">
          <textarea
            className="solution-text"
            name="input-text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </form>
      </div>
      <div className="card-bottom">
        <button
          className="check-answer"
          onClick={() =>
            onNextQuestion(
              normalizedSolution,
              normalizeText(inputText),
              handleRightAnswer,
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

export default ListeningWritingCard;
