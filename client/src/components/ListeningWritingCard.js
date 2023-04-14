import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CheckAnswer from "./CheckAnswer";
import soundIcon from "../sound.svg";
import turtleICon from "../turtle.svg";
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
  translation,
  locationState,
}) => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  const audioElement = new Audio(audio);
  const slowAudioElement = new Audio(slowAudio);

  useEffect(() => {
    const initialAudio = new Audio(audio);
    initialAudio.play();
  }, [audio]);

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

  const handleAudioClick = () => audioElement.play();
  const handleSlowAudioClick = () => slowAudioElement.play();

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <Link to={locationState ? `/${locationState.from}` : "/"}>
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">{header}</h3>
        </div>
      </div>
      <div className="audio-box-wrapper">
        <div className="audio-box normal-audio" onClick={handleAudioClick}>
          <img src={soundIcon} alt="sound icon" width="140px" />
        </div>
        <div className="audio-box slow-audio" onClick={handleSlowAudioClick}>
          <img src={turtleICon} alt="turtle icon" width="100px" />
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
      <CheckAnswer
        solution={solution}
        result={result}
        onNextQuestion={onNextQuestion}
        onCheckAnswer={handleCheckAnswer}
        translation={translation}
        userSolution={normalizeText(inputText)}
        normalizedSolution={normalizedSolution}
        listening={true}
      />
    </div>
  );
};

export default ListeningWritingCard;
