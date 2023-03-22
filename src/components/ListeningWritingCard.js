import React, { useState } from "react";
import "../styles/listeningWritingCard.css";

const ListeningWritingCard = () => {
  const [inputText, setInputText] = useState("");

  console.log(inputText);

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Type what you hear</h3>
        </div>
        <div className="audio-box-wrapper">
          <div className="audio-box normal-audio"></div>
          <div className="audio-box slow-audio"></div>
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
        <button className="check-answer">CHECK</button>
      </div>
    </div>
  );
};

export default ListeningWritingCard;
