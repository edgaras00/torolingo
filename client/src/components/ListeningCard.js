import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import CheckAnswer from "./CheckAnswer";
import soundIcon from "../sound.svg";
import turtleICon from "../turtle.svg";
import "../styles/listeningCard.css";

const ListeningCard = ({
  onNextQuestion,
  words,
  solution,
  normalizedSolution,
  audio,
  slowAudio,
  translation,
  addMistake,
  locationState,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState([]);
  const [userSolution, setUserSolution] = useState(null);
  const [result, setResult] = useState("");

  const audioElement = new Audio(audio);
  const slowAudioElement = new Audio(slowAudio);

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

  const handleAudioClick = () => {
    audioElement.play();
  };

  const handleSlowAudioClick = () => {
    slowAudioElement.play();
  };

  useEffect(() => {
    const initialAudio = new Audio(audio);
    setTimeout(() => {
      initialAudio.play();
    }, 1000);
  }, [audio]);

  useEffect(() => {
    const joinedWords = selected
      .map((word) => word.textContent)
      .join(" ")
      .toLowerCase();
    setUserSolution(joinedWords);
  }, [selected]);

  const handleClick = (event) => {
    const selectedWord = event.target.cloneNode();
    const wordIndex = selectedWord.dataset.position * 1;
    selectedWord.textContent = event.target.textContent;
    selectedWord.setAttribute("data-position", wordIndex);
    setSelected((prevState) => [...prevState, selectedWord]);

    const wordBankCopy = [...wordBank];
    // wordBankCopy[wordIndex] = "*".repeat(selectedWord.textContent.length);
    wordBankCopy[wordIndex] = selectedWord.textContent + "*";
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

  const bubbles = wordBank.map((word, index) => {
    return (
      <WordBubble
        text={word}
        key={index}
        position={index}
        handleClick={handleClick}
        empty={word.includes("*") ? "empty" : null}
      />
    );
  });

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
          <Link to={locationState ? `/${locationState.from}` : "/"}>
            <button className="exit-button">X</button>
          </Link>
        </div>
        <div className="problem-header-container">
          <h3 className="problem-header">Tap what you hear</h3>
        </div>
      </div>
      <div className="audio-box-wrapper">
        <div className="audio-box normal-audio" onClick={handleAudioClick}>
          <img src={soundIcon} alt="sound icon" />
        </div>
        <div className="audio-box slow-audio" onClick={handleSlowAudioClick}>
          <img src={turtleICon} alt="turtle icon" />
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
        listening={true}
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={solution}
        normalizedSolution={normalizedSolution}
        userSolution={userSolution}
        translation={translation}
      />
    </div>
  );
};

export default ListeningCard;
