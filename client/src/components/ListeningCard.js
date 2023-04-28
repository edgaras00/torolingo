import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NotebookLines from "./NotebookLines";
import CheckAnswer from "./CheckAnswer";
import {
  handleCheckAnswer,
  createUserSolution,
  createWordBubbles,
  createSelectedWordBubbles,
} from "../utils";
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
    const solution = createUserSolution(selected);
    setUserSolution(solution);
  }, [selected]);

  const bubbles = createWordBubbles(wordBank, setSelected, setWordBank);

  const selectedBubbles = createSelectedWordBubbles(
    selected,
    wordBank,
    setWordBank,
    setSelected
  );

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
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default ListeningCard;
