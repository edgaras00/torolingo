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
  locationState,
  altSolution,
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
        altSolution={altSolution}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default TranslationCard;
