import { useState } from "react";
import QuestionHeader from "./QuestionHeader";
import Choice from "./Choice";
import CheckAnswer from "./CheckAnswer";
import { capitalize, handleCheckAnswer } from "../utils";
import "../styles/multipleChoiceCard.css";

const MultipleChoiceCard = ({
  onNextQuestion,
  text,
  solution,
  choices,
  addMistake,
  normalizedSolution,
  locationState,
}) => {
  const [userChoice, setUserChoice] = useState("");
  const [result, setResult] = useState("");

  const handleOptionChange = (event) => setUserChoice(event.target.value);

  const answerChoices = choices.map((choice, index) => (
    <Choice
      key={index}
      value={choice}
      choiceState={userChoice}
      onOptionChange={handleOptionChange}
    />
  ));

  return (
    <div className="multiple-choice-card">
      <QuestionHeader locationState={locationState} text={text} />
      <div className="mc-card-middle">
        <div className="choices-container">
          <form className="mc-form">{answerChoices}</form>
        </div>
      </div>
      <CheckAnswer
        result={result}
        onCheckAnswer={handleCheckAnswer}
        onNextQuestion={onNextQuestion}
        solution={capitalize(solution)}
        normalizedSolution={normalizedSolution}
        userSolution={userChoice}
        addMistake={addMistake}
        setResult={setResult}
      />
    </div>
  );
};

export default MultipleChoiceCard;
