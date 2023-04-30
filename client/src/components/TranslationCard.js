import { useState, useEffect } from "react";

import QuestionHeader from "./QuestionHeader";
import WordbankSolution from "./WordbankSolution";
import CheckAnswer from "./CheckAnswer";

import { handleCheckAnswer, createUserSolution } from "../utils";

// Images
import bullTongue from "../bull-tongue.png";
import mascotStanding from "../mascot-standing2.png";
import mascotPaper from "../bull-paper.png";
import dancingMascot from "../mascot-dancing.jpg";

import "../styles/question.css";
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

  return (
    <div className="question-card">
      <QuestionHeader text={header} locationState={locationState} />
      <div className="problem-wrapper">
        <div className="mascot">
          <img src={mascot} width="120px" alt="mascot" />
        </div>
        <div className="mascot-speech-bubble">
          <p>{text}</p>
        </div>
      </div>
      <WordbankSolution
        wordBank={wordBank}
        selected={selected}
        setSelected={setSelected}
        setWordBank={setWordBank}
      />
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
