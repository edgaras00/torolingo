import React from "react";
import "../styles/wordBubble.css";

const WordBubble = ({ text, handleClick, position }) => {
  return (
    <span
      className="word-bubble"
      data-position={position}
      onClick={handleClick}
    >
      {text}
    </span>
  );
};

export default WordBubble;
