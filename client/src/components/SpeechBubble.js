import React from "react";
import soundIcon from "../phrase-sound.svg";
import "../styles/speechBubble.css";

const SpeechBubble = ({ spanishText, englishText, reverse, audio }) => {
  const audioElement = new Audio(audio);

  const handleClick = () => audioElement.play();

  return (
    <div className={`${reverse ? "speech-reverse" : "speech"}`}>
      <div className="speech-bubble-top">
        <img
          src={soundIcon}
          alt="sound"
          onClick={handleClick}
          className="phrase-sound"
        />
        <div>{spanishText}</div>
      </div>
      <div className="speech-bubble-bottom">{englishText}</div>
    </div>
  );
};

export default SpeechBubble;
