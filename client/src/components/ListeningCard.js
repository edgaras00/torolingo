import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WordBubble from "./WordBubble";
import NotebookLines from "./NotebookLines";
import CheckAnswer from "./CheckAnswer";
import { handleWordClick, handleSelectedWordClick } from "../utils";
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
    return () => {
      initialAudio.removeEventListener("ended", () => console.log("removed"));
    };
  }, [audio]);

  useEffect(() => {
    const joinedWords = selected
      .map((word) => word.textContent)
      .join(" ")
      .toLowerCase();
    setUserSolution(joinedWords);
  }, [selected]);

  const bubbles = wordBank.map((word, index) => {
    return (
      <WordBubble
        text={word}
        key={index}
        position={index}
        handleClick={(event) =>
          handleWordClick(event, wordBank, setSelected, setWordBank)
        }
        empty={word.includes("*") ? true : false}
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
          handleClick={(event) =>
            handleSelectedWordClick(
              event,
              wordBank,
              setWordBank,
              selected,
              setSelected
            )
          }
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
