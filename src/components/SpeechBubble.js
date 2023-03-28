import React from "react";
import soundIcon from "../sound.svg";
import "../styles/speechBubble.css";

const SpeechBubble = ({ spanishText, englishText, reverse }) => {
  return (
    <div className={`${reverse ? "speech-reverse" : "speech"}`}>
      <div className="speech-bubble-top">
        <img src={soundIcon} alt="sound" width="28px" />
        <div>{spanishText}</div>
      </div>
      <div className="speech-bubble-bottom">{englishText}</div>
    </div>
  );
};

export default SpeechBubble;
