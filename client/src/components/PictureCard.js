import React, { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import WordBubble from "./WordBubble";
import CheckAnswer from "./CheckAnswer";
import { getSelectedWord, handleCheckAnswer, deselectWord } from "../utils";

import "../styles/question.css";
// import "../styles/wordbankSolution.css";
import "../styles/pictureCard.css";

const PictureCard = ({
  onNextQuestion,
  text,
  header,
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

  const handleClick = (event) => {
    const [selectedWord, wordIndex] = getSelectedWord(event);
    setSelected(selectedWord);

    const wordBankCopy = [...wordBank];
    if (!selected || selected.textContent !== event.target.textContent) {
      wordBankCopy[wordIndex] = selectedWord.textContent + "*";
    }
    if (selected && selected.textContent !== event.target.textContent) {
      const word = selected.textContent;
      const wordIndex = selected.dataset.position * 1;
      wordBankCopy[wordIndex] = word;
    }
    setWordBank(wordBankCopy);
  };

  const handleSelectedClick = (event) => {
    const [wordBankCopy] = deselectWord(event, wordBank);
    setWordBank(wordBankCopy);
    setSelected(null);
  };

  const bubbles = wordBank.map((word, index) => (
    <WordBubble
      text={word}
      key={index}
      position={index}
      handleClick={handleClick}
      empty={word.includes("*") ? true : false}
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
    <div className="question-card">
      <QuestionHeader text={header} locationState={locationState} />
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
          <div className="bubbles picture-bubbles">{bubbles}</div>
        </div>
      </div>
      <CheckAnswer
        result={result}
        solution={translation}
        normalizedSolution={normalizedSolution}
        userSolution={selected ? normalizeText(selected.textContent) : ""}
        onNextQuestion={onNextQuestion}
        onCheckAnswer={handleCheckAnswer}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default PictureCard;
