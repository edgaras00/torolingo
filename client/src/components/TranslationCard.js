import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import "../styles/translationCard.css";

const TranslationCard = ({
  onNextQuestion,
  text,
  solution,
  normalizedSolution,
  words,
  header,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState("");
  const [userSolution, setUserSolution] = useState("");
  // const [correctSolution, setCorrectSolution] = useState("");

  useEffect(() => {
    const joinedWords = selected
      .map((word) => word.textContent)
      .join(" ")
      .toLowerCase();
    setUserSolution(joinedWords);
  }, [selected]);

  const handleCorrectAnswer = () => setResult("success");
  const handleWrongAnswer = () => setResult("failure");

  const handleClick = (event) => {
    const selectedWord = event.target.cloneNode();
    const wordIndex = selectedWord.dataset.position * 1;
    selectedWord.textContent = event.target.textContent;
    selectedWord.setAttribute("data-position", wordIndex);
    console.log(selectedWord);
    setSelected((prevState) => [...prevState, selectedWord]);

    const wordBankCopy = [...wordBank];
    wordBankCopy[wordIndex] = "0".repeat(selectedWord.textContent.length);
    setWordBank(wordBankCopy);
  };

  const handleSelectedClick = (event) => {
    const word = event.target.textContent;
    const wordIndex = event.target.dataset.position * 1;
    const wordBankCopy = [...wordBank];
    wordBankCopy[wordIndex] = word;
    setWordBank(wordBankCopy);

    const selectedCopy = [...selected];
    const index = selectedCopy.findIndex((arrayWord) => {
      return (
        arrayWord.textContent === word &&
        arrayWord.dataset.position === String(wordIndex)
      );
    });
    selectedCopy.splice(index, 1);
    setSelected(selectedCopy);
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

  let selectedBubbles = [];
  if (selected.length > 0) {
    selectedBubbles = selected.map((element, index) => {
      const word = element.textContent;
      return (
        <WordBubble
          text={word}
          key={index}
          handleClick={handleSelectedClick}
          position={element.dataset.position}
        />
      );
    });
  }
  console.log(result);
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
        <div className="problem-wrapper">
          <div className="mascot"></div>
          <div className="speech-bubble">
            <p>{text}</p>
          </div>
        </div>
      </div>
      <div className="card-middle">
        <div className="solution-container">
          <div className="selected-words">
            <div className="aligned-words">{selectedBubbles}</div>
          </div>
          <div className="line-container">
            <NotebookLines />
          </div>
        </div>
        <div className="bubble-container">
          <div className="bubbles">{bubbles}</div>
        </div>
      </div>
      <div className="card-bottom">
        {result}
        <button
          className="check-answer"
          onClick={() =>
            onNextQuestion(
              normalizedSolution,
              userSolution,
              handleCorrectAnswer,
              handleWrongAnswer
            )
          }
        >
          CHECK
        </button>
      </div>
    </div>
  );
};

export default TranslationCard;
