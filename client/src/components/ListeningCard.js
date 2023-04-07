import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import soundIcon from "../sound.svg";
import turtleICon from "../turtle.svg";
import "../styles/listeningCard.css";

const ListeningCard = ({
  onNextQuestion,
  words,
  text,
  solution,
  normalizedSolution,
  audio,
  slowAudio,
  addMistake,
}) => {
  const [wordBank, setWordBank] = useState([...words]);
  const [selected, setSelected] = useState([]);
  const [userSolution, setUserSolution] = useState(null);
  const [result, setResult] = useState("");

  const handleRightAnswer = () => setResult("success");
  const handleWrongAnswer = () => {
    setResult("failure");
    addMistake();
  };

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
    audio.play();
  };

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
      empty={word.includes("0") ? "empty" : null}
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
          <h3 className="problem-header">{text}</h3>
        </div>
        <div className="audio-box-wrapper">
          <div className="audio-box normal-audio" onClick={handleAudioClick}>
            <img src={soundIcon} alt="sound icon" width="140px" />
          </div>
          <div className="audio-box slow-audio" onClick={handleAudioClick}>
            <img src={turtleICon} alt="turtle icon" width="100px" />
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
        {result === "success" ? (
          <button className="check-answer" onClick={onNextQuestion}>
            CONTINUE
          </button>
        ) : (
          <button
            className="check-answer"
            onClick={() => handleCheckAnswer(normalizedSolution, userSolution)}
          >
            CHECK
          </button>
        )}
      </div>
    </div>
  );
};

export default ListeningCard;
