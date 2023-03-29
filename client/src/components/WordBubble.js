import React from "react";
import "../styles/wordBubble.css";

const WordBubble = ({ text, handleClick, position, empty }) => {
  return (
    <span
      className={`word-bubble ${empty ? "empty-bubble" : null}`}
      data-position={position}
      onClick={handleClick}
    >
      {text}
    </span>
  );
};

export default WordBubble;
