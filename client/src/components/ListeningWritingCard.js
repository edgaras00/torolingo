import { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import CheckAnswer from "./CheckAnswer";
import AudioBox from "./AudioBox";
import { handleCheckAnswer } from "../utils";

import "../styles/question.css";
import "../styles/listeningWritingCard.css";

const ListeningWritingCard = ({
  onNextQuestion,
  solution,
  normalizedSolution,
  audio,
  slowAudio,
  addMistake,
  normalizeText,
  translation,
  locationState,
}) => {
  const [inputText, setInputText] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="question-card">
      <QuestionHeader text="Type what you hear" locationState={locationState} />
      <AudioBox audio={audio} slowAudio={slowAudio} />
      <div className="form-container">
        <form className="writing-form">
          <textarea
            className="solution-text"
            name="input-text"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
        </form>
      </div>
      <CheckAnswer
        solution={solution}
        result={result}
        onNextQuestion={onNextQuestion}
        onCheckAnswer={handleCheckAnswer}
        translation={translation}
        userSolution={normalizeText(inputText)}
        normalizedSolution={normalizedSolution}
        listening={true}
        setResult={setResult}
        addMistake={addMistake}
      />
    </div>
  );
};

export default ListeningWritingCard;
