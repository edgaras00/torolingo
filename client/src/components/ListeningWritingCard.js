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
        {result === "success" ? (
          <button className="check-answer" onClick={onNextQuestion}>
            CONTINUE
          </button>
        ) : (
          <button
            className="check-answer"
            onClick={() =>
              handleCheckAnswer(normalizedSolution, normalizeText(inputText))
            }
          >
            CHECK
          </button>
        )}
      </div>
    </div>
  );
};

export default ListeningWritingCard;
