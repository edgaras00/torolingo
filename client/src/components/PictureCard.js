import React, { useState } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import CheckAnswer from "./CheckAnswer";
import "../styles/pictureCard.css";

const PictureCard = ({
  onNextQuestion,
  text,
  header,
  solution,
  words,
  normalizedSolution,
  addMistake,
  normalizeText,
  translation,
  image,
  locationState,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState(null);
  const [result, setResult] = useState("");

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

  const textWords = text.split(" ");
  const elements = textWords.map((word, index) => {
    if (word.includes("_")) {
      return (
        <span className="pic-blank" key={index}>
          {selectedBubble}
        </span>
      );
    } else {
      return (
        <span className="word-elements" key={index}>
          {word}
        </span>
      );
    }
  });

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
      <div className="picture-problem">
        <div className="image-container">
          <div className="image">
            <img src={image} alt="question" />
          </div>
        </div>
        <div className="pic-sentence-container">{elements}</div>
      </div>
      <div className="card-middle pic-middle">
        <div className="bubble-container">
          <div className="bubbles">{bubbles}</div>
        </div>
      </div>
      <CheckAnswer
        result={result}
        solution={translation}
        normalizedSolution={normalizedSolution}
        userSolution={selected ? normalizeText(selected.textContent) : ""}
        onNextQuestion={onNextQuestion}
        onCheckAnswer={handleCheckAnswer}
      />
    </div>
  );
};

export default PictureCard;
