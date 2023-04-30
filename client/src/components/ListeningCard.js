import { useState, useEffect } from "react";
import QuestionHeader from "./QuestionHeader";
import AudioBox from "./AudioBox";
import WordbankSolution from "./WordbankSolution";
import CheckAnswer from "./CheckAnswer";

import { handleCheckAnswer, createUserSolution } from "../utils";

import "../styles/question.css";

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

  useEffect(() => {
    const solution = createUserSolution(selected);
    setUserSolution(solution);
  }, [selected]);

  return (
    <div className="question-card">
      <QuestionHeader text="Tap what you hear" locationState={locationState} />
      <AudioBox audio={audio} slowAudio={slowAudio} />
      <WordbankSolution
        wordBank={wordBank}
        selected={selected}
        setSelected={setSelected}
        setWordBank={setWordBank}
      />
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
