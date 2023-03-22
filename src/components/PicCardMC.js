import React, { useState } from "react";
import "../styles/picCardMC.css";

const PicCardMC = () => {
  const [choice, setChoice] = useState("");

  const onOptionChange = (event) => {
    setChoice(event.target.value);
  };

  return (
    <div className="translation-card">
      <div className="card-top">
        <div className="exit-lesson">
          <button className="exit-button">X</button>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Select the correct option</h3>
        </div>
      </div>
      <div className="mc-card-middle">
        <div className="mc-pic"></div>
        <div className="choices-container">
          <form className="mc-form">
            <label
              className={`pic-mc ${
                choice === "option1" ? "pic-mc-selected" : null
              }`}
            >
              Option 1
              <input
                type="radio"
                name="option1"
                value="option1"
                className="pic-mc-input"
                checked={choice === "option1"}
                onChange={onOptionChange}
              />
            </label>
            <label
              className={`pic-mc ${
                choice === "option2" ? "pic-mc-selected" : null
              }`}
            >
              Option 2
              <input
                type="radio"
                name="option2"
                value="option2"
                className="pic-mc-input"
                checked={choice === "option2"}
                onChange={onOptionChange}
              />
            </label>
            <label
              className={`pic-mc ${
                choice === "option3" ? "pic-mc-selected" : null
              }`}
            >
              Option 3
              <input
                type="radio"
                name="option3"
                value="option3"
                className="pic-mc-input"
                checked={choice === "option3"}
                onChange={onOptionChange}
              />
            </label>
            <label
              className={`pic-mc ${
                choice === "option4" ? "pic-mc-selected" : null
              }`}
            >
              Option 4
              <input
                type="radio"
                name="option4"
                value="option4"
                className="pic-mc-input"
                checked={choice === "option4"}
                onChange={onOptionChange}
              />
            </label>
          </form>
        </div>
      </div>
      <div className="card-bottom">
        <button className="check-answer">CHECK</button>
      </div>
    </div>
  );
};

export default PicCardMC;
