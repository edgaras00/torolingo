import React, { useState } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import "../styles/pictureCard.css";

const PictureCard = ({ onQuestionChange, text, header, solution, words }) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState(null);
  const [correctSolution, setCorrectSolution] = useState("");

  const modifiedSolution = solution
    .replace(/[^\w\s\u00C0-\u00FF]/g, "")
    .toLowerCase();

  const handleClick = (event) => {
    const selectedWord = event.target.cloneNode();
    const wordIndex = selectedWord.dataset.position * 1;
    selectedWord.textContent = event.target.textContent;
    selectedWord.setAttribute("data-position", wordIndex);
    setSelected(selectedWord);

    const wordBankCopy = [...wordBank];
    if (!selected || selected.textContent !== event.target.textContent) {
      wordBankCopy[wordIndex] = "0".repeat(selectedWord.textContent.length);
    }
    if (selected && selected.textContent !== event.target.textContent) {
      const word = selected.textContent;
      const wordIndex = selected.dataset.position * 1;
      wordBankCopy[wordIndex] = word;
    }
    setWordBank(wordBankCopy);
  };

  const handleSelectedClick = (event) => {
    const word = event.target.textContent;
    const wordIndex = event.target.dataset.position * 1;
    const wordBankCopy = [...wordBank];
    wordBankCopy[wordIndex] = word;
    setWordBank(wordBankCopy);

    setSelected(null);
  };

  const bubbles = wordBank.map((word, index) => (
    <WordBubble
      text={word}
      key={index}
      position={index}
      handleClick={handleClick}
      empty={word.includes("0") ? true : false}
    />
  ));

  let selectedBubble = null;
  if (selected) {
    selectedBubble = (
      <WordBubble
        text={selected.textContent}
        position={selected.dataset.position}
        handleClick={handleSelectedClick}
      />
    );
  }
  console.log(correctSolution);

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
        <div className="picture-problem">
          <div className="image-container">
            <div className="image"></div>
          </div>
          <div className="pic-sentence-container">
            <div className="pic-sentence">{text}</div>
            <div className="pic-blank">{selectedBubble}</div>
          </div>
        </div>
      </div>
      <div className="card-middle pic-middle">
        <div className="bubble-container">
          <div className="bubbles">{bubbles}</div>
        </div>
      </div>
      <div className="card-bottom">
        <button className="check-answer" onClick={onQuestionChange}>
          CHECK
        </button>
      </div>
    </div>
  );
};

export default PictureCard;
