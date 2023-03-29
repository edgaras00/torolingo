import React, { useState } from "react";
import "../styles/listeningWritingCard.css";

const ListeningWritingCard = ({
  onNextQuestion,
  text,
  solution,
  audio,
  slowAudio,
}) => {
  const [inputText, setInputText] = useState("");

  console.log(inputText);

  const handleAudioClick = () => {
    audio.play();
  };

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">{text}</h3>
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
        <button className="check-answer" onClick={onNextQuestion}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default ListeningWritingCard;
