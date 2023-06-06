import { useState, useEffect } from "react";

import QuestionHeader from "./QuestionHeader";
import WordbankSolution from "./WordbankSolution";
import CheckAnswer from "./CheckAnswer";

import { handleCheckAnswer, createUserSolution } from "../../utils";

import "../../styles/question.css";
import "../../styles/translationCard.css";

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
    const mascots = [
      `${process.env.PUBLIC_URL}/images/mascots/mascot-5r.png`,
      `${process.env.PUBLIC_URL}/images/mascots/mascot-4r.png`,
      `${process.env.PUBLIC_URL}/images/mascots/mascot-3l.png`,
      `${process.env.PUBLIC_URL}/images/mascots/mascot-1r.jpg`,
    ];
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
          <img src={mascot} alt="mascot" />
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
        translationType={true}
      />
    </div>
  );
};

export default TranslationCard;
