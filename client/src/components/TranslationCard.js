import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import CheckAnswer from "./CheckAnswer";
import bullTongue from "../bull-tongue.png";
import mascotStanding from "../mascot-standing2.png";
import mascotPaper from "../bull-paper.png";
import dancingMascot from "../mascot-dancing.jpg";

import "../styles/translationCard.css";

const TranslationCard = ({
  onNextQuestion,
  text,
  solution,
  normalizedSolution,
  words,
  header,
  addMistake,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState([]);
  const [result, setResult] = useState("");
  const [userSolution, setUserSolution] = useState("");
  const [mascot, setMascot] = useState(null);

  useEffect(() => {
    const mascots = [bullTongue, mascotStanding, mascotPaper, dancingMascot];
    const mascotChoice = mascots[Math.floor(Math.random() * mascots.length)];
    setMascot(mascotChoice);
  }, []);

  useEffect(() => {
    const joinedWords = selected
      .map((word) => word.textContent)
      .join(" ")
      .toLowerCase();
    setUserSolution(joinedWords);
  }, [selected]);

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
      </div>
      <div className="problem-wrapper">
        <div className="mascot">
          <img src={mascot} width="120px" alt="mascot" />
        </div>
        <div className="speech-bubble">
          <p>{text}</p>
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
      <CheckAnswer
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={solution}
        normalizedSolution={normalizedSolution}
        userSolution={userSolution}
      />
    </div>
  );
};

export default TranslationCard;
